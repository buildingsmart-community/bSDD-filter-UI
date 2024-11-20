import { configureStore } from '@reduxjs/toolkit';
import {
  settingsReducer,
  setMainDictionary,
  setIfcDictionary,
  setFilterDictionaries,
  setLanguage,
  setIncludeTestDictionaries,
  setSettingsWithValidation,
  selectMainDictionary,
  selectIfcDictionary,
  selectFilterDictionaries,
  selectLanguage,
  selectIncludeTestDictionaries,
  selectSettings,
} from './settingsSlice';
import { BsddDictionary, BsddSettings } from '../IfcData/bsddBridgeData';
import { mockData } from '../../../mocks/mockData';
import { bsddReducer } from './bsddSlice';
import { ifcDataReducer } from './ifcDataSlice';
import { ifcEntityReducer } from './ifcEntitySlice';

const initialState: BsddSettings = {
  mainDictionary: null,
  ifcDictionary: null,
  filterDictionaries: [],
  language: 'en-GB',
  includeTestDictionaries: undefined,
};

const store = configureStore({
  reducer: {
    settings: settingsReducer,
    ifcData: ifcDataReducer,
    bsdd: bsddReducer,
    ifcEntity: ifcEntityReducer,
  },
});

describe('settingsSlice', () => {
  it('should handle initial state', () => {
    expect(store.getState().settings).toMatchObject(initialState);
  });

  it('should handle setMainDictionary', () => {
    const dictionary: BsddDictionary = mockData.settings.mainDictionary!;
    store.dispatch(setMainDictionary(dictionary));
    expect(selectMainDictionary(store.getState())).toMatchObject(dictionary);
  });

  it('should handle setIfcDictionary', () => {
    const dictionary: BsddDictionary = mockData.settings.ifcDictionary!;
    store.dispatch(setIfcDictionary(dictionary));
    expect(selectIfcDictionary(store.getState())).toMatchObject(dictionary);
  });

  it('should handle setFilterDictionaries', () => {
    const dictionaries: BsddDictionary[] = mockData.settings.filterDictionaries;
    store.dispatch(setFilterDictionaries(dictionaries));
    expect(selectFilterDictionaries(store.getState())).toMatchObject(dictionaries);
  });

  it('should handle setLanguage', () => {
    const language = mockData.settings.language;
    store.dispatch(setLanguage(language));
    expect(selectLanguage(store.getState())).toBe(language);
  });

  it('should handle setIncludeTestDictionaries', () => {
    const includeTestDictionaries = mockData.settings.includeTestDictionaries;
    store.dispatch(setIncludeTestDictionaries(includeTestDictionaries));
    expect(selectIncludeTestDictionaries(store.getState())).toBe(includeTestDictionaries);
  });

  it('should handle setSettingsWithValidation', async () => {
    const settings: BsddSettings = mockData.settings;
    await store.dispatch(setSettingsWithValidation(settings));
    const state = store.getState();
    expect(selectSettings(state)).toMatchObject({
      ...settings,
      mainDictionary: expect.any(Object),
      ifcDictionary: expect.any(Object),
      filterDictionaries: expect.any(Array),
    });
  });
});
