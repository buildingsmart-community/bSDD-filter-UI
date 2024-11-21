import { Container, Tabs } from '@mantine/core';
import { t } from 'i18next';

import BsddSelection from './lib/BsddSelection';
import Settings from './lib/BsddSettings/SettingsComponent';
import { ApiFunctionsProvider } from './lib/common/apiFunctionsContext';
import useCefSharpBridge from './lib/common/bsddBridge/useCefSharpBridge';

function BsddSelectionLoader() {
  const apiFunctions = useCefSharpBridge();

  return (
    <ApiFunctionsProvider value={apiFunctions}>
      <Container>
        <Tabs defaultValue="link">
          <Tabs.List grow>
            <Tabs.Tab value="link">{t('linkTabTitle')}</Tabs.Tab>
            <Tabs.Tab value="settings">{t('settingsTabTitle')}</Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel value="link">
            <BsddSelection />
          </Tabs.Panel>
          <Tabs.Panel value="settings">
            <Settings />
          </Tabs.Panel>
        </Tabs>
      </Container>
    </ApiFunctionsProvider>
  );
}

export default BsddSelectionLoader;
