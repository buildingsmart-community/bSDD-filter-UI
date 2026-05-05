import { useQuery } from '@tanstack/react-query';

import { fetchAllDictionaryClasses } from '../fetchers/dictionaries';
import { bsddKeys } from '../queryKeys';

export function useDictionaryClasses(uri: string | undefined | null, language: string, accessToken?: string) {
  return useQuery({
    queryKey: bsddKeys.dictionaryClasses(uri!, language),
    queryFn: () => fetchAllDictionaryClasses(uri!, language, accessToken),
    staleTime: 1000 * 60 * 30, // 30 minutes
    gcTime: 1000 * 60 * 60, // 1 hour
    enabled: !!uri,
  });
}
