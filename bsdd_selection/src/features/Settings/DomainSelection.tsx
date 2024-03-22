import { Accordion, ComboboxItem, MultiSelect, Select, Space, Text, Title } from '@mantine/core';
import { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { DictionaryContractV1 } from '../../../../common/src/BsddApi/BsddApiBase';
import { BsddDictionary, BsddSettings } from '../../../../common/src/IfcData/bsddBridgeData';
import { convertBsddDictionaryToIfcClassification } from '../../../../common/src/IfcData/ifcBsddConverters';
import { useAppSelector } from '../../app/hooks';
import { selectBsddDictionaries } from '../bsdd/bsddSlice';
import { selectMainDictionary } from './settingsSlice';

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
    ifcClassification: convertBsddDictionaryToIfcClassification(dictionary),
    parameterMapping: '',
  } as BsddDictionary;
}

function DomainSelection({ id, settings, setSettings, setUnsavedChanges, setIsLoading }: DomainSelectionProps) {
  const { t } = useTranslation();
  const bsddDictionaries = useAppSelector(selectBsddDictionaries);
  const mainDictionary = useAppSelector(selectMainDictionary);

  const [bsddDictionaryOptions, setBsddDictionaryOptions] = useState<ComboboxItem[]>([]);

  const [mainDictionaryValue, setMainDictionaryValue] = useState<string | null>();
  const [filterDictionaryValues, setFilterDictionaryValues] = useState<ComboboxItem[]>([]);

  // Set bsdd dictionary options for use in select
  useEffect(() => {
    setBsddDictionaryOptions(
      Object.values(bsddDictionaries).map((item) => ({ value: item.uri, label: `${item.name} (${item.version})` })),
    );
  }, [bsddDictionaries, setBsddDictionaryOptions]);

  useEffect(() => {
    const newMainDictionaryValue = settings?.mainDictionary?.ifcClassification.location;
    if (newMainDictionaryValue !== mainDictionaryValue) {
      setMainDictionaryValue(newMainDictionaryValue);
    }
  }, [mainDictionaryValue, settings?.mainDictionary]);

  // Set filter dictionary options for use in select
  useEffect(() => {
    if (!settings) return;
    setFilterDictionaryValues(
      settings.filterDictionaries.map((item) => ({
        value: item.ifcClassification.location || '',
        label: item.ifcClassification.location || '',
      })),
    );
  }, [settings, setFilterDictionaryValues]);

  // Set filter dictionary options for use in select
  useEffect(() => {
    if (bsddDictionaryOptions.length === 0 || !mainDictionary) return;
    setIsLoading(false);
  }, [bsddDictionaryOptions, mainDictionary, setIsLoading]);

  // Change main dictionary
  const changeMainDictionaryOption = useCallback(
    (selectedMainDictionaryUri: string | null) => {
      setMainDictionaryValue(selectedMainDictionaryUri);
      if (selectedMainDictionaryUri === null) {
        // Clear the selected main dictionary
        if (settings) {
          setSettings({ ...settings, mainDictionary: null });
          setUnsavedChanges(true);
        }
        return;
      }

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
    },
    [bsddDictionaries, settings, setSettings, setUnsavedChanges],
  );

  // Change filter dictionaries list
  const changeFilterDictionaries = useCallback(
    (selectedFilterDictionaryUris: string[]) => {
      if (settings) {
        const newFilterDictionaries = Object.values(bsddDictionaries)
          .filter((item) => selectedFilterDictionaryUris.includes(item.uri))
          .map((item) => convertToBsddDictionary(item, settings.filterDictionaries));
        setSettings({ ...settings, filterDictionaries: newFilterDictionaries });
        setUnsavedChanges(true);
      }
    },
    [bsddDictionaries, settings, setSettings, setUnsavedChanges],
  );

  // Check if the selected main dictionaries are still in bsddDictionaryOptions after changing search options
  useEffect(() => {
    if (!settings) {
      changeMainDictionaryOption(null);
      changeFilterDictionaries([]);
    }

    if (
      settings?.mainDictionary &&
      !bsddDictionaryOptions.find((option) => option.value === settings.mainDictionary?.ifcClassification.location)
    ) {
      changeMainDictionaryOption(null);
    }

    const newFilterDictionaryValues =
      settings?.filterDictionaries.map((dictionary) => dictionary.ifcClassification.location) || [];
    const invalidFilterDictionaries = newFilterDictionaryValues.filter(
      (value) => !bsddDictionaryOptions.find((option) => option.value === value),
    );
    if (invalidFilterDictionaries.length > 0) {
      changeFilterDictionaries(newFilterDictionaryValues.filter((value) => !invalidFilterDictionaries.includes(value)));
    }
  }, [bsddDictionaryOptions, settings, changeMainDictionaryOption, changeFilterDictionaries]);

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
          key={mainDictionaryValue || 'mainDictionary-select'} // workaround for select not updating when value is changed to null
          id="mainDictionary"
          label={t('Main dictionary')}
          value={mainDictionaryValue}
          onChange={changeMainDictionaryOption}
          placeholder="Select main dictionary"
          data={bsddDictionaryOptions}
          searchable
          clearable
        />
        <Space h="xs" />
        <MultiSelect
          key="filterDictionaries-select"
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
