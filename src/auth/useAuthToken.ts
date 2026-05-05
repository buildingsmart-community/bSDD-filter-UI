// Purpose: Centralized hook for bSDD access token with TanStack Query caching
import { useQuery } from '@tanstack/react-query';
import { useAuth } from './useAuth';

/**
 * Returns the current bSDD access token when authenticated.
 * Uses TanStack Query for caching and automatic refresh.
 * Token is cached for 50 minutes (MSAL tokens last 60 minutes).
 *
 * @example
 * const token = useAuthToken();
 * // Pass to API calls: { headers: { Authorization: `Bearer ${token}` } }
 */
export function useAuthToken(): string | undefined {
  const { isAuthenticated, isConfigured, getAccessToken, user } = useAuth();

  const { data: token } = useQuery({
    queryKey: ['bsdd', 'auth', 'accessToken', user?.homeAccountId ?? null],
    queryFn: async () => {
      const t = await getAccessToken();
      return t ?? undefined;
    },
    enabled: isConfigured && isAuthenticated,
    staleTime: 1000 * 60 * 50, // 50 minutes (MSAL tokens last 60)
    gcTime: 1000 * 60 * 55,
    refetchOnWindowFocus: false,
    retry: 1,
  });

  return isConfigured && isAuthenticated ? token : undefined;
}
