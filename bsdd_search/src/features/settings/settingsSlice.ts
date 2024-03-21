import { createAction, createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { bsddEnvironments } from '../../../../common/src/BsddApi/BsddApiEnvironments';
import i18n from '../../../../common/src/i18n';
import { BsddDictionary, BsddSettings } from '../../../../common/src/IfcData/bsddBridgeData';
import type { RootState } from '../../app/store';

interface SettingsState {
  bsddApiEnvironment: string | null;
  mainDictionary: BsddDictionary | null;
  filterDictionaries: BsddDictionary[];
  language: string;
}

const initialState: SettingsState = {
  bsddApiEnvironment: 'production',
  mainDictionary: null,
  filterDictionaries: [],
  language: 'EN',
};

const handleSetLanguage = (state: SettingsState, action: PayloadAction<string>) => {
  state.language = action.payload;
  i18n.changeLanguage(action.payload);
};

export const setSettings = createAction<BsddSettings>('settings/setSettings');

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setBsddApiEnvironment: (state, { payload }: PayloadAction<string>) => {
      state.bsddApiEnvironment = payload;
    },
    setMainDictionary: (state, { payload }: PayloadAction<BsddDictionary>) => {
      state.mainDictionary = payload;
    },
    setFilterDictionaries: (state, { payload }: PayloadAction<BsddDictionary[]>) => {
      state.filterDictionaries = payload;
    },
    setLanguage: handleSetLanguage,
  },
  extraReducers: (builder) => {
    builder.addCase(
      setSettings,
      (
        state,
        { payload: { bsddApiEnvironment, mainDictionary, filterDictionaries, language } }: PayloadAction<BsddSettings>,
      ) => {
        state.bsddApiEnvironment = bsddApiEnvironment;
        state.mainDictionary = mainDictionary;
        state.filterDictionaries = filterDictionaries;
        handleSetLanguage(state, { payload: language, type: 'setLanguage' });
      },
    );
  },
});

export const selectBsddApiEnvironmentUri = (state: RootState) => {
  const environment = state.settings.bsddApiEnvironment;
  return environment !== null ? bsddEnvironments[environment] : null;
};

export const selectActiveDictionaries = createSelector(
  (state: RootState) => state.settings.mainDictionary,
  (state: RootState) => state.settings.filterDictionaries,
  (mainDictionary, filterDictionaries) =>
    mainDictionary ? [mainDictionary, ...filterDictionaries] : filterDictionaries,
);

export const selectActiveDictionaryLocations = createSelector(selectActiveDictionaries, (activeDictionaries) =>
  activeDictionaries.map((dictionary) => dictionary.ifcClassification.location),
);

export const selectMainDictionary = (state: RootState) => state.settings.mainDictionary;
export const selectFilterDictionaries = (state: RootState) => state.settings.filterDictionaries;
export const selectLanguage = (state: RootState) => state.settings.language;
export const selectBsddApiEnvironment = (state: RootState) => state.settings.bsddApiEnvironment;

export const settingsReducer = settingsSlice.reducer;
