import '@mantine/core/styles.css';
import '../common/i18n';

import { PublicClientApplication } from '@azure/msal-browser';
import { MantineProvider } from '@mantine/core';
import { useEffect, useState } from 'react';

import { theme } from '../common/theme/theme';
import { msalConfig } from './authConfig';
import BsddSearch from './BsddSearch';
import { BsddSearchProps } from './BsddSearchProps';

function App(bsddSearchProps: BsddSearchProps) {
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
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <BsddSearch {...bsddSearchProps} />
    </MantineProvider>
  );
}

export default App;
