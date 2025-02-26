import { Action, ThunkAction } from '@reduxjs/toolkit';
export declare const store: import('@reduxjs/toolkit').EnhancedStore<{
    settings: import('../IfcData/bsddBridgeData').BsddSettings;
    ifcData: import('../slices/ifcDataSlice').IfcDataState;
    bsdd: import('../slices/bsddSlice').BsddState;
    ifcEntity: import('../slices/ifcEntitySlice').EntityState;
}, import('redux').UnknownAction, import('@reduxjs/toolkit').Tuple<[import('redux').StoreEnhancer<{
    dispatch: import('redux-thunk').ThunkDispatch<{
        settings: import('../IfcData/bsddBridgeData').BsddSettings;
        ifcData: import('../slices/ifcDataSlice').IfcDataState;
        bsdd: import('../slices/bsddSlice').BsddState;
        ifcEntity: import('../slices/ifcEntitySlice').EntityState;
    }, undefined, import('redux').UnknownAction>;
}>, import('redux').StoreEnhancer]>>;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
