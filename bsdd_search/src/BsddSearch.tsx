import { Accordion, Alert, Button, Container, Group, Space, TextInput, Title } from '@mantine/core';
import { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { BsddApi } from '../../common/src/BsddApi/BsddApi';
import { ClassContractV1 } from '../../common/src/BsddApi/BsddApiBase';
import { bsddEnvironments } from '../../common/src/BsddApi/BsddApiEnvironments';
import { defaultEnvironment, isProduction } from '../../common/src/env';
import { BsddBridgeData, BsddSettings } from '../../common/src/ifc/bsddBridgeData';
import { IfcEntity, IfcPropertySet } from '../../common/src/ifc/ifc';
import { mockData } from '../../common/src/ifc/mockData';
import { useAppDispatch, useAppSelector } from './app/hooks';
import Apply from './Apply';
import Classifications from './Classifications';
import { fetchAndStoreDictionaryClasses, fetchDictionaries, updateDictionaries } from './features/bsdd/bsddSlice';
import { setIfcData } from './features/ifc/ifcDataSlice';
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

function BsddSearch() {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const [activeClassificationUri, setActiveClassificationUri] = useState<string>();
  const [defaultSearch, setDefaultSearch] = useState<Option | undefined>();
  const [ifcEntity, setIfcEntity] = useState<IfcEntity | undefined>();
  const [recursiveMode, setRecursiveMode] = useState<boolean>(false);
  const [classifications, setClassifications] = useState<ClassContractV1[]>([]);
  const [propertySets, setPropertySets] = useState<{ [id: string]: IfcPropertySet }>({});
  const [api, setApi] = useState<BsddApi<unknown>>(new BsddApi(bsddEnvironments[defaultEnvironment]));
  const mainDictionary = useAppSelector(selectMainDictionary);
  const languageCode = useAppSelector(selectLanguage);

  const [pendingSettings, setPendingSettings] = useState<BsddSettings | null>(null);
  const bsddApiEnvironment = useAppSelector(selectBsddApiEnvironmentUri);
  const bsddApiEnvironmentUri = useAppSelector(selectBsddApiEnvironmentUri);
  const includeTestDictionaries = useAppSelector(selectIncludeTestDictionaries);
  const activeDictionaryLocations = useAppSelector(selectActiveDictionaryUris);

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
    if (isProduction) return;

    const { settings, ifcData } = mockData;
    dispatch(setIfcData(ifcData));
    dispatchSettingsWhenLoaded(settings);
    if (!ifcData || ifcData.length === 0) return;

    const newIfcEntity = ifcData[0];

    setIfcEntity(newIfcEntity);
  }, [dispatch]);

  useEffect(() => {
    const loadSettings = async () => {
      // @ts-ignore
      if (window?.bsddBridge) {
        // @ts-ignore
        const loadedSettings = await window.bsddBridge.loadSettings();
        const { settings, ifcData } = JSON.parse(loadedSettings) as BsddBridgeData;
        dispatch(setIfcData(ifcData));
        dispatchSettingsWhenLoaded(settings);
        if (!ifcData || ifcData.length === 0) return;

        setIfcEntity(ifcData[0]);
      }
    };

    loadSettings();
  }, []);

  useEffect(() => {
    if (!ifcEntity || !mainDictionary) return;
    const newActiveClassificationUri = mainDictionary.ifcClassification.location;

    ifcEntity.hasAssociations?.forEach((association) => {
      if (association.type === 'IfcClassificationReference') {
        const classificationReference = association;
        if (classificationReference.referencedSource?.location) {
          if (classificationReference.referencedSource.location === newActiveClassificationUri) {
            if (classificationReference.location) {
              setActiveClassificationUri(classificationReference.location);
            }
            setDefaultSearch({
              label: classificationReference.name,
              value: classificationReference.location,
            } as Option);
          }
        }
      }
    });
  }, [mainDictionary, ifcEntity]);

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

  return (
    <Container>
      <TextInput type="hidden" name="ifcType" id="ifcType" value="" />
      <TextInput type="hidden" name="name" id="name" value="" />
      <TextInput type="hidden" name="material" id="material" value="" />
      <Group mx="md" mt="lg" mb="sm">
        <Search api={api} defaultValue={defaultSearch} setActiveClassificationUri={setActiveClassificationUri} />
      </Group>

      {activeClassificationUri ? (
        <>
          <Accordion defaultValue={['Classifications']} multiple>
            <Accordion.Item key="Classifications" value="Classifications">
              <Accordion.Control>
                <Title order={5}>{t('classificationsLabel')}</Title>
              </Accordion.Control>
              <Accordion.Panel>
                <Classifications
                  api={api}
                  activeClassificationUri={activeClassificationUri}
                  classifications={classifications}
                  setClassifications={setClassifications}
                />
              </Accordion.Panel>
            </Accordion.Item>
            <Accordion.Item key="Propertysets" value="Propertysets">
              <Accordion.Control>
                <Title order={5}>{t('propertysetsLabel')}</Title>
              </Accordion.Control>
              <Accordion.Panel>
                <PropertySets
                  classifications={classifications}
                  propertySets={propertySets}
                  setPropertySets={setPropertySets}
                  recursiveMode={recursiveMode}
                />
              </Accordion.Panel>
            </Accordion.Item>
          </Accordion>
          <Group my="sm" justify="center">
            <Apply
              callback={callback}
              classifications={classifications}
              propertySetMap={propertySets}
              ifcEntity={ifcEntity}
            />
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
