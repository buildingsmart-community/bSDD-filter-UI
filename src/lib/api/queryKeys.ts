export const bsddKeys = {
  all: ['bsdd'] as const,
  dictionaries: (includeTest?: boolean) => [...bsddKeys.all, 'dictionaries', { includeTest }] as const,
  dictionary: (uri: string) => [...bsddKeys.all, 'dictionary', uri] as const,
  dictionaryClasses: (uri: string, lang: string) => [...bsddKeys.all, 'dictionaryClasses', uri, lang] as const,
  // filterDictionaryUris intentionally excluded — full class data is cached once per URI+lang
  classDetails: (uri: string, lang: string) =>
    [...bsddKeys.all, 'classDetails', uri, lang] as const,
  classes: (uris: string[], lang: string) => [...bsddKeys.all, 'classes', uris, lang] as const,
  search: (dictUri: string, searchText: string) => [...bsddKeys.all, 'search', dictUri, searchText] as const,
  propertyName: (uri: string, lang: string) => [...bsddKeys.all, 'propertyName', uri, lang] as const,
} as const;
