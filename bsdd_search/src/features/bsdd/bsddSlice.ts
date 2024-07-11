import {
  createAsyncThunk,
  createSelector,
  createSlice,
  PayloadAction,
  ThunkDispatch,
  UnknownAction,
} from '@reduxjs/toolkit';

import { BsddApi } from '../../../../common/src/BsddApi/BsddApi';
import {
  ClassContractV1,
  ClassListItemContractV1,
  DictionaryContractV1,
} from '../../../../common/src/BsddApi/BsddApiBase';
import type { RootState } from '../../app/store';
import { selectBsddApiEnvironmentUri } from '../settings/settingsSlice';

const CLASS_ITEM_PAGE_SIZE = 500;
const DICTIONARIES_PAGE_SIZE = 500;

interface BsddState {
  mainDictionaryClassification: ClassContractV1 | null;
  classes: { [key: string]: ClassContractV1 };
  dictionaries: { [key: string]: DictionaryContractV1 };
  dictionaryClasses: { [key: string]: ClassListItemContractV1[] };
  loaded: boolean;
  groupedClassRelations: { [key: string]: ClassContractV1[] };
}

let bsddApi: BsddApi<any> | null = null;

let fetchPromisesCache: Partial<Record<string, Promise<ClassListItemContractV1[]>>> = {};

