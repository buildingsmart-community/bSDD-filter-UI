import { SearchInDictionaryResponseContractV1 } from '../../../../shared/bsdd-api/generated/types.gen';
export declare function searchInDictionary(queryParameters: {
    DictionaryUri: string;
    SearchText?: string;
    Offset?: number;
    Limit?: number;
    languageCode?: string;
}): Promise<SearchInDictionaryResponseContractV1>;
