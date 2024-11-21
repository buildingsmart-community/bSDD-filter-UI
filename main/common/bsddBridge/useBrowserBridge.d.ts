import { BsddBridgeData } from '../IfcData/bsddBridgeData';
import { IfcEntity } from '../IfcData/ifc';
declare const useBrowserBridge: () => {
    bsddSearch: (bsddBridgeData: BsddBridgeData) => void;
    bsddSelect: (ifcEntities: IfcEntity[]) => void;
    bsddSearchSave: (bsddBridgeData: BsddBridgeData) => Promise<string>;
    bsddSearchCancel: () => void;
};
export default useBrowserBridge;
