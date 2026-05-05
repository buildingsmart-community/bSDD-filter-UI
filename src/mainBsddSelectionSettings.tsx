// Purpose: Entry point for bSDD selection+settings panel
import '@mantine/core/styles.css';

import ReactDOM from 'react-dom/client';

import AppProvider from './AppProvider';
import BsddSelectionLoader from './BsddSelectionSettingsLoader';
import { applyDisplayScale } from './lib/common/hooks/useDisplayScale';

const urlScale = parseFloat(new URLSearchParams(window.location.search).get('scale') ?? '');
applyDisplayScale(Number.isFinite(urlScale) ? urlScale : undefined);

function Main() {
  return (
    <AppProvider>
      <BsddSelectionLoader />
    </AppProvider>
  );
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<Main />);
