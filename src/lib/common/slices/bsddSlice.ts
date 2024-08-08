import { createAsyncThunk, createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { RootState } from '../app/store';
import { BsddApi } from '../BsddApi/BsddApi';
import {
  ClassContractV1,
  ClassListItemContractV1,
  ClassPropertyContractV1,
  DictionaryContractV1,
  RequestParams,
  SearchInDictionaryResponseContractV1,
} from '../BsddApi/BsddApiBase';
import { headers } from '../BsddApi/BsddApiWrapper';

const CLASS_ITEM_PAGE_SIZE = 1000;
const DICTIONARIES_PAGE_SIZE = 1000;

export interface BsddState {
  mainDictionaryClassification: ClassContractV1 | null;
  mainDictionaryClassificationUri: string | null;
  classes: { [key: string]: ClassContractV1 };
  propertyNamesByLanguage: { [languageCode: string]: { [propertyUri: string]: string } };
  dictionaries: { [key: string]: DictionaryContractV1 };
  dictionaryClasses: { [key: string]: ClassListItemContractV1[] };
  dictionariesLoaded: boolean;
  groupedClassRelations: { [key: string]: ClassContractV1[] };
  searchResult: SearchInDictionaryResponseContractV1 | null;
  searchInDictionaryLoading: boolean;
  searchInDictionaryResults: any;
}

const apiBaseUrl = import.meta.env.VITE_BSDD_ENVIRONMENT;
const bsddApi = new BsddApi(apiBaseUrl);

const fetchPromisesCache: Partial<Record<string, Promise<ClassListItemContractV1[]>>> = {};

const initialState: BsddState = {
  mainDictionaryClassification: null,
  mainDictionaryClassificationUri: null,
  classes: {},
  propertyNamesByLanguage: {},
  dictionaries: {},
  dictionaryClasses: {},
  dictionariesLoaded: false,
  groupedClassRelations: {},
  searchResult: null,
  searchInDictionaryLoading: false,
  searchInDictionaryResults: null,
};

export type FetchAllDictionaryParameters = {
  bsddApiEnvironment: string;
  includeTestDictionaries: boolean;
};

export interface SearchResult {
  count: number;
  dictionary?: {
    classes: Array<{ uri: string; name: string }>;
  };
}

/**
 * Fetches dictionaries from the bSDD API.
 *
 * @param includeTestDictionaries - Whether to include test dictionaries.
 * @param thunkAPI - The Redux Thunk API.
 * @returns A promise that resolves to an object containing the fetched dictionaries.
 * @throws An error if there is an HTTP error or a bSDD API error.
 */
export const fetchDictionaries = createAsyncThunk<
  { [key: string]: DictionaryContractV1 },
  boolean | undefined,
  { rejectValue: string }
>('bsdd/fetchDictionaries', async (includeTestDictionaries, { getState, rejectWithValue }) => {
  const state = getState() as RootState;
  const includeTest = includeTestDictionaries ?? state.settings.includeTestDictionaries;

  const limit = DICTIONARIES_PAGE_SIZE;
  const offset = 0;

  try {
    const fetchPage = async (pageOffset: number) => {
      const response = await bsddApi.api.dictionaryV1List({
        IncludeTestDictionaries: includeTest,
        Limit: limit,
        Offset: pageOffset,
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.data;
    };

    const initialResponse = await fetchPage(offset);
    const { dictionaries: initialDictionaries, totalCount } = initialResponse;

    const totalPages = Math.ceil((totalCount ?? 0) / limit);
    const fetchPromises = Array.from({ length: totalPages - 1 }, (_, i) => fetchPage((i + 1) * limit));

    const results = await Promise.all([initialResponse, ...fetchPromises]);
    const allDictionaries = results.flatMap((result) => result.dictionaries ?? []);

    const out = allDictionaries.reduce((acc: { [key: string]: DictionaryContractV1 }, item) => {
      acc[item.uri] = item;
      return acc;
    }, {});

    return out;
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    return rejectWithValue(`Failed to fetch dictionaries: ${errorMessage}`);
  }
});

/**
 * Fetches a specific batch of dictionary class data from the API.
 *
 * @param location - The location of the dictionary.
 * @param offset - The offset for pagination.
 * @returns The fetched dictionary class data.
 * @throws Error if there is an HTTP error.
 */
async function fetchDictionaryClassData(location: string, offset: number, languageCode: string | undefined) {
  const response = await bsddApi.api.dictionaryV1ClassesList(
    {
      Uri: location,
      UseNestedClasses: false,
      ClassType: 'Class',
      Offset: offset,
      Limit: CLASS_ITEM_PAGE_SIZE,
      languageCode,
    },
    { headers },
  );

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.data;
}

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
    const languageCode = state.settings.language;

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
      const classes: ClassListItemContractV1[] = [];
      let offset = 0;

      // Fetch the initial data
      const initialData = await fetchDictionaryClassData(location, offset, languageCode);
      const totalCount = initialData.classesTotalCount;
      if (totalCount === null || totalCount === undefined) {
        throw new Error('Total count is null or undefined');
      }
      classes.push(...(initialData.classes ?? []));

      // Fetch the remaining data in parallel
      const fetchPromises = [];
      for (offset = CLASS_ITEM_PAGE_SIZE; offset < totalCount; offset += CLASS_ITEM_PAGE_SIZE) {
        fetchPromises.push(
          fetchDictionaryClassData(location, offset, languageCode).then((data) => {
            classes.push(...(data.classes ?? []));
          }),
        );
      }

      await Promise.all(fetchPromises);

      dispatch({ type: 'bsdd/addDictionaryClasses', payload: { uri: location, classes } });
      return classes;
    })();

    fetchPromisesCache[location] = fetchPromise;
    return fetchPromise;
  },
);

