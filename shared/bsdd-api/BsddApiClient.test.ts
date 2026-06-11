import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { BsddApiClient, BsddRateLimitError } from './BsddApiClient';

const mockFetch = vi.fn<typeof fetch>();

beforeEach(() => {
  vi.stubGlobal('fetch', mockFetch);
});

afterEach(() => {
  vi.restoreAllMocks();
});

function makeOk(): Response {
  return new Response('{}', { status: 200, headers: { 'Content-Type': 'application/json' } });
}

function make429WithCors(): Response {
  return new Response('rate limited', {
    status: 429,
    headers: { 'Access-Control-Allow-Origin': '*', 'Retry-After': '2' },
  });
}

describe('BsddApiClient', () => {
  describe('default unauthenticated floor', () => {
    it('defaults to 400 ms to maintain headroom under the 10 calls/2s anonymous ceiling', () => {
      const client = new BsddApiClient();
      // Access via getRateLimitStats — adaptiveMinDelay starts at the floor.
      expect(client.getRateLimitStats().adaptiveMinDelayMs).toBe(400);
    });

    it('drops to 100 ms after setAuthenticated(true)', () => {
      const client = new BsddApiClient();
      client.setAuthenticated(true);
      expect(client.getRateLimitStats().adaptiveMinDelayMs).toBe(100);
    });

    it('returns to 400 ms after setAuthenticated(false)', () => {
      const client = new BsddApiClient();
      client.setAuthenticated(true);
      client.setAuthenticated(false);
      expect(client.getRateLimitStats().adaptiveMinDelayMs).toBe(400);
    });
  });

  describe('TypeError backoff (CORS-blocked 429)', () => {
    it('wraps the TypeError in a masked BsddRateLimitError and sets a 2s cooldown', async () => {
      mockFetch.mockRejectedValueOnce(new TypeError('Failed to fetch'));
      const client = new BsddApiClient({ minDelay: 0 });

      await expect(client.fetch('https://example.com')).rejects.toMatchObject({
        name: 'BsddRateLimitError',
        masked: true,
        retryAfterMs: 2_100,
      });

      const stats = client.getRateLimitStats();
      expect(stats.rateLimitHits).toBe(1);
      expect(stats.cooldownRemainingMs).toBeGreaterThan(1_500);
    });

    it('does not apply backoff for non-TypeError exceptions (e.g. AbortError)', async () => {
      const abortError = new DOMException('Aborted', 'AbortError');
      mockFetch.mockRejectedValueOnce(abortError);
      const client = new BsddApiClient({ minDelay: 0 });

      await expect(client.fetch('https://example.com')).rejects.toThrow('Aborted');

      const stats = client.getRateLimitStats();
      expect(stats.rateLimitHits).toBe(0);
      expect(stats.cooldownRemainingMs).toBe(0);
    });

    it('doubles adaptiveMinDelay from a non-zero floor on TypeError', async () => {
      mockFetch.mockRejectedValueOnce(new TypeError('Failed to fetch'));
      const client = new BsddApiClient({ minDelay: 100 });

      await expect(client.fetch('https://example.com')).rejects.toBeInstanceOf(BsddRateLimitError);

      const stats = client.getRateLimitStats();
      // adaptiveMinDelay starts at 100, doubles to 200 on TypeError.
      expect(stats.adaptiveMinDelayMs).toBe(200);
      expect(stats.rateLimitHits).toBe(1);
    });

    it('escalates the masked cooldown on consecutive CORS-blocked failures', async () => {
      vi.useFakeTimers();
      mockFetch.mockRejectedValue(new TypeError('Failed to fetch'));
      const client = new BsddApiClient({ minDelay: 0 });

      await expect(client.fetch('https://example.com')).rejects.toMatchObject({ retryAfterMs: 2_100 });

      const second = client.fetch('https://example.com');
      second.catch(() => undefined);
      await vi.advanceTimersByTimeAsync(2_100);
      await expect(second).rejects.toMatchObject({ retryAfterMs: 4_100 });

      const third = client.fetch('https://example.com');
      third.catch(() => undefined);
      await vi.advanceTimersByTimeAsync(4_100);
      await expect(third).rejects.toMatchObject({ retryAfterMs: 8_100 });
      vi.useRealTimers();
    });

    it('recovers after a TypeError: next response resets the masked cooldown', async () => {
      mockFetch
        .mockRejectedValueOnce(new TypeError('Failed to fetch'))
        .mockResolvedValueOnce(makeOk())
        .mockRejectedValueOnce(new TypeError('Failed to fetch'));

      const client = new BsddApiClient({ minDelay: 0 });
      await expect(client.fetch('https://example.com')).rejects.toBeInstanceOf(BsddRateLimitError);

      vi.useFakeTimers();

      const ok = client.fetch('https://example.com');
      await vi.advanceTimersByTimeAsync(2_100);
      expect((await ok).status).toBe(200);

      // The escalation restarts at 2s instead of continuing to 4s.
      await expect(client.fetch('https://example.com')).rejects.toMatchObject({ retryAfterMs: 2_100 });
      vi.useRealTimers();
    });
  });

  describe('429 with CORS headers (visible to browser)', () => {
    it('throws BsddRateLimitError and doubles adaptiveMinDelay', async () => {
      mockFetch.mockResolvedValueOnce(make429WithCors());
      const client = new BsddApiClient({ minDelay: 200 });

      await expect(client.fetch('https://example.com')).rejects.toBeInstanceOf(BsddRateLimitError);

      const stats = client.getRateLimitStats();
      expect(stats.rateLimitHits).toBe(1);
      expect(stats.adaptiveMinDelayMs).toBe(400);
    });
  });

  describe('setAuthenticated', () => {
    it('is a no-op when the tier does not change', () => {
      const client = new BsddApiClient({ minDelay: 400 });
      const before = client.getRateLimitStats().adaptiveMinDelayMs;
      client.setAuthenticated(false);
      expect(client.getRateLimitStats().adaptiveMinDelayMs).toBe(before);
    });
  });
});
