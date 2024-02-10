import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { BsddDictionary, BsddSettings } from '../IfcData/bsddBridgeData';
import { RootState } from '../../../bsdd_selection/src/app/store';
import { bsddEnvironments } from '../BsddApi/BsddApiEnvironments';

interface EntitiesState {
  bddApiEnvironment: string;
  mainDictionary: BsddDictionary | null;
  filterDictionaries: BsddDictionary[];
  language: string;
}

const initialState: EntitiesState = {
  bddApiEnvironment: 'production',
  mainDictionary: null,
  filterDictionaries: [],
  language: 'EN',
};

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setSettings: (state, action: PayloadAction<BsddSettings>) => {
      state.bddApiEnvironment = action.payload.bsddApiEnvironment;
      state.mainDictionary = action.payload.mainDictionary;
      state.filterDictionaries = action.payload.filterDictionaries;
      state.language = action.payload.language;
    },
    setBsddApiEnvironment: (state, action: PayloadAction<string>) => {
      console.log('setBsddApiEnvironment', action.payload);
      state.bddApiEnvironment = action.payload;
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

export const selectBsddApiEnvironmentUri = (state: RootState) => bsddEnvironments[state.settings.bddApiEnvironment];

export const { setSettings, setBsddApiEnvironment, setMainDictionary, setFilterDictionaries, setLanguage } =
  settingsSlice.actions;
export const settingsReducer = settingsSlice.reducer;
