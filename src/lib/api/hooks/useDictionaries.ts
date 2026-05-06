import { useQuery } from '@tanstack/react-query';

import { fetchAllDictionaries, fetchDictionaryByUri } from '../fetchers/dictionaries';
import { bsddKeys } from '../queryKeys';

// Dictionary listings change rarely; match the IndexedDB persister's 24h TTL
// so warm reloads serve from cache instead of refetching the full paginated list.
const DICTIONARY_STALE_MS = 1000 * 60 * 60 * 24;
const DICTIONARY_GC_MS = 1000 * 60 * 60 * 24;

export function useDictionaries(includeTest?: boolean) {
  return useQuery({
    queryKey: bsddKeys.dictionaries(includeTest),
    queryFn: () => fetchAllDictionaries(includeTest),
    staleTime: DICTIONARY_STALE_MS,
    gcTime: DICTIONARY_GC_MS,
  });
}

export function useDictionary(uri: string | undefined | null) {
  return useQuery({
    queryKey: bsddKeys.dictionary(uri!),
    queryFn: () => fetchDictionaryByUri(uri!),
    staleTime: DICTIONARY_STALE_MS,
    gcTime: DICTIONARY_GC_MS,
    enabled: !!uri,
  });
}
