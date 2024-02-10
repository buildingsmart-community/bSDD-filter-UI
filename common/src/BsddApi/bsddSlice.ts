import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BsddApi } from './BsddApi';
import { DictionaryContractV1 } from './BsddApiBase';

interface BsddState {
  dictionaries: DictionaryContractV1[];
}
const initialState: BsddState = {
  dictionaries: [],
};

const bsddSlice = createSlice({
  name: 'bsdd',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchDictionaries.fulfilled, (state, action: PayloadAction<any[]>) => {
      state.dictionaries = action.payload;
    });
  },
});

export const fetchDictionaries = createAsyncThunk(
  'bsdd/fetchDictionaries',
  async (bsddApiEnvironment: string, thunkAPI) => {
    console.log('fetching dictionaries1', bsddApiEnvironment);
    if (!bsddApiEnvironment) return thunkAPI.rejectWithValue('No bsddApiEnvironment provided');

    const api = new BsddApi(bsddApiEnvironment);
    const response = await api.api.dictionaryV1List();
    console.log('fetching dictionaries2', response);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    if (response.data && response.data.dictionaries) {
      return response.data.dictionaries;
    }

    throw new Error(`bSDD API error! status: ${response.status}`);
  },
);

export const bsddReducer = bsddSlice.reducer;
