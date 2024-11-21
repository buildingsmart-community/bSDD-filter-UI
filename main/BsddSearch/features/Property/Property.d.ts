import { IfcProperty, IfcPropertyEnumeratedValue, IfcPropertySet, IfcPropertySingleValue } from '../../../common/IfcData/ifc';
interface PropertyProps {
    propertySet: IfcPropertySet;
    property: IfcProperty | IfcPropertyEnumeratedValue | IfcPropertySingleValue;
    property_natural_language_name: string;
}
declare function Property({ propertySet, property, property_natural_language_name }: PropertyProps): import("react/jsx-runtime").JSX.Element;
export default Property;
