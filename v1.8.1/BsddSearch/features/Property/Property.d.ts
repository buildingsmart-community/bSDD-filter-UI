import { IfcProperty, IfcPropertyEnumeratedValue, IfcPropertySet, IfcPropertySingleValue } from '../../../common/IfcData/ifc';
interface PropertyProps {
    propertySet: IfcPropertySet;
    property: IfcProperty | IfcPropertyEnumeratedValue | IfcPropertySingleValue;
    propertyNaturalLanguageName: string;
}
declare function Property({ propertySet, property, propertyNaturalLanguageName }: PropertyProps): import("react/jsx-runtime").JSX.Element;
export default Property;
