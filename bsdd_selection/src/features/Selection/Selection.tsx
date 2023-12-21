import { Accordion, Tabs } from '@mantine/core';
import { useEffect, useState } from 'react';
import CategoryCollapse from './CategoryCollapse';
import { IfcEntity } from '../../../../common/src/IfcData/ifc';
import { bsddEnvironments } from '../../../../common/src/BsddApi/BsddApiEnvironments';
import { BsddApi } from '../../../../common/src/BsddApi/BsddApi';
import { ClassListItemContractV1 } from '../../../../common/src/BsddApi/BsddApiBase';

let CefSharp: any;

export interface BuildingClass {
  uri: string;
  code: string;
  name: string;
  classType: string;
  referenceCode: string;
}

export interface BimBasisObjectsResponse {
  classes: BuildingClass[];
  classesTotalCount: number;
  classesOffset: number;
  classesCount: number;
  uri: string;
  name: string;
  version: string;
  organizationCodeOwner: string;
  organizationNameOwner: string;
  defaultLanguageCode: string;
  license: string;
  qualityAssuranceProcedure: string;
  status: string;
  releaseDate: string;
  lastUpdatedUtc: string;
}

function groupEntitiesBy(array: IfcEntity[], property: keyof IfcEntity) {
  const grouped = array.reduce((acc, item) => {
    const key = item[property];

    if (key === undefined || typeof key !== 'string') {
      if (!acc['']) {
        acc[''] = [];
      }
      acc[''].push(item);
    } else {
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(item);
    }

    return acc;
  }, {} as Record<string, IfcEntity[]>);

  // Sort the keys alphabetically and create a new sorted object
  return Object.keys(grouped)
    .sort()
    .reduce((acc, key) => {
      acc[key] = grouped[key];
      return acc;
    }, {} as Record<string, IfcEntity[]>);
}

interface SelectionProps {
  bsddApiEnvironment: string;
  mainDictionaryUri: string;
  ifcData: IfcEntity[];
}

function Selection({ bsddApiEnvironment, mainDictionaryUri, ifcData }: SelectionProps) {
  const [opened, setOpened] = useState({});
  const [classes, setClasses] = useState<ClassListItemContractV1[]>([]);

  // Set up BsddBridge connection
  useEffect(() => {
    const connectToBsddBridge = async () => {
      try {
        if (CefSharp) {
          await CefSharp.BindObjectAsync('bsddBridge');
        }
      } catch (e: any) {
        // If an error occurred, set the error state
        // setError(e.message);
        console.error(e.message);
      }
    };
    connectToBsddBridge();
  }, []);

  useEffect(() => {
    if (!mainDictionaryUri) return;
    const api = new BsddApi(bsddEnvironments[bsddApiEnvironment]);
    api.api
      .dictionaryV1ClassesList({ Uri: mainDictionaryUri })
      .then((response) => {
        // If the response is not ok, throw an error
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        if (response.data && response.data.classes) {
          setClasses(response.data.classes);
        }
      })
      .catch((error) => {
        throw new Error(`bSDD API error! status: ${error}`);
      });
  }, [mainDictionaryUri, bsddApiEnvironment]);

  const groupedEntities = groupEntitiesBy(ifcData, 'description');

  return (
    <Tabs.Panel value={'koppelen'}>
      <Accordion chevronPosition="left" multiple>
        {Object.entries(groupedEntities).map(([category, items], index) => (
          <CategoryCollapse
            bsddEnvironmentName={bsddApiEnvironment}
            category={category}
            items={items}
            opened={opened}
            bbbr={classes}
            index={category || index.toString()}
          />
        ))}
      </Accordion>
    </Tabs.Panel>
  );
}

export default Selection;
