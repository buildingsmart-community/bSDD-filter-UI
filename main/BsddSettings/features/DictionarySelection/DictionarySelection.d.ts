import { BsddSettings } from '../../../common/IfcData/bsddBridgeData';
interface DomainSelectionProps {
    id: number;
    localSettings: BsddSettings;
    setLocalSettings: (settings: BsddSettings) => void;
    setUnsavedChanges: (unsavedChanges: boolean) => void;
    setIsLoading: (isLoading: boolean) => void;
}
declare function DomainSelection({ id, localSettings, setLocalSettings, setUnsavedChanges, setIsLoading, }: DomainSelectionProps): import("react/jsx-runtime").JSX.Element;
export default DomainSelection;
