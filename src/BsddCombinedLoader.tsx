import { MantineProvider, Modal } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import React, { useEffect, useState } from 'react';

import BsddSearch from './lib/bsdd_search/main';
import BsddSelection from './lib/bsdd_selection/main';
import { ApiFunctionsProvider } from './lib/common/apiFunctionsContext';
import { useAppDispatch } from './lib/common/app/hooks';
import { isProduction } from './lib/common/env';
import { IfcEntity } from './lib/common/IfcData/ifc';
import { setSettings } from './lib/common/slices/settingsSlice';
import { mockData } from './mockData';

declare global {
  interface Window {
    bsddBridge: {
      bsddSearch?: (ifcEntityJson: string) => void;
      save?: (ifcEntityJson: string) => Promise<string>;
      cancel?: () => void;
      loadSettings?: () => Promise<string>;
      saveSettings?: (settings: string) => void;
    };
    updateSelection?: (ifcData: any) => void;
  }
}

function BsddCombinedLoader() {
  const dispatch = useAppDispatch();
  const [opened, { open, close }] = useDisclosure(false);
  const [selectedIfcEntity, setSelectedIfcEntity] = useState<IfcEntity | undefined>(mockData.ifcData[0]);

  useEffect(() => {
    const loadSettings = async () => {
      console.log('loadSettings called');
      let settings;

      if (isProduction) {
        // @ts-ignore
        if (window?.bsddBridge) {
          // @ts-ignore
          const loadedSettings = await window.bsddBridge.loadSettings();
          settings = JSON.parse(loadedSettings);
        }
      } else {
        settings = mockData.settings;
      }

      if (settings) {
        dispatch(setSettings(settings));
      }
    };

    loadSettings();
  }, [dispatch]);

  const save = (ifcEntityJson: string): Promise<string> => {
    console.log('save called with:', ifcEntityJson);
    return new Promise((resolve: (value: string) => void, reject) => {
      close();
      resolve('success');
    });
  };

  const cancel = () => {
    console.log('cancel called');
    close();
  };

  function bsddSearchClick(ifcProduct: IfcEntity) {
    console.log('Open bsddSearch', ifcProduct);

    setSelectedIfcEntity(ifcProduct);

    open();
  }

  function bsddSelect(ifcProduct: IfcEntity) {
    const ifcEntityJson = JSON.stringify(ifcProduct);

    console.log('bsddSelect called with:', ifcEntityJson);
  }

  const apiFunctions = {
    bsddSearchClick,
    bsddSelect,
    bsddSearchSave: save,
    bsddSearchCancel: cancel,
  };

  return (
    <ApiFunctionsProvider value={apiFunctions}>
      <BsddSelection initialData={mockData} />
      <Modal opened={opened} onClose={close} title="Select bSDD class" centered size="100vw">
        <BsddSearch selectedIfcEntity={selectedIfcEntity} />
      </Modal>
    </ApiFunctionsProvider>
  );
}

export default BsddCombinedLoader;
