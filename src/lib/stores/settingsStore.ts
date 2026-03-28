import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import i18n from '../common/i18n';
import { BsddDictionary, BsddSettings } from '../common/IfcData/bsddBridgeData';

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
      setLanguage: (lang) => {
        i18n.changeLanguage(lang);
        set({ language: lang });
      },
      setIncludeTestDictionaries: (include) => set({ includeTestDictionaries: include }),
      setSettings: (settings) => {
        if (settings.language) {
          i18n.changeLanguage(settings.language);
        }
        set({
          mainDictionary: settings.mainDictionary,
          ifcDictionary: settings.ifcDictionary,
          filterDictionaries: settings.filterDictionaries,
          language: settings.language,
          includeTestDictionaries: settings.includeTestDictionaries,
        });
      },
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

export const selectActiveDictionaryUris = (state: SettingsState) =>
  selectActiveDictionaries(state).map((d) => d.ifcClassification.location);
