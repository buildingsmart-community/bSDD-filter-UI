import { ReactNode } from 'react';
import { BsddBridgeData, BsddSettings } from '../common/IfcData/bsddBridgeData';
import { IfcEntity } from '../common/IfcData/ifc';
export interface BsddProviderProps {
    settings?: Partial<BsddSettings>;
    onSave?: (data: BsddBridgeData) => Promise<string>;
    onCancel?: () => void;
    onSearch?: (entities: IfcEntity[], key?: keyof IfcEntity) => void;
    onSelect?: (entities: IfcEntity[]) => void;
    loadSettings?: () => Promise<string>;
    loadBridgeData?: () => Promise<string>;
    /** bSDD bearer token. Hosts compute via `useAuthToken()`; library reads via `useBsddBridge()`. */
    accessToken?: string;
    locale?: string;
    children: ReactNode;
}
export declare function BsddProvider({ settings, onSave, onCancel, onSearch, onSelect, loadSettings, loadBridgeData, accessToken, locale, children, }: BsddProviderProps): import("react/jsx-runtime").JSX.Element;
