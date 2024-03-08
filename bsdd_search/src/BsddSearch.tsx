import { Accordion, Button, Container, Group, TextInput, Title } from '@mantine/core';
import { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { BsddApi } from '../../common/src/BsddApi/BsddApi';
import { ClassContractV1, DictionaryContractV1, RequestParams } from '../../common/src/BsddApi/BsddApiBase';
import { isProduction } from '../../common/src/env';
import { BsddSettings } from '../../common/src/IfcData/bsddBridgeData';
import { IfcEntity, IfcPropertySet } from '../../common/src/IfcData/ifc';
import { mockData } from '../../common/src/IfcData/mockData';
import { useAppDispatch, useAppSelector } from './app/hooks';
import Apply from './Apply';
import Classifications from './Classifications';
import { setIfcData } from './features/ifcData/ifcDataSlice';
import {
  selectActiveDictionaries,
  selectBsddApiEnvironmentUri,
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

const fetchDictionary = async (api: BsddApi<unknown>, uri: string) => {
  try {
    const response = await api.api.dictionaryV1List({
      Uri: uri,
      IncludeTestDictionaries: true,
    });
    const { dictionaries } = response.data;
    if (dictionaries) {
      return dictionaries.reduce((accumulator: any, domain: { uri: string }) => {
        if (domain.uri) {
          return { ...accumulator, [domain.uri]: domain };
        }
        return accumulator;
      }, {});
    }
  } catch (error) {
    console.error(`Failed to fetch dictionary ${uri}:`, error);
  }
  return {};
};

function BsddSearch() {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const [activeClassificationUri, setActiveClassificationUri] = useState<string>();
  const [defaultSearch, setDefaultSearch] = useState<Option | undefined>();
  const [ifcEntity, setIfcEntity] = useState<IfcEntity | undefined>();
  const [recursiveMode, setRecursiveMode] = useState<boolean>(false);
  const [domains, setDomains] = useState<{ [id: string]: DictionaryContractV1 }>({});
  const [classifications, setClassifications] = useState<ClassContractV1[]>([]);
  const [propertySets, setPropertySets] = useState<{ [id: string]: IfcPropertySet }>({});
  const [api, setApi] = useState<BsddApi<unknown>>(new BsddApi('https://test.bsdd.buildingsmart.org'));
  const mainDictionary = useAppSelector(selectMainDictionary);
  const [pendingSettings, setPendingSettings] = useState<BsddSettings | null>(null);
  const bsddApiEnvironment = useAppSelector(selectBsddApiEnvironmentUri);
  const activeDictionaries = useAppSelector(selectActiveDictionaries);

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
        const { settings, ifcData } = JSON.parse(loadedSettings);
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
            if (!classificationReference.location) return;
            setActiveClassificationUri(classificationReference.location);
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
    const fetchAllDictionaries = async () => {
      const allDomains = await Promise.all(
        activeDictionaries.map((dictionaryOption) => fetchDictionary(api, dictionaryOption.value)),
      );

      const newDomains = allDomains.reduce((accumulator, dictionary) => {
        return { ...accumulator, ...dictionary };
      }, {});

      setDomains(newDomains);
    };

    fetchAllDictionaries();
  }, [api, activeDictionaries]);

  return (
    <Container>
      <TextInput type="hidden" name="ifcType" id="ifcType" value="" />
      <TextInput type="hidden" name="name" id="name" value="" />
      <TextInput type="hidden" name="material" id="material" value="" />
      <Group mx="md" mt="lg" mb="sm">
        <Search api={api} defaultValue={defaultSearch} setActiveClassificationUri={setActiveClassificationUri} />
      </Group>

      <Accordion defaultValue={['Classifications']} multiple>
        <Accordion.Item key="Classifications" value="Classifications">
          <Accordion.Control>
            <Title order={5}>{t('Classifications')}</Title>
          </Accordion.Control>
          <Accordion.Panel>
            <Classifications
              api={api}
              activeClassificationUri={activeClassificationUri}
              setClassifications={setClassifications}
              domains={domains}
            />
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item key="Propertysets" value="Propertysets">
          <Accordion.Control>
            <Title order={5}>{t('Propertysets')}</Title>
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
          domains={domains}
          classifications={classifications}
          propertySetMap={propertySets}
          ifcEntity={ifcEntity}
        />
        <Button fullWidth variant="light" color="gray" onClick={cancel}>
          {t('Cancel')}
        </Button>
      </Group>
    </Container>
  );
}

export default BsddSearch;
