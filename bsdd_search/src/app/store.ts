import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';

import { bsddReducer } from '../features/bsdd/bsddSlice';
import { ifcDataReducer } from '../features/ifc/ifcDataSlice';
import { ifcEntityReducer } from '../features/ifc/ifcEntitySlice';
import { settingsReducer } from '../features/settings/settingsSlice';

export const store = configureStore({
  reducer: {
    settings: settingsReducer,
    ifcData: ifcDataReducer,
    ifcEntity: ifcEntityReducer,
    bsdd: bsddReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
