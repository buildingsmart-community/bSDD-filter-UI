// Purpose: class options for a relation-less filter-dictionary slicer.
// Three modes, resolved declaratively per render:
// 1. Full list — small dictionaries load completely (≤5 paged calls, persisted
//    24h), large ones ride on a list the validation flow already cached.
//    Filtering then happens client-side in the Slicer: instant and free.
// 2. Browse — infinite paging through Dictionary/v1/Classes while scrolling.
// 3. Server search — debounced SearchInDictionary for large, uncached
//    dictionaries, ranked because the endpoint also matches synonyms and
//    descriptions but returns hits alphabetically.
import { useDebouncedValue } from '@mantine/hooks';
import { useInfiniteQuery, useQuery, useQueryClient } from '@tanstack/react-query';
import { useCallback, useMemo } from 'react';

import type { ClassListItemContractV1Classes } from '../../../../../shared/bsdd-api/generated/types.gen';
import {
  CLASS_ITEM_PAGE_SIZE,
  fetchAllDictionaryClasses,
  fetchDictionaryClassesPage,
} from '../../../api/fetchers/dictionaries';
import { searchInDictionary } from '../../../api/fetchers/search';
import { bsddKeys } from '../../../api/queryKeys';
import { type SearchMatchedOn, rankClassSearchResults } from '../../../common/tools/rankClassSearchResults';
import { useSettingsStore } from '../../../stores/settingsStore';

export interface ClassOption {
  label: string;
  value: string;
  uri: string;
  matchedOn?: SearchMatchedOn;
}

// Up to 5 paged calls (one anonymous burst window) — a bound on how long a
// background load may shadow interactive calls in the FIFO transport queue,
// not on the rate budget. Dictionaries above this keep server-side search.
const FULL_LOAD_MAX_CLASSES = 2500;
const SEARCH_DEBOUNCE_MS = 300;

export const toOptions = (classes: ClassListItemContractV1Classes[]): ClassOption[] =>
  classes
    .filter((c) => c.uri && c.code)
    .map((c) => ({
      value: c.code as string,
      label: c.name || '',
      uri: c.uri as string,
    }));

export function useDictionaryClassOptions(dictionaryUri: string, searchText: string, enabled: boolean) {
  const queryClient = useQueryClient();
  const languageCode = useSettingsStore((s) => s.language);
  const [debouncedSearchText] = useDebouncedValue(searchText, SEARCH_DEBOUNCE_MS);

  // Skip even the first browse page when the complete list is already cached
  // (validation flow, or a restored persister snapshot). Re-evaluated on every
  // render; the fullListQuery observer below triggers one when the list lands.
  const hasCachedFullList =
    queryClient.getQueryData(bsddKeys.dictionaryClasses(dictionaryUri, languageCode)) !== undefined;

  const browseQuery = useInfiniteQuery({
    queryKey: bsddKeys.dictionaryClassesInfinite(dictionaryUri, languageCode),
    queryFn: ({ pageParam }) => fetchDictionaryClassesPage(dictionaryUri, pageParam, languageCode),
    initialPageParam: 0,
    getNextPageParam: (lastPage, _pages, lastOffset) =>
      lastOffset + CLASS_ITEM_PAGE_SIZE < lastPage.totalCount ? lastOffset + CLASS_ITEM_PAGE_SIZE : undefined,
    staleTime: 1000 * 60 * 30,
    enabled: enabled && !hasCachedFullList,
  });

  const totalCount = browseQuery.data?.pages[0]?.totalCount;

  // Disabled query observers still surface cached data, so when validation (or
  // a previous session via the IndexedDB persister) already paid for the
  // complete list, even large dictionaries get it for free. The long staleTime
  // keeps a restored list from triggering a surprise multi-call refetch.
  const fullListQuery = useQuery({
    queryKey: bsddKeys.dictionaryClasses(dictionaryUri, languageCode),
    queryFn: () => fetchAllDictionaryClasses(dictionaryUri, languageCode),
    staleTime: 1000 * 60 * 60 * 24,
    enabled: enabled && totalCount !== undefined && totalCount <= FULL_LOAD_MAX_CLASSES,
  });

  const browseComplete = browseQuery.data !== undefined && !browseQuery.hasNextPage;
  const fullyLoaded = fullListQuery.data !== undefined || browseComplete;
  const serverSearch = enabled && !fullyLoaded;

  const trimmedSearch = debouncedSearchText.trim();
  const searchActive = serverSearch && trimmedSearch.length > 0;
  const searchQuery = useQuery({
    queryKey: bsddKeys.search(dictionaryUri, trimmedSearch, languageCode),
    queryFn: () => searchInDictionary({ DictionaryUri: dictionaryUri, SearchText: trimmedSearch, languageCode }),
    staleTime: 1000 * 60 * 5,
    enabled: searchActive,
  });

  const options = useMemo<ClassOption[]>(() => {
    if (!enabled) return [];
    if (fullListQuery.data) return toOptions(fullListQuery.data);
    if (searchActive) {
      if (!searchQuery.data) return [];
      return rankClassSearchResults(searchQuery.data.dictionary?.classes, trimmedSearch).map(
        ({ bsddClass, matchedOn }) => ({
          // Code = referenceCode when published, else the URI's last path segment
          value: bsddClass.referenceCode ?? bsddClass.uri.split('/').filter(Boolean).pop() ?? bsddClass.uri,
          label: bsddClass.name,
          uri: bsddClass.uri,
          matchedOn,
        }),
      );
    }
    return toOptions(browseQuery.data?.pages.flatMap((page) => page.classes) ?? []);
  }, [enabled, fullListQuery.data, searchActive, searchQuery.data, trimmedSearch, browseQuery.data]);

  const { fetchNextPage, hasNextPage, isFetchingNextPage } = browseQuery;
  const loadMore = useCallback(() => {
    if (hasNextPage && !isFetchingNextPage) fetchNextPage();
  }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

  return {
    options,
    serverSearch,
    // Covers the debounce window too, so the stale browse list never poses as a result
    isSearching:
      serverSearch && searchText.trim().length > 0 && (searchText.trim() !== trimmedSearch || searchQuery.isPending),
    loadMore,
    isLoadingMore: isFetchingNextPage,
  };
}
