// Purpose: TanStack QueryClient factory with bSDD rate-limit-aware retry logic
import { QueryClient } from '@tanstack/react-query';
import { BsddRateLimitError } from '../../../shared/bsdd-api/BsddApiClient';

function isClientError(error: unknown): boolean {
  if (error instanceof Response) return error.status >= 400 && error.status < 500;
  if (error instanceof Error && 'status' in error) {
    const status = (error as { status: number }).status;
    return status >= 400 && status < 500;
  }
  return false;
}

export function createBsddQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1000 * 60 * 60, // 1 hour — bSDD data rarely changes
        gcTime: 1000 * 60 * 60 * 24, // 24 hours — must be ≥ persister maxAge
        refetchOnWindowFocus: false,
        // 4xx errors are permanent — never retry. Respect Retry-After for 429/503.
        // TypeErrors (including CORS-blocked 429s — bSDD omits CORS headers on rate-limit
        // responses) get a longer initial delay so the transport cooldown has time to take
        // effect before the retry lands in the queue.
        retry: (failureCount: number, error: unknown) => {
          if (isClientError(error)) return false;
          return error instanceof BsddRateLimitError ? failureCount < 6 : failureCount < 2;
        },
        retryDelay: (_: number, error: unknown) => {
          if (error instanceof BsddRateLimitError) return error.retryAfterMs;
          if (error instanceof TypeError) return 3_000;
          return 1_000;
        },
      },
    },
  });
}
