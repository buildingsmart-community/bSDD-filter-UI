import { useQuery } from '@tanstack/react-query';

import { fetchAllDictionaries, fetchDictionaryByUri } from '../fetchers/dictionaries';
import { bsddKeys } from '../queryKeys';

export function useDictionaries(includeTest?: boolean, accessToken?: string) {
  return useQuery({
    queryKey: bsddKeys.dictionaries(includeTest),
    queryFn: () => fetchAllDictionaries(includeTest, accessToken),
    staleTime: 1000 * 60 * 60, // 1 hour - dictionaries change rarely
    gcTime: 1000 * 60 * 60 * 24, // 24 hours
  });
}

export function useDictionary(uri: string | undefined | null, accessToken?: string) {
  return useQuery({
    queryKey: bsddKeys.dictionary(uri!),
    queryFn: () => fetchDictionaryByUri(uri!, undefined, accessToken),
    staleTime: 1000 * 60 * 60,
    gcTime: 1000 * 60 * 60 * 24,
    enabled: !!uri,
  });
}
