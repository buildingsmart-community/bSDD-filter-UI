import '@mantine/core/styles.css';
import 'mantine-react-table/styles.css';

// import { PublicClientApplication } from '@azure/msal-browser';
import { MantineProvider } from '@mantine/core';
import { StrictMode } from 'react';
import { Provider } from 'react-redux';

import { store } from './lib/common/app/store';
// import { msalConfig } from './lib/common/BsddApi/authConfig';
import { theme } from './lib/common/theme/theme';

interface AppLoaderProps {
  children: React.ReactNode;
}

function AppLoader({ children }: AppLoaderProps) {
  // const [msalInstance, setMsalInstance] = useState<PublicClientApplication | null>(null);

  // useEffect(() => {
  //   const instance = new PublicClientApplication(msalConfig);
  //   setMsalInstance(instance);
  // }, []);

  // if (!msalInstance) {
  //   return <div>Loading...</div>;
  // }

  return (
    <Provider store={store}>
      <MantineProvider theme={theme}>
        <StrictMode>{children}</StrictMode>
      </MantineProvider>
    </Provider>
  );
}

export default AppLoader;
