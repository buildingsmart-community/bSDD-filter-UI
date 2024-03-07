import { Accordion, Tabs } from '@mantine/core';
import { useEffect, useMemo, useState } from 'react';

import { BsddApi } from '../../../../common/src/BsddApi/BsddApi';
import { ClassListItemContractV1 } from '../../../../common/src/BsddApi/BsddApiBase';
import { IfcEntity } from '../../../../common/src/IfcData/ifc';
import { useAppSelector } from '../../app/hooks';
import { selectIfcEntities } from '../ifcData/ifcDataSlice';
import {
  selectBsddApiEnvironmentUri,
  // selectLanguage,
  selectMainDictionary,
} from '../Settings/settingsSlice';
import CategoryCollapse from './CategoryCollapse';

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
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: false }))
    .reduce((acc, key) => {
      acc[key] = grouped[key];
      return acc;
    }, {} as Record<string, IfcEntity[]>);
}
function Selection() {
  const mainDictionary = useAppSelector(selectMainDictionary);
  const bsddApiEnvironment = useAppSelector(selectBsddApiEnvironmentUri);
  // const languageCode = useAppSelector(selectLanguage);
  const ifcEntities = useAppSelector(selectIfcEntities);
  const groupedEntities = useMemo(() => groupEntitiesBy(ifcEntities, 'description'), [ifcEntities]);
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
    if (!bsddApiEnvironment || !mainDictionary) return;
    const location = mainDictionary?.ifcClassification?.location;
    if (!location) return;

    const api = new BsddApi(bsddApiEnvironment);
    api.api
      .dictionaryV1ClassesList({
        Uri: location,
        // languageCode: languageCode || undefined
      })
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
  }, [mainDictionary, bsddApiEnvironment]);

  return (
    <Tabs.Panel value="link">
      <Accordion chevronPosition="left">
        {Object.entries(groupedEntities).map(([category, items], index) => (
          <CategoryCollapse
            key={category}
            category={category}
            items={items}
            bbbr={classes}
            index={category || index.toString()}
          />
        ))}
      </Accordion>
    </Tabs.Panel>
  );
}

export default Selection;
