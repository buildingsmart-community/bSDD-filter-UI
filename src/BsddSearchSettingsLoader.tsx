import { Container, Tabs } from '@mantine/core';
import { t } from 'i18next';
import { useState } from 'react';

import BsddSearch from './lib/BsddSearch';
import Settings from './lib/BsddSettings/SettingsComponent';
import { ApiFunctionsProvider } from './lib/common/apiFunctionsContext';
import useBrowserBridge from './lib/common/bsddBridge/useBrowserBridge';

const defaultTab = 'search';

function BsddSearchSettingsLoader() {
  const { bsddSearchSave, bsddSearchCancel } = useBrowserBridge();
  const [activeTab, setActiveTab] = useState(defaultTab);

  const apiFunctions = {
    bsddSearchSave,
    bsddSearchCancel,
  };

  return (
    <ApiFunctionsProvider value={apiFunctions}>
      <Container>
        <Tabs defaultValue={defaultTab} onChange={(value) => setActiveTab(value ?? defaultTab)}>
          <Tabs.List grow>
            <Tabs.Tab value="search">{t('searchTabTitle')}</Tabs.Tab>
            <Tabs.Tab value="settings">{t('settingsTabTitle')}</Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel value="search">
            <BsddSearch />
          </Tabs.Panel>
          <Tabs.Panel value="settings">
            <Settings activeTab={activeTab == 'settings'} />
          </Tabs.Panel>
        </Tabs>
      </Container>
    </ApiFunctionsProvider>
  );
}

export default BsddSearchSettingsLoader;
