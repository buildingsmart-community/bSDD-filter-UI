import { Container, Group, Paper, Space, Tabs } from '@mantine/core';
import { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { useAuthToken } from './auth/useAuthToken';
import { setBsddAccessToken } from './lib/api/bsddApiInstance';
import { AuthButton } from './components/AuthButton';
import BsddSelection from './lib/BsddSelection';
import Settings from './lib/BsddSettings/SettingsComponent';
import useCefSharpBridge from './lib/common/bsddBridge/useCefSharpBridge';
import { BsddBridgeContext } from './lib/providers/BsddBridgeContext';

const defaultTab = 'link';

function BsddSelectionLoader() {
  const { t } = useTranslation();
  const callbacks = useCefSharpBridge();
  const accessToken = useAuthToken();
  const [activeTab, setActiveTab] = useState(defaultTab);

  useEffect(() => {
    setBsddAccessToken(accessToken);
  }, [accessToken]);

  const bridge = useMemo(() => ({ ...callbacks, accessToken }), [callbacks, accessToken]);

  return (
    <BsddBridgeContext.Provider value={bridge}>
      <Container>
        <Tabs defaultValue={defaultTab} onChange={(value) => setActiveTab(value ?? defaultTab)}>
          <Group gap="xs" wrap="nowrap" align="center">
            <Tabs.List grow style={{ flex: 1 }}>
              <Tabs.Tab value="link">{t('linkTabTitle')}</Tabs.Tab>
              <Tabs.Tab value="settings">{t('settingsTabTitle')}</Tabs.Tab>
            </Tabs.List>
            <AuthButton />
          </Group>
          <Tabs.Panel value="link">
            <Space h="sm" />
            <BsddSelection />
          </Tabs.Panel>
          <Tabs.Panel value="settings">
            <Space h="sm" />
            <Paper shadow="xs" withBorder>
              <Settings activeTab={activeTab == 'settings'} />
            </Paper>
          </Tabs.Panel>
        </Tabs>
      </Container>
    </BsddBridgeContext.Provider>
  );
}

export default BsddSelectionLoader;
