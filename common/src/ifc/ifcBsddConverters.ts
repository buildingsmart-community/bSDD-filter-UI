import { ClassContractV1, DictionaryClassesResponseContractV1, DictionaryContractV1 } from '../BsddApi/BsddApiBase';
import { IfcClassification, IfcEntity } from './ifc';

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

export function getIfcClassAndPredefinedType(relatedIfcEntityName: string | null | undefined): {
  type: string | undefined;
  predefinedType: string | undefined;
} {
  if (!relatedIfcEntityName) return { type: undefined, predefinedType: undefined };

  const splitIndex =
    relatedIfcEntityName.length - [...relatedIfcEntityName].reverse().findIndex((char) => char === char.toLowerCase());
  const [type, predefinedType] = [
    relatedIfcEntityName.slice(0, splitIndex),
    relatedIfcEntityName.slice(splitIndex),
  ].map((str) => str || undefined);

  return { type, predefinedType };
}

// /**
//  * Converts a BSDD dictionary to an IfcEntity object.
//  * @param bsddClass The BSDD class to convert.
//  * @returns The converted IfcEntity object.
//  */
// export function convertBsddClassToIfcEntity(bsddClass: ClassContractV1): IfcEntity {
//   const { type, predefinedType } = getIfcClassAndPredefinedType(bsddClass?.relatedIfcEntityNames?[0]);

//   const ifcEntity: IfcEntity = {
//     type,
//     name: bsddClass.name,
//     description: bsddClass.description || undefined,
//     tag: undefined,
//     predefinedType,
//   };
//   return ifcEntity;
// }
