// Purpose: bSDD / buildingSMART authentication configuration (Azure AD B2C)
import type { Configuration, PopupRequest } from '@azure/msal-browser';

// buildingSMART Azure AD B2C configuration.
// Client ID is a public SPA client (no secret) — safe to embed in source.
// Override via .env for local development with a different registration.
const BSDD_CLIENT_ID =
  import.meta.env.VITE_BSDD_CLIENT_ID || '0fcd615b-f2b7-4514-9046-7b3e545ba341';
const BSDD_AUTHORITY =
  import.meta.env.VITE_BSDD_AUTHORITY ||
  'https://buildingsmartservices.b2clogin.com/buildingsmartservices.onmicrosoft.com/B2C_1_SignUpSignIn';
const BSDD_KNOWN_AUTHORITY =
  import.meta.env.VITE_BSDD_KNOWN_AUTHORITY || 'buildingsmartservices.b2clogin.com';

// Production scope differs from test scope — set VITE_BSDD_SCOPE to override.
// Production: 'https://buildingSMARTservices.onmicrosoft.com/bsddapi/read'
// Test:       'https://buildingSMARTservices.onmicrosoft.com/api/read'
const BSDD_SCOPE =
  import.meta.env.VITE_BSDD_SCOPE ||
  'https://buildingSMARTservices.onmicrosoft.com/bsddapi/read';

// Check if bSDD auth is configured (client ID must be set)
export const isBsddAuthConfigured = (): boolean => Boolean(BSDD_CLIENT_ID);

export const msalConfig: Configuration = {
  auth: {
    clientId: BSDD_CLIENT_ID || 'not-configured',
    authority: BSDD_AUTHORITY,
    knownAuthorities: [BSDD_KNOWN_AUTHORITY],
    redirectUri: window.location.origin,
    postLogoutRedirectUri: window.location.origin,
  },
  cache: {
    cacheLocation: 'localStorage',
  },
  system: {
    loggerOptions: {
      loggerCallback: (level, message, containsPii) => {
        if (containsPii) return;
        if (level === 3) {
          console.error('[bSDD MSAL]', message);
        }
      },
    },
  },
};

// Scopes for bSDD API access
export const loginRequest: PopupRequest = {
  scopes: ['openid', 'profile', BSDD_SCOPE],
};
