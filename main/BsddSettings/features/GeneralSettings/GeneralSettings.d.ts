import { BsddSettings } from '../../../common/IfcData/bsddBridgeData';
interface GeneralSettingsProps {
    id: number;
    localSettings: BsddSettings;
    setLocalSettings: (settings: BsddSettings) => void;
    setUnsavedChanges: (unsavedChanges: boolean) => void;
    activeTab: boolean;
}
declare function GeneralSettings({ id, localSettings, setLocalSettings, setUnsavedChanges, activeTab }: GeneralSettingsProps): import("react/jsx-runtime").JSX.Element;
export default GeneralSettings;
