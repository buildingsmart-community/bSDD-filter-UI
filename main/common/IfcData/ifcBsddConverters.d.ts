import { DictionaryClassesResponseContractV1Classes, DictionaryContractV1 } from '../BsddApi/BsddApiBase';
import { IfcClassification } from './ifc';
/**
 * Converts a BSDD dictionary to an IfcClassification object.
 * @param bsddDictionary The BSDD dictionary to convert.
 * @returns The converted IfcClassification object.
 */
export declare function convertBsddDictionaryToIfcClassification(bsddDictionary: DictionaryContractV1 | DictionaryClassesResponseContractV1Classes): IfcClassification;
export declare function getIfcClassAndPredefinedType(relatedIfcEntityName: string | null | undefined): {
    type: string | undefined;
    predefinedType: string | undefined;
};
