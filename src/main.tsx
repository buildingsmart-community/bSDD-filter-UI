// Purpose: Application entry point — async MSAL init (v5), display scale, and dev API proxy setup
import '@mantine/core/styles.css';

import ReactDOM from 'react-dom/client';
import { PublicClientApplication } from '@azure/msal-browser';

import AppProvider from './AppProvider';
import BsddCombinedLoader from './BsddCombinedLoader';
import { msalConfig, isBsddAuthConfigured } from './auth/authConfig';
import { applyDisplayScale } from './lib/common/hooks/useDisplayScale';

// Route bSDD API through Vite dev proxy to bypass localhost CORS restriction.
if (import.meta.env.DEV) {
  import('../shared/bsdd-api/generated/client.gen').then(({ client }) => {
    client.setConfig({ baseUrl: '/bsdd-api' });
  });
}

async function main() {
  // Apply display scale before React renders so all rem units are correct from the start.
  // The ?scale= URL param lets plugin hosts (Tekla, SketchUp) pass their DPI factor directly.
  const urlScale = parseFloat(new URLSearchParams(window.location.search).get('scale') ?? '');
  applyDisplayScale(Number.isFinite(urlScale) ? urlScale : undefined);

  let msalInstance: PublicClientApplication | undefined;

  if (isBsddAuthConfigured()) {
    // MSAL v5 requires initialize() before MsalProvider renders
    msalInstance = new PublicClientApplication(msalConfig);
    await msalInstance.initialize();
    // Consume any redirect response (required for redirect flow)
    await msalInstance.handleRedirectPromise().catch((err) => {
      console.error('[bSDD MSAL] redirect error:', err);
    });
  }

  ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <AppProvider msalInstance={msalInstance}>
      <BsddCombinedLoader />
    </AppProvider>,
  );
}

main();
