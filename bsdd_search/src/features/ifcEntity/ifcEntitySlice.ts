import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Association, IfcEntity, IfcPropertySet } from '../../../../common/src/IfcData/ifc';
import type { RootState } from '../../app/store';

interface EntitiesState {
  name?: string;
  description?: string;
  tag?: string;
  predefinedType?: string;
  isDefinedBy?: IfcPropertySet[];
  hasAssociations?: Association[];
}

const initialState: EntitiesState = {
  name: undefined,
  description: undefined,
  tag: undefined,
  predefinedType: undefined,
  isDefinedBy: [],
  hasAssociations: [],
};

const ifcEntitySlice = createSlice({
  name: 'ifcEntity',
  initialState,
  reducers: {
    setifcEntity: (state, action: PayloadAction<IfcEntity>) => {
      state.name = action.payload.name;
      state.description = action.payload.description;
      state.tag = action.payload.tag;
      state.predefinedType = action.payload.predefinedType;
      state.isDefinedBy = action.payload.isDefinedBy;
      state.hasAssociations = action.payload.hasAssociations;
    },
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setDescription: (state, action: PayloadAction<string>) => {
      state.description = action.payload;
    },
    setTag: (state, action: PayloadAction<string>) => {
      state.tag = action.payload;
    },
    setPredefinedType: (state, action: PayloadAction<string>) => {
      state.predefinedType = action.payload;
    },
    setIsDefinedBy: (state, action: PayloadAction<IfcPropertySet[]>) => {
      state.isDefinedBy = action.payload;
    },
    setHasAssociations: (state, action: PayloadAction<Association[]>) => {
      state.hasAssociations = action.payload;
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

export const { setifcEntity, setName, setDescription, setTag, setPredefinedType, setIsDefinedBy, setHasAssociations } =
  ifcEntitySlice.actions;

export const ifcEntityReducer = ifcEntitySlice.reducer;
