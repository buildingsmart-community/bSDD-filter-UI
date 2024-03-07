import '../../../../common/src/theme/styles.css';

import { Accordion, ColorSwatch, Group, Text } from '@mantine/core';
import { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { BsddApi } from '../../../../common/src/BsddApi/BsddApi';
import { ClassContractV1, ClassListItemContractV1 } from '../../../../common/src/BsddApi/BsddApiBase';
import { IfcEntity } from '../../../../common/src/IfcData/ifc';
import { Color, colorMap } from '../../../../common/src/tools/colors';
import { useAppSelector } from '../../app/hooks';
import BsddCard from '../BsddCard/BsddCard';
import {
  selectBsddApiEnvironmentUri,
  //  selectLanguage
} from '../Settings/settingsSlice';

interface CategoryCollapseProps {
  category: string;
  bbbr: ClassListItemContractV1[];
  items: IfcEntity[];
  index: string;
}

// if none of the descriptions in data is the same as item.description, then color is red
// if description is present, orange
// if ifc type and predefined type are in the found data object, material is the same, nslsfb is the same
function determineBsddClass(category: string, bbbr: ClassListItemContractV1[]): ClassListItemContractV1 | false {
  const found = bbbr.find((dataItem) => dataItem.code === category);
  if (!found) return false;
  return found;
}

function CategoryCollapse({ category, bbbr, items, index }: CategoryCollapseProps) {
  const { t } = useTranslation();
  const [bsddClass, setBsddClass] = useState<ClassContractV1>();
  const [categoryColor, setCategoryColor] = useState<Color>('grey');
  const [colors, setColors] = useState<Color[]>(new Array(items.length).fill('grey'));
  const bsddApiEnvironment = useAppSelector(selectBsddApiEnvironmentUri);
  // const languageCode = useAppSelector(selectLanguage);

  const setColor = useCallback((cardIndex: number, color: Color) => {
    setColors((prevColors) => {
      const newColors = [...prevColors];
      newColors[cardIndex] = color;
      return newColors;
    });
  }, []);

  useEffect(() => {
    const found = determineBsddClass(category, bbbr);

    if (bsddApiEnvironment && found) {
      const classContract = found as ClassContractV1;
      const api = new BsddApi(bsddApiEnvironment);
      api.api
        .classV1List({
          Uri: classContract.uri,
          IncludeClassProperties: true,
          IncludeChildClassReferences: true,
          IncludeClassRelations: true,
          // languageCode: languageCode || undefined,
        })
        .then((response) => {
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
  }, [category, bbbr, bsddApiEnvironment]);

  useEffect(() => {
    if (colors.includes('orange') || (colors.includes('red') && colors.includes('green'))) {
      setCategoryColor('orange');
    } else if (colors.every((color) => color === 'red')) {
      setCategoryColor('red');
    } else if (colors.every((color) => color === 'green')) {
      setCategoryColor('green');
    }
  }, [colors]);

  return (
    <Accordion.Item key={category} value={index}>
      <Accordion.Control>
        <Group justify="space-between" className="flexGroup">
          <ColorSwatch size="1.5em" color={colorMap[categoryColor]}>
            <Text size="xs" c="white">
              {items.length}
            </Text>
          </ColorSwatch>
          <div className="flexTextContainer">
            <Text className="truncate">{category.length > 0 ? category : t('No description')}</Text>
          </div>
        </Group>
      </Accordion.Control>
      <Accordion.Panel mt="-xs" pl="xl">
        {items.map((item, cardIndex) => {
          return (
            <BsddCard
              item={item}
              bsddClass={bsddClass as ClassContractV1}
              key={cardIndex}
              index={cardIndex}
              setCardColor={setColor}
            />
          );
        })}
      </Accordion.Panel>
    </Accordion.Item>
  );
}

export default CategoryCollapse;
