import { ClassContractV1, ClassPropertyContractV1 } from '../../../../shared/bsdd-api/generated/types.gen';
export type { ClassContractV1, ClassPropertyContractV1 };
export declare function fetchClassDetail(uri: string, languageCode: string, options?: {
    includeClassProperties?: boolean;
    includeClassRelations?: boolean;
    includeReverseRelations?: boolean;
    reverseRelationDictionaryUris?: string[];
}): Promise<ClassContractV1 | null>;
export declare function fetchMultipleClasses(uris: string[], languageCode: string): Promise<{
    [key: string]: ClassContractV1;
}>;
/** Fetches the natural-language name for a single property — used for per-property caching. */
export declare function fetchPropertyName(property: ClassPropertyContractV1 & {
    propertyUri: string;
}, languageCode: string): Promise<string>;
