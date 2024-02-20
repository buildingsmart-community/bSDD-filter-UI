/* eslint-disable react/jsx-props-no-spreading */
import { DragDropContext, Draggable, DragUpdate, Droppable } from '@hello-pangea/dnd';
import { Accordion, rem, Text, Title } from '@mantine/core';
import { IconGripVertical } from '@tabler/icons-react';
import cx from 'clsx';
import { useTranslation } from 'react-i18next';

import classes from './DndListHandle.module.css';
import { useAppSelector } from '../../app/hooks';
import { BsddSettings } from '../../../../common/src/IfcData/bsddBridgeData';
import { selectFilterDictionaries } from '../../../../common/src/settings/settingsSlice';

interface DomainSortProps {
  id: number;
  settings: BsddSettings | undefined;
  setSettings: (settings: BsddSettings) => void;
  setUnsavedChanges: (unsavedChanges: boolean) => void;
}

function DomainSort({ id, settings, setSettings, setUnsavedChanges }: DomainSortProps) {
  const { t } = useTranslation();
  const filterDictionaries = useAppSelector(selectFilterDictionaries);

  // Drag and drop update filter dictionaries list
  const onDragEnd = (result: DragUpdate) => {
    if (!settings || !result.destination) return;
    const items = Array.from(filterDictionaries);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setSettings({ ...settings, filterDictionaries: items });
    setUnsavedChanges(true);
  };

  // Drag and drop order filter dictionaries list
  const items = filterDictionaries.map((item, index) => (
    <Draggable key={item.dictionaryUri} index={index} draggableId={item.dictionaryUri}>
      {(provided, snapshot) => (
        <div
          className={cx(classes.item, { [classes.itemDragging]: snapshot.isDragging })}
          ref={provided.innerRef}
          {...provided.draggableProps}
        >
          <div {...provided.dragHandleProps} className={classes.dragHandle}>
            <IconGripVertical style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </div>
          <Text className={classes.uri}>{item.dictionaryName}</Text>
        </div>
      )}
    </Draggable>
  ));

  return (
    <Accordion.Item key={id} value={id.toString()}>
      <Accordion.Control>
        <Title order={5}>{t('Sort filter dictionaries')}</Title>
        <Text size="xs" c="dimmed">
          {t('Sort filter dictionaries help text')}
        </Text>
      </Accordion.Control>
      <Accordion.Panel>
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="dnd-list" direction="vertical">
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                {items}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </Accordion.Panel>
    </Accordion.Item>
  );
}

export default DomainSort;
