import { createAction, createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { RootState } from '../app/store';
import i18n from '../i18n';
import { BsddDictionary, BsddSettings } from '../IfcData/bsddBridgeData';

const initialState: BsddSettings = {
  mainDictionary: null,
  ifcDictionary: null,
  filterDictionaries: [],
  language: 'en-GB',
  includeTestDictionaries: undefined,
};

const handleSetLanguage = (state: BsddSettings, action: PayloadAction<string>) => {
  state.language = action.payload;
  i18n.changeLanguage(action.payload);
};

export const setSettings = createAction<BsddSettings>('settings/setSettings');

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setMainDictionary: (state, { payload }: PayloadAction<BsddDictionary>) => {
      state.mainDictionary = payload;
    },
    setIfcDictionary: (state, { payload }: PayloadAction<BsddDictionary>) => {
      state.ifcDictionary = payload;
    },
    setFilterDictionaries: (state, { payload }: PayloadAction<BsddDictionary[]>) => {
      state.filterDictionaries = payload;
    },
    setLanguage: handleSetLanguage,
    setIncludeTestDictionaries: (state, action: PayloadAction<boolean | undefined>) => {
      state.includeTestDictionaries = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      setSettings,
      (
        state,
        {
          payload: { mainDictionary, ifcDictionary, filterDictionaries, language, includeTestDictionaries },
        }: PayloadAction<BsddSettings>,
      ) => {
        if (JSON.stringify(state.mainDictionary) !== JSON.stringify(mainDictionary)) {
          state.mainDictionary = mainDictionary;
        }
        if (JSON.stringify(state.ifcDictionary) !== JSON.stringify(ifcDictionary)) {
          state.ifcDictionary = ifcDictionary;
        }
        if (JSON.stringify(state.filterDictionaries) !== JSON.stringify(filterDictionaries)) {
          state.filterDictionaries = filterDictionaries;
        }
        if (JSON.stringify(state.language) !== JSON.stringify(language)) {
          handleSetLanguage(state, { payload: language, type: 'setLanguage' });
        }
        if (JSON.stringify(state.includeTestDictionaries) !== JSON.stringify(includeTestDictionaries)) {
          state.includeTestDictionaries = includeTestDictionaries;
        }
      },
    );
  },
});

/**
 * Selects the active dictionaries from the Redux state.
 *
 * @param state - The root state object.
 * @returns An array of active dictionaries.
 */
export const selectActiveDictionaries = createSelector(
  (state: RootState) => state.settings.mainDictionary,
  (state: RootState) => state.settings.ifcDictionary,
  (state: RootState) => state.settings.filterDictionaries,
  (mainDictionary, ifcDictionary, filterDictionaries) => {
    const dictionaries = [mainDictionary, ifcDictionary, ...filterDictionaries].filter(Boolean) as BsddDictionary[];
    const dictionaryMap = new Map(dictionaries.map((item) => [item.ifcClassification.location, item]));
    return Array.from(dictionaryMap.values());
  },
);

export const selectActiveDictionariesMap = createSelector(selectActiveDictionaries, (activeDictionaries) => {
  const dictionaryMap = new Map(
    activeDictionaries.map((dictionary) => [dictionary.ifcClassification.location, dictionary.ifcClassification]),
  );
  return dictionaryMap;
});

export const selectMainDictionary = (state: RootState) => state.settings.mainDictionary;
export const selectFilterDictionaries = (state: RootState) => state.settings.filterDictionaries;
export const selectLanguage = (state: RootState) => state.settings.language;
export const selectIncludeTestDictionaries = (state: RootState) => state.settings.includeTestDictionaries;
export const selectSettings = (state: RootState) => state.settings;

export const selectActiveDictionaryUris = createSelector(selectActiveDictionaries, (activeDictionaries) =>
  activeDictionaries.map((dictionary) => dictionary.ifcClassification.location),
);

export const selectMainDictionaryUri = createSelector(selectMainDictionary, (mainDictionary) =>
  mainDictionary ? mainDictionary.ifcClassification.location : null,
);

export const { setMainDictionary, setFilterDictionaries, setLanguage, setIncludeTestDictionaries } =
  settingsSlice.actions;

export const settingsReducer = settingsSlice.reducer;
