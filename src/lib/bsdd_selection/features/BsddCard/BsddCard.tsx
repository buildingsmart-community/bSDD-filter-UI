import '../../../common/theme/styles.css';

import { ActionIcon, ColorSwatch, Group, HoverCard, Text, Tooltip } from '@mantine/core';
import { IconPencil, IconPointer } from '@tabler/icons-react';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { useApiFunctions } from '../../../common/apiFunctionsContext';
import { useAppSelector } from '../../../common/app/hooks';
import { IfcEntity } from '../../../common/IfcData/ifc';
import { selectActiveDictionaries, selectMainDictionary } from '../../../common/slices/settingsSlice';
import getClassUriFromDictionary, { ClassificationStatus } from '../../../common/tools/checkIfcClassification';
import { Color, colorMap } from '../../../common/tools/colors';

interface BsddCardProps {
  item: IfcEntity;
  index: number;
  setCardColor: (index: number, color: Color) => void;
}

/**
 * Renders a card component for displaying information about a bSDD entity.
 *
 * @param item - The bSDD entity to display.
 * @param bsddClass - The bSDD class associated with the entity.
 * @param setCardColor - A function to add color to the card.
 * @returns The rendered card component.
 */
function BsddCard({ item: ifcEntity, index, setCardColor: setCategoryColor }: BsddCardProps) {
  const { t } = useTranslation();
  const activeDictionaries = useAppSelector(selectActiveDictionaries);
  const mainDictionary = useAppSelector(selectMainDictionary);
  const { bsddSearchClick, bsddSelect } = useApiFunctions();

  const [cardColor, setCardColor] = useState<Color>('grey');
  const [activeClassificationStatuses, setActiveClassificationStatuses] = useState<ClassificationStatus[]>([]);
  const [activeClassificationColors, setActiveClassificationColors] = useState<Color[]>([]);

  // Set the color of the card based on the status of the active classification statuses
  useEffect(() => {
    function updateColor(color: Color) {
      setCardColor(color);
      setCategoryColor(index, color);
    }

    if (activeClassificationStatuses.every((it) => it !== null)) {
      updateColor('green');
    } else if (activeClassificationStatuses.some((it) => it !== null)) {
      updateColor('orange');
    } else {
      updateColor('red');
    }
  }, [activeClassificationStatuses, index, setCategoryColor]);

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

  return (
    <Group mt="xs" justify="space-between" className="flexGroup">
      <ColorSwatch size="1.5em" color={colorMap[cardColor]} />
      <HoverCard position="bottom-end" shadow="md">
        <HoverCard.Target>
          <div className="flexTextContainer">
            <Text className="truncate">{ifcEntity.name}</Text>
          </div>
        </HoverCard.Target>
        <HoverCard.Dropdown>
          <Text>{t('dictionaryValidationSummaryLabel')}:</Text>
          {activeDictionaries.map((dictionary, dictionaryIndex) => {
            const dictionaryKey = dictionary.ifcClassification.location || dictionaryIndex;
            return (
              <Group key={dictionaryKey} mt="xs" justify="space-between" className="flexGroup">
                <ColorSwatch size="1em" color={colorMap[activeClassificationColors[dictionaryIndex]]} />
                <div className="flexTextContainer">
                  <Text className="truncate">{dictionary.ifcClassification.name}</Text>
                </div>
              </Group>
            );
          })}
        </HoverCard.Dropdown>
      </HoverCard>
      <Tooltip label={t('attachToType')}>
        <ActionIcon
          radius="xl"
          onClick={() => bsddSearchClick(ifcEntity)}
          disabled={!mainDictionary?.ifcClassification?.location}
        >
          <IconPencil size={20} />
        </ActionIcon>
      </Tooltip>
      <Tooltip label={t('selectObjects')}>
        <ActionIcon radius="xl" onClick={() => bsddSelect(ifcEntity)}>
          <IconPointer size={20} />
        </ActionIcon>
      </Tooltip>
    </Group>
  );
}

export default BsddCard;
