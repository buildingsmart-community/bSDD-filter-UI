import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';

import { bsddReducer } from '../features/bsdd/bsddSlice';
import { ifcDataReducer } from '../features/IfcData/ifcDataSlice';
import { settingsReducer } from '../features/Settings/settingsSlice';

export const store = configureStore({
  reducer: {
    settings: settingsReducer,
    ifcData: ifcDataReducer,
    bsdd: bsddReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
