import { DictionaryClassesResponseContractV1, DictionaryContractV1 } from '../BsddApi/BsddApiBase';
import { IfcClassification } from './ifc';

/**
 * Converts a BSDD dictionary to an IfcClassification object.
 * @param bsddDictionary The BSDD dictionary to convert.
 * @returns The converted IfcClassification object.
 */
export function convertBsddDictionaryToIfcClassification(
  bsddDictionary: DictionaryContractV1 | DictionaryClassesResponseContractV1,
): IfcClassification {
  return {
    type: 'IfcClassification',
    source: bsddDictionary?.organizationCodeOwner,
    edition: bsddDictionary?.version || undefined,
    editionDate: bsddDictionary?.releaseDate || undefined,
    name: bsddDictionary?.name,
    location: bsddDictionary?.uri,
    // specification: bsddDictionary?.uri,
  };
}
