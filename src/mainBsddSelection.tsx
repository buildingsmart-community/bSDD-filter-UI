import { MantineProvider } from '@mantine/core';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import BsddSelectionLoader from './BsddSelectionLoader';
import { store } from './lib/common/app/store';

function Main() {
  return (
    <Provider store={store}>
      <MantineProvider>
        <StrictMode>
          <BsddSelectionLoader />
        </StrictMode>
      </MantineProvider>
    </Provider>
  );
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<Main />);
