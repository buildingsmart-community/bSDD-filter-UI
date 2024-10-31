import { Autocomplete, CloseButton, ComboboxItem, OptionsFilter } from '@mantine/core';
import { useDebouncedValue } from '@mantine/hooks';
import { KeyboardEvent, useCallback, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { useAppDispatch, useAppSelector } from '../common/app/hooks';
import { BsddApi } from '../common/BsddApi/BsddApi';
import {
  fetchClasses,
  searchInDictionary,
  selectSearchResult,
  updateMainDictionaryClassificationUri,
} from '../common/slices/bsddSlice';
import { selectMainDictionary } from '../common/slices/settingsSlice';

interface Option {
  label: string;
  value: string;
  synonyms?: string[];
}

interface Props {
  api: BsddApi<unknown>;
  defaultSelection: Option | undefined;
}

function Search({ api, defaultSelection }: Props) {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const mainDictionary = useAppSelector(selectMainDictionary);
  const searchResult = useAppSelector(selectSearchResult);

  const [searchOptions, setSearchOptions] = useState<Option[]>([]);

  const inputRef = useRef<HTMLInputElement>(null);

  const [selected, setSelected] = useState<Option | undefined>(undefined);
  const [searchValue, setSearchValue] = useState('');
  const [debouncedSearchValue] = useDebouncedValue(searchValue, 300);
  const [defaultSet, setDefaultSet] = useState(false); // New state variable
  const [highlightedIndex, setHighlightedIndex] = useState<number>(-1); // State to track highlighted option

  // Set default selection only once
  useEffect(() => {
    if (defaultSelection && !defaultSet && searchOptions.length > 0) {
      const selectedOption = searchOptions.find((option) => option.value === defaultSelection.value);
      if (selectedOption) {
        setSelected(defaultSelection);
        setSearchValue(defaultSelection.label);
        if (inputRef.current) {
          inputRef.current.blur(); // Close the popout
        }
      } else {
        setSearchValue(defaultSelection.label);
        if (inputRef.current) {
          inputRef.current.focus(); // Focus the input
          inputRef.current.setSelectionRange(0, inputRef.current.value.length); // Select the text
        }
      }
      setDefaultSet(true);
    }
  }, [defaultSelection, defaultSet, searchOptions]);

  const handleOnChange = useCallback(
    (value: string) => {
      setSearchValue(value);
      setHighlightedIndex(-1); // Reset highlighted index to -1 on change

      // Filter searchOptions to include options that match the synonym
      const filteredOptions = searchOptions.filter(
        (option) =>
          option.label.toLowerCase().includes(value.toLowerCase().trim()) ||
          option.synonyms?.some((synonym) => synonym.toLowerCase().includes(value.toLowerCase().trim())),
      );

      setSearchOptions(filteredOptions);
    },
    [searchOptions],
  );

  const handleOptionSubmit = useCallback(
    (value: string) => {
      const selectedOption = searchOptions.find((option) => option.value === value);
      if (selectedOption) {
        setSelected(selectedOption);
        if (inputRef.current) {
          inputRef.current.blur(); // Close the popout
        }
      }
    },
    [searchOptions],
  );

  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Enter') {
        if (highlightedIndex >= 0 && highlightedIndex < searchOptions.length) {
          const highlightedOption = searchOptions[highlightedIndex];
          setSearchValue(highlightedOption.label);
          handleOptionSubmit(highlightedOption.value);
        } else if (highlightedIndex === -1 && searchOptions.length > 0) {
          const firstOption = searchOptions[0];
          setSearchValue(firstOption.label);
          handleOptionSubmit(firstOption.value);
        }
        if (inputRef.current) {
          inputRef.current.blur();
        }
      } else if (event.key === 'ArrowDown') {
        setHighlightedIndex((prevIndex) => Math.min(prevIndex + 1, searchOptions.length - 1));
      } else if (event.key === 'ArrowUp') {
        setHighlightedIndex((prevIndex) => Math.max(prevIndex - 1, -1));
      }
    },
    [highlightedIndex, searchOptions, handleOptionSubmit],
  );

  // Fetch search options based on debounced search value
  useEffect(() => {
    if (mainDictionary) {
      const queryParameters = {
        SearchText: debouncedSearchValue,
        DictionaryUri: mainDictionary.ifcClassification.location,
      };

      dispatch(searchInDictionary(queryParameters));
    } else {
      dispatch(fetchClasses([]));
    }
  }, [dispatch, debouncedSearchValue, mainDictionary]);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  useEffect(() => {
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
                    synonyms: c.synonyms || [], // Include synonyms if available
                  } as Option),
              ),
          );
        }
      }
    } else {
      setSearchOptions([]);
    }
  }, [searchResult]);

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

  /**
   * Custom filter function for the Autocomplete component.
   * Filters options based on the search value against the option's label and synonyms.
   *
   * @param {Object} params - The parameters for the filter function.
   * @param {Option[]} params.options - The array of options to filter.
   * @param {string} params.search - The current search query.
   * @returns {Option[]} - The filtered array of options.
   */
  const optionsFilter: OptionsFilter = ({ options, search }) => {
    const splittedSearch = search.toLowerCase().trim().split(' ');
    return (options as Option[]).filter((option) => {
      const words = option.label.toLowerCase().trim().split(' ');
      const synonyms = option.synonyms?.map((synonym) => synonym.toLowerCase().trim().split(' ')).flat() || [];
      return splittedSearch.every(
        (searchWord) =>
          words.some((word) => word.includes(searchWord)) || synonyms.some((synonym) => synonym.includes(searchWord)),
      );
    });
  };

  return (
    <Autocomplete
      label={`${t('searchMainDictionaryLabel')} ${mainDictionary ? mainDictionary.ifcClassification.name : ''}`}
      data={searchOptions}
      placeholder="bSDD search..."
      value={searchValue}
      onChange={handleOnChange}
      onOptionSubmit={handleOptionSubmit}
      filter={optionsFilter}
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
