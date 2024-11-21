import { createAsyncThunk, createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { AppDispatch, RootState } from '../app/store';
import { BsddDictionary, BsddSettings } from '../IfcData/bsddBridgeData';
import { validateDictionary } from '../IfcData/ifcValidators';
import i18n from '../i18n';

const initialState: BsddSettings = {
  mainDictionary: null,
  ifcDictionary: null,
  filterDictionaries: [],
  language: 'en-GB',
  includeTestDictionaries: undefined,
  // propertyIsInstanceMap: {},
};

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setMainDictionary(state, { payload }: PayloadAction<BsddDictionary>) {
      state.mainDictionary = payload;
    },
    setIfcDictionary(state, { payload }: PayloadAction<BsddDictionary>) {
      state.ifcDictionary = payload;
    },
    setFilterDictionaries(state, action: PayloadAction<BsddDictionary[]>) {
      state.filterDictionaries = action.payload;
    },
    setLanguage(state, action: PayloadAction<string>) {
      state.language = action.payload;
      i18n.changeLanguage(action.payload);
    },
    setIncludeTestDictionaries(state, action: PayloadAction<boolean | undefined>) {
      state.includeTestDictionaries = action.payload;
    },
    // setPropertyIsInstanceMap(state, action: PayloadAction<Record<string, boolean>>) {
    //   state.propertyIsInstanceMap = action.payload;
    // },
    setSettings(state: BsddSettings, action: PayloadAction<BsddSettings>) {
      const { mainDictionary, ifcDictionary, filterDictionaries, language, includeTestDictionaries } = action.payload;

      console.log('setSettings, received payload:', {
        mainDictionary,
        ifcDictionary,
        filterDictionaries,
        language,
        includeTestDictionaries,
      });

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
        state.language = language;
        i18n.changeLanguage(language);
      }
      if (JSON.stringify(state.includeTestDictionaries) !== JSON.stringify(includeTestDictionaries)) {
        state.includeTestDictionaries = includeTestDictionaries;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(setSettingsWithValidation.fulfilled, (state, action: PayloadAction<BsddSettings>) => {
      settingsSlice.caseReducers.setSettings(state, action);
    });
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
    const dictionaries = [mainDictionary, ifcDictionary, ...(filterDictionaries || [])].filter(
      Boolean,
    ) as BsddDictionary[];
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
export const selectIfcDictionary = (state: RootState) => state.settings.ifcDictionary;
export const selectFilterDictionaries = (state: RootState) => state.settings.filterDictionaries;
export const selectLanguage = (state: RootState) => state.settings.language;
export const selectIncludeTestDictionaries = (state: RootState) =>
  (state.settings as BsddSettings).includeTestDictionaries;
// export const selectPropertyIsInstanceMap = (state: RootState) => state.settings.propertyIsInstanceMap;
export const selectSettings = (state: RootState) => state.settings;

export const selectActiveDictionaryUris = createSelector(selectActiveDictionaries, (activeDictionaries) =>
  activeDictionaries.map((dictionary) => dictionary.ifcClassification.location),
);

export const selectMainDictionaryUri = createSelector(selectMainDictionary, (mainDictionary: BsddDictionary | null) =>
  mainDictionary ? mainDictionary.ifcClassification.location : null,
);

export const {
  setMainDictionary,
  setIfcDictionary,
  setFilterDictionaries,
  setLanguage,
  setIncludeTestDictionaries,
  // setPropertyIsInstanceMap,
} = settingsSlice.actions;

export const setSettingsWithValidation = createAsyncThunk(
  'settings/setSettingsWithValidation',
  async (settings: BsddSettings, { dispatch, getState }) => {
    const state = getState() as RootState;
    const appDispatch = dispatch as AppDispatch;

    const validatedMainDictionary = settings.mainDictionary
      ? await validateDictionary(state, appDispatch, settings.mainDictionary)
      : null;

    const validatedIfcDictionary = settings.ifcDictionary
      ? await validateDictionary(state, appDispatch, settings.ifcDictionary)
      : null;

    const validatedFilterDictionaries = await Promise.all(
      settings.filterDictionaries.map(async (dictionary) => {
        return await validateDictionary(state, appDispatch, dictionary);
      }),
    ).then((results) => results.filter((dictionary): dictionary is BsddDictionary => dictionary !== null));

    const updatedSettings = {
      ...settings,
      mainDictionary: validatedMainDictionary,
      ifcDictionary: validatedIfcDictionary,
      filterDictionaries: validatedFilterDictionaries,
    };

    return updatedSettings;
  },
);

export const settingsReducer = settingsSlice.reducer;
