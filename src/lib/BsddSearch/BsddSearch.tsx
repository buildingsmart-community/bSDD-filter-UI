import { Accordion, Alert, Box, Button, Group, Space, TextInput, Title } from '@mantine/core';
import { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useShallow } from 'zustand/react/shallow';

import type { ClassContractV1 } from '../../../shared/bsdd-api/generated/types.gen';
import { useClassDetails } from '../api/hooks/useClassDetails';
import { usePropertyNames } from '../api/hooks/usePropertyNames';
import type { BsddDictionary } from '../common/IfcData/bsddBridgeData';
import type { IfcEntity, IfcPropertySet } from '../common/IfcData/ifc';
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

const minHeight = 60.7969;
let startY = 0;
let startHeight = 0;

const getDefaultSearchOption = (
  selectedMergedIfcEntity: IfcEntity | null,
  mainDictionary: BsddDictionary | null,
  searchKey: keyof IfcEntity,
  setMainClassificationUri: (uri: string | null) => void,
): Option | undefined => {
  if (!selectedMergedIfcEntity || !mainDictionary) return undefined;

  const newActiveClassificationUri = mainDictionary.ifcClassification.location;

  let defaultSearchOption: Option | undefined;

  selectedMergedIfcEntity.hasAssociations?.forEach((association) => {
    if (association.type === 'IfcClassificationReference') {
      const classificationReference = association;
      if (classificationReference.referencedSource?.location === newActiveClassificationUri) {
        if (classificationReference.location) {
          setMainClassificationUri(classificationReference.location);
        }
        defaultSearchOption = {
          label: classificationReference.name,
          value: classificationReference.location,
        } as Option;
      }
    }
  });

  if (
    !defaultSearchOption &&
    searchKey &&
    selectedMergedIfcEntity[searchKey] &&
    selectedMergedIfcEntity[searchKey] !== '' &&
    selectedMergedIfcEntity[searchKey] !== '...'
  ) {
    defaultSearchOption = {
      label: selectedMergedIfcEntity[searchKey] as string,
      value: selectedMergedIfcEntity[searchKey] as string,
    } as Option;
  }

  return defaultSearchOption;
};

function BsddSearch({ searchKey = 'objectType' }: BsddSearchProps) {
  const { t } = useTranslation();

  const { onSave, onCancel } = useBsddBridge();

  const mainDictionary = useSettingsStore((s) => s.mainDictionary);
  const languageCode = useSettingsStore((s) => s.language);
  const activeDictionaryLocations = useSettingsStore(useShallow(selectActiveDictionaryUris));
  const filterDictionaryUris = useSettingsStore(
    useShallow((s) => s.filterDictionaries.map((d) => d.ifcClassification.location)),
  );
  const selectedIfcEntities = useIfcDataStore(useShallow(selectSelectedIfcEntities));
  const selectedMergedIfcEntity = useMemo(() => mergeIfcEntities(selectedIfcEntities), [selectedIfcEntities]);

  const [mainClassificationUri, setMainClassificationUri] = useState<string | null>(null);
  const [defaultSearch, setDefaultSearch] = useState<Option | undefined>();
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

  useEffect(() => {
    const defaultSearchOption = getDefaultSearchOption(
      selectedMergedIfcEntity,
      mainDictionary,
      searchKey,
      setMainClassificationUri,
    );
    setDefaultSearch(defaultSearchOption);
  }, [mainDictionary, selectedMergedIfcEntity, searchKey]);

  useEffect(() => {
    const classifications = [mainDictionaryClassification].filter(
      (classification) => classification !== null && classification !== undefined,
    ) as ClassContractV1[];
    setActiveClassifications(classifications);
  }, [mainDictionaryClassification]);

  useEffect(() => {
    setPanelHeight(`${height * activeDictionaryLocations.length + 48}px`);
  }, [activeDictionaryLocations.length, height]);

  const handleMouseMove = (e: { clientY: number }) => {
    const newHeight = startHeight + (e.clientY - startY) / activeDictionaryLocations.length;
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
        <Search defaultSelection={defaultSearch} onClassificationSelect={setMainClassificationUri} />
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
                  mainClassificationUri={mainClassificationUri}
                  onMainClassificationChange={setMainClassificationUri}
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
