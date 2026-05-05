// Purpose: Application providers — QueryClient, Mantine, and optional MSAL for bSDD auth
import '@mantine/core/styles.css';
import 'mantine-react-table/styles.css';

import { MantineProvider } from '@mantine/core';
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client';
import { MsalProvider } from '@azure/msal-react';
import type { IPublicClientApplication } from '@azure/msal-browser';
import { StrictMode, Suspense, useMemo } from 'react';

import { createBsddQueryClient } from './lib/api/queryClient';
import { bsddPersister } from './lib/api/persister';
import { theme } from './lib/common/theme/theme';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

// Side-effect: initializes i18next before any component renders.
import './lib/common/i18n';

interface AppLoaderProps {
  children: React.ReactNode;
  msalInstance?: IPublicClientApplication;
}

function AppLoader({ children, msalInstance }: AppLoaderProps) {
  const queryClient = useMemo(() => createBsddQueryClient(), []);
  const persistOptions = useMemo(() => ({ persister: bsddPersister, maxAge: 1000 * 60 * 60 * 24 }), []);

  const tree = (
    <StrictMode>
      <PersistQueryClientProvider client={queryClient} persistOptions={persistOptions}>
        <MantineProvider theme={theme}>
          <Suspense fallback={null}>{children}</Suspense>
          <ReactQueryDevtools initialIsOpen={false} />
        </MantineProvider>
      </PersistQueryClientProvider>
    </StrictMode>
  );

  if (!msalInstance) return tree;

  return <MsalProvider instance={msalInstance}>{tree}</MsalProvider>;
}

export default AppLoader;