const initialState: BsddState = {
  mainDictionaryClassification: null,
  classes: {},
  dictionaries: {},
  dictionaryClasses: {},
  loaded: false,
  groupedClassRelations: {},
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

export type FetchAllDictionaryParameters = {
  bsddApiEnvironment: string;
  includeTestDictionaries: boolean;
};

/**
 * Fetches dictionaries from the bSDD API.
 *
 * @param bsddApiEnvironment - The environment for the bSDD API.
 * @param thunkAPI - The Redux Thunk API.
 * @returns A promise that resolves to an object containing the fetched dictionaries.
 * @throws An error if there is an HTTP error or a bSDD API error.
 */
export const fetchAllDictionaries = createAsyncThunk<
  { [key: string]: DictionaryContractV1 },
  FetchAllDictionaryParameters,
  { rejectValue: string }
>('bsdd/fetchDictionaries', ({ bsddApiEnvironment, includeTestDictionaries }, thunkAPI) => {
  if (!bsddApiEnvironment) return thunkAPI.rejectWithValue('No bsddApiEnvironment provided');

  const api = new BsddApi(bsddApiEnvironment);
  const limit = DICTIONARIES_PAGE_SIZE;
  let offset = 0;
  const dictionaries: DictionaryContractV1[] = [];

  return new Promise((resolve, reject) => {
    function fetchNextPage() {
      api.api
        .dictionaryV1List({ IncludeTestDictionaries: includeTestDictionaries, Limit: limit, Offset: offset })
        .then((response) => {
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

export type FetchDictionaryParameters = {
  bsddApiEnvironment: string;
  includeTestDictionaries: boolean;
  dictionaryUris?: string[];
};

export const fetchDictionaries = createAsyncThunk<
  { [key: string]: DictionaryContractV1 },
  FetchDictionaryParameters, // Assuming this type now includes dictionaryUris: string[]
  { rejectValue: string }
>('bsdd/fetchDictionaries', async ({ bsddApiEnvironment, dictionaryUris }, thunkAPI) => {
  if (!bsddApiEnvironment || !dictionaryUris || dictionaryUris.length === 0) {
    return thunkAPI.rejectWithValue('Invalid parameters');
  }

  const api = new BsddApi(bsddApiEnvironment);
  const dictionaries: { [key: string]: DictionaryContractV1 } = {};

  await Promise.all(
    dictionaryUris.map(async (uri) => {
      try {
        const response = await api.api.dictionaryV1List({ Uri: uri });
        if (response.ok && response.data) {
          // Assuming response.data is an array of dictionaries
          response.data.dictionaries?.forEach((dictionary: DictionaryContractV1) => {
            dictionaries[dictionary.uri] = dictionary;
          });
        } else {
          console.error(`Failed to fetch dictionaries for URI: ${uri}`);
        }
      } catch (error) {
        console.error(`Error fetching dictionaries for URI: ${uri}`, error);
      }
    }),
  );

  return dictionaries;
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
  languageCode: string | null,
) {
  console.log('languageCode', languageCode);
  const response = await api.api.dictionaryV1ClassesList({
    Uri: location,
    UseNestedClasses: false,
    ClassType: 'Class',
    Offset: offset,
    Limit: CLASS_ITEM_PAGE_SIZE,
    languageCode: languageCode || undefined,
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.data;
}

const fetchAllDictionaryClasses = async (api: BsddApi<any>, location: string, languageCode: string) => {
  const classes = [];
  let offset = 0;

  const initialData = await fetchDictionaryClassData(api, location, offset, languageCode);
  const totalCount = initialData.classesTotalCount;
  if (totalCount === null || totalCount === undefined) {
    throw new Error('Total count is null or undefined');
  }
  classes.push(...(initialData.classes ?? []));

  const fetchPromises = [];
  for (offset = CLASS_ITEM_PAGE_SIZE; offset < totalCount; offset += CLASS_ITEM_PAGE_SIZE) {
    fetchPromises.push(fetchDictionaryClassData(api, location, offset, languageCode));
  }

  const results = await Promise.all(fetchPromises);
  results.forEach((data) => {
    classes.push(...(data.classes ?? []));
  });

  return classes;
};

export const fetchDictionaryClasses = createAsyncThunk(
  'bsdd/fetchDictionaryClasses',
  async ({ location, languageCode }: { location: string; languageCode: string }, { getState, dispatch }) => {
    const state = getState() as RootState;

    if (state.bsdd.dictionaryClasses[location]) {
      return state.bsdd.dictionaryClasses[location];
    }

    if (fetchPromisesCache[location]) {
      return fetchPromisesCache[location];
    }

    const api = selectBsddApi(state);
    if (!api) {
      throw new Error('BsddApi is not initialized');
    }

    const fetchPromise = fetchAllDictionaryClasses(api, location, languageCode)
      .then((classes) => {
        dispatch({ type: 'bsdd/addDictionaryClasses', payload: { uri: location, data: classes } });
        return classes;
      })
      .finally(() => {
        delete fetchPromisesCache[location];
      });

    fetchPromisesCache[location] = fetchPromise;
    return fetchPromise;
  },
);

export type FetchAndStoreAllDictionaryClassesParameters = {
  dictionaryUris?: string[];
  languageCode: string;
};

export const fetchAndStoreDictionaryClasses = createAsyncThunk(
  'bsdd/fetchAndStoreAllDictionaryClasses',
  async (params: FetchAndStoreAllDictionaryClassesParameters, { dispatch, rejectWithValue }) => {
    const { dictionaryUris, languageCode } = params;
    if (!dictionaryUris || dictionaryUris.length === 0) {
      return rejectWithValue('No dictionary URIs provided');
    }

    try {
      await Promise.all(dictionaryUris.map((uri) => dispatch(fetchDictionaryClasses({ location: uri, languageCode }))));
      return 'Successfully fetched and stored all dictionary classes';
    } catch (error) {
      return rejectWithValue('Failed to fetch dictionary classes');
    }
  },
);

export const updateDictionaries = createAsyncThunk(
  'bsdd/updateDictionaries',
  async (activeDictionaryLocations: string[]) => activeDictionaryLocations,
);

const bsddSlice = createSlice({
  name: 'bsdd',
  initialState,
  reducers: {
    resetState: () => initialState,
    setMainDictionaryClassification: (state, action: PayloadAction<ClassContractV1 | null>) => {
      state.mainDictionaryClassification = action.payload;
    },
    setClasses: (state, action: PayloadAction<{ [key: string]: ClassContractV1 }>) => {
      console.log('setClasses', action.payload);
      state.classes = action.payload;
    },
    // addClass: (state, action: PayloadAction<{ uri: string; data: ClassContractV1 }>) => {
    //   console.log('addClass', action.payload);
    //   state.classes[action.payload.uri] = action.payload.data;
    // },
    addDictionaryClasses: (state, action: PayloadAction<{ uri: string; data: ClassListItemContractV1[] }>) => {
      if (state.dictionaryClasses[action.payload.uri]) {
        state.dictionaryClasses[action.payload.uri] = [
          ...state.dictionaryClasses[action.payload.uri],
          ...action.payload.data,
        ];
      } else {
        state.dictionaryClasses[action.payload.uri] = action.payload.data;
      }
    },
    addDictionary: (state, action: PayloadAction<DictionaryContractV1>) => {
      state.dictionaries[action.payload.uri] = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllDictionaries.pending, (state) => {
        state.loaded = false;
      })
      .addCase(
        fetchAllDictionaries.fulfilled,
        (state, action: PayloadAction<{ [key: string]: DictionaryContractV1 }>) => {
          state.dictionaries = action.payload;
          state.loaded = true;
        },
      )
      .addCase(fetchDictionaryClasses.rejected, (state, action) => {
        console.error('fetch dictionary classes failed', action.error);
        state.loaded = true;
      })
      .addCase(updateDictionaries.fulfilled, (state: BsddState, action) => {
        const activeLocations = action.payload;
        state.dictionaries = Object.keys(state.dictionaries)
          .filter((uri) => activeLocations.includes(uri))
          .reduce((acc: { [uri: string]: DictionaryContractV1 }, uri) => {
            acc[uri] = state.dictionaries[uri];
            return acc;
          }, {});
      });
  },
});

export const fetchRelatedClasses = createAsyncThunk(
  'bsdd/fetchRelatedClasses',
  async (relatedClassUris: string[], { getState, dispatch }) => {
    const state = getState() as RootState;

    if (!bsddApi) {
      throw new Error('BsddApi is not initialized');
    }

    const classesAccumulator: { [key: string]: ClassContractV1 } = {};

    const fetchClass = async (relatedClassUri: string) => {
      if (bsddApi && bsddApi.api) {
        const response = await bsddApi.api.classV1List({
          Uri: relatedClassUri,
          IncludeClassProperties: true,
          IncludeChildClassReferences: true,
          IncludeClassRelations: true,
          languageCode: state.settings.language || undefined,
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const { data } = response;
        classesAccumulator[relatedClassUri] = data;
      } else {
        throw new Error('bsddApi or bsddApi.api is not initialized');
      }
    };

    const classFetchPromises = relatedClassUris.map(fetchClass);
    await Promise.all(classFetchPromises);

    dispatch({ type: 'bsdd/setClasses', payload: classesAccumulator });
  },
);

export const selectMainDictionaryClassification = (state: RootState) => state.bsdd.mainDictionaryClassification;
export const selectDictionary = (state: RootState, uri: string) => state.bsdd.dictionaries[uri];
export const selectDictionaryClasses = (state: RootState, location: string) => state.bsdd.dictionaryClasses[location];
export const selectBsddDictionaries = (state: RootState) => state.bsdd.dictionaries;
export const selectBsddDataLoaded = (state: RootState) => state.bsdd.loaded;
export const selectdictionaryClasses = (state: RootState) => state.bsdd.dictionaryClasses;
export const selectGroupedClassRelations = (state: RootState) => state.bsdd.groupedClassRelations;
export const selectClasses = (state: RootState) => state.bsdd.classes;

export const selectGroupedClasses = createSelector([selectClasses], (classes) => {
  type GroupedClasses = { [key: string]: ClassContractV1[] };
  const classesArray = Object.values(classes);
  const grouped = classesArray.reduce<GroupedClasses>((acc, currentClass) => {
    const { dictionaryUri } = currentClass;
    if (dictionaryUri) {
      if (!acc[dictionaryUri]) {
        acc[dictionaryUri] = [];
      }
      acc[dictionaryUri].push(currentClass);
    }
    return acc;
  }, {});

  return grouped;
});

export const { resetState, setMainDictionaryClassification, addDictionaryClasses, addDictionary } = bsddSlice.actions;

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
