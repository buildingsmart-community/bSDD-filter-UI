import { Accordion } from '@mantine/core';
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
  if (classificationProperty.allowedValues) {
    const ifcProperty: IfcPropertyEnumeratedValue = {
      type: 'IfcPropertyEnumeratedValue',
      name: classificationProperty.name,
      enumerationReference: {
        type: 'IfcPropertyEnumeration',
        name: classificationProperty.name,
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
    name: classificationProperty.name,
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
    const newPropertySets: { [id: string]: IfcPropertySet } = {};
    const propertyClassifications = recursiveMode ? classifications : classifications.slice(0, 1);
    propertyClassifications.forEach((classification) => {
      if (classification.classProperties) {
        classification.classProperties.map((classProperty: ClassPropertyContractV1) => {
          const propertySetName = classProperty.propertySet || classification.name;
          if (!(propertySetName in newPropertySets)) {
            newPropertySets[propertySetName] = {
              type: 'IfcPropertySet',
              name: propertySetName,
              hasProperties: [],
            };
          }
          newPropertySets[propertySetName].hasProperties.push(GetIfcProperty(classProperty));
        });
      }
    });
    // // return PropertySets Array ordered alphabetically
    // return Object.keys(propertySets)
    //   .sort()
    //   .map((propertySetName) => {
    //     return propertySets[propertySetName]
    //   })
    setPropertySets(newPropertySets);
  }, [classifications, setPropertySets, recursiveMode]);

  return (
    <div>
      {Children.toArray(
        Object.values(propertySets).map((propertySet, propertySetIndex) => (
          <Accordion>
            <Accordion.Item key={propertySetIndex} value={propertySet.name || propertySetIndex.toString()}>
              <Accordion.Control>{propertySet.name}</Accordion.Control>
              <Accordion.Panel>
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
              </Accordion.Panel>
            </Accordion.Item>
          </Accordion>
        )),
      )}
    </div>
  );
}
export default PropertySets;
