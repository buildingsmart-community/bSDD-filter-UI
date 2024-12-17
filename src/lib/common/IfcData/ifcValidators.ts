import { ThunkDispatch, UnknownAction } from '@reduxjs/toolkit';

import type { AppDispatch, RootState } from '../app/store';
import { ClassListItemContractV1, DictionaryClassesResponseContractV1 } from '../BsddApi/BsddApiBase';
import { fetchDictionaryClasses, getDictionary, selectDictionary, selectDictionaryClasses } from '../slices/bsddSlice';
import { BsddDictionary } from './bsddBridgeData';
import {
  Association,
  IfcClassification,
  IfcClassificationReference,
  IfcEntity,
  IfcProperty,
  IfcPropertyEnumeratedValue,
  IfcPropertySet,
  IfcPropertySingleValue,
} from './ifc';
import { convertBsddDictionaryToIfcClassification } from './ifcBsddConverters';

type ValidationState = 'valid' | 'invalid' | 'fixed';

type ValidationResult = {
  ifcClassificationReference: IfcClassificationReference;
  validationState: ValidationState;
  message: string | null;
};

/**
 * Fetches classes based on the referenced source location.
 * @param {IfcClassificationReference['referencedSource']} referencedSource - The referenced source from the IfcClassificationReference.
 * @param {RootState} state - The current state of the Redux store.
 * @param {AppDispatch} dispatch - The dispatch function from Redux.
 * @returns {Promise<ClassListItemContractV1[] | null>} - The fetched classes or null if fetching fails.
 */
const fetchBsddClasses = async (
  ifcClassificationReference: IfcClassificationReference,
  state: RootState,
  dispatch: ThunkDispatch<unknown, unknown, UnknownAction>,
): Promise<ClassListItemContractV1[] | null> => {
  const { referencedSource } = ifcClassificationReference;

  const location = referencedSource?.location ?? ifcClassificationReference.location; // hacky catch to search for IfcClassification.location in referencedSource.location if it is missing
  if (!location) return null;

  const classes = selectDictionaryClasses(state, location);
  if (classes) return classes;

  const result = await dispatch(fetchDictionaryClasses(location));
  if (result.payload) {
    return result.payload as ClassListItemContractV1[];
  }
  console.error('Failed to fetch dictionary classes');
  return null;
};

/**
 * Finds a bsddClass from the classes based on the IfcClassificationReference.
 * @param {ClassListItemContractV1[] | null} classes - The classes to search in.
 * @param {IfcClassificationReference} ifcReference - The IfcClassificationReference to match.
 * @returns {ClassListItemContractV1 | null} - The found bsddClass or null if no match is found.
 */
const findBsddClass = (
  classes: ClassListItemContractV1[] | null,
  ifcReference: IfcClassificationReference,
): ClassListItemContractV1 | null => {
  if (!classes) return null;

  let bsddClass =
    classes.find(
      (dictionaryClass) => dictionaryClass.code?.toUpperCase() === ifcReference.identification?.toUpperCase(),
    ) || null;

  if (!bsddClass) {
    bsddClass =
      classes.find((dictionaryClass) => dictionaryClass.name?.toUpperCase() === ifcReference.name?.toUpperCase()) ||
      null;
  }
  return bsddClass;
};

/**
 * Finds a matched class based on the given IfcClassificationReference.
 *
 * @param ifcClassificationReference - The IfcClassificationReference to match against.
 * @param classes - The array of ClassListItemContractV1 objects to search in.
 * @returns The matched ClassListItemContractV1 object, if found. Otherwise, undefined.
 */
