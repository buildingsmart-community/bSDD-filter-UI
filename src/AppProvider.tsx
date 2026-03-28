import '@mantine/core/styles.css';
import 'mantine-react-table/styles.css';

import { MantineProvider } from '@mantine/core';
import { StrictMode } from 'react';
import { Provider } from 'react-redux';

import { store } from './lib/common/app/store';
import { theme } from './lib/common/theme/theme';

interface AppLoaderProps {
  children: React.ReactNode;
}

function AppLoader({ children }: AppLoaderProps) {
  return (
    <Provider store={store}>
      <MantineProvider theme={theme}>
        <StrictMode>{children}</StrictMode>
      </MantineProvider>
    </Provider>
  );
}

export default AppLoader;
