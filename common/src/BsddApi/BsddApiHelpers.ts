import { BsddApi } from './BsddApi';
import { ClassContractV1, DictionaryContractV1 } from './BsddApiBase';
import { bsddEnvironments } from './BsddApiEnvironments';

var bsddApiBaseUri = bsddEnvironments['production'];
var bsddApi = new BsddApi(bsddEnvironments['production']);

var classCache: { [key: string]: ClassContractV1 } = {};
var dictionaryCache: { [key: string]: DictionaryContractV1 } = {};

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
  const response = await bsddApi.api.classV1List({
    uri,
    includeClassProperties: true,
    includeChildClassReferences: true,
    includeClassRelations: true,
    // languageCode: languageCode || undefined,
  });
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = response.data;
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
  const response = await bsddApi.api.dictionaryV1List({ Uri: uri });
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