function findMatchedClass(
  ifcClassificationReference: IfcClassificationReference,
  classes: ClassListItemContractV1[],
): ClassListItemContractV1 | undefined {
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

/**
 * Handles an error by logging the error message and returning a ValidationResult object.
 * @param message - The error message to be logged.
 * @param ifcClassificationReference - The IfcClassificationReference object associated with the error.
 * @returns A ValidationResult object with the error details.
 */
function handleError(message: string, ifcClassificationReference: IfcClassificationReference): ValidationResult {
  console.error(message);
  return { ifcClassificationReference, validationState: 'invalid', message };
}

/**
 * Patches the IfcClassificationReference by setting the location and other properties based on the referenced source.
 * @param ifcClassificationReference - The IfcClassificationReference object to be patched.
 * @param dispatch - The dispatch function from the Redux Thunk middleware.
 * @param state - The RootState object from the Redux store.
 * @returns A Promise that resolves to a ValidationResult object.
 */
export async function patchIfcClassificationReference(
  ifcClassificationReference: IfcClassificationReference,
  dispatch: ThunkDispatch<unknown, unknown, UnknownAction>,
  state: RootState,
): Promise<ValidationResult> {
  if (ifcClassificationReference.location) {
    // TODO: when the location is set we can further improve the IfcClassificationReference
    return { ifcClassificationReference, validationState: 'valid', message: 'Location is already set' };
  }

  if (!ifcClassificationReference.referencedSource || !ifcClassificationReference.referencedSource.location) {
    return handleError(
      'Cannot patch IfcClassificationReference: missing referencedSource or its location',
      ifcClassificationReference,
    );
  }

  const classes = await fetchBsddClasses(ifcClassificationReference, state, dispatch);
  if (!classes) {
    return handleError('Failed to fetch classes for the referencedSource location', ifcClassificationReference);
  }

  const matchedClass = findMatchedClass(ifcClassificationReference, classes);
  if (!matchedClass) {
    return handleError(
      'Failed to find a match for the IfcClassificationReference code or name in the classes',
      ifcClassificationReference,
    );
  }

  if (!matchedClass.uri) {
    return handleError('Failed to find a URI for the matched class', ifcClassificationReference);
  }

  const { uri, code, name } = matchedClass;

  const newIfcClassificationReference: IfcClassificationReference = {
    ...ifcClassificationReference,
    location: uri ?? undefined,
    identification: code ?? undefined,
    name: name ?? undefined,
  };

  if (!newIfcClassificationReference.referencedSource || !newIfcClassificationReference.referencedSource.location) {
    return handleError('referencedSource or its location is missing', newIfcClassificationReference);
  }

  const bsddDictionary = selectDictionary(state, newIfcClassificationReference.referencedSource.location);
  if (!bsddDictionary) {
    return handleError('Failed to find a matching dictionary for the matched class', newIfcClassificationReference);
  }

  newIfcClassificationReference.referencedSource = convertBsddDictionaryToIfcClassification(bsddDictionary);

  return {
    ifcClassificationReference: newIfcClassificationReference,
    validationState: 'fixed',
    message: null,
  };
}

/**
 * Validates the bsddDictionary IfcClassification. If valid, returns a new object with parameterMapping and IfcClassification.
 * If the bsddDictionary or the ifcClassification location is null, returns null.
 *
 * @param state - The RootState object.
 * @param bsddDictionary - The BsddDictionary object to validate.
 * @returns A new BsddDictionary object or null.
 */
export async function validateDictionary(
  state: RootState,
  dispatch: AppDispatch,
  bsddDictionary: BsddDictionary | null,
): Promise<BsddDictionary | null> {
  if (!bsddDictionary?.ifcClassification.location) return null;
  const dictionary = await getDictionary(state, dispatch, bsddDictionary.ifcClassification.location);
  if (!dictionary) return null;

  const ifcClassification = convertBsddDictionaryToIfcClassification(dictionary);

  return {
    parameterMapping: bsddDictionary.parameterMapping,
    ifcClassification,
  };
}

/**
 * Converts an IFC entity name to its corresponding IfcTypeProduct name, even if it is an IfcProduct.
 *
 * @param ifcEntity - The IFC entity name to convert.
 * @returns The corresponding IfcTypeProduct name.
 */
function ifcEntityAsType(ifcEntity: string) {
  return ifcEntity.endsWith('Type') ? ifcEntity.slice(0, -4) : ifcEntity;
}

/**
 * Converts an IFC entity name to its corresponding IfcProduct name, even if it is an IfcTypeProduct.
 *
 * @param ifcEntity - The IFC entity name to convert.
 * @returns The corresponding IfcProduct name.
 */
function ifcEntityAsInstance(ifcEntity: string) {
  return ifcEntity.endsWith('Type') ? ifcEntity : `${ifcEntity}Type`;
}

/**
 * Converts the given `type` and `predefinedType` into the bSDD IFC dictionary code.
 *
 * @param type - The type of the entity.
 * @param predefinedType - The predefined type of the entity.
 * @returns The concatenated string of `type` and `predefinedType`.
 */
function ifcEntityToBsddClass(type: string | undefined, predefinedType: string | undefined): string {
  const validPredefinedType = predefinedType !== 'NOTDEFINED' && predefinedType !== 'USERDEFINED' ? predefinedType : '';
  return (type ?? '') + (validPredefinedType ?? '');
}

/**
 * Creates an IfcClassificationReference object based on the provided parameters.
 * @param ifcEntity - The IfcEntity object.
 * @param referencedSource - The IfcClassification object or undefined.
 * @returns The created IfcClassificationReference object or null if the entity type is not defined.
 */
function bsddIfcClassification(
  ifcEntity: IfcEntity,
  referencedSource?: IfcClassification,
): IfcClassificationReference | null {
  if (!ifcEntity.type) {
    return null;
  }

  const identification = ifcEntityToBsddClass(ifcEntity.type, ifcEntity.predefinedType);
  const location = referencedSource?.location ? `${referencedSource.location}/class/${identification}` : undefined;

  return {
    type: 'IfcClassificationReference',
    identification,
    location,
    referencedSource,
  };
}

/**
 * Processes a list of associations, validating and potentially modifying them.
 * 
 * @param associations - The list of associations to process.
 * @param dispatch - The dispatch function for triggering actions.
 * @param state - The current state of the application.
 * @returns A promise that resolves to a list of processed associations, 
 *          with invalid associations filtered out.
 */
async function processAssociations(
  associations: Association[],
  dispatch: any,
  state: RootState,
): Promise<Association[]> {
  const processedAssociations = await Promise.all(
    associations.map(async (association) => {
      if (association.type === 'IfcClassificationReference') {
        const { ifcClassificationReference, validationState, message } = await patchIfcClassificationReference(
          association,
          dispatch,
          state,
        );
        if (validationState === 'invalid') {
          return null;
        }
        return ifcClassificationReference;
      }
      return association;
    }),
  );
  return processedAssociations.filter((association) => association !== null) as Association[];
}

/**
 * Merges properties from multiple IfcPropertySet objects into a single array of unique properties.
 * 
 * @param propertySets - An array of IfcPropertySet objects containing properties to be merged.
 * @returns An array of unique properties, which can be of type IfcProperty, IfcPropertySingleValue, or IfcPropertyEnumeratedValue.
 */
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

/**
 * Merges an array of IfcPropertySet objects into a single array of unique IfcPropertySet objects.
 *
 * @param propertySets - An array of IfcPropertySet objects to be merged.
 * @returns An array of merged IfcPropertySet objects with unique names.
 */
const mergePropertySets = (propertySets: IfcPropertySet[]): IfcPropertySet[] => {
  const propertySetMap: Map<string, IfcPropertySet> = new Map();

  for (const ps of propertySets) {
    const key = ps.name || '';
    if (!propertySetMap.has(key)) {
      propertySetMap.set(key, {
        type: 'IfcPropertySet',
        name: ps.name,
        hasProperties: mergeProperties([ps]),
      });
    } else {
      const existingSet = propertySetMap.get(key)!;
      existingSet.hasProperties = mergeProperties([existingSet, ps]);
    }
  }

  return Array.from(propertySetMap.values());
};

/**
 * Validates the IFC data by checking and fixing the associations and property sets of each IFC entity.
 *
 * @param ifcEntities - The array of IFC entities to be validated.
 * @param state - The current state of the Redux store.
 * @param dispatch - The Redux dispatch function.
 * @returns A Promise that resolves to an array of validated IFC entities.
 */
export const validateIfcData = async (
  ifcEntities: IfcEntity[],
  state: RootState,
  dispatch: ThunkDispatch<unknown, unknown, UnknownAction>,
): Promise<IfcEntity[]> => {
  const validatedIfcEntities: IfcEntity[] = await Promise.all(
    ifcEntities.map(async (ifcEntity) => {
      if (ifcEntity.type) {
        ifcEntity.type = ifcEntityAsType(ifcEntity.type);
      }
      let associations: Association[];
      const ifcClass = bsddIfcClassification(ifcEntity, state.settings.ifcDictionary?.ifcClassification);
      if (ifcClass) {
        associations = [ifcClass, ...(ifcEntity.hasAssociations || [])];
      } else {
        associations = [...(ifcEntity.hasAssociations || [])];
      }

      const processedAssociations = await processAssociations(associations, dispatch, state);

      const mergedPropertySets = ifcEntity.isDefinedBy ? mergePropertySets(ifcEntity.isDefinedBy) : undefined;

      return { ...ifcEntity, hasAssociations: processedAssociations, isDefinedBy: mergedPropertySets };
    }),
  );

  return validatedIfcEntities;
};
