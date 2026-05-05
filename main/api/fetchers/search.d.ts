import { SearchInDictionaryResponseContractV1 } from '../../../../shared/bsdd-api/generated/types.gen';
export declare function searchInDictionary(queryParameters: {
    DictionaryUri: string;
    SearchText?: string;
    Offset?: number;
    Limit?: number;
    languageCode?: string;
}, accessToken?: string): Promise<SearchInDictionaryResponseContractV1>;
