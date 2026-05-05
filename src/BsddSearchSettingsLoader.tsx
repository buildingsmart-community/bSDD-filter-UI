import { Container, Group, Tabs } from '@mantine/core';
import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { useAuthToken } from './auth/useAuthToken';
import { AuthButton } from './components/AuthButton';
import BsddSearch from './lib/BsddSearch';
import Settings from './lib/BsddSettings/SettingsComponent';
import useBrowserBridge from './lib/common/bsddBridge/useBrowserBridge';
import { BsddBridgeContext } from './lib/providers/BsddBridgeContext';

const defaultTab = 'search';

function BsddSearchSettingsLoader() {
  const { t } = useTranslation();
  const { onSave, onCancel } = useBrowserBridge();
  const accessToken = useAuthToken();
  const [activeTab, setActiveTab] = useState(defaultTab);

  const bridge = useMemo(() => ({ onSave, onCancel, accessToken }), [onSave, onCancel, accessToken]);

  return (
    <BsddBridgeContext.Provider value={bridge}>
      <Container>
        <Tabs defaultValue={defaultTab} onChange={(value) => setActiveTab(value ?? defaultTab)}>
          <Group gap="xs" wrap="nowrap" align="center">
            <Tabs.List grow style={{ flex: 1 }}>
              <Tabs.Tab value="search">{t('searchTabTitle')}</Tabs.Tab>
              <Tabs.Tab value="settings">{t('settingsTabTitle')}</Tabs.Tab>
            </Tabs.List>
            <AuthButton />
          </Group>
          <Tabs.Panel value="search">
            <BsddSearch />
          </Tabs.Panel>
          <Tabs.Panel value="settings">
            <Settings activeTab={activeTab == 'settings'} />
          </Tabs.Panel>
        </Tabs>
      </Container>
    </BsddBridgeContext.Provider>
  );
}

export default BsddSearchSettingsLoader;
