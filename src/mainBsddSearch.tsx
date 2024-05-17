import { MantineProvider } from '@mantine/core';
import React from 'react';
import ReactDOM from 'react-dom/client';

import BsddSearch from './lib/bsdd_search/main';
import { mockData } from './mockData';

function Main() {
  return (
    <MantineProvider>
      <React.StrictMode>
        <BsddSearch initialData={mockData} />
      </React.StrictMode>
    </MantineProvider>
  );
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<Main />);
