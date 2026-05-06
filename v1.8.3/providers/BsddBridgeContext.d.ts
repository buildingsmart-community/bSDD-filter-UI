import { BsddBridgeData } from '../common/IfcData/bsddBridgeData';
import { IfcEntity } from '../common/IfcData/ifc';
/**
 * Single bridge between the host application and the bSDD library.
 *
 * The host (C# Revit/Tekla plugin) only handles IFC-JSON and settings; it has
 * no concept of bSDD authentication. Auth runs inside the browser page via MSAL
 * (`src/auth/`), and the token is stored in the browser cache (IndexedDB/cookies).
 * Demo loaders read it via `useAuthToken()` and pass it in as `accessToken`.
 *
 * `accessToken` is optional — library consumers that bring their own auth system
 * can also supply it here directly.
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
