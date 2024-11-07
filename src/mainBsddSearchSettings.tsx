import '@mantine/core/styles.css';

import ReactDOM from 'react-dom/client';

import AppProvider from './AppProvider';
import BsddSearchSettingsLoader from './BsddSearchSettingsLoader';
import { BrowserRouter } from 'react-router-dom';
import { QueryParamProvider } from 'use-query-params';
import { ReactRouter6Adapter } from 'use-query-params/adapters/react-router-6';

function Main() {
  return (
    <AppProvider>
      <BrowserRouter>
        <QueryParamProvider adapter={ReactRouter6Adapter}>
          <BsddSearchSettingsLoader />
        </QueryParamProvider>
      </BrowserRouter>
    </AppProvider>
  );
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<Main />);
