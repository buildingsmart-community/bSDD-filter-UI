export const bsddKeys = {
  all: ['bsdd'] as const,
  dictionaries: (includeTest?: boolean) => [...bsddKeys.all, 'dictionaries', { includeTest }] as const,
  dictionary: (uri: string) => [...bsddKeys.all, 'dictionary', uri] as const,
  dictionaryClasses: (uri: string, lang: string) => [...bsddKeys.all, 'dictionaryClasses', uri, lang] as const,
  classDetails: (uri: string, lang: string, filterDictionaryUris: string[]) =>
    [...bsddKeys.all, 'classDetails', uri, lang, filterDictionaryUris] as const,
  classes: (uris: string[], lang: string) => [...bsddKeys.all, 'classes', uris, lang] as const,
  search: (dictUri: string, searchText: string) => [...bsddKeys.all, 'search', dictUri, searchText] as const,
  propertyNames: (uris: string[], lang: string) => [...bsddKeys.all, 'propertyNames', uris, lang] as const,
} as const;
