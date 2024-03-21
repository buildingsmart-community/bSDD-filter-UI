import { Accordion, Checkbox, Space, Text, Title } from '@mantine/core';
import { useTranslation } from 'react-i18next';

import { BsddSettings } from '../../../../common/src/IfcData/bsddBridgeData';
import LanguageSelect from './LanguageSelect';

interface GeneralSettingsProps {
  id: number;
  settings: BsddSettings | undefined;
  setSettings: (settings: BsddSettings) => void;
  setUnsavedChanges: (unsavedChanges: boolean) => void;
  showPreview: boolean;
  setShowPreview: (unsavedChanges: boolean) => void;
}

function GeneralSettings({
  id,
  settings,
  setSettings,
  setUnsavedChanges,
  showPreview,
  setShowPreview,
}: GeneralSettingsProps) {
  const { t } = useTranslation();

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
          checked={showPreview}
          type="checkbox"
          onChange={(e) => {
            setShowPreview(e.currentTarget.checked);
            setUnsavedChanges(true);
          }}
        />
      </Accordion.Panel>
    </Accordion.Item>
  );
}

export default GeneralSettings;
