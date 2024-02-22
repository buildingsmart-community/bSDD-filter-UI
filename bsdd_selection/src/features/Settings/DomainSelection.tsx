import { Accordion, ComboboxItem, MultiSelect, Select, Space, Text, Title } from '@mantine/core';
import { useTranslation } from 'react-i18next';

import { useEffect, useState } from 'react';
import { useAppSelector } from '../../app/hooks';
import { BsddDictionary, BsddSettings } from '../../../../common/src/IfcData/bsddBridgeData';
import { DictionaryContractV1 } from '../../../../common/src/BsddApi/BsddApiBase';
import createUuidFromUri from '../../../../common/src/tools/uuidFromUri';
import { selectMainDictionary } from '../../../../common/src/settings/settingsSlice';
import { selectBsddDictionaries } from '../../../../common/src/BsddApi/bsddSlice';
import { IfcClassification } from '../../../../common/src/IfcData/ifc';

interface DomainSelectionProps {
  id: number;
  settings: BsddSettings | undefined;
  setSettings: (settings: BsddSettings) => void;
  setUnsavedChanges: (unsavedChanges: boolean) => void;
  setIsLoading: (isLoading: boolean) => void;
}

function convertToBsddDictionary(dictionary: DictionaryContractV1, oldValues: BsddDictionary[]): BsddDictionary {
  const oldValue = oldValues.find((item) => item.ifcClassification.location === dictionary.uri);
  if (oldValue) {
    return oldValue;
  }
  return {
    ifcClassification: {
      type: 'IfcClassification',
      location: dictionary.uri,
      name: dictionary.name,
    } as IfcClassification,
    parameterMapping: '',
  } as BsddDictionary;
}

function DomainSelection({ id, settings, setSettings, setUnsavedChanges, setIsLoading }: DomainSelectionProps) {
  const { t } = useTranslation();
  const bsddDictionaries = useAppSelector(selectBsddDictionaries);
  const mainDictionary = useAppSelector(selectMainDictionary);

  const [bsddDictionaryOptions, setBsddDictionaryOptions] = useState<ComboboxItem[]>([]);
  const [filterDictionaryValues, setFilterDictionaryValues] = useState<ComboboxItem[]>([]);

  // Set bsdd dictionary options for use in select
  useEffect(() => {
    setBsddDictionaryOptions(
      Object.values(bsddDictionaries).map((item) => ({ value: item.uri, label: `${item.name} (${item.version})` })),
    );
  }, [bsddDictionaries, setBsddDictionaryOptions]);

  // Set filter dictionary options for use in select
  useEffect(() => {
    if (!settings) return;
    setFilterDictionaryValues(
      settings.filterDictionaries.map((item) => ({
        value: item.ifcClassification.location || '',
        label: item.ifcClassification.location || '',
      })),
    );
  }, [settings?.filterDictionaries, setFilterDictionaryValues]);

  // Set filter dictionary options for use in select
  useEffect(() => {
    if (bsddDictionaryOptions.length == 0 || !mainDictionary) return;
    setIsLoading(false);
  }, [bsddDictionaryOptions, mainDictionary]);

  // Change main dictionary
  const changeMainDictionaryOption = (selectedMainDictionaryUri: string | null) => {
    const selectedMainDictionary = Object.values(bsddDictionaries).find(
      (item) => item.uri === selectedMainDictionaryUri,
    );
    if (!selectedMainDictionary || !settings) return;
    const oldValues = [];
    if (settings.mainDictionary) {
      oldValues.push(settings.mainDictionary);
    }
    setSettings({ ...settings, mainDictionary: convertToBsddDictionary(selectedMainDictionary, oldValues) });
    setUnsavedChanges(true);
  };

  // Change filter dictionaries list
  const changeFilterDictionaries = (selectedFilterDictionaryUris: string[]) => {
    if (settings) {
      const newFilterDictionaries = Object.values(bsddDictionaries)
        .filter((item) => selectedFilterDictionaryUris.includes(item.uri))
        .map((item) => convertToBsddDictionary(item, settings.filterDictionaries));
      setSettings({ ...settings, filterDictionaries: newFilterDictionaries });
      setUnsavedChanges(true);
    }
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
          value={settings?.mainDictionary?.ifcClassification.location}
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
          value={filterDictionaryValues.map((item) => item.value)}
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
