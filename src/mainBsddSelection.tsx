import '@mantine/core/styles.css';

// import { PublicClientApplication } from '@azure/msal-browser';
import { MantineProvider } from '@mantine/core';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import BsddSelectionLoader from './BsddSelectionLoader';
import { store } from './lib/common/app/store';
// import { msalConfig } from './lib/common/BsddApi/authConfig';
import { theme } from './lib/common/theme/theme';

function Main() {
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
        <StrictMode>
          <BsddSelectionLoader />
        </StrictMode>
      </MantineProvider>
    </Provider>
  );
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<Main />);
