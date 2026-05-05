// Purpose: Entry point for bSDD search+settings panel
import '@mantine/core/styles.css';

import ReactDOM from 'react-dom/client';

import AppProvider from './AppProvider';
import BsddSearchSettingsLoader from './BsddSearchSettingsLoader';
import { applyDisplayScale } from './lib/common/hooks/useDisplayScale';

const urlScale = parseFloat(new URLSearchParams(window.location.search).get('scale') ?? '');
applyDisplayScale(Number.isFinite(urlScale) ? urlScale : undefined);

function Main() {
  return (
    <AppProvider>
      <BsddSearchSettingsLoader />
    </AppProvider>
  );
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<Main />);
