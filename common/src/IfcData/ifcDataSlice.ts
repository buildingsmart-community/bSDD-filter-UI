import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IfcEntity } from './ifc';
import { RootState } from '../../../bsdd_selection/src/app/store';

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

export const selectIfcEntities = (state: RootState) => state.ifcData.ifcEntities;

export const { setIfcData } = ifcDataSlice.actions;

export const ifcDataReducer = ifcDataSlice.reducer;
