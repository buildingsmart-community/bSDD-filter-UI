import '@mantine/core/styles.css';
import 'mantine-react-table/styles.css';

import { PublicClientApplication } from '@azure/msal-browser';
import { MsalProvider } from '@azure/msal-react';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

import BsddSearchLoader from './BsddSearchLoader';
import { isBsddAuthConfigured, msalConfig } from './auth/authConfig';
import { applyDisplayScale } from './lib/common/hooks/useDisplayScale';
import { BsddProvider } from './lib/providers/BsddProvider';

async function main() {
  const urlScale = Number.parseFloat(new URLSearchParams(window.location.search).get('scale') ?? '');
  applyDisplayScale(Number.isFinite(urlScale) ? urlScale : undefined);

  let msalInstance: PublicClientApplication | undefined;

  if (isBsddAuthConfigured()) {
    try {
      msalInstance = new PublicClientApplication(msalConfig);
      await msalInstance.initialize();
      await msalInstance.handleRedirectPromise().catch((err) => {
        console.error('[bSDD MSAL] redirect error:', err);
      });
    } catch (err) {
      console.error('[bSDD MSAL] initialization failed, continuing without auth:', err);
      msalInstance = undefined;
    }
  }

  const content = (
    <StrictMode>
      <BsddProvider>
        <BsddSearchLoader />
      </BsddProvider>
    </StrictMode>
  );

  ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    msalInstance ? <MsalProvider instance={msalInstance}>{content}</MsalProvider> : content,
  );
}

main();
