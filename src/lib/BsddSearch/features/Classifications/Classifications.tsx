import { Box, Button, Paper, Tooltip } from '@mantine/core';
import { IconGripHorizontal } from '@tabler/icons-react';
import { type MouseEventHandler, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useShallow } from 'zustand/react/shallow';

import type { ClassContractV1, DictionaryContractV1 } from '../../../../../shared/bsdd-api/generated/types.gen';
import { useDictionaries } from '../../../api/hooks/useDictionaries';
import type { IfcClassification, IfcClassificationReference } from '../../../common/IfcData/ifc';
import { useIfcDataStore } from '../../../stores/ifcDataStore';
import { selectActiveDictionaries, selectMainDictionaryUri, useSettingsStore } from '../../../stores/settingsStore';
import DictionarySlicer from './DictionarySlicer';
import type { ClassOption } from './useDictionaryClassOptions';

interface ClassificationsProps {
  height: number;
  handleMouseDown: MouseEventHandler<HTMLDivElement>;
  mainDictionaryClassification: ClassContractV1 | null;
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
  option: ClassOption | null,
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

const selectionsEqual = (a: Map<string, ClassOption | null>, b: Map<string, ClassOption | null>): boolean => {
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
  const { t } = useTranslation();
  const [selectedIfcClassificationReferences, setSelectedIfcClassificationReferences] = useState<
    Map<string, ClassOption | null>
  >(new Map());

  // Settings
  const activeDictionaries = useSettingsStore(useShallow(selectActiveDictionaries));
  const activeDictionariesMap = useMemo(
    () => new Map(activeDictionaries.map((d) => [d.ifcClassification.location, d.ifcClassification])),
    [activeDictionaries],
  );
  const mainDictionaryUri = useSettingsStore(selectMainDictionaryUri);
  const includeTestDictionaries = useSettingsStore((s) => s.includeTestDictionaries);

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
  const groupedRelationOptions = useMemo((): Record<string, ClassOption[]> => {
    if (!mainDictionaryClassification) return {};
    const dictionaryUris = Array.from(activeDictionariesMap.keys());
    const grouped: Record<string, ClassOption[]> = {};

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

  // Reconcile selections on a new main class: keep still-valid selections, fill
  // only empty rows from the single-option / association seeds, clear only what
  // no longer matches. The main dictionary has no slicer — the Search input is
  // its editor — but its selection is pinned here so it still reaches
  // hasAssociations / Apply. Relation-less single-class auto-selection lives in
  // DictionarySlicer, which owns those options.
  useEffect(() => {
    setSelectedIfcClassificationReferences((prev) => {
      const next = new Map<string, ClassOption | null>();

      if (mainDictionaryUri && mainDictionaryClassification) {
        next.set(mainDictionaryUri, {
          value: mainDictionaryClassification.code,
          label: mainDictionaryClassification.name,
          uri: mainDictionaryClassification.uri,
        } as ClassOption);
      }

      for (const [dictionaryUri] of activeDictionariesMap) {
        if (dictionaryUri === mainDictionaryUri) continue;
        const relationOptions = groupedRelationOptions[dictionaryUri];
        const hasRelations = !!relationOptions?.length;

        if (hasRelations && relationOptions.length === 1) {
          next.set(dictionaryUri, relationOptions[0]);
          continue;
        }

        const previous = prev.get(dictionaryUri);
        if (previous) {
          // Relation-less rows don't depend on the main class — never invalidated
          // by it. Relation-backed rows survive iff still among the new options.
          if (!hasRelations || relationOptions.some((option) => option.uri === previous.uri)) {
            next.set(dictionaryUri, previous);
            continue;
          }
        } else if (prev.has(dictionaryUri)) {
          // Explicitly cleared by the user — seeding must not refill it
          next.set(dictionaryUri, null);
          continue;
        }

        const dictionaryAssociations = hasAssociations[dictionaryUri];
        if (dictionaryAssociations?.length === 1) {
          const dictionaryAssociation = dictionaryAssociations[0];
          const isValidOption =
            !hasRelations || relationOptions.some((option) => option.value === dictionaryAssociation.identification);

          if (isValidOption) {
            next.set(dictionaryUri, {
              label: dictionaryAssociation.name || '',
              value: dictionaryAssociation.identification || '',
              uri: dictionaryAssociation.location || '',
            });
          }
        }
      }

      return selectionsEqual(prev, next) ? prev : next;
    });
  }, [activeDictionariesMap, groupedRelationOptions, hasAssociations, mainDictionaryClassification, mainDictionaryUri]);

  // Update associations when selections change
  useEffect(() => {
    const newClassificationReferences = Array.from(selectedIfcClassificationReferences.entries())
      .map(([dictionaryUri, option]) => convertToIfcClassificationReference(dictionaryUri, option, dictionariesMap))
      .filter((ref): ref is IfcClassificationReference => ref !== null);

    if (newClassificationReferences.length > 0) {
      setHasAssociations(newClassificationReferences);
    }
  }, [dictionariesMap, selectedIfcClassificationReferences, setHasAssociations]);

  return (
    <Paper style={{ height: `${height}px`, position: 'relative' }}>
      {Array.from(activeDictionariesMap.entries())
        .filter(([dictionaryUri]) => dictionaryUri !== mainDictionaryUri)
        .map(([dictionaryUri, dictionary]) => (
          <DictionarySlicer
            key={dictionaryUri}
            height={height}
            dictionaryUri={dictionaryUri}
            label={dictionary.name}
            relationOptions={groupedRelationOptions[dictionaryUri]}
            value={selectedIfcClassificationReferences.get(dictionaryUri) || null}
            setValue={(newValue) =>
              setSelectedIfcClassificationReferences((prev) => new Map(prev).set(dictionaryUri, newValue))
            }
            loading={!mainDictionaryClassification}
          />
        ))}
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
