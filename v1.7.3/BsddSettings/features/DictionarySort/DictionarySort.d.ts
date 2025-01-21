import { BsddSettings } from '../../../common/IfcData/bsddBridgeData';
interface DomainSortProps {
    id: number;
    localSettings: BsddSettings;
    setLocalSettings: (settings: BsddSettings) => void;
    setUnsavedChanges: (unsavedChanges: boolean) => void;
}
declare function DomainSort({ id, localSettings, setLocalSettings, setUnsavedChanges }: DomainSortProps): import("react/jsx-runtime").JSX.Element;
export default DomainSort;
