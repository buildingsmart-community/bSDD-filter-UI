import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { RootState } from '../app/store';
import { Association, IfcClassificationReference, IfcEntity, IfcPropertySet } from '../IfcData/ifc';

interface EntitiesState {
  type?: string;
  name?: string;
  description?: string;
  objectType?: string;
  tag?: string;
  predefinedType?: string;
  isDefinedBy?: IfcPropertySet[];
  hasAssociations?: Association[];
}

const initialState: EntitiesState = {
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
  state: EntitiesState,
  objectType: string | undefined,
  predefinedType: string | undefined,
) {
  // IFC Rule: If objectType is set and not empty, PredefinedType must be 'USERDEFINED', unless predefinedType is set and to something other than 'NOTDEFINED'.
  // Reference: https://ifc43-docs.standards.buildingsmart.org/IFC/RELEASE/IFC4x3/HTML/lexical/IfcObject.htm
  if (!objectType) {
    state.objectType = '';
    if (!predefinedType || predefinedType === 'USERDEFINED') {
      state.predefinedType = 'NOTDEFINED';
    } else {
      state.predefinedType = predefinedType;
    }
  } else if (!predefinedType || predefinedType === 'NOTDEFINED') {
    state.predefinedType = 'USERDEFINED';
  } else {
    state.predefinedType = predefinedType;
  }
}

function updateIsDefinedBy(state: EntitiesState, isDefinedBy: IfcPropertySet[] | undefined) {
  state.isDefinedBy = isDefinedBy || [];

  if (!isDefinedBy) {
    return;
  }

  // Find 'Attributes' within isDefinedBy and set state.objectType and state.predefinedType
  const attributesPropertySet = isDefinedBy.find((propertySet) => propertySet.name === 'Attributes');
  if (attributesPropertySet) {
    const objectTypeProperty = attributesPropertySet.hasProperties.find((property) => property.name === 'ObjectType');
    if (objectTypeProperty) {
      if (objectTypeProperty.type === 'IfcPropertySingleValue') {
        state.objectType = objectTypeProperty.nominalValue?.value;
      } else if (objectTypeProperty.type === 'IfcPropertyEnumeratedValue') {
        state.objectType = objectTypeProperty.enumerationValues?.[0]?.value;
      }
    }

    const predefinedTypeProperty = attributesPropertySet.hasProperties.find(
      (property) => property.name === 'PredefinedType',
    );
    if (predefinedTypeProperty) {
      if (predefinedTypeProperty.type === 'IfcPropertySingleValue') {
        state.predefinedType = predefinedTypeProperty.nominalValue?.value;
      } else if (predefinedTypeProperty.type === 'IfcPropertyEnumeratedValue') {
        state.predefinedType = predefinedTypeProperty.enumerationValues?.[0]?.value;
      }
    }
  }
}

function updateHasAssociations(state: EntitiesState, hasAssociations: Association[] | undefined) {
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
      state.type = action.payload.type;
      state.name = action.payload.name;
      state.description = action.payload.description;
      updateObjectTypeAndPredefinedType(state, action.payload.objectType, action.payload.predefinedType);
      state.tag = action.payload.tag;
      updateIsDefinedBy(state, action.payload.isDefinedBy);
      updateHasAssociations(state, action.payload.hasAssociations);
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
export const selectIsDefinedBy = (state: RootState) => state.ifcEntity.isDefinedBy;
export const selectHasAssociations = (state: RootState) => state.ifcEntity.hasAssociations;

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

export const { setIfcEntity, setName, setDescription, setTag, setPredefinedType, setIsDefinedBy, setHasAssociations } =
  ifcEntitySlice.actions;

export const ifcEntityReducer = ifcEntitySlice.reducer;
