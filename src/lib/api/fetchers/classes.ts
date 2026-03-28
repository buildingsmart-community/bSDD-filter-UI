import { ClassContractV1, ClassPropertyContractV1, RequestParams } from '../../common/BsddApi/BsddApiBase';
import { apiHeaders, getBsddApi } from '../bsddApiInstance';

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
  const bsddApi = getBsddApi();
  const params: RequestParams = { headers: apiHeaders };

  const queryParameters = {
    Uri: uri,
    IncludeClassProperties: options?.includeClassProperties ?? true,
    IncludeClassRelations: options?.includeClassRelations ?? true,
    IncludeReverseRelations: options?.includeReverseRelations ?? true,
    ReverseRelationDictionaryUris: options?.reverseRelationDictionaryUris,
    languageCode,
  };

  try {
    const response = await bsddApi.api.classGet(queryParameters, params);
    if (response.status !== 200) {
      console.error(`API request failed with status ${response.status}`);
      return null;
    }
    return response.data;
  } catch (err) {
    console.error('Error fetching classification:', err);
    return null;
  }
}

export async function fetchMultipleClasses(
  uris: string[],
  languageCode: string,
): Promise<{ [key: string]: ClassContractV1 }> {
  const bsddApi = getBsddApi();
  const classesAccumulator: { [key: string]: ClassContractV1 } = {};

  const fetchClass = async (uri: string) => {
    const response = await bsddApi.api.classGet({ Uri: uri, languageCode });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    classesAccumulator[uri] = response.data;
  };

  await Promise.all(uris.map(fetchClass));
  return classesAccumulator;
}

const TRANSLATABLE_ATTRIBUTES: ClassPropertyContractV1[] = [
  {
    name: 'Name',
    propertyUri: 'https://identifier.buildingsmart.org/uri/buildingsmart/ifc/4.3/prop/Name',
  },
  {
    name: 'Description',
    propertyUri: 'https://identifier.buildingsmart.org/uri/buildingsmart/ifc/4.3/prop/Description',
  },
  {
    name: 'ObjectType',
    propertyUri: 'https://identifier.buildingsmart.org/uri/buildingsmart/ifc/4.3/prop/ObjectType',
  },
];

export async function fetchPropertyNaturalLanguageNames(
  classProperties: ClassPropertyContractV1[],
  languageCode: string,
): Promise<{ [propertyUri: string]: string }> {
  const bsddApi = getBsddApi();
  const propertyNames: { [propertyUri: string]: string } = {};

  const fetchPropertyDetails = async (property: ClassPropertyContractV1) => {
    if (property.propertyUri) {
      try {
        const response = await bsddApi.api.propertyGet(
          {
            uri: property.propertyUri,
            languageCode,
            includeClasses: false,
          },
          { headers: apiHeaders },
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        propertyNames[property.propertyUri] = response.data.name || property.name;
      } catch {
        propertyNames[property.propertyUri] = property.name;
      }
    }
  };

  const properties = [...TRANSLATABLE_ATTRIBUTES, ...classProperties];
  await Promise.all(properties.map(fetchPropertyDetails));
  return propertyNames;
}
