import { BsddDictionary, URI } from '../IfcData/bsddBridgeData';
import { Association, IfcClassification, IfcClassificationReference, IfcEntity } from '../IfcData/ifc';
import { ifcEntityToBsddClass } from '../IfcData/ifcValidators';

export type ClassificationStatus = URI | null;

/**
 * Checks if the given association is an instance of IfcClassificationReference.
 * @param association The association to check.
 * @returns True if the association is an instance of IfcClassificationReference, false otherwise.
 */
function isIfcClassificationReference(association: Association): association is IfcClassificationReference {
  const { type } = association;
  return type === 'IfcClassificationReference';
}

/**
 * Checks if the given classification URI matches the location of the referenced IfcClassification.
 * @param classificationUri The URI of the classification to check.
 * @param classificationReference The IfcClassificationReference containing the referenced IfcClassification.
 * @returns True if the classification location matches the given URI, false otherwise.
 */
function checkIfcClassificationUri(
  classificationUri: URI,
  classificationReference: IfcClassificationReference,
): boolean {
  const classification: IfcClassification | undefined = classificationReference.referencedSource;
  if (classification && classification.location) {
    return classification.location === classificationUri;
  }
  return false;
}

/**
 * Generates a classification URI for the given IFC entity.
 * @param ifcDictionaryUri The URI of the IFC dictionary.
 * @param ifcEntity The IFC entity.
 * @returns The generated classification URI.
 */
function constructIfcEntityIdentifier(ifcDictionaryUri: string, ifcEntity: IfcEntity): string {
  const identification = ifcEntityToBsddClass(ifcEntity.type, ifcEntity.predefinedType);
  return `${ifcDictionaryUri}/class/${identification}`;
}

export function getClassUrisFromDictionaries(
  ifcEntity: IfcEntity,
  bsddDictionaries: BsddDictionary[],
  ifcDictionaryUri?: string,
): Record<string, ClassificationStatus> {
  const associations = ifcEntity.hasAssociations || [];
  const result: Record<string, ClassificationStatus> = {};

  bsddDictionaries.forEach((bsddDictionary) => {
    const location = bsddDictionary.ifcClassification?.location || '';

    if (ifcDictionaryUri && location === ifcDictionaryUri) {
      result[ifcDictionaryUri] = constructIfcEntityIdentifier(ifcDictionaryUri, ifcEntity);
    } else {
      const foundAssociation = associations.some(
        (association) =>
          isIfcClassificationReference(association) &&
          checkIfcClassificationUri(location, association as IfcClassificationReference),
      );

      result[location] = foundAssociation ? location : null;
    }
  });

  return result;
}
