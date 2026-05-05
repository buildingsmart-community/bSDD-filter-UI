import { useQuery } from '@tanstack/react-query';

import { fetchClassDetail, fetchMultipleClasses } from '../fetchers/classes';
import { bsddKeys } from '../queryKeys';

export function useClassDetails(
  uri: string | null | undefined,
  language: string,
  filterDictionaryUris: string[] = [],
  accessToken?: string,
) {
  return useQuery({
    queryKey: bsddKeys.classDetails(uri!, language, filterDictionaryUris),
    queryFn: () =>
      fetchClassDetail(uri!, language, {
        includeClassProperties: true,
        includeClassRelations: true,
        includeReverseRelations: true,
        reverseRelationDictionaryUris: filterDictionaryUris,
      }, accessToken),
    staleTime: 1000 * 60 * 60, // 1 hour
    gcTime: 1000 * 60 * 60 * 24,
    enabled: !!uri,
  });
}

export function useClasses(uris: string[], language: string, accessToken?: string) {
  return useQuery({
    queryKey: bsddKeys.classes(uris, language),
    queryFn: () => fetchMultipleClasses(uris, language, accessToken),
    staleTime: 1000 * 60 * 30,
    gcTime: 1000 * 60 * 60,
    enabled: uris.length > 0,
  });
}
