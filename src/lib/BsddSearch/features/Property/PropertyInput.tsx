import { Select, TextInput } from '@mantine/core';
import { useAppDispatch, useAppSelector } from '../../../common/app/hooks';
import {
  IfcProperty,
  IfcPropertyEnumeratedValue,
  IfcPropertySet,
  IfcPropertySingleValue,
  IfcValue,
} from '../../../common/IfcData/ifc';
import { getInputDescription } from '../../../common/tools/utils';
import {
  selectIsDefinedBy,
  setDescription,
  setIsDefinedBy,
  setObjectType,
} from '../../../common/slices/ifcEntitySlice';
import Check from '../../Checkbox';
import { useEffect, useState } from 'react';

interface PropertyInputProps {
  propertySet: IfcPropertySet;
  property: IfcProperty | IfcPropertyEnumeratedValue | IfcPropertySingleValue;
  propertyNaturalLanguageName: string;
  isInstance: boolean;
  inputContainer: (children: React.ReactNode) => React.ReactNode;
}

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

const PropertyInput = ({
  propertySet,
  property,
  propertyNaturalLanguageName,
  isInstance,
  inputContainer,
}: PropertyInputProps) => {
  const dispatch = useAppDispatch();
  const propertySets = useAppSelector(selectIsDefinedBy);
  const [currentValue, setCurrentValue] = useState<any>();

  const label = propertyNaturalLanguageName?.trim() ? propertyNaturalLanguageName : property.name;
  const description = getInputDescription(label, property.name);

  useEffect(() => {
    if (property.type === 'IfcPropertySingleValue') {
      setCurrentValue(
        property.nominalValue?.type === 'IfcBoolean'
          ? property.nominalValue?.value ?? false
          : property.nominalValue?.value ?? '',
      );
    } else if (property.type === 'IfcPropertyEnumeratedValue') {
      setCurrentValue((property as IfcPropertyEnumeratedValue).enumerationValues?.[0]?.value ?? '');
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
              inputContainer={inputContainer}
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
              inputContainer={inputContainer}
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
            inputContainer={inputContainer}
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
            inputContainer={inputContainer}
            onChange={(e) => handleChange(e.target.value)}
            onBlur={(e) => handleBlur(e.target.value)}
          />
        );
    }
  };

  return renderInput();
};

export default PropertyInput;
