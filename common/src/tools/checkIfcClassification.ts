import { BsddDictionary, URI } from '../ifc/bsddBridgeData';
import { Association, IfcClassification, IfcClassificationReference, IfcEntity } from '../ifc/ifc';

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
 * Retrieves the classification URI for the given IFC entity from the provided bSDD dictionary, if it is associated with a classification.
 *
 * @param ifcEntity - The IFC entity to check for classification associations.
 * @param bsddDictionary - The bSDD dictionary containing the classification dictionary.
 * @returns The URI of the classification dictionary if found, otherwise null.
 */
function getClassUriFromDictionary(ifcEntity: IfcEntity, bsddDictionary: BsddDictionary): ClassificationStatus {
  const associations = ifcEntity.hasAssociations;
  if (!associations) {
    return null;
  }

  const foundAssociation = associations.find(
    (association) =>
      isIfcClassificationReference(association) &&
      checkIfcClassificationUri(
        bsddDictionary.ifcClassification?.location as string,
        association as IfcClassificationReference,
      ),
  );

  return foundAssociation ? (bsddDictionary.ifcClassification?.location as ClassificationStatus) : null;
}

export default getClassUriFromDictionary;
