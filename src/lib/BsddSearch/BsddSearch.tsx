import { Accordion, Alert, Box, Button, Group, Space, TextInput, Title } from '@mantine/core';
import { type QueryClient, useQueryClient } from '@tanstack/react-query';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useShallow } from 'zustand/react/shallow';

import type { ClassContractV1 } from '../../../shared/bsdd-api/generated/types.gen';
import { searchInDictionary } from '../api/fetchers/search';
import { useClassDetails } from '../api/hooks/useClassDetails';
import { usePropertyNames } from '../api/hooks/usePropertyNames';
import { bsddKeys } from '../api/queryKeys';
import type { IfcClassificationReference, IfcEntity, IfcPropertySet } from '../common/IfcData/ifc';
import { mergeIfcEntities } from '../common/tools/mergeIfcEntities';
import { useBsddBridge } from '../providers/BsddBridgeContext';
import { selectSelectedIfcEntities, useIfcDataStore } from '../stores/ifcDataStore';
import { selectActiveDictionaryUris, useSettingsStore } from '../stores/settingsStore';
import Apply from './Apply';
import Search from './Search';
import Classifications from './features/Classifications/Classifications';
import PropertySets from './features/PropertySets/PropertySets';

export interface Option {
  label: string;
  value: string;
}

export interface BsddConfig {
  baseUrl?: string;
  defaultDomains?: Option[];
  defaultSearch?: Option;
  ifcEntity?: IfcEntity;
}

interface BsddSearchProps {
  searchKey?: keyof IfcEntity;
}

export type PropertySetMap = Record<string, IfcPropertySet>;

// The committed main class, tagged with the dictionary it was committed under so
// validity after a dictionary change is an exact check, not a URI-prefix guess.
interface CommittedClass {
  uri: string;
  label: string;
  code?: string;
  dictionaryUri: string;
}

interface SearchOption extends Option {
  code?: string;
}

const minHeight = 60.7969;
let startY = 0;
let startHeight = 0;

const findAssociationOption = (entity: IfcEntity | null, dictionaryUri: string): SearchOption | null => {
  for (const association of entity?.hasAssociations ?? []) {
    if (association.type !== 'IfcClassificationReference') continue;
    const reference = association as IfcClassificationReference;
    if (reference.referencedSource?.location === dictionaryUri && reference.location) {
      return { label: reference.name ?? '', value: reference.location, code: reference.identification ?? undefined };
    }
  }
  return null;
};

const getTextSeed = (entity: IfcEntity | null, searchKey: keyof IfcEntity): string | undefined => {
  const seed = entity?.[searchKey];
  if (typeof seed !== 'string') return undefined;
  const trimmed = seed.trim();
  return trimmed && trimmed !== '...' ? trimmed : undefined;
};

// One-shot resolution of a text seed (objectType, or the previous selection's label
// after a dictionary change) to a class. Commits only on an unambiguous match:
// a unique exact-name hit, or a single search result.
async function resolveClassInDictionary(
  queryClient: QueryClient,
  dictionaryUri: string,
  text: string,
): Promise<SearchOption | null> {
  const query = text.trim();
  if (!query) return null;
  try {
    const result = await queryClient.fetchQuery({
      queryKey: bsddKeys.search(dictionaryUri, query),
      queryFn: () => searchInDictionary({ DictionaryUri: dictionaryUri, SearchText: query }),
      staleTime: 1000 * 60 * 5,
      retry: 1,
    });
    const classes = (result.dictionary?.classes ?? []).filter((c) => c.uri && c.name);
    const exact = classes.filter((c) => (c.name as string).toLowerCase() === query.toLowerCase());
    const match = exact.length === 1 ? exact[0] : classes.length === 1 ? classes[0] : null;
    return match
      ? { value: match.uri as string, label: match.name as string, code: match.referenceCode ?? undefined }
      : null;
  } catch {
    return null;
  }
}

