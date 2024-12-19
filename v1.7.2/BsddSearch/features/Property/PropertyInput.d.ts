import { IfcProperty, IfcPropertyEnumeratedValue, IfcPropertySet, IfcPropertySingleValue } from '../../../common/IfcData/ifc';
interface PropertyInputProps {
    propertySet: IfcPropertySet;
    property: IfcProperty | IfcPropertyEnumeratedValue | IfcPropertySingleValue;
    propertyNaturalLanguageName: string;
    isInstance: boolean;
    inputContainer: (children: React.ReactNode) => React.ReactNode;
}
declare const PropertyInput: ({ propertySet, property, propertyNaturalLanguageName, isInstance, inputContainer, }: PropertyInputProps) => import("react/jsx-runtime").JSX.Element;
export default PropertyInput;
