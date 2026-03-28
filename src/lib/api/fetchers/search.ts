import { RequestParams, SearchInDictionaryResponseContractV1 } from '../../common/BsddApi/BsddApiBase';
import { apiHeaders, getBsddApi } from '../bsddApiInstance';

export async function searchInDictionary(
  queryParameters: any,
): Promise<SearchInDictionaryResponseContractV1> {
  const bsddApi = getBsddApi();
  const params: RequestParams = { headers: apiHeaders };

  const response = await bsddApi.api.searchInDictionaryGet(queryParameters, params);
  return response.data;
}
