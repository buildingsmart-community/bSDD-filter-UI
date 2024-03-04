import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { settingsReducer } from '../../../common/src/settings/settingsSlice';
import { ifcDataReducer } from '../../../common/src/IfcData/ifcDataSlice';
import { bsddReducer } from '../../../common/src/BsddApi/bsddSlice';

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
