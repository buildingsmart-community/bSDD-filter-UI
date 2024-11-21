import { Action, ThunkAction } from '@reduxjs/toolkit';
export declare const store: import('@reduxjs/toolkit').EnhancedStore<{
    settings: import('../IfcData/bsddBridgeData').BsddSettings;
    ifcData: import('../slices/ifcDataSlice').IfcDataState;
    bsdd: import('../slices/bsddSlice').BsddState;
    ifcEntity: import('../slices/ifcEntitySlice').EntitiesState;
}, import('@reduxjs/toolkit').UnknownAction, import('@reduxjs/toolkit').Tuple<[import('@reduxjs/toolkit').StoreEnhancer<{
    dispatch: import('@reduxjs/toolkit').ThunkDispatch<{
        settings: import('../IfcData/bsddBridgeData').BsddSettings;
        ifcData: import('../slices/ifcDataSlice').IfcDataState;
        bsdd: import('../slices/bsddSlice').BsddState;
        ifcEntity: import('../slices/ifcEntitySlice').EntitiesState;
    }, undefined, import('@reduxjs/toolkit').UnknownAction>;
}>, import('@reduxjs/toolkit').StoreEnhancer]>>;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
