import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { BsddDictionary, BsddSettings } from '../common/IfcData/bsddBridgeData';

// Note: this store is the single source of truth for `language`. i18next is
// subscribed to it inside `BsddProvider` (see `useI18nLanguageSubscription`),
// so the setter stays a pure state mutation — no side effects here.

interface SettingsState extends BsddSettings {
  setMainDictionary: (dict: BsddDictionary | null) => void;
  setIfcDictionary: (dict: BsddDictionary | null) => void;
  setFilterDictionaries: (dicts: BsddDictionary[]) => void;
  setLanguage: (lang: string) => void;
  setIncludeTestDictionaries: (include: boolean | undefined) => void;
  setSettings: (settings: BsddSettings) => void;
}

export const useSettingsStore = create<SettingsState>()(
  persist(
    (set) => ({
      mainDictionary: null,
      ifcDictionary: null,
      filterDictionaries: [],
      language: 'en-GB',
      includeTestDictionaries: undefined,

      setMainDictionary: (dict) => set({ mainDictionary: dict }),
      setIfcDictionary: (dict) => set({ ifcDictionary: dict }),
      setFilterDictionaries: (dicts) => set({ filterDictionaries: dicts }),
      setLanguage: (lang) => set({ language: lang }),
      setIncludeTestDictionaries: (include) => set({ includeTestDictionaries: include }),
      setSettings: (settings) =>
        set({
          mainDictionary: settings.mainDictionary,
          ifcDictionary: settings.ifcDictionary,
          filterDictionaries: settings.filterDictionaries,
          language: settings.language,
          includeTestDictionaries: settings.includeTestDictionaries,
        }),
    }),
    {
      name: 'bsdd-settings',
      partialize: (state) => ({
        mainDictionary: state.mainDictionary,
        ifcDictionary: state.ifcDictionary,
        filterDictionaries: state.filterDictionaries,
        language: state.language,
        includeTestDictionaries: state.includeTestDictionaries,
      }),
    },
  ),
);

// Derived selectors
export const selectActiveDictionaries = (state: SettingsState): BsddDictionary[] => {
  const dictionaries = [state.mainDictionary, state.ifcDictionary, ...(state.filterDictionaries || [])].filter(
    Boolean,
  ) as BsddDictionary[];
  const dictionaryMap = new Map(dictionaries.map((item) => [item.ifcClassification.location, item]));
  return Array.from(dictionaryMap.values());
};

export const selectActiveDictionariesMap = (state: SettingsState) => {
  const dictionaries = selectActiveDictionaries(state);
  return new Map(dictionaries.map((d) => [d.ifcClassification.location, d.ifcClassification]));
};

export const selectMainDictionaryUri = (state: SettingsState) => state.mainDictionary?.ifcClassification.location;

export const selectIfcDictionaryUri = (state: SettingsState) => state.ifcDictionary?.ifcClassification.location;

// selectActiveDictionaryUris must be used with useShallow — it derives an array from state.
// Defined here as a plain selector (not memoized) so useShallow does the shallow comparison.
export const selectActiveDictionaryUris = (state: SettingsState): string[] =>
  selectActiveDictionaries(state).map((d) => d.ifcClassification.location);

export const selectSettings = (state: SettingsState): BsddSettings => ({
  mainDictionary: state.mainDictionary,
  ifcDictionary: state.ifcDictionary,
  filterDictionaries: state.filterDictionaries,
  language: state.language,
  includeTestDictionaries: state.includeTestDictionaries,
});
