import { BsddSettings } from '../../../common/IfcData/bsddBridgeData';
interface DictionarySelectionProps {
    id: number;
    localSettings: BsddSettings;
    setLocalSettings: (settings: BsddSettings) => void;
    setUnsavedChanges: (unsavedChanges: boolean) => void;
    setIsLoading: (isLoading: boolean) => void;
}
declare function DictionarySelection({ id, localSettings, setLocalSettings, setUnsavedChanges, setIsLoading, }: DictionarySelectionProps): import("react/jsx-runtime").JSX.Element;
export default DictionarySelection;
