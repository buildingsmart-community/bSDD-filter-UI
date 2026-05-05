/**
 * Apply a zoom factor to `document.documentElement`.
 * `scale = 1` is a no-op (removes any previously set zoom).
 * Returns a cleanup function that restores the original zoom.
 */
export declare function applyDisplayScale(scale?: number): () => void;
