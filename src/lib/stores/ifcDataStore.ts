import { create } from 'zustand';

import type {
  Association,
  IfcClassificationReference,
  IfcEntity,
  IfcPropertySet,
  IfcPropertySingleValue,
} from '../common/IfcData/ifc';
import { getIfcClassAndPredefinedType } from '../common/IfcData/ifcBsddConverters';

export interface EntityState {
  type?: string;
  name?: string;
  description?: string;
  objectType?: string;
  tag?: string;
  predefinedType?: string;
  isDefinedBy?: IfcPropertySet[];
  hasAssociations?: Association[];
}

interface IfcDataState {
  // Loaded IFC entities from host application
  loadedIfcEntities: IfcEntity[];
  selectedIfcEntities: IfcEntity[];
  loadingEntities: boolean;
  savedPropertyIsInstanceMap: Record<string, boolean>;
  propertyIsInstanceMap: Record<string, boolean>;

  // Current entity being edited
  currentEntity: EntityState;

  // IFC data actions
  setLoadedIfcEntities: (entities: IfcEntity[]) => void;
  setSelectedIfcEntities: (entities: IfcEntity[]) => void;
  setLoadingEntities: (loading: boolean) => void;
  setSavedPropertyIsInstanceMap: (map: Record<string, boolean>) => void;
  setPropertyIsInstance: (propertyName: string, value: boolean) => void;

  // Entity editing actions
  setIfcEntity: (entity: IfcEntity) => void;
  setName: (name: string) => void;
  setDescription: (desc: string) => void;
  setObjectType: (type: string) => void;
  setTag: (tag: string) => void;
  setPredefinedType: (type: string) => void;
  setIsDefinedBy: (sets: IfcPropertySet[]) => void;
  setHasAssociations: (assocs: Association[]) => void;
}

function updateObjectTypeAndPredefinedType(
  objectType: string | undefined,
  predefinedType: string | undefined,
): { objectType: string | undefined; predefinedType: string | undefined } {
  if (!objectType) {
    if (!predefinedType || predefinedType === 'USERDEFINED') {
      return { objectType, predefinedType: 'NOTDEFINED' };
    }
    return { objectType, predefinedType };
  }
  if (!predefinedType || predefinedType === 'NOTDEFINED') {
    return { objectType, predefinedType: 'USERDEFINED' };
  }
  return { objectType, predefinedType };
}

function processIsDefinedBy(isDefinedBy: IfcPropertySet[] | undefined): {
  propertySets: IfcPropertySet[];
  objectType?: string;
  predefinedType?: string;
} {
  if (!isDefinedBy) {
    return { propertySets: [] };
  }

  let objectType: string | undefined;
  let predefinedType: string | undefined;

  const propertySets = isDefinedBy.filter((propertySet) => {
    if (propertySet.name === 'Attributes') {
      const objectTypeProperty = propertySet.hasProperties.find((p) => p.name === 'ObjectType');
      const predefinedTypeProperty = propertySet.hasProperties.find((p) => p.name === 'PredefinedType');

      if (objectTypeProperty?.type === 'IfcPropertySingleValue') {
        objectType = (objectTypeProperty as IfcPropertySingleValue).nominalValue?.value;
      } else if (objectTypeProperty?.type === 'IfcPropertyEnumeratedValue') {
        objectType = (objectTypeProperty as any).enumerationValues?.[0]?.value;
      }

      if (predefinedTypeProperty?.type === 'IfcPropertySingleValue') {
        predefinedType = (predefinedTypeProperty as IfcPropertySingleValue).nominalValue?.value;
      } else if (predefinedTypeProperty?.type === 'IfcPropertyEnumeratedValue') {
        predefinedType = (predefinedTypeProperty as any).enumerationValues?.[0]?.value;
      }

      return false;
    }
    return true;
  });

  return { propertySets, objectType, predefinedType };
}

const initialEntityState: EntityState = {
  type: undefined,
  name: undefined,
  description: undefined,
  objectType: undefined,
  tag: undefined,
  predefinedType: undefined,
  isDefinedBy: [],
  hasAssociations: [],
};

