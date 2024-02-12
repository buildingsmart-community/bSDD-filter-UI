import { ActionIcon, ColorSwatch, Group, HoverCard, Indicator, Text, Tooltip } from '@mantine/core';
import { IfcEntity } from '../../../../common/src/IfcData/ifc';
import { IconNumber0Small, IconPencil } from '@tabler/icons-react';
import { ClassContractV1 } from '../../../../common/src/BsddApi/BsddApiBase';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../../../../common/src/theme/styles.css';
import { useAppSelector } from '../../app/hooks';
import { selectActiveDictionaries } from '../../../../common/src/settings/settingsSlice';
import getClassUriFromDictionary, { ClassificationStatus } from '../../../../common/src/tools/checkIfcClassification';
import { Color, colorMap } from '../../../../common/src/tools/colors';

interface BsddCardProps {
  item: IfcEntity;
  bsddClass: ClassContractV1;
  index: number;
  setColor: (index: number, color: Color) => void;
}

/**
 * Renders a card component for displaying information about a bSDD entity.
 *
 * @param item - The bSDD entity to display.
 * @param bsddClass - The bSDD class associated with the entity.
 * @param setColor - A function to add color to the card.
 * @returns The rendered card component.
 */
function BsddCard({ item: ifcEntity, bsddClass, index, setColor: addColor }: BsddCardProps) {
  const { t } = useTranslation();
  const activeDictionaries = useAppSelector(selectActiveDictionaries);
  const [color, setColor] = useState<Color>('red');
  const [activeClassificationStatuses, setActiveClassificationStatuses] = useState<ClassificationStatus[]>([]);
  const [activeClassificationColors, setActiveClassificationColors] = useState<Color[]>([]);

  // Set the color of the card based on the status of the active classification statuses
  useEffect(() => {
    if (activeClassificationStatuses.every((it) => it !== null)) {
      setColor('green');
    } else if (activeClassificationStatuses.some((it) => it !== null)) {
      setColor('orange');
    } else {
      setColor('red');
    }
  }, [activeClassificationStatuses]);

  // update the color of the outer category based on the color of the inner cards
  useEffect(() => {
    addColor(index, color);
  }, [color]);

  // set the colors for every active dictionary when they change based on the status of the active classification statuses
  useEffect(() => {
    const newColors: Color[] = activeClassificationStatuses.map((status) => (status !== null ? 'green' : 'red'));
    setActiveClassificationColors(newColors);
  }, [activeClassificationStatuses]);

  // Check for every active dictionary if the IFC entity has a matching classification reference
  useEffect(() => {
    setActiveClassificationStatuses(
      activeDictionaries.map((dictionary) => getClassUriFromDictionary(ifcEntity, dictionary)),
    );
  }, [ifcEntity, activeDictionaries]);

  function bsddSearchClick(ifcProduct: IfcEntity) {
    const ifcEntityJson = JSON.stringify(ifcProduct);

    // @ts-ignore
    bsddBridge.bsddSearch(ifcEntityJson);
  }

  return (
    <Group mt="xs" justify="space-between" className="flexGroup">
      <ColorSwatch size={'1.5em'} color={colorMap[color]}></ColorSwatch>
      <HoverCard position="bottom-end" shadow="md">
        <HoverCard.Target>
          <div className="flexTextContainer">
            <Text className="truncate">{ifcEntity.name}</Text>
          </div>
        </HoverCard.Target>
        <HoverCard.Dropdown>
          <Text>Validation per class:</Text>
          {activeDictionaries.map((dictionary, index) => {
            const status = activeClassificationStatuses[index];
            return (
              <Group key={dictionary.dictionaryUri} mt="xs" justify="space-between" className="flexGroup">
                <ColorSwatch size={'1em'} color={colorMap[activeClassificationColors[index]]}></ColorSwatch>
                <div className="flexTextContainer">
                  <Text className="truncate">{dictionary.dictionaryName}</Text>
                </div>
              </Group>
            );
          })}
        </HoverCard.Dropdown>
      </HoverCard>
      <Tooltip label={t('Attach to type')}>
        <ActionIcon radius={'xl'} onClick={() => bsddSearchClick(ifcEntity)}>
          <IconPencil size={20} />
        </ActionIcon>
      </Tooltip>
    </Group>
  );
}

export default BsddCard;
