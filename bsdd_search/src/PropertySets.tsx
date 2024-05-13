import { Accordion, Stack } from '@mantine/core';
import { use } from 'i18next';
import { Children, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { ClassContractV1, ClassPropertyContractV1, PropertyContractV4 } from '../../common/src/BsddApi/BsddApiBase';
import {
  IfcEntity,
  IfcProperty,
  IfcPropertyEnumeratedValue,
  IfcPropertySet,
  IfcPropertySingleValue,
  IfcValue,
} from '../../common/src/IfcData/ifc';
import { useAppSelector } from './app/hooks';
import { selectIfcEntity } from './features/ifcData/ifcDataSlice';
import Property from './Property';

const valueTypeMapping: { [key: string]: string } = {
  Boolean: 'IfcBoolean',
  Character: 'IfcText',
  Integer: 'IfcInteger',
  Real: 'IfcReal',
  String: 'IfcText',
  Time: 'IfcDateTime',
};

interface Props {
  classifications: ClassContractV1[];
  propertySets: { [id: string]: IfcPropertySet };
  setPropertySets: (value: { [id: string]: IfcPropertySet }) => void;
  recursiveMode: boolean;
}

/**
 * Retrieves the IfcValue based on the provided data type and predefined value.
 * @param dataType - The data type of the property value.
 * @param predefinedValue - The predefined value of the property.
 * @returns The IfcValue object containing the type and value.
 */
function GetIfcPropertyValue(dataType: string | undefined | null, predefinedValue?: string | null): IfcValue {
  const type = dataType ? valueTypeMapping[dataType] || 'default' : 'default';

  let value: any;
  if (dataType === 'Boolean' && typeof predefinedValue === 'string') {
    value = predefinedValue.toUpperCase() === 'TRUE';
  } else {
    value = predefinedValue;
  }

  const ifcValue: IfcValue = {
    type,
    value,
  };

  return ifcValue;
}

/**
 * Retrieves a specific property from a property set of an IfcEntity.
 *
 * @param ifcEntity - The IfcEntity object.
 * @param propertySetName - The name of the property set.
 * @param name - The name of the property to retrieve.
 * @returns The property object if found, otherwise undefined.
 */
function getPropertyFromSet(
  ifcEntity: IfcEntity,
  propertySetName: string,
  name: string,
): IfcProperty | IfcPropertySingleValue | IfcPropertyEnumeratedValue | undefined {
  if (ifcEntity && ifcEntity.isDefinedBy) {
    const propertySet = ifcEntity.isDefinedBy.find((set: IfcPropertySet) => set.name === propertySetName);
    if (propertySet) {
      return propertySet.hasProperties.find(
        (prop: IfcProperty | IfcPropertySingleValue | IfcPropertyEnumeratedValue) => prop.name === name,
      );
    }
  }
  return undefined;
}

/**
 * Retrieves the nominal value from a specific property in a property set of an IfcEntity.
 *
 * @param dataType - The data type of the property value.
 * @param ifcEntity - The IfcEntity object.
 * @param propertySetName - The name of the property set.
 * @param name - The name of the property.
 * @returns The nominal value of the property, or a default value if not found.
 */
function getNominalValueFromProperty(
  dataType: string | null | undefined,
  ifcEntity: IfcEntity,
  propertySetName: string,
  name: string,
): IfcValue {
  const property = getPropertyFromSet(ifcEntity, propertySetName, name);
  if (property && 'nominalValue' in property) {
    return GetIfcPropertyValue(dataType, property.nominalValue.value);
  }
  return GetIfcPropertyValue(dataType);
}

/**
 * Retrieves the set enumeration values that are valid from a specific property in a property set of an IfcEntity.
 *
 * @param dataType - The data type of the property.
 * @param ifcEntity - The IfcEntity object.
 * @param propertySetName - The name of the property set.
 * @param name - The name of the property.
 * @param allowedEnumerationValues - The array of allowed enumeration values.
 * @returns An array of IfcValue objects representing the allowed enumeration values.
 */
function getEnumerationValuesFromProperty(
  dataType: string | null | undefined,
  ifcEntity: IfcEntity,
  propertySetName: string,
  name: string,
  allowedEnumerationValues: IfcValue[],
): IfcValue[] {
  const property = getPropertyFromSet(ifcEntity, propertySetName, name);

  if (property) {
    // Also check dataType?
    if (property.type === 'IfcPropertyEnumeratedValue') {
      return allowedEnumerationValues.filter((allowedValue) =>
        property.enumerationValues
          ? property.enumerationValues.some((value) => value.value === allowedValue.value)
          : false,
      );
    }

    // Add IfcPropertySingleValue fallback for software that does not support IfcPropertyEnumeratedValue
    if ('nominalValue' in property && property.nominalValue) {
      const foundValue = allowedEnumerationValues.find(
        (allowedValue) => allowedValue.value === property.nominalValue.value,
      );
      return foundValue ? [foundValue] : [];
    }
  }

  return [];
}
/**
 * Creates an instance of IfcPropertyEnumeratedValue based on the selected bSDD class property and selected IfcEntity.
 *
 * @param {ClassPropertyContractV1} classificationProperty - The classification property.
 * @param {string} name - The name of the property.
 * @param {string} propertySetName - The name of the property set.
 * @param {IfcEntity} ifcEntity - The selected IfcEntity object.
 * @returns {IfcPropertyEnumeratedValue} - The created IfcPropertyEnumeratedValue object.
 */
function createIfcPropertyEnumeratedValue(
  classificationProperty: ClassPropertyContractV1,
  name: string,
  propertySetName: string,
  ifcEntity: IfcEntity,
): IfcPropertyEnumeratedValue {
  const allowedEnumerationValues: IfcValue[] =
    classificationProperty.allowedValues?.map((allowedValue) =>
      GetIfcPropertyValue(classificationProperty.dataType, allowedValue.value),
    ) || [];
  const ifcProperty: IfcPropertyEnumeratedValue = {
    type: 'IfcPropertyEnumeratedValue',
    name,
    enumerationReference: {
      type: 'IfcPropertyEnumeration',
      name,
      enumerationValues: allowedEnumerationValues,
    },
  };

  if (classificationProperty.propertyUri) {
    ifcProperty.specification = classificationProperty.propertyUri;
  }

  const enumerationValues = classificationProperty.predefinedValue
    ? [GetIfcPropertyValue(classificationProperty.dataType, classificationProperty.predefinedValue)]
    : getEnumerationValuesFromProperty(
        classificationProperty.dataType,
        ifcEntity,
        propertySetName,
        name,
        allowedEnumerationValues,
      );

  if (enumerationValues.length > 0) {
    ifcProperty.enumerationValues = enumerationValues;
  }
  return ifcProperty;
}

/**
 * Creates an instance of IfcPropertySingleValue based on the selected bSDD class property and selected IfcEntity.
 *
 * @param {ClassPropertyContractV1} classificationProperty - The classification property.
 * @param {string} name - The name of the property.
 * @param {string} propertySetName - The name of the property set.
 * @param {IfcEntity} ifcEntity - The IfcEntity object.
 * @returns {IfcPropertySingleValue} The created IfcPropertySingleValue object.
 */
function createIfcPropertySingleValue(
  classificationProperty: ClassPropertyContractV1,
  name: string,
  propertySetName: string,
  ifcEntity: IfcEntity,
): IfcPropertySingleValue {
  const ifcProperty: IfcPropertySingleValue = {
    type: 'IfcPropertySingleValue',
    name,
  };

  if (classificationProperty.propertyUri) {
    ifcProperty.specification = classificationProperty.propertyUri;
  }

  const nominalValue = classificationProperty.predefinedValue
    ? GetIfcPropertyValue(classificationProperty.dataType, classificationProperty.predefinedValue)
    : getNominalValueFromProperty(classificationProperty.dataType, ifcEntity, propertySetName, name);

  if (nominalValue !== null) {
    ifcProperty.nominalValue = nominalValue;
  }
  return ifcProperty;
}

/**
 * Retrieves the appropriate IFC property based on the classification property, property set name, and IFC entity.
 * @param classificationProperty - The classification property.
 * @param propertySetName - The name of the property set.
 * @param ifcEntity - The IFC entity.
 * @returns The IFC property, IFC single value property, or IFC enumerated value property.
 */
function GetIfcProperty(
  classificationProperty: ClassPropertyContractV1,
  propertySetName: string,
  ifcEntity: IfcEntity,
): IfcProperty | IfcPropertySingleValue | IfcPropertyEnumeratedValue {
  const { propertyCode } = classificationProperty;
  const name = propertyCode || 'unknown';

  if (classificationProperty.allowedValues) {
    return createIfcPropertyEnumeratedValue(classificationProperty, name, propertySetName, ifcEntity);
  }

  return createIfcPropertySingleValue(classificationProperty, name, propertySetName, ifcEntity);
}

function PropertySets(props: Props) {
  const { t } = useTranslation();
  const { classifications } = props;
  const { propertySets } = props;
  const { setPropertySets } = props;
  const { recursiveMode } = props;

  const ifcEntity = useAppSelector(selectIfcEntity);

  useEffect(() => {
    const newPropertySets: Record<string, IfcPropertySet> = {};
    const propertyClassifications = recursiveMode ? classifications : classifications.slice(0, 1);

    propertyClassifications.forEach((classification) => {
      classification.classProperties?.forEach((classProperty: ClassPropertyContractV1) => {
        if (!classProperty) return;
        const propertySetName = classProperty.propertySet || classification.name;

        if (!newPropertySets[propertySetName]) {
          newPropertySets[propertySetName] = {
            type: 'IfcPropertySet',
            name: propertySetName,
            hasProperties: [],
          };
        }

        newPropertySets[propertySetName].hasProperties.push(GetIfcProperty(classProperty, propertySetName, ifcEntity));
      });
    });

    setPropertySets(newPropertySets);
  }, [classifications, setPropertySets, recursiveMode, ifcEntity]);

  return (
    <div>
      {Children.toArray(
        Object.values(propertySets).map((propertySet, propertySetIndex) => (
          <Accordion>
            <Accordion.Item key={propertySet.name} value={propertySet.name || propertySetIndex.toString()}>
              <Accordion.Control>{propertySet.name}</Accordion.Control>
              <Accordion.Panel>
                <Stack>
                  {Children.toArray(
                    propertySet.hasProperties.map((property, propertyIndex) => (
                      <Property
                        propertySet={propertySet}
                        property={property}
                        propertyIndex={propertyIndex}
                        propertySets={propertySets}
                        setPropertySets={setPropertySets}
                      />
                    )),
                  )}
                </Stack>
              </Accordion.Panel>
            </Accordion.Item>
          </Accordion>
        )),
      )}
    </div>
  );
}
export default PropertySets;
