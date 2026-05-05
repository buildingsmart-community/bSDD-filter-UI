import '@mantine/core/styles.css';

import ReactDOM from 'react-dom/client';

import AppProvider from './AppProvider';
import BsddSearchLoader from './BsddSearchLoader';
import { applyDisplayScale } from './lib/common/hooks/useDisplayScale';

const urlScale = parseFloat(new URLSearchParams(window.location.search).get('scale') ?? '');
applyDisplayScale(Number.isFinite(urlScale) ? urlScale : undefined);

function Main() {
  return (
    <AppProvider>
      <BsddSearchLoader />
    </AppProvider>
  );
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<Main />);
