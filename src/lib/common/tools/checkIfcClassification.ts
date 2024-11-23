import { BsddDictionary, URI } from '../IfcData/bsddBridgeData';
import { Association, IfcClassification, IfcClassificationReference, IfcEntity } from '../IfcData/ifc';

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
 * Retrieves a map of classification URIs for the given IFC entity from the provided list of bSDD dictionaries, if they are associated with a classification.
 *
 * @param ifcEntity - The IFC entity to check for classification associations.
 * @param bsddDictionaries - The list of bSDD dictionaries containing the classification dictionaries.
 * @returns A map of URIs of the classification dictionaries if found, otherwise null for each dictionary.
 */
export function getClassUrisFromDictionaries(
  ifcEntity: IfcEntity,
  bsddDictionaries: BsddDictionary[],
): Record<string, ClassificationStatus> {
  const associations = ifcEntity.hasAssociations;
  const result: Record<string, ClassificationStatus> = {};

  bsddDictionaries.forEach((bsddDictionary) => {
    const { ifcClassification } = bsddDictionary;
    const location = ifcClassification?.location || '';
    const foundAssociation = associations?.find(
      (association) =>
        isIfcClassificationReference(association) &&
        checkIfcClassificationUri(location, association as IfcClassificationReference),
    );

    result[location] = foundAssociation ? (foundAssociation as IfcClassificationReference).location || null : null;
  });

  return result;
}
