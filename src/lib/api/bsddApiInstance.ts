// Purpose: bSDD API client entry — re-exports the shared rate-limited transport and generated client
import { client } from '../../../shared/bsdd-api/generated/client.gen';

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

// Module-level token updated by BsddProvider when accessToken changes.
let _accessToken: string | undefined;

export const setBsddAccessToken = (token: string | undefined): void => {
  _accessToken = token;
};

// Inject Authorization header on every request when a token is available.
// This applies to all endpoints — even public read endpoints benefit from
// authentication because bSDD grants higher rate limits to identified users.
// Exported for unit testing only — call via the interceptor, not directly.
export const _authInterceptor = (request: Request): Request => {
  if (!_accessToken) return request;
  const headers = new Headers(request.headers);
  headers.set('Authorization', `Bearer ${_accessToken}`);
  return new Request(request, { headers });
};

client.interceptors.request.use(_authInterceptor);
