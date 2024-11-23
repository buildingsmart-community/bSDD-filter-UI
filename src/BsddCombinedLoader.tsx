import { Container, Modal, Paper, Space, Tabs } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { t } from 'i18next';
import { useState } from 'react';

import BsddSearch from './lib/BsddSearch';
import BsddSelection from './lib/BsddSelection';
import Settings from './lib/BsddSettings/SettingsComponent';
import { ApiFunctionsProvider } from './lib/common/apiFunctionsContext';
import useCefSharpBridge from './lib/common/bsddBridge/useCefSharpBridge';
import { IfcEntity } from './lib/common/IfcData/ifc';
import { mockData } from './mocks/mockData';

const defaultTab = 'link';

function BsddCombinedLoader() {
  const [opened, { open, close }] = useDisclosure(false);
  const [selectedIfcEntities, setSelectedIfcEntities] = useState<IfcEntity[] | undefined>(mockData.ifcData);
  const { bsddSearchSave, bsddSearchCancel } = useCefSharpBridge();
  const [activeTab, setActiveTab] = useState(defaultTab);

  function bsddSearch(ifcEntities: IfcEntity[]) {
    console.log('Open bsddSearch called with:', ifcEntities);
    
    if (ifcEntities?.length > 0) {
      setSelectedIfcEntities(ifcEntities);
    }

    open();
  }

  function bsddSelect(ifcEntities: IfcEntity[]) {
    const ifcEntitiesJson = JSON.stringify(ifcEntities);

    console.log('bsddSelect called with:', ifcEntitiesJson);
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
        <BsddSearch selectedIfcEntities={selectedIfcEntities} />
      </Modal>
    </ApiFunctionsProvider>
  );
}

export default BsddCombinedLoader;
