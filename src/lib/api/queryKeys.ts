export const bsddKeys = {
  all: ['bsdd'] as const,
  dictionaries: (includeTest?: boolean) => [...bsddKeys.all, 'dictionaries', { includeTest }] as const,
  dictionary: (uri: string) => [...bsddKeys.all, 'dictionary', uri] as const,
  dictionaryClasses: (uri: string, lang: string) => [...bsddKeys.all, 'dictionaryClasses', uri, lang] as const,
  dictionaryClassesPage: (uri: string, lang: string, offset: number) =>
    [...bsddKeys.dictionaryClasses(uri, lang), 'page', offset] as const,
  classDetails: (uri: string, lang: string, filterUris: string[] = []) =>
    [...bsddKeys.all, 'classDetails', uri, lang, [...filterUris].sort()] as const,
  classes: (uris: string[], lang: string) => [...bsddKeys.all, 'classes', uris, lang] as const,
  search: (dictUri: string, searchText: string) => [...bsddKeys.all, 'search', dictUri, searchText] as const,
  propertyName: (uri: string, lang: string) => [...bsddKeys.all, 'propertyName', uri, lang] as const,
} as const;
