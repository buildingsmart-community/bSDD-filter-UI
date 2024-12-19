import { BsddSettings } from '../../../common/IfcData/bsddBridgeData';
interface ParameterMappingProps {
    id: number;
    localSettings: BsddSettings;
    setLocalSettings: (settings: BsddSettings) => void;
    setUnsavedChanges: (unsavedChanges: boolean) => void;
}
declare function ParameterMapping({ id, localSettings, setLocalSettings, setUnsavedChanges, }: ParameterMappingProps): import("react/jsx-runtime").JSX.Element;
export default ParameterMapping;
