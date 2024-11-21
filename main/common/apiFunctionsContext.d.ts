import { ReactNode } from 'react';
import { IfcEntity } from './IfcData/ifc';
import { BsddBridgeData } from './IfcData/bsddBridgeData';
interface ApiFunctionsContextType {
    loadSettings?: () => Promise<string>;
    loadBridgeData?: () => Promise<string>;
    bsddSearch?: (ifcEntities: IfcEntity[]) => void;
    bsddSelect?: (ifcEntities: IfcEntity[]) => void;
    bsddSearchSave?: (bsddBridgeData: BsddBridgeData) => Promise<string>;
    bsddSearchCancel?: () => void;
}
interface ApiFunctionsProviderProps {
    value: ApiFunctionsContextType;
    children: ReactNode;
}
export declare function ApiFunctionsProvider({ value, children }: ApiFunctionsProviderProps): import("react/jsx-runtime").JSX.Element;
export declare const useApiFunctions: () => Required<ApiFunctionsContextType>;
export {};
