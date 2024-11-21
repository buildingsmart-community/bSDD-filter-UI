import { Accordion, Alert, Box, LoadingOverlay, Select, Space, Tabs } from '@mantine/core';
import { IconInfoCircle } from '@tabler/icons-react';
import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { useAppSelector } from '../../../common/app/hooks';
import { IfcEntity } from '../../../common/IfcData/ifc';
import { selectIfcEntities } from '../../../common/slices/ifcDataSlice';
import CategoryCollapse from './CategoryCollapse';

interface SelectionProps {
  loading: boolean;
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

function Selection({ loading }: SelectionProps) {
  const { t } = useTranslation();
  const ifcEntities = useAppSelector(selectIfcEntities);
  const [groupByKey, setGroupByKey] = useState<keyof IfcEntity>('objectType');

  const categoryCollapseList = useMemo(() => {
    if (!ifcEntities) return [];
    const list = Object.entries(groupEntitiesBy(ifcEntities, groupByKey)).map(([category, items], index) => (
      <CategoryCollapse key={category} category={category} items={items} index={category || index.toString()} />
    ));
    return list;
  }, [groupByKey, ifcEntities]);

  const icon = <IconInfoCircle />;

  return (
    <Box pos="relative" style={{ height: '100vh' }}>
      <LoadingOverlay visible={loading || !ifcEntities} />
      {ifcEntities && categoryCollapseList.length === 0 ? (
        <Alert title="No entities selected..." icon={icon} mt="xl">
          {t('entitySelectionInstruction')}
          <Space h="md" />
          {t('needHelp')}{' '}
          <a href="https://github.com/buildingsmart-community/bSDD-Revit-plugin/wiki" target="_blank" rel="noreferrer">
            {t('checkDocumentation')}
          </a>
        </Alert>
      ) : (
        <Box>
          <Select
            my="md"
            label={t('groupBy')}
            placeholder="Select a key"
            data={[
              { value: 'type', label: 'Entity' },
              { value: 'name', label: 'Name' },
              { value: 'description', label: 'Description' },
              { value: 'objectType', label: 'ObjectType' },
              { value: 'predefinedType', label: 'PredefinedType' },
            ]}
            value={groupByKey}
            onChange={(value) => {
              if (value) {
                setGroupByKey(value as keyof IfcEntity);
              }
            }}
          />
          <Accordion chevronPosition="left">{categoryCollapseList}</Accordion>
        </Box>
      )}
    </Box>
  );
}

export default Selection;
