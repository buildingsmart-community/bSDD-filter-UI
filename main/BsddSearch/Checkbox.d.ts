import { default as React } from 'react';
interface CheckProps {
    label: string | null;
    description: string | null;
    value: true | false | undefined;
    setValue: (value: true | false | undefined) => void;
    disabled: boolean;
    inputContainer?: (children: React.ReactNode) => React.ReactNode;
}
declare function Check({ label, description, value, setValue, disabled, inputContainer }: CheckProps): import("react/jsx-runtime").JSX.Element;
export default Check;
