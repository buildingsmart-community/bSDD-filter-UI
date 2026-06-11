import { dictionaryClassesGetWithClasses, dictionaryGet } from '../../../../shared/bsdd-api/generated/sdk.gen';
// Purpose: bSDD dictionary fetchers using the generated hey-api SDK with rate-limited transport
import type {
  ClassListItemContractV1Classes,
  DictionaryContractV1,
} from '../../../../shared/bsdd-api/generated/types.gen';
import { apiHeaders } from '../bsddApiInstance';

export type { DictionaryContractV1, ClassListItemContractV1Classes };

const DICTIONARIES_PAGE_SIZE = 1000;
export const CLASS_ITEM_PAGE_SIZE = 500;

export async function fetchAllDictionaries(includeTest?: boolean): Promise<{ [key: string]: DictionaryContractV1 }> {
  const limit = DICTIONARIES_PAGE_SIZE;

  const fetchPage = async (offset: number) => {
    const { data } = await dictionaryGet({
      query: { IncludeTestDictionaries: includeTest, Limit: limit, Offset: offset },
      headers: apiHeaders,
      throwOnError: true,
    });
    return data;
  };

  const initialData = await fetchPage(0);
  const totalCount = initialData.totalCount ?? 0;
  const totalPages = Math.ceil(totalCount / limit);
  const remainingPages = await Promise.all(
    Array.from({ length: totalPages - 1 }, (_, i) => fetchPage((i + 1) * limit)),
  );

  const allDictionaries = [initialData, ...remainingPages].flatMap((d) => d.dictionaries ?? []);
  return allDictionaries.reduce<{ [key: string]: DictionaryContractV1 }>((acc, item) => {
    if (item.uri) acc[item.uri] = item;
    return acc;
  }, {});
}

export async function fetchDictionaryByUri(
  location: string,
  includeTestDictionaries?: boolean,
): Promise<DictionaryContractV1 | null> {
  const { data } = await dictionaryGet({
    query: { Uri: location, IncludeTestDictionaries: includeTestDictionaries },
    headers: apiHeaders,
    throwOnError: true,
  });

  const dictionaries = data.dictionaries;
  if (!dictionaries || dictionaries.length === 0) return null;
  return dictionaries[0];
}

// The /Dictionary/v1/Classes listing endpoint accepts `languageCode` per the
// OpenAPI spec — passing it returns class names/descriptions in that locale
// when the dictionary publishes that language, and falls back gracefully
// otherwise. Everything in the UI is localised, so the param is always sent.
async function fetchDictionaryClassPage(location: string, offset: number, languageCode?: string) {
  const { data } = await dictionaryClassesGetWithClasses({
    query: {
      Uri: location,
      Offset: offset,
      Limit: CLASS_ITEM_PAGE_SIZE,
      languageCode,
    },
    headers: apiHeaders,
    throwOnError: true,
  });
  return data;
}

export async function fetchAllDictionaryClasses(
  location: string,
  languageCode?: string,
): Promise<ClassListItemContractV1Classes[]> {
  const classes: ClassListItemContractV1Classes[] = [];

  const initialData = await fetchDictionaryClassPage(location, 0, languageCode);
  const totalCount = initialData.classesTotalCount ?? 0;
  classes.push(...((initialData.classes as ClassListItemContractV1Classes[]) ?? []));

  const fetchPromises = [];
  for (let offset = CLASS_ITEM_PAGE_SIZE; offset < totalCount; offset += CLASS_ITEM_PAGE_SIZE) {
    fetchPromises.push(
      fetchDictionaryClassPage(location, offset, languageCode).then((data) => {
        classes.push(...((data.classes as ClassListItemContractV1Classes[]) ?? []));
      }),
    );
  }

  await Promise.all(fetchPromises);
  return classes;
}

export interface DictionaryClassesPage {
  classes: ClassListItemContractV1Classes[];
  totalCount: number;
}

export async function fetchDictionaryClassesPage(
  location: string,
  offset: number,
  languageCode?: string,
): Promise<DictionaryClassesPage> {
  const data = await fetchDictionaryClassPage(location, offset, languageCode);
  return {
    classes: (data.classes as ClassListItemContractV1Classes[]) ?? [],
    totalCount: data.classesTotalCount ?? 0,
  };
}
