import { Accordion, Alert, Button, Container, Group, Space, TextInput, Title } from '@mantine/core';
import { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { BsddApi } from '../../common/src/BsddApi/BsddApi';
import { bsddEnvironments } from '../../common/src/BsddApi/BsddApiEnvironments';
import { defaultEnvironment, isProduction } from '../../common/src/env';
import { BsddBridgeData, BsddSettings } from '../../common/src/ifc/bsddBridgeData';
import { IfcEntity, IfcPropertySet } from '../../common/src/ifc/ifc';
import { mockData } from '../../common/src/ifc/mockData';
import { useAppDispatch, useAppSelector } from './app/hooks';
import Apply from './Apply';
import Classifications from './Classifications';
import {
  fetchAndStoreDictionaryClasses,
  fetchDictionaries,
  fetchMainDictionaryClassification,
  selectMainDictionaryClassification,
  selectMainDictionaryClassificationUri,
  setMainDictionaryClassificationUri,
  updateDictionaries,
} from './features/bsdd/bsddSlice';
import { selectLoadedIfcEntity, setLoadedIfcEntities } from './features/ifc/ifcDataSlice';
import { selectIfcEntity, setIfcEntity } from './features/ifc/ifcEntitySlice';
import {
  selectActiveDictionaryUris,
  selectBsddApiEnvironmentUri,
  selectIncludeTestDictionaries,
  selectLanguage,
  selectMainDictionary,
  setSettings,
} from './features/settings/settingsSlice';
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

function BsddSearch() {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const [defaultSearch, setDefaultSearch] = useState<Option | undefined>();
  const [recursiveMode, setRecursiveMode] = useState<boolean>(false);
  const [api, setApi] = useState<BsddApi<unknown>>(new BsddApi(bsddEnvironments[defaultEnvironment]));
  const mainDictionary = useAppSelector(selectMainDictionary);
  const languageCode = useAppSelector(selectLanguage);

  const [pendingSettings, setPendingSettings] = useState<BsddSettings | null>(null);
  const bsddApiEnvironment = useAppSelector(selectBsddApiEnvironmentUri);
  const bsddApiEnvironmentUri = useAppSelector(selectBsddApiEnvironmentUri);
  const includeTestDictionaries = useAppSelector(selectIncludeTestDictionaries);
  const activeDictionaryLocations = useAppSelector(selectActiveDictionaryUris);
  const ifcEntity = useAppSelector(selectIfcEntity);
  const loadedIfcEntity = useAppSelector(selectLoadedIfcEntity);
  const mainDictionaryClassificationUri = useAppSelector(selectMainDictionaryClassificationUri);

  const [height, setHeight] = useState(minHeight); // Initial height
  const [panelHeight, setPanelHeight] = useState('auto'); // Initial height of the Accordion Panel

  const mainDictionaryClassification = useAppSelector(selectMainDictionaryClassification);

  const callback = useCallback((ifcProduct: IfcEntity) => {
    const ifcEntityJson = JSON.stringify(ifcProduct);

    // @ts-ignore
    window?.bsddBridge?.save(ifcEntityJson).then((actualResult) => {
      console.log('Sent to Revit', actualResult);
    });
  }, []);

  const cancel = useCallback(() => {
    // @ts-ignore
    window?.bsddBridge?.cancel();
  }, []);

  const dispatchSettingsWhenLoaded = (settings: BsddSettings) => {
    setPendingSettings(settings);
  };

  useEffect(() => {
    if (pendingSettings) {
      console.log('settings updated: ', pendingSettings);
      dispatch(setSettings(pendingSettings));
      setPendingSettings(null);
    }
  }, [pendingSettings, dispatch]);

  useEffect(() => {
    if (!bsddApiEnvironment) return;
    setApi(new BsddApi(bsddApiEnvironment));
  }, [bsddApiEnvironment]);

  useEffect(() => {
    const loadSettings = async () => {
      try {
        let settings;
        let ifcData;

        if (isProduction) {
          // @ts-ignore
          if (window?.bsddBridge) {
            // @ts-ignore
            const loadedSettings = await window.bsddBridge.loadSettings();
            ({ settings, ifcData } = JSON.parse(loadedSettings) as BsddBridgeData);
          }
        } else {
          ({ settings, ifcData } = mockData);
        }

        if (settings) {
          dispatchSettingsWhenLoaded(settings);
        }

        if (ifcData) {
          dispatch(setLoadedIfcEntities(ifcData));
          if (ifcData.length > 0) {
            const newLoadedIfcEntity = ifcData[0];
            dispatch(setIfcEntity(newLoadedIfcEntity));
          }
        }
      } catch (error) {
        console.error('Failed to load settings:', error);
      }
    };

    loadSettings();
  }, [dispatch]);

  useEffect(() => {
    if (!loadedIfcEntity || !mainDictionary) return;
    const newActiveClassificationUri = mainDictionary.ifcClassification.location;

    loadedIfcEntity.hasAssociations?.forEach((association) => {
      if (association.type === 'IfcClassificationReference') {
        const classificationReference = association;
        if (classificationReference.referencedSource?.location) {
          if (classificationReference.referencedSource.location === newActiveClassificationUri) {
            if (classificationReference.location) {
              dispatch(setMainDictionaryClassificationUri(classificationReference.location));
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
    if (bsddApiEnvironment !== null && includeTestDictionaries !== null) {
      const params = {
        bsddApiEnvironment,
        includeTestDictionaries,
        languageCode,
        dictionaryUris: activeDictionaryLocations,
      };

      dispatch(updateDictionaries(activeDictionaryLocations));
      dispatch(fetchDictionaries(params));
      dispatch(fetchAndStoreDictionaryClasses(params));
    }
  }, [
    bsddApiEnvironment,
    bsddApiEnvironmentUri,
    includeTestDictionaries,
    dispatch,
    activeDictionaryLocations,
    languageCode,
  ]);

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
            <Button fullWidth variant="light" color="gray" onClick={cancel}>
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
