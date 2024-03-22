import { Accordion, Checkbox, Space, Text, Title } from '@mantine/core';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { BsddSettings } from '../../../../common/src/IfcData/bsddBridgeData';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { fetchDictionaries, updateBsddApi } from '../bsdd/bsddSlice';
import LanguageSelect from './LanguageSelect';
import { selectBsddApiEnvironmentUri } from './settingsSlice';

interface GeneralSettingsProps {
  id: number;
  settings: BsddSettings | undefined;
  setSettings: (settings: BsddSettings) => void;
  setUnsavedChanges: (unsavedChanges: boolean) => void;
}

function GeneralSettings({ id, settings, setSettings, setUnsavedChanges }: GeneralSettingsProps) {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const bsddApiEnvironmentUri = useAppSelector(selectBsddApiEnvironmentUri);

  // Update the cached dictionary data when the dictionary list parameters change
  useEffect(() => {
    if (!bsddApiEnvironmentUri) {
      return;
    }
    dispatch(updateBsddApi(bsddApiEnvironmentUri));
    dispatch(
      fetchDictionaries({
        bsddApiEnvironment: bsddApiEnvironmentUri,
        includeTestDictionaries: settings?.includeTestDictionaries || false,
      }),
    );
  }, [dispatch, bsddApiEnvironmentUri, settings?.includeTestDictionaries]);

  return (
    <Accordion.Item key={id} value={id.toString()}>
      <Accordion.Control>
        <Title order={5}>{t('General settings')}</Title>
        <Text size="xs" c="dimmed">
          {t('General settings help text')}
        </Text>
      </Accordion.Control>
      <Accordion.Panel>
        <LanguageSelect settings={settings} setSettings={setSettings} setUnsavedChanges={setUnsavedChanges} />{' '}
        <Space h="xs" />
        <Checkbox
          label={t('ShowPreview')}
          checked={settings?.includeTestDictionaries || false}
          type="checkbox"
          onChange={(e) => {
            const includeTestDictionaries = e.currentTarget.checked;
            if (bsddApiEnvironmentUri) {
              dispatch(fetchDictionaries({ bsddApiEnvironment: bsddApiEnvironmentUri, includeTestDictionaries }));
            }
            setSettings({ ...settings, includeTestDictionaries } as BsddSettings);
            setUnsavedChanges(true);
          }}
        />
      </Accordion.Panel>
    </Accordion.Item>
  );
}

export default GeneralSettings;
