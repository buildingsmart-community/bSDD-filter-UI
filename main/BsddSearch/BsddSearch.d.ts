import { IfcEntity, IfcPropertySet } from '../common/IfcData/ifc';
import { BsddSearchProps } from './BsddSearchProps';
export interface Option {
    label: string;
    value: string;
}
export interface BsddConfig {
    baseUrl?: string;
    defaultDomains?: Option[];
    defaultSearch?: Option;
    ifcEntity?: IfcEntity;
}
export type PropertySetMap = Record<string, IfcPropertySet>;
declare function BsddSearch({ selectedIfcEntity }: BsddSearchProps): import("react/jsx-runtime").JSX.Element;
export default BsddSearch;