export const useIfcDataStore = create<IfcDataState>()((set) => ({
  loadedIfcEntities: [],
  selectedIfcEntities: [],
  loadingEntities: true,
  savedPropertyIsInstanceMap: {},
  propertyIsInstanceMap: {},
  currentEntity: initialEntityState,

  setLoadedIfcEntities: (entities) => set({ loadedIfcEntities: entities, loadingEntities: false }),
  setSelectedIfcEntities: (entities) => set({ selectedIfcEntities: entities }),
  setLoadingEntities: (loading) => set({ loadingEntities: loading }),
  setSavedPropertyIsInstanceMap: (map) => set({ savedPropertyIsInstanceMap: map, propertyIsInstanceMap: map }),
  setPropertyIsInstance: (propertyName, value) =>
    set((state) => ({
      propertyIsInstanceMap: { ...state.propertyIsInstanceMap, [propertyName]: value },
    })),

  setIfcEntity: (entity) =>
    set(() => {
      const { objectType, predefinedType } = updateObjectTypeAndPredefinedType(
        entity.objectType,
        entity.predefinedType,
      );
      const {
        propertySets,
        objectType: attrObjectType,
        predefinedType: attrPredefinedType,
      } = processIsDefinedBy(entity.isDefinedBy);

      return {
        currentEntity: {
          type: entity.type,
          name: entity.name,
          description: entity.description,
          objectType: attrObjectType ?? objectType,
          predefinedType: attrPredefinedType ?? predefinedType,
          tag: entity.tag,
          isDefinedBy: propertySets,
          hasAssociations: entity.hasAssociations,
        },
      };
    }),

  setName: (name) => set((state) => ({ currentEntity: { ...state.currentEntity, name } })),
  setDescription: (desc) => set((state) => ({ currentEntity: { ...state.currentEntity, description: desc } })),
  setObjectType: (type) =>
    set((state) => {
      const { objectType, predefinedType } = updateObjectTypeAndPredefinedType(
        type,
        state.currentEntity.predefinedType,
      );
      return { currentEntity: { ...state.currentEntity, objectType, predefinedType } };
    }),
  setTag: (tag) => set((state) => ({ currentEntity: { ...state.currentEntity, tag } })),
  setPredefinedType: (type) =>
    set((state) => {
      const { objectType, predefinedType } = updateObjectTypeAndPredefinedType(state.currentEntity.objectType, type);
      return { currentEntity: { ...state.currentEntity, objectType, predefinedType } };
    }),
  setIsDefinedBy: (sets) =>
    set((state) => {
      const { propertySets, objectType, predefinedType } = processIsDefinedBy(sets);
      return {
        currentEntity: {
          ...state.currentEntity,
          isDefinedBy: propertySets,
          objectType: objectType ?? state.currentEntity.objectType,
          predefinedType: predefinedType ?? state.currentEntity.predefinedType,
        },
      };
    }),
  setHasAssociations: (assocs) =>
    set((state) => {
      const currentJSON = JSON.stringify(state.currentEntity.hasAssociations);
      const newJSON = JSON.stringify(assocs);
      if (currentJSON === newJSON) return state;
      return { currentEntity: { ...state.currentEntity, hasAssociations: assocs } };
    }),
}));

// Derived selectors
export const selectSelectedIfcEntities = (state: IfcDataState) => state.selectedIfcEntities;

export const selectIfcEntity = (state: IfcDataState): IfcEntity => {
  const entityInput = state.currentEntity;
  const baseIfc: IfcEntity = entityInput
    ? { ...JSON.parse(JSON.stringify(entityInput)) }
    : { hasAssociations: [], isDefinedBy: [] };

  baseIfc.isDefinedBy =
    entityInput?.isDefinedBy
      ?.map((propertySet) => ({
        ...propertySet,
        hasProperties: propertySet.hasProperties.filter((property) => {
          if (property.type === 'IfcPropertySingleValue') {
            const { nominalValue } = property as IfcPropertySingleValue;
            return nominalValue && nominalValue.value !== null && nominalValue.value !== '...';
          }
          if (property.type === 'IfcPropertyEnumeratedValue') {
            return (property as any).enumerationValues !== null;
          }
          return true;
        }),
      }))
      .filter((propertySet) => propertySet.hasProperties.length > 0) || [];

  baseIfc.hasAssociations = [];

  entityInput?.hasAssociations?.forEach((association) => {
    if (
      association.type === 'IfcClassificationReference' &&
      (association as IfcClassificationReference)?.referencedSource?.location?.includes(
        'https://identifier.buildingsmart.org/uri/buildingsmart/ifc/',
      )
    ) {
      const { type, predefinedType } = getIfcClassAndPredefinedType(
        (association as IfcClassificationReference).identification,
      );
      if (type) {
        baseIfc.type = type;
      }
      if (predefinedType) {
        baseIfc.predefinedType = predefinedType;
      }
      if (!baseIfc.predefinedType) {
        baseIfc.predefinedType = 'NOTDEFINED';
      }
    } else {
      baseIfc.hasAssociations?.push(association);
    }
  });

  return baseIfc;
};

export const selectHasAssociationsMap = (state: IfcDataState): { [key: string]: IfcClassificationReference[] } => {
  const hasAssociations = state.currentEntity.hasAssociations;
  const classificationReferences = hasAssociations?.filter(
    (a) => a && a.type === 'IfcClassificationReference',
  ) as IfcClassificationReference[];

  return (classificationReferences || []).reduce<{ [key: string]: IfcClassificationReference[] }>((acc, ref) => {
    const location = ref?.referencedSource?.location;
    if (location) {
      if (!acc[location]) {
        acc[location] = [];
      }
      acc[location].push(ref);
    }
    return acc;
  }, {});
};

export const selectIsDefinedByIncludingAttributes = (state: IfcDataState): IfcPropertySet[] => {
  const entity = selectIfcEntity(state);
  const propertySets = state.currentEntity.isDefinedBy;

  const attributesPropertySet: IfcPropertySet = {
    name: 'Attributes',
    type: 'IfcPropertySet',
    hasProperties: [
      {
        name: 'Description',
        type: 'IfcPropertySingleValue',
        specification: 'https://identifier.buildingsmart.org/uri/buildingsmart/ifc/4.3/prop/Description',
        nominalValue: { type: 'IfcText', value: entity.description || '' },
      },
      {
        name: 'ObjectType',
        type: 'IfcPropertySingleValue',
        specification: 'https://identifier.buildingsmart.org/uri/buildingsmart/ifc/4.3/prop/ObjectType',
        nominalValue: { type: 'IfcText', value: entity.objectType || '' },
      },
      { name: 'Name', type: 'IfcPropertySingleValue', nominalValue: { type: 'IfcText', value: entity.name || '' } },
    ],
  };

  return propertySets ? [...propertySets, attributesPropertySet] : [attributesPropertySet];
};
