import { RootState } from '../app/store';
import { IfcEntity } from '../IfcData/ifc';
export interface IfcDataState {
    loadedIfcEntities: IfcEntity[];
    savedPropertyIsInstanceMap: Record<string, boolean>;
    propertyIsInstanceMap: Record<string, boolean>;
}
export declare const setLoadedIfcEntities: import('@reduxjs/toolkit').ActionCreatorWithPayload<IfcEntity[], "ifcData/setLoadedIfcEntities">, setSavedPropertyIsInstanceMap: import('@reduxjs/toolkit').ActionCreatorWithPayload<Record<string, boolean>, "ifcData/setSavedPropertyIsInstanceMap">, setPropertyIsInstance: import('@reduxjs/toolkit').ActionCreatorWithPayload<{
    propertyName: string;
    value: boolean;
}, "ifcData/setPropertyIsInstance">;
export declare const selectIfcEntities: (state: RootState) => IfcEntity[];
export declare const selectPropertyIsInstanceMap: (state: RootState) => Record<string, boolean>;
/**
 * Sets the validated IFC data by chanking and fixing the associations of each IFC entity.
 *
 * @param ifcEntities - The array of IFC entities to be validated.
 * @param dispatch - The Redux dispatch function.
 * @param getState - The Redux getState function.
 * @returns A Promise that resolves to void.
 */
export declare const setValidatedIfcData: import('@reduxjs/toolkit').AsyncThunk<void, IfcEntity[], {
    state?: unknown;
    dispatch?: import('@reduxjs/toolkit').ThunkDispatch<unknown, unknown, import('@reduxjs/toolkit').UnknownAction>;
    extra?: unknown;
    rejectValue?: unknown;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const selectLoadedIfcEntity: ((state: {
    settings: import('../IfcData/bsddBridgeData').BsddSettings;
    ifcData: IfcDataState;
    bsdd: import('./bsddSlice').BsddState;
    ifcEntity: import('./ifcEntitySlice').EntitiesState;
}) => IfcEntity) & {
    clearCache: () => void;
    resultsCount: () => number;
    resetResultsCount: () => void;
} & {
    resultFunc: (resultFuncArgs_0: IfcEntity[]) => IfcEntity;
    memoizedResultFunc: ((resultFuncArgs_0: IfcEntity[]) => IfcEntity) & {
        clearCache: () => void;
        resultsCount: () => number;
        resetResultsCount: () => void;
    };
    lastResult: () => IfcEntity;
    dependencies: [(state: RootState) => IfcEntity[]];
    recomputations: () => number;
    resetRecomputations: () => void;
    dependencyRecomputations: () => number;
    resetDependencyRecomputations: () => void;
} & {
    memoize: typeof import('reselect').weakMapMemoize;
    argsMemoize: typeof import('reselect').weakMapMemoize;
};
export declare const ifcDataReducer: import('@reduxjs/toolkit').Reducer<IfcDataState>;
