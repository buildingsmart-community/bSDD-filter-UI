import { BsddBridgeData } from '../common/IfcData/bsddBridgeData';
interface ApplyProps {
    onSave: (bsddBridgeData: BsddBridgeData) => Promise<string>;
}
declare function Apply({ onSave }: ApplyProps): import("react/jsx-runtime").JSX.Element;
export default Apply;
