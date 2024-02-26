import { useEffect, useState, KeyboardEvent, useRef, useCallback } from 'react';
import { BsddApi } from '../../../common/src/BsddApi/BsddApi';
import { RequestParams } from '../../../common/src/BsddApi/BsddApiBase';
import { Autocomplete, Combobox } from '@mantine/core';
import { useDebouncedValue } from '@mantine/hooks';

const SEARCH_LIMIT = 25;

interface Option {
  label: string;
  value: string;
}

interface Props {
  api: BsddApi<unknown>;
  activeDomains: Option[];
  defaultValue: Option | undefined;
  setActiveClassificationUri: (value: string) => void;
  accessToken: string;
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

function Search({
  api,
  activeDomains: activeDictionaries,
  defaultValue: defaultSelection,
  setActiveClassificationUri,
  accessToken,
}: Props) {
  const [selected, setSelected] = useState<Option | undefined>(defaultSelection);
  const [options, setOptions] = useState<Option[]>([]);
  const [searchValue, setSearchValue] = useState('');
  const [debouncedSearchValue] = useDebouncedValue(searchValue, 300);
  const [opened, setOpened] = useState<boolean>(false);

  const inputRef = useRef(null);

  const params: RequestParams = {
    headers: { Accept: 'text/plain' },
  };

  if (accessToken !== '') {
    params.headers = { ...params.headers, Authorization: 'Bearer ' + accessToken };
  }

  const loadOptions = (inputValue: string) => {
    if (activeDictionaries.length === 1) {
      const callback = (options: any[]) => setOptions(options);
      searchInSingleDictionary(api, activeDictionaries, params, inputValue, callback);
    } else if (activeDictionaries.length > 2) {
      const callback = (options: any[]) => setOptions(options);
      searchInMultipleDictionaries(api, activeDictionaries, params, inputValue, callback);
    } else {
      setOptions([]);
    }
  };

  const handleOnChange = useCallback((value: string) => {
    setSearchValue(value);
  }, []);

  const handleOptionSubmit = useCallback(
    (value: string) => {
      const selectedOption = options.find((option) => option.value === value);
      if (selectedOption) {
        setSelected(selectedOption);
        setOpened(false);
      }
    },
    [options],
  );

  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Enter' && options[0]) {
        setSearchValue(options[0].label);
        handleOptionSubmit(options[0].value);
        if (inputRef.current) {
          (inputRef.current as any).blur();
        }
      }
    },
    [options, handleOptionSubmit, inputRef],
  );

  useEffect(() => {
    if (debouncedSearchValue !== '') {
      loadOptions(debouncedSearchValue);
    }
  }, [debouncedSearchValue]);

  useEffect(() => {
    if (inputRef.current) {
      (inputRef.current as any).focus();
    }
  }, []);

  useEffect(() => {
    if (defaultSelection) {
      setSearchValue(defaultSelection?.label || '');
      setSelected(defaultSelection);
      setOpened(false);
    }
  }, [defaultSelection]);

  useEffect(() => {
    if (selected) {
      setActiveClassificationUri(selected.value);
    }
  }, [selected]);

  return (
    <Autocomplete
      data={options}
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
