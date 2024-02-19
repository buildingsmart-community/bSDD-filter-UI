import { Accordion, ComboboxItem, MultiSelect, Select, Space, Text, Title } from '@mantine/core';
import { useTranslation } from 'react-i18next';

import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { RootState } from '../../app/store';
import { setFilterDictionaries, setMainDictionary } from '../../../../common/src/settings/settingsSlice';
import { BsddDictionary } from '../../../../common/src/IfcData/bsddBridgeData';
import { DictionaryContractV1 } from '../../../../common/src/BsddApi/BsddApiBase';
import createUuidFromUri from '../../../../common/src/tools/uuidFromUri';

interface DomainSelectionProps {
  id: number;
}

function convertToBsddDictionary(dictionary: DictionaryContractV1, oldValues: BsddDictionary[]): BsddDictionary {
  const oldValue = oldValues.find((item) => item.dictionaryUri === dictionary.uri);
  if (oldValue) {
    return oldValue;
  }
  return {
    dictionaryUri: dictionary.uri,
    dictionaryName: dictionary.name,
    parameterName: `bsdd/${dictionary.organizationCodeOwner}/${dictionary.name}`.replace(/\s/g, '-'),
    parameterId: createUuidFromUri(dictionary.uri),
    parameterMapping: '',
  } as BsddDictionary;
}

function DomainSelection({ id }: DomainSelectionProps) {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const bsddDictionaries = useAppSelector((state: RootState) => state.bsdd.dictionaries);
  const filterDictionaries = useAppSelector((state: RootState) => state.settings.filterDictionaries);
  const mainDictionary = useAppSelector((state: RootState) => state.settings.mainDictionary);

  const [bsddDictionaryOptions, setBsddDictionaryOptions] = useState<ComboboxItem[]>([]);
  const [filterDictionaryOptions, setFilterDictionaryOptions] = useState<ComboboxItem[]>([]);

  // Set bsdd dictionary options for use in select
  useEffect(() => {
    setBsddDictionaryOptions(Object.values(bsddDictionaries).map((item) => ({ value: item.uri, label: item.name })));
  }, [bsddDictionaries, setBsddDictionaryOptions]);

  // Set filter dictionary options for use in select
  useEffect(() => {
    setFilterDictionaryOptions(
      filterDictionaries.map((item) => ({ value: item.dictionaryUri, label: item.dictionaryName })),
    );
  }, [filterDictionaries, setFilterDictionaryOptions]);

  // Change main dictionary
  const changeMainDictionaryOption = (selectedMainDictionaryUri: string | null) => {
    const selectedMainDictionary = Object.values(bsddDictionaries).find(
      (item) => item.uri === selectedMainDictionaryUri,
    );
    if (selectedMainDictionary) {
      const oldValues = [];
      if (mainDictionary) {
        oldValues.push(mainDictionary);
      }
      dispatch(setMainDictionary(convertToBsddDictionary(selectedMainDictionary, oldValues)));
    }
  };

  // Change filter dictionaries list
  const changeFilterDictionaries = (selectedFilterDictionaryUris: string[]) => {
    const newFilterDictionaries = Object.values(bsddDictionaries)
      .filter((item) => selectedFilterDictionaryUris.includes(item.uri))
      .map((item) => convertToBsddDictionary(item, filterDictionaries));
    dispatch(setFilterDictionaries(newFilterDictionaries));
  };

  return (
    <Accordion.Item key={id} value={id.toString()}>
      <Accordion.Control>
        <Title order={5}>{t('Dictionary selection')}</Title>
        <Text size="xs" c="dimmed">
          {t('Dictionary selection help text')}
        </Text>
      </Accordion.Control>
      <Accordion.Panel>
        <Select
          id="mainDictionary"
          label={t('Main dictionary')}
          value={mainDictionary?.dictionaryUri}
          onChange={changeMainDictionaryOption}
          placeholder="Select main dictionary"
          data={bsddDictionaryOptions}
          searchable
          clearable
        />
        <Space h="xs" />
        <MultiSelect
          id="filterDictionaries"
          label={t('Selection filter dictionaries')}
          value={filterDictionaryOptions.map((item) => item.value)}
          onChange={(value) => {
            changeFilterDictionaries(value);
          }}
          placeholder="Select filter dictionaries"
          data={bsddDictionaryOptions}
          searchable
          clearable
          hidePickedOptions
        />
      </Accordion.Panel>
    </Accordion.Item>
  );
}

export default DomainSelection;
