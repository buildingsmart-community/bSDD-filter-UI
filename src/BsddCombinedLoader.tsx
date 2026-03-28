import { Container, Modal, Paper, Space, Tabs } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { t } from 'i18next';
import { useEffect, useState } from 'react';

import BsddSearch from './lib/BsddSearch';
import BsddSelection from './lib/BsddSelection';
import Settings from './lib/BsddSettings/SettingsComponent';
import { ApiFunctionsProvider } from './lib/common/apiFunctionsContext';
import useBrowserBridge from './lib/common/bsddBridge/useBrowserBridge';
import { IfcEntity } from './lib/common/IfcData/ifc';
import { useIfcDataStore } from './lib/stores/ifcDataStore';
import { mockData } from './mocks/mockData';

const defaultTab = 'link';

function BsddCombinedLoader() {
  const setSelectedIfcEntities = useIfcDataStore((s) => s.setSelectedIfcEntities);
  const setSavedPropertyIsInstanceMap = useIfcDataStore((s) => s.setSavedPropertyIsInstanceMap);

  const [opened, { open, close }] = useDisclosure(false);
  const { bsddSearchSave, bsddSearchCancel } = useBrowserBridge();
  const [activeTab, setActiveTab] = useState(defaultTab);
  const [searchKey, setSearchKey] = useState<keyof IfcEntity | undefined>();

  useEffect(() => {
    if (mockData.propertyIsInstanceMap) {
      setSavedPropertyIsInstanceMap(mockData.propertyIsInstanceMap);
    }
  }, [setSavedPropertyIsInstanceMap]);

  function bsddSearch(ifcEntities: IfcEntity[], sortKey: keyof IfcEntity | undefined) {
    setSearchKey(sortKey);
    if (ifcEntities?.length > 0) {
      setSelectedIfcEntities(ifcEntities);
    }
    open();
  }

  function bsddSelect(ifcEntities: IfcEntity[]) {
    console.log('bsddSelect called with:', JSON.stringify(ifcEntities));
  }

  const apiFunctions = {
    bsddSearch,
    bsddSelect,
    bsddSearchSave,
    bsddSearchCancel,
  };

  return (
    <ApiFunctionsProvider value={apiFunctions}>
      <Container>
        <Tabs defaultValue={defaultTab} onChange={(value) => setActiveTab(value ?? defaultTab)}>
          <Tabs.List grow>
            <Tabs.Tab value="link">{t('linkTabTitle')}</Tabs.Tab>
            <Tabs.Tab value="settings">{t('settingsTabTitle')}</Tabs.Tab>
          </Tabs.List>
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
      <Modal opened={opened} onClose={close} title="Select bSDD class" centered size="100vw">
        <BsddSearch searchKey={searchKey} />
      </Modal>
    </ApiFunctionsProvider>
  );
}

export default BsddCombinedLoader;
