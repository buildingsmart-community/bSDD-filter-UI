import { ClassContractV1 } from './BsddApiBase';

/**
 * Retrieves the URIs of applicable classifications for showing properties based on the provided dictionary classification.
 * Only returns classifications that are parents of the dictionary classification.
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
 * Retrieves the URIs of applicable slicer classifications based on the provided dictionary classification.
 *
 * @param {ClassContractV1 | null} dictionaryClassification - The dictionary classification object.
 * @param {string | undefined} ifcDictionaryUri - The URI of the IFC dictionary.
 * @returns {string[]} An array of URIs representing the applicable slicer classifications.
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
  return filteredClassificationUris;
}
