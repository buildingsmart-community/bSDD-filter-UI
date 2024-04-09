import { Accordion, Checkbox, Space, Text, Title } from '@mantine/core';
import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

import { BsddSettings } from '../../../../common/src/IfcData/bsddBridgeData';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { fetchDictionaries, FetchDictionaryParameters, updateBsddApi } from '../bsdd/bsddSlice';
import LanguageSelect from './LanguageSelect';
import { selectBsddApiEnvironmentUri, selectIncludeTestDictionaries } from './settingsSlice';

interface GeneralSettingsProps {
  id: number;
  localSettings: BsddSettings;
  setLocalSettings: (settings: BsddSettings) => void;
  setUnsavedChanges: (unsavedChanges: boolean) => void;
}

function GeneralSettings({ id, localSettings, setLocalSettings, setUnsavedChanges }: GeneralSettingsProps) {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const bsddApiEnvironmentUri = useAppSelector(selectBsddApiEnvironmentUri);
  const includeTestDictionaries = useAppSelector(selectIncludeTestDictionaries);

  const prevFetchDictionariesParamsRef = useRef<FetchDictionaryParameters>();

  useEffect(() => {
    if (!bsddApiEnvironmentUri) {
      return;
    }
    dispatch(updateBsddApi(bsddApiEnvironmentUri));
  }, [dispatch, bsddApiEnvironmentUri]);

  // Update dictionary selection list when parameters change
  useEffect(() => {
    if (!bsddApiEnvironmentUri) return;

    const params = {
      bsddApiEnvironment: bsddApiEnvironmentUri,
      includeTestDictionaries,
    };

    if (
      prevFetchDictionariesParamsRef.current &&
      prevFetchDictionariesParamsRef.current.bsddApiEnvironment === params.bsddApiEnvironment &&
      prevFetchDictionariesParamsRef.current.includeTestDictionaries === params.includeTestDictionaries
    ) {
      return;
    }

    dispatch(fetchDictionaries(params));

    prevFetchDictionariesParamsRef.current = params;
  }, [dispatch, bsddApiEnvironmentUri, includeTestDictionaries]);

  return (
    <Accordion.Item key={id} value={id.toString()}>
      <Accordion.Control>
        <Title order={5}>{t('General settings')}</Title>
        <Text size="xs" c="dimmed">
          {t('General settings help text')}
        </Text>
      </Accordion.Control>
      <Accordion.Panel>
        <LanguageSelect settings={localSettings} setSettings={setLocalSettings} setUnsavedChanges={setUnsavedChanges} />{' '}
        <Space h="xs" />
        <Checkbox
          label={t('ShowPreview')}
          checked={localSettings ? localSettings.includeTestDictionaries : false}
          type="checkbox"
          onChange={(e) => {
            if (!localSettings) return;
            setLocalSettings({ ...localSettings, includeTestDictionaries: e.currentTarget.checked });
            setUnsavedChanges(true);
          }}
        />
      </Accordion.Panel>
    </Accordion.Item>
  );
}

export default GeneralSettings;
