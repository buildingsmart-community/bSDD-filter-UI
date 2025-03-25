import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IdsClass } from '../../IdsSelection/types/types';

export interface IdsState {
  idsFile: IdsClass | null;
}

const initialState : IdsState = {
  idsFile: null,
};

const idsSlice = createSlice({
  name: 'ids',
  initialState,
  reducers: {
    setIds(state, action: PayloadAction<IdsClass | null>) {
      state.idsFile = action.payload;
    },
    clearIds(state) {
      state.idsFile = null;
    },
  },
});

export const { setIds: setIds, clearIds: clearIds } = idsSlice.actions;
export const idsReducer = idsSlice.reducer;