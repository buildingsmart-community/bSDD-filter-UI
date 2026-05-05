// Purpose: bSDD API transport — FIFO queue, adaptive rate limiting, 429 gate
// Orchestration (pagination, caching) lives in BsddApiWrapper.ts.

interface BsddApiClientConfig {
  baseURL?: string;
  minDelay?: number;
  appName?: string;
  appVersion?: string;
}

/** Thrown when bSDD responds 429/503. TanStack Query retryDelay reads retryAfterMs. */
export class BsddRateLimitError extends Error {
  readonly retryAfterMs: number;
  constructor(retryAfterMs: number, status: number) {
    super(`bSDD rate limit (${status}): retry after ${retryAfterMs}ms`);
    this.name = 'BsddRateLimitError';
    this.retryAfterMs = retryAfterMs;
  }
}

const delay = (ms: number): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Pure transport layer for the bSDD API.
 * Provides a rate-limited, FIFO-serialised fetch with adaptive back-off.
 * Orchestration lives in BsddApiWrapper.
 */
export class BsddApiClient {
  private readonly _baseURL: string;
  private lastCallTime = 0;
  private readonly minDelay: number;
  private readonly appName: string;
  private readonly appVersion: string;

  // Strict FIFO queue — one request in flight at a time.
  private queue: Promise<unknown> = Promise.resolve();

  // Global cooldown: when 429 hits, all queued siblings wait here.
  private cooldownUntil = 0;

  // Adaptive min-delay: doubles on 429, decays 0.95x per success.
  private adaptiveMinDelay = 0;
  private readonly adaptiveMaxDelay = 5_000;

  // Observability.
  private stats = { totalRequests: 0, rateLimitHits: 0 };

  constructor(config: BsddApiClientConfig = {}) {
    this._baseURL = config.baseURL ?? 'https://api.bsdd.buildingsmart.org';
    this.minDelay = config.minDelay ?? 1_000;
    this.appName = config.appName ?? 'bsdd-filter-ui';
    this.appVersion = config.appVersion ?? '1.0.0';
    this.adaptiveMinDelay = this.minDelay;
  }

  get baseURL(): string {
    return this._baseURL;
  }

  getUserAgent(): string {
    return `${this.appName}/${this.appVersion}`;
  }

  submitRequest(buildRequest: () => { url: RequestInfo | URL; init?: RequestInit }): Promise<Response> {
    return this.scheduledFetch(buildRequest);
  }

  private enqueue<T>(task: () => Promise<T>): Promise<T> {
    const run = this.queue.then(task, task);
    this.queue = run.catch(() => undefined);
    return run;
  }

  private async waitMinDelay(): Promise<void> {
    const now = Date.now();
    if (now < this.cooldownUntil) {
      await delay(this.cooldownUntil - now);
    }
    const elapsed = Date.now() - this.lastCallTime;
    if (elapsed < this.adaptiveMinDelay) {
      await delay(this.adaptiveMinDelay - elapsed);
    }
    this.lastCallTime = Date.now();
  }

  fetch(input: RequestInfo | URL, init?: RequestInit): Promise<Response> {
    return this.scheduledFetch(() => ({ url: input, init }));
  }

  private scheduledFetch(
    buildRequest: () => { url: RequestInfo | URL; init?: RequestInit },
  ): Promise<Response> {
    return this.enqueue(async () => {
      this.stats.totalRequests++;
      await this.waitMinDelay();
      const { url, init } = buildRequest();
      const response = await fetch(url, init);

      if (response.status === 429 || response.status === 503) {
        this.stats.rateLimitHits++;
        const headerSecs = Number(response.headers.get('Retry-After') ?? 0);
        let retryAfterMs = headerSecs > 0 ? headerSecs * 1000 : 0;
        if (!retryAfterMs) {
          try {
            const body = await response.text();
            const m = /try again in\s+(\d+)\s*seconds?/i.exec(body);
            if (m) retryAfterMs = Number(m[1]) * 1000;
          } catch { /* ignore */ }
        } else {
          response.text().catch(() => undefined);
        }
        const waitMs = (retryAfterMs || 2_000) + 100;
        this.adaptiveMinDelay = Math.min(
          this.adaptiveMaxDelay,
          Math.max(this.adaptiveMinDelay * 2, this.minDelay * 2),
        );
        const until = Date.now() + waitMs;
        if (until > this.cooldownUntil) this.cooldownUntil = until;
        throw new BsddRateLimitError(waitMs, response.status);
      }

      if (response.ok) {
        this.adaptiveMinDelay = Math.max(this.minDelay, this.adaptiveMinDelay * 0.95);
      }
      return response;
    });
  }

  getRateLimitStats(): Readonly<typeof this.stats & { adaptiveMinDelayMs: number; cooldownRemainingMs: number }> {
    return {
      ...this.stats,
      adaptiveMinDelayMs: Math.round(this.adaptiveMinDelay),
      cooldownRemainingMs: Math.max(0, this.cooldownUntil - Date.now()),
    };
  }
}

// Singleton transport consumed by openapi-runtime.ts and BsddApiWrapper.ts.
export const bsddTransport = new BsddApiClient();
