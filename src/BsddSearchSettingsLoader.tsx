import { Container, Tabs } from '@mantine/core';
import { t } from 'i18next';

import BsddSearch from './lib/bsdd_search/main';
import Settings from './lib/bsdd_settings/SettingsComponent';
import { ApiFunctionsProvider } from './lib/common/apiFunctionsContext';
import useCefSharpBridge from './lib/common/bsddBridge/useCefSharpBridge';

function BsddSearchSettingsLoader() {
  const { bsddSearchSave, bsddSearchCancel } = useCefSharpBridge();

  const apiFunctions = {
    bsddSearchSave,
    bsddSearchCancel,
  };

  return (
    <ApiFunctionsProvider value={apiFunctions}>
      <Container>
        <Tabs defaultValue="link">
          <Tabs.List grow>
            <Tabs.Tab value="search">{t('searchTabTitle')}</Tabs.Tab>
            <Tabs.Tab value="settings">{t('settingsTabTitle')}</Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel value="search">
            <BsddSearch />
          </Tabs.Panel>
          <Tabs.Panel value="settings">
            <Settings />
          </Tabs.Panel>
        </Tabs>
      </Container>
    </ApiFunctionsProvider>
  );
}

export default BsddSearchSettingsLoader;
