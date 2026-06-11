// Purpose: bSDD API client entry — re-exports the shared rate-limited transport and generated client
import { bsddTransport } from '../../../shared/bsdd-api/BsddApiClient';
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
  bsddTransport.setAuthenticated(!!token);
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

// hey-api with throwOnError:true throws the parsed response body (a plain object/string),
// not an Error instance. isClientError() in queryClient checks for Error-with-.status,
// so plain-object 4xx throws would bypass it and get retried unnecessarily.
// This interceptor wraps them so the check works. Raw 429/503 responses are converted upstream
// into BsddRateLimitError (a fetch exception), so they arrive here with `response` undefined.
// Exported for unit testing only.
export const _errorInterceptor = (body: unknown, response: Response | undefined): unknown => {
  // hey-api also calls error interceptors for fetch exceptions (network/AbortError),
  // where `response` is undefined. Pass those through unchanged.
  if (!response) return body;
  // 429 and 503 are handled by the transport (BsddRateLimitError) before hey-api sees them;
  // they never reach this interceptor in normal operation. Exclude them defensively so that
  // if they ever did arrive here they would not be misidentified as permanent client errors.
  if (response.status >= 400 && response.status < 500 && response.status !== 429) {
    return Object.assign(new Error(`bSDD API error ${response.status}`), { status: response.status });
  }
  return body;
};

client.interceptors.error.use(_errorInterceptor);
