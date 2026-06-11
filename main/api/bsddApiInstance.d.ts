export { client as bsddHeyApiClient } from '../../../shared/bsdd-api/generated/client.gen';
export { classGet, dictionaryGet, dictionaryClassesGetWithClasses, searchInDictionaryGet, propertyGet, } from '../../../shared/bsdd-api/generated/sdk.gen';
export declare const apiHeaders: {
    'X-User-Agent': string;
};
export declare const setBsddAccessToken: (token: string | undefined) => void;
export declare const _authInterceptor: (request: Request) => Request;
export declare const _errorInterceptor: (body: unknown, response: Response | undefined) => unknown;
