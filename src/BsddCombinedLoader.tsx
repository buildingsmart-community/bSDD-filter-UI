import { Container, Group, Modal, Paper, Space, Tabs } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { useAuthToken } from './auth/useAuthToken';
import { AuthButton } from './components/AuthButton';
import { setBsddAccessToken } from './lib/api/bsddApiInstance';
import BsddSearch from './lib/BsddSearch';
import BsddSelection from './lib/BsddSelection';
import Settings from './lib/BsddSettings/SettingsComponent';
import type { IfcEntity } from './lib/common/IfcData/ifc';
import useBrowserBridge from './lib/common/bsddBridge/useBrowserBridge';
import { BsddBridgeContext } from './lib/providers/BsddBridgeContext';
import { useIfcDataStore } from './lib/stores/ifcDataStore';
import { mockData } from './mocks/mockData';

const defaultTab = 'link';

function BsddCombinedLoader() {
  const { t } = useTranslation();
  const setSelectedIfcEntities = useIfcDataStore((s) => s.setSelectedIfcEntities);
  const setSavedPropertyIsInstanceMap = useIfcDataStore((s) => s.setSavedPropertyIsInstanceMap);

  const [opened, { open, close }] = useDisclosure(false);
  const { onSave, onCancel } = useBrowserBridge();
  const accessToken = useAuthToken();
  const [activeTab, setActiveTab] = useState(defaultTab);
  const [searchKey, setSearchKey] = useState<keyof IfcEntity | undefined>();

  useEffect(() => {
    setBsddAccessToken(accessToken);
  }, [accessToken]);

  useEffect(() => {
    if (mockData.propertyIsInstanceMap) {
      setSavedPropertyIsInstanceMap(mockData.propertyIsInstanceMap);
    }
  }, [setSavedPropertyIsInstanceMap]);

  const onSearch = (ifcEntities: IfcEntity[], sortKey?: keyof IfcEntity) => {
    setSearchKey(sortKey);
    if (ifcEntities?.length > 0) {
      setSelectedIfcEntities(ifcEntities);
    }
    open();
  };

  const onSelect = (ifcEntities: IfcEntity[]) => {
    console.log('onSelect called with:', JSON.stringify(ifcEntities));
  };

  const bridge = useMemo(
    () => ({ onSearch, onSelect, onSave, onCancel, accessToken }),
    [onSave, onCancel, accessToken],
  );

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
      <Modal opened={opened} onClose={close} title="Select bSDD class" centered size="100vw">
        <BsddSearch searchKey={searchKey} />
      </Modal>
    </BsddBridgeContext.Provider>
  );
}

export default BsddCombinedLoader;
