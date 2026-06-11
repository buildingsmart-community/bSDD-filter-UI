import { CheckIcon, CloseButton, Combobox, Group, InputBase, Loader, Paper, Text, useCombobox } from '@mantine/core';
import { useEffect, useMemo, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

import type { SearchMatchedOn } from '../common/tools/rankClassSearchResults';

interface Option {
  label: string;
  value: string;
  uri: string;
  matchedOn?: SearchMatchedOn;
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
  /** When provided, called when scrolling reaches the end of `options` outside
   *  of an active search. The parent should append the next page to `options`. */
  onLoadMore?: () => void;
  /** Indicates that more options are being fetched after an onLoadMore call */
  isLoadingMore?: boolean;
  /** Forces the slicer into a disabled/loading state */
  loading?: boolean;
}

const INITIAL_RENDER_LIMIT = 25;
const RENDER_MORE_LIMIT = 25;

function Slicer({
  height,
  options,
  label,
  value,
  setValue,
  placeholder = 'Search values',
  onSearch,
  isSearching,
  onLoadMore,
  isLoadingMore,
  loading,
}: SlicerProps) {
  const { t } = useTranslation();
  const [search, setSearch] = useState('');
  const [renderCount, setRenderCount] = useState(INITIAL_RENDER_LIMIT);
  const [disabled, setDisabled] = useState(loading || options.length === 1);
  const optionsContainerRef = useRef(null);

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
    // Reset the render window on a new selection, but not when `options` grows
    // through onLoadMore — that would yank the scroll position back to the top.
    setRenderCount(INITIAL_RENDER_LIMIT);
  }, [value]);

  useEffect(() => {
    setDisabled(loading || options.length === 1);
  }, [options, loading]);

  // Server-side search mode shows options as-is (already filtered by the server);
  // client-side mode filters locally while no value is selected.
  const filteredOptions = useMemo(() => {
    if (onSearch || value !== null) return options;
    const query = search.toLowerCase().trim();
    return options.filter(
      (item) => item?.label.toLowerCase().includes(query) || item?.value.toString().toLowerCase().includes(query),
    );
  }, [options, search, value, onSearch]);

  const renderedOptions = filteredOptions.slice(0, renderCount);

  // Debouncing lives with the server-search consumer (useDictionaryClassOptions)
  const handleSearchChange = (query: string) => {
    setSearch(query);
    setRenderCount(INITIAL_RENDER_LIMIT);
    onSearch?.(query);
  };

  const handleScroll = (e: { currentTarget: { scrollTop: any; scrollHeight: any; clientHeight: any } }) => {
    const { scrollTop, scrollHeight, clientHeight } = e.currentTarget;
    const threshold = 5;
    const isAtBottom = scrollHeight - scrollTop <= clientHeight + threshold;
    if (!isAtBottom) return;
    if (renderCount < filteredOptions.length) {
      const nextCount = renderCount + RENDER_MORE_LIMIT;
      setRenderCount(nextCount);
      // Prefetch the next server page one batch early so it arrives before the
      // user scrolls into the gap at the end of the current fetched set.
      if (onLoadMore && !isLoadingMore && !search.trim() && nextCount + RENDER_MORE_LIMIT >= filteredOptions.length) {
        onLoadMore();
      }
    } else if (onLoadMore && !isLoadingMore && !search.trim()) {
      onLoadMore();
    }
  };

  const comboboxOptions = renderedOptions.map((item) => (
    <Combobox.Option key={item.uri} value={item.uri} active={value?.uri === item.uri}>
      <Group gap="sm">
        {value?.uri === item.uri ? <CheckIcon size={12} /> : null}
        <Text fz="sm" opacity={disabled ? 0.6 : 1.0}>
          {item.label}
        </Text>
        <Text fz="xs" opacity={0.6}>
          ({item.value})
        </Text>
        {item.matchedOn && (
          <Text fz="xs" c="dimmed" fs="italic" ml="auto">
            {item.matchedOn === 'synonym' ? t('matchedOnSynonym') : t('matchedOnDescription')}
          </Text>
        )}
      </Group>
    </Combobox.Option>
  ));

  const optionsContent = isSearching ? (
    <Combobox.Empty>
      <Group gap="xs">
        <Loader size="xs" />
        {t('searching')}
      </Group>
    </Combobox.Empty>
  ) : comboboxOptions.length > 0 ? (
    <>
      {comboboxOptions}
      {isLoadingMore && (
        <Group gap="xs" p="xs" justify="center">
          <Loader size="xs" />
        </Group>
      )}
    </>
  ) : (
    <Combobox.Empty>{t('nothingFound')}</Combobox.Empty>
  );

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <Combobox
        store={combobox}
        onOptionSubmit={(newValue) => {
          if (!disabled) {
            const newOption = options.find((option) => option.uri === newValue);
            const newValueToSet = newOption && value?.uri !== newOption.uri ? newOption : null;
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
                    onSearch?.('');
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
            <Combobox.Options>{optionsContent}</Combobox.Options>
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
            <Combobox.Options>{optionsContent}</Combobox.Options>
          </Paper>
        )}
      </Combobox>
    </div>
  );
}

export default Slicer;
