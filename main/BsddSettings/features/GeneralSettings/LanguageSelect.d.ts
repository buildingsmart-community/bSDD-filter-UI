import { BsddSettings } from '../../../common/IfcData/bsddBridgeData';
interface LanguageSelectProps {
    localSettings: BsddSettings | undefined;
    setLocalSettings: (settings: BsddSettings) => void;
    setUnsavedChanges: (unsavedChanges: boolean) => void;
}
declare function LanguageSelect({ localSettings, setLocalSettings, setUnsavedChanges }: LanguageSelectProps): import("react/jsx-runtime").JSX.Element;
export default LanguageSelect;
