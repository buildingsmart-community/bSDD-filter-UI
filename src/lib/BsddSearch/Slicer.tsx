import { CheckIcon, CloseButton, Combobox, Group, InputBase, Loader, Paper, Text, useCombobox } from '@mantine/core';
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

interface Option {
  label: string;
  value: string;
  uri: string;
}

interface SlicerProps {
  height: number;
  options: Option[];
  label: string | undefined;
  value: Option | null;
  setValue: (newValue: Option | null) => void;
  placeholder: string | undefined;
  /** When provided, called with the search query for server-side filtering.
   *  The parent should update `options` with the results. */
  onSearch?: (query: string) => void;
  /** Indicates that a server-side search is in progress */
  isSearching?: boolean;
  /** Forces the slicer into a disabled/loading state */
  loading?: boolean;
}

const INITIAL_RENDER_LIMIT = 25;
const RENDER_MORE_LIMIT = 25;
const SEARCH_DEBOUNCE_MS = 300;

function Slicer({ height, options, label, value, setValue, placeholder = 'Search values', onSearch, isSearching, loading }: SlicerProps) {
  const { t } = useTranslation();
  const [search, setSearch] = useState('');
  const [renderedOptions, setRenderedOptions] = useState(options.slice(0, INITIAL_RENDER_LIMIT));
  const [disabled, setDisabled] = useState(loading || options.length === 1);
  const optionsContainerRef = useRef(null);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const combobox = useCombobox({
    onDropdownClose: () => {
      combobox.resetSelectedOption();
      if (combobox.focusTarget) {
        combobox.focusTarget();
      }
    },

    onDropdownOpen: () => {
      if (combobox.focusSearchInput && combobox.searchRef.current) {
        combobox.focusSearchInput();
      }
    },
  });

  useEffect(() => {
    setSearch(value?.label || '');
  }, [value]);

  useEffect(() => {
    setDisabled(loading || options.length === 1);
  }, [options, loading]);

  useEffect(() => {
    if (onSearch) {
      // Server-side search mode: show all options as-is (already filtered by server)
      setRenderedOptions(options.slice(0, INITIAL_RENDER_LIMIT));
    } else {
      // Client-side filter mode
      const optionsToShow =
        value === null
          ? options.filter(
              (item) =>
                item?.label.toLowerCase().includes(search.toLowerCase().trim()) ||
                item?.value.toString().toLowerCase().includes(search.toLowerCase().trim()),
            )
          : options;
      setRenderedOptions(optionsToShow.slice(0, INITIAL_RENDER_LIMIT));
    }
  }, [options, search, value, onSearch]);

  const handleSearchChange = (query: string) => {
    setSearch(query);
    if (onSearch) {
      if (debounceRef.current) clearTimeout(debounceRef.current);
      debounceRef.current = setTimeout(() => {
        onSearch(query);
      }, SEARCH_DEBOUNCE_MS);
    }
  };

  // Cleanup debounce on unmount
  useEffect(() => {
    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, []);

  const handleScroll = (e: { currentTarget: { scrollTop: any; scrollHeight: any; clientHeight: any } }) => {
    const { scrollTop, scrollHeight, clientHeight } = e.currentTarget;
    const threshold = 5;
    const isAtBottom = scrollHeight - scrollTop <= clientHeight + threshold;
    if (isAtBottom) {
      setRenderedOptions((prevRenderedOptions) => {
        const nextIndex = prevRenderedOptions.length;
        const optionsToShow = onSearch
          ? options
          : value === null
            ? options.filter(
                (item) =>
                  item?.label.toLowerCase().includes(search.toLowerCase().trim()) ||
                  item?.value.toString().toLowerCase().includes(search.toLowerCase().trim()),
              )
            : options;
        const moreOptions = optionsToShow.slice(nextIndex, nextIndex + RENDER_MORE_LIMIT);
        return [...prevRenderedOptions, ...moreOptions];
      });
    }
  };

  const comboboxOptions = renderedOptions.map((item) => (
    <Combobox.Option key={item.value} value={item.value} active={value?.value === item.value}>
      <Group gap="sm">
        {value?.value === item.value ? <CheckIcon size={12} /> : null}
        <Text fz="sm" opacity={disabled ? 0.6 : 1.0}>
          {item.label}
        </Text>
        <Text fz="xs" opacity={0.6}>
          ({item.value})
        </Text>
      </Group>
    </Combobox.Option>
  ));

  const optionsContent = isSearching ? (
    <Combobox.Empty><Group gap="xs"><Loader size="xs" />{t('searching')}</Group></Combobox.Empty>
  ) : comboboxOptions.length > 0 ? (
    comboboxOptions
  ) : (
    <Combobox.Empty>{t('nothingFound')}</Combobox.Empty>
  );

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <Combobox
        store={combobox}
        onOptionSubmit={(newValue) => {
          if (!disabled) {
            const newOption = options.find((option) => option.value === newValue);
            const newValueToSet = newOption && value?.value !== newOption.value ? newOption : null;
            setValue(newValueToSet);
            combobox.closeDropdown();
          }
        }}
        disabled={disabled}
      >
        <Combobox.Target>
          <InputBase
            rightSection={
              loading ? (
                <Loader size="xs" />
              ) : !disabled ? (
                <CloseButton
                  size="sm"
                  onMouseDown={(event) => {
                    event.preventDefault();
                  }}
                  onClick={() => {
                    setSearch('');
                    setValue(null);
                  }}
                  aria-label="Clear value"
                />
              ) : null
            }
            label={label}
            value={value ? `${value.label} (${value.value})` : search}
            onChange={(event) => {
              if (!disabled) {
                setValue(null);
                combobox.updateSelectedOptionIndex();
                handleSearchChange(event.currentTarget.value);
              }
            }}
            onClick={() => {
              if (!disabled) {
                combobox.openDropdown();
              }
            }}
            onBlur={() => combobox.closeDropdown()}
            placeholder={disabled ? '' : placeholder}
            disabled={disabled}
          />
        </Combobox.Target>
        {height < 80 ? (
          <Combobox.Dropdown
            style={{ maxHeight: '20em', overflowY: 'auto' }}
            ref={optionsContainerRef}
            onScroll={handleScroll}
          >
            <Combobox.Options>
              {optionsContent}
            </Combobox.Options>
          </Combobox.Dropdown>
        ) : (
          <Paper
            withBorder
            my="0.2em"
            style={{
              flexGrow: 1,
              overflow: 'auto',
              backgroundColor: disabled ? 'var(--mantine-color-gray-0)' : 'transparent',
              color: disabled ? 'var(--mantine-color-gray-6)' : 'inherit',
              pointerEvents: disabled ? 'none' : 'auto',
            }}
            ref={optionsContainerRef}
            onScroll={handleScroll}
          >
            <Combobox.Options>
              {optionsContent}
            </Combobox.Options>
          </Paper>
        )}
      </Combobox>
    </div>
  );
}

export default Slicer;
