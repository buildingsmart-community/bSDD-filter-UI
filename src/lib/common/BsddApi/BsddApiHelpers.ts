import { defaultEnvironment } from '../env';
import { BsddApi } from './BsddApi';
import { ClassContractV1, DictionaryContractV1 } from './BsddApiBase';
import { bsddEnvironments } from './BsddApiEnvironments';

let bsddApiBaseUri: string = bsddEnvironments[defaultEnvironment];
let bsddApi: BsddApi<unknown> = new BsddApi(bsddApiBaseUri);

let classCache: { [key: string]: ClassContractV1 } = {};
let dictionaryCache: { [key: string]: DictionaryContractV1 } = {};

// Function to get data from API with caching
export async function getBsddClass(
  bsddEnvironmentUri: string,
  uri: string,
  // languageCode: string | null,
): Promise<ClassContractV1> {
  // reset cache if environment changes
  if (bsddApiBaseUri !== bsddEnvironmentUri) {
    bsddApiBaseUri = bsddEnvironmentUri;
    bsddApi = new BsddApi(bsddApiBaseUri);
    classCache = {};
  }

  if (classCache[uri]) {
    return classCache[uri];
  }
  const response = await bsddApi.api.classGet({
    Uri: uri,
    IncludeClassProperties: true,
    IncludeChildClassReferences: true,
    IncludeClassRelations: true,
    IncludeReverseRelations: true,
    // languageCode: languageCode || undefined,
  });
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const { data } = response;
  classCache[uri] = data;
  return data;
}

export async function getBsddDictionary(bsddEnvironmentUri: string, uri: string): Promise<DictionaryContractV1> {
  // reset cache if environment changes
  if (bsddApiBaseUri !== bsddEnvironmentUri) {
    bsddApiBaseUri = bsddEnvironmentUri;
    bsddApi = new BsddApi(bsddApiBaseUri);
    dictionaryCache = {};
  }

  if (dictionaryCache[uri]) {
    return dictionaryCache[uri];
  }
  const response = await bsddApi.api.dictionaryGet({ Uri: uri });
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = response.data.dictionaries;
  if (!data || data.length === 0) {
    throw new Error(`No dictionary found for uri: ${uri}`);
  }
  [dictionaryCache[uri]] = data;
  return data[0];
}

/**
 * Retrieves the URIs of applicable classifications based on the provided dictionary classification.
 *
 * @param {ClassContractV1 | null} dictionaryClassification - The dictionary classification object.
 * @returns {string[]} An array of URIs representing the applicable classifications.
 */
export function getPropertyClassificationUris(dictionaryClassification: ClassContractV1 | null): string[] {
  if (!dictionaryClassification) return [];

  const classRelations = dictionaryClassification.classRelations || [];
  const reverseClassRelations = dictionaryClassification.reverseClassRelations || [];

  const classRelationUris = classRelations
    .filter((relation) => relation.relationType === 'IsChildOf')
    .map((relation) => relation.relatedClassUri);

  const reverseClassRelationUris = reverseClassRelations
    .filter((relation) => relation.relationType === 'IsParentOf')
    .map((relation) => relation.classUri);

  return Array.from(new Set([...classRelationUris, ...reverseClassRelationUris]));
}

/**
 * Retrieves the URIs of applicable classifications based on the provided dictionary classification.
 *
 * @param {ClassContractV1 | null} dictionaryClassification - The dictionary classification object.
 * @returns {string[]} An array of URIs representing the applicable classifications.
 */
export function getSlicerClassificationUris(
  dictionaryClassification: ClassContractV1 | null,
  ifcDictionaryUri: string | undefined,
): string[] {
  if (!dictionaryClassification) return [];

  const relatedIfcEntityNames = dictionaryClassification.relatedIfcEntityNames || [];
  const relatedIfcEntityUris = ifcDictionaryUri
    ? relatedIfcEntityNames.map((entityName) => `${ifcDictionaryUri}/class/${entityName}`)
    : [];
  const classRelations = dictionaryClassification.classRelations || [];
  const reverseClassRelations = dictionaryClassification.reverseClassRelations || [];

  const classRelationUris = classRelations.map((relation) => relation.relatedClassUri);

  const reverseClassRelationUris = reverseClassRelations.map((relation) => relation.classUri);

  const filteredClassificationUris = Array.from(
    new Set([...relatedIfcEntityUris, ...classRelationUris, ...reverseClassRelationUris]),
  );
  console.log('filteredClassificationUris', filteredClassificationUris);
  return filteredClassificationUris;
}
