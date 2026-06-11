import { describe, expect, it } from 'vitest';

import { BsddRateLimitError } from '../../../shared/bsdd-api/BsddApiClient';
import { createBsddQueryClient } from './queryClient';

describe('createBsddQueryClient', () => {
  it('produces a fresh QueryClient with sensible defaults for an API client', () => {
    const a = createBsddQueryClient();
    const b = createBsddQueryClient();
    expect(a).not.toBe(b);

    const opts = a.getDefaultOptions().queries!;
    expect(opts.staleTime).toBe(1000 * 60 * 60);
    expect(opts.gcTime).toBe(1000 * 60 * 60 * 24);
    expect(opts.refetchOnWindowFocus).toBe(false);
    expect(typeof opts.retry).toBe('function');
    expect(typeof opts.retryDelay).toBe('function');
  });

  it('retries up to 6 times on bSDD rate-limit errors and at most 2 times on other errors', () => {
    const opts = createBsddQueryClient().getDefaultOptions().queries!;
    const retry = opts.retry as (failureCount: number, error: unknown) => boolean;
    const rateLimit = new BsddRateLimitError(500, 429);

    expect(retry(0, rateLimit)).toBe(true);
    expect(retry(5, rateLimit)).toBe(true);
    expect(retry(6, rateLimit)).toBe(false);

    // CORS-masked 429s from the transport get the same full retry budget.
    const masked = new BsddRateLimitError(2_100, 429, true);
    expect(retry(5, masked)).toBe(true);
    expect(retry(6, masked)).toBe(false);

    const generic = new Error('boom');
    expect(retry(0, generic)).toBe(true);
    expect(retry(1, generic)).toBe(true);
    expect(retry(2, generic)).toBe(false);
  });

  it('retryDelay honours BsddRateLimitError.retryAfterMs, uses 3s for TypeError, falls back to 1s', () => {
    const opts = createBsddQueryClient().getDefaultOptions().queries!;
    const retryDelay = opts.retryDelay as (n: number, e: unknown) => number;
    expect(retryDelay(0, new BsddRateLimitError(2500, 429))).toBe(2500);
    // Masked (CORS-blocked) 429s carry a synthetic escalating retryAfterMs from the transport.
    expect(retryDelay(0, new BsddRateLimitError(2100, 429, true))).toBe(2100);
    // The TypeError branch only covers fetches that bypass the transport.
    expect(retryDelay(0, new TypeError('Failed to fetch'))).toBe(3000);
    expect(retryDelay(0, new Error('other'))).toBe(1000);
  });
});
