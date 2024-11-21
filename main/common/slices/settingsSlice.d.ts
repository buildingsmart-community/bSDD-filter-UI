import { RootState } from '../app/store';
import { BsddDictionary, BsddSettings } from '../IfcData/bsddBridgeData';
/**
 * Selects the active dictionaries from the Redux state.
 *
 * @param state - The root state object.
 * @returns An array of active dictionaries.
 */
export declare const selectActiveDictionaries: ((state: {
    settings: BsddSettings;
    ifcData: import('./ifcDataSlice').IfcDataState;
    bsdd: import('./bsddSlice').BsddState;
    ifcEntity: import('./ifcEntitySlice').EntitiesState;
}) => BsddDictionary[]) & {
    clearCache: () => void;
    resultsCount: () => number;
    resetResultsCount: () => void;
} & {
    resultFunc: (resultFuncArgs_0: BsddDictionary | null, resultFuncArgs_1: BsddDictionary | null, resultFuncArgs_2: BsddDictionary[]) => BsddDictionary[];
    memoizedResultFunc: ((resultFuncArgs_0: BsddDictionary | null, resultFuncArgs_1: BsddDictionary | null, resultFuncArgs_2: BsddDictionary[]) => BsddDictionary[]) & {
        clearCache: () => void;
        resultsCount: () => number;
        resetResultsCount: () => void;
    };
    lastResult: () => BsddDictionary[];
    dependencies: [(state: RootState) => BsddDictionary | null, (state: RootState) => BsddDictionary | null, (state: RootState) => BsddDictionary[]];
    recomputations: () => number;
    resetRecomputations: () => void;
    dependencyRecomputations: () => number;
    resetDependencyRecomputations: () => void;
} & {
    memoize: typeof import('reselect').weakMapMemoize;
    argsMemoize: typeof import('reselect').weakMapMemoize;
};
export declare const selectActiveDictionariesMap: ((state: {
    settings: BsddSettings;
    ifcData: import('./ifcDataSlice').IfcDataState;
    bsdd: import('./bsddSlice').BsddState;
    ifcEntity: import('./ifcEntitySlice').EntitiesState;
}) => Map<string, import('../IfcData/ifc').IfcClassification>) & {
    clearCache: () => void;
    resultsCount: () => number;
    resetResultsCount: () => void;
} & {
    resultFunc: (resultFuncArgs_0: BsddDictionary[]) => Map<string, import('../IfcData/ifc').IfcClassification>;
    memoizedResultFunc: ((resultFuncArgs_0: BsddDictionary[]) => Map<string, import('../IfcData/ifc').IfcClassification>) & {
        clearCache: () => void;
        resultsCount: () => number;
        resetResultsCount: () => void;
    };
    lastResult: () => Map<string, import('../IfcData/ifc').IfcClassification>;
    dependencies: [((state: {
        settings: BsddSettings;
        ifcData: import('./ifcDataSlice').IfcDataState;
        bsdd: import('./bsddSlice').BsddState;
        ifcEntity: import('./ifcEntitySlice').EntitiesState;
    }) => BsddDictionary[]) & {
        clearCache: () => void;
        resultsCount: () => number;
        resetResultsCount: () => void;
    } & {
        resultFunc: (resultFuncArgs_0: BsddDictionary | null, resultFuncArgs_1: BsddDictionary | null, resultFuncArgs_2: BsddDictionary[]) => BsddDictionary[];
        memoizedResultFunc: ((resultFuncArgs_0: BsddDictionary | null, resultFuncArgs_1: BsddDictionary | null, resultFuncArgs_2: BsddDictionary[]) => BsddDictionary[]) & {
            clearCache: () => void;
            resultsCount: () => number;
            resetResultsCount: () => void;
        };
        lastResult: () => BsddDictionary[];
        dependencies: [(state: RootState) => BsddDictionary | null, (state: RootState) => BsddDictionary | null, (state: RootState) => BsddDictionary[]];
        recomputations: () => number;
        resetRecomputations: () => void;
        dependencyRecomputations: () => number;
        resetDependencyRecomputations: () => void;
    } & {
        memoize: typeof import('reselect').weakMapMemoize;
        argsMemoize: typeof import('reselect').weakMapMemoize;
    }];
    recomputations: () => number;
    resetRecomputations: () => void;
    dependencyRecomputations: () => number;
    resetDependencyRecomputations: () => void;
} & {
    memoize: typeof import('reselect').weakMapMemoize;
    argsMemoize: typeof import('reselect').weakMapMemoize;
};
export declare const selectMainDictionary: (state: RootState) => BsddDictionary | null;
export declare const selectIfcDictionary: (state: RootState) => BsddDictionary | null;
export declare const selectFilterDictionaries: (state: RootState) => BsddDictionary[];
export declare const selectLanguage: (state: RootState) => string;
export declare const selectIncludeTestDictionaries: (state: RootState) => boolean | undefined;
export declare const selectSettings: (state: RootState) => BsddSettings;
export declare const selectActiveDictionaryUris: ((state: {
    settings: BsddSettings;
    ifcData: import('./ifcDataSlice').IfcDataState;
    bsdd: import('./bsddSlice').BsddState;
    ifcEntity: import('./ifcEntitySlice').EntitiesState;
}) => string[]) & {
    clearCache: () => void;
    resultsCount: () => number;
    resetResultsCount: () => void;
} & {
    resultFunc: (resultFuncArgs_0: BsddDictionary[]) => string[];
    memoizedResultFunc: ((resultFuncArgs_0: BsddDictionary[]) => string[]) & {
        clearCache: () => void;
        resultsCount: () => number;
        resetResultsCount: () => void;
    };
    lastResult: () => string[];
    dependencies: [((state: {
        settings: BsddSettings;
        ifcData: import('./ifcDataSlice').IfcDataState;
        bsdd: import('./bsddSlice').BsddState;
        ifcEntity: import('./ifcEntitySlice').EntitiesState;
    }) => BsddDictionary[]) & {
        clearCache: () => void;
        resultsCount: () => number;
        resetResultsCount: () => void;
    } & {
        resultFunc: (resultFuncArgs_0: BsddDictionary | null, resultFuncArgs_1: BsddDictionary | null, resultFuncArgs_2: BsddDictionary[]) => BsddDictionary[];
        memoizedResultFunc: ((resultFuncArgs_0: BsddDictionary | null, resultFuncArgs_1: BsddDictionary | null, resultFuncArgs_2: BsddDictionary[]) => BsddDictionary[]) & {
            clearCache: () => void;
            resultsCount: () => number;
            resetResultsCount: () => void;
        };
        lastResult: () => BsddDictionary[];
        dependencies: [(state: RootState) => BsddDictionary | null, (state: RootState) => BsddDictionary | null, (state: RootState) => BsddDictionary[]];
        recomputations: () => number;
        resetRecomputations: () => void;
        dependencyRecomputations: () => number;
        resetDependencyRecomputations: () => void;
    } & {
        memoize: typeof import('reselect').weakMapMemoize;
        argsMemoize: typeof import('reselect').weakMapMemoize;
    }];
    recomputations: () => number;
    resetRecomputations: () => void;
    dependencyRecomputations: () => number;
    resetDependencyRecomputations: () => void;
} & {
    memoize: typeof import('reselect').weakMapMemoize;
    argsMemoize: typeof import('reselect').weakMapMemoize;
};
export declare const selectMainDictionaryUri: ((state: {
    settings: BsddSettings;
    ifcData: import('./ifcDataSlice').IfcDataState;
    bsdd: import('./bsddSlice').BsddState;
    ifcEntity: import('./ifcEntitySlice').EntitiesState;
}) => string | null) & {
    clearCache: () => void;
    resultsCount: () => number;
    resetResultsCount: () => void;
} & {
    resultFunc: (resultFuncArgs_0: BsddDictionary | null) => string | null;
    memoizedResultFunc: ((resultFuncArgs_0: BsddDictionary | null) => string | null) & {
        clearCache: () => void;
        resultsCount: () => number;
        resetResultsCount: () => void;
    };
    lastResult: () => string | null;
    dependencies: [(state: RootState) => BsddDictionary | null];
    recomputations: () => number;
    resetRecomputations: () => void;
    dependencyRecomputations: () => number;
    resetDependencyRecomputations: () => void;
} & {
    memoize: typeof import('reselect').weakMapMemoize;
    argsMemoize: typeof import('reselect').weakMapMemoize;
};
export declare const setMainDictionary: import('@reduxjs/toolkit').ActionCreatorWithPayload<BsddDictionary, "settings/setMainDictionary">, setIfcDictionary: import('@reduxjs/toolkit').ActionCreatorWithPayload<BsddDictionary, "settings/setIfcDictionary">, setFilterDictionaries: import('@reduxjs/toolkit').ActionCreatorWithPayload<BsddDictionary[], "settings/setFilterDictionaries">, setLanguage: import('@reduxjs/toolkit').ActionCreatorWithPayload<string, "settings/setLanguage">, setIncludeTestDictionaries: import('@reduxjs/toolkit').ActionCreatorWithOptionalPayload<boolean | undefined, "settings/setIncludeTestDictionaries">;
export declare const setSettingsWithValidation: import('@reduxjs/toolkit').AsyncThunk<{
    mainDictionary: BsddDictionary | null;
    ifcDictionary: BsddDictionary | null;
    filterDictionaries: BsddDictionary[];
    language: string;
    includeTestDictionaries: boolean | undefined;
}, BsddSettings, {
    state?: unknown;
    dispatch?: import('@reduxjs/toolkit').ThunkDispatch<unknown, unknown, import('@reduxjs/toolkit').UnknownAction>;
    extra?: unknown;
    rejectValue?: unknown;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const settingsReducer: import('@reduxjs/toolkit').Reducer<BsddSettings>;
