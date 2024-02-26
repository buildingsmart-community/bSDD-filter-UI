import { useState, useEffect } from 'react';
import BsddSearch from './lib';
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { theme } from '../../common/src/theme/theme';

// MSAL imports
import { PublicClientApplication } from '@azure/msal-browser';
import { msalConfig } from './authConfig';
import { IfcEntity } from '../../common/src/IfcData/ifc';
import { mockData } from '../../common/src/IfcData/mockData';
import { BsddConfig, Option } from './lib/BsddSearch';
import '../../common/src/i18n';

function callback(data: IfcEntity) {
  console.log(data);
}

const config: BsddConfig = {
  baseUrl: mockData.settings.bsddApiEnvironment || 'test',
  defaultDomains: [
    (mockData.settings.mainDictionary
      ? {
          value: mockData.settings.mainDictionary.ifcClassification.location,
          label: mockData.settings.mainDictionary.ifcClassification.name || '',
        }
      : {}) as Option,
  ],
  defaultSearch: {
    value: 'https://identifier.buildingsmart.org/uri/digibase/basisbouwproducten/0.8.0/class/breedplaatvloer',
    label: 'breedplaatvloer',
  },
};

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
      <BsddSearch callback={callback} config={config} msalInstance={msalInstance} />
    </MantineProvider>
  );
}

export default App;
