import { MantineProvider } from '@mantine/core';
import React from 'react';
import ReactDOM from 'react-dom/client';

import BsddSelection from './lib/bsdd_selection/main';
import { mockData } from './mockData';

function Main() {
  return (
    <MantineProvider>
      <React.StrictMode>
        <BsddSelection initialData={mockData} />
      </React.StrictMode>
    </MantineProvider>
  );
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<Main />);
