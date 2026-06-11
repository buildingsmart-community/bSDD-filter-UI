export declare function useClassDetails(uri: string | null | undefined, language: string, filterDictionaryUris?: string[]): import('@tanstack/react-query').UseQueryResult<import('../fetchers/classes').ClassContractV1 | null, Error>;
export declare function useClasses(uris: string[], language: string): import('@tanstack/react-query').UseQueryResult<{
    [key: string]: import('../fetchers/classes').ClassContractV1;
}, Error>;
