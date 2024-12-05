import { IfcEntity } from '../common/IfcData/ifc';
interface ApplyProps {
    callback: (value: any) => void;
    ifcEntity: IfcEntity | undefined;
}
declare function Apply({ callback, ifcEntity }: ApplyProps): import("react/jsx-runtime").JSX.Element;
export default Apply;
