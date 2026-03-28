import { useQuery } from '@tanstack/react-query';

import { fetchAllDictionaries, fetchDictionaryByUri } from '../fetchers/dictionaries';
import { bsddKeys } from '../queryKeys';

export function useDictionaries(includeTest?: boolean) {
  return useQuery({
    queryKey: bsddKeys.dictionaries(includeTest),
    queryFn: () => fetchAllDictionaries(includeTest),
    staleTime: 1000 * 60 * 60, // 1 hour - dictionaries change rarely
    gcTime: 1000 * 60 * 60 * 24, // 24 hours
  });
}

export function useDictionary(uri: string | undefined | null) {
  return useQuery({
    queryKey: bsddKeys.dictionary(uri!),
    queryFn: () => fetchDictionaryByUri(uri!),
    staleTime: 1000 * 60 * 60,
    gcTime: 1000 * 60 * 60 * 24,
    enabled: !!uri,
  });
}
