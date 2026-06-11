import { CloseButton, Combobox, Group, InputBase, Loader, Text, useCombobox } from '@mantine/core';
import { useDebouncedValue } from '@mantine/hooks';
import { useEffect, useMemo, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { useSearchInDictionary } from '../api/hooks/useSearchInDictionary';
import { useSettingsStore } from '../stores/settingsStore';

export const SEARCH_INPUT_ID = 'bsdd-class-search';

interface Option {
  label: string;
  value: string;
  code?: string;
  matchedOn?: 'synonym' | 'description';
}

interface Props {
  value: Option | null;
  onCommit: (option: Option | null) => void;
  /** Entity-derived seed (host selection); prefills the draft when it changes */
  seedText?: string;
  /** True while the parent is resolving a seed/re-map for this dictionary */
  resolving?: boolean;
}

const formatOption = (option: Option) => (option.code ? `${option.label} (${option.code})` : option.label);

function Search({ value, onCommit, seedText, resolving }: Props) {
  const { t } = useTranslation();
  const mainDictionary = useSettingsStore((s) => s.mainDictionary);

  const inputRef = useRef<HTMLInputElement>(null);
  const [search, setSearch] = useState(value ? formatOption(value) : (seedText ?? ''));
  const [debouncedSearch] = useDebouncedValue(search, 300);

  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const dictionaryUri = mainDictionary?.ifcClassification.location;
  // The committed value is displayed as "Name (Code)" — query with the plain
  // name, not the display string. Only search while the dropdown is open: a
  // committed label sitting in a closed input must not burn a rate-limited call.
  const queryText = value && debouncedSearch === formatOption(value) ? value.label : debouncedSearch;
  const query = combobox.dropdownOpened ? queryText.trim() : '';
  const { data: searchResult, isFetching } = useSearchInDictionary(dictionaryUri, query);

  // The bSDD search matches names, codes, synonyms and descriptions but returns
  // hits alphabetically. Rank name matches first so the highlighted first option
  // (committed on Enter) is the best match, and tag the indirect hits with why
  // they matched.
  const options = useMemo<Option[]>(() => {
    const lcQuery = query.toLowerCase();
    const ranked = (searchResult?.dictionary?.classes ?? [])
      .filter((c) => c.uri && c.name)
      .map((c) => {
        const name = (c.name as string).toLowerCase();
        const code = c.referenceCode?.toLowerCase() ?? '';
        let tier: number;
        let matchedOn: Option['matchedOn'];
        if (name === lcQuery) tier = 0;
        else if (name.startsWith(lcQuery)) tier = 1;
        else if (name.includes(lcQuery)) tier = 2;
        else if (code.includes(lcQuery)) tier = 3;
        else if (c.synonyms?.some((s) => s.toLowerCase().includes(lcQuery))) {
          tier = 4;
          matchedOn = 'synonym';
        } else {
          tier = 5;
          if (c.definition?.toLowerCase().includes(lcQuery)) matchedOn = 'description';
        }
        return {
          tier,
          option: { value: c.uri as string, label: c.name as string, code: c.referenceCode ?? undefined, matchedOn },
        };
      });
    ranked.sort((a, b) => a.tier - b.tier || a.option.label.localeCompare(b.option.label));
    return ranked.map((r) => r.option);
  }, [searchResult, query]);

  // Sync the draft text when the committed selection changes externally
  // (async seed resolution, reconciliation after a dictionary change).
  const prevValueRef = useRef<Option | null>(value);
  useEffect(() => {
    if (prevValueRef.current === value) return;
    prevValueRef.current = value;
    setSearch(value ? formatOption(value) : '');
  }, [value]);

  // A new host selection brings a new seed — prefill it as draft (matching the
  // old defaultSelection behavior) unless a class is committed for it.
  const prevSeedRef = useRef(seedText);
  useEffect(() => {
    if (prevSeedRef.current === seedText) return;
    prevSeedRef.current = seedText;
    if (!value && seedText) setSearch(seedText);
  }, [seedText, value]);

  // Keep the first result highlighted so Enter commits it.
  const { selectFirstOption } = combobox;
  useEffect(() => {
    if (options.length > 0) selectFirstOption();
  }, [options, selectFirstOption]);

  useEffect(() => {
    const focusInput = () => inputRef.current?.focus();
    const raf = requestAnimationFrame(focusInput);
    const onWindowFocus = () => {
      // Recapture focus when the host (CefSharp panel) hands it back, but
      // never steal it from another control the user is working in.
      const active = document.activeElement;
      if (!active || active === document.body) focusInput();
    };
    window.addEventListener('focus', onWindowFocus);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('focus', onWindowFocus);
    };
  }, []);

  const rightSection =
    isFetching || resolving ? (
      <Loader size="xs" />
    ) : value !== null ? (
      <CloseButton
        size="sm"
        onMouseDown={(event) => event.preventDefault()}
        onClick={() => {
          onCommit(null);
          setSearch('');
          inputRef.current?.focus();
        }}
        aria-label="Clear selection"
      />
    ) : (
      <Combobox.Chevron />
    );

  return (
    <Combobox
      store={combobox}
      withinPortal={false}
      onOptionSubmit={(val) => {
        const option = options.find((o) => o.value === val);
        if (option) {
          onCommit(option);
          setSearch(formatOption(option));
          combobox.closeDropdown();
        }
      }}
    >
      <Combobox.Target>
        <InputBase
          id={SEARCH_INPUT_ID}
          ref={inputRef}
          label={
            mainDictionary
              ? t('classSearchTitle', { dictionary: mainDictionary.ifcClassification.name })
              : t('searchMainDictionaryLabel')
          }
          style={{ width: '100%' }}
          value={search}
          onChange={(event) => {
            const text = event.currentTarget.value;
            setSearch(text);
            if (text.trim()) {
              combobox.openDropdown();
            } else {
              combobox.closeDropdown();
            }
            combobox.updateSelectedOptionIndex();
          }}
          onClick={() => {
            if (search.trim()) combobox.openDropdown();
          }}
          onBlur={() => {
            combobox.closeDropdown();
            setSearch(value ? formatOption(value) : '');
          }}
          placeholder={t('classSearchHint')}
          rightSection={rightSection}
          rightSectionPointerEvents={value !== null && !isFetching && !resolving ? 'all' : 'none'}
        />
      </Combobox.Target>

      <Combobox.Dropdown>
        <Combobox.Options>
          {options.length > 0 ? (
            options.map((opt) => (
              <Combobox.Option value={opt.value} key={opt.value} active={value?.value === opt.value}>
                <Group gap="sm" wrap="nowrap">
                  <Text fz="sm">{opt.label}</Text>
                  {opt.code && (
                    <Text fz="xs" opacity={0.6}>
                      ({opt.code})
                    </Text>
                  )}
                  {opt.matchedOn && (
                    <Text fz="xs" c="dimmed" fs="italic" ml="auto">
                      {opt.matchedOn === 'synonym' ? t('matchedOnSynonym') : t('matchedOnDescription')}
                    </Text>
                  )}
                </Group>
              </Combobox.Option>
            ))
          ) : isFetching ? (
            <Combobox.Empty>{t('searching')}</Combobox.Empty>
          ) : (
            <Combobox.Empty>{t('noResults')}</Combobox.Empty>
          )}
        </Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
}
export default Search;
