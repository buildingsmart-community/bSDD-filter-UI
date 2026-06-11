import { Box, Button, Paper, Tooltip } from '@mantine/core';
import { IconGripHorizontal } from '@tabler/icons-react';
import { useQueryClient } from '@tanstack/react-query';
import { type MouseEventHandler, useEffect, useMemo, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useShallow } from 'zustand/react/shallow';

import type {
  ClassContractV1,
  ClassListItemContractV1Classes,
  DictionaryContractV1,
} from '../../../../../shared/bsdd-api/generated/types.gen';
import { CLASS_ITEM_PAGE_SIZE, fetchDictionaryClassesPage } from '../../../api/fetchers/dictionaries';
import { searchInDictionary } from '../../../api/fetchers/search';
import { useDictionaries } from '../../../api/hooks/useDictionaries';
import { bsddKeys } from '../../../api/queryKeys';
import type { IfcClassification, IfcClassificationReference } from '../../../common/IfcData/ifc';
import { useIfcDataStore } from '../../../stores/ifcDataStore';
import { selectActiveDictionaries, selectMainDictionaryUri, useSettingsStore } from '../../../stores/settingsStore';
import Slicer from '../../Slicer';

interface ClassificationsProps {
  height: number;
  handleMouseDown: MouseEventHandler<HTMLDivElement>;
  mainDictionaryClassification: ClassContractV1 | null;
}

interface Option {
  label: string;
  value: string;
  uri: string;
}

interface BrowseState {
  options: Option[];
  nextOffset: number;
  totalCount: number;
}

const toOptions = (classes: ClassListItemContractV1Classes[]): Option[] =>
  classes
    .filter((c) => c.uri && c.code)
    .map((c) => ({
      value: c.code as string,
      label: c.name || '',
      uri: c.uri as string,
    }));

/**
 * Converts a selected classification reference option to an IfcClassificationReference object.
 *
 * @param dictionaryUri - The URI of the dictionary.
 * @param option - The selected classification reference option.
 * @param dictionaries - The dictionaries object from the state.
 * @returns An IfcClassificationReference object or null if the option or dictionary is invalid.
 */
const convertToIfcClassificationReference = (
  dictionaryUri: string,
  option: Option | null,
  dictionaries: Record<string, DictionaryContractV1>,
): IfcClassificationReference | null => {
  if (!option || !option.value) return null;

  const dictionary = dictionaries[dictionaryUri];
  if (!dictionary) return null;

  return {
    type: 'IfcClassificationReference',
    name: option.label,
    location: option.uri,
    identification: option.value,
    referencedSource: {
      type: 'IfcClassification',
      name: dictionary.name,
      location: dictionary.uri,
      edition: dictionary.version,
      editionDate: dictionary.releaseDate,
    } as IfcClassification,
  } as IfcClassificationReference;
};

const selectionsEqual = (a: Map<string, Option | null>, b: Map<string, Option | null>): boolean => {
  if (a.size !== b.size) return false;
  for (const [key, optionA] of a) {
    if (!b.has(key)) return false;
    const optionB = b.get(key);
    if (optionA?.uri !== optionB?.uri || optionA?.value !== optionB?.value || optionA?.label !== optionB?.label) {
      return false;
    }
  }
  return true;
};

