import '@mantine/core/styles.css';
import '../../common/src/i18n';

import { PublicClientApplication } from '@azure/msal-browser';
import { MantineProvider } from '@mantine/core';
import { useEffect, useState } from 'react';

import { theme } from '../../common/src/theme/theme';
import { msalConfig } from './authConfig';
import BsddSearch from './BsddSearch';

function App() {
  const [msalInstance, setMsalInstance] = useState<PublicClientApplication | null>(null);

  useEffect(() => {
    const instance = new PublicClientApplication(msalConfig);
    setMsalInstance(instance);
  }, []);

  if (!msalInstance) {
    return <div>Loading...</div>;
  }

  return (
    <MantineProvider theme={theme}>
      <BsddSearch />
    </MantineProvider>
  );
}

export default App;
