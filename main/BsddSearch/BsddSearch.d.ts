import { IfcEntity, IfcPropertySet } from '../common/IfcData/ifc';
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
interface BsddSearchProps {
    searchKey?: keyof IfcEntity;
}
export type PropertySetMap = Record<string, IfcPropertySet>;
declare function BsddSearch({ searchKey }: BsddSearchProps): import("react/jsx-runtime").JSX.Element;
export default BsddSearch;
