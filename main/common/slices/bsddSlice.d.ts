import { AppDispatch, RootState } from '../app/store';
import { ClassContractV1, ClassListItemContractV1Classes, ClassPropertyContractV1, DictionaryContractV1, SearchInDictionaryResponseContractV1 } from '../BsddApi/BsddApiBase';
export interface BsddState {
    mainDictionaryClassification: ClassContractV1 | null;
    mainDictionaryClassificationUri: string | null;
    ifcDictionaryClassification: ClassContractV1 | null;
    ifcDictionaryClassificationUri: string | null;
    filterDictionaryClassifications: ClassContractV1[];
    filterDictionaryClassificationUris: string[];
    classes: {
        [key: string]: ClassContractV1;
    };
    propertyNamesByLanguage: {
        [languageCode: string]: {
            [propertyUri: string]: string;
        };
    };
    dictionaries: {
        [key: string]: DictionaryContractV1;
    };
    dictionaryClasses: {
        [key: string]: ClassListItemContractV1Classes[];
    };
    dictionariesLoaded: boolean;
    groupedClassRelations: {
        [key: string]: ClassContractV1[];
    };
    searchResult: SearchInDictionaryResponseContractV1 | null;
    searchInDictionaryLoading: boolean;
    searchInDictionaryResults: any;
    loading: boolean;
    error: string | null | undefined;
}
export type FetchAllDictionaryParameters = {
    bsddApiEnvironment: string;
    includeTestDictionaries: boolean;
};
export interface SearchResult {
    count: number;
    dictionary?: {
        classes: Array<{
            uri: string;
            name: string;
        }>;
    };
}
/**
 * Fetches dictionaries from the bSDD API.
 *
 * @param includeTestDictionaries - Whether to include test dictionaries.
 * @param thunkAPI - The Redux Thunk API.
 * @returns A promise that resolves to an object containing the fetched dictionaries.
 * @throws An error if there is an HTTP error or a bSDD API error.
 */
