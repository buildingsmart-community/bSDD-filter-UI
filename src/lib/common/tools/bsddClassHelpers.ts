// Purpose: Utility functions for deriving related class URIs from a bSDD class
import type { ClassContractV1 } from '../../../../shared/bsdd-api/generated/types.gen';

/**
 * Returns the URIs of classifications that are parents of the given class —
 * used to determine which property-set classes to show.
 */
export function getPropertyClassificationUris(dictionaryClassification: ClassContractV1 | null): string[] {
  if (!dictionaryClassification) return [];

  const classRelationUris = (dictionaryClassification.classRelations ?? [])
    .filter((r) => r.relationType === 'IsChildOf')
    .map((r) => r.relatedClassUri);

  const reverseClassRelationUris = (dictionaryClassification.reverseClassRelations ?? [])
    .filter((r) => r.relationType === 'IsParentOf')
    .map((r) => r.classUri);

  return Array.from(new Set([...classRelationUris, ...reverseClassRelationUris]));
}

/**
 * Returns all related classification URIs used by the slicer (IFC entities +
 * all class relations and reverse relations).
 */
export function getSlicerClassificationUris(
  dictionaryClassification: ClassContractV1 | null,
  ifcDictionaryUri: string | null | undefined,
): string[] {
  if (!dictionaryClassification) return [];

  const relatedIfcEntityUris = ifcDictionaryUri
    ? (dictionaryClassification.relatedIfcEntityNames ?? []).map(
        (name) => `${ifcDictionaryUri}/class/${name}`,
      )
    : [];

  const classRelationUris = (dictionaryClassification.classRelations ?? []).map((r) => r.relatedClassUri);
  const reverseClassRelationUris = (dictionaryClassification.reverseClassRelations ?? []).map((r) => r.classUri);

  return Array.from(new Set([...relatedIfcEntityUris, ...classRelationUris, ...reverseClassRelationUris]));
}
