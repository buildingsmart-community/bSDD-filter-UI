// Purpose: bSDD API client entry — re-exports the shared rate-limited transport and generated client
export { client as bsddHeyApiClient } from '../../../shared/bsdd-api/generated/client.gen';
export {
  classGet,
  dictionaryGet,
  dictionaryClassesGetWithClasses,
  searchInDictionaryGet,
  propertyGet,
} from '../../../shared/bsdd-api/generated/sdk.gen';

const appVersion = import.meta.env.VITE_APP_VERSION;

export const apiHeaders = {
  'X-User-Agent': `bSDD-filter-UI/${appVersion}`,
};
