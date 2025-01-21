import { BsddApi } from './BsddApi';
export declare const headers: {
    'X-User-Agent': string;
    Accept: string;
};
export declare class BsddApiWrapped<SecurityDataType> extends BsddApi<SecurityDataType> {
}
