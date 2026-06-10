import type { QueryClient } from '@tanstack/react-query';

import type {
  ClassListItemContractV1Classes,
  DictionaryContractV1,
} from '../../../../shared/bsdd-api/generated/types.gen';
import type { BsddDictionary } from '../../common/IfcData/bsddBridgeData';
import type {
  Association,
  IfcClassificationReference,
  IfcEntity,
  IfcProperty,
  IfcPropertyEnumeratedValue,
  IfcPropertySet,
  IfcPropertySingleValue,
} from '../../common/IfcData/ifc';
import { convertBsddDictionaryToIfcClassification } from '../../common/IfcData/ifcBsddConverters';
import { fetchAllDictionaryClasses, fetchDictionaryByUri } from '../fetchers/dictionaries';
import { bsddKeys } from '../queryKeys';

type ValidationState = 'valid' | 'fixed';

type ValidationResult = {
  ifcClassificationReference: IfcClassificationReference;
  validationState: ValidationState;
  message: string | null;
};

async function ensureDictionaryClasses(
  queryClient: QueryClient,
  location: string,
  language: string,
): Promise<ClassListItemContractV1Classes[] | null> {
  try {
    return await queryClient.ensureQueryData({
      queryKey: bsddKeys.dictionaryClasses(location, language),
      queryFn: () => fetchAllDictionaryClasses(location, language),
    });
  } catch {
    console.error('Failed to fetch dictionary classes');
    return null;
  }
}

async function ensureDictionary(queryClient: QueryClient, location: string): Promise<DictionaryContractV1 | null> {
  try {
    return await queryClient.ensureQueryData({
      queryKey: bsddKeys.dictionary(location),
      queryFn: () => fetchDictionaryByUri(location),
    });
  } catch {
    console.error(`Failed to fetch dictionary for location: ${location}`);
    return null;
  }
}

function findMatchedClass(
  ifcClassificationReference: IfcClassificationReference,
  classes: ClassListItemContractV1Classes[],
): ClassListItemContractV1Classes | undefined {
  if (ifcClassificationReference.identification) {
    return classes.find(
      (dictionaryClass) =>
        dictionaryClass.code?.toUpperCase() === ifcClassificationReference.identification?.toUpperCase(),
    );
  }
  return classes.find(
    (dictionaryClass) => dictionaryClass.name?.toUpperCase() === ifcClassificationReference.name?.toUpperCase(),
  );
}

export async function patchIfcClassificationReference(
  ifcClassificationReference: IfcClassificationReference,
  queryClient: QueryClient,
  language: string,
): Promise<ValidationResult> {
  if (ifcClassificationReference.location) {
    return { ifcClassificationReference, validationState: 'valid', message: 'Location is already set' };
  }

  const location = ifcClassificationReference.referencedSource?.location;
  if (!location) {
    // No dictionary to look up against — pass through unchanged.
    return { ifcClassificationReference, validationState: 'valid', message: null };
  }

  const classes = await ensureDictionaryClasses(queryClient, location, language);
  if (!classes) {
    // ensureDictionaryClasses already logs the network error — pass through unchanged.
    return { ifcClassificationReference, validationState: 'valid', message: null };
  }

  const matchedClass = findMatchedClass(ifcClassificationReference, classes);
  if (!matchedClass) {
    // No matching class found — pass through unchanged rather than dropping the reference.
    return { ifcClassificationReference, validationState: 'valid', message: null };
  }

  if (!matchedClass.uri) {
    return { ifcClassificationReference, validationState: 'valid', message: null };
  }

  const { uri, code, name } = matchedClass;

  const newRef: IfcClassificationReference = {
    ...ifcClassificationReference,
    location: uri ?? undefined,
    identification: code ?? undefined,
    name: name ?? undefined,
  };

  if (!newRef.referencedSource?.location) {
    return { ifcClassificationReference: newRef, validationState: 'valid', message: null };
  }

  const bsddDictionary = await ensureDictionary(queryClient, newRef.referencedSource.location);
  if (!bsddDictionary) {
    return { ifcClassificationReference: newRef, validationState: 'valid', message: null };
  }

  newRef.referencedSource = convertBsddDictionaryToIfcClassification(bsddDictionary);

  return { ifcClassificationReference: newRef, validationState: 'fixed', message: null };
}

