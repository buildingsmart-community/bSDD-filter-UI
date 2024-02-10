import { Text, Select, Space, Title, Accordion } from '@mantine/core';
import { useTranslation } from 'react-i18next';

import LanguageSelect from './LanguageSelect';
import { setBsddApiEnvironment } from '../../../../common/src/settings/settingsSlice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { RootState } from '../../app/store';

interface GeneralSettingsProps {
  id: number;
}

function GeneralSettings({ id }: GeneralSettingsProps) {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const bsddApiEnvironment = useAppSelector((state: RootState) => state.settings.bddApiEnvironment);

  // Change bsdd environment
  const changeBsddApiEnvironment = (environmentName: string | null) => {
    if (!environmentName) return;
    dispatch(setBsddApiEnvironment(environmentName));
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
        <LanguageSelect /> <Space h="xs" />
        <Select
          label={t('bSDD environment')}
          data={['production', 'test']}
          value={bsddApiEnvironment}
          placeholder="Select an option"
          onChange={changeBsddApiEnvironment}
        />
      </Accordion.Panel>
    </Accordion.Item>
  );
}

export default GeneralSettings;
