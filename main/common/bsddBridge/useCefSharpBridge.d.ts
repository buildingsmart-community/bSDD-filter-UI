import { BsddBridgeData, BsddSettings } from '../IfcData/bsddBridgeData';
import { IfcEntity } from '../IfcData/ifc';
import { BsddBridge } from './BsddBridgeInterface';
export interface CefSharpWindow extends Window {
    CefSharp?: {
        BindObjectAsync: (objectName: string) => Promise<void>;
    };
    bsddBridge: BsddBridge;
    updateSelection?: (selection: IfcEntity[]) => void;
    updateSettings?: (settings: BsddSettings) => void;
}
declare const useCefSharpBridge: () => {
    bsddSearch: (ifcEntities: IfcEntity[]) => void;
    bsddSelect: (ifcEntities: IfcEntity[]) => void;
    bsddSearchSave: (bsddBridgeData: BsddBridgeData) => Promise<string>;
    bsddSearchCancel: () => void;
};
export default useCefSharpBridge;
