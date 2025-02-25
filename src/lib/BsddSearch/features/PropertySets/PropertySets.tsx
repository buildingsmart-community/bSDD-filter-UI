import { Accordion, Stack } from '@mantine/core';
import { Children, useEffect, useState } from 'react';

import { useAppDispatch, useAppSelector } from '../../../common/app/hooks';
import { ClassContractV1, ClassPropertyContractV1 } from '../../../common/BsddApi/BsddApiBase';
import { getPropertyClassificationUris } from '../../../common/BsddApi/BsddApiHelpers';
import {
  IfcEntity,
  IfcProperty,
  IfcPropertyEnumeratedValue,
  IfcPropertySet,
  IfcPropertySingleValue,
  IfcValue,
} from '../../../common/IfcData/ifc';
import {
  selectMainDictionaryClassification,
  selectMainDictionaryClassificationUri,
  selectPropertyNamesByLanguage,
} from '../../../common/slices/bsddSlice';
import { selectMergedIfcEntity } from '../../../common/slices/ifcDataSlice';
import { setIsDefinedBy } from '../../../common/slices/ifcEntitySlice';
import { selectIfcDictionaryUri, selectLanguage } from '../../../common/slices/settingsSlice';
import type { PropertySetMap } from '../../BsddSearch';
import Property from '../Property/Property';

const valueTypeMapping: { [key: string]: string } = {
  Boolean: 'IfcBoolean',
  Character: 'IfcText',
  Integer: 'IfcInteger',
  Real: 'IfcReal',
  String: 'IfcText',
  Time: 'IfcDateTime',
};

interface PropertySetsProps {
  activeClassifications: ClassContractV1[];
  recursiveMode: boolean;
}

/**
 * Retrieves the IfcValue based on the provided data type and predefined value.
 * @param dataType - The data type of the property value.
 * @param predefinedValue - The predefined value of the property.
 * @returns The IfcValue object containing the type and value.
 */
function createIfcPropertyValue(
  dataType: string | undefined | null,
  predefinedValue?: string | boolean | null,
): IfcValue {
  const type = dataType ? valueTypeMapping[dataType] || 'default' : 'default';

  let value: any;
  if (dataType === 'Boolean' && typeof predefinedValue === 'string') {
    if (predefinedValue.toUpperCase() === 'TRUE') {
      value = true;
    } else if (predefinedValue.toUpperCase() === 'FALSE') {
      value = false;
    } else {
      value = undefined;
    }
  } else {
    value = predefinedValue;
  }

  const ifcValue: IfcValue = {
    type,
    value,
  };

  return ifcValue;
}

