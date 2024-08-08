import { MantineProvider, Modal } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';

import BsddSearch from './lib/bsdd_search/main';
import BsddSelection from './lib/bsdd_selection/main';

function Main() {
  const [opened, { open, close }] = useDisclosure(false);

  useEffect(() => {
    if (!window.bsddBridge) {
      window.bsddBridge = {};
    }

    window.bsddBridge.bsddSearch = (ifcEntityJson) => {
      console.log('bsddSearch called with:', ifcEntityJson);
      open();
    };
    
    window.bsddBridge.save = (ifcEntityJson) => {
      console.log('save called with:', ifcEntityJson);
      close();
    };

    if (window.bsddBridge.loadSettings) {
      window.bsddBridge.loadSettings();
    }
  }, [open]);

  return (
    <MantineProvider>
      <React.StrictMode>
        <BsddSelection />
        <Modal opened={opened} onClose={close} title="Select bSDD class" centered size="100vw">
          <BsddSearch />
        </Modal>
      </React.StrictMode>
    </MantineProvider>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<Main />);
