import { Accordion, Text, TextInput, Title } from '@mantine/core';
import { useTranslation } from 'react-i18next';

import { BsddDictionary, BsddSettings } from '../../../../common/src/IfcData/bsddBridgeData';

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

  const handleInputChange = (dictionaryUri: string | undefined, newParameterMapping: string) => {
    if (!settings) return;
    let newSettings = { ...settings };
    if (newSettings.mainDictionary?.ifcClassification.location === dictionaryUri) {
      const mainDictionary: BsddDictionary = {
        ...(newSettings.mainDictionary as BsddDictionary),
        parameterMapping: newParameterMapping,
      };
      newSettings.mainDictionary = mainDictionary;
    } else {
      newSettings.filterDictionaries = newSettings.filterDictionaries.map((dictionary) => {
        if (dictionary.ifcClassification.location === dictionaryUri) {
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
          <div key={input.ifcClassification.location} style={{ marginBottom: '1em' }}>
            <TextInput
              label={input.ifcClassification.location}
              placeholder="Enter a revit type parameter"
              value={input.parameterMapping}
              onChange={(event) => handleInputChange(input.ifcClassification.location, event.currentTarget.value)}
            />{' '}
          </div>
        ))}
      </Accordion.Panel>
    </Accordion.Item>
  );
}

export default ParameterMapping;
