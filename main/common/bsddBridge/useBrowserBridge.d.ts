import { BsddBridgeData } from '../IfcData/bsddBridgeData';
import { IfcEntity } from '../IfcData/ifc';
declare const useBrowserBridge: () => {
    bsddSearch: (ifcEntities: IfcEntity[]) => void;
    bsddSelect: (ifcEntities: IfcEntity[]) => void;
    bsddSearchSave: (bsddBridgeData: BsddBridgeData) => Promise<string>;
    bsddSearchCancel: () => void;
};
export default useBrowserBridge;
