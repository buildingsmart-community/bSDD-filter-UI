import { Box, Button, Paper, Tooltip } from '@mantine/core';
import { IconGripHorizontal } from '@tabler/icons-react';
import { useQueryClient } from '@tanstack/react-query';
import { type MouseEventHandler, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useShallow } from 'zustand/react/shallow';

import type { ClassContractV1, DictionaryContractV1 } from '../../../../../shared/bsdd-api/generated/types.gen';
import { fetchFirstPageDictionaryClasses } from '../../../api/fetchers/dictionaries';
import { searchInDictionary } from '../../../api/fetchers/search';
import { useDictionaries } from '../../../api/hooks/useDictionaries';
import { bsddKeys } from '../../../api/queryKeys';
import type { IfcClassification, IfcClassificationReference } from '../../../common/IfcData/ifc';
import { useIfcDataStore } from '../../../stores/ifcDataStore';
import {
  selectActiveDictionaries,
  selectIfcDictionaryUri,
  selectMainDictionaryUri,
  useSettingsStore,
} from '../../../stores/settingsStore';
import Slicer from '../../Slicer';

interface ClassificationsProps {
  height: number;
  handleMouseDown: MouseEventHandler<HTMLDivElement>;
  mainDictionaryClassification: ClassContractV1 | null;
  mainClassificationUri: string | null;
  onMainClassificationChange: (uri: string | null) => void;
}

interface Option {
  label: string;
  value: string;
  uri: string;
}

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

