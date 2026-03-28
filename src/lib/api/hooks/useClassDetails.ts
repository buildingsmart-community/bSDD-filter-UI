import { useQuery } from '@tanstack/react-query';

import { fetchClassDetail, fetchMultipleClasses } from '../fetchers/classes';
import { bsddKeys } from '../queryKeys';

export function useClassDetails(
  uri: string | null | undefined,
  language: string,
  filterDictionaryUris: string[] = [],
) {
  return useQuery({
    queryKey: bsddKeys.classDetails(uri!, language, filterDictionaryUris),
    queryFn: () =>
      fetchClassDetail(uri!, language, {
        includeClassProperties: true,
        includeClassRelations: true,
        includeReverseRelations: true,
        reverseRelationDictionaryUris: filterDictionaryUris,
      }),
    staleTime: 1000 * 60 * 15, // 15 minutes
    gcTime: 1000 * 60 * 60, // 1 hour
    enabled: !!uri,
  });
}

export function useClasses(uris: string[], language: string) {
  return useQuery({
    queryKey: bsddKeys.classes(uris, language),
    queryFn: () => fetchMultipleClasses(uris, language),
    staleTime: 1000 * 60 * 15,
    gcTime: 1000 * 60 * 60,
    enabled: uris.length > 0,
  });
}
