import { MantineProvider, Modal } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';

import BsddSearch from './lib/bsdd_search/main';
import BsddSelection from './lib/bsdd_selection/main';
import { ApiFunctionsProvider } from './lib/common/apiFunctionsContext';
import { IfcEntity } from './lib/common/IfcData/ifc';
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

function Main() {
  const [opened, { open, close }] = useDisclosure(false);
  const [selectedIfcEntity, setSelectedIfcEntity] = useState<IfcEntity | undefined>(mockData.ifcData[0]);

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

  const bsddSearchLoadSettings = (): Promise<string> => {
    console.log('loadSettings called');
    return Promise.resolve(JSON.stringify(mockData));
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
    // bsddSearchLoadSettings,
    bsddSearchClick,
    bsddSelect,
    bsddSearchSave: save,
    bsddSearchCancel: cancel,
  };

  return (
    <MantineProvider>
      <ApiFunctionsProvider value={apiFunctions}>
        <React.StrictMode>
          <BsddSelection initialData={mockData} />
          <Modal opened={opened} onClose={close} title="Select bSDD class" centered size="100vw">
            <BsddSearch selectedIfcEntity={selectedIfcEntity} />
          </Modal>
        </React.StrictMode>
      </ApiFunctionsProvider>
    </MantineProvider>
  );
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<Main />);
