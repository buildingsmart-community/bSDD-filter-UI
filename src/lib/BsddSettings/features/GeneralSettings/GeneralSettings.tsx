import { Accordion, Checkbox, Space, Text, Title } from '@mantine/core';
import { useTranslation } from 'react-i18next';

import { BsddSettings } from '../../../common/IfcData/bsddBridgeData';
import LanguageSelect from './LanguageSelect';

interface GeneralSettingsProps {
  id: number;
  localSettings: BsddSettings;
  setLocalSettings: (settings: BsddSettings) => void;
  setUnsavedChanges: (unsavedChanges: boolean) => void;
  activeTab: boolean;
}

function GeneralSettings({ id, localSettings, setLocalSettings, setUnsavedChanges }: GeneralSettingsProps) {
  const { t } = useTranslation();

  return (
    <Accordion.Item key={id} value={id.toString()}>
      <Accordion.Control>
        <Title order={5}>{t('generalSettingsLabel')}</Title>
        <Text size="xs" c="dimmed">
          {t('generalSettingsInstruction')}
        </Text>
      </Accordion.Control>
      <Accordion.Panel>
        <LanguageSelect
          localSettings={localSettings}
          setLocalSettings={setLocalSettings}
          setUnsavedChanges={setUnsavedChanges}
        />{' '}
        <Space h="xs" />
        <Checkbox
          label={t('ShowPreview')}
          checked={
            localSettings && localSettings.includeTestDictionaries ? localSettings.includeTestDictionaries : false
          }
          indeterminate={!localSettings || localSettings.includeTestDictionaries === null}
          type="checkbox"
          onChange={(e: any) => {
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
