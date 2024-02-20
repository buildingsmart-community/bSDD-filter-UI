import { Accordion, Text, TextInput, Title } from '@mantine/core';
import { useTranslation } from 'react-i18next';

import { BsddSettings } from '../../../../common/src/IfcData/bsddBridgeData';

interface ParameterMappingProps {
  id: number;
  settings: BsddSettings | undefined;
  setSettings: (settings: BsddSettings) => void;
  setUnsavedChanges: (unsavedChanges: boolean) => void;
}

function ParameterMapping({ id, settings, setSettings, setUnsavedChanges }: ParameterMappingProps) {
  const { t } = useTranslation();
  const { mainDictionary, filterDictionaries } = settings || { mainDictionary: null, filterDictionaries: [] };
  const activeDictionaries = mainDictionary ? [mainDictionary, ...filterDictionaries] : filterDictionaries;

  const handleInputChange = (dictionaryUri: string, newParameterMapping: string) => {
    if (!settings) return;
    let newSettings = { ...settings };
    if (newSettings.mainDictionary?.dictionaryUri === dictionaryUri) {
      const mainDictionary = { ...newSettings.mainDictionary, parameterMapping: newParameterMapping };
      newSettings.mainDictionary = mainDictionary;
    } else {
      newSettings.filterDictionaries = newSettings.filterDictionaries.map((dictionary) => {
        if (dictionary.dictionaryUri === dictionaryUri) {
          return { ...dictionary, parameterMapping: newParameterMapping };
        }
        return dictionary;
      });
    }
    setSettings(newSettings);
    setUnsavedChanges(true);
  };

  return (
    <Accordion.Item key={id} value={id.toString()}>
      <Accordion.Control>
        <Title order={5}>{t('Parameter mapping')}</Title>
        <Text size="xs" c="dimmed">
          {t('Parameter mapping help text')}
        </Text>
      </Accordion.Control>
      <Accordion.Panel>
        {activeDictionaries.map((input) => (
          <div key={input.dictionaryUri} style={{ marginBottom: '1em' }}>
            <TextInput
              label={input.dictionaryName}
              placeholder="Enter a revit type parameter"
              value={input.parameterMapping}
              onChange={(event) => handleInputChange(input.dictionaryUri, event.currentTarget.value)}
            />{' '}
          </div>
        ))}
      </Accordion.Panel>
    </Accordion.Item>
  );
}

export default ParameterMapping;
