import { Accordion, Text, TextInput, Title } from '@mantine/core';
import { useTranslation } from 'react-i18next';

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { RootState } from '../../app/store';
import {
  selectActiveDictionaries,
  setFilterDictionaries,
  setMainDictionary,
} from '../../../../common/src/settings/settingsSlice';

interface ParameterMappingProps {
  id: number;
}

function ParameterMapping({ id }: ParameterMappingProps) {
  const dispatch = useAppDispatch();

  const { t } = useTranslation();
  const mainDictionary = useAppSelector((state: RootState) => state.settings.mainDictionary);
  const filterDictionaries = useAppSelector((state: RootState) => state.settings.filterDictionaries);
  const activeDictionaries = useAppSelector(selectActiveDictionaries);

  const handleInputChange = (dictionaryUri: string, newParameterMapping: string) => {
    // Find the dictionary in mainDictionary
    if (mainDictionary?.dictionaryUri === dictionaryUri) {
      // Dispatch an action to update it in mainDictionary
      dispatch(setMainDictionary({ ...mainDictionary, parameterMapping: newParameterMapping }));
      return;
    }

    // Dispatch an action to update it in filterDictionaries
    dispatch(
      setFilterDictionaries(
        filterDictionaries.map((dictionary) => {
          if (dictionary.dictionaryUri === dictionaryUri) {
            return { ...dictionary, parameterMapping: newParameterMapping };
          }
          return dictionary;
        }),
      ),
    );
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
