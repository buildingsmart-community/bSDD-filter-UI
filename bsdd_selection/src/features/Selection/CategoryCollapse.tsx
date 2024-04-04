import '../../../../common/src/theme/styles.css';

import { Accordion, ColorSwatch, Group, Text } from '@mantine/core';
import { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { IfcEntity } from '../../../../common/src/IfcData/ifc';
import { Color, colorMap } from '../../../../common/src/tools/colors';
import BsddCard from '../BsddCard/BsddCard';

interface CategoryCollapseProps {
  category: string;
  items: IfcEntity[];
  index: string;
}

function CategoryCollapse({ category, items, index }: CategoryCollapseProps) {
  const { t } = useTranslation();
  const [categoryColor, setCategoryColor] = useState<Color>('grey');
  const [colors, setColors] = useState<Color[]>(new Array(items.length).fill('grey'));

  const setColor = useCallback((cardIndex: number, color: Color) => {
    setColors((prevColors) => {
      const newColors = [...prevColors];
      newColors[cardIndex] = color;
      return newColors;
    });
  }, []);

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
          return <BsddCard item={item} key={cardIndex} index={cardIndex} setCardColor={setColor} />;
        })}
      </Accordion.Panel>
    </Accordion.Item>
  );
}

export default CategoryCollapse;
