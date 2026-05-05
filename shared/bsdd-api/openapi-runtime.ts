// Purpose: Wire bsddTransport rate-limiter as the fetch transport for the generated hey-api client
import type { Config } from './generated/client';
import { bsddTransport } from './BsddApiClient';

/**
 * Resolve the base URL for the bSDD API.
 * - Dev: use the Vite dev-server proxy path `/bsdd-api` to avoid CORS.
 *   The proxy rewrites `/bsdd-api/*` → `https://api.bsdd.buildingsmart.org/*`.
 * - Prod: call the production API directly (origin is whitelisted by bSDD).
 */
const bsddBaseUrl: string =
  typeof import.meta !== 'undefined' && import.meta.env?.DEV
    ? '/bsdd-api'
    : 'https://api.bsdd.buildingsmart.org';

/**
 * Called by the generated client.gen.ts to obtain its initial configuration.
 * Setting `fetch` here routes every generated SDK call through the bSDD rate
 * limiter (FIFO queue, adaptive delay, 429 → BsddRateLimitError).
 */
export const createClientConfig = (override?: Config): Config => ({
  ...override,
  baseUrl: bsddBaseUrl,
  fetch: bsddTransport.fetch.bind(bsddTransport),
});
