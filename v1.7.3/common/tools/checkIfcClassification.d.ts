import { BsddDictionary, URI } from '../IfcData/bsddBridgeData';
import { IfcEntity } from '../IfcData/ifc';
export type ClassificationStatus = URI | null;
/**
 * Retrieves a map of classification URIs for the given IFC entity from the provided list of bSDD dictionaries, if they are associated with a classification.
 *
 * @param ifcEntity - The IFC entity to check for classification associations.
 * @param bsddDictionaries - The list of bSDD dictionaries containing the classification dictionaries.
 * @returns A map of URIs of the classification dictionaries if found, otherwise null for each dictionary.
 */
export declare function getClassUrisFromDictionaries(ifcEntity: IfcEntity, bsddDictionaries: BsddDictionary[]): Record<string, ClassificationStatus>;
