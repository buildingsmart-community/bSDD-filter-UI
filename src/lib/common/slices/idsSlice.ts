import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IdsState {
  idsFile: File | null;
}

const initialState : IdsState = {
  idsFile: null,
};

const idsSlice = createSlice({
  name: 'ids',
  initialState,
  reducers: {
    setFile(state, action: PayloadAction<File | null>) {
      state.idsFile = action.payload;
    },
    clearFile(state) {
      state.idsFile = null;
    },
  },
});

export const { setFile, clearFile } = idsSlice.actions;
export const idsReducer = idsSlice.reducer;