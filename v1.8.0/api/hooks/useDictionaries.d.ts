export declare function useDictionaries(includeTest?: boolean, accessToken?: string): import('@tanstack/react-query').UseQueryResult<{
    [key: string]: import('../fetchers/dictionaries').DictionaryContractV1;
}, Error>;
export declare function useDictionary(uri: string | undefined | null, accessToken?: string): import('@tanstack/react-query').UseQueryResult<import('../fetchers/dictionaries').DictionaryContractV1 | null, Error>;
