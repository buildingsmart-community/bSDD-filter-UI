import { MantineProvider } from '@mantine/core';
import React from 'react';

import BsddSearch from './lib/bsdd_search/main';
import { ApiFunctionsProvider } from './lib/common/apiFunctionsContext';

function BsddSelectionLoader() {
  const save = window.bsddBridge?.save;
  const cancel = window.bsddBridge?.cancel;
  const loadSettings = window.bsddBridge?.loadSettings;

  if (!save || !cancel || !loadSettings) {
    return <div>Loading...</div>;
  }

  const apiFunctions = {
    bsddSearchSave: save,
    bsddSearchCancel: cancel,
    loadSettings,
  };

  return (
    <ApiFunctionsProvider value={apiFunctions}>
      <BsddSearch />
    </ApiFunctionsProvider>
  );
}

export default BsddSelectionLoader;
