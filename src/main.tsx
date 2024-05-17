import { MantineProvider, Modal } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';

import BsddSearch from './lib/bsdd_search/main';
import BsddSelection from './lib/bsdd_selection/main';
import { mockData } from './mockData';

declare global {
  interface Window {
    bsddBridge: {
      bsddSearch?: (ifcEntityJson: any) => void;
      loadSettings?: () => string;
    };
  }
}

function Main() {
  const [opened, { open, close }] = useDisclosure(false);

  useEffect(() => {
    if (!window.bsddBridge) {
      window.bsddBridge = {};
    }

    window.bsddBridge.bsddSearch = (ifcEntityJson: any) => {
      // Implement your bsddSearch function here
      console.log('bsddSearch called with:', ifcEntityJson);
      open();
    };

    if (window.bsddBridge.loadSettings) {
      window.bsddBridge.loadSettings();
    }
  }, [open]);

  return (
    <MantineProvider>
      <React.StrictMode>
        <BsddSelection initialData={mockData} />
        <Modal opened={opened} onClose={close} title="Select bSDD class" centered size="100vw">
          <BsddSearch initialData={mockData} />
        </Modal>
      </React.StrictMode>
    </MantineProvider>
  );
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<Main />);
