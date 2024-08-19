import { Select, TextInput } from '@mantine/core';
import { useEffect, useState } from 'react';

import {
  IfcProperty,
  IfcPropertyEnumeratedValue,
  IfcPropertySet,
  IfcPropertySingleValue,
  IfcValue,
} from '../../common/src/ifc/ifc';
import { getInputDescription } from '../../common/src/tools/utils';
import { useAppDispatch, useAppSelector } from './app/hooks';
import Check from './Checkbox';
import { selectIsDefinedBy, setIsDefinedBy } from './features/ifc/ifcEntitySlice';

interface PropertyProps {
  propertySet: IfcPropertySet;
  property: IfcProperty | IfcPropertyEnumeratedValue | IfcPropertySingleValue;
  property_natural_language_name: string;
}

const updatePropertySets = (
  propertySets: IfcPropertySet[],
  propertySetName: string,
  propertyName: string,
  newValue: any,
): IfcPropertySet[] => {
  return propertySets.map((propertySet) => {
    if (propertySet.name === propertySetName) {
      const updatedProperties = propertySet.hasProperties.map((property) => {
        if (property.name === propertyName) {
          return {
            ...property,
            ...newValue,
          };
        }
        return property;
      });

      return {
        ...propertySet,
        hasProperties: updatedProperties,
      };
    }
    return propertySet;
  });
};

function Property({ propertySet, property, property_natural_language_name }: PropertyProps) {
  const dispatch = useAppDispatch();
  const propertySets = useAppSelector(selectIsDefinedBy);
  const [input, setInput] = useState<any>();

  useEffect(() => {
    switch (property.type) {
      case 'IfcPropertySingleValue': {
        if (property.nominalValue.type === 'IfcBoolean') {
          setInput(
            <Check
              label={property_natural_language_name}
              description={getInputDescription(property_natural_language_name, property.name)}
              disabled={false}
              value={property.nominalValue.value}
              setValue={(value: true | false | undefined) => {
                if (propertySets && propertySet.name) {
                  const newValue = {
                    nominalValue: { ...property.nominalValue, value },
                  };

                  const updatedPropertySets = updatePropertySets(
                    propertySets,
                    propertySet.name,
                    property.name,
                    newValue,
                  );
                  dispatch(setIsDefinedBy(Object.values(updatedPropertySets)));
                }
              }}
            />,
          );
        } else {
          setInput(
            <TextInput
              label={property_natural_language_name}
              description={getInputDescription(property_natural_language_name, property.name)}
              placeholder={property.nominalValue.value}
              value={property.nominalValue.value || ''}
              onChange={(e) => {
                if (propertySets && propertySet.name) {
                  const newValue = {
                    nominalValue: { ...property.nominalValue, value: e.target.value },
                  };
                  const newPropertySets = updatePropertySets(propertySets, propertySet.name, property.name, newValue);
                  dispatch(setIsDefinedBy(Object.values(newPropertySets)));
                }
              }}
            />,
          );
        }
        break;
      }
      case 'IfcPropertyEnumeratedValue': {
        const value = property.enumerationValues?.[0]?.value;
        const enumerationValues = property.enumerationReference?.enumerationValues || [];
        setInput(
          <Select
            label={property_natural_language_name}
            description={getInputDescription(property_natural_language_name, property.name)}
            value={value}
            disabled={property.enumerationReference?.enumerationValues?.length === 1}
            onChange={(e) => {
              if (propertySets && propertySet.name) {
                const foundValue = enumerationValues.find((element) => element.value === e);
                const newValue = {
                  enumerationValues: foundValue ? [foundValue] : [],
                };
                const newPropertySets = updatePropertySets(propertySets, propertySet.name, property.name, newValue);

                dispatch(setIsDefinedBy(Object.values(newPropertySets)));
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
  }, [property, propertySet, setInput, property_natural_language_name, dispatch, propertySets]);

  return input;
}
export default Property;
