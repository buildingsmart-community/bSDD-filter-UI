export const bsddKeys = {
  all: ['bsdd'] as const,
  dictionaries: (includeTest?: boolean) => [...bsddKeys.all, 'dictionaries', { includeTest }] as const,
  dictionary: (uri: string) => [...bsddKeys.all, 'dictionary', uri] as const,
  dictionaryClasses: (uri: string, lang: string) => [...bsddKeys.all, 'dictionaryClasses', uri, lang] as const,
  dictionaryClassesInfinite: (uri: string, lang: string) =>
    [...bsddKeys.dictionaryClasses(uri, lang), 'infinite'] as const,
  classDetails: (uri: string, lang: string, filterUris: string[] = []) =>
    [...bsddKeys.all, 'classDetails', uri, lang, [...filterUris].sort()] as const,
  classes: (uris: string[], lang: string) => [...bsddKeys.all, 'classes', uris, lang] as const,
  search: (dictUri: string, searchText: string, lang?: string) =>
    [...bsddKeys.all, 'search', dictUri, searchText, { lang }] as const,
  propertyName: (uri: string, lang: string) => [...bsddKeys.all, 'propertyName', uri, lang] as const,
} as const;

// Search results are ephemeral (5 min staleTime) — persisting them only bloats
// the IndexedDB snapshot that gets rewritten on every cache change while the
// user types, and slows the restore on each window boot.
export const isPersistableQueryKey = (queryKey: readonly unknown[]): boolean => queryKey[1] !== 'search';
