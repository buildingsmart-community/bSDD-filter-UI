interface Option {
    label: string;
    value: string;
}
interface Props {
    defaultSelection: Option | undefined;
}
declare function Search({ defaultSelection }: Props): import("react/jsx-runtime").JSX.Element;
export default Search;
