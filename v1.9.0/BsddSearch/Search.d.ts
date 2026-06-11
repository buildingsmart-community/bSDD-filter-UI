import { SearchMatchedOn } from '../common/tools/rankClassSearchResults';
export declare const SEARCH_INPUT_ID = "bsdd-class-search";
interface Option {
    label: string;
    value: string;
    code?: string;
    matchedOn?: SearchMatchedOn;
}
interface Props {
    value: Option | null;
    onCommit: (option: Option | null) => void;
    /** Entity-derived seed (host selection); prefills the draft when it changes */
    seedText?: string;
    /** True while the parent is resolving a seed/re-map for this dictionary */
    resolving?: boolean;
}
declare function Search({ value, onCommit, seedText, resolving }: Props): import("react/jsx-runtime").JSX.Element;
export default Search;
