import { BsddApi } from '../common/BsddApi/BsddApi';

const apiBaseUrl = import.meta.env.VITE_BSDD_ENVIRONMENT;

let apiInstance: BsddApi<unknown> | null = null;

export function getBsddApi(baseUrl?: string): BsddApi<unknown> {
  const url = baseUrl || apiBaseUrl || 'https://api.bsdd.buildingsmart.org';
  if (!apiInstance) {
    apiInstance = new BsddApi(url);
  }
  return apiInstance;
}

const appVersion = import.meta.env.VITE_APP_VERSION;

export const apiHeaders = {
  'X-User-Agent': `bSDD-filter-UI/${appVersion}`,
  Accept: 'text/plain',
};
