import { Accordion, ActionIcon, Text, Group, Indicator, Tooltip, ColorSwatch } from '@mantine/core';
import { useEffect, useState } from 'react';
import { IfcEntity } from '../../../../common/src/IfcData/ifc';
import { ClassContractV1, ClassListItemContractV1 } from '../../../../common/src/BsddApi/BsddApiBase';
import BsddCard from '../BsddCard/BsddCard';
import { BsddApi } from '../../../../common/src/BsddApi/BsddApi';
import { IconPencil } from '@tabler/icons-react';
import { useTranslation } from 'react-i18next';
import '../../../../common/src/theme/styles.css';
import { selectBsddApiEnvironmentUri } from '../../../../common/src/settings/settingsSlice';
import { useAppSelector } from '../../app/hooks';
import { Color, colorMap } from '../../../../common/src/tools/colors';

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
  const [categoryColor, setCategoryColor] = useState<Color>('red');
  const [colors, setColors] = useState<Color[]>(new Array(items.length).fill('red'));
  const bsddApiEnvironment = useAppSelector(selectBsddApiEnvironmentUri);

  function setColor(index: number, color: Color) {
    const newColors = [...colors];
    newColors[index] = color;
    setColors(newColors);
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
    if (colors.includes('orange') || (colors.includes('red') && colors.includes('green'))) {
      setCategoryColor('orange');
    } else if (colors.every((color) => color === 'red')) {
      setCategoryColor('red');
    } else if (colors.every((color) => color === 'green')) {
      setCategoryColor('green');
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

  return (
    <Accordion.Item key={category} value={index}>
      <Accordion.Control>
        <Group justify="space-between" className="flexGroup">
          <ColorSwatch   size={'1.5em'} color={colorMap[categoryColor]} >
            <Text size='xs' c="white">{items.length}</Text>
          </ColorSwatch>
          <div className="flexTextContainer">
            <Text className="truncate">{category.length > 0 ? category : t('No description')}</Text>
          </div>
        </Group>
      </Accordion.Control>
      <Accordion.Panel mt="-xs" pl="xl">
        {items.map((item, index) => {
          return (
            <BsddCard
              item={item}
              bsddClass={bsddClass as ClassContractV1}
              key={index}
              index={index}
              setColor={setColor}
            />
          );
        })}
      </Accordion.Panel>
    </Accordion.Item>
  );
}

export default CategoryCollapse;
