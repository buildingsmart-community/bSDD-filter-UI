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
export declare const BsddBridgeContext: import('react').Context<BsddBridgeCallbacks>;
/**
 * Read the bridge as `Required<BsddBridgeCallbacks>` for callsites that always
 * want a callable. Callbacks default to throwing stubs to surface missing
 * wiring early; `accessToken` defaults to `undefined`.
 */
export declare function useBsddBridge(): Required<Omit<BsddBridgeCallbacks, 'accessToken'>> & {
    accessToken: string | undefined;
};
/** Optional-callback variant for callsites that only need read-or-noop access. */
export declare function useBsddBridgeOptional(): BsddBridgeCallbacks;
