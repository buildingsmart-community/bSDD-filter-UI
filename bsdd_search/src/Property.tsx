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
  propertySets: { [id: string]: IfcPropertySet } | undefined;
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

  useEffect(() => {
    switch (property.type) {
      case 'IfcPropertySingleValue': {
        if (property.nominalValue.type === 'IfcBoolean') {
          setInput(
            <Check
              label={property_natural_language_name}
              description={property.name.length > 0 ? `(${property.name})` : ''}
              disabled={false}
              value={property.nominalValue.value}
              setValue={(value: true | false | undefined) => {
                const newPropertySets = { ...propertySets };
                const newPropertySet = { ...propertySet };
                if (newPropertySet.name) {
                  const p: IfcProperty | IfcPropertyEnumeratedValue | IfcPropertySingleValue = { ...property };
                  const newNominalValue = { ...p.nominalValue, value };
                  p.nominalValue = newNominalValue;
                  const i: number = newPropertySet.hasProperties.findIndex(
                    (element: any) => element.name === property.name,
                  );
                  if (i !== -1) {
                    const newHasProperties = [...newPropertySet.hasProperties];
                    newHasProperties[i] = p;
                    newPropertySet.hasProperties = newHasProperties;
                    newPropertySets[newPropertySet.name] = newPropertySet;

                    if (JSON.stringify(propertySets) !== JSON.stringify(newPropertySets)) {
                      setPropertySets(newPropertySets);
                    }
                  }
                }
              }}
            />,
          );
        } else {
          setInput(
            <TextInput
              label={property_natural_language_name}
              description={property.name.length > 0 ? `(${property.name})` : ''}
              placeholder={property.nominalValue.value}
              value={property.nominalValue.value || ''}
              onChange={(e) => {
                // Deep clone the objects to ensure immutability
                const newPropertySets = JSON.parse(JSON.stringify(propertySets));
                const newPropertySet = newPropertySets[propertySet.name as string];

                if (newPropertySet && newPropertySet.name) {
                  const propertyIndex = newPropertySet.hasProperties.findIndex(
                    (element: any) => element.name === property.name,
                  );

                  if (propertyIndex !== -1) {
                    newPropertySet.hasProperties[propertyIndex] = {
                      ...newPropertySet.hasProperties[propertyIndex],
                      nominalValue: {
                        ...newPropertySet.hasProperties[propertyIndex].nominalValue,
                        value: e.target.value,
                      },
                    };

                    if (JSON.stringify(propertySets) !== JSON.stringify(newPropertySets)) {
                      setPropertySets(newPropertySets);
                    }
                  }
                }
              }}
            />,
          );
        }
        break;
      }
      case 'IfcPropertyEnumeratedValue': {
        const val = property.enumerationValues?.[0]?.value;
        const enumerationValues = property.enumerationReference?.enumerationValues || [];
        setInput(
          <Select
            label={property_natural_language_name}
            description={property.name.length > 0 ? `(${property.name})` : ''}
            value={val}
            onChange={(e) => {
              const foundValue = enumerationValues.find((element) => element.value === e);
              const selectedValues: IfcValue[] = foundValue ? [foundValue] : [];
              const newPropertySets = { ...propertySets };
              const newPropertySet = { ...propertySet };
              if (newPropertySet.name) {
                const newProperty: IfcPropertyEnumeratedValue = { ...property };
                newProperty.enumerationValues = selectedValues;
                const i: number = newPropertySet.hasProperties.findIndex(
                  (prop: IfcProperty | IfcPropertySingleValue | IfcPropertyEnumeratedValue) =>
                    prop.name === property.name,
                );
                if (i !== -1) {
                  const updatedProperties = newPropertySet.hasProperties.map((prop, index) =>
                    index === i ? newProperty : prop,
                  );
                  newPropertySet.hasProperties = updatedProperties;
                  newPropertySets[newPropertySet.name] = newPropertySet;

                  if (JSON.stringify(propertySets) !== JSON.stringify(newPropertySets)) {
                    setPropertySets(newPropertySets);
                  }
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
        setInput(<TextInput placeholder={property.name} value="{ifcProperty.nominalValue}" />);
        break;
      }
    }
  }, [property, propertySet, setInput, propertySets, setPropertySets, property_natural_language_name, dispatch]);

  return input;
}
export default Property;
