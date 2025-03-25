import { Container, Modal, Paper, Space, Tabs } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { t } from 'i18next';
import { useEffect, useState } from 'react';

import BsddSearch from './lib/BsddSearch';
import BsddSelection from './lib/BsddSelection';
import IdsImporter from './lib/IdsImporter';
import Settings from './lib/BsddSettings/SettingsComponent';
import { ApiFunctionsProvider } from './lib/common/apiFunctionsContext';
import { useAppDispatch } from './lib/common/app/hooks';
import useBrowserBridge from './lib/common/bsddBridge/useBrowserBridge';
import { IfcEntity } from './lib/common/IfcData/ifc';
import { setSavedPropertyIsInstanceMap, setSelectedIfcEntities } from './lib/common/slices/ifcDataSlice';
import { mockData } from './mocks/mockData';

const defaultTab = 'link';

function BsddCombinedLoader() {
  const dispatch = useAppDispatch();

  const [opened, { open, close }] = useDisclosure(false);
  const { bsddSearchSave, bsddSearchCancel } = useBrowserBridge();
  const [activeTab, setActiveTab] = useState(defaultTab);
  const [searchKey, setSearchKey] = useState<keyof IfcEntity | undefined>();

  useEffect(() => {
    if (mockData.propertyIsInstanceMap) {
      console.log('Setting savedPropertyIsInstanceMap:', mockData.propertyIsInstanceMap);
      setSavedPropertyIsInstanceMap(mockData.propertyIsInstanceMap);
    }
  }, [mockData.propertyIsInstanceMap]);

  function bsddSearch(ifcEntities: IfcEntity[], sortKey: keyof IfcEntity | undefined) {
    setSearchKey(sortKey);
    console.log('Open bsddSearch called with:', ifcEntities);

    if (ifcEntities?.length > 0) {
      dispatch(setSelectedIfcEntities(ifcEntities));
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
      <Modal opened={opened} onClose={close} title="Select bSDD class" centered size="100vw">
        <BsddSearch searchKey={searchKey} />
      </Modal>
    </ApiFunctionsProvider>
  );
}

export default BsddCombinedLoader;
