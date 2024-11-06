import '@mantine/core/styles.css';

import ReactDOM from 'react-dom/client';

import AppProvider from './AppProvider';
import BsddCombinedLoader from './BsddCombinedLoader';

function Main() {
  return (
    <AppProvider>
      <BsddCombinedLoader />
    </AppProvider>
  );
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<Main />);
