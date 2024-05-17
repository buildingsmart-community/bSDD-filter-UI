import { createAsyncThunk, createSlice, PayloadAction, ThunkDispatch, UnknownAction } from '@reduxjs/toolkit';

import type { RootState } from '../../../common/app/store';
import { BsddApi } from '../../../common/BsddApi/BsddApi';
import { ClassContractV1, ClassListItemContractV1, DictionaryContractV1 } from '../../../common/BsddApi/BsddApiBase';
import { selectBsddApiEnvironmentUri } from '../../../common/slices/settingsSlice';

const CLASS_ITEM_PAGE_SIZE = 500;
const DICTIONARIES_PAGE_SIZE = 500;

interface BsddState {
  classes: { [key: string]: ClassContractV1 };
  dictionaries: { [key: string]: DictionaryContractV1 };
  dictionaryClasses: { [key: string]: ClassListItemContractV1[] };
  loaded: boolean;
}

let bsddApi: BsddApi<any> | null = null;

let fetchPromisesCache: Partial<Record<string, Promise<ClassListItemContractV1[]>>> = {};

const initialState: BsddState = {
  classes: {},
  dictionaries: {},
  dictionaryClasses: {},
  loaded: false,
};

/**
 * Selects the instance of the BsddApi class based on the current state.
 * If the base URL has changed or the instance doesn't exist, a new instance is created.
 *
 * @param state - The root state of the application.
 * @returns The selected instance of the BsddApi class.
 */
export const selectBsddApi = (state: RootState) => {
  const baseUrl = selectBsddApiEnvironmentUri(state);
  if (baseUrl && (!bsddApi || bsddApi.baseUrl !== baseUrl)) {
    bsddApi = new BsddApi(baseUrl);
  }
  return bsddApi;
};

/**
 * Fetches dictionaries from the bSDD API.
 *
 * @param bsddApiEnvironment - The environment for the bSDD API.
 * @param thunkAPI - The Redux Thunk API.
 * @returns A promise that resolves to an object containing the fetched dictionaries.
 * @throws An error if there is an HTTP error or a bSDD API error.
 */
export const fetchDictionaries = createAsyncThunk<
  { [key: string]: DictionaryContractV1 }, // The type of the payload of the fulfilled action
  string, // The type of the argument of the payload creator
  { rejectValue: string } // The type of the payload of the rejected action
>('bsdd/fetchDictionaries', (bsddApiEnvironment: string, thunkAPI) => {
  console.log('fetchDictionaries', bsddApiEnvironment);
  if (!bsddApiEnvironment) return thunkAPI.rejectWithValue('No bsddApiEnvironment provided');

  const api = new BsddApi(bsddApiEnvironment);
  const limit = DICTIONARIES_PAGE_SIZE;
  let offset = 0;
  const dictionaries: DictionaryContractV1[] = [];

  return new Promise((resolve, reject) => {
    function fetchNextPage() {
      api.api.dictionaryV1List({ IncludeTestDictionaries: true, Limit: limit, Offset: offset }).then((response) => {
        if (!response.ok) {
          reject(new Error(`HTTP error! status: ${response.status}`));
        }

        const { data: { dictionaries: newDictionaries, totalCount } = {} } = response;
        if (newDictionaries && typeof totalCount !== 'undefined') {
          dictionaries.push(...newDictionaries);
          offset += limit;
          if (dictionaries.length >= totalCount) {
            const out = dictionaries.reduce((acc: { [key: string]: DictionaryContractV1 }, item) => {
              acc[item.uri] = item;
              return acc;
            }, {});
            resolve(out);
          } else {
            fetchNextPage();
          }
        } else {
          reject(new Error(`bSDD API error! status: ${response.status}`));
        }
      });
    }

    fetchNextPage();
  });
});

/**
 * Fetches classes for a given dictionary uri.
 *
 * @param location - The dictionary uri for which to fetch the dictionary classes.
 * @param options - Additional options for the async thunk.
 * @returns A promise that resolves to an array of fetched dictionary classes.
 */
