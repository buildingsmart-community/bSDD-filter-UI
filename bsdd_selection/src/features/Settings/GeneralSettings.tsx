import { Text, Select, Space, Title, Accordion } from '@mantine/core';
import { useTranslation } from 'react-i18next';

import LanguageSelect from './LanguageSelect';
import { BsddSettings } from '../../../../common/src/IfcData/bsddBridgeData';

interface GeneralSettingsProps {
  id: number;
  settings: BsddSettings | undefined;
  setSettings: (settings: BsddSettings) => void;
  setUnsavedChanges: (unsavedChanges: boolean) => void;
}

function GeneralSettings({ id, settings, setSettings, setUnsavedChanges }: GeneralSettingsProps) {
  const { t } = useTranslation();

  const changeBsddApiEnvironment = (environmentName: string | null) => {
    if (!environmentName || !settings) return;
    setSettings({ ...settings, bsddApiEnvironment: environmentName });
    setUnsavedChanges(true);
  };

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
        <Select
          label={t('bSDD environment')}
          data={['production', 'test']}
          value={settings?.bsddApiEnvironment}
          placeholder="Select an option"
          onChange={changeBsddApiEnvironment}
        />
      </Accordion.Panel>
    </Accordion.Item>
  );
}

export default GeneralSettings;
