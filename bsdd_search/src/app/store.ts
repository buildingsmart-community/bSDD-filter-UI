import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';

import { bsddReducer } from '../features/bsdd/bsddSlice';
import { ifcEntityReducer } from '../features/ifcEntity/ifcEntitySlice';
import { settingsReducer } from '../features/settings/settingsSlice';

export const store = configureStore({
  reducer: {
    settings: settingsReducer,
    ifcEntity: ifcEntityReducer,
    bsdd: bsddReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
