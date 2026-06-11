import { useQuery } from '@tanstack/react-query';

import { searchInDictionary } from '../fetchers/search';
import { bsddKeys } from '../queryKeys';

export function useSearchInDictionary(dictionaryUri: string | null | undefined, searchText: string) {
  return useQuery({
    queryKey: bsddKeys.search(dictionaryUri!, searchText),
    queryFn: () =>
      searchInDictionary({
        DictionaryUri: dictionaryUri!,
        SearchText: searchText,
      }),
    staleTime: 1000 * 60 * 5, // 5 minutes
    gcTime: 1000 * 60 * 15, // 15 minutes
    enabled: !!dictionaryUri && searchText.trim().length > 0,
  });
}
