import { Group, Select, Text, TextInput } from '@mantine/core';
import { useEffect, useState } from 'react';

import {
  IfcProperty,
  IfcPropertyEnumeratedValue,
  IfcPropertySet,
  IfcPropertySingleValue,
} from '../../common/src/IfcData/ifc';
import Check from './Checkbox';

interface PropertyProps {
  propertySet: IfcPropertySet;
  property: IfcProperty | IfcPropertyEnumeratedValue | IfcPropertySingleValue;
  propertyIndex: number;
  propertySets: { [id: string]: IfcPropertySet };
  setPropertySets: (value: { [id: string]: IfcPropertySet }) => void;
}

function Property({ propertySet, property, propertyIndex, propertySets, setPropertySets }: PropertyProps) {
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
              disabled={false}
              value={ifcProperty.nominalValue.value}
              setValue={(value: true | false | undefined) => {
                const newPropertySets = { ...ifcPropertySets };
                const newPropertySet = { ...ifcPropertySet };
                if (newPropertySet.name) {
                  const p: IfcProperty | IfcPropertyEnumeratedValue | IfcPropertySingleValue = { ...ifcProperty };
                  p.nominalValue.value = value;
                  const i: number = newPropertySet.hasProperties.findIndex(
                    (element: any) => element.name === ifcProperty.name,
                  );
                  if (i != -1) {
                    newPropertySet.hasProperties[i] = p;
                    newPropertySets[newPropertySet.name] = newPropertySet;
                    setIfcPropertySets(newPropertySets);
                  }
                }
              }}
            />,
          );
        } else {
          setInput(
            <TextInput
              placeholder={ifcProperty.nominalValue.value}
              value={ifcProperty.nominalValue.value}
              onChange={(e) => {
                const newPropertySets = { ...ifcPropertySets };
                const newPropertySet = { ...ifcPropertySet };
                if (newPropertySet.name) {
                  const p: IfcProperty | IfcPropertyEnumeratedValue | IfcPropertySingleValue = { ...ifcProperty };
                  p.nominalValue.value = e.target.value;
                  const i: number = newPropertySet.hasProperties.findIndex(
                    (element: any) => element.name === ifcProperty.name,
                  );
                  if (i != -1) {
                    newPropertySet.hasProperties[i] = p;
                    newPropertySets[newPropertySet.name] = newPropertySet;
                    setIfcPropertySets(newPropertySets);
                  }
                }
              }}
            />,
          );
        }
        break;
      }
      case 'IfcPropertyEnumeratedValue': {
        setInput(
          <Select
            value={ifcProperty.enumerationValues}
            onChange={(e) => {
              const newPropertySets = { ...ifcPropertySets };
              const newPropertySet = { ...ifcPropertySet };
              if (newPropertySet.name) {
                const p: IfcProperty | IfcPropertyEnumeratedValue | IfcPropertySingleValue = { ...ifcProperty };
                p.enumerationValues = [e];
                const i: number = newPropertySet.hasProperties.findIndex(
                  (element: any) => element.name === ifcProperty.name,
                );
                if (i != -1) {
                  newPropertySet.hasProperties[i] = p;
                  newPropertySets[newPropertySet.name] = newPropertySet;
                  setIfcPropertySets(newPropertySets);
                }
              }
            }}
            data={ifcProperty.enumerationReference.enumerationValues.map((value: any, index: any) => ({
              value,
              label: value,
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
  }, [ifcProperty, ifcPropertySet, setInput, ifcPropertySets, setIfcPropertySets]);

  return (
    <Group className="mb-3 row" key={propertyIndex}>
      <Text>{ifcProperty.name}</Text>
      <div className="col-sm-7">{input}</div>
    </Group>
  );
}
export default Property;
