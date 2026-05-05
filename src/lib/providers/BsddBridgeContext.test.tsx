import { renderHook } from '@testing-library/react';
import { ReactNode } from 'react';
import { describe, expect, it, vi } from 'vitest';

import { BsddBridgeContext, useBsddBridge } from './BsddBridgeContext';

function wrap(value: any) {
  return ({ children }: { children: ReactNode }) => (
    <BsddBridgeContext.Provider value={value}>{children}</BsddBridgeContext.Provider>
  );
}

describe('useBsddBridge', () => {
  it('returns provided callbacks', () => {
    const onSave = vi.fn().mockResolvedValue('ok');
    const onCancel = vi.fn();
    const { result } = renderHook(() => useBsddBridge(), { wrapper: wrap({ onSave, onCancel }) });
    expect(result.current.onSave).toBe(onSave);
    expect(result.current.onCancel).toBe(onCancel);
  });

  it('throws helpful errors when an unimplemented callback is invoked', () => {
    const { result } = renderHook(() => useBsddBridge(), { wrapper: wrap({}) });
    expect(() => result.current.onSave({} as any)).toThrowError(/onSave is not implemented/);
    expect(() => result.current.onCancel()).toThrowError(/onCancel is not implemented/);
  });
});
