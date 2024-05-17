import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';

import { bsddReducer } from '../slices/bsddSlice';
import { ifcDataReducer } from '../slices/ifcDataSlice';
import { ifcEntityReducer } from '../slices/ifcEntitySlice';
import { settingsReducer } from '../slices/settingsSlice';

export const store = configureStore({
  reducer: {
    settings: settingsReducer,
    ifcData: ifcDataReducer,
    bsdd: bsddReducer,
    ifcEntity: ifcEntityReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
