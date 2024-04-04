import { Accordion, Tabs } from '@mantine/core';
import { useEffect, useMemo } from 'react';

import { IfcEntity } from '../../../../common/src/IfcData/ifc';
import { useAppSelector } from '../../app/hooks';
import { selectIfcEntities } from '../ifcData/ifcDataSlice';
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
  const ifcEntities = useAppSelector(selectIfcEntities);
  const groupedEntities = useMemo(() => groupEntitiesBy(ifcEntities, 'description'), [ifcEntities]);

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

  return (
    <Tabs.Panel value="link">
      <Accordion chevronPosition="left">
        {Object.entries(groupedEntities).map(([category, items], index) => (
          <CategoryCollapse key={category} category={category} items={items} index={category || index.toString()} />
        ))}
      </Accordion>
    </Tabs.Panel>
  );
}

export default Selection;
