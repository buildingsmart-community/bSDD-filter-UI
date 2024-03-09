import { Accordion, Stack } from '@mantine/core';
import { Children, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { ClassContractV1, ClassPropertyContractV1 } from '../../common/src/BsddApi/BsddApiBase';
import {
  IfcProperty,
  IfcPropertyEnumeratedValue,
  IfcPropertySet,
  IfcPropertySingleValue,
  IfcValue,
} from '../../common/src/IfcData/ifc';
import Property from './Property';

interface Props {
  classifications: ClassContractV1[];
  propertySets: { [id: string]: IfcPropertySet };
  setPropertySets: (value: { [id: string]: IfcPropertySet }) => void;
  recursiveMode: boolean;
}

function GetIfcPropertyValue(dataType: string | undefined | null, predefinedValue: any): IfcValue {
  switch (dataType) {
    case 'Boolean': {
      const value: IfcValue = {
        type: 'IfcBoolean',
      };
      switch (predefinedValue) {
        case true:
        case 'TRUE': {
          value.value = true;
          return value;
        }
        case false:
        case 'FALSE': {
          value.value = false;
          return value;
        }
        default: {
          value.value = undefined;
          return value;
        }
      }
    }
    case 'Character': {
      const value: IfcValue = {
        type: 'default',
      };
      if (predefinedValue) {
        value.value = predefinedValue;
      }
      return value;
    }
    case 'Integer': {
      const value: IfcValue = {
        type: 'IfcInteger',
      };
      if (predefinedValue) {
        value.value = predefinedValue;
      }
      return value;
    }
    case 'Real': {
      const value: IfcValue = {
        type: 'IfcReal',
      };
      if (predefinedValue) {
        value.value = predefinedValue;
      }
      return value;
    }
    case 'String': {
      const value: IfcValue = {
        type: 'default',
      };
      if (predefinedValue) {
        value.value = predefinedValue;
      }
      return value;
    }
    case 'Time': {
      const value: IfcValue = {
        type: 'IfcDate',
      };
      if (predefinedValue) {
        value.value = predefinedValue;
      }
      return value;
    }
    default: {
      const value: IfcValue = {
        type: 'default',
      };
      if (predefinedValue) {
        value.value = predefinedValue;
      }
      return value;
    }
  }
}

function GetIfcProperty(
  classificationProperty: ClassPropertyContractV1,
): IfcProperty | IfcPropertySingleValue | IfcPropertyEnumeratedValue {
  let { name } = classificationProperty;

  // Workaround bSDD property natural language naming for IFC
  // If the classification property is an IFC property, use the last part of the URI as the name
  if (
    classificationProperty.propertyUri &&
    classificationProperty.propertyUri.includes('identifier.buildingsmart.org/uri/buildingsmart/ifc/')
  ) {
    name = classificationProperty.propertyUri.split('/').pop() || classificationProperty.name;
  }

  if (classificationProperty.allowedValues) {
    const ifcProperty: IfcPropertyEnumeratedValue = {
      type: 'IfcPropertyEnumeratedValue',
      name,
      enumerationReference: {
        type: 'IfcPropertyEnumeration',
        name,
        enumerationValues: classificationProperty.allowedValues.map((allowedValue) => allowedValue.value),
      },
    };
    if (classificationProperty.propertyUri) {
      ifcProperty.specification = classificationProperty.propertyUri;
    }
    return ifcProperty;
  }
  const ifcProperty: IfcPropertySingleValue = {
    type: 'IfcPropertySingleValue',
    name,
  };
  if (classificationProperty.propertyUri) {
    ifcProperty.specification = classificationProperty.propertyUri;
  }
  ifcProperty.nominalValue = GetIfcPropertyValue(
    classificationProperty.dataType,
    classificationProperty.predefinedValue,
  );
  return ifcProperty;
}

function PropertySets(props: Props) {
  const { t } = useTranslation();
  const { classifications } = props;
  const { propertySets } = props;
  const { setPropertySets } = props;
  const { recursiveMode } = props;

  useEffect(() => {
    const newPropertySets: Record<string, IfcPropertySet> = {};
    const propertyClassifications = recursiveMode ? classifications : classifications.slice(0, 1);

    propertyClassifications.forEach((classification) => {
      classification.classProperties?.forEach((classProperty: ClassPropertyContractV1) => {
        const propertySetName = classProperty.propertySet || classification.name;

        if (!newPropertySets[propertySetName]) {
          newPropertySets[propertySetName] = {
            type: 'IfcPropertySet',
            name: propertySetName,
            hasProperties: [],
          };
        }

        newPropertySets[propertySetName].hasProperties.push(GetIfcProperty(classProperty));
      });
    });

    setPropertySets(newPropertySets);
  }, [classifications, setPropertySets, recursiveMode]);

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