function validateIfcPropertyValue(dataType: string | undefined | null, value: IfcValue): IfcValue {
  if (dataType && dataType === value?.type) {
    return value;
  }
  return createIfcPropertyValue(dataType, value?.value);
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
  let property: IfcProperty | IfcPropertySingleValue | IfcPropertyEnumeratedValue | undefined;
  if (ifcEntity && ifcEntity.isDefinedBy) {
    let propertySet = ifcEntity.isDefinedBy.find((set: IfcPropertySet) => set.name === propertySetName);
    if (propertySet) {
      property = propertySet.hasProperties.find((prop) => prop.name === name);
    }
    if (property) {
      return property;
    }

    // Check the default propertyset if the property is not found in the specified propertyset
    propertySet = ifcEntity.isDefinedBy.find((set: IfcPropertySet) => set.name === '');
    if (propertySet) {
      return propertySet.hasProperties.find((prop) => prop.name === name);
    }
  }
  return property;
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
function getNominalValueFromProperty(dataType: string | null | undefined, property: IfcPropertySingleValue): IfcValue {
  const value: string | boolean | null = property?.nominalValue?.value ?? null;
  return createIfcPropertyValue(dataType, value);
}

/**
 * Retrieves the first valid enumeration value from a specific property in a property set of an IfcEntity.
 *
 * @param dataType - The data type of the property.
 * @param property - The property object.
 * @param allowedEnumerationValues - The array of allowed enumeration values.
 * @returns The first valid IfcValue object representing the allowed enumeration value, or null if not found.
 */
function getEnumerationValueFromProperty(
  dataType: string | null | undefined,
  property: IfcProperty | IfcPropertySingleValue | IfcPropertyEnumeratedValue,
  allowedEnumerationValues: IfcValue[],
): IfcValue | null {
  if (property) {
    // Also check dataType?
    if (property.type === 'IfcPropertyEnumeratedValue') {
      const foundValue = allowedEnumerationValues.find((allowedValue) =>
        property.enumerationValues
          ? property.enumerationValues.some((value) => value.value === allowedValue.value)
          : false,
      );
      return foundValue ? validateIfcPropertyValue(dataType, foundValue) : null;
    }

    // Add IfcPropertySingleValue fallback for software that does not support IfcPropertyEnumeratedValue
    if ('nominalValue' in property && property.nominalValue) {
      const foundValue = allowedEnumerationValues.find(
        (allowedValue) => allowedValue.value === property.nominalValue?.value,
      );
      return foundValue ? validateIfcPropertyValue(dataType, foundValue) : null;
    }
  }

  return null;
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
  ifcEntity: IfcEntity | null,
): IfcPropertyEnumeratedValue {
  const allowedEnumerationValues: IfcValue[] =
    classificationProperty.allowedValues?.map((allowedValue) =>
      createIfcPropertyValue(classificationProperty.dataType, allowedValue.value),
    ) || [];

  const ifcProperty: IfcPropertyEnumeratedValue = {
    type: 'IfcPropertyEnumeratedValue',
    name,
    enumerationReference: {
      type: 'IfcPropertyEnumeration',
      name, // TODO get the right property enum name
      enumerationValues: allowedEnumerationValues,
    },
  };

  if (classificationProperty.propertyUri) {
    ifcProperty.specification = classificationProperty.propertyUri;
  }

  let value: IfcValue | null = null;
  let allowedValues: any[] = [];
  if (classificationProperty.allowedValues) {
    allowedValues = classificationProperty.allowedValues;
  } else if (classificationProperty.predefinedValue) {
    allowedValues = [classificationProperty.predefinedValue];
  }

  if (allowedValues.length === 1) {
    value = validateIfcPropertyValue(classificationProperty.dataType, allowedValues[0]);
  } else if (ifcEntity) {
    const property = getPropertyFromSet(ifcEntity, propertySetName, name) as IfcPropertySingleValue;
    value = getEnumerationValueFromProperty(classificationProperty.dataType, property, allowedEnumerationValues);
  }

  if (value !== null) {
    ifcProperty.enumerationValues = [value];
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
  ifcEntity: IfcEntity | null,
): IfcPropertySingleValue {
  const ifcProperty: IfcPropertySingleValue = {
    type: 'IfcPropertySingleValue',
    name,
  };

  if (classificationProperty.propertyUri) {
    ifcProperty.specification = classificationProperty.propertyUri;
  }

  let value: IfcValue | null = null;

  if (classificationProperty.predefinedValue) {
    value = createIfcPropertyValue(classificationProperty.dataType, classificationProperty.predefinedValue);
  } else if (ifcEntity) {
    const property = getPropertyFromSet(ifcEntity, propertySetName, name) as IfcPropertySingleValue;
    value = getNominalValueFromProperty(classificationProperty.dataType, property);
  } else {
    value = createIfcPropertyValue(classificationProperty.dataType, null);
  }

  if (value !== null) {
    ifcProperty.nominalValue = value;
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
  ifcEntity: IfcEntity | null,
): IfcProperty | IfcPropertySingleValue | IfcPropertyEnumeratedValue {
  const { propertyCode } = classificationProperty;
  const name = propertyCode || 'unknown';

  const property = classificationProperty.allowedValues
    ? createIfcPropertyEnumeratedValue(classificationProperty, name, propertySetName, ifcEntity)
    : createIfcPropertySingleValue(classificationProperty, name, propertySetName, ifcEntity);

  property.specification = classificationProperty.propertyUri || '';

  return property;
}

function PropertySets({ activeClassifications: activeDictionaryLocations, recursiveMode }: PropertySetsProps) {
  const dispatch = useAppDispatch();

  const selectedMergedIfcEntity = useAppSelector(selectMergedIfcEntity);
  const propertyNamesByLanguage = useAppSelector(selectPropertyNamesByLanguage);
  const languageCode = useAppSelector(selectLanguage);
  const mainDictionaryClassification = useAppSelector(selectMainDictionaryClassification);
  const mainDictionaryClassificationUri = useAppSelector(selectMainDictionaryClassificationUri);
  const ifcDictionaryUri = useAppSelector(selectIfcDictionaryUri);
  const [propertyNaturalLanguageNamesMap, setPropertyNaturalLanguageNamesMap] = useState<Record<string, string>>({});
  const [mergedIfcPropertySets, setMergedIfcPropertySets] = useState<IfcPropertySet[]>([]);

  useEffect(() => {
    if (activeDictionaryLocations.length === 0) return;
    const newPropertySets: PropertySetMap = {};
    const propertyClassifications = activeDictionaryLocations; // recursiveMode ? classifications : classifications.slice(0, 1);

    const applicableClassificationUris = getPropertyClassificationUris(mainDictionaryClassification);

    propertyClassifications.forEach((classification) => {
      if (classification.dictionaryUri === ifcDictionaryUri && classification.uri !== mainDictionaryClassificationUri) {
        return; // Skip the IFC dictionary as we only add explicitly added IFC properties
      }
      if (
        classification.uri === mainDictionaryClassificationUri ||
        applicableClassificationUris.includes(classification.uri)
      ) {
        classification.classProperties?.forEach((classProperty: ClassPropertyContractV1) => {
          if (!classProperty || !classProperty.propertySet) return;
          const propertySetName = classProperty.propertySet || classification.name;

          if (!newPropertySets[propertySetName]) {
            newPropertySets[propertySetName] = {
              type: 'IfcPropertySet',
              name: propertySetName,
              hasProperties: [],
            };
          }

          newPropertySets[propertySetName].hasProperties.push(
            GetIfcProperty(classProperty, propertySetName, selectedMergedIfcEntity),
          );
        });
      }
    });

    dispatch(setIsDefinedBy(Object.values(newPropertySets)));
    setMergedIfcPropertySets(Object.values(newPropertySets));
  }, [
    dispatch,
    selectedMergedIfcEntity,
    activeDictionaryLocations,
    ifcDictionaryUri,
    mainDictionaryClassification,
    mainDictionaryClassificationUri,
  ]);

  useEffect(() => {
    if (activeDictionaryLocations.length === 0) return;
    const newPropertyNaturalLanguageNames: Record<string, string> = {};
    const propertyClassifications = activeDictionaryLocations; // recursiveMode ? classifications : classifications.slice(0, 1);

    propertyClassifications.forEach((classification) => {
      classification.classProperties?.forEach((classProperty: ClassPropertyContractV1) => {
        if (!classProperty) return;

        if (classProperty.propertyUri) {
          if (
            languageCode &&
            propertyNamesByLanguage &&
            propertyNamesByLanguage[languageCode] &&
            propertyNamesByLanguage[languageCode][classProperty.propertyUri]
          ) {
            newPropertyNaturalLanguageNames[classProperty.propertyUri] =
              propertyNamesByLanguage[languageCode][classProperty.propertyUri] || '';
          } else {
            newPropertyNaturalLanguageNames[classProperty.propertyUri] = classProperty.name;
          }
        }
      });
    });

    setPropertyNaturalLanguageNamesMap(newPropertyNaturalLanguageNames);
  }, [activeDictionaryLocations, recursiveMode, selectedMergedIfcEntity, propertyNamesByLanguage, languageCode]);

  return (
    <div>
      {Children.toArray(
        mergedIfcPropertySets.map((propertySet, index) => (
          <Accordion variant="contained" radius="xs">
            <Accordion.Item
              key={propertySet.name || 'Unknown'}
              value={propertySet.name || 'Unknown'}
              style={index !== 0 ? { borderTopWidth: 0 } : {}}
            >
              <Accordion.Control>{propertySet.name}</Accordion.Control>
              <Accordion.Panel>
                <Stack>
                  {Children.toArray(
                    propertySet.hasProperties.map((property) => {
                      const propertyNaturalLanguageName = property.specification
                        ? propertyNaturalLanguageNamesMap[property.specification]
                        : '';
                      return (
                        <Property
                          propertySet={propertySet}
                          property={property}
                          propertyNaturalLanguageName={propertyNaturalLanguageName}
                        />
                      );
                    }),
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
