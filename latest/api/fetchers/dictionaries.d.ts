import { ClassListItemContractV1Classes, DictionaryContractV1 } from '../../../../shared/bsdd-api/generated/types.gen';
export type { DictionaryContractV1, ClassListItemContractV1Classes };
export declare const CLASS_ITEM_PAGE_SIZE = 500;
export declare function fetchAllDictionaries(includeTest?: boolean): Promise<{
    [key: string]: DictionaryContractV1;
}>;
export declare function fetchDictionaryByUri(location: string, includeTestDictionaries?: boolean): Promise<DictionaryContractV1 | null>;
export declare function fetchAllDictionaryClasses(location: string, languageCode?: string): Promise<ClassListItemContractV1Classes[]>;
export interface DictionaryClassesPage {
    classes: ClassListItemContractV1Classes[];
    totalCount: number;
}
export declare function fetchDictionaryClassesPage(location: string, offset: number, languageCode?: string): Promise<DictionaryClassesPage>;
