import '@mantine/core/styles.css';

import ReactDOM from 'react-dom/client';

import AppProvider from './AppProvider';
import BsddSelectionLoader from './BsddSelectionSettingsLoader';

function Main() {
  return (
    <AppProvider>
      <BsddSelectionLoader />
    </AppProvider>
  );
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<Main />);
