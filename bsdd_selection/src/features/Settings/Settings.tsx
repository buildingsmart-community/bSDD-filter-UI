import { ComboboxItem, MultiSelect, Select, Stack, Tabs, Text, InputLabel } from '@mantine/core';
import { useEffect, useState } from 'react';
import LanguageSelect from './LanguageSelect';
import { useTranslation } from 'react-i18next';
import { DictionaryContractV1 } from '../../../../common/src/BsddApi/BsddApiBase';
import { DragUpdate } from '@hello-pangea/dnd';
import cx from 'clsx';
import { rem } from '@mantine/core';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import { IconGripVertical } from '@tabler/icons-react';
import classes from './DndListHandle.module.css';

interface SettingsProps {
  bsddDictionaries: DictionaryContractV1[];
  bsddApiEnvironment: string;
  setBsddApiEnvironment: (val: string) => void;
  mainDictionary: DictionaryContractV1 | undefined;
  setMainDictionary: (val: DictionaryContractV1) => void;
  filterDictionaries: DictionaryContractV1[];
  setFilterDictionaries: (val: DictionaryContractV1[]) => void;
}

function Settings({
  bsddDictionaries,
  bsddApiEnvironment,
  setBsddApiEnvironment,
  mainDictionary,
  setMainDictionary,
  filterDictionaries,
  setFilterDictionaries,
}: SettingsProps) {
  const { t } = useTranslation();
  const [filterDictionaryOptions, setFilterDictionaryOptions] = useState<ComboboxItem[]>([]);
  const [bsddDictionaryOptions, setBsddDictionaryOptions] = useState<ComboboxItem[]>([]);
  const [bsddMainDictionaryUri, setBsddMainDictionaryUri] = useState<string | null>();

  // Set bsdd dictionary options for use in select
  useEffect(() => {
    setBsddDictionaryOptions(bsddDictionaries.map((item) => ({ value: item.uri, label: item.name })));
  }, [bsddDictionaries, setBsddDictionaryOptions]);

  // Set filter dictionary options for use in select
  useEffect(() => {
    setFilterDictionaryOptions(filterDictionaries.map((item) => ({ value: item.uri, label: item.name })));
  }, [filterDictionaries, setFilterDictionaryOptions]);

  // Set main dictionary uri
  useEffect(() => {
    if (!mainDictionary) return;
    setBsddMainDictionaryUri(mainDictionary.uri);
  }, [mainDictionary]);

  // Change bsdd environment
  const changeBsddApiEnvironment = (environmentName: string | null) => {
    if (!environmentName) return;
    console.log(environmentName);
    setBsddApiEnvironment(environmentName);
  };

  // Change main dictionary
  const changeMainDictionaryOption = (selectedMainDictionaryUri: string | null) => {
    setBsddMainDictionaryUri(selectedMainDictionaryUri);
    const selectedMainDictionary = bsddDictionaries.find((item) => item.uri === selectedMainDictionaryUri);
    if (selectedMainDictionary) {
      setMainDictionary(selectedMainDictionary);
    }
  };

  // Change filter dictionaries list
  const changeFilterDictionaries = (selectedFilterDictionaryUris: string[]) => {
    console.log(selectedFilterDictionaryUris);
    setFilterDictionaries(bsddDictionaries.filter((item) => selectedFilterDictionaryUris.includes(item.uri)));
  };

  // Drag and drop update filter dictionaries list
  const onDragEnd = (result: DragUpdate) => {
    if (!result.destination) {
      return;
    }
    const items = Array.from(filterDictionaries);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setFilterDictionaries(items);
  };

  // Drag and drop order filter dictionaries list
  const items = filterDictionaries.map((item, index) => (
    <Draggable key={item.uri} index={index} draggableId={item.uri}>
      {(provided, snapshot) => (
        <div
          className={cx(classes.item, { [classes.itemDragging]: snapshot.isDragging })}
          ref={provided.innerRef}
          {...provided.draggableProps}
        >
          <div {...provided.dragHandleProps} className={classes.dragHandle}>
            <IconGripVertical style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </div>
          <Text className={classes.uri}>{item.name}</Text>
        </div>
      )}
    </Draggable>
  ));

  return (
    <Tabs.Panel value={'settings'}>
      <Stack gap={'xs'} pt={'md'}>
        <LanguageSelect />
        <Select
          label={t('bSDD environment')}
          data={['production', 'test']}
          defaultValue={'test'}
          value={bsddApiEnvironment}
          placeholder="Select an option"
          onChange={changeBsddApiEnvironment}
        />
        <Select
          id="mainDictionary"
          label={t('Main dictionary')}
          value={bsddMainDictionaryUri}
          onChange={changeMainDictionaryOption}
          placeholder="Select main dictionary"
          data={bsddDictionaryOptions}
          searchable
          clearable
        />
        <MultiSelect
          id="filterDictionaries"
          label={t('Selection filter dictionaries')}
          value={filterDictionaryOptions.map((item) => item.value)}
          onChange={(value) => {
            console.log(value);
            changeFilterDictionaries(value);
          }}
          placeholder="Select filter dictionaries"
          data={bsddDictionaryOptions}
          searchable
          clearable
          hidePickedOptions
        />
        <InputLabel htmlFor="dnd-list">{t('Sort filter dictionaries')}</InputLabel>
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
      </Stack>
    </Tabs.Panel>
  );
}

export default Settings;
