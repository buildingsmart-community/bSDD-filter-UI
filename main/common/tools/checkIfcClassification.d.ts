import { BsddDictionary, URI } from '../IfcData/bsddBridgeData';
import { IfcEntity } from '../IfcData/ifc';
export type ClassificationStatus = URI | null;
/**
 * Retrieves the classification URI for the given IFC entity from the provided bSDD dictionary, if it is associated with a classification.
 *
 * @param ifcEntity - The IFC entity to check for classification associations.
 * @param bsddDictionary - The bSDD dictionary containing the classification dictionary.
 * @returns The URI of the classification dictionary if found, otherwise null.
 */
declare function getClassUriFromDictionary(ifcEntity: IfcEntity, bsddDictionary: BsddDictionary): ClassificationStatus;
export default getClassUriFromDictionary;
