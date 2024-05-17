import '@mantine/core/styles.css';
import '../common/i18n';

import { PublicClientApplication } from '@azure/msal-browser';
import { MantineProvider } from '@mantine/core';
import { useEffect, useState } from 'react';

import { BsddBridgeData } from '../common/IfcData/bsddBridgeData';
import { theme } from '../common/theme/theme';
import { msalConfig } from './authConfig';
import BsddSearch from './BsddSearch';

interface BsddSearchProps {
  initialData: BsddBridgeData | undefined;
}

function App({ initialData }: BsddSearchProps) {
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
      <BsddSearch initialData={initialData} />
    </MantineProvider>
  );
}

export default App;
