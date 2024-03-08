import { Autocomplete } from '@mantine/core';
import { useDebouncedValue } from '@mantine/hooks';
import { KeyboardEvent, useCallback, useEffect, useRef, useState } from 'react';

import { BsddApi } from '../../common/src/BsddApi/BsddApi';
import { RequestParams } from '../../common/src/BsddApi/BsddApiBase';
import { useAppSelector } from './app/hooks';
import { selectActiveDictionaries, selectMainDictionary } from './features/settings/settingsSlice';

const SEARCH_LIMIT = 25;

interface Option {
  label: string;
  value: string;
}

interface Props {
  api: BsddApi<unknown>;
  defaultValue: Option | undefined;
  setActiveClassificationUri: (value: string) => void;
}

const searchInSingleDictionary = (
  api: BsddApi<unknown>,
  activeDictionaries: Option[],
  params: RequestParams,
  inputValue: string,
  callback: (options: any[]) => void,
) => {
  const queryParameters = {
    SearchText: inputValue,
    DictionaryUri: activeDictionaries[0].value,
    Limit: SEARCH_LIMIT,
    // LanguageCode: 'NL',
    // RelatedIfcEntities: 'IfcWall',
  };
  api.api.searchInDictionaryV1List(queryParameters, params).then((response) => {
    const searchResult = response.data;
    if (searchResult.count) {
      const dictionaryClasses = searchResult.dictionary?.classes;
      if (dictionaryClasses) {
        callback(
          dictionaryClasses.map((c) => ({
            value: c.uri,
            label: c.name,
          })),
        );
      }
    }
  });
};

const searchInMultipleDictionaries = (
  api: BsddApi<unknown>,
  activeDictionaries: Option[],
  params: RequestParams,
  inputValue: string,
  callback: (options: any[]) => void,
) => {
  const queryParameters = {
    SearchText: inputValue,
    DictionaryUris: [activeDictionaries[0].value],
    Limit: SEARCH_LIMIT,
    // DictionaryUris: activeDomains.map((domain) => domain.value),
    // LanguageCode: 'NL',
    // RelatedIfcEntities: 'IfcWall',
  };
  api.api.classSearchV1List(queryParameters, params).then((response) => {
    if (response.data.classes) {
      callback(
        response.data.classes.map((c) => ({
          value: c.uri,
          label: c.name,
        })),
      );
    }
  });
};

function Search({ api, defaultValue: defaultSelection, setActiveClassificationUri }: Props) {
  const [searchOptions, setSearchOptions] = useState<Option[]>([]);
  const [opened, setOpened] = useState<boolean>(false);
  const [activeDictionaries] = useAppSelector(selectActiveDictionaries);
  const mainDictionary = useAppSelector(selectMainDictionary);

  const inputRef = useRef(null);

  // Use a ref to store the initial value of defaultSelection
  const initialDefaultSelection = useRef(defaultSelection);

  // Only use initialDefaultSelection.current to set the initial state
  const [selected, setSelected] = useState<Option | undefined>(initialDefaultSelection.current);
  const [searchValue, setSearchValue] = useState(initialDefaultSelection.current?.label || '');
  const [debouncedSearchValue] = useDebouncedValue(searchValue, 300);
  const [userUpdated, setUserUpdated] = useState(false);

  const handleOnChange = useCallback((value: string) => {
    setSearchValue(value);
  }, []);

  const handleOptionSubmit = useCallback(
    (value: string) => {
      const selectedOption = searchOptions.find((option) => option.value === value);
      if (selectedOption) {
        setSelected(selectedOption);
        setOpened(false);
        setUserUpdated(true); // The user has manually updated the selection
      }
    },
    [searchOptions],
  );

  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Enter' && searchOptions[0]) {
        setSearchValue(searchOptions[0].label);
        handleOptionSubmit(searchOptions[0].value);
        if (inputRef.current) {
          (inputRef.current as any).blur();
        }
      }
    },
    [searchOptions, handleOptionSubmit, inputRef],
  );

  // useEffect(() => {
  //   setSelected(defaultSelection);
  // }, [defaultSelection]);

  useEffect(() => {
    if (defaultSelection && !userUpdated) {
      setSearchValue(defaultSelection.label);
      // setSearchOptions([defaultSelection]);
      setSelected(defaultSelection);
    }
  }, [defaultSelection, selected, userUpdated]);

  useEffect(() => {
    if (debouncedSearchValue !== '' && mainDictionary) {
      const params: RequestParams = {
        headers: { Accept: 'text/plain' },
      };

      const queryParameters = {
        SearchText: debouncedSearchValue,
        DictionaryUri: mainDictionary.ifcClassification.location,
        Limit: SEARCH_LIMIT,
      };

      api.api.searchInDictionaryV1List(queryParameters, params).then((response) => {
        const searchResult = response.data;
        if (searchResult.count) {
          const dictionaryClasses = searchResult.dictionary?.classes;
          if (dictionaryClasses) {
            setSearchOptions(
              dictionaryClasses
                .filter((c) => c.uri && c.name)
                .map(
                  (c) =>
                    ({
                      value: c.uri,
                      label: c.name,
                    } as Option),
                ),
            );
          }
        }
      });
    } else {
      setSearchOptions([]);
    }
  }, [api.api, debouncedSearchValue, mainDictionary]);

  useEffect(() => {
    if (inputRef.current) {
      (inputRef.current as any).focus();
    }
  }, []);

  // useEffect(() => {
  //   if (!defaultSelection) return;
  //   setSearchValue(defaultSelection?.label || '');
  //   setSelected(defaultSelection);
  //   setOpened(false);
  // }, [defaultSelection]);

  useEffect(() => {
    if (selected) {
      setActiveClassificationUri(selected.value);
    }
  }, [selected, setActiveClassificationUri]);

  return (
    <Autocomplete
      data={searchOptions}
      placeholder="bSDD search..."
      value={searchValue}
      onChange={handleOnChange}
      onOptionSubmit={handleOptionSubmit}
      onKeyDown={handleKeyDown}
      dropdownOpened={opened}
      onDropdownOpen={() => setOpened(true)}
      ref={inputRef}
      style={{ width: '100%' }}
    />
  );
}

export default Search;
