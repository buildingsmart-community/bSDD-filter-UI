import { ClassListItemContractV1Classes, DictionaryContractV1 } from '../../../../shared/bsdd-api/generated/types.gen';
export type { DictionaryContractV1, ClassListItemContractV1Classes };
export declare function fetchAllDictionaries(includeTest?: boolean): Promise<{
    [key: string]: DictionaryContractV1;
}>;
export declare function fetchDictionaryByUri(location: string, includeTestDictionaries?: boolean): Promise<DictionaryContractV1 | null>;
export declare function fetchAllDictionaryClasses(location: string, languageCode?: string): Promise<ClassListItemContractV1Classes[]>;
export declare function fetchFirstPageDictionaryClasses(location: string, languageCode?: string): Promise<ClassListItemContractV1Classes[]>;
