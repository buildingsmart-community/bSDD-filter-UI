import { useEffect, useRef } from 'react';

import { useSettingsStore } from '../stores/settingsStore';

/**
 * Opt-in URL sync component. Renders nothing but syncs settings <-> URL params.
 */
function UrlSyncManager() {
  const initialized = useRef(false);
  const { mainDictionary, ifcDictionary, filterDictionaries, language, includeTestDictionaries, setSettings } =
    useSettingsStore();

  // On mount: read URL params and update store
  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    const params = new URLSearchParams(window.location.search);

    const mainDictionaryParam = params.get('mainDictionary');
    const ifcDictionaryParam = params.get('ifcDictionary');
    const filterDictionariesParam = params.get('filterDictionaries');
    const languageParam = params.get('language');
    const includeTestParam = params.get('includeTestDictionaries');

    const safeJsonParse = <T,>(value: string | null, fallback: T): T => {
      if (!value) return fallback;
      try {
        return JSON.parse(value) as T;
      } catch {
        console.warn('UrlSyncManager: failed to parse URL param:', value);
        return fallback;
      }
    };

    // Only apply if URL has any supported param (otherwise keep persisted settings)
    if (mainDictionaryParam || ifcDictionaryParam || filterDictionariesParam || languageParam || includeTestParam) {
      setSettings({
        mainDictionary: safeJsonParse(mainDictionaryParam, null),
        ifcDictionary: safeJsonParse(ifcDictionaryParam, null),
        filterDictionaries: safeJsonParse(filterDictionariesParam, []),
        language: languageParam || 'en-GB',
        includeTestDictionaries: includeTestParam === 'true' ? true : includeTestParam === 'false' ? false : undefined,
      });
    }
  }, [setSettings]);

  // Sync store -> URL on change
  useEffect(() => {
    const params = new URLSearchParams();

    if (mainDictionary) {
      params.set('mainDictionary', JSON.stringify(mainDictionary));
    }
    if (ifcDictionary) {
      params.set('ifcDictionary', JSON.stringify(ifcDictionary));
    }
    if (filterDictionaries.length > 0) {
      params.set('filterDictionaries', JSON.stringify(filterDictionaries));
    }
    if (language) {
      params.set('language', language);
    }
    if (includeTestDictionaries !== undefined) {
      params.set('includeTestDictionaries', String(includeTestDictionaries));
    }

    const search = params.toString();
    const newUrl = search ? `${window.location.pathname}?${search}` : window.location.pathname;
    window.history.replaceState({}, '', newUrl);
  }, [mainDictionary, ifcDictionary, filterDictionaries, language, includeTestDictionaries]);

  return null;
}

export default UrlSyncManager;
