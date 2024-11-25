import { Checkbox, Group, Select, TextInput, Tooltip } from '@mantine/core';
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
import { t } from 'i18next';

interface PropertyProps {
  propertySet: IfcPropertySet;
  property: IfcProperty | IfcPropertyEnumeratedValue | IfcPropertySingleValue;
  propertyNaturalLanguageName: string;
}

const updatePropertySets = (
  propertySets: IfcPropertySet[],
  propertySetName: string,
  propertyName: string,
  newValue: any,
): IfcPropertySet[] => {
  return propertySets.map((propertySet) => {
    if (propertySet.name === propertySetName) {
      const updatedProperties = propertySet.hasProperties.map((prop) => {
        if (prop.name === propertyName) {
          return {
            ...prop,
            ...newValue,
          };
        }
        return prop;
      });

      return {
        ...propertySet,
        hasProperties: updatedProperties,
      };
    }
    return propertySet;
  });
};

function Property({ propertySet, property, propertyNaturalLanguageName }: PropertyProps) {
  const dispatch = useAppDispatch();
  const propertySets = useAppSelector(selectIsDefinedBy);
  const propertyIsInstanceMap = useAppSelector((state) => state.ifcData.propertyIsInstanceMap);
  const savedPropertyIsInstanceMap = useAppSelector((state) => state.ifcData.savedPropertyIsInstanceMap);
  const [input, setInput] = useState<any>();

  const instanceEnabled = propertySet.name !== 'Attributes';
  const isSwitchDisabled = savedPropertyIsInstanceMap.hasOwnProperty(property.name);
  const isChecked = propertyIsInstanceMap[property.name] || false;
  const isInputDisabled = isSwitchDisabled || isChecked;

  const inputContainer = (children: React.ReactNode) =>
    instanceEnabled && isInputDisabled ? (
      <Tooltip label={t('bsddSearch.property.tooltipEditInstance')} withArrow>
        {children}
      </Tooltip>
    ) : (
      children
    );

  useEffect(() => {
    switch (property.type) {
      case 'IfcPropertySingleValue': {
        if (property.nominalValue.type === 'IfcBoolean') {
          setInput(
            <Check
              label={propertyNaturalLanguageName}
              description={getInputDescription(propertyNaturalLanguageName, property.name)}
              disabled={isInputDisabled}
              inputContainer={inputContainer}
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
              label={propertyNaturalLanguageName}
              description={getInputDescription(propertyNaturalLanguageName, property.name)}
              placeholder={property.nominalValue.value}
              value={property.nominalValue.value || ''}
              disabled={isInputDisabled}
              inputContainer={inputContainer}
              onChange={(e) => {
                if (propertySets && propertySet.name) {
                  const newValue = {
                    nominalValue: { ...property.nominalValue, value: e.target.value },
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
        }
        break;
      }
      case 'IfcPropertyEnumeratedValue': {
        const value = property.enumerationValues?.[0]?.value;
        const enumerationValues = property.enumerationReference?.enumerationValues || [];
        setInput(
          <Select
            label={propertyNaturalLanguageName}
            description={getInputDescription(propertyNaturalLanguageName, property.name)}
            value={value}
            inputContainer={inputContainer}
            disabled={isInputDisabled || property.enumerationReference?.enumerationValues?.length === 1}
            onChange={(e) => {
              if (propertySets && propertySet.name) {
                const foundValue = enumerationValues.find((element) => element.value === e);
                const newValue = {
                  enumerationValues: foundValue ? [foundValue] : [],
                };
                const updatedPropertySets = updatePropertySets(propertySets, propertySet.name, property.name, newValue);

                dispatch(setIsDefinedBy(Object.values(updatedPropertySets)));
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
        setInput(
          <TextInput
            placeholder={property.name}
            value="{ifcProperty.nominalValue}"
            disabled={isInputDisabled}
            inputContainer={inputContainer}
          />,
        );
        break;
      }
    }
  }, [property, propertySet, setInput, propertyNaturalLanguageName, dispatch, propertySets, isInputDisabled]);

  return (
    <Group>
      <div style={{ flex: 1 }}>{input}</div>
      {instanceEnabled && (
        <Tooltip label={t('bsddSearch.property.setAsInstanceCheckboxTooltip')} withArrow>
          <Checkbox
            style={{ marginTop: '2rem' }}
            disabled={isSwitchDisabled}
            checked={isChecked}
            onChange={(event) => {
              if (!isSwitchDisabled) {
                dispatch(setPropertyIsInstance({ propertyName: property.name, value: event.currentTarget.checked }));
              }
            }}
          />
        </Tooltip>
      )}
    </Group>
  );
}

export default Property;
