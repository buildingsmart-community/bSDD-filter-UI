import { BsddApi } from '../common/BsddApi/BsddApi';
interface Option {
    label: string;
    value: string;
    synonyms?: string[];
}
interface Props {
    api: BsddApi<unknown>;
    defaultSelection: Option | undefined;
}
declare function Search({ api, defaultSelection }: Props): import("react/jsx-runtime").JSX.Element;
export default Search;