async function processAssociations(
  associations: Association[],
  queryClient: QueryClient,
  language: string,
): Promise<Association[]> {
  return Promise.all(
    associations.map(async (association) => {
      if (association.type === 'IfcClassificationReference') {
        const { ifcClassificationReference } = await patchIfcClassificationReference(association, queryClient, language);
        return ifcClassificationReference;
      }
      return association;
    }),
  );
}

function ifcEntityAsType(ifcEntity: string) {
  return ifcEntity.endsWith('Type') ? ifcEntity.slice(0, -4) : ifcEntity;
}

const mergeProperties = (
  propertySets: IfcPropertySet[],
): (IfcProperty | IfcPropertySingleValue | IfcPropertyEnumeratedValue)[] => {
  const propertyMap: Map<string, IfcProperty | IfcPropertySingleValue | IfcPropertyEnumeratedValue> = new Map();
  for (const propertySet of propertySets) {
    for (const prop of propertySet.hasProperties) {
      if (!propertyMap.has(prop.name)) {
        propertyMap.set(prop.name, prop);
      }
    }
  }
  return Array.from(propertyMap.values());
};

const mergePropertySets = (propertySets: IfcPropertySet[]): IfcPropertySet[] => {
  const propertySetMap: Map<string, IfcPropertySet> = new Map();
  for (const ps of propertySets) {
    const key = ps.name || '';
    if (!propertySetMap.has(key)) {
      propertySetMap.set(key, { type: 'IfcPropertySet', name: ps.name, hasProperties: mergeProperties([ps]) });
    } else {
      const existingSet = propertySetMap.get(key)!;
      existingSet.hasProperties = mergeProperties([existingSet, ps]);
    }
  }
  return Array.from(propertySetMap.values());
};

export async function validateIfcData(
  ifcEntities: IfcEntity[],
  queryClient: QueryClient,
  language: string,
): Promise<IfcEntity[]> {
  return Promise.all(
    ifcEntities.map(async (ifcEntity) => {
      if (ifcEntity.type) {
        ifcEntity.type = ifcEntityAsType(ifcEntity.type);
      }
      const associations: Association[] = [...(ifcEntity.hasAssociations || [])];
      const processedAssociations = await processAssociations(associations, queryClient, language);
      const mergedPropertySets = ifcEntity.isDefinedBy ? mergePropertySets(ifcEntity.isDefinedBy) : undefined;
      return { ...ifcEntity, hasAssociations: processedAssociations, isDefinedBy: mergedPropertySets };
    }),
  );
}

export async function validateDictionary(
  queryClient: QueryClient,
  bsddDictionary: BsddDictionary | null,
): Promise<BsddDictionary | null> {
  if (!bsddDictionary?.ifcClassification.location) return null;
  const dictionary = await ensureDictionary(queryClient, bsddDictionary.ifcClassification.location);
  if (!dictionary) return null;
  const ifcClassification = convertBsddDictionaryToIfcClassification(dictionary);
  return { parameterMapping: bsddDictionary.parameterMapping, ifcClassification };
}

export async function validateSettings(
  queryClient: QueryClient,
  settings: import('../../common/IfcData/bsddBridgeData').BsddSettings,
): Promise<import('../../common/IfcData/bsddBridgeData').BsddSettings> {
  const [validatedMainDictionary, validatedIfcDictionary, validatedFilterDictionaries] = await Promise.all([
    settings.mainDictionary ? validateDictionary(queryClient, settings.mainDictionary) : null,
    settings.ifcDictionary ? validateDictionary(queryClient, settings.ifcDictionary) : null,
    Promise.all(settings.filterDictionaries.map((d) => validateDictionary(queryClient, d))).then((results) =>
      results.filter((d): d is BsddDictionary => d !== null),
    ),
  ]);

  return {
    ...settings,
    mainDictionary: validatedMainDictionary,
    ifcDictionary: validatedIfcDictionary,
    filterDictionaries: validatedFilterDictionaries,
  };
}

export function ifcEntityToBsddClass(type: string | undefined, predefinedType: string | undefined): string {
  const validPredefinedType = predefinedType !== 'NOTDEFINED' && predefinedType !== 'USERDEFINED' ? predefinedType : '';
  return (type ?? '') + (validPredefinedType ?? '');
}
