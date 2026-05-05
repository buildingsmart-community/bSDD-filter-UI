import { searchInDictionaryGet } from '../../../../shared/bsdd-api/generated/sdk.gen';
// Purpose: bSDD search fetcher using the generated hey-api SDK with rate-limited transport
import type { SearchInDictionaryResponseContractV1 } from '../../../../shared/bsdd-api/generated/types.gen';
import { apiHeaders } from '../bsddApiInstance';

export async function searchInDictionary(queryParameters: {
  DictionaryUri: string;
  SearchText?: string;
  Offset?: number;
  Limit?: number;
  languageCode?: string;
}): Promise<SearchInDictionaryResponseContractV1> {
  const { data } = await searchInDictionaryGet({
    query: queryParameters,
    headers: apiHeaders,
    throwOnError: true,
  });
  return data;
}
