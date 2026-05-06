interface Option {
    label: string;
    value: string;
}
interface Props {
    defaultSelection: Option | undefined;
    onClassificationSelect: (uri: string | null) => void;
}
declare function Search({ defaultSelection, onClassificationSelect }: Props): import("react/jsx-runtime").JSX.Element;
export default Search;
