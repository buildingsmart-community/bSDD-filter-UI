import { Accordion, ActionIcon, Text, Group, Indicator, Tooltip } from '@mantine/core';
import { useEffect, useState } from 'react';
import { IfcEntity } from '../../../../common/src/IfcData/ifc';
import { ClassContractV1, ClassListItemContractV1 } from '../../../../common/src/BsddApi/BsddApiBase';
import BsddCard from '../BsddCard/BsddCard';
import { BsddApi } from '../../../../common/src/BsddApi/BsddApi';
import { IconCheck, IconSearch } from '@tabler/icons-react';
import { useTranslation } from 'react-i18next';
import '../../../../common/src/theme/styles.css';
import { selectBsddApiEnvironmentUri } from '../../../../common/src/settings/settingsSlice';
import {  useAppSelector } from '../../app/hooks';

interface CategoryCollapseProps {
  bsddEnvironmentName: string;
  category: string;
  opened: Record<string, boolean>;
  bbbr: ClassListItemContractV1[];
  items: IfcEntity[];
  index: string;
}

function CategoryCollapse({ bsddEnvironmentName, category, opened, bbbr, items, index }: CategoryCollapseProps) {
  const { t } = useTranslation();
  const [bsddClass, setBsddClass] = useState<ClassContractV1>();
  const [categoryColor, setCategoryColor] = useState<string>('orange');
  const [colors, setColors] = useState<string[]>([]);
  const bsddApiEnvironment = useAppSelector(selectBsddApiEnvironmentUri);

  function addColor(color: string) {
    setColors([...colors, color]);
  }

  useEffect(() => {
    const found = determineBsddClass(category, bbbr);

    if (found) {
      const classContract = found as ClassContractV1;
      const api = new BsddApi(bsddApiEnvironment);
      api.api
        .classV1List({
          uri: classContract.uri,
          includeClassProperties: true,
          includeChildClassReferences: true,
          includeClassRelations: true,
        })
        .then((response) => {
          console.log('response', response);
          // If the response is not ok, throw an error
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }

          // Update state with the fetched data
          if (response.data) {
            setBsddClass(response.data);
          }
        })
        .catch((error) => {
          throw new Error(`bSDD API error! status: ${error}`);
        });
    }
  }, [category, bbbr]);

  useEffect(() => {
    if (colors.length > 0) {
      if (colors.includes('red') && colors.includes('green')) {
        setCategoryColor('orange');
      } else if (!colors.includes('red')) {
        setCategoryColor('red');
      } else if (!colors.includes('green')) {
        setCategoryColor('green');
      }
    }
  }, [colors, setCategoryColor]);

  function determineBsddClass(category: string, bbbr: ClassListItemContractV1[]): ClassListItemContractV1 | false {
    // if none of the descriptions in data is the same as item.description, then color is red
    // if description is present, orange

    // if ifc type and predefined type are in the found data object, material is the same, nslsfb is the same
    let found;

    bbbr.filter((dataItem: any) => {
      if (dataItem.code === category) {
        found = dataItem;
      }
    });

    if (!found) return false;

    return found;
  }

  function bsddSearchClick() {
    throw new Error('Function not implemented');
  }

  function selectInstances() {
    throw new Error('Function not implemented');
  }

  return (
    <Accordion.Item key={category} value={index}>
      <Accordion.Control>
        <Group justify="space-between" className="flexGroup">
          <Indicator mx="sm" color={categoryColor} size={'1.8em'} />
          <div className="flexTextContainer">
            <Text className="truncate">{category.length > 0 ? category : t('No description')}</Text>
          </div>
          <Tooltip label={t('Select objects')}>
            <ActionIcon radius={'xl'} onClick={() => selectInstances()} color={'blue'}>
              <IconSearch size={20} />
            </ActionIcon>
          </Tooltip>
          <Tooltip label={t('Attach to type')}>
            <ActionIcon radius={'xl'} onClick={() => bsddSearchClick()} color={'green'}>
              <IconCheck size={20} />
            </ActionIcon>
          </Tooltip>
        </Group>
      </Accordion.Control>
      <Accordion.Panel mt="-xs" pl="xl">
        {items.map((item, index) => {
          return <BsddCard item={item} bsddClass={bsddClass as ClassContractV1} key={index} addColor={addColor} />;
        })}
      </Accordion.Panel>
    </Accordion.Item>
  );
}

export default CategoryCollapse;
