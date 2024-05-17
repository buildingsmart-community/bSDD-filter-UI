import { BsddApiBase } from "./BsddApiBase";

export class BsddApi<SecurityDataType> extends BsddApiBase<SecurityDataType> {
  constructor(baseUrl: string) {
    super({ baseUrl });
  }
}