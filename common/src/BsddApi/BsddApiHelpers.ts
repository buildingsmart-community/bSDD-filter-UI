import { defaultEnvironment } from '../env';
import { BsddApi } from './BsddApi';
import { ClassContractV1, DictionaryContractV1 } from './BsddApiBase';
import { bsddEnvironments } from './BsddApiEnvironments';
import { headers } from './BsddApiWrapper';

let bsddApiBaseUri: string = bsddEnvironments[defaultEnvironment];
let bsddApi: BsddApi<unknown> = new BsddApi(bsddApiBaseUri);

let classCache: { [key: string]: ClassContractV1 } = {};
let dictionaryCache: { [key: string]: DictionaryContractV1 } = {};

export interface DictionaryClassificationsMap {
  [dictionaryUri: string]: ClassContractV1[];
}
export interface DictionaryClassificationMap {
  [dictionaryUri: string]: ClassContractV1;
}

// Function to get data from API with caching
export async function getBsddClass(
  bsddEnvironmentUri: string,
  uri: string,
  languageCode: string | null,
): Promise<ClassContractV1> {
  // reset cache if environment changes
  if (bsddApiBaseUri !== bsddEnvironmentUri) {
    bsddApiBaseUri = bsddEnvironmentUri;
    bsddApi = new BsddApi(bsddApiBaseUri);
    classCache = {};
  }

  if (classCache[uri]) {
    return classCache[uri];
  }
  const response = await bsddApi.api.classV1List(
    {
      Uri: uri,
      IncludeClassProperties: true,
      IncludeChildClassReferences: true,
      IncludeClassRelations: true,
      languageCode: languageCode || undefined,
    },
    { headers },
  );
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const { data } = response;
  classCache[uri] = data;
  return data;
}

export async function getBsddDictionary(bsddEnvironmentUri: string, uri: string): Promise<DictionaryContractV1> {
  // reset cache if environment changes
  if (bsddApiBaseUri !== bsddEnvironmentUri) {
    bsddApiBaseUri = bsddEnvironmentUri;
    bsddApi = new BsddApi(bsddApiBaseUri);
    dictionaryCache = {};
  }

  if (dictionaryCache[uri]) {
    return dictionaryCache[uri];
  }
  const response = await bsddApi.api.dictionaryV1List({ Uri: uri }, { headers });
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = response.data.dictionaries;
  if (!data || data.length === 0) {
    throw new Error(`No dictionary found for uri: ${uri}`);
  }
  dictionaryCache[uri] = data[0];
  return data[0];
}
