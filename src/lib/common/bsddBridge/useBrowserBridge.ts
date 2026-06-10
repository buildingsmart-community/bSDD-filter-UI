import { useQueryClient } from '@tanstack/react-query';
import { useEffect, useRef } from 'react';

import { mockData } from '../../../mocks/mockData';
import { validateIfcData, validateSettings } from '../../api/validation/validateIfcData';
import { useIfcDataStore } from '../../stores/ifcDataStore';
import { useSettingsStore } from '../../stores/settingsStore';
import type { BsddBridgeData, BsddDictionary, BsddSettings } from '../IfcData/bsddBridgeData';
import type { IfcEntity } from '../IfcData/ifc';
import defaultSettings from '../settings/defaultSettings';

const SETTINGS_PARAM_KEYS = [
  'mainDictionary',
  'ifcDictionary',
  'filterDictionaries',
  'language',
  'includeTestDictionaries',
] as const;

const toDictionary = (location: string): BsddDictionary => ({
  ifcClassification: { type: 'IfcClassification', location },
  parameterMapping: '',
});

function readSettingsFromUrl(): BsddSettings | null {
  const params = new URLSearchParams(window.location.search);
  if (!SETTINGS_PARAM_KEYS.some((key) => params.has(key))) return null;

  const mainDictionary = params.get('mainDictionary');
  const ifcDictionary = params.get('ifcDictionary');
  // Accept both repeated keys (?filterDictionaries=a&filterDictionaries=b) and
  // comma-separated values (?filterDictionaries=a,b) for back-compat with old URLs.
  const filterDictionaries = params
    .getAll('filterDictionaries')
    .flatMap((v) => v.split(','))
    .filter(Boolean);
  const includeTestDictionaries = params.get('includeTestDictionaries');

  return {
    mainDictionary: mainDictionary ? toDictionary(mainDictionary) : null,
    ifcDictionary: ifcDictionary ? toDictionary(ifcDictionary) : null,
    filterDictionaries: filterDictionaries.map(toDictionary),
    language: params.get('language') || 'en-GB',
    // Accept '1' as well as 'true' (back-compat with pre-refactor BooleanParam).
    includeTestDictionaries: includeTestDictionaries === 'true' || includeTestDictionaries === '1',
  };
}

const useBrowserBridge = () => {
  const queryClient = useQueryClient();
  const setSettings = useSettingsStore((s) => s.setSettings);
  const setLoadedIfcEntities = useIfcDataStore((s) => s.setLoadedIfcEntities);
  const setLoadingEntities = useIfcDataStore((s) => s.setLoadingEntities);
  const setSavedPropertyIsInstanceMap = useIfcDataStore((s) => s.setSavedPropertyIsInstanceMap);
  const initialLoad = useRef(true);

  useEffect(() => {
    if (!initialLoad.current) return;
    initialLoad.current = false;

    // Capture URL params synchronously before the write-back effect below rewrites them.
    const urlSettings = readSettingsFromUrl();

    const init = async () => {
      const settings = urlSettings ?? defaultSettings;

      // Validate and apply settings first (caches dictionaries for entity validation).
      const validatedSettings = await validateSettings(queryClient, settings);
      setSettings(validatedSettings);

      if (mockData.propertyIsInstanceMap) {
        setSavedPropertyIsInstanceMap(mockData.propertyIsInstanceMap);
      }

      // Then validate and load IFC entities (uses cached dictionaries).
      if (mockData.ifcData) {
        setLoadingEntities(true);
        const language = validatedSettings.language || 'en-GB';
        const validatedEntities = await validateIfcData(mockData.ifcData, queryClient, language);
        setLoadedIfcEntities(validatedEntities);
        setLoadingEntities(false);
      } else {
        setLoadingEntities(false);
      }
    };

    init();
  }, [queryClient, setSettings, setLoadedIfcEntities, setLoadingEntities, setSavedPropertyIsInstanceMap]);

  // Per-field selectors — never return a fresh object/array to avoid getSnapshot warnings.
  const mainDictionary = useSettingsStore((s) => s.mainDictionary);
  const ifcDictionary = useSettingsStore((s) => s.ifcDictionary);
  const filterDictionaries = useSettingsStore((s) => s.filterDictionaries);
  const language = useSettingsStore((s) => s.language);
  const includeTestDictionaries = useSettingsStore((s) => s.includeTestDictionaries);

  // Skip the first run so the write-back never fires with pre-init store values and
  // clobbers URL params before validateSettings has applied them to the store.
  const settingsInitialized = useRef(false);

  // Sync settings → URL on every change so the address bar is always shareable.
  // Uses full bSDD dictionary URIs — no shortcuts or mapping tables; the URI is the
  // only reliable version identifier for external bSDD content.
  // Foreign params (e.g. ?scale= set by plugin hosts) are preserved unchanged.
  useEffect(() => {
    if (!settingsInitialized.current) {
      settingsInitialized.current = true;
      return;
    }
    const params = new URLSearchParams(window.location.search);
    for (const key of SETTINGS_PARAM_KEYS) {
      params.delete(key);
    }
    if (mainDictionary) params.set('mainDictionary', mainDictionary.ifcClassification.location);
    if (ifcDictionary) params.set('ifcDictionary', ifcDictionary.ifcClassification.location);
    for (const dict of filterDictionaries) {
      params.append('filterDictionaries', dict.ifcClassification.location);
    }
    if (language) params.set('language', language);
    if (includeTestDictionaries !== undefined) params.set('includeTestDictionaries', String(includeTestDictionaries));

    const search = params.toString();
    const newUrl = `${window.location.pathname}${search ? `?${search}` : ''}${window.location.hash}`;
    window.history.replaceState({}, '', newUrl);
  }, [mainDictionary, ifcDictionary, filterDictionaries, language, includeTestDictionaries]);

  const onSearch = (ifcEntities: IfcEntity[]) => {
    console.log('onSearch called with:', ifcEntities);
  };

  const onSelect = (ifcEntities: IfcEntity[]) => {
    console.log('onSelect called with:', ifcEntities);
  };

  const onSave = (bsddBridgeData: BsddBridgeData) => {
    console.log('onSave called with:', bsddBridgeData);
    return Promise.resolve('success');
  };

  const onCancel = () => {
    console.log('onCancel called');
  };

  return { onSearch, onSelect, onSave, onCancel };
};

export default useBrowserBridge;
