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

  const label = propertyNaturalLanguageName?.trim() ? propertyNaturalLanguageName : property.name;
  const description = getInputDescription(label, property.name);

  const defaultValue: string | number | undefined =
    property.type === 'IfcPropertySingleValue'
      ? property.nominalValue?.value || undefined
      : property.type === 'IfcPropertyEnumeratedValue'
      ? property.enumerationValues?.[0]?.value || undefined
      : undefined;

  const handleBlur = (value: any) => {
    if (propertySets && propertySet.name) {
      if (propertySet.name !== 'Attributes') {
        let newValue;
        if ('nominalValue' in property) {
          newValue = {
            nominalValue: { ...property.nominalValue, value },
          };
        } else if ('enumerationValues' in property) {
          newValue = {
            enumerationValues: [{ value }],
          };
        } else {
          newValue = {
            value,
          };
        }
        const updatedPropertySets = updatePropertySets(propertySets, propertySet.name, property.name, newValue);
        dispatch(setIsDefinedBy(Object.values(updatedPropertySets)));
      } else {
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

  switch (property.type) {
    case 'IfcPropertySingleValue': {
      if (property.nominalValue?.type === 'IfcBoolean') {
        return (
          <Check
            label={label}
            description={description}
            disabled={isInstance}
            inputContainer={inputContainer}
            value={property.nominalValue?.value ?? false}
            setValue={(value: true | false | undefined) => handleChange(value)}
          />
        );
      } else {
        return (
          <TextInput
            label={label}
            description={description}
            placeholder={property.nominalValue?.value ?? ''}
            value={property.nominalValue?.value ?? ''}
            disabled={isInstance}
            inputContainer={inputContainer}
            onChange={(e) => handleChange(e.target.value)}
            onBlur={(e) => handleBlur(e.target.value)}
          />
        );
      }
    }
    case 'IfcPropertyEnumeratedValue': {
      const value = property.enumerationValues?.[0]?.value ?? '';
      const enumerationValues = property.enumerationReference?.enumerationValues || [];
      const isReadOnly = enumerationValues.length === 1;
      return (
        <Select
          label={label}
          description={description}
          value={value}
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
    }
    default: {
      return (
        <TextInput
          placeholder={property.name}
          defaultValue={defaultValue}
          disabled={isInstance}
          inputContainer={inputContainer}
          onChange={(e) => handleChange(e.target.value)}
          onBlur={(e) => handleBlur(e.target.value)}
        />
      );
    }
  }
};

export default PropertyInput;
