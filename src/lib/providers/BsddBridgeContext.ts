import { createContext, useContext } from 'react';

import { BsddBridgeData } from '../common/IfcData/bsddBridgeData';
import { IfcEntity } from '../common/IfcData/ifc';

/**
 * Single bridge between the host application and the bSDD library.
 *
 * Mirrors the IFC.On-Track.nl host-app pattern: the host owns auth, persistence
 * and host-IPC; the library calls back into the host through this context.
 *
 * `accessToken` is supplied by the host (e.g. via `useAuthToken()`); library-
 * internal hooks read it from here so consumers don't have to thread it through
 * every component.
 */
export interface BsddBridgeCallbacks {
  onSave?: (data: BsddBridgeData) => Promise<string>;
  onCancel?: () => void;
  onSearch?: (entities: IfcEntity[], key?: keyof IfcEntity) => void;
  onSelect?: (entities: IfcEntity[]) => void;
  loadSettings?: () => Promise<string>;
  loadBridgeData?: () => Promise<string>;
  /** bSDD bearer token; read by internal hooks via `useBsddBridge()`. */
  accessToken?: string;
}

export const BsddBridgeContext = createContext<BsddBridgeCallbacks>({});

const notImplemented = (name: string) => () => {
  throw new Error(`${name} is not implemented`);
};

/**
 * Read the bridge as `Required<BsddBridgeCallbacks>` for callsites that always
 * want a callable. Callbacks default to throwing stubs to surface missing
 * wiring early; `accessToken` defaults to `undefined`.
 */
export function useBsddBridge(): Required<Omit<BsddBridgeCallbacks, 'accessToken'>> & {
  accessToken: string | undefined;
} {
  const context = useContext(BsddBridgeContext);
  return {
    onSave: context.onSave ?? notImplemented('onSave'),
    onCancel: context.onCancel ?? notImplemented('onCancel'),
    onSearch: context.onSearch ?? notImplemented('onSearch'),
    onSelect: context.onSelect ?? notImplemented('onSelect'),
    loadSettings: context.loadSettings ?? notImplemented('loadSettings'),
    loadBridgeData: context.loadBridgeData ?? notImplemented('loadBridgeData'),
    accessToken: context.accessToken,
  };
}

/** Optional-callback variant for callsites that only need read-or-noop access. */
export function useBsddBridgeOptional(): BsddBridgeCallbacks {
  return useContext(BsddBridgeContext);
}
