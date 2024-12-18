import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { RootState } from '../app/store';
import { Association, IfcClassificationReference, IfcEntity, IfcPropertySet } from '../IfcData/ifc';

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

const initialState: EntityState = {
  type: undefined,
  name: undefined,
  description: undefined,
  objectType: undefined,
  tag: undefined,
  predefinedType: undefined,
  isDefinedBy: [],
  hasAssociations: [],
};

function updateObjectTypeAndPredefinedType(
  state: EntityState,
  objectType: string | undefined,
  predefinedType: string | undefined,
) {
  // IFC Rule: If objectType is set and not empty, PredefinedType must be 'USERDEFINED', unless predefinedType is set and to something other than 'NOTDEFINED'.
  // Reference: https://ifc43-docs.standards.buildingsmart.org/IFC/RELEASE/IFC4x3/HTML/lexical/IfcObject.htm
  if (!objectType) {
    state.objectType = '';
    if (!predefinedType || predefinedType === 'USERDEFINED') {
      state.objectType = objectType;
      state.predefinedType = 'NOTDEFINED';
    } else {
      state.objectType = objectType;
      state.predefinedType = predefinedType;
    }
  } else if (!predefinedType || predefinedType === 'NOTDEFINED') {
    state.predefinedType = 'USERDEFINED';
    state.objectType = objectType;
  } else {
    state.predefinedType = predefinedType;
    state.objectType = objectType;
  }
}

/**
 * Updates the `isDefinedBy` state and updates `objectType` and `predefinedType` based on the 'Attributes' property set
 *
 * @param state - The current state of the entity.
 * @param isDefinedBy - The array of IfcPropertySet to update the state with.
 */
function updateIsDefinedBy(state: EntityState, isDefinedBy: IfcPropertySet[] | undefined) {
  if (!isDefinedBy) {
    state.isDefinedBy = [];
    return;
  }

  let attributesPropertySet: IfcPropertySet | undefined;

  // Filter out 'Attributes' property set from isDefinedBy and find 'Attributes' property set
  state.isDefinedBy = isDefinedBy.filter((propertySet) => {
    if (propertySet.name === 'Attributes') {
      attributesPropertySet = propertySet;
      return false;
    }
    return true;
  });

  // Set state.objectType and state.predefinedType based on 'Attributes' property set
  if (attributesPropertySet) {
    const objectTypeProperty = attributesPropertySet.hasProperties.find((property) => property.name === 'ObjectType');
    const predefinedTypeProperty = attributesPropertySet.hasProperties.find(
      (property) => property.name === 'PredefinedType',
    );

    switch (objectTypeProperty?.type) {
      case 'IfcPropertySingleValue':
        state.objectType = objectTypeProperty.nominalValue?.value;
        break;
      case 'IfcPropertyEnumeratedValue':
        state.objectType = objectTypeProperty.enumerationValues?.[0]?.value;
        break;
    }

    switch (predefinedTypeProperty?.type) {
      case 'IfcPropertySingleValue':
        state.predefinedType = predefinedTypeProperty.nominalValue?.value;
        break;
      case 'IfcPropertyEnumeratedValue':
        state.predefinedType = predefinedTypeProperty.enumerationValues?.[0]?.value;
        break;
    }
  }
}

function updateHasAssociations(state: EntityState, hasAssociations: Association[] | undefined) {
  const currentAssociationsJSON = JSON.stringify(state.hasAssociations);
  const newAssociationsJSON = JSON.stringify(hasAssociations);

  if (currentAssociationsJSON !== newAssociationsJSON) {
    state.hasAssociations = hasAssociations;
  }
}

