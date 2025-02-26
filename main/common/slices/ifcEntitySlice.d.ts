import { RootState } from '../app/store';
import { Association, IfcClassificationReference, IfcEntity, IfcPropertySet } from '../IfcData/ifc';
export interface EntityState {
    type?: string;
    name?: string;
    description?: string;
    objectType?: string;
    tag?: string;
    predefinedType?: string;
    isDefinedBy?: IfcPropertySet[];
    hasAssociations?: Association[];
}
export declare const selectIfcEntity: ((state: {
    settings: import('../IfcData/bsddBridgeData').BsddSettings;
    ifcData: import('./ifcDataSlice').IfcDataState;
    bsdd: import('./bsddSlice').BsddState;
    ifcEntity: EntityState;
}) => IfcEntity) & {
    clearCache: () => void;
    resultsCount: () => number;
    resetResultsCount: () => void;
} & {
    resultFunc: (resultFuncArgs_0: EntityState) => IfcEntity;
    memoizedResultFunc: ((resultFuncArgs_0: EntityState) => IfcEntity) & {
        clearCache: () => void;
        resultsCount: () => number;
        resetResultsCount: () => void;
    };
    lastResult: () => IfcEntity;
    dependencies: [(state: RootState) => EntityState];
    recomputations: () => number;
    resetRecomputations: () => void;
    dependencyRecomputations: () => number;
    resetDependencyRecomputations: () => void;
} & {
    memoize: typeof import('reselect').weakMapMemoize;
    argsMemoize: typeof import('reselect').weakMapMemoize;
};
export declare const selectName: (state: RootState) => string | undefined;
export declare const selectDescription: (state: RootState) => string | undefined;
export declare const selectTag: (state: RootState) => string | undefined;
export declare const selectPredefinedType: (state: RootState) => string | undefined;
export declare const selectHasAssociations: (state: RootState) => Association[] | undefined;
export declare const selectIsDefinedBy: (state: RootState) => IfcPropertySet[] | undefined;
export declare const selectIsDefinedByIncludingAttributes: ((state: {
    settings: import('../IfcData/bsddBridgeData').BsddSettings;
    ifcData: import('./ifcDataSlice').IfcDataState;
    bsdd: import('./bsddSlice').BsddState;
    ifcEntity: EntityState;
}) => IfcPropertySet[]) & {
    clearCache: () => void;
    resultsCount: () => number;
    resetResultsCount: () => void;
} & {
    resultFunc: (resultFuncArgs_0: IfcEntity, resultFuncArgs_1: IfcPropertySet[] | undefined) => IfcPropertySet[];
    memoizedResultFunc: ((resultFuncArgs_0: IfcEntity, resultFuncArgs_1: IfcPropertySet[] | undefined) => IfcPropertySet[]) & {
        clearCache: () => void;
        resultsCount: () => number;
        resetResultsCount: () => void;
    };
    lastResult: () => IfcPropertySet[];
    dependencies: [((state: {
        settings: import('../IfcData/bsddBridgeData').BsddSettings;
        ifcData: import('./ifcDataSlice').IfcDataState;
        bsdd: import('./bsddSlice').BsddState;
        ifcEntity: EntityState;
    }) => IfcEntity) & {
        clearCache: () => void;
        resultsCount: () => number;
        resetResultsCount: () => void;
    } & {
        resultFunc: (resultFuncArgs_0: EntityState) => IfcEntity;
        memoizedResultFunc: ((resultFuncArgs_0: EntityState) => IfcEntity) & {
            clearCache: () => void;
            resultsCount: () => number;
            resetResultsCount: () => void;
        };
        lastResult: () => IfcEntity;
        dependencies: [(state: RootState) => EntityState];
        recomputations: () => number;
        resetRecomputations: () => void;
        dependencyRecomputations: () => number;
        resetDependencyRecomputations: () => void;
    } & {
        memoize: typeof import('reselect').weakMapMemoize;
        argsMemoize: typeof import('reselect').weakMapMemoize;
    }, (state: RootState) => IfcPropertySet[] | undefined];
    recomputations: () => number;
    resetRecomputations: () => void;
    dependencyRecomputations: () => number;
    resetDependencyRecomputations: () => void;
} & {
    memoize: typeof import('reselect').weakMapMemoize;
    argsMemoize: typeof import('reselect').weakMapMemoize;
};
export declare const selectHasAssociationsMap: ((state: {
    settings: import('../IfcData/bsddBridgeData').BsddSettings;
    ifcData: import('./ifcDataSlice').IfcDataState;
    bsdd: import('./bsddSlice').BsddState;
    ifcEntity: EntityState;
}) => {
    [key: string]: IfcClassificationReference[];
}) & {
    clearCache: () => void;
    resultsCount: () => number;
    resetResultsCount: () => void;
} & {
    resultFunc: (resultFuncArgs_0: Association[] | undefined) => {
        [key: string]: IfcClassificationReference[];
    };
    memoizedResultFunc: ((resultFuncArgs_0: Association[] | undefined) => {
        [key: string]: IfcClassificationReference[];
    }) & {
        clearCache: () => void;
        resultsCount: () => number;
        resetResultsCount: () => void;
    };
    lastResult: () => {
        [key: string]: IfcClassificationReference[];
    };
    dependencies: [(state: RootState) => Association[] | undefined];
    recomputations: () => number;
    resetRecomputations: () => void;
    dependencyRecomputations: () => number;
    resetDependencyRecomputations: () => void;
} & {
    memoize: typeof import('reselect').weakMapMemoize;
    argsMemoize: typeof import('reselect').weakMapMemoize;
};
export declare const setIfcEntity: import('@reduxjs/toolkit').ActionCreatorWithPayload<IfcEntity, "ifcEntity/setIfcEntity">, setName: import('@reduxjs/toolkit').ActionCreatorWithPayload<string, "ifcEntity/setName">, setDescription: import('@reduxjs/toolkit').ActionCreatorWithPayload<string, "ifcEntity/setDescription">, setObjectType: import('@reduxjs/toolkit').ActionCreatorWithPayload<string, "ifcEntity/setObjectType">, setTag: import('@reduxjs/toolkit').ActionCreatorWithPayload<string, "ifcEntity/setTag">, setPredefinedType: import('@reduxjs/toolkit').ActionCreatorWithPayload<string, "ifcEntity/setPredefinedType">, setIsDefinedBy: import('@reduxjs/toolkit').ActionCreatorWithPayload<IfcPropertySet[], "ifcEntity/setIsDefinedBy">, setHasAssociations: import('@reduxjs/toolkit').ActionCreatorWithPayload<Association[], "ifcEntity/setHasAssociations">;
export declare const ifcEntityReducer: import('redux').Reducer<EntityState>;
