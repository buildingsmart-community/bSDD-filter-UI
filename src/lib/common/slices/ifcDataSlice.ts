import { createAsyncThunk, createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { RootState } from '../app/store';
import { IfcEntity } from '../IfcData/ifc';
import { validateIfcData } from '../IfcData/ifcValidators';
import { mergeIfcEntities } from '../tools/mergeIfcEntities';

export interface IfcDataState {
  loadedIfcEntities: IfcEntity[];
  selectedIfcEntities: IfcEntity[];
  savedPropertyIsInstanceMap: Record<string, boolean>;
  propertyIsInstanceMap: Record<string, boolean>;
}

const initialState: IfcDataState = {
  loadedIfcEntities: [],
  selectedIfcEntities: [],
  savedPropertyIsInstanceMap: {},
  propertyIsInstanceMap: {},
};

const ifcDataSlice = createSlice({
  name: 'ifcData',
  initialState,
  reducers: {
    setLoadedIfcEntities: (state, action: PayloadAction<IfcEntity[]>) => {
      state.loadedIfcEntities = action.payload;
    },
    setSelectedIfcEntities: (state, action: PayloadAction<IfcEntity[]>) => {
      state.selectedIfcEntities = action.payload;
    },
    setSavedPropertyIsInstanceMap(state, action: PayloadAction<Record<string, boolean>>) {
      state.savedPropertyIsInstanceMap = action.payload;
      state.propertyIsInstanceMap = action.payload;
    },
    setPropertyIsInstance(state, action: PayloadAction<{ propertyName: string; value: boolean }>) {
      state.propertyIsInstanceMap[action.payload.propertyName] = action.payload.value;
    },
  },
});

export const { setLoadedIfcEntities, setSelectedIfcEntities, setSavedPropertyIsInstanceMap, setPropertyIsInstance } =
  ifcDataSlice.actions;

/**
 * Sets the validated IFC data by checking and fixing the associations of each IFC entity.
 *
 * @param ifcEntities - The array of IFC entities to be validated.
 * @param dispatch - The Redux dispatch function.
 * @param getState - The Redux getState function.
 * @returns A Promise that resolves to void.
 */
export const setValidatedIfcData = createAsyncThunk(
  'ifcData/setValidatedIfcData',
  async (ifcEntities: IfcEntity[], { dispatch, getState }) => {
    const state = getState() as RootState;
    const validatedIfcEntities = await validateIfcData(ifcEntities, state, dispatch);
    dispatch(setLoadedIfcEntities(validatedIfcEntities));
  },
);

/**
 * Sets the validated IFC data by checking and fixing the associations of each IFC entity.
 *
 * @param ifcEntities - The array of IFC entities to be validated.
 * @param dispatch - The Redux dispatch function.
 * @param getState - The Redux getState function.
 * @returns A Promise that resolves to void.
 */
export const setValidatedSelectedIfcEntities = createAsyncThunk(
  'ifcData/setValidatedSelectedIfcEntities',
  async (ifcEntities: IfcEntity[], { dispatch, getState }) => {
    const state = getState() as RootState;
    const validatedIfcEntities = await validateIfcData(ifcEntities, state, dispatch);
    dispatch(setSelectedIfcEntities(validatedIfcEntities));
  },
);

/**
 * Selector to get the merged IfcEntity from selectedIfcEntities.
 */
export const selectMergedIfcEntity = createSelector(
  (state: RootState) => state.ifcData.selectedIfcEntities,
  (selectedIfcEntities) => mergeIfcEntities(selectedIfcEntities),
);

export const selectLoadedIfcEntities = (state: RootState) => state.ifcData.loadedIfcEntities;
export const selectSelectedIfcEntities = (state: RootState) => state.ifcData.selectedIfcEntities;
export const selectPropertyIsInstanceMap = (state: RootState) => state.ifcData.propertyIsInstanceMap;

export const ifcDataReducer = ifcDataSlice.reducer;