function BsddSearch({ searchKey = 'objectType' }: BsddSearchProps) {
  const { t } = useTranslation();
  const queryClient = useQueryClient();

  const { onSave, onCancel } = useBsddBridge();

  const mainDictionary = useSettingsStore((s) => s.mainDictionary);
  const languageCode = useSettingsStore((s) => s.language);
  const activeDictionaryLocations = useSettingsStore(useShallow(selectActiveDictionaryUris));
  const filterDictionaryUris = useSettingsStore(
    useShallow((s) => s.filterDictionaries.map((d) => d.ifcClassification.location)),
  );
  const selectedIfcEntities = useIfcDataStore(useShallow(selectSelectedIfcEntities));
  const selectedMergedIfcEntity = useMemo(() => mergeIfcEntities(selectedIfcEntities), [selectedIfcEntities]);

  const mainDictionaryUri = mainDictionary?.ifcClassification.location;

  const [committedClass, setCommittedClass] = useState<CommittedClass | null>(null);
  const [isResolving, setIsResolving] = useState(false);
  const committedClassRef = useRef<CommittedClass | null>(null);
  const commitClass = useCallback((option: SearchOption | null, dictionaryUri: string | undefined) => {
    const next =
      option && dictionaryUri ? { uri: option.value, label: option.label, code: option.code, dictionaryUri } : null;
    committedClassRef.current = next;
    setCommittedClass(next);
  }, []);

  const mainClassificationUri =
    committedClass && committedClass.dictionaryUri === mainDictionaryUri ? committedClass.uri : null;

  const [activeClassifications, setActiveClassifications] = useState<ClassContractV1[]>([]);
  const [recursiveMode, setRecursiveMode] = useState<boolean>(false);

  const [height, setHeight] = useState(minHeight);
  const [panelHeight, setPanelHeight] = useState('auto');
  const [propertySetsOpened, setPropertySetsOpened] = useState<boolean>(false);

  // Fetch main classification details
  const { data: mainDictionaryClassification } = useClassDetails(
    mainClassificationUri,
    languageCode,
    filterDictionaryUris,
  );

  // Fetch property names when property sets panel is opened
  const classProperties = mainDictionaryClassification?.classProperties || [];
  usePropertyNames(propertySetsOpened ? classProperties : [], languageCode);

  // Seed / reconcile the committed class. A new host selection (Revit selection
  // window → updateSelection) always re-seeds from the incoming entity, like the
  // old defaultSelection flow. A dictionary change keeps a still-valid class or
  // re-maps it (association URI, or exact-match search on the previous label /
  // entity seed) and clears only when nothing resolves.
  const seededEntityRef = useRef<IfcEntity | null>(null);
  useEffect(() => {
    const entityChanged = seededEntityRef.current !== selectedMergedIfcEntity;
    seededEntityRef.current = selectedMergedIfcEntity;
    if (!mainDictionaryUri) {
      commitClass(null, undefined);
      return;
    }
    const current = committedClassRef.current;
    if (!entityChanged && current && current.dictionaryUri === mainDictionaryUri) return;

    const association = findAssociationOption(selectedMergedIfcEntity, mainDictionaryUri);
    if (association) {
      commitClass(association, mainDictionaryUri);
      return;
    }

    const seedText = entityChanged
      ? getTextSeed(selectedMergedIfcEntity, searchKey)
      : current?.label || getTextSeed(selectedMergedIfcEntity, searchKey);
    commitClass(null, undefined);
    if (!seedText) return;

    let cancelled = false;
    setIsResolving(true);
    resolveClassInDictionary(queryClient, mainDictionaryUri, seedText).then((option) => {
      if (cancelled) return;
      setIsResolving(false);
      // Don't overwrite a selection the user committed while we were resolving
      if (option && !committedClassRef.current) {
        commitClass(option, mainDictionaryUri);
      }
    });
    return () => {
      cancelled = true;
      setIsResolving(false);
    };
  }, [mainDictionaryUri, selectedMergedIfcEntity, searchKey, queryClient, commitClass]);

  // Upgrade the committed label/code to the bSDD-canonical name and code once the
  // class details arrive — association seeds carry whatever the model stored.
  useEffect(() => {
    const current = committedClassRef.current;
    if (!mainDictionaryClassification || !current) return;
    if (current.uri !== mainDictionaryClassification.uri) return;
    const { name, code, uri } = mainDictionaryClassification;
    if (current.label !== name || current.code !== code) {
      commitClass({ label: name, value: uri, code }, current.dictionaryUri);
    }
  }, [mainDictionaryClassification, commitClass]);

  const searchValue = useMemo<SearchOption | null>(
    () =>
      mainClassificationUri && committedClass
        ? { value: committedClass.uri, label: committedClass.label, code: committedClass.code }
        : null,
    [mainClassificationUri, committedClass],
  );
  const handleSearchCommit = useCallback(
    (option: SearchOption | null) => commitClass(option, mainDictionaryUri),
    [commitClass, mainDictionaryUri],
  );

  useEffect(() => {
    const classifications = [mainDictionaryClassification].filter(
      (classification) => classification !== null && classification !== undefined,
    ) as ClassContractV1[];
    setActiveClassifications(classifications);
  }, [mainDictionaryClassification]);

  // The main dictionary has no Slicer row — the Search input is its editor.
  const renderedDictionaryCount = Math.max(
    activeDictionaryLocations.filter((uri) => uri !== mainDictionaryUri).length,
    1,
  );

  useEffect(() => {
    setPanelHeight(`${height * renderedDictionaryCount + 48}px`);
  }, [renderedDictionaryCount, height]);

  const handleMouseMove = (e: { clientY: number }) => {
    const newHeight = startHeight + (e.clientY - startY) / renderedDictionaryCount;
    setHeight(newHeight > minHeight ? newHeight : minHeight);
  };

  const handleMouseUp = () => {
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  };

  const handleMouseDown = (e: { clientY: number }) => {
    startY = e.clientY;
    startHeight = height;
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const handleAccordionChange = (value: string[]) => {
    setPropertySetsOpened(value.includes('Propertysets'));
  };

  return (
    <Box>
      <TextInput type="hidden" name="ifcType" id="ifcType" value="" />
      <TextInput type="hidden" name="name" id="name" value="" />
      <TextInput type="hidden" name="material" id="material" value="" />
      <Group mx="md" mt="lg" mb="sm">
        <Search
          key={mainDictionaryUri ?? 'no-dictionary'}
          value={searchValue}
          onCommit={handleSearchCommit}
          seedText={getTextSeed(selectedMergedIfcEntity, searchKey)}
          resolving={isResolving}
        />
      </Group>
      {mainClassificationUri ? (
        <>
          <Accordion defaultValue={['Classifications']} multiple onChange={handleAccordionChange}>
            <Accordion.Item key="Classifications" value="Classifications">
              <Accordion.Control>
                <Title order={5}>{t('classificationsLabel')}</Title>
              </Accordion.Control>
              <Accordion.Panel style={{ height: panelHeight }}>
                <Classifications
                  height={height}
                  handleMouseDown={handleMouseDown}
                  mainDictionaryClassification={mainDictionaryClassification ?? null}
                />
              </Accordion.Panel>
            </Accordion.Item>
            <Accordion.Item key="Propertysets" value="Propertysets">
              <Accordion.Control>
                <Title order={5}>{t('propertysetsLabel')}</Title>
              </Accordion.Control>
              <Accordion.Panel>
                <PropertySets
                  activeClassifications={activeClassifications}
                  recursiveMode={recursiveMode}
                  mainClassificationUri={mainClassificationUri}
                />
              </Accordion.Panel>
            </Accordion.Item>
          </Accordion>
          <Group my="sm" justify="center">
            <Apply onSave={onSave} />
            <Button fullWidth variant="light" color="gray" onClick={onCancel}>
              {t('cancel')}
            </Button>
          </Group>
        </>
      ) : (
        <Alert mx="md" title={t('noClassificationSelected')} mt="xl">
          {t('classSearchInstruction')}
          <Space h="md" />
          {t('needHelp')}{' '}
          <a href="https://github.com/buildingsmart-community/bSDD-Revit-plugin/wiki" target="_blank" rel="noreferrer">
            {t('checkDocumentation')}
          </a>
        </Alert>
      )}
    </Box>
  );
}

export default BsddSearch;
