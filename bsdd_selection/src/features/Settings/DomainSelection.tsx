import { Accordion, ComboboxItem, MultiSelect, Select, Space, Text, Title } from '@mantine/core';
import { useCallback, useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { DictionaryContractV1 } from '../../../../common/src/BsddApi/BsddApiBase';
import { BsddDictionary, BsddSettings } from '../../../../common/src/IfcData/bsddBridgeData';
import { convertBsddDictionaryToIfcClassification } from '../../../../common/src/IfcData/ifcBsddConverters';
import { useAppSelector } from '../../app/hooks';
import { selectBsddDictionaries } from '../bsdd/bsddSlice';

interface DomainSelectionProps {
  id: number;
  localSettings: BsddSettings | undefined;
  setLocalSettings: (settings: BsddSettings) => void;
  setUnsavedChanges: (unsavedChanges: boolean) => void;
  setIsLoading: (isLoading: boolean) => void;
}

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
): BsddDictionary | null {
  if (!dictionary) return null;

  const previousSelection = previousSelections.find((item) => item.ifcClassification.location === dictionary.uri);

  // If the dictionary was previously selected, return it as is to preserve its parameterMapping
  if (previousSelection) return previousSelection;

  return {
    ifcClassification: convertBsddDictionaryToIfcClassification(dictionary),
    parameterMapping: '',
  };
}

/**
 * Updates the local settings with new values and sets unsaved changes flag.
 *
 * @param localSettings - The current local settings.
 * @param setLocalSettings - The function to update the local settings.
 * @param setUnsavedChanges - The function to set the unsaved changes flag.
 * @param newMainDictionary - The new main dictionary value.
 * @param newFilterDictionaries - The new filter dictionaries array.
 */
function updateLocalSettings(
  localSettings: BsddSettings | undefined,
  setLocalSettings: (settings: BsddSettings) => void,
  setUnsavedChanges: (unsavedChanges: boolean) => void,
  newMainDictionary: BsddDictionary | null | undefined,
  newFilterDictionaries: BsddDictionary[],
) {
  if (localSettings) {
    setLocalSettings({
      ...localSettings,
      mainDictionary: newMainDictionary || null,
      filterDictionaries: newFilterDictionaries,
    });
    setUnsavedChanges(true);
  }
}

function DomainSelection({
  id,
  localSettings,
  setLocalSettings,
  setUnsavedChanges,
  setIsLoading,
}: DomainSelectionProps) {
  const { t } = useTranslation();
  const bsddDictionaries = useAppSelector(selectBsddDictionaries);

  const bsddDictionaryOptions = Object.values(bsddDictionaries).map((item) => ({
    value: item.uri,
    label: `${item.name} (${item.version})`,
  }));

  const localMainDictionaryValue = localSettings?.mainDictionary?.ifcClassification.location || null;

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
    (selectedMainDictionaryUri: string | null) => {
      console.log('changeMainDictionaryOption', selectedMainDictionaryUri);
      const selectedMainDictionary =
        findDictionaryByUri(Object.values(bsddDictionaries), selectedMainDictionaryUri) || null;

      if (!localSettings) return;

      const oldValues = localSettings.mainDictionary ? [localSettings.mainDictionary] : [];
      const newMainDictionary = convertToBsddDictionary(selectedMainDictionary, oldValues);

      const newFilterDictionaries = localSettings.filterDictionaries.filter(
        (dictionary) => dictionary.ifcClassification.location !== selectedMainDictionaryUri,
      );

      updateLocalSettings(localSettings, setLocalSettings, setUnsavedChanges, newMainDictionary, newFilterDictionaries);
    },
    [bsddDictionaries, localSettings, setLocalSettings, setUnsavedChanges],
  );

  const changeFilterDictionaries = useCallback(
    (selectedFilterDictionaryUris: string[]) => {
      const newFilterDictionaries: BsddDictionary[] = Object.values(bsddDictionaries)
        .filter((item) => selectedFilterDictionaryUris.includes(item.uri))
        .map((item) => convertToBsddDictionary(item, localSettings?.filterDictionaries || []))
        .filter((item) => item !== null) as BsddDictionary[];

      const newMainDictionary =
        localMainDictionaryValue && selectedFilterDictionaryUris.includes(localMainDictionaryValue)
          ? null
          : localSettings?.mainDictionary;

      updateLocalSettings(localSettings, setLocalSettings, setUnsavedChanges, newMainDictionary, newFilterDictionaries);
    },
    [bsddDictionaries, localSettings, setLocalSettings, setUnsavedChanges, localMainDictionaryValue],
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
        <Select
          key={localMainDictionaryValue || 'mainDictionary-select'} // workaround for select not updating when value is changed to null
          id="mainDictionary"
          label={t('Main dictionary')}
          value={localMainDictionaryValue}
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
          value={localFilterDictionaryValues.map((item) => item.value)}
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
