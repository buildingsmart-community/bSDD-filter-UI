import { ClassContractV1 } from '../../../../shared/bsdd-api/generated/types.gen';
/**
 * Returns the URIs of classifications that are parents of the given class —
 * used to determine which property-set classes to show.
 */
export declare function getPropertyClassificationUris(dictionaryClassification: ClassContractV1 | null): string[];
/**
 * Returns all related classification URIs used by the slicer (IFC entities +
 * all class relations and reverse relations).
 */
export declare function getSlicerClassificationUris(dictionaryClassification: ClassContractV1 | null, ifcDictionaryUri: string | null | undefined): string[];
