// Purpose: Apply display scale from plugin host (Revit/Tekla/SketchUp) or URL param.
//
// Design principle: explicit configuration over environment detection.
// The host application is responsible for communicating its scale — the web app
// should not guess based on browser globals or DOM inspection.
//
// Scale is applied as CSS `zoom` on <html>, which proportionally scales ALL visual
// elements (text, icons, padding, borders — rem, em, and px alike).
// This is superior to manipulating font-size, which only affects rem units.
//
// Scale sources (first non-null wins):
//   1. explicit `scale` argument (from bridge data or URL param)
//   2. 1 (no scaling — Mantine defaults, correct for standalone webapp)
//
// Plugin hosts integrate by either:
//   a) Including `"displayScale": 0.8` in the BsddBridgeData JSON
//   b) Appending `?scale=0.8` to the webview URL

/**
 * Apply a zoom factor to `document.documentElement`.
 * `scale = 1` is a no-op (removes any previously set zoom).
 * Returns a cleanup function that restores the original zoom.
 */
export function applyDisplayScale(scale?: number): () => void {
  const zoom = scale != null && Number.isFinite(scale) && scale > 0 ? scale : 1;
  const original = document.documentElement.style.zoom;
  document.documentElement.style.zoom = zoom === 1 ? '' : String(zoom);
  return () => {
    document.documentElement.style.zoom = original;
  };
}

