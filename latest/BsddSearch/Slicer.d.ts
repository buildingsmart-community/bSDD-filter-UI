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
    disabled?: boolean;
}
declare function Slicer({ height, options, label, value, setValue, placeholder, disabled }: SlicerProps): import("react/jsx-runtime").JSX.Element;
export default Slicer;
