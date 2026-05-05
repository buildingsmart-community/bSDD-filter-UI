// Purpose: bSDD search fetcher using the generated hey-api SDK with rate-limited transport
import type { SearchInDictionaryResponseContractV1 } from '../../../../shared/bsdd-api/generated/types.gen';
import { searchInDictionaryGet } from '../../../../shared/bsdd-api/generated/sdk.gen';
import { apiHeaders } from '../bsddApiInstance';

export async function searchInDictionary(
  queryParameters: {
    DictionaryUri: string;
    SearchText?: string;
    Offset?: number;
    Limit?: number;
    languageCode?: string;
  },
  accessToken?: string,
): Promise<SearchInDictionaryResponseContractV1> {
  const authHeaders = accessToken
    ? { ...apiHeaders, Authorization: `Bearer ${accessToken}` }
    : apiHeaders;

  const { data } = await searchInDictionaryGet({
    query: queryParameters,
    headers: authHeaders,
    throwOnError: true,
  });
  return data;
}
