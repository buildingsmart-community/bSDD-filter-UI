import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import {
  selectActiveDictionaries,
  selectActiveDictionariesMap,
  selectActiveDictionaryUris,
  selectIfcDictionaryUri,
  selectMainDictionaryUri,
  selectSettings,
  useSettingsStore,
} from './settingsStore';

const dict = (location: string, name = location) => ({
  parameterMapping: '',
  ifcClassification: { type: 'IfcClassification' as const, location, name },
});

const initialState = useSettingsStore.getState();

beforeEach(() => {
  // Reset store to initial state between tests so persisted localStorage doesn't leak.
  useSettingsStore.setState({
    mainDictionary: null,
    ifcDictionary: null,
    filterDictionaries: [],
    language: 'en-GB',
    includeTestDictionaries: undefined,
  });
  localStorage.clear();
});

afterEach(() => {
  useSettingsStore.setState(initialState);
});

describe('useSettingsStore actions', () => {
  it('sets and clears the main dictionary', () => {
    const main = dict('https://example.org/main');
    useSettingsStore.getState().setMainDictionary(main);
    expect(useSettingsStore.getState().mainDictionary).toEqual(main);
    useSettingsStore.getState().setMainDictionary(null);
    expect(useSettingsStore.getState().mainDictionary).toBeNull();
  });

  it('sets filter dictionaries', () => {
    const a = dict('https://example.org/a');
    const b = dict('https://example.org/b');
    useSettingsStore.getState().setFilterDictionaries([a, b]);
    expect(useSettingsStore.getState().filterDictionaries).toHaveLength(2);
  });

  it('setLanguage is a pure state mutation (i18n is wired separately via BsddProvider)', async () => {
    const i18n = (await import('../common/i18n')).default;
    const spy = vi.spyOn(i18n, 'changeLanguage').mockResolvedValue(((s: string) => s) as any);
    useSettingsStore.getState().setLanguage('nl-NL');
    expect(useSettingsStore.getState().language).toBe('nl-NL');
    expect(spy).not.toHaveBeenCalled();
    spy.mockRestore();
  });

  it('setSettings replaces all settings', () => {
    const main = dict('https://example.org/main');
    useSettingsStore.getState().setSettings({
      mainDictionary: main,
      ifcDictionary: null,
      filterDictionaries: [],
      language: 'de-DE',
      includeTestDictionaries: true,
    });
    expect(useSettingsStore.getState().mainDictionary).toEqual(main);
    expect(useSettingsStore.getState().language).toBe('de-DE');
    expect(useSettingsStore.getState().includeTestDictionaries).toBe(true);
  });
});

describe('settingsStore selectors', () => {
  it('selectActiveDictionaries deduplicates by ifcClassification.location', () => {
    const a = dict('https://example.org/a');
    const b = dict('https://example.org/b');
    const aDup = dict('https://example.org/a', 'a-dup');
    useSettingsStore.setState({
      mainDictionary: a,
      ifcDictionary: b,
      filterDictionaries: [aDup],
    });
    const active = selectActiveDictionaries(useSettingsStore.getState());
    expect(active).toHaveLength(2);
    expect(active.map((d) => d.ifcClassification.location).sort()).toEqual([
      'https://example.org/a',
      'https://example.org/b',
    ]);
  });

  it('selectActiveDictionariesMap exposes a Map keyed by location', () => {
    const a = dict('https://example.org/a');
    useSettingsStore.setState({ mainDictionary: a, ifcDictionary: null, filterDictionaries: [] });
    const map = selectActiveDictionariesMap(useSettingsStore.getState());
    expect(map.get('https://example.org/a')?.location).toBe('https://example.org/a');
  });

  it('selectMainDictionaryUri / selectIfcDictionaryUri / selectActiveDictionaryUris', () => {
    const main = dict('https://example.org/main');
    const ifc = dict('https://example.org/ifc');
    useSettingsStore.setState({ mainDictionary: main, ifcDictionary: ifc, filterDictionaries: [] });
    const state = useSettingsStore.getState();
    expect(selectMainDictionaryUri(state)).toBe('https://example.org/main');
    expect(selectIfcDictionaryUri(state)).toBe('https://example.org/ifc');
    expect(selectActiveDictionaryUris(state).sort()).toEqual(['https://example.org/ifc', 'https://example.org/main']);
  });

  it('selectSettings returns a plain settings snapshot', () => {
    const main = dict('https://example.org/main');
    useSettingsStore.setState({
      mainDictionary: main,
      ifcDictionary: null,
      filterDictionaries: [],
      language: 'en-GB',
      includeTestDictionaries: false,
    });
    expect(selectSettings(useSettingsStore.getState())).toEqual({
      mainDictionary: main,
      ifcDictionary: null,
      filterDictionaries: [],
      language: 'en-GB',
      includeTestDictionaries: false,
    });
  });
});

describe('settingsStore persistence', () => {
  it('persists state under bsdd-settings key', () => {
    useSettingsStore.getState().setLanguage('fr-FR');
    const persisted = localStorage.getItem('bsdd-settings');
    expect(persisted).toBeTruthy();
    expect(JSON.parse(persisted!).state.language).toBe('fr-FR');
  });
});
