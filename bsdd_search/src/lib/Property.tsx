import { useState, useEffect, Children } from 'react';
import Check from './Checkbox';
import {
  IfcProperty,
  IfcPropertyEnumeratedValue,
  IfcPropertySet,
  IfcPropertySingleValue,
} from '../../../common/src/IfcData/ifc';
import { Group, Select, TextInput, Text } from '@mantine/core';

interface Props {
  propertySet: IfcPropertySet;
  property: IfcProperty | IfcPropertyEnumeratedValue | IfcPropertySingleValue;
  propertyIndex: number;
  propertySets: { [id: string]: IfcPropertySet };
  setPropertySets: (value: { [id: string]: IfcPropertySet }) => void;
}

function Property(props: Props) {
  const [input, setInput] = useState<any>();
  const ifcProperty: IfcProperty | IfcPropertyEnumeratedValue | IfcPropertySingleValue = props.property;
  const ifcPropertySet: IfcPropertySet = props.propertySet;
  const ifcPropertySets: { [id: string]: IfcPropertySet } = props.propertySets;
  const setIfcPropertySets: (value: { [id: string]: IfcPropertySet }) => void = props.setPropertySets;

  useEffect(() => {
    switch (ifcProperty.type) {
      case 'IfcPropertySingleValue': {
        if (ifcProperty.nominalValue.type === 'IfcBoolean') {
          setInput(
            <Check
              disabled={false}
              value={ifcProperty.nominalValue.value}
              setValue={(value: true | false | undefined) => {
                const propertySets = { ...ifcPropertySets };
                const propertySet = { ...ifcPropertySet };
                if (propertySet.name) {
                  const p: IfcProperty | IfcPropertyEnumeratedValue | IfcPropertySingleValue = { ...ifcProperty };
                  p.nominalValue.value = value;
                  const i: number = propertySet.hasProperties.findIndex(
                    (element: any) => element.name === ifcProperty.name,
                  );
                  if (i != -1) {
                    propertySet.hasProperties[i] = p;
                    propertySets[propertySet.name] = propertySet;
                    setIfcPropertySets(propertySets);
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
                const propertySets = { ...ifcPropertySets };
                const propertySet = { ...ifcPropertySet };
                if (propertySet.name) {
                  const p: IfcProperty | IfcPropertyEnumeratedValue | IfcPropertySingleValue = { ...ifcProperty };
                  p.nominalValue.value = e.target.value;
                  const i: number = propertySet.hasProperties.findIndex(
                    (element: any) => element.name === ifcProperty.name,
                  );
                  if (i != -1) {
                    propertySet.hasProperties[i] = p;
                    propertySets[propertySet.name] = propertySet;
                    setIfcPropertySets(propertySets);
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
              const propertySets = { ...ifcPropertySets };
              const propertySet = { ...ifcPropertySet };
              if (propertySet.name) {
                const p: IfcProperty | IfcPropertyEnumeratedValue | IfcPropertySingleValue = { ...ifcProperty };
                p.enumerationValues = [e];
                const i: number = propertySet.hasProperties.findIndex(
                  (element: any) => element.name === ifcProperty.name,
                );
                if (i != -1) {
                  propertySet.hasProperties[i] = p;
                  propertySets[propertySet.name] = propertySet;
                  setIfcPropertySets(propertySets);
                }
              }
            }}
            data={ifcProperty.enumerationReference.enumerationValues.map((value: any, index: any) => ({
              value: value,
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
    <Group className="mb-3 row" key={props.propertyIndex}>
      <Text>{ifcProperty.name}</Text>
      <div className="col-sm-7">{input}</div>
    </Group>
  );
}
export default Property;
