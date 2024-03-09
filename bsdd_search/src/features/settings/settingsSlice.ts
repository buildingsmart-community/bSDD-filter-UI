import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { bsddEnvironments } from '../../../../common/src/BsddApi/BsddApiEnvironments';
import { BsddDictionary, BsddSettings } from '../../../../common/src/IfcData/bsddBridgeData';
import type { RootState } from '../../app/store';

interface EntitiesState {
  bsddApiEnvironment: string | null;
  mainDictionary: BsddDictionary | null;
  filterDictionaries: BsddDictionary[];
  language: string | null;
}

const initialState: EntitiesState = {
  bsddApiEnvironment: 'test',
  mainDictionary: null,
  filterDictionaries: [],
  language: 'EN',
};

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setSettings: (state, action: PayloadAction<BsddSettings>) => {
      state.bsddApiEnvironment = action.payload.bsddApiEnvironment;
      state.mainDictionary = action.payload.mainDictionary;
      state.filterDictionaries = action.payload.filterDictionaries;
      state.language = action.payload.language;
    },
    setBsddApiEnvironment: (state, action: PayloadAction<string>) => {
      state.bsddApiEnvironment = action.payload;
    },
    setMainDictionary: (state, action: PayloadAction<BsddDictionary>) => {
      state.mainDictionary = action.payload;
    },
    setFilterDictionaries: (state, action: PayloadAction<BsddDictionary[]>) => {
      state.filterDictionaries = action.payload;
    },
    setLanguage: (state, action: PayloadAction<string>) => {
      state.language = action.payload;
    },
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

export const { setSettings, setBsddApiEnvironment, setMainDictionary, setFilterDictionaries, setLanguage } =
  settingsSlice.actions;

export const settingsReducer = settingsSlice.reducer;
