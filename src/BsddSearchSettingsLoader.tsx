import { Container, Tabs } from '@mantine/core';
import { t } from 'i18next';

import BsddSearch from './lib/bsdd_search/main';
import Settings from './lib/bsdd_settings/SettingsComponent';
import { ApiFunctionsProvider } from './lib/common/apiFunctionsContext';
import useBrowserBridge from './lib/common/bsddBridge/useBrowserBridge';

function BsddSearchSettingsLoader() {
  const { bsddSearchSave, bsddSearchCancel } = useBrowserBridge();

  const apiFunctions = {
    bsddSearchSave,
    bsddSearchCancel,
  };

  return (
    <ApiFunctionsProvider value={apiFunctions}>
      <Container>
        <Tabs defaultValue="search">
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
