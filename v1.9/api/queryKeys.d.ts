export declare const bsddKeys: {
    readonly all: readonly ["bsdd"];
    readonly dictionaries: (includeTest?: boolean) => readonly ["bsdd", "dictionaries", {
        readonly includeTest: boolean | undefined;
    }];
    readonly dictionary: (uri: string) => readonly ["bsdd", "dictionary", string];
    readonly dictionaryClasses: (uri: string, lang: string) => readonly ["bsdd", "dictionaryClasses", string, string];
    readonly dictionaryClassesInfinite: (uri: string, lang: string) => readonly ["bsdd", "dictionaryClasses", string, string, "infinite"];
    readonly classDetails: (uri: string, lang: string, filterUris?: string[]) => readonly ["bsdd", "classDetails", string, string, string[]];
    readonly classes: (uris: string[], lang: string) => readonly ["bsdd", "classes", string[], string];
    readonly search: (dictUri: string, searchText: string, lang?: string) => readonly ["bsdd", "search", string, string, {
        readonly lang: string | undefined;
    }];
    readonly propertyName: (uri: string, lang: string) => readonly ["bsdd", "propertyName", string, string];
};
export declare const isPersistableQueryKey: (queryKey: readonly unknown[]) => boolean;
