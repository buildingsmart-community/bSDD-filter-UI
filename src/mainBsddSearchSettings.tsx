import '@mantine/core/styles.css';

import ReactDOM from 'react-dom/client';

import AppProvider from './AppProvider';
import BsddSearchSettingsLoader from './BsddSearchSettingsLoader';

function Main() {
  return (
    <AppProvider>
      <BsddSearchSettingsLoader />
    </AppProvider>
  );
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<Main />);
