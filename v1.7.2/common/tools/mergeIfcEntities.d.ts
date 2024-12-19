import { IfcEntity } from '../IfcData/ifc';
/**
 * Merges an array of IfcEntity objects into a single IfcEntity object.
 *
 * @param ifcEntities - An array of IfcEntity objects to be merged.
 * @returns The merged IfcEntity object, or null if the input array is empty.
 */
export declare const mergeIfcEntities: (ifcEntities: IfcEntity[]) => IfcEntity | null;
/**
 * Updates a list of target IFC entities with the attributes, associations, and property sets of a source IFC entity.
 *
 * @param sourceEntity - The source IFC entity whose attributes, associations, and property sets will be used for updating.
 * @param targetEntities - An array of target IFC entities to be updated.
 * @returns An array of updated IFC entities.
 */
export declare const updateEntitiesWithIfcEntity: (sourceEntity: IfcEntity, targetEntities: IfcEntity[]) => IfcEntity[];