function Classifications({ height, handleMouseDown, mainDictionaryClassification }: ClassificationsProps) {
  const queryClient = useQueryClient();
  const { t } = useTranslation();
  const [optionsMap, setOptionsMap] = useState<Map<string, Option[]>>(new Map());
  const [searchingDictionaries, setSearchingDictionaries] = useState<Set<string>>(new Set());
  // Accumulated browse pages per `${dictionaryUri}|${languageCode}`, so paging
  // survives effect re-runs and search-clear restores without refetching.
  const browseStateRef = useRef<Map<string, BrowseState>>(new Map());
  const loadingMoreRef = useRef<Set<string>>(new Set());
  const [loadingMoreDictionaries, setLoadingMoreDictionaries] = useState<Set<string>>(new Set());
  const [selectedIfcClassificationReferences, setSelectedIfcClassificationReferences] = useState<
    Map<string, Option | null>
  >(new Map());

  // Settings
  const activeDictionaries = useSettingsStore(useShallow(selectActiveDictionaries));
  const activeDictionariesMap = useMemo(
    () => new Map(activeDictionaries.map((d) => [d.ifcClassification.location, d.ifcClassification])),
    [activeDictionaries],
  );
  const mainDictionaryUri = useSettingsStore(selectMainDictionaryUri);
  const includeTestDictionaries = useSettingsStore((s) => s.includeTestDictionaries);
  const languageCode = useSettingsStore((s) => s.language);

  // IFC data
  // selectHasAssociationsMap builds a fresh object whose values are fresh arrays
  // every call, which breaks shallow equality and triggers an infinite loop in
  // useSyncExternalStore. Subscribe to the stable source array and derive via
  // useMemo instead.
  const hasAssociationsList = useIfcDataStore((s) => s.currentEntity.hasAssociations);
  const hasAssociations = useMemo<{ [key: string]: IfcClassificationReference[] }>(() => {
    const refs = (hasAssociationsList ?? []).filter(
      (a) => a && a.type === 'IfcClassificationReference',
    ) as IfcClassificationReference[];
    return refs.reduce<{ [key: string]: IfcClassificationReference[] }>((acc, ref) => {
      const location = ref?.referencedSource?.location;
      if (location) {
        if (!acc[location]) acc[location] = [];
        acc[location].push(ref);
      }
      return acc;
    }, {});
  }, [hasAssociationsList]);
  const setHasAssociations = useIfcDataStore((s) => s.setHasAssociations);

  // Fetch dictionaries for creating classification references
  const { data: dictionariesMap = {} } = useDictionaries(includeTestDictionaries ?? false);

  // Build dropdown options for each filter dictionary directly from the already-loaded
  // main class relations — no extra per-class fetches needed.
  const groupedRelationOptions = useMemo((): Record<string, Option[]> => {
    if (!mainDictionaryClassification) return {};
    const dictionaryUris = Array.from(activeDictionariesMap.keys());
    const grouped: Record<string, Option[]> = {};

    const addOption = (classUri: string, className: string | null | undefined) => {
      // Find the active dictionary this class URI belongs to (longest prefix match)
      const dictUri = dictionaryUris.filter((d) => classUri.startsWith(d)).sort((a, b) => b.length - a.length)[0];
      if (!dictUri || dictUri === mainDictionaryUri) return;
      if (!grouped[dictUri]) grouped[dictUri] = [];
      grouped[dictUri].push({
        // Code = last path segment of the URI (standard bSDD URI format)
        value: classUri.split('/').filter(Boolean).pop() ?? classUri,
        label: className ?? '',
        uri: classUri,
      });
    };

    for (const rel of mainDictionaryClassification.classRelations ?? []) {
      addOption(rel.relatedClassUri, rel.relatedClassName);
    }
    for (const rel of mainDictionaryClassification.reverseClassRelations ?? []) {
      addOption(rel.classUri, rel.className);
    }
    return grouped;
  }, [mainDictionaryClassification, activeDictionariesMap, mainDictionaryUri]);

  // Build options map for each filter-dictionary slicer. The main dictionary has
  // no slicer — the Search input is its editor — but its selection is pinned into
  // the selections map below so it still reaches hasAssociations / Apply.
  useEffect(() => {
    const updateOptionsMap = async () => {
      const entries = Array.from(activeDictionariesMap.entries()).filter(([uri]) => uri !== mainDictionaryUri);
      const optionsMapPromises = entries.map(async ([dictionaryUri]): Promise<[string, Option[]]> => {
        let options: Option[] = [];
        const relationOptions = groupedRelationOptions[dictionaryUri];

        if (relationOptions && relationOptions.length > 0) {
          // Options come directly from the main class relations — no fetch needed
          options = relationOptions;
        } else {
          // No relations for this dictionary — page through classes on demand,
          // starting with the first page as a searchable fallback
          const browseKey = `${dictionaryUri}|${languageCode}`;
          const browseState = browseStateRef.current.get(browseKey);
          if (browseState) {
            options = browseState.options;
          } else {
            try {
              const page = await queryClient.fetchQuery({
                queryKey: bsddKeys.dictionaryClassesPage(dictionaryUri, languageCode, 0),
                queryFn: () => fetchDictionaryClassesPage(dictionaryUri, 0, languageCode),
                staleTime: 1000 * 60 * 30,
              });
              options = toOptions(page.classes);
              browseStateRef.current.set(browseKey, {
                options,
                nextOffset: CLASS_ITEM_PAGE_SIZE,
                totalCount: page.totalCount,
              });
            } catch (error) {
              console.error('Failed to fetch dictionary classes for', dictionaryUri, error);
              options = [];
            }
          }
        }

        return [dictionaryUri, options];
      });

      const resolvedOptionsMap = await Promise.all(optionsMapPromises);
      const newOptionsMap = new Map(resolvedOptionsMap);
      setOptionsMap(newOptionsMap);

      // Reconcile instead of rebuilding: keep still-valid selections, fill only
      // empty rows from the single-option / association seeds, clear only what no
      // longer matches the new main class.
      setSelectedIfcClassificationReferences((prev) => {
        const next = new Map<string, Option | null>();

        if (mainDictionaryUri && mainDictionaryClassification) {
          next.set(mainDictionaryUri, {
            value: mainDictionaryClassification.code,
            label: mainDictionaryClassification.name,
            uri: mainDictionaryClassification.uri,
          } as Option);
        }

        newOptionsMap.forEach((options, dictionaryUri) => {
          if (options.length === 1) {
            next.set(dictionaryUri, options[0]);
            return;
          }

          const hasRelations = !!groupedRelationOptions[dictionaryUri]?.length;
          const previous = prev.get(dictionaryUri);
          if (previous) {
            // Relation-less rows don't depend on the main class — never invalidated
            // by it. Relation-backed rows survive iff still among the new options.
            if (!hasRelations || options.some((option) => option.uri === previous.uri)) {
              next.set(dictionaryUri, previous);
              return;
            }
          } else if (prev.has(dictionaryUri)) {
            // Explicitly cleared by the user — seeding must not refill it
            next.set(dictionaryUri, null);
            return;
          }

          const dictionaryAssociations = hasAssociations[dictionaryUri];
          if (dictionaryAssociations?.length === 1) {
            const dictionaryAssociation = dictionaryAssociations[0];
            const isValidOption =
              !hasRelations || options.some((option) => option.value === dictionaryAssociation.identification);

            if (isValidOption) {
              next.set(dictionaryUri, {
                label: dictionaryAssociation.name || '',
                value: dictionaryAssociation.identification || '',
                uri: dictionaryAssociation.location || '',
              });
            }
          }
        });

        return selectionsEqual(prev, next) ? prev : next;
      });
    };

    updateOptionsMap();
  }, [
    activeDictionariesMap,
    groupedRelationOptions,
    queryClient,
    languageCode,
    hasAssociations,
    mainDictionaryClassification,
    mainDictionaryUri,
  ]);

  // Update associations when selections change
  useEffect(() => {
    const newClassificationReferences = Array.from(selectedIfcClassificationReferences.entries())
      .map(([dictionaryUri, option]) => convertToIfcClassificationReference(dictionaryUri, option, dictionariesMap))
      .filter((ref): ref is IfcClassificationReference => ref !== null);

    if (newClassificationReferences.length > 0) {
      setHasAssociations(newClassificationReferences);
    }
  }, [dictionariesMap, selectedIfcClassificationReferences, setHasAssociations]);

  // Dictionaries without class relations need server-side search in the slicer
  const dictionariesWithoutRelations = useMemo(() => {
    const set = new Set<string>();
    for (const [dictionaryUri] of activeDictionariesMap.entries()) {
      if (dictionaryUri === mainDictionaryUri) continue;
      if (!groupedRelationOptions[dictionaryUri]?.length) {
        set.add(dictionaryUri);
      }
    }
    return set;
  }, [activeDictionariesMap, groupedRelationOptions, mainDictionaryUri]);

  // Server-side search for filter dictionaries without relations
  const handleSlicerSearch = async (dictionaryUri: string, query: string) => {
    if (!query.trim()) {
      // Search cleared — restore the accumulated browse list
      const browseKey = `${dictionaryUri}|${languageCode}`;
      const browseState = browseStateRef.current.get(browseKey);
      if (browseState) {
        setOptionsMap((prev) => new Map(prev).set(dictionaryUri, browseState.options));
        return;
      }
      try {
        const page = await queryClient.fetchQuery({
          queryKey: bsddKeys.dictionaryClassesPage(dictionaryUri, languageCode, 0),
          queryFn: () => fetchDictionaryClassesPage(dictionaryUri, 0, languageCode),
          staleTime: 1000 * 60 * 30,
        });
        const options = toOptions(page.classes);
        browseStateRef.current.set(browseKey, {
          options,
          nextOffset: CLASS_ITEM_PAGE_SIZE,
          totalCount: page.totalCount,
        });
        setOptionsMap((prev) => new Map(prev).set(dictionaryUri, options));
      } catch {
        /* keep existing options */
      }
      return;
    }

    setSearchingDictionaries((prev) => new Set(prev).add(dictionaryUri));
    try {
      const result = await searchInDictionary({
        DictionaryUri: dictionaryUri,
        SearchText: query,
        languageCode: languageCode,
      });
      const options: Option[] = (result.dictionary?.classes ?? [])
        .filter((c) => c.uri && c.referenceCode)
        .map((c) => ({
          value: c.referenceCode as string,
          label: c.name || '',
          uri: c.uri as string,
        }));
      setOptionsMap((prev) => new Map(prev).set(dictionaryUri, options));
    } catch (error) {
      console.error('Search failed for', dictionaryUri, error);
    } finally {
      setSearchingDictionaries((prev) => {
        const next = new Set(prev);
        next.delete(dictionaryUri);
        return next;
      });
    }
  };

  // Fetch the next page of classes when the slicer scrolls past the loaded set
  const handleSlicerLoadMore = async (dictionaryUri: string) => {
    const browseKey = `${dictionaryUri}|${languageCode}`;
    const browseState = browseStateRef.current.get(browseKey);
    if (!browseState || browseState.nextOffset >= browseState.totalCount) return;
    if (loadingMoreRef.current.has(browseKey)) return;
    loadingMoreRef.current.add(browseKey);
    setLoadingMoreDictionaries((prev) => new Set(prev).add(dictionaryUri));
    try {
      const offset = browseState.nextOffset;
      const page = await queryClient.fetchQuery({
        queryKey: bsddKeys.dictionaryClassesPage(dictionaryUri, languageCode, offset),
        queryFn: () => fetchDictionaryClassesPage(dictionaryUri, offset, languageCode),
        staleTime: 1000 * 60 * 30,
      });
      const updated: BrowseState = {
        options: [...browseState.options, ...toOptions(page.classes)],
        nextOffset: offset + CLASS_ITEM_PAGE_SIZE,
        totalCount: page.totalCount,
      };
      browseStateRef.current.set(browseKey, updated);
      setOptionsMap((prev) => new Map(prev).set(dictionaryUri, updated.options));
    } catch (error) {
      console.error('Failed to fetch more dictionary classes for', dictionaryUri, error);
    } finally {
      loadingMoreRef.current.delete(browseKey);
      setLoadingMoreDictionaries((prev) => {
        const next = new Set(prev);
        next.delete(dictionaryUri);
        return next;
      });
    }
  };

  return (
    <Paper style={{ height: `${height}px`, position: 'relative' }}>
      {Array.from(activeDictionariesMap.entries())
        .filter(([dictionaryUri]) => dictionaryUri !== mainDictionaryUri)
        .map(([dictionaryUri, dictionary]) => {
          const handleSetValue = (newValue: Option | null) => {
            setSelectedIfcClassificationReferences((prev) => new Map(prev).set(dictionaryUri, newValue));
          };

          return (
            <Slicer
              key={dictionaryUri}
              height={height}
              label={dictionary.name}
              options={optionsMap.get(dictionaryUri) || []}
              value={selectedIfcClassificationReferences.get(dictionaryUri) || null}
              setValue={handleSetValue}
              placeholder={t('classifications.searchClassesPlaceholder')}
              onSearch={
                dictionariesWithoutRelations.has(dictionaryUri)
                  ? (query) => handleSlicerSearch(dictionaryUri, query)
                  : undefined
              }
              isSearching={searchingDictionaries.has(dictionaryUri)}
              onLoadMore={
                dictionariesWithoutRelations.has(dictionaryUri) ? () => handleSlicerLoadMore(dictionaryUri) : undefined
              }
              isLoadingMore={loadingMoreDictionaries.has(dictionaryUri)}
              loading={!mainDictionaryClassification}
            />
          );
        })}
      <Box onMouseDown={handleMouseDown} style={{ marginTop: '4px' }}>
        <Tooltip label={t('classifications.dragResize')} withArrow>
          <Button fullWidth variant="subtle" size="sm" color="gray" aria-label={t('classifications.dragResize')}>
            <IconGripHorizontal />
          </Button>
        </Tooltip>
      </Box>
    </Paper>
  );
}

export default Classifications;
