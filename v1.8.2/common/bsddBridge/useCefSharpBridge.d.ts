import { BsddBridgeData, BsddSettings } from '../IfcData/bsddBridgeData';
import { IfcEntity } from '../IfcData/ifc';
import { BsddBridge } from './BsddBridgeInterface';
export interface CefSharpWindow extends Window {
    CefSharp?: {
        BindObjectAsync: (objectName: string) => Promise<void>;
    };
    bsddBridge: BsddBridge;
    updateSelection?: (selection: IfcEntity[]) => void;
    updateEditSelection?: (selection: IfcEntity[]) => void;
    updateSettings?: (settings: BsddSettings) => void;
}
declare const useCefSharpBridge: () => {
    onSearch: (ifcEntities: IfcEntity[]) => void;
    onSelect: (ifcEntities: IfcEntity[]) => void;
    onSave: (bsddBridgeData: BsddBridgeData) => Promise<string>;
    onCancel: () => void;
};
export default useCefSharpBridge;
