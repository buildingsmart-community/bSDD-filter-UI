interface Option {
    label: string;
    value: string;
    uri: string;
}
interface SlicerProps {
    height: number;
    options: Option[];
    label: string | undefined;
    value: Option | null;
    setValue: (newValue: Option | null) => void;
    placeholder: string | undefined;
    /** When provided, called with the search query for server-side filtering.
     *  The parent should update `options` with the results. */
    onSearch?: (query: string) => void;
    /** Indicates that a server-side search is in progress */
    isSearching?: boolean;
    /** Forces the slicer into a disabled/loading state */
    loading?: boolean;
}
declare function Slicer({ height, options, label, value, setValue, placeholder, onSearch, isSearching, loading }: SlicerProps): import("react/jsx-runtime").JSX.Element;
export default Slicer;
