import { BsddBridgeData } from '../IfcData/bsddBridgeData';
import { IfcEntity } from '../IfcData/ifc';
declare const useBrowserBridge: () => {
    onSearch: (ifcEntities: IfcEntity[]) => void;
    onSelect: (ifcEntities: IfcEntity[]) => void;
    onSave: (bsddBridgeData: BsddBridgeData) => Promise<string>;
    onCancel: () => void;
};
export default useBrowserBridge;
