import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IfcEntity } from '../../../../common/src/ifc/ifc';
import type { RootState } from '../../app/store';

interface EntitiesState {
  loadedIfcEntities: IfcEntity[];
}

const initialState: EntitiesState = {
  loadedIfcEntities: [],
};

const ifcDataSlice = createSlice({
  name: 'ifcData',
  initialState,
  reducers: {
    setLoadedIfcEntities: (state, action: PayloadAction<IfcEntity[]>) => {
      state.loadedIfcEntities = action.payload;
    },
  },
});

export const { setLoadedIfcEntities } = ifcDataSlice.actions;

export const selectIfcEntities = (state: RootState) => state.ifcData.loadedIfcEntities;

export const selectLoadedIfcEntity = createSelector(selectIfcEntities, (ifcEntities) => ifcEntities[0]);

export const ifcDataReducer = ifcDataSlice.reducer;
