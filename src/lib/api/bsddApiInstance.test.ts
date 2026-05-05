// Purpose: Verify that the hey-api request interceptor injects Authorization when a token is set
import { afterEach, describe, expect, it } from 'vitest';

import { _authInterceptor, setBsddAccessToken } from './bsddApiInstance';

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
