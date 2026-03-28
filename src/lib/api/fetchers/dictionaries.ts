import {
  ClassListItemContractV1Classes,
  DictionaryContractV1,
  RequestParams,
} from '../../common/BsddApi/BsddApiBase';
import { apiHeaders, getBsddApi } from '../bsddApiInstance';

const DICTIONARIES_PAGE_SIZE = 1000;
const CLASS_ITEM_PAGE_SIZE = 1000;

export async function fetchAllDictionaries(
  includeTest?: boolean,
): Promise<{ [key: string]: DictionaryContractV1 }> {
  const bsddApi = getBsddApi();
  const limit = DICTIONARIES_PAGE_SIZE;

  const fetchPage = async (offset: number) => {
    const response = await bsddApi.api.dictionaryGet({
      IncludeTestDictionaries: includeTest,
      Limit: limit,
      Offset: offset,
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.data;
  };

  const initialResponse = await fetchPage(0);
  const { dictionaries: initialDictionaries, totalCount } = initialResponse;

  const totalPages = Math.ceil((totalCount ?? 0) / limit);
  const fetchPromises = Array.from({ length: totalPages - 1 }, (_, i) => fetchPage((i + 1) * limit));

  const results = await Promise.all([initialResponse, ...fetchPromises]);
  const allDictionaries = results.flatMap((result) => result.dictionaries ?? []);

  return allDictionaries.reduce<{ [key: string]: DictionaryContractV1 }>((acc, item) => {
    acc[item.uri] = item;
    return acc;
  }, {});
}

export async function fetchDictionaryByUri(
  location: string,
  includeTestDictionaries?: boolean,
  language?: string,
): Promise<DictionaryContractV1 | null> {
  const bsddApi = getBsddApi();
  const params: RequestParams = { headers: apiHeaders };

  const response = await bsddApi.api.dictionaryGet(
    {
      Uri: location,
      IncludeTestDictionaries: includeTestDictionaries,
    },
    params,
  );

  if (response.status !== 200) {
    throw new Error(`API request failed with status ${response.status}`);
  }

  const { dictionaries } = response.data;
  if (!dictionaries || dictionaries.length === 0) {
    return null;
  }
  return dictionaries[0];
}

async function fetchDictionaryClassPage(location: string, offset: number, languageCode: string | undefined) {
  const bsddApi = getBsddApi();
  const response = await bsddApi.api.dictionaryClassesGetWithClasses(
    {
      Uri: location,
      UseNestedClasses: false,
      Offset: offset,
      Limit: CLASS_ITEM_PAGE_SIZE,
      languageCode,
    },
    { headers: apiHeaders },
  );

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.data;
}

export async function fetchAllDictionaryClasses(
  location: string,
  languageCode: string,
): Promise<ClassListItemContractV1Classes[]> {
  const classes: ClassListItemContractV1Classes[] = [];

  const initialData = await fetchDictionaryClassPage(location, 0, languageCode);
  const totalCount = initialData.classesTotalCount;
  if (totalCount === null || totalCount === undefined) {
    throw new Error('Total count is null or undefined');
  }
  classes.push(...(initialData.classes ?? []));

  const fetchPromises = [];
  for (let offset = CLASS_ITEM_PAGE_SIZE; offset < totalCount; offset += CLASS_ITEM_PAGE_SIZE) {
    fetchPromises.push(
      fetchDictionaryClassPage(location, offset, languageCode).then((data) => {
        classes.push(...(data.classes ?? []));
      }),
    );
  }

  await Promise.all(fetchPromises);
  return classes;
}
