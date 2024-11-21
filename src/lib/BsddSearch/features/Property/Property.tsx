import { Checkbox, Group, rem, Select, Switch, TextInput, Tooltip, useMantineTheme } from '@mantine/core';
import { useEffect, useState } from 'react';

import { useAppDispatch, useAppSelector } from '../../../common/app/hooks';
import {
  IfcProperty,
  IfcPropertyEnumeratedValue,
  IfcPropertySet,
  IfcPropertySingleValue,
  IfcValue,
} from '../../../common/IfcData/ifc';
import { getInputDescription } from '../../../common/tools/utils';
import { selectIsDefinedBy, setIsDefinedBy } from '../../../common/slices/ifcEntitySlice';
import Check from '../../Checkbox';
import { setPropertyIsInstance } from '../../../common/slices/ifcDataSlice';

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
  const propertyIsInstanceMap = useAppSelector((state) => state.ifcData.propertyIsInstanceMap);
  const savedPropertyIsInstanceMap = useAppSelector((state) => state.ifcData.savedPropertyIsInstanceMap);
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

  const isSwitchDisabled = savedPropertyIsInstanceMap.hasOwnProperty(property.name);
  const checked = propertyIsInstanceMap[property.name] || false;

  return (
    <Group>
      <div style={{ flex: 1 }}>{input}</div>
      <Tooltip label="Set as instance property" withArrow>
        <Checkbox
          style={{ marginTop: '2rem' }}
          disabled={isSwitchDisabled}
          checked={checked}
          onChange={(event) => {
            if (!isSwitchDisabled) {
              dispatch(setPropertyIsInstance({ propertyName: property.name, value: event.currentTarget.checked }));
            }
          }}
        />
      </Tooltip>
    </Group>
  );
}

export default Property;
