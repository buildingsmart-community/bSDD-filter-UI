import { Container, Modal, Tabs } from '@mantine/core';
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
import { BsddBridgeData } from './lib/common/IfcData/bsddBridgeData';

function BsddCombinedLoader() {
  const [opened, { open, close }] = useDisclosure(false);
  const [selectedIfcEntity, setSelectedIfcEntity] = useState<IfcEntity | undefined>(mockData.ifcData[0]);
  const { bsddSearchSave, bsddSearchCancel } = useCefSharpBridge();

  function bsddSearch(ifcEntities: IfcEntity[]) {
    console.log('Open bsddSearch called with:', ifcEntities);
    if (ifcEntities?.length > 0) {
      setSelectedIfcEntity(ifcEntities[0]);
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
      <Modal opened={opened} onClose={close} title="Select bSDD class" centered size="100vw">
        <BsddSearch selectedIfcEntity={selectedIfcEntity} />
      </Modal>
    </ApiFunctionsProvider>
  );
}

export default BsddCombinedLoader;
