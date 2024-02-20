import { PayloadAction, createSelector, createSlice } from '@reduxjs/toolkit';
import { BsddDictionary, BsddSettings } from '../IfcData/bsddBridgeData';
import { RootState } from '../../../bsdd_selection/src/app/store';
import { bsddEnvironments } from '../BsddApi/BsddApiEnvironments';

interface EntitiesState {
  bsddApiEnvironment: string | null;
  mainDictionary: BsddDictionary | null;
  filterDictionaries: BsddDictionary[];
  language: string | null;
}

const initialState: EntitiesState = {
  bsddApiEnvironment: null,
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

/**
 * Selects the URI for the bSDD API environment from the Redux state.
 *
 * @param state - The Redux state.
 * @returns The URI for the selected bSDD API environment, or null if no environment is selected.
 */
export const selectBsddApiEnvironmentUri = (state: RootState) => {
  const environment = state.settings.bsddApiEnvironment;
  return environment !== null ? bsddEnvironments[environment] : null;
};

/**
 * Selects the active dictionaries from the Redux state.
 *
 * @param state - The root state object.
 * @returns An array of active dictionaries.
 */
export const selectActiveDictionaries = createSelector(
  (state: RootState) => state.settings.mainDictionary,
  (state: RootState) => state.settings.filterDictionaries,
  (mainDictionary, filterDictionaries) =>
    mainDictionary ? [mainDictionary, ...filterDictionaries] : filterDictionaries,
);

export const selectMainDictionary = (state: RootState) => state.settings.mainDictionary;
export const selectFilterDictionaries = (state: RootState) => state.settings.filterDictionaries;
export const selectLanguage = (state: RootState) => state.settings.language;
export const selectBsddApiEnvironment = (state: RootState) => state.settings.bsddApiEnvironment;

export const { setSettings, setBsddApiEnvironment, setMainDictionary, setFilterDictionaries, setLanguage } =
  settingsSlice.actions;

export const settingsReducer = settingsSlice.reducer;
