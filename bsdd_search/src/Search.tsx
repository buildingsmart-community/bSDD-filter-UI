import { Autocomplete, CloseButton } from '@mantine/core';
import { useDebouncedValue } from '@mantine/hooks';
import { KeyboardEvent, useCallback, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { BsddApi } from '../../common/src/BsddApi/BsddApi';
import { RequestParams } from '../../common/src/BsddApi/BsddApiBase';
import { headers } from '../../common/src/BsddApi/BsddApiWrapper';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { fetchClasses, updateMainDictionaryClassificationUri } from './features/bsdd/bsddSlice';
import { selectMainDictionary } from './features/settings/settingsSlice';

interface Option {
  label: string;
  value: string;
}

interface Props {
  api: BsddApi<unknown>;
  defaultSelection: Option | undefined;
}

function Search({ api, defaultSelection }: Props) {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const [searchOptions, setSearchOptions] = useState<Option[]>([]);
  const mainDictionary = useAppSelector(selectMainDictionary);

  const inputRef = useRef<HTMLInputElement>(null);

  const [selected, setSelected] = useState<Option | undefined>(undefined);
  const [searchValue, setSearchValue] = useState('');
  const [debouncedSearchValue] = useDebouncedValue(searchValue, 300);
  const [userUpdated, setUserUpdated] = useState(false);

  useEffect(() => {
    if (defaultSelection) {
      setSelected(defaultSelection);
      setSearchValue(defaultSelection.label);
    }
  }, [defaultSelection]);

  const handleOnChange = useCallback((value: string) => {
    setSearchValue(value);
  }, []);

  const handleOptionSubmit = useCallback(
    (value: string) => {
      const selectedOption = searchOptions.find((option) => option.value === value);
      if (selectedOption) {
        setSelected(selectedOption);
        setUserUpdated(true);
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
    [searchOptions, handleOptionSubmit],
  );

  useEffect(() => {
    if (defaultSelection && !userUpdated) {
      setSearchValue(defaultSelection.label);
      setSelected(defaultSelection);
    }
  }, [defaultSelection, userUpdated]);

  useEffect(() => {
    if (mainDictionary) {
      dispatch(fetchClasses([]));
      const params: RequestParams = {
        headers,
      };

      const queryParameters = {
        SearchText: debouncedSearchValue,
        DictionaryUri: mainDictionary.ifcClassification.location,
      };

      api.api
        .searchInDictionaryV1List(queryParameters, params)
        .then((response) => {
          const searchResult = response.data;
          if (searchResult) {
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
          } else {
            console.error('API response data is null', response);
          }
        })
        .catch((error) => {
          console.error('API request failed', error);
        });
    } else {
      setSearchOptions([]);
    }
  }, [api.api, debouncedSearchValue, dispatch, mainDictionary]);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  useEffect(() => {
    if (selected) {
      dispatch(updateMainDictionaryClassificationUri(selected.value));
    } else {
      dispatch(updateMainDictionaryClassificationUri(null));
    }
  }, [dispatch, selected]);

  const handleClear = useCallback(() => {
    handleOnChange('');
    if (inputRef.current) {
      inputRef.current.focus();
    }
    setSelected(undefined);
  }, [handleOnChange]);

  return (
    <Autocomplete
      label={`${t('searchMainDictionaryLabel')} ${mainDictionary ? mainDictionary.ifcClassification.name : ''}`}
      data={searchOptions}
      placeholder="bSDD search..."
      value={searchValue}
      onChange={handleOnChange}
      onOptionSubmit={handleOptionSubmit}
      onKeyDown={handleKeyDown}
      ref={inputRef}
      style={{ width: '100%' }}
      rightSection={
        <CloseButton
          size="sm"
          onMouseDown={(event) => {
            event.preventDefault();
          }}
          onClick={handleClear}
          aria-label="Clear value"
        />
      }
    />
  );
}

export default Search;
