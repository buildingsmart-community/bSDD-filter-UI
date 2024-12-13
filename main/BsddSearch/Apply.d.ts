import { BsddBridgeData } from '../common/IfcData/bsddBridgeData';
interface ApplyProps {
    bsddSearchSave: (bsddBridgeData: BsddBridgeData) => Promise<string>;
}
declare function Apply({ bsddSearchSave }: ApplyProps): import("react/jsx-runtime").JSX.Element;
export default Apply;
