import { BsddDictionary, URI } from '../IfcData/bsddBridgeData';
import { IfcEntity } from '../IfcData/ifc';
export type ClassificationStatus = URI | null;
export declare function getClassUrisFromDictionaries(ifcEntity: IfcEntity, bsddDictionaries: BsddDictionary[], ifcDictionaryUri?: string): Record<string, ClassificationStatus>;
