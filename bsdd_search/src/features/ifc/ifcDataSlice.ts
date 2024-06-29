import { createAsyncThunk, createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Association, IfcEntity } from '../../../../common/src/ifc/ifc';
import { patchIfcClassificationReference } from '../../../../common/src/ifc/ifcValidators';
import type { RootState } from '../../app/store';

interface EntitiesState {
  ifcEntities: IfcEntity[];
}

const initialState: EntitiesState = {
  ifcEntities: [],
};

const ifcDataSlice = createSlice({
  name: 'ifcData',
  initialState,
  reducers: {
    setIfcData: (state, action: PayloadAction<IfcEntity[]>) => {
      state.ifcEntities = action.payload;
    },
  },
});

export const { setIfcData } = ifcDataSlice.actions;

export const selectIfcEntities = (state: RootState) => state.ifcData.ifcEntities;

export const selectIfcEntity = createSelector(selectIfcEntities, (ifcEntities) => ifcEntities[0]);

export const ifcDataReducer = ifcDataSlice.reducer;
