import { beforeEach, describe, expect, it } from 'vitest';

import {
  selectHasAssociationsMap,
  selectIfcEntity,
  selectIsDefinedByIncludingAttributes,
  useIfcDataStore,
} from './ifcDataStore';

const initial = useIfcDataStore.getState();

beforeEach(() => {
  useIfcDataStore.setState({
    loadedIfcEntities: [],
    selectedIfcEntities: [],
    savedPropertyIsInstanceMap: {},
    propertyIsInstanceMap: {},
    currentEntity: {
      type: undefined,
      name: undefined,
      description: undefined,
      objectType: undefined,
      tag: undefined,
      predefinedType: undefined,
      isDefinedBy: [],
      hasAssociations: [],
    },
  });
});

describe('useIfcDataStore basic actions', () => {
  it('setName / setDescription / setTag mutate currentEntity', () => {
    useIfcDataStore.getState().setName('Wall-1');
    useIfcDataStore.getState().setDescription('an interior wall');
    useIfcDataStore.getState().setTag('A1');
    const e = useIfcDataStore.getState().currentEntity;
    expect(e.name).toBe('Wall-1');
    expect(e.description).toBe('an interior wall');
    expect(e.tag).toBe('A1');
  });

  it('setPropertyIsInstance updates only one key', () => {
    useIfcDataStore.getState().setSavedPropertyIsInstanceMap({ a: true });
    useIfcDataStore.getState().setPropertyIsInstance('b', false);
    expect(useIfcDataStore.getState().propertyIsInstanceMap).toEqual({ a: true, b: false });
  });
});

describe('predefinedType / objectType derivation', () => {
  it('setObjectType clears predefinedType to USERDEFINED when previously NOTDEFINED', () => {
    useIfcDataStore.setState({
      currentEntity: { ...initial.currentEntity, predefinedType: 'NOTDEFINED' },
    });
    useIfcDataStore.getState().setObjectType('CustomWall');
    const e = useIfcDataStore.getState().currentEntity;
    expect(e.objectType).toBe('CustomWall');
    expect(e.predefinedType).toBe('USERDEFINED');
  });

  it('setPredefinedType to NOTDEFINED leaves objectType empty and sets NOTDEFINED', () => {
    useIfcDataStore.getState().setPredefinedType('USERDEFINED');
    expect(useIfcDataStore.getState().currentEntity.predefinedType).toBe('NOTDEFINED');
  });

  it('setPredefinedType keeps a real enum value', () => {
    useIfcDataStore.getState().setPredefinedType('PARTITIONING');
    expect(useIfcDataStore.getState().currentEntity.predefinedType).toBe('PARTITIONING');
  });
});

describe('setIfcEntity strips Attributes pset and lifts ObjectType/PredefinedType', () => {
  it('extracts ObjectType and PredefinedType from Attributes pset', () => {
    useIfcDataStore.getState().setIfcEntity({
      type: 'IfcWall',
      name: 'Wall-1',
      hasAssociations: [],
      isDefinedBy: [
        {
          type: 'IfcPropertySet',
          name: 'Attributes',
          hasProperties: [
            {
              type: 'IfcPropertySingleValue',
              name: 'ObjectType',
              nominalValue: { type: 'IfcText', value: 'CustomWall' },
            } as any,
            {
              type: 'IfcPropertySingleValue',
              name: 'PredefinedType',
              nominalValue: { type: 'IfcText', value: 'USERDEFINED' },
            } as any,
          ],
        },
      ],
    });
    const e = useIfcDataStore.getState().currentEntity;
    expect(e.objectType).toBe('CustomWall');
    expect(e.predefinedType).toBe('USERDEFINED');
    expect(e.isDefinedBy).toEqual([]); // Attributes pset is removed
  });
});

describe('setHasAssociations dedupes equivalent input', () => {
  it('does not change reference when JSON-equal associations are passed', () => {
    const assoc = [
      {
        type: 'IfcClassificationReference',
        name: 'X',
        location: 'https://example.org/x',
      } as any,
    ];
    useIfcDataStore.getState().setHasAssociations(assoc);
    const before = useIfcDataStore.getState().currentEntity;
    useIfcDataStore.getState().setHasAssociations([{ ...assoc[0] }]);
    const after = useIfcDataStore.getState().currentEntity;
    expect(after).toBe(before);
  });
});

describe('selectors', () => {
  it('selectHasAssociationsMap groups by referencedSource.location', () => {
    useIfcDataStore.setState({
      currentEntity: {
        ...initial.currentEntity,
        hasAssociations: [
          {
            type: 'IfcClassificationReference',
            name: 'A',
            referencedSource: { type: 'IfcClassification', location: 'https://example.org/a' },
          } as any,
          {
            type: 'IfcClassificationReference',
            name: 'B',
            referencedSource: { type: 'IfcClassification', location: 'https://example.org/a' },
          } as any,
          {
            type: 'IfcClassificationReference',
            name: 'C',
            referencedSource: { type: 'IfcClassification', location: 'https://example.org/b' },
          } as any,
        ],
      },
    });
    const map = selectHasAssociationsMap(useIfcDataStore.getState());
    expect(map['https://example.org/a']).toHaveLength(2);
    expect(map['https://example.org/b']).toHaveLength(1);
  });

  it('selectIfcEntity promotes IfcClassificationReference for buildingsmart/ifc into type/predefinedType', () => {
    useIfcDataStore.setState({
      currentEntity: {
        ...initial.currentEntity,
        hasAssociations: [
          {
            type: 'IfcClassificationReference',
            identification: 'IfcWallStandardCase',
            name: 'Wall',
            referencedSource: {
              type: 'IfcClassification',
              location: 'https://identifier.buildingsmart.org/uri/buildingsmart/ifc/4.3',
            },
          } as any,
        ],
      },
    });
    const merged = selectIfcEntity(useIfcDataStore.getState());
    expect(merged.type).toBe('IfcWallStandardCase');
    expect(merged.predefinedType).toBe('NOTDEFINED');
    expect(merged.hasAssociations).toEqual([]);
  });

  it('selectIsDefinedByIncludingAttributes appends an Attributes pset', () => {
    useIfcDataStore.setState({
      currentEntity: {
        ...initial.currentEntity,
        name: 'Wall-1',
        objectType: 'CustomWall',
        description: 'desc',
      },
    });
    const sets = selectIsDefinedByIncludingAttributes(useIfcDataStore.getState());
    const attributes = sets.find((s) => s.name === 'Attributes');
    expect(attributes).toBeDefined();
    const objectType = attributes!.hasProperties.find((p: any) => p.name === 'ObjectType') as any;
    expect(objectType?.nominalValue?.value).toBe('CustomWall');
  });
});
