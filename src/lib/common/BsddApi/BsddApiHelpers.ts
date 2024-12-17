import { defaultEnvironment } from '../env';
import { BsddApi } from './BsddApi';
import { ClassContractV1, DictionaryContractV1 } from './BsddApiBase';
import { bsddEnvironments } from './BsddApiEnvironments';

let bsddApiBaseUri: string = bsddEnvironments[defaultEnvironment];
let bsddApi: BsddApi<unknown> = new BsddApi(bsddApiBaseUri);

let classCache: { [key: string]: ClassContractV1 } = {};
let dictionaryCache: { [key: string]: DictionaryContractV1 } = {};

// Function to get data from API with caching
export async function getBsddClass(
  bsddEnvironmentUri: string,
  uri: string,
  // languageCode: string | null,
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
  const response = await bsddApi.api.classGet({
    Uri: uri,
    IncludeClassProperties: true,
    IncludeChildClassReferences: true,
    IncludeClassRelations: true,
    // languageCode: languageCode || undefined,
  });
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
  const response = await bsddApi.api.dictionaryGet({ Uri: uri });
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
