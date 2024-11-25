import { deepMerge } from '@mantine/core';
import {
  IfcEntity,
  IfcPropertySet,
  Association,
  IfcProperty,
  IfcPropertySingleValue,
  IfcPropertyEnumeratedValue,
} from '../IfcData/ifc';

const IFC_ENTITY_STRING_PROPERTIES = ['name', 'description', 'objectType', 'tag', 'predefinedType'] as const;

const mergeStringProperties = (values: (string | undefined)[]): string | undefined => {
  const uniqueValues = Array.from(new Set(values));
  if (uniqueValues.length === 1) {
    return uniqueValues[0] === undefined ? undefined : uniqueValues[0];
  }
  return '...';
};

const mergeProperties = (setsWithName: IfcPropertySet[]): IfcProperty[] => {
  const propertyMap: Map<string, IfcProperty[]> = new Map();

  setsWithName.forEach((ps) => {
    ps.hasProperties.forEach((prop) => {
      if (!propertyMap.has(prop.name)) {
        propertyMap.set(prop.name, []);
      }
      propertyMap.get(prop.name)!.push(prop);
    });
  });

  return Array.from(propertyMap.entries())
    .map(([name, properties]) => {
      const serializedProperties = properties.map((property) => JSON.stringify(property));
      const allEqual = serializedProperties.every((val, i, arr) => val === arr[0]);
      return allEqual ? properties[0] : undefined;
    })
    .filter((property): property is IfcProperty => property !== undefined);
};

const mergePropertySets = (propertySets: IfcPropertySet[]): IfcPropertySet[] => {
  const propertySetMap: Map<string, IfcPropertySet[]> = new Map();

  propertySets.forEach((ps) => {
    if (ps.name) {
      if (!propertySetMap.has(ps.name)) {
        propertySetMap.set(ps.name, []);
      }
      propertySetMap.get(ps.name)!.push(ps);
    }
  });

  return Array.from(propertySetMap.entries()).map(([name, propertySets]) => ({
    type: 'IfcPropertySet',
    name,
    hasProperties: mergeProperties(propertySets),
  }));
};

const mergeAssociations = (associations: Association[]): Association[] => {
  const mergedAssociations: Association[] = [];
  const uniqueNames = new Set(associations.map((assoc) => assoc.name));

  uniqueNames.forEach((name) => {
    const assocsWithName = associations.flat().filter((assoc) => assoc.name === name);
    if (assocsWithName.length > 0) {
      mergedAssociations.push(deepMerge(assocsWithName));
    }
  });

  return mergedAssociations;
};

/**
 * Merges an array of IfcEntity objects into a single IfcEntity object.
 *
 * @param ifcEntities - An array of IfcEntity objects to be merged.
 * @returns The merged IfcEntity object, or null if the input array is empty.
 */
const mergeIfcEntities = (ifcEntities: IfcEntity[]): IfcEntity | null => {
  if (ifcEntities.length === 0) return null;

  const mergedIfcEntity: IfcEntity = IFC_ENTITY_STRING_PROPERTIES.reduce((acc, prop) => {
    acc[prop] = mergeStringProperties(ifcEntities.map((entity) => entity[prop] || undefined));
    return acc;
  }, {} as Record<(typeof IFC_ENTITY_STRING_PROPERTIES)[number], string | undefined>);

  mergedIfcEntity.isDefinedBy = ifcEntities.some((entity) => entity.isDefinedBy)
    ? mergePropertySets(ifcEntities.flatMap((entity) => entity.isDefinedBy || []))
    : undefined;

  mergedIfcEntity.hasAssociations = ifcEntities.some((entity) => entity.hasAssociations)
    ? mergeAssociations(ifcEntities.flatMap((entity) => entity.hasAssociations || []))
    : undefined;

  return mergedIfcEntity;
};

export default mergeIfcEntities;
