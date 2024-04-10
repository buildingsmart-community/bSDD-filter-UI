/* eslint-disable react/jsx-props-no-spreading */
import { DragDropContext, Draggable, DragUpdate, Droppable } from '@hello-pangea/dnd';
import { Accordion, rem, Text, Title } from '@mantine/core';
import { IconGripVertical } from '@tabler/icons-react';
import cx from 'clsx';
import { useTranslation } from 'react-i18next';

import { BsddSettings } from '../../../../common/src/IfcData/bsddBridgeData';
import classes from './DndListHandle.module.css';

interface DomainSortProps {
  id: number;
  localSettings: BsddSettings;
  setLocalSettings: (settings: BsddSettings) => void;
  setUnsavedChanges: (unsavedChanges: boolean) => void;
}

function DomainSort({ id, localSettings, setLocalSettings, setUnsavedChanges }: DomainSortProps) {
  const { t } = useTranslation();
  const filterDictionaries = localSettings ? localSettings.filterDictionaries : [];
  // Drag and drop update filter dictionaries list
  const onDragEnd = (result: DragUpdate) => {
    if (!localSettings || !result.destination) return;
    const items = Array.from(filterDictionaries);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setLocalSettings({ ...localSettings, filterDictionaries: items });
    setUnsavedChanges(true);
  };

  // Drag and drop order filter dictionaries list
  const items = filterDictionaries.map((item, index) => (
    <Draggable key={item.ifcClassification.location} index={index} draggableId={item.ifcClassification.location}>
      {(provided, snapshot) => (
        <div
          className={cx(classes.item, { [classes.itemDragging]: snapshot.isDragging })}
          ref={provided.innerRef}
          {...provided.draggableProps}
        >
          <div {...provided.dragHandleProps} className={classes.dragHandle}>
            <IconGripVertical style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </div>
          <Text className={classes.uri}>{item.ifcClassification.location}</Text>
        </div>
      )}
    </Draggable>
  ));

  return (
    <Accordion.Item key={id} value={id.toString()}>
      <Accordion.Control>
        <Title order={5}>{t('sortFilterDictionariesLabel')}</Title>
        <Text size="xs" c="dimmed">
          {t('sortFilterDictionariesInstruction')}
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
