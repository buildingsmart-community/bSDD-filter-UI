import { BsddApi } from './BsddApi';

export class BsddApiWrapped<SecurityDataType> extends BsddApi<SecurityDataType> {
  constructor(baseUrl: string) {
    super(baseUrl);
  }
}
