import { Checkbox, Group, Tooltip, Select, TextInput } from '@mantine/core';
import { useAppDispatch, useAppSelector } from '../../../common/app/hooks';
import {
  IfcProperty,
  IfcPropertyEnumeratedValue,
  IfcPropertySet,
  IfcPropertySingleValue,
  IfcValue,
} from '../../../common/IfcData/ifc';
import { setPropertyIsInstance } from '../../../common/slices/ifcDataSlice';
import { t } from 'i18next';
import { useEffect, useState } from 'react';
import { getInputDescription } from '../../../common/tools/utils';
import {
  selectIsDefinedBy,
  setDescription,
  setIsDefinedBy,
  setObjectType,
} from '../../../common/slices/ifcEntitySlice';
import Check from '../../Checkbox';

const ALLOWED_ATTRIBUTES = ['Name', 'Description', 'ObjectType'];

interface PropertyProps {
  propertySet: IfcPropertySet;
  property: IfcProperty | IfcPropertyEnumeratedValue | IfcPropertySingleValue;
  propertyNaturalLanguageName: string;
}

const getIsInstance = (propertyIsInstanceMap: any, propertySetName: string, propertyName: string) => {
  if (propertySetName === 'Attributes' && !ALLOWED_ATTRIBUTES.includes(propertyName)) {
    return true;
  }
  const propertyKey = `${propertySetName}/${propertyName}`;
  return propertyIsInstanceMap[propertyKey] || propertyIsInstanceMap[propertyName] || false;
};

const updatePropertySets = (
  propertySets: IfcPropertySet[],
  propertySetName: string,
  propertyName: string,
  newValue: any,
): IfcPropertySet[] => {
  const updatedPropertySets = propertySets.map((propertySet) => {
    if (propertySet.name === propertySetName) {
      const updatedProperties = propertySet.hasProperties.map((prop) =>
        prop.name === propertyName ? { ...prop, ...newValue } : prop,
      );

      if (!updatedProperties.some((prop) => prop.name === propertyName)) {
        updatedProperties.push({ name: propertyName, ...newValue });
      }

      return { ...propertySet, hasProperties: updatedProperties };
    }
    return propertySet;
  });

  if (!updatedPropertySets.some((set) => set.name === propertySetName)) {
    updatedPropertySets.push({
      type: 'IfcPropertySet',
      name: propertySetName,
      hasProperties: [{ name: propertyName, ...newValue }],
    });
  }

  return updatedPropertySets;
};

const isSingleValueProperty = (
  property: IfcProperty | IfcPropertySingleValue | IfcPropertyEnumeratedValue,
): boolean => {
  return property.type === 'IfcPropertySingleValue';
};

const isEnumeratedValueProperty = (
  property: IfcProperty | IfcPropertySingleValue | IfcPropertyEnumeratedValue,
): boolean => {
  return property.type === 'IfcPropertyEnumeratedValue';
};

const getFirstEnumerationValue = (property: IfcPropertyEnumeratedValue): IfcValue => {
  return property.enumerationValues?.[0]?.value || undefined;
};

const getSingleValue = (property: IfcPropertySingleValue): IfcValue => {
  return property.nominalValue?.value || undefined;
};

const getDefaultValue = (
  property: IfcProperty | IfcPropertyEnumeratedValue | IfcPropertySingleValue,
): string | number | undefined => {
  return isSingleValueProperty(property)
    ? getSingleValue(property as IfcPropertySingleValue).value
    : isEnumeratedValueProperty(property)
    ? getFirstEnumerationValue(property as IfcPropertyEnumeratedValue).value
    : undefined;
};