export const fetchDictionaryClasses = createAsyncThunk(
  'bsdd/fetchDictionaryClasses',
  async (location: string, { getState, dispatch }) => {
    const state = getState() as RootState;
    // const languageCode = useAppSelector(selectLanguage);

    // If the classes for this location are already in the state, return them
    if (state.bsdd.dictionaryClasses[location]) {
      return state.bsdd.dictionaryClasses[location];
    }

    // If a fetch for this location is already ongoing, wait for it to complete and return the result
    if (fetchPromisesCache[location]) {
      const classes = await fetchPromisesCache[location];
      return classes;
    }

    // Start a new fetch
    const fetchPromise = (async () => {
      const api = selectBsddApi(getState() as RootState);
      if (!api) {
        throw new Error('BsddApi is not initialized');
      }

      const classes: ClassListItemContractV1[] = [];
      let offset = 0;
      let totalCount: number | null | undefined;

      while (true) {
        const data = await fetchDictionaryClassData(api, location, offset); // , languageCode);
        const newClasses = data.classes ?? [];
        classes.push(...newClasses);

        // Update total count after the first fetch
        if (offset === 0) {
          totalCount = data.classesTotalCount;
          if (totalCount === null || totalCount === undefined) {
            throw new Error('Total count is null or undefined');
          }
        }

        if (totalCount !== null && totalCount !== undefined && classes.length >= totalCount) {
          break;
        }

        offset += CLASS_ITEM_PAGE_SIZE;
      }

      dispatch({ type: 'bsdd/addDictionaryClasses', payload: { uri: location, classes } });
      return classes;
    })();

    fetchPromisesCache[location] = fetchPromise;
    const classes = await fetchPromise;
    return classes;
  },
);

const bsddSlice = createSlice({
  name: 'bsdd',
  initialState,
  reducers: {
    resetState: () => initialState,
    addClass: (state, action: PayloadAction<{ uri: string; data: ClassContractV1 }>) => {
      state.classes[action.payload.uri] = action.payload.data;
    },
    addDictionaryClasses: (state, action: PayloadAction<{ uri: string; data: ClassListItemContractV1[] }>) => {
      state.dictionaryClasses[action.payload.uri] = action.payload.data;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDictionaries.pending, (state) => {
        state.loaded = false;
      })
      .addCase(fetchDictionaries.fulfilled, (state, action: PayloadAction<{ [key: string]: DictionaryContractV1 }>) => {
        console.log('fetch dictionaries fulfilled', action.payload);
        state.dictionaries = action.payload;
        state.loaded = true;
      })
      .addCase(fetchDictionaryClasses.rejected, (state, action) => {
        console.error('fetch dictionary classes failed', action.error);
        state.loaded = true;
      });
  },
});
/**
 * Fetches a class from the bsddApi.
 *
 * @param uri - The URI of the class to fetch.
 * @param getState - A function to get the current state.
 * @param dispatch - A function to dispatch actions.
 * @returns A promise that resolves to the fetched class data.
 * @throws Error if the bsddApi is not initialized or if there is an HTTP error.
 */
export const fetchClass = createAsyncThunk('bsdd/fetchClass', async (uri: string, { getState, dispatch }) => {
  const state = getState() as RootState;
  // const languageCode = useAppSelector(selectLanguage);
  if (state.bsdd.classes[uri]) {
    return state.bsdd.classes[uri];
  }

  if (!bsddApi) {
    throw new Error('BsddApi is not initialized');
  }

  const response = await bsddApi.api.classV1List({
    Uri: uri,
    IncludeClassProperties: true,
    IncludeChildClassReferences: true,
    IncludeClassRelations: true,
    // IncludeReverseRelations: true,
    // languageCode: languageCode || undefined,
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const { data } = response;
  dispatch({ type: 'bsdd/addClass', payload: { uri, data } });
  return data;
});

/**
 * Fetches a specific batch of dictionary class data from the API.
 *
 * @param api - The instance of the BsddApi.
 * @param location - The location of the dictionary.
 * @param offset - The offset for pagination.
 * @returns The fetched dictionary class data.
 * @throws Error if there is an HTTP error.
 */
async function fetchDictionaryClassData(
  api: BsddApi<any>,
  location: string,
  offset: number,
  // languageCode: string | null,
) {
  const response = await api.api.dictionaryV1ClassesList({
    Uri: location,
    UseNestedClasses: false,
    Limit: CLASS_ITEM_PAGE_SIZE,
    Offset: offset,
    // languageCode: languageCode || undefined,
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.data;
}

export const selectDictionary = (state: RootState, uri: string) => state.bsdd.dictionaries[uri];
export const selectDictionaryClasses = (state: RootState, location: string) => state.bsdd.dictionaryClasses[location];
export const selectBsddDictionaries = (state: RootState) => state.bsdd.dictionaries;
export const selectBsddDataLoaded = (state: RootState) => state.bsdd.loaded;

export const { resetState } = bsddSlice.actions;

/**
 * Updates the base URL of the BsddApi and resets the state.
 * @param baseUrl The new base URL for the BsddApi.
 */
export function updateBsddApi(baseUrl: string) {
  return (dispatch: ThunkDispatch<unknown, unknown, UnknownAction>) => {
    bsddApi = new BsddApi(baseUrl);
    fetchPromisesCache = {};
    dispatch(resetState());
  };
}

export const bsddReducer = bsddSlice.reducer;