export declare const fetchDictionaries: import('@reduxjs/toolkit').AsyncThunk<{
    [key: string]: DictionaryContractV1;
}, boolean | undefined, {
    rejectValue: string;
    state?: unknown;
    dispatch?: import('redux-thunk').ThunkDispatch<unknown, unknown, import('redux').UnknownAction> | undefined;
    extra?: unknown;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const fetchDictionaryClasses: import('@reduxjs/toolkit').AsyncThunk<ClassListItemContractV1Classes[], string, {
    state?: unknown;
    dispatch?: import('redux-thunk').ThunkDispatch<unknown, unknown, import('redux').UnknownAction>;
    extra?: unknown;
    rejectValue?: unknown;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const updatePropertyNaturalLanguageNames: import('@reduxjs/toolkit').AsyncThunk<{
    languageCode: string;
    propertyNames: {
        [propertyUri: string]: string;
    };
}, {
    classProperties: ClassPropertyContractV1[];
    languageCode: string;
}, {
    state?: unknown;
    dispatch?: import('redux-thunk').ThunkDispatch<unknown, unknown, import('redux').UnknownAction>;
    extra?: unknown;
    rejectValue?: unknown;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const fetchClasses: import('@reduxjs/toolkit').AsyncThunk<void, string[], {
    state?: unknown;
    dispatch?: import('redux-thunk').ThunkDispatch<unknown, unknown, import('redux').UnknownAction>;
    extra?: unknown;
    rejectValue?: unknown;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const searchInDictionary: import('@reduxjs/toolkit').AsyncThunk<SearchInDictionaryResponseContractV1, any, {
    state?: unknown;
    dispatch?: import('redux-thunk').ThunkDispatch<unknown, unknown, import('redux').UnknownAction>;
    extra?: unknown;
    rejectValue?: unknown;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
/**
 * Fetches a dictionary from the BSDD API based on the provided location URI.
 *
 * @param location - The location URI of the dictionary to retrieve.
 * @param getState - A function to get the current state.
 * @param dispatch - The dispatch function to dispatch actions.
 * @param rejectWithValue - A function to reject the promise with a value.
 * @returns A promise that resolves to an object containing the location and the fetched dictionary.
 */
export declare const fetchDictionary: import('@reduxjs/toolkit').AsyncThunk<{
    location: string;
    dictionary: DictionaryContractV1;
}, string, {
    state?: unknown;
    dispatch?: import('redux-thunk').ThunkDispatch<unknown, unknown, import('redux').UnknownAction>;
    extra?: unknown;
    rejectValue?: unknown;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const fetchClassDetails: import('@reduxjs/toolkit').AsyncThunk<ClassContractV1[], string[], {
    state?: unknown;
    dispatch?: import('redux-thunk').ThunkDispatch<unknown, unknown, import('redux').UnknownAction>;
    extra?: unknown;
    rejectValue?: unknown;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const selectMainDictionaryClassification: (state: RootState) => ClassContractV1 | null;
export declare const selectMainDictionaryClassificationUri: (state: RootState) => string | null;
export declare const selectIfcDictionaryClassification: (state: RootState) => ClassContractV1 | null;
export declare const selectIfcDictionaryClassificationUri: (state: RootState) => string | null;
export declare const selectFilterDictionaryClassifications: (state: RootState) => ClassContractV1[];
export declare const selectFilterDictionaryClassificationUris: (state: RootState) => string[];
export declare const selectDictionary: (state: RootState, uri: string) => DictionaryContractV1;
export declare const selectDictionaryClasses: (state: RootState, location: string) => ClassListItemContractV1Classes[];
export declare const selectBsddDictionaries: (state: RootState) => {
    [key: string]: DictionaryContractV1;
};
export declare const selectBsddDictionariesLoaded: (state: RootState) => boolean;
export declare const selectdictionaryClasses: (state: RootState) => {
    [key: string]: ClassListItemContractV1Classes[];
};
export declare const selectGroupedClassRelations: (state: RootState) => {
    [key: string]: ClassContractV1[];
};
export declare const selectClasses: (state: RootState) => {
    [key: string]: ClassContractV1;
};
export declare const selectPropertyNamesByLanguage: (state: RootState) => {
    [languageCode: string]: {
        [propertyUri: string]: string;
    };
};
export declare const selectSearchResult: (state: RootState) => SearchInDictionaryResponseContractV1 | null;
/**
 * Retrieves a dictionary from the state or fetches it from the API if not present in the state.
 *
 * @param state - The RootState object.
 * @param dispatch - The AppDispatch function.
 * @param location - The location URI of the dictionary to retrieve.
 * @returns A promise that resolves to a DictionaryContractV1 object or null if the dictionary could not be retrieved.
 */
export declare const getDictionary: (state: RootState, dispatch: AppDispatch, location: string) => Promise<DictionaryContractV1 | null>;
export declare const selectGroupedClasses: ((state: {
    settings: import('../IfcData/bsddBridgeData').BsddSettings;
    ifcData: import('./ifcDataSlice').IfcDataState;
    bsdd: BsddState;
    ifcEntity: import('./ifcEntitySlice').EntityState;
}) => {
    [key: string]: ClassContractV1[];
}) & {
    clearCache: () => void;
    resultsCount: () => number;
    resetResultsCount: () => void;
} & {
    resultFunc: (resultFuncArgs_0: {
        [key: string]: ClassContractV1;
    }) => {
        [key: string]: ClassContractV1[];
    };
    memoizedResultFunc: ((resultFuncArgs_0: {
        [key: string]: ClassContractV1;
    }) => {
        [key: string]: ClassContractV1[];
    }) & {
        clearCache: () => void;
        resultsCount: () => number;
        resetResultsCount: () => void;
    };
    lastResult: () => {
        [key: string]: ClassContractV1[];
    };
    dependencies: [(state: RootState) => {
        [key: string]: ClassContractV1;
    }];
    recomputations: () => number;
    resetRecomputations: () => void;
    dependencyRecomputations: () => number;
    resetDependencyRecomputations: () => void;
} & {
    memoize: typeof import('reselect').weakMapMemoize;
    argsMemoize: typeof import('reselect').weakMapMemoize;
};
export declare const resetState: import('@reduxjs/toolkit').ActionCreatorWithoutPayload<"bsdd/resetState">, setMainDictionaryClassification: import('@reduxjs/toolkit').ActionCreatorWithPayload<ClassContractV1 | null, "bsdd/setMainDictionaryClassification">, setMainDictionaryClassificationUri: import('@reduxjs/toolkit').ActionCreatorWithPayload<string, "bsdd/setMainDictionaryClassificationUri">, addDictionaryClasses: import('@reduxjs/toolkit').ActionCreatorWithPayload<{
    uri: string;
    data: ClassListItemContractV1Classes[];
}, "bsdd/addDictionaryClasses">;
export declare const updateMainDictionaryClassificationUri: import('@reduxjs/toolkit').AsyncThunk<void, string | null, {
    state?: unknown;
    dispatch?: import('redux-thunk').ThunkDispatch<unknown, unknown, import('redux').UnknownAction>;
    extra?: unknown;
    rejectValue?: unknown;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const updateFilterDictionaryClassificationUris: import('@reduxjs/toolkit').AsyncThunk<void, string[], {
    state?: unknown;
    dispatch?: import('redux-thunk').ThunkDispatch<unknown, unknown, import('redux').UnknownAction>;
    extra?: unknown;
    rejectValue?: unknown;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const useDictionary: (uri: string) => {
    dictionary: DictionaryContractV1;
    loading: boolean;
    error: string | null;
};
export declare const bsddReducer: import('redux').Reducer<BsddState>;
