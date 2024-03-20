import { Accordion, Stack } from '@mantine/core';
import { Children, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { ClassContractV1, ClassPropertyContractV1, PropertyContractV4 } from '../../common/src/BsddApi/BsddApiBase';
import {
  IfcProperty,
  IfcPropertyEnumeratedValue,
  IfcPropertySet,
  IfcPropertySingleValue,
  IfcValue,
} from '../../common/src/IfcData/ifc';
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

function GetIfcProperty(
  classificationProperty: ClassPropertyContractV1,
): IfcProperty | IfcPropertySingleValue | IfcPropertyEnumeratedValue {
  const { propertyCode } = classificationProperty;
  const name = propertyCode || 'unknown';

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
        if (!classProperty) return;
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
