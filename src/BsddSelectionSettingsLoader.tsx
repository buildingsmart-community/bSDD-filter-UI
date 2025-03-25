import { Container, Paper, Space, Tabs } from '@mantine/core';
import { t } from 'i18next';

import BsddSelection from './lib/BsddSelection';
import IdsImporter from './lib/IdsImporter';
import Settings from './lib/BsddSettings/SettingsComponent';
import { ApiFunctionsProvider } from './lib/common/apiFunctionsContext';
import useCefSharpBridge from './lib/common/bsddBridge/useCefSharpBridge';
import { useState } from 'react';

const defaultTab = 'link';

function BsddSelectionLoader() {
  const apiFunctions = useCefSharpBridge();
  const [activeTab, setActiveTab] = useState(defaultTab);

  return (
    <ApiFunctionsProvider value={apiFunctions}>
      <Container>
        <Tabs defaultValue={defaultTab} onChange={(value) => setActiveTab(value ?? defaultTab)}>
          <Tabs.List grow>
            <Tabs.Tab value="link">{t('linkTabTitle')}</Tabs.Tab>
            <Tabs.Tab value="ids">.ids</Tabs.Tab>
            <Tabs.Tab value="settings">{t('settingsTabTitle')}</Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel value="link">
            <Space h="sm" />
            <BsddSelection />
          </Tabs.Panel>
          <Tabs.Panel value="ids">
            <Space h="sm" />
            <IdsImporter />
          </Tabs.Panel>
          <Tabs.Panel value="settings">
            <Space h="sm" />
            <Paper shadow="xs" withBorder>
              <Settings activeTab={activeTab == 'settings'} />
            </Paper>
          </Tabs.Panel>
        </Tabs>
      </Container>
    </ApiFunctionsProvider>
  );
}

export default BsddSelectionLoader;
