import { Accordion, Alert, Box, Button, Group, Space, TextInput, Title } from '@mantine/core';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { useApiFunctions } from '../common/apiFunctionsContext';
import { useAppDispatch, useAppSelector } from '../common/app/hooks';
import { BsddApi } from '../common/BsddApi/BsddApi';
import { ClassContractV1 } from '../common/BsddApi/BsddApiBase';
import { bsddEnvironments } from '../common/BsddApi/BsddApiEnvironments';
import { defaultEnvironment } from '../common/env';
import { BsddDictionary } from '../common/IfcData/bsddBridgeData';
import { IfcEntity, IfcPropertySet } from '../common/IfcData/ifc';
import {
  selectFilterDictionaryClassifications,
  selectIfcDictionaryClassification,
  selectMainDictionaryClassification,
  selectMainDictionaryClassificationUri,
  updateMainDictionaryClassificationUri,
  updatePropertyNaturalLanguageNames,
} from '../common/slices/bsddSlice';
import { selectMergedIfcEntity } from '../common/slices/ifcDataSlice';
import { selectActiveDictionaryUris, selectLanguage, selectMainDictionary } from '../common/slices/settingsSlice';
import Apply from './Apply';
import Classifications from './features/Classifications/Classifications';
import PropertySets from './features/PropertySets/PropertySets';
import Search from './Search';

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
  dispatch: any,
): Option | undefined => {
  if (!selectedMergedIfcEntity || !mainDictionary) return undefined;

  const newActiveClassificationUri = mainDictionary.ifcClassification.location;

  let defaultSearchOption: Option | undefined;

  selectedMergedIfcEntity.hasAssociations?.forEach((association) => {
    if (association.type === 'IfcClassificationReference') {
      const classificationReference = association;
      if (classificationReference.referencedSource?.location === newActiveClassificationUri) {
        if (classificationReference.location) {
          dispatch(updateMainDictionaryClassificationUri(classificationReference.location));
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
  const dispatch = useAppDispatch();

  const { bsddSearchSave, bsddSearchCancel } = useApiFunctions();

  const mainDictionary = useAppSelector(selectMainDictionary);
  const languageCode = useAppSelector(selectLanguage);
  const activeDictionaryLocations = useAppSelector(selectActiveDictionaryUris);
  const selectedMergedIfcEntity = useAppSelector(selectMergedIfcEntity);
  const mainDictionaryClassificationUri = useAppSelector(selectMainDictionaryClassificationUri);
  const mainDictionaryClassification = useAppSelector(selectMainDictionaryClassification);
  const ifcDictionaryClassification = useAppSelector(selectIfcDictionaryClassification);
  const filterDictionaryClassifications = useAppSelector(selectFilterDictionaryClassifications);

  const [defaultSearch, setDefaultSearch] = useState<Option | undefined>();
  const [activeClassifications, setActiveClassifications] = useState<ClassContractV1[]>([]);
  const [recursiveMode, setRecursiveMode] = useState<boolean>(false);

  const [height, setHeight] = useState(minHeight); // Initial height
  const [panelHeight, setPanelHeight] = useState('auto'); // Initial height of the Accordion Panel
  const [propertySetsOpened, setPropertySetsOpened] = useState<boolean>(false);

  useEffect(() => {
    if (!mainDictionaryClassification || !propertySetsOpened) return;
    const classProperties = mainDictionaryClassification.classProperties || [];
    dispatch(updatePropertyNaturalLanguageNames({ classProperties, languageCode }));
  }, [mainDictionaryClassification, propertySetsOpened, languageCode, dispatch]);

  useEffect(() => {
    const defaultSearchOption = getDefaultSearchOption(selectedMergedIfcEntity, mainDictionary, searchKey, dispatch);
    setDefaultSearch(defaultSearchOption);
  }, [mainDictionary, selectedMergedIfcEntity, dispatch, searchKey]);

  useEffect(() => {
    const classifications = [
      mainDictionaryClassification,
      ifcDictionaryClassification,
      ...filterDictionaryClassifications,
    ].filter((classification) => classification !== null);

    setActiveClassifications(classifications);
  }, [mainDictionaryClassification, filterDictionaryClassifications, ifcDictionaryClassification]);

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
        <Search defaultSelection={defaultSearch} />
      </Group>
      {mainDictionaryClassificationUri ? (
        <>
          <Accordion defaultValue={['Classifications']} multiple onChange={handleAccordionChange}>
            <Accordion.Item key="Classifications" value="Classifications">
              <Accordion.Control>
                <Title order={5}>{t('classificationsLabel')}</Title>
              </Accordion.Control>
              <Accordion.Panel style={{ height: panelHeight }}>
                <Classifications height={height} handleMouseDown={handleMouseDown} />
              </Accordion.Panel>
            </Accordion.Item>
            <Accordion.Item key="Propertysets" value="Propertysets">
              <Accordion.Control>
                <Title order={5}>{t('propertysetsLabel')}</Title>
              </Accordion.Control>
              <Accordion.Panel>
                <PropertySets activeClassifications={activeClassifications} recursiveMode={recursiveMode} />
              </Accordion.Panel>
            </Accordion.Item>
          </Accordion>
          <Group my="sm" justify="center">
            <Apply bsddSearchSave={bsddSearchSave} />
            <Button fullWidth variant="light" color="gray" onClick={bsddSearchCancel}>
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