export const fetchAndStoreDictionaryClasses = createAsyncThunk(
  'bsdd/fetchAndStoreAllDictionaryClasses',
  async (dictionaryUris: string[], { dispatch, rejectWithValue }) => {
    if (!dictionaryUris || dictionaryUris.length === 0) {
      return rejectWithValue('No dictionary URIs provided');
    }

    try {
      await Promise.all(dictionaryUris.map((uri) => dispatch(fetchDictionaryClasses(uri))));
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

// Workaround for bSDD not supporting translated property names on the class endpoint
export const updatePropertyNaturalLanguageNames = createAsyncThunk(
  'bsdd/updatePropertyNaturalLanguageNames',
  async ({ classProperties, languageCode }: { classProperties: ClassPropertyContractV1[]; languageCode: string }) => {
    const propertyNames: { [propertyUri: string]: string } = {};

    const fetchPropertyDetails = async (property: ClassPropertyContractV1) => {
      if (property.propertyUri) {
        try {
          const response = await bsddApi.api.propertyV4List(
            {
              uri: property.propertyUri,
              languageCode,
              includeClasses: false,
            },
            { headers },
          );

          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }

          const { data } = response;

          // Use the translated name if available, otherwise use the class property name
          propertyNames[property.propertyUri] = data.name || property.name;
        } catch (error) {
          console.error('Error fetching property details:', error);
          // Use the class property name as a fallback in case of an error
          propertyNames[property.propertyUri] = property.name;
        }
      }
    };

    const propertyFetchPromises = classProperties.map(fetchPropertyDetails);
    await Promise.all(propertyFetchPromises);

    return { languageCode, propertyNames };
  },
);

export const searchInDictionary = createAsyncThunk(
  'bsdd/searchInDictionary',
  async (queryParameters: any, { rejectWithValue }) => {
    try {
      const params: RequestParams = {
        headers,
      };

      const response = await bsddApi.api.searchInDictionaryV1List(queryParameters, params);
      console.log('search in dictionary response', response.data);
      return response.data;
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
      return rejectWithValue(`Failed to search dictionary: ${errorMessage}`);
    }
  },
);

const bsddSlice = createSlice({
  name: 'bsdd',
  initialState,
  reducers: {
    resetState: () => initialState,
    setMainDictionaryClassification: (state, action: PayloadAction<ClassContractV1 | null>) => {
      state.mainDictionaryClassification = action.payload;
    },
    setMainDictionaryClassificationUri: (state, action: PayloadAction<string | null>) => {
      state.mainDictionaryClassificationUri = action.payload;
    },
    setClasses: (state, action: PayloadAction<{ [key: string]: ClassContractV1 }>) => {
      state.classes = action.payload;
    },
    addDictionaryClasses: (state, action: PayloadAction<{ uri: string; data: ClassListItemContractV1[] }>) => {
      state.dictionaryClasses[action.payload.uri] = action.payload.data;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        updatePropertyNaturalLanguageNames.fulfilled,
        (state, action: PayloadAction<{ languageCode: string; propertyNames: { [propertyUri: string]: string } }>) => {
          const { languageCode, propertyNames } = action.payload;
          state.propertyNamesByLanguage[languageCode] = propertyNames;
        },
      )
      .addCase(fetchDictionaries.pending, (state) => {
        state.dictionariesLoaded = false;
      })
      .addCase(fetchDictionaries.fulfilled, (state, action: PayloadAction<{ [key: string]: DictionaryContractV1 }>) => {
        console.log('fetch dictionaries fulfilled', action.payload);
        state.dictionaries = action.payload;
        state.dictionariesLoaded = true;
      })
      .addCase(fetchDictionaryClasses.rejected, (state, action) => {
        console.error('fetch dictionary classes failed', action.error);
        state.dictionariesLoaded = true;
      })
      .addCase(searchInDictionary.pending, (state) => {
        state.searchInDictionaryLoading = true;
      })
      .addCase(searchInDictionary.fulfilled, (state, action: PayloadAction<SearchInDictionaryResponseContractV1>) => {
        state.searchResult = action.payload;
        state.searchInDictionaryResults = action.payload;
        state.searchInDictionaryLoading = false;
      })
      .addCase(searchInDictionary.rejected, (state, action) => {
        console.error('search in dictionary failed', action.error);
        state.searchInDictionaryLoading = false;
      });
  },
});

/**
 * Fetches a classes from the bsddApi without any relationships and properties
 *
 * @param relatedClassUris - An array of class URIs to fetch.
 * @param getState - A function to get the current state.
 * @param dispatch - A function to dispatch actions.
 * @returns A promise that resolves to an object containing the fetched classes.
 * @throws An error if there is an HTTP error or a bSDD API error.
 */
export const fetchClasses = createAsyncThunk(
  'bsdd/fetchClasses',
  async (relatedClassUris: string[], { getState, dispatch }) => {
    const state = getState() as RootState;
    const languageCode = state.settings.language;

    const classesAccumulator: { [key: string]: ClassContractV1 } = { ...state.bsdd.classes };

    const fetchClass = async (relatedClassUri: string) => {
      if (classesAccumulator[relatedClassUri]) {
        return;
      }

      const response = await bsddApi.api.classV1List({
        Uri: relatedClassUri,
        languageCode,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const { data } = response;
      classesAccumulator[relatedClassUri] = data;
    };

    const classFetchPromises = relatedClassUris.map(fetchClass);
    await Promise.all(classFetchPromises);

    dispatch({ type: 'bsdd/setClasses', payload: classesAccumulator });
  },
);

export const selectMainDictionaryClassification = (state: RootState) => state.bsdd.mainDictionaryClassification;
export const selectMainDictionaryClassificationUri = (state: RootState) => state.bsdd.mainDictionaryClassificationUri;
export const selectDictionary = (state: RootState, uri: string) => state.bsdd.dictionaries[uri];
export const selectDictionaryClasses = (state: RootState, location: string) => state.bsdd.dictionaryClasses[location];
export const selectBsddDictionaries = (state: RootState) => state.bsdd.dictionaries;
export const selectBsddDictionariesLoaded = (state: RootState) => state.bsdd.dictionariesLoaded;
export const selectdictionaryClasses = (state: RootState) => state.bsdd.dictionaryClasses;
export const selectGroupedClassRelations = (state: RootState) => state.bsdd.groupedClassRelations;
export const selectClasses = (state: RootState) => state.bsdd.classes;
export const selectPropertyNamesByLanguage = (state: RootState) => state.bsdd.propertyNamesByLanguage;
export const selectSearchResult = (state: RootState) => state.bsdd.searchResult;

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

export const { resetState, setMainDictionaryClassification, setMainDictionaryClassificationUri, addDictionaryClasses } =
  bsddSlice.actions;

// fetch the main dictionary class including all relationships and properties
export const fetchMainDictionaryClassification = createAsyncThunk(
  'bsdd/fetchMainDictionaryClassification',
  async (classificationUri: string, { getState, dispatch }) => {
    if (!bsddApi) {
      throw new Error('BsddApi is not initialized');
    }
    const state = getState() as RootState;
    const languageCode = state.settings.language;

    const params: RequestParams = {
      headers,
    };

    const queryParameters = {
      Uri: classificationUri,
      IncludeClassRelations: true,
      IncludeClassProperties: true,
      languageCode,
    };

    try {
      const response = await bsddApi.api.classV1List(queryParameters, params);
      if (response.status !== 200) {
        console.error(`API request failed with status ${response.status}`);
        return null;
      }
      const classification = response.data;
      dispatch(setMainDictionaryClassification(classification));

      const classProperties = classification?.classProperties;
      if (classProperties && classProperties.length > 0) {
        dispatch(updatePropertyNaturalLanguageNames({ classProperties, languageCode }));
      }

      return classification;
    } catch (err) {
      console.error('Error fetching classification:', err);
      return null;
    }
  },
);

export const updateMainDictionaryClassificationUri = createAsyncThunk(
  'bsdd/updateMainDictionaryClassificationUri',
  async (uri: string | null, { dispatch, getState }) => {
    const state = getState() as RootState;
    if (uri !== state.bsdd.mainDictionaryClassificationUri) {
      dispatch(bsddSlice.actions.setMainDictionaryClassificationUri(uri));
      if (uri === null) {
        dispatch(bsddSlice.actions.setMainDictionaryClassification(null));
      } else {
        // Fetch the main dictionary classification based on the URI
        const action = await dispatch(fetchMainDictionaryClassification(uri));
        const mainDictionaryClassification = action.payload as ClassContractV1 | null;
        dispatch(bsddSlice.actions.setMainDictionaryClassification(mainDictionaryClassification));

        if (mainDictionaryClassification?.classRelations) {
          const relatedClassUris = mainDictionaryClassification.classRelations.map(
            (relation) => relation.relatedClassUri,
          );
          relatedClassUris.push(mainDictionaryClassification.uri);
          await dispatch(fetchClasses(relatedClassUris));
        }
      }
    }
  },
);

export const bsddReducer = bsddSlice.reducer;