function Property({ propertySet, property, propertyNaturalLanguageName }: PropertyProps) {
  const dispatch = useAppDispatch();
  const propertyIsInstanceMap = useAppSelector((state) => state.ifcData.propertyIsInstanceMap);
  const savedPropertyIsInstanceMap = useAppSelector((state) => state.ifcData.savedPropertyIsInstanceMap);
  const propertySets = useAppSelector(selectIsDefinedBy);
  const instanceEnabled = propertySet.name !== 'Attributes';
  const propertyKey = `${propertySet.name}/${property.name}`;
  const isSwitchDisabled =
    savedPropertyIsInstanceMap.hasOwnProperty(propertyKey) || savedPropertyIsInstanceMap.hasOwnProperty(property.name);
  const isInstance = getIsInstance(propertyIsInstanceMap, propertySet.name || '', property.name);
  const [currentValue, setCurrentValue] = useState<any>();

  const label = propertyNaturalLanguageName?.trim() ? propertyNaturalLanguageName : property.name;
  const description = getInputDescription(label, property.name);

  useEffect(() => {
    if (property.type === 'IfcPropertySingleValue') {
      const nominalValueType = property.nominalValue?.type || '';
      setCurrentValue(
        nominalValueType === 'IfcBoolean' ? property.nominalValue?.value ?? false : property.nominalValue?.value ?? '',
      );
    } else if (property.type === 'IfcPropertyEnumeratedValue') {
      const firstEnumerationValue = (property as IfcPropertyEnumeratedValue).enumerationValues?.[0];
      const enumerationValueType = firstEnumerationValue ? firstEnumerationValue.type : '';
      setCurrentValue(firstEnumerationValue?.value ?? '');
    }
  }, [property]);

  const handleBlur = (value: any) => {
    setCurrentValue(value);
    if (propertySets && propertySet.name) {
      let newValue;
      if ('nominalValue' in property) {
        newValue = { nominalValue: { ...property.nominalValue, value } };
      } else if ('enumerationReference' in property) {
        const enumOptions = property.enumerationReference?.enumerationValues || [];
        const enumerationValues = enumOptions.filter((enumValue) => enumValue.value === value);
        newValue = { enumerationValues };
      } else {
        newValue = { value };
      }

      const updatedPropertySets = updatePropertySets(propertySets, propertySet.name, property.name, newValue);
      dispatch(setIsDefinedBy(updatedPropertySets));

      if (propertySet.name === 'Attributes') {
        if (property.name === 'ObjectType') {
          dispatch(setObjectType(value));
        } else if (property.name === 'Description') {
          dispatch(setDescription(value));
        }
      }
    }
  };

  const handleChange = (value: any) => {
    handleBlur(value);
  };

  const renderInput = () => {
    switch (property.type) {
      case 'IfcPropertySingleValue':
        if (property.nominalValue?.type === 'IfcBoolean') {
          return (
            <Check
              label={label}
              description={description}
              disabled={isInstance}
              value={currentValue}
              setValue={(value: true | false | undefined) => handleChange(value)}
            />
          );
        } else {
          return (
            <TextInput
              label={label}
              description={description}
              placeholder={property.nominalValue?.value ?? ''}
              value={currentValue}
              disabled={isInstance}
              onChange={(e) => handleChange(e.target.value)}
              onBlur={(e) => handleBlur(e.target.value)}
            />
          );
        }
      case 'IfcPropertyEnumeratedValue':
        const enumerationValues = property.enumerationReference?.enumerationValues || [];
        const isReadOnly = enumerationValues.length === 1;
        return (
          <Select
            label={label}
            description={description}
            value={currentValue}
            disabled={isInstance || isReadOnly}
            clearable={!isReadOnly}
            onChange={(e) => handleChange(e)}
            data={enumerationValues.map((ifcValue: IfcValue) => ({
              value: ifcValue.value,
              label: ifcValue.value,
            }))}
          />
        );
      default:
        return (
          <TextInput
            placeholder={property.name}
            defaultValue={getDefaultValue(property)}
            disabled={isInstance}
            onChange={(e) => handleChange(e.target.value)}
            onBlur={(e) => handleBlur(e.target.value)}
          />
        );
    }
  };

  const inputContainer = (children: React.ReactNode) =>
    instanceEnabled && isInstance ? (
      <Tooltip label={t('bsddSearch.property.tooltipEditInstance')} withArrow>
        {children}
      </Tooltip>
    ) : (
      children
    );

  return (
    <Group>
      <div style={{ flex: 1 }}>{inputContainer(renderInput())}</div>
      {instanceEnabled && (
        <Tooltip label={t('bsddSearch.property.setAsInstanceCheckboxTooltip')} withArrow>
          <Checkbox
            style={{ marginTop: '2rem' }}
            disabled={isSwitchDisabled}
            checked={isInstance}
            onChange={(event) => {
              if (!isSwitchDisabled) {
                handleBlur(undefined);
                dispatch(setPropertyIsInstance({ propertyName: propertyKey, value: event.currentTarget.checked }));
              }
            }}
          />
        </Tooltip>
      )}
    </Group>
  );
}

export default Property;
