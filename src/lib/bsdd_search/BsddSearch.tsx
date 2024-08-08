import { Accordion, Alert, Button, Container, Group, Space, TextInput, Title } from '@mantine/core';
import { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { mockData } from '../../mockData';
import { useApiFunctions } from '../common/apiFunctionsContext';
import { useAppDispatch, useAppSelector } from '../common/app/hooks';
import { BsddApi } from '../common/BsddApi/BsddApi';
import { bsddEnvironments } from '../common/BsddApi/BsddApiEnvironments';
import { defaultEnvironment, isProduction } from '../common/env';
import { BsddBridgeData, BsddSettings } from '../common/IfcData/bsddBridgeData';
import { IfcEntity, IfcPropertySet } from '../common/IfcData/ifc';
import {
  fetchAndStoreDictionaryClasses,
  fetchDictionaries,
  fetchMainDictionaryClassification,
  selectMainDictionaryClassification,
  selectMainDictionaryClassificationUri,
  updateDictionaries,
  updateMainDictionaryClassificationUri,
} from '../common/slices/bsddSlice';
import { selectLoadedIfcEntity, setLoadedIfcEntities } from '../common/slices/ifcDataSlice';
import { selectIfcEntity, setIfcEntity } from '../common/slices/ifcEntitySlice';
import {
  selectActiveDictionaryUris,
  selectIncludeTestDictionaries,
  selectLanguage,
  selectMainDictionary,
  setSettings,
} from '../common/slices/settingsSlice';
import Apply from './Apply';
import { BsddSearchProps } from './BsddSearchProps';
import Classifications from './Classifications';
import PropertySets from './PropertySets';
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

export type PropertySetMap = Record<string, IfcPropertySet>;

const minHeight = 60.7969;
let startY = 0;
let startHeight = 0;

function BsddSearch({ selectedIfcEntity }: BsddSearchProps) {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const { bsddSearchLoadSettings, bsddSearchSave, bsddSearchCancel } = useApiFunctions();

  const [defaultSearch, setDefaultSearch] = useState<Option | undefined>();
  const [recursiveMode, setRecursiveMode] = useState<boolean>(false);
  const [api, setApi] = useState<BsddApi<unknown>>(new BsddApi(bsddEnvironments[defaultEnvironment]));
  const mainDictionary = useAppSelector(selectMainDictionary);
  const languageCode = useAppSelector(selectLanguage);

  const includeTestDictionaries = useAppSelector(selectIncludeTestDictionaries);
  const activeDictionaryLocations = useAppSelector(selectActiveDictionaryUris);
  const ifcEntity = useAppSelector(selectIfcEntity);
  const loadedIfcEntity = useAppSelector(selectLoadedIfcEntity);
  const mainDictionaryClassificationUri = useAppSelector(selectMainDictionaryClassificationUri);

  const [height, setHeight] = useState(minHeight); // Initial height
  const [panelHeight, setPanelHeight] = useState('auto'); // Initial height of the Accordion Panel

  const mainDictionaryClassification = useAppSelector(selectMainDictionaryClassification);

  const callback = useCallback(
    (ifcProduct: IfcEntity) => {
      const ifcEntityJson = JSON.stringify(ifcProduct);

      bsddSearchSave(ifcEntityJson).then((actualResult) => {
        console.log('Sent iFC data back to host', actualResult);
      });
    },
    [bsddSearchSave],
  );

  useEffect(() => {
    if (!loadedIfcEntity || !mainDictionary) return;
    const newActiveClassificationUri = mainDictionary.ifcClassification.location;

    loadedIfcEntity.hasAssociations?.forEach((association) => {
      if (association.type === 'IfcClassificationReference') {
        const classificationReference = association;
        if (classificationReference.referencedSource?.location) {
          if (classificationReference.referencedSource.location === newActiveClassificationUri) {
            if (classificationReference.location) {
              dispatch(updateMainDictionaryClassificationUri(classificationReference.location));
            }
            setDefaultSearch({
              label: classificationReference.name,
              value: classificationReference.location,
            } as Option);
          }
        }
      }
    });
  }, [mainDictionary, loadedIfcEntity, dispatch]);

  useEffect(() => {
    if (includeTestDictionaries !== null) {
      dispatch(updateDictionaries(activeDictionaryLocations));
      dispatch(fetchDictionaries(includeTestDictionaries));
      dispatch(fetchAndStoreDictionaryClasses(activeDictionaryLocations));
    }
  }, [includeTestDictionaries, dispatch, activeDictionaryLocations, languageCode]);

  useEffect(() => {
    if (mainDictionaryClassificationUri) {
      dispatch(fetchMainDictionaryClassification(mainDictionaryClassificationUri));
    }
  }, [mainDictionaryClassificationUri, dispatch]);

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

  return (
    <Container>
      <TextInput type="hidden" name="ifcType" id="ifcType" value="" />
      <TextInput type="hidden" name="name" id="name" value="" />
      <TextInput type="hidden" name="material" id="material" value="" />
      <Group mx="md" mt="lg" mb="sm">
        <Search api={api} defaultSelection={defaultSearch} />
      </Group>
      {mainDictionaryClassificationUri ? (
        <>
          <Accordion defaultValue={['Classifications']} multiple>
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
                <PropertySets
                  mainDictionaryClassification={mainDictionaryClassification}
                  recursiveMode={recursiveMode}
                />
              </Accordion.Panel>
            </Accordion.Item>
          </Accordion>
          <Group my="sm" justify="center">
            <Apply callback={callback} ifcEntity={ifcEntity} />
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
    </Container>
  );
}

export default BsddSearch;
