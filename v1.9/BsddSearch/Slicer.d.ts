import { SearchMatchedOn } from '../common/tools/rankClassSearchResults';
interface Option {
    label: string;
    value: string;
    uri: string;
    matchedOn?: SearchMatchedOn;
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
    /** When provided, called when scrolling reaches the end of `options` outside
     *  of an active search. The parent should append the next page to `options`. */
    onLoadMore?: () => void;
    /** Indicates that more options are being fetched after an onLoadMore call */
    isLoadingMore?: boolean;
    /** Forces the slicer into a disabled/loading state */
    loading?: boolean;
}
declare function Slicer({ height, options, label, value, setValue, placeholder, onSearch, isSearching, onLoadMore, isLoadingMore, loading, }: SlicerProps): import("react/jsx-runtime").JSX.Element;
export default Slicer;
