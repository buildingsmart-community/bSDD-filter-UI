import { classGet, propertyGet } from '../../../../shared/bsdd-api/generated/sdk.gen';
// Purpose: bSDD class fetchers using the generated hey-api SDK with rate-limited transport
import type { ClassContractV1, ClassPropertyContractV1 } from '../../../../shared/bsdd-api/generated/types.gen';
import { apiHeaders } from '../bsddApiInstance';

export type { ClassContractV1, ClassPropertyContractV1 };

export async function fetchClassDetail(
  uri: string,
  languageCode: string,
  options?: {
    includeClassProperties?: boolean;
    includeClassRelations?: boolean;
    includeReverseRelations?: boolean;
    reverseRelationDictionaryUris?: string[];
  },
): Promise<ClassContractV1 | null> {
  const { data } = await classGet({
    query: {
      Uri: uri,
      IncludeClassProperties: options?.includeClassProperties ?? true,
      IncludeClassRelations: options?.includeClassRelations ?? true,
      IncludeReverseRelations: options?.includeReverseRelations ?? true,
      ReverseRelationDictionaryUris: options?.reverseRelationDictionaryUris,
      languageCode,
    },
    headers: apiHeaders,
    throwOnError: true,
  });
  return data;
}

export async function fetchMultipleClasses(
  uris: string[],
  languageCode: string,
): Promise<{ [key: string]: ClassContractV1 }> {
  const results = await Promise.all(
    uris.map(async (uri) => {
      const data = await fetchClassDetail(uri, languageCode, {});
      return [uri, data] as const;
    }),
  );
  return Object.fromEntries(results.filter(([, v]) => v !== null)) as { [key: string]: ClassContractV1 };
}

/** Fetches the natural-language name for a single property — used for per-property caching. */
export async function fetchPropertyName(
  property: ClassPropertyContractV1 & { propertyUri: string },
  languageCode: string,
): Promise<string> {
  try {
    const { data } = await propertyGet({
      query: { uri: property.propertyUri, languageCode },
      headers: apiHeaders,
      throwOnError: true,
    });
    return data.name || property.name || '';
  } catch {
    return property.name || '';
  }
}
