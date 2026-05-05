import { DictionaryContractV1, ClassListItemContractV1Classes } from '../../../../shared/bsdd-api/generated/types.gen';
export type { DictionaryContractV1, ClassListItemContractV1Classes };
export declare function fetchAllDictionaries(includeTest?: boolean, accessToken?: string): Promise<{
    [key: string]: DictionaryContractV1;
}>;
export declare function fetchDictionaryByUri(location: string, includeTestDictionaries?: boolean, accessToken?: string): Promise<DictionaryContractV1 | null>;
export declare function fetchAllDictionaryClasses(location: string, languageCode?: string, accessToken?: string): Promise<ClassListItemContractV1Classes[]>;
export declare function fetchFirstPageDictionaryClasses(location: string, languageCode?: string, accessToken?: string): Promise<ClassListItemContractV1Classes[]>;
