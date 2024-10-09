import { MantineProvider } from '@mantine/core';
import { StrictMode } from 'react';

import BsddSelection from './lib/bsdd_selection/main';
import { ApiFunctionsProvider } from './lib/common/apiFunctionsContext';
import useCefSharpBridge from './lib/common/bsddBridge/useCefSharpBridge';

function BsddSelectionLoader() {
  const apiFunctions = useCefSharpBridge();

  return (
    <ApiFunctionsProvider value={apiFunctions}>
      <MantineProvider>
        <StrictMode>
          <BsddSelection />
        </StrictMode>
      </MantineProvider>
    </ApiFunctionsProvider>
  );
}

export default BsddSelectionLoader;
