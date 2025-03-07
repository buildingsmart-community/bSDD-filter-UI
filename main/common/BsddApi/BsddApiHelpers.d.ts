import { ClassContractV1 } from './BsddApiBase';
/**
 * Retrieves the URIs of applicable classifications for showing properties based on the provided dictionary classification.
 * Only returns classifications that are parents of the dictionary classification.
 *
 * @param {ClassContractV1 | null} dictionaryClassification - The dictionary classification object.
 * @returns {string[]} An array of URIs representing the applicable classifications.
 */
export declare function getPropertyClassificationUris(dictionaryClassification: ClassContractV1 | null): string[];
/**
 * Retrieves the URIs of applicable slicer classifications based on the provided dictionary classification.
 *
 * @param {ClassContractV1 | null} dictionaryClassification - The dictionary classification object.
 * @param {string | undefined} ifcDictionaryUri - The URI of the IFC dictionary.
 * @returns {string[]} An array of URIs representing the applicable slicer classifications.
 */
export declare function getSlicerClassificationUris(dictionaryClassification: ClassContractV1 | null, ifcDictionaryUri: string | null | undefined): string[];
