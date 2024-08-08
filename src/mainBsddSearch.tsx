import { MantineProvider } from '@mantine/core';
import React from 'react';
import ReactDOM from 'react-dom/client';

import BsddSearch from './lib/bsdd_search/main';

function Main() {
  const save = window.bsddBridge?.save;
  const cancel = window.bsddBridge?.cancel;
  const loadSettings = window.bsddBridge?.loadSettings;

  if (!save || !cancel || !loadSettings) {
    return <div>Loading...</div>;
  }

  return (
    <MantineProvider>
      <React.StrictMode>
        <BsddSearch />
      </React.StrictMode>
    </MantineProvider>
  );
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<Main />);
