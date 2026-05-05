import { CloseButton, Combobox, Input, InputBase, useCombobox } from '@mantine/core';
import { useDebouncedValue } from '@mantine/hooks';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { useSearchInDictionary } from '../api/hooks/useSearchInDictionary';
import { useSettingsStore } from '../stores/settingsStore';

interface Option {
  label: string;
  value: string;
}

interface Props {
  defaultSelection: Option | undefined;
  onClassificationSelect: (uri: string | null) => void;
}

function Search({ defaultSelection, onClassificationSelect }: Props) {
  const { t } = useTranslation();
  const mainDictionary = useSettingsStore((s) => s.mainDictionary);

  const [search, setSearch] = useState(defaultSelection?.label || '');
  const [debouncedSearch] = useDebouncedValue(search, 300);
  const [options, setOptions] = useState<Option[]>([]);
  const [selected, setSelected] = useState<Option | null>(defaultSelection || null);

  const dictionaryUri = mainDictionary?.ifcClassification.location;
  const { data: searchResult } = useSearchInDictionary(dictionaryUri, debouncedSearch);

  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
    onDropdownOpen: () => combobox.focusSearchInput(),
  });

  useEffect(() => {
    if (defaultSelection) {
      setSearch(defaultSelection.label);
    }
  }, [defaultSelection]);

  useEffect(() => {
    if (searchResult?.count && searchResult.dictionary?.classes) {
      const filteredOptions = searchResult.dictionary.classes
        .filter((c) => c.uri && c.name)
        .map((c) => ({ value: c.uri as string, label: c.name as string }));
      setOptions(filteredOptions);

      // Automatically set the single option if only one result is returned
      if (filteredOptions.length === 1) {
        const singleOption = filteredOptions[0];
        setSelected(singleOption);
        setSearch(singleOption.label);
        onClassificationSelect(singleOption.value);
      }
    } else {
      setOptions([]);
    }
  }, [searchResult, onClassificationSelect]);

  useEffect(() => {
    if (selected) {
      onClassificationSelect(selected.value);
    } else {
      onClassificationSelect(null);
    }
  }, [selected, onClassificationSelect]);

  return (
    <Combobox
      store={combobox}
      withinPortal={false}
      onOptionSubmit={(val) => {
        const option = options.find((o) => o.value === val);
        if (option) {
          setSelected(option);
          setSearch(option.label);
          combobox.closeDropdown();
        }
      }}
    >
      <Combobox.Target>
        <InputBase
          label={`${t('searchMainDictionaryLabel')} ${mainDictionary ? mainDictionary.ifcClassification.name : ''}`}
          component="button"
          type="button"
          pointer
          style={{ width: '100%' }}
          rightSection={
            selected !== null ? (
              <CloseButton
                size="sm"
                onMouseDown={(event) => event.preventDefault()}
                onClick={(event) => {
                  event.stopPropagation();
                  setSelected(null);
                  setSearch('');
                  onClassificationSelect(null);
                  combobox.openDropdown();
                }}
                aria-label="Clear selection"
              />
            ) : (
              <Combobox.Chevron />
            )
          }
          onClick={() => combobox.toggleDropdown()}
        >
          {selected?.label || <Input.Placeholder>{t('searchMainDictionaryLabel')}</Input.Placeholder>}
        </InputBase>
      </Combobox.Target>

      <Combobox.Dropdown>
        <Combobox.Search
          value={search}
          onChange={(e) => setSearch(e.currentTarget.value)}
          placeholder={t('searchMainDictionaryLabel')}
        />
        <Combobox.Options>
          {options.length > 0 ? (
            options.map((opt) => (
              <Combobox.Option value={opt.value} key={opt.value}>
                {opt.label}
              </Combobox.Option>
            ))
          ) : (
            <Combobox.Empty>{t('noResults')}</Combobox.Empty>
          )}
        </Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
}
export default Search;