const ifcEntitySlice = createSlice({
  name: 'ifcEntity',
  initialState,
  reducers: {
    setIfcEntity: (state, action: PayloadAction<IfcEntity>) => {
      const ifcEntity = action.payload;
      state.type = ifcEntity.type;
      state.name = ifcEntity.name;
      state.description = ifcEntity.description;
      updateObjectTypeAndPredefinedType(state, ifcEntity.objectType, ifcEntity.predefinedType);
      state.tag = action.payload.tag;
      updateIsDefinedBy(state, ifcEntity.isDefinedBy);
      updateHasAssociations(state, ifcEntity.hasAssociations);
    },
    setType: (state, action: PayloadAction<string>) => {
      state.type = action.payload;
    },
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setDescription: (state, action: PayloadAction<string>) => {
      state.description = action.payload;
    },
    setObjectType: (state, action: PayloadAction<string>) => {
      updateObjectTypeAndPredefinedType(state, action.payload, state.predefinedType);
    },
    setTag: (state, action: PayloadAction<string>) => {
      state.tag = action.payload;
    },
    setPredefinedType: (state, action: PayloadAction<string>) => {
      state.predefinedType = action.payload;
      updateObjectTypeAndPredefinedType(state, state.objectType, action.payload);
    },
    setIsDefinedBy: (state, action: PayloadAction<IfcPropertySet[]>) => {
      updateIsDefinedBy(state, action.payload);
    },
    setHasAssociations: (state, action: PayloadAction<Association[]>) => {
      updateHasAssociations(state, action.payload);
    },
  },
});

export const selectIfcEntity = (state: RootState) => state.ifcEntity as IfcEntity;
export const selectName = (state: RootState) => state.ifcEntity.name;
export const selectDescription = (state: RootState) => state.ifcEntity.description;
export const selectTag = (state: RootState) => state.ifcEntity.tag;
export const selectPredefinedType = (state: RootState) => state.ifcEntity.predefinedType;
export const selectHasAssociations = (state: RootState) => state.ifcEntity.hasAssociations;
export const selectIsDefinedBy = (state: RootState) => state.ifcEntity.isDefinedBy;

const extractAndMergeAttributes = (
  ifcEntity: IfcEntity,
  propertySets: IfcPropertySet[] | undefined,
): IfcPropertySet[] => {
  const attributesPropertySet: IfcPropertySet = {
    name: 'Attributes',
    type: 'IfcPropertySet',
    hasProperties: [
      {
        name: 'Description',
        type: 'IfcPropertySingleValue',
        specification: 'https://identifier.buildingsmart.org/uri/buildingsmart/ifc/4.3/prop/Description',
        nominalValue: { type: 'IfcText', value: ifcEntity.description || '' },
      },
      {
        name: 'ObjectType',
        type: 'IfcPropertySingleValue',
        specification: 'https://identifier.buildingsmart.org/uri/buildingsmart/ifc/4.3/prop/ObjectType',
        nominalValue: { type: 'IfcText', value: ifcEntity.objectType || '' },
      },
      { name: 'Name', type: 'IfcPropertySingleValue', nominalValue: { type: 'IfcText', value: ifcEntity.name || '' } },
    ],
  };

  const updatedPropertySets = propertySets ? [...propertySets, attributesPropertySet] : [attributesPropertySet];

  return updatedPropertySets;
};

export const selectIsDefinedByIncludingAttributes = createSelector(
  [selectIfcEntity, selectIsDefinedBy],
  (ifcEntity, propertySets) => {
    return extractAndMergeAttributes(ifcEntity, propertySets);
  },
);

export const selectHasAssociationsMap = createSelector(
  selectHasAssociations,
  (hasAssociations): { [key: string]: IfcClassificationReference[] } => {
    type GroupedReferences = { [key: string]: IfcClassificationReference[] };

    const classificationReferences = hasAssociations?.filter(
      (association) => association && association.type === 'IfcClassificationReference',
    ) as IfcClassificationReference[];

    const groupedReferences = classificationReferences.reduce<GroupedReferences>((acc, classificationReference) => {
      const location = classificationReference?.referencedSource?.location;
      if (location) {
        if (!acc[location]) {
          acc[location] = [];
        }
        acc[location].push(classificationReference);
      }
      return acc;
    }, {});

    return groupedReferences;
  },
);

export const {
  setIfcEntity,
  setName,
  setDescription,
  setObjectType,
  setTag,
  setPredefinedType,
  setIsDefinedBy,
  setHasAssociations,
} = ifcEntitySlice.actions;

export const ifcEntityReducer = ifcEntitySlice.reducer;
