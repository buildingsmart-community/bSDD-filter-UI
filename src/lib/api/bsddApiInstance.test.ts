// Purpose: Verify that the hey-api request interceptor injects Authorization when a token is set
import { afterEach, describe, expect, it } from 'vitest';

import { _authInterceptor, _errorInterceptor, setBsddAccessToken } from './bsddApiInstance';

afterEach(() => {
  setBsddAccessToken(undefined);
});

describe('bSDD auth interceptor', () => {
  it('does not add Authorization header when no token is set', () => {
    const req = _authInterceptor(new Request('https://api.bsdd.buildingsmart.org/api/Dictionary/v1'));
    expect(req.headers.get('Authorization')).toBeNull();
  });

  it('adds Bearer Authorization header when token is set', () => {
    setBsddAccessToken('test-token-abc');
    const req = _authInterceptor(new Request('https://api.bsdd.buildingsmart.org/api/Dictionary/v1'));
    expect(req.headers.get('Authorization')).toBe('Bearer test-token-abc');
  });

  it('removes Authorization header after token is cleared', () => {
    setBsddAccessToken('test-token-abc');
    const reqWith = _authInterceptor(new Request('https://api.bsdd.buildingsmart.org/api/Dictionary/v1'));
    expect(reqWith.headers.get('Authorization')).toBe('Bearer test-token-abc');

    setBsddAccessToken(undefined);
    const reqWithout = _authInterceptor(new Request('https://api.bsdd.buildingsmart.org/api/Dictionary/v1'));
    expect(reqWithout.headers.get('Authorization')).toBeNull();
  });
});

describe('bSDD error interceptor', () => {
  it('wraps 4xx bodies in Error with .status so isClientError can identify them as non-retryable', () => {
    const body = { message: 'Not Found' };
    const response = new Response(null, { status: 404 });
    const result = _errorInterceptor(body, response);
    expect(result).toBeInstanceOf(Error);
    expect((result as { status: number }).status).toBe(404);
  });

  it('wraps 400 bad request the same way', () => {
    const response = new Response(null, { status: 400 });
    const result = _errorInterceptor('Bad Request', response);
    expect(result).toBeInstanceOf(Error);
    expect((result as { status: number }).status).toBe(400);
  });

  it('passes 5xx bodies through unchanged — server errors are retriable', () => {
    const body = 'Internal Server Error';
    const response = new Response(null, { status: 500 });
    expect(_errorInterceptor(body, response)).toBe(body);
  });

  it('passes body through unchanged when response is undefined (fetch exception path)', () => {
    const body = new TypeError('Failed to fetch');
    expect(_errorInterceptor(body, undefined)).toBe(body);
  });

  it('passes 429 body through unchanged — 429 is handled by the transport, not this interceptor', () => {
    // Defensive: if a 429 somehow reaches this interceptor it must NOT be converted to a
    // permanent client error, or TanStack Query would skip the rate-limit retry logic.
    const body = 'Too Many Requests';
    const response429 = new Response(null, { status: 429 });
    expect(_errorInterceptor(body, response429)).toBe(body);
  });
});
