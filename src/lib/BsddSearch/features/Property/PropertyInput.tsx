import { Select, TextInput } from '@mantine/core';
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
import {
  selectIsDefinedBy,
  setDescription,
  setIsDefinedBy,
  setObjectType,
} from '../../../common/slices/ifcEntitySlice';
import Check from '../../Checkbox';
import { t } from 'i18next';

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

const PropertyInput = ({
  propertySet,
  property,
  propertyNaturalLanguageName,
  isInstance,
  inputContainer,
}: PropertyInputProps) => {
  const dispatch = useAppDispatch();
  const propertySets = useAppSelector(selectIsDefinedBy);
  const [inputValue, setInputValue] = useState<any>('');

  useEffect(() => {
    if ('nominalValue' in property) {
      setInputValue(property.nominalValue?.value || '');
    } else if ('enumerationValues' in property) {
      setInputValue(property.enumerationValues?.[0]?.value || '');
    }
  }, [property]);

  const handleBlur = () => {
    if (propertySets && propertySet.name) {
      if (propertySet.name !== 'Attributes') {
        let newValue;
        if ('nominalValue' in property) {
          newValue = {
            nominalValue: { ...property.nominalValue, value: inputValue },
          };
        } else if ('enumerationValues' in property) {
          newValue = {
            enumerationValues: [{ ...property.enumerationValues?.[0], value: inputValue }],
          };
        } else {
          newValue = {
            value: inputValue,
          };
        }
        const updatedPropertySets = updatePropertySets(propertySets, propertySet.name, property.name, newValue);
        dispatch(setIsDefinedBy(Object.values(updatedPropertySets)));
      } else {
        if (property.name === 'ObjectType') {
          dispatch(setObjectType(inputValue));
        } else if (property.name === 'Description') {
          dispatch(setDescription(inputValue));
        }
      }
    }
  };

  switch (property.type) {
    case 'IfcPropertySingleValue': {
      if (property.nominalValue?.type === 'IfcBoolean') {
        return (
          <Check
            label={propertyNaturalLanguageName}
            description={getInputDescription(propertyNaturalLanguageName, property.name)}
            disabled={isInstance}
            inputContainer={inputContainer}
            value={inputValue}
            setValue={(value: true | false | undefined) => setInputValue(value)}
          />
        );
      } else {
        return (
          <TextInput
            label={propertyNaturalLanguageName}
            description={getInputDescription(propertyNaturalLanguageName, property.name)}
            placeholder={property.nominalValue?.value}
            value={inputValue}
            disabled={isInstance}
            inputContainer={inputContainer}
            onChange={(e) => setInputValue(e.target.value)}
            onBlur={handleBlur}
          />
        );
      }
    }
    case 'IfcPropertyEnumeratedValue': {
      const value = property.enumerationValues?.[0]?.value;
      const enumerationValues = property.enumerationReference?.enumerationValues || [];
      return (
        <Select
          label={propertyNaturalLanguageName}
          description={getInputDescription(propertyNaturalLanguageName, property.name)}
          value={value}
          inputContainer={inputContainer}
          disabled={isInstance || property.enumerationReference?.enumerationValues?.length === 1}
          onChange={(e) => setInputValue(e)}
          onBlur={handleBlur}
          data={enumerationValues.map((ifcValue: IfcValue) => ({
            value: ifcValue.value,
            label: ifcValue.value,
          }))}
        />
      );
    }
    default: {
      return (
        <TextInput
          placeholder={property.name}
          value={inputValue}
          disabled={isInstance}
          inputContainer={inputContainer}
          onChange={(e) => setInputValue(e.target.value)}
          onBlur={handleBlur}
        />
      );
    }
  }
};

export default PropertyInput;