function Classifications({
  height,
  handleMouseDown,
  mainDictionaryClassification,
  mainClassificationUri,
  onMainClassificationChange,
}: ClassificationsProps) {
  const queryClient = useQueryClient();
  const { t } = useTranslation();
  const [optionsMap, setOptionsMap] = useState<Map<string, Option[]>>(new Map());
  const [searchingDictionaries, setSearchingDictionaries] = useState<Set<string>>(new Set());
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
  const ifcDictionaryUri = useSettingsStore(selectIfcDictionaryUri);
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

  // Build options map for each dictionary slicer
  useEffect(() => {
    const updateOptionsMap = async () => {
      const entries = Array.from(activeDictionariesMap.entries());
      const optionsMapPromises = entries.map(async ([dictionaryUri, dictionary]): Promise<[string, Option[]]> => {
        if (dictionaryUri === mainDictionaryUri) {
          if (mainDictionaryClassification) {
            // Class details loaded — lock to the single selected class
            const { code, name, uri } = mainDictionaryClassification;
            return [
              dictionaryUri,
              [
                {
                  value: code,
                  label: name,
                  uri,
                } as Option,
              ],
            ];
          }
          // mainClassificationUri exists but details not loaded yet — keep empty (loading)
          return [dictionaryUri, []];
        }

        let options: Option[] = [];
        const relationOptions = groupedRelationOptions[dictionaryUri];

        if (relationOptions && relationOptions.length > 0) {
          // Options come directly from the main class relations — no fetch needed
          options = relationOptions;
        } else {
          // No relations for this dictionary — fetch the first page as a searchable fallback
          try {
            const fetchedClasses = await queryClient.fetchQuery({
              queryKey: [...bsddKeys.dictionaryClasses(dictionaryUri, languageCode), 'firstPage'],
              queryFn: () => fetchFirstPageDictionaryClasses(dictionaryUri, languageCode),
              staleTime: 1000 * 60 * 30,
            });

            options = (fetchedClasses ?? [])
              .filter((fetchedClass) => fetchedClass.uri && fetchedClass.code)
              .map(
                (fetchedClass) =>
                  ({
                    value: fetchedClass.code as string,
                    label: fetchedClass.name || '',
                    uri: fetchedClass.uri as string,
                  }) as Option,
              );
          } catch (error) {
            console.error('Failed to fetch dictionary classes for', dictionaryUri, error);
            options = [];
          }
        }

        return [dictionaryUri, options];
      });

      const resolvedOptionsMap = await Promise.all(optionsMapPromises);
      const newOptionsMap = new Map(resolvedOptionsMap);
      setOptionsMap(newOptionsMap);

      const newSelectedIfcClassificationReferences = new Map<string, Option | null>();

      newOptionsMap.forEach((options, dictionaryUri) => {
        if (options.length === 1) {
          newSelectedIfcClassificationReferences.set(dictionaryUri, options[0]);
        } else if (dictionaryUri in hasAssociations) {
          const dictionaryAssociations = hasAssociations[dictionaryUri];
          if (dictionaryAssociations.length === 1) {
            const dictionaryAssociation = dictionaryAssociations[0];
            const isValidOption = options.some((option) => option.value === dictionaryAssociation.identification);

            if (isValidOption) {
              const dictionaryOption: Option = {
                label: dictionaryAssociation.name || '',
                value: dictionaryAssociation.identification || '',
                uri: dictionaryAssociation.location || '',
              };
              newSelectedIfcClassificationReferences.set(dictionaryUri, dictionaryOption);
            }
          }
        }
      });
      setSelectedIfcClassificationReferences(newSelectedIfcClassificationReferences);
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
      // Reset to first page when search is cleared
      try {
        const fetchedClasses = await queryClient.fetchQuery({
          queryKey: [...bsddKeys.dictionaryClasses(dictionaryUri, languageCode), 'firstPage'],
          queryFn: () => fetchFirstPageDictionaryClasses(dictionaryUri, languageCode),
          staleTime: 1000 * 60 * 30,
        });
        const options: Option[] = (fetchedClasses ?? [])
          .filter((c) => c.uri && c.code)
          .map((c) => ({
            value: c.code as string,
            label: c.name || '',
            uri: c.uri as string,
          }));
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

  return (
    <Paper style={{ height: `${height}px`, position: 'relative' }}>
      {Array.from(activeDictionariesMap.entries()).map(([dictionaryUri, dictionary]) => {
        const isMainDictionary = dictionaryUri === mainDictionaryUri;
        const isIfcDictionary = dictionaryUri === mainDictionaryClassification?.dictionaryUri;
        const isMainLoading = !!mainClassificationUri && !mainDictionaryClassification;

        if (isMainDictionary) {
          return (
            <Slicer
              key={dictionaryUri}
              height={height}
              label={dictionary.name}
              options={optionsMap.get(dictionaryUri) || []}
              value={selectedIfcClassificationReferences.get(dictionaryUri) || null}
              setValue={(newValue) => {
                if (newValue?.uri && newValue?.uri !== mainClassificationUri) {
                  const newValues = new Map(selectedIfcClassificationReferences);
                  newValues.set(dictionaryUri, newValue);
                  setSelectedIfcClassificationReferences(newValues);

                  onMainClassificationChange(newValue.uri);
                }
              }}
              placeholder={t('classifications.searchClassesPlaceholder')}
              loading={isMainLoading}
            />
          );
        }

        if (isIfcDictionary) {
          return null;
        }

        return (
          <Slicer
            key={dictionaryUri}
            height={height}
            label={dictionary.name}
            options={optionsMap.get(dictionaryUri) || []}
            value={selectedIfcClassificationReferences.get(dictionaryUri) || null}
            setValue={(newValue) => {
              const newValues = new Map(selectedIfcClassificationReferences);
              newValues.set(dictionaryUri, newValue);
              setSelectedIfcClassificationReferences(newValues);
            }}
            placeholder={t('classifications.searchClassesPlaceholder')}
            onSearch={
              dictionariesWithoutRelations.has(dictionaryUri)
                ? (query) => handleSlicerSearch(dictionaryUri, query)
                : undefined
            }
            isSearching={searchingDictionaries.has(dictionaryUri)}
            loading={isMainLoading}
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
