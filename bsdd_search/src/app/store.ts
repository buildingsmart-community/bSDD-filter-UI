import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';

import { settingsReducer } from '../../../common/src/settings/settingsSlice';
import { ifcEntityReducer } from '../features/ifcEntity/ifcEntitySlice';

export const store = configureStore({
  reducer: {
    settings: settingsReducer,
    ifcEntity: ifcEntityReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
