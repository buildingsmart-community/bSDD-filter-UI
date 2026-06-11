import { ClassOption } from './useDictionaryClassOptions';
interface DictionarySlicerProps {
    height: number;
    dictionaryUri: string;
    label: string | undefined;
    /** Options derived from the main class relations; when present, no fetching is needed */
    relationOptions: ClassOption[] | undefined;
    value: ClassOption | null;
    setValue: (newValue: ClassOption | null) => void;
    loading: boolean;
}
declare function DictionarySlicer({ height, dictionaryUri, label, relationOptions, value, setValue, loading, }: DictionarySlicerProps): import("react/jsx-runtime").JSX.Element;
export default DictionarySlicer;
