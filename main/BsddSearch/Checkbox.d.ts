interface CheckProps {
    label: string | null;
    description: string | null;
    value: true | false | undefined;
    setValue: (value: true | false | undefined) => void;
    disabled: boolean;
}
declare function Check({ label, description, value, setValue, disabled }: CheckProps): import("react/jsx-runtime").JSX.Element;
export default Check;
