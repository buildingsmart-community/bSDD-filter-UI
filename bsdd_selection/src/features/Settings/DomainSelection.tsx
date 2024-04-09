import { Accordion, ComboboxItem, MultiSelect, Select, Space, Text, Title } from '@mantine/core';
import { createSelector } from '@reduxjs/toolkit';
import { useCallback, useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { DictionaryContractV1 } from '../../../../common/src/BsddApi/BsddApiBase';
import { BsddDictionary, BsddSettings } from '../../../../common/src/IfcData/bsddBridgeData';
import { convertBsddDictionaryToIfcClassification } from '../../../../common/src/IfcData/ifcBsddConverters';
import { useAppSelector } from '../../app/hooks';
import { selectBsddDictionaries } from '../bsdd/bsddSlice';

interface DomainSelectionProps {
  id: number;
  localSettings: BsddSettings;
  setLocalSettings: (settings: BsddSettings) => void;
  setUnsavedChanges: (unsavedChanges: boolean) => void;
  setIsLoading: (isLoading: boolean) => void;
}

const IFC_DICTIONARY_URL = 'https://identifier.buildingsmart.org/uri/buildingsmart/ifc/';
const DEFAULT_IFC_PARAMETER = 'Export Type to IFC As';

/**
 * Finds a dictionary in the given array of dictionaries based on the provided URI.
 *
 * @param dictionaries - The array of dictionaries to search.
 * @param uri - The URI of the dictionary to find.
 * @returns The dictionary object if found, or undefined if not found.
 */
function findDictionaryByUri(dictionaries: DictionaryContractV1[], uri: string | null) {
  return Object.values(dictionaries).find((item) => item.uri === uri);
}

/**
 * Converts a dictionary object to a BsddDictionary object.
 * If the dictionary is null, returns null.
 * If the dictionary is not found in the previousSelections array, creates a new BsddDictionary object.
 *
 * @param {DictionaryContractV1 | null} dictionary - The dictionary object to convert.
 * @param {BsddDictionary[]} previousSelections - The array of previously selected dictionaries.
 * @returns {BsddDictionary | null} The converted BsddDictionary object or null if the dictionary is null.
 */
function convertToBsddDictionary(
  dictionary: DictionaryContractV1 | null,
  previousSelections: BsddDictionary[],
  parameterMapping = '',
): BsddDictionary | null {
  if (!dictionary) return null;

  const previousSelection = previousSelections.find((item) => item.ifcClassification.location === dictionary.uri);

  // If the dictionary was previously selected, return it as is to preserve its parameterMapping
  if (previousSelection) return previousSelection;

  return {
    ifcClassification: convertBsddDictionaryToIfcClassification(dictionary),
    parameterMapping,
  };
}

const selectBsddDictionaryOptions = createSelector(selectBsddDictionaries, (bsddDictionaries) =>
  Object.values(bsddDictionaries).map((item) => ({
    value: item.uri,
    label: `${item.name} (${item.version})`,
  })),
);

const selectIfcDictionaryOptions = createSelector(selectBsddDictionaryOptions, (bsddDictionaryOptions) =>
  bsddDictionaryOptions.filter((option) => option.value.startsWith(IFC_DICTIONARY_URL)),
);

const selectFilterDictionaryOptions = createSelector(selectBsddDictionaryOptions, (bsddDictionaryOptions) =>
  bsddDictionaryOptions.filter((option) => !option.value.startsWith(IFC_DICTIONARY_URL)),
);

function DomainSelection({
  id,
  localSettings,
  setLocalSettings,
  setUnsavedChanges,
  setIsLoading,
}: DomainSelectionProps) {
  const { t } = useTranslation();
  const bsddDictionaries = useAppSelector(selectBsddDictionaries);
  const bsddDictionaryOptions = useAppSelector(selectBsddDictionaryOptions);
  const bsddIfcDictionaryOptions = useAppSelector(selectIfcDictionaryOptions);
  const bsddFilterDictionaryOptions = useAppSelector(selectFilterDictionaryOptions);

  const localMainDictionaryValues = useMemo(() => {
    const item = localSettings?.mainDictionary;
    return item
      ? [
          {
            value: item.ifcClassification?.location || '',
            label: item.ifcClassification?.location || '',
          } as ComboboxItem,
        ]
      : [];
  }, [localSettings]);

  const localIfcDictionaryValues = useMemo(() => {
    const item = localSettings?.ifcDictionary;
    return item
      ? [
          {
            value: item.ifcClassification?.location || '',
            label: item.ifcClassification?.location || '',
          } as ComboboxItem,
        ]
      : [];
  }, [localSettings]);

  const localFilterDictionaryValues = useMemo(() => {
    return (
      localSettings?.filterDictionaries.map(
        (item) =>
          ({
            value: item.ifcClassification.location || '',
            label: item.ifcClassification.location || '',
          } as ComboboxItem),
      ) || []
    );
  }, [localSettings]);

  const changeMainDictionaryOption = useCallback(
    (selectedMainDictionaryUris: string[]) => {
      const selectedMainDictionaryUri = selectedMainDictionaryUris[0];
      const selectedMainDictionary =
        findDictionaryByUri(Object.values(bsddDictionaries), selectedMainDictionaryUri) || null;

      const newMainDictionary = convertToBsddDictionary(
        selectedMainDictionary,
        localSettings.mainDictionary ? [localSettings.mainDictionary] : [],
      );
      const newFilterDictionaries = localSettings.filterDictionaries.filter(
        (dictionary) => dictionary.ifcClassification.location !== selectedMainDictionaryUri,
      );

      setLocalSettings({
        ...localSettings,
        mainDictionary: newMainDictionary || null,
        filterDictionaries: newFilterDictionaries,
      } as BsddSettings);
      setUnsavedChanges(true);
    },
    [bsddDictionaries, localSettings, setLocalSettings, setUnsavedChanges],
  );

  const changeIfcDictionaryOption = useCallback(
    (selectedIfcDictionaryUris: string[]) => {
      const selectedIfcDictionaryUri = selectedIfcDictionaryUris[0];
      const selectedIfcDictionary =
        findDictionaryByUri(Object.values(bsddDictionaries), selectedIfcDictionaryUri) || null;

      const parameterMapping: string = localSettings.ifcDictionary?.parameterMapping || DEFAULT_IFC_PARAMETER;
      const newIfcDictionary = convertToBsddDictionary(
        selectedIfcDictionary,
        localSettings.ifcDictionary ? [localSettings.ifcDictionary] : [],
        parameterMapping,
      );
      const newFilterDictionaries = localSettings.filterDictionaries.filter(
        (dictionary) => dictionary.ifcClassification.location !== selectedIfcDictionaryUri,
      );

      setLocalSettings({
        ...localSettings,
        ifcDictionary: newIfcDictionary || null,
        filterDictionaries: newFilterDictionaries,
      } as BsddSettings);
      setUnsavedChanges(true);
    },
    [bsddDictionaries, localSettings, setLocalSettings, setUnsavedChanges],
  );

  const changeFilterDictionaries = useCallback(
    (selectedFilterDictionaryUris: string[]) => {
      const newFilterDictionaries: BsddDictionary[] = Object.values(bsddDictionaries)
        .filter((item) => selectedFilterDictionaryUris.includes(item.uri))
        .map((item) => convertToBsddDictionary(item, localSettings?.filterDictionaries || []))
        .filter(
          (item) =>
            item !== null &&
            item.ifcClassification.location !== localSettings?.mainDictionary?.ifcClassification.location &&
            item.ifcClassification.location !== localSettings?.ifcDictionary?.ifcClassification.location,
        ) as BsddDictionary[];

      const getNewDictionary = (dictionaryValues: ComboboxItem[], dictionary: BsddDictionary | null | undefined) =>
        dictionaryValues && selectedFilterDictionaryUris.includes(dictionaryValues[0]?.value) ? null : dictionary;

      const newMainDictionary = getNewDictionary(localMainDictionaryValues, localSettings?.mainDictionary);
      const newIfcDictionary = getNewDictionary(localIfcDictionaryValues, localSettings?.ifcDictionary);

      setLocalSettings({
        ...localSettings,
        mainDictionary: newMainDictionary || null,
        ifcDictionary: newIfcDictionary || null,
        filterDictionaries: newFilterDictionaries,
      } as BsddSettings);
      setUnsavedChanges(true);
    },
    [
      bsddDictionaries,
      localMainDictionaryValues,
      localSettings,
      localIfcDictionaryValues,
      setLocalSettings,
      setUnsavedChanges,
    ],
  );

  // Set filter dictionary options for use in select
  useEffect(() => {
    if (bsddDictionaryOptions.length === 0) return;
    setIsLoading(false);
  }, [bsddDictionaryOptions, setIsLoading]);

  return (
    <Accordion.Item key={id} value={id.toString()}>
      <Accordion.Control>
        <Title order={5}>{t('Dictionary selection')}</Title>
        <Text size="xs" c="dimmed">
          {t('Dictionary selection help text')}
        </Text>
      </Accordion.Control>
      <Accordion.Panel>
        <MultiSelect
          key="mainDictionary-select"
          id="mainDictionary"
          label={t('Main dictionary')}
          value={localMainDictionaryValues.map((item) => item.value)}
          onChange={changeMainDictionaryOption}
          placeholder="Select main dictionary"
          data={bsddFilterDictionaryOptions}
          maxValues={1}
          searchable
          clearable
        />
        <Space h="xs" />
        <MultiSelect
          key="ifcDictionary-select"
          id="ifcDictionary"
          label={t('Selection IFC dictionary')}
          value={localIfcDictionaryValues.map((item) => item.value)}
          onChange={changeIfcDictionaryOption}
          placeholder="Select filter dictionaries"
          data={bsddIfcDictionaryOptions}
          maxValues={1}
          searchable
          clearable
        />
        <Space h="xs" />
        <MultiSelect
          key="filterDictionaries-select"
          id="filterDictionaries"
          label={t('Selection filter dictionaries')}
          value={localFilterDictionaryValues.map((item) => item.value)}
          onChange={changeFilterDictionaries}
          placeholder="Select filter dictionaries"
          data={bsddFilterDictionaryOptions}
          searchable
          clearable
        />
      </Accordion.Panel>
    </Accordion.Item>
  );
}

export default DomainSelection;
