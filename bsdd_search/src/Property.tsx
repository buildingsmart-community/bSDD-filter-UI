import { Select, TextInput } from '@mantine/core';
import { useEffect, useState } from 'react';

import {
  IfcProperty,
  IfcPropertyEnumeratedValue,
  IfcPropertySet,
  IfcPropertySingleValue,
  IfcValue,
} from '../../common/src/ifc/ifc';
import { useAppDispatch } from './app/hooks';
import Check from './Checkbox';
import { setIsDefinedBy } from './features/ifc/ifcEntitySlice';

interface PropertyProps {
  propertySet: IfcPropertySet;
  property: IfcProperty | IfcPropertyEnumeratedValue | IfcPropertySingleValue;
  property_natural_language_name: string;
  propertySets: { [id: string]: IfcPropertySet };
  setPropertySets: (value: { [id: string]: IfcPropertySet }) => void;
}

function Property({
  propertySet,
  property,
  property_natural_language_name,
  propertySets,
  setPropertySets,
}: PropertyProps) {
  const dispatch = useAppDispatch();
  const [input, setInput] = useState<any>();
  const ifcProperty: IfcProperty | IfcPropertyEnumeratedValue | IfcPropertySingleValue = property;
  const ifcPropertySet: IfcPropertySet = propertySet;
  const ifcPropertySets: { [id: string]: IfcPropertySet } = propertySets;
  const setIfcPropertySets: (value: { [id: string]: IfcPropertySet }) => void = setPropertySets;

  useEffect(() => {
    switch (ifcProperty.type) {
      case 'IfcPropertySingleValue': {
        if (ifcProperty.nominalValue.type === 'IfcBoolean') {
          setInput(
            <Check
              label={property_natural_language_name}
              description={ifcProperty.name.length > 0 ? `(${ifcProperty.name})` : ''}
              disabled={false}
              value={ifcProperty.nominalValue.value}
              setValue={(value: true | false | undefined) => {
                const newPropertySets = { ...ifcPropertySets };
                const newPropertySet = { ...ifcPropertySet };
                if (newPropertySet.name) {
                  const p: IfcProperty | IfcPropertyEnumeratedValue | IfcPropertySingleValue = { ...ifcProperty };
                  const newNominalValue = { ...p.nominalValue, value };
                  p.nominalValue = newNominalValue;
                  const i: number = newPropertySet.hasProperties.findIndex(
                    (element: any) => element.name === ifcProperty.name,
                  );
                  if (i !== -1) {
                    const newHasProperties = [...newPropertySet.hasProperties];
                    newHasProperties[i] = p;
                    newPropertySet.hasProperties = newHasProperties;
                    newPropertySets[newPropertySet.name] = newPropertySet;
                    setIfcPropertySets(newPropertySets);
                    dispatch(setIsDefinedBy(Object.values(newPropertySets)));
                  }
                }
              }}
            />,
          );
        } else {
          setInput(
            <TextInput
              label={property_natural_language_name}
              description={ifcProperty.name.length > 0 ? `(${ifcProperty.name})` : ''}
              placeholder={ifcProperty.nominalValue.value}
              value={ifcProperty.nominalValue.value || ''}
              onChange={(e) => {
                // Deep clone the objects to ensure immutability
                const newPropertySets = JSON.parse(JSON.stringify(ifcPropertySets));
                const newPropertySet = newPropertySets[ifcPropertySet.name as string];

                if (newPropertySet && newPropertySet.name) {
                  const propertyIndex = newPropertySet.hasProperties.findIndex(
                    (element: any) => element.name === ifcProperty.name,
                  );

                  if (propertyIndex !== -1) {
                    newPropertySet.hasProperties[propertyIndex] = {
                      ...newPropertySet.hasProperties[propertyIndex],
                      nominalValue: {
                        ...newPropertySet.hasProperties[propertyIndex].nominalValue,
                        value: e.target.value,
                      },
                    };

                    setIfcPropertySets(newPropertySets);
                    dispatch(setIsDefinedBy(Object.values(newPropertySets)));
                  }
                }
              }}
            />,
          );
        }
        break;
      }
      case 'IfcPropertyEnumeratedValue': {
        const val = ifcProperty.enumerationValues?.[0]?.value;
        const enumerationValues = ifcProperty.enumerationReference?.enumerationValues || [];
        setInput(
          <Select
            label={property_natural_language_name}
            description={ifcProperty.name.length > 0 ? `(${ifcProperty.name})` : ''}
            value={val}
            onChange={(e) => {
              const foundValue = enumerationValues.find((element) => element.value === e);
              const selectedValues: IfcValue[] = foundValue ? [foundValue] : [];
              const newPropertySets = { ...ifcPropertySets };
              const newPropertySet = { ...ifcPropertySet };
              if (newPropertySet.name) {
                const newProperty: IfcPropertyEnumeratedValue = { ...ifcProperty };
                newProperty.enumerationValues = selectedValues;
                const i: number = newPropertySet.hasProperties.findIndex(
                  (prop: IfcProperty | IfcPropertySingleValue | IfcPropertyEnumeratedValue) =>
                    prop.name === ifcProperty.name,
                );
                if (i !== -1) {
                  const updatedProperties = newPropertySet.hasProperties.map((prop, index) =>
                    index === i ? newProperty : prop,
                  );
                  newPropertySet.hasProperties = updatedProperties;
                  newPropertySets[newPropertySet.name] = newPropertySet;
                  setIfcPropertySets(newPropertySets);
                  dispatch(setIsDefinedBy(Object.values(newPropertySets)));
                }
              }
            }}
            data={enumerationValues.map((ifcValue: IfcValue) => ({
              value: ifcValue.value,
              label: ifcValue.value,
            }))}
          />,
        );
        break;
      }
      default: {
        setInput(<TextInput placeholder={ifcProperty.name} value="{ifcProperty.nominalValue}" />);
        break;
      }
    }
  }, [
    ifcProperty,
    ifcPropertySet,
    setInput,
    ifcPropertySets,
    setIfcPropertySets,
    property_natural_language_name,
    dispatch,
  ]);

  return input;
}
export default Property;
