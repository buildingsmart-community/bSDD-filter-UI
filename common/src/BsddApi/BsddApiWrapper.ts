import { BsddApi } from './BsddApi';

const appVersion = import.meta.env.VITE_APP_VERSION;

export const headers = {
  'X-User-Agent': `bSDD-filter-UI/${appVersion}`,
  Accept: 'text/plain',
};
export class BsddApiWrapped<SecurityDataType> extends BsddApi<SecurityDataType> {}
