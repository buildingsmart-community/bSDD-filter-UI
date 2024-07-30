import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Association, IfcClassificationReference, IfcEntity, IfcPropertySet } from '../../../../common/src/ifc/ifc';
import type { RootState } from '../../app/store';

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

const ifcEntitySlice = createSlice({
  name: 'ifcEntity',
  initialState,
  reducers: {
    setIfcEntity: (state, action: PayloadAction<IfcEntity>) => {
      state.type = action.payload.type;
      state.name = action.payload.name;
      state.description = action.payload.description;
      state.objectType = action.payload.objectType;
      state.tag = action.payload.tag;
      state.predefinedType = action.payload.predefinedType;
      state.isDefinedBy = action.payload.isDefinedBy;
      state.hasAssociations = action.payload.hasAssociations;
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
      state.objectType = action.payload;
    },
    setTag: (state, action: PayloadAction<string>) => {
      state.tag = action.payload;
    },
    setPredefinedType: (state, action: PayloadAction<string>) => {
      state.predefinedType = action.payload;
    },
    setIsDefinedBy: (state, action: PayloadAction<IfcPropertySet[]>) => {
      state.isDefinedBy = action.payload;

      // Find 'ObjectType' within isDefinedBy and set state.objectType
      const objectTypePropertySet = action.payload.find((propertySet) => propertySet.name === 'Attributes');
      if (objectTypePropertySet) {
        const objectTypeProperty = objectTypePropertySet.hasProperties.find(
          (property) => property.name === 'ObjectType',
        );
        if (objectTypeProperty) {
          if (objectTypeProperty.type === 'IfcPropertySingleValue') {
            state.objectType = objectTypeProperty.nominalValue?.value;
          } else if (objectTypeProperty.type === 'IfcPropertyEnumeratedValue') {
            state.objectType = objectTypeProperty.enumerationValues?.[0]?.value;
          }
        }
      }
    },
    setHasAssociations: (state, action: PayloadAction<Association[]>) => {
      const currentAssociationsJSON = JSON.stringify(state.hasAssociations);
      const newAssociationsJSON = JSON.stringify(action.payload);

      if (currentAssociationsJSON !== newAssociationsJSON) {
        state.hasAssociations = action.payload;
      }
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
