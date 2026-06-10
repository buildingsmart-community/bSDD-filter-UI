import { InteractionStatus } from '@azure/msal-browser';
import type { AccountInfo } from '@azure/msal-browser';
import { useMsal } from '@azure/msal-react';
// Purpose: Hook for bSDD / buildingSMART authentication via MSAL
import { useCallback, useState } from 'react';
import { isBsddAuthConfigured, loginRequest } from './authConfig';

interface UseAuthResult {
  isAuthenticated: boolean;
  user: AccountInfo | null;
  login: () => Promise<void>;
  logout: () => Promise<void>;
  getAccessToken: () => Promise<string | null>;
  isLoading: boolean;
  isConfigured: boolean;
  error: string | null;
  inProgress: boolean;
}

export const useAuth = (): UseAuthResult => {
  const { instance, accounts, inProgress } = useMsal();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const isAuthenticated = accounts.length > 0;
  const user = accounts[0] || null;
  const isConfigured = isBsddAuthConfigured();

  const login = useCallback(async () => {
    if (!isConfigured) return;
    if (inProgress !== InteractionStatus.None) return;

    setIsLoading(true);
    setError(null);

    try {
      await instance.loginRedirect(loginRequest);
    } catch (err) {
      if (err instanceof Error) {
        if (err.message.includes('user_cancelled')) {
          setError(null);
        } else {
          setError(err.message);
          console.error('bSDD login error:', err);
        }
      }
    } finally {
      setIsLoading(false);
    }
  }, [instance, inProgress, isConfigured]);

  const logout = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    // Store path-only (pathname+search+hash) so the redirect handler can return
    // here. Isolated try/catch: storage failures (quota, private mode) must not
    // block the logout — the app will just fall back to the default redirect URI.
    try {
      sessionStorage.setItem(
        'bsdd.postLogoutReturnTo',
        window.location.pathname + window.location.search + window.location.hash,
      );
    } catch {
      // Storage unavailable — logout proceeds, return-URL restore is skipped.
    }

    try {
      await instance.logoutRedirect();
    } catch (err) {
      console.error('bSDD logout error:', err);
    } finally {
      setIsLoading(false);
    }
  }, [instance]);

  const getAccessToken = useCallback(async (): Promise<string | null> => {
    if (!user || !isConfigured) return null;
    if (inProgress !== InteractionStatus.None) return null;

    try {
      const response = await instance.acquireTokenSilent({
        ...loginRequest,
        account: user,
      });
      return response.accessToken;
    } catch {
      if (inProgress === InteractionStatus.None) {
        try {
          const isLocalhost = window.location.hostname === 'localhost';
          if (isLocalhost) {
            const response = await instance.acquireTokenPopup(loginRequest);
            return response.accessToken;
          } else {
            await instance.acquireTokenRedirect(loginRequest);
            return null;
          }
        } catch (interactiveErr) {
          console.error('bSDD interactive token error:', interactiveErr);
        }
      }
      return null;
    }
  }, [instance, user, inProgress, isConfigured]);

  return {
    isAuthenticated,
    user,
    login,
    logout,
    getAccessToken,
    isLoading,
    isConfigured,
    error,
    inProgress: inProgress !== InteractionStatus.None,
  };
};
