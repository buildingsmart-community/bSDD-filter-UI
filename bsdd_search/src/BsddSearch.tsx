import { Accordion, Button, Container, Group, Text, TextInput, Title } from '@mantine/core';
import { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { BsddApi } from '../../common/src/BsddApi/BsddApi';
import { ClassContractV1, DictionaryContractV1, RequestParams } from '../../common/src/BsddApi/BsddApiBase';
import { bsddEnvironments } from '../../common/src/BsddApi/BsddApiEnvironments';
import { isProduction } from '../../common/src/env';
import { IfcEntity, IfcPropertySet } from '../../common/src/IfcData/ifc';
import Apply from './Apply';
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

function BsddSearch() {
  const { t } = useTranslation();

  const [environment, setEnvironment] = useState<string>();
  const [baseUrl, setBaseUrl] = useState<string>();
  const [activeClassificationUri, setActiveClassificationUri] = useState<string>();
  const [defaultSearch, setDefaultSearch] = useState<Option | undefined>();
  const [ifcEntity, setIfcEntity] = useState<IfcEntity | undefined>();
  const [recursiveMode, setRecursiveMode] = useState<boolean>(false);
  const [activeDomains, setActiveDomains] = useState<Option[]>([]);
  const [domains, setDomains] = useState<{ [id: string]: DictionaryContractV1 }>({});
  const [classifications, setClassifications] = useState<ClassContractV1[]>([]);
  const [propertySets, setPropertySets] = useState<{ [id: string]: IfcPropertySet }>({});
  const [accessToken, setAccessToken] = useState<string>('');
  const [api, setApi] = useState<BsddApi<unknown>>(new BsddApi('https://test.bsdd.buildingsmart.org'));

  useEffect(() => {
    if (!environment) return;
    setBaseUrl(
      environment && bsddEnvironments[environment]
        ? bsddEnvironments[environment]
        : 'https://test.bsdd.buildingsmart.org',
    );
  }, [environment]);

  useEffect(() => {
    if (!baseUrl) return;
    setApi(new BsddApi(baseUrl));
  }, [baseUrl]);

  // Initial config load
  useEffect(() => {
    if (isProduction) return;

    const loadConfig = async () => {
      const config: BsddConfig = {
        baseUrl: 'https://test.bsdd.buildingsmart.org',
        defaultDomains: [
          {
            value: 'https://identifier.buildingsmart.org/uri/digibase/basisbouwproducten/0.8.0',
            label: 'Basis bouwproducten',
          },
        ],
        defaultSearch: {
          value: 'https://identifier.buildingsmart.org/uri/digibase/basisbouwproducten/0.8.0/class/knieschot',
          label: 'knieschot',
        },
      };

      if (config && config.defaultDomains && config.defaultDomains.length) {
        setActiveDomains(config.defaultDomains);
      }
      if (config.baseUrl) {
        setEnvironment(config.baseUrl);
      }
      if (config.defaultSearch) {
        setDefaultSearch(config.defaultSearch);
      }
      if (config.ifcEntity) {
        setIfcEntity(config.ifcEntity);
      }
    };

    loadConfig();
  }, []);

  // Initial config load
  useEffect(() => {
    const loadConfig = async () => {
      // @ts-ignore
      if (window?.bsddBridge) {
        // @ts-ignore
        const settings = await window.bsddBridge.loadConfig();
        if (!settings) return;
        const parsedConfig = JSON.parse(settings);
        const config: BsddConfig = parsedConfig;
        if (config && config.defaultDomains && config.defaultDomains.length) {
          setActiveDomains(config.defaultDomains);
        }
        if (config.baseUrl) {
          setEnvironment(config.baseUrl);
        }
        if (config.defaultSearch) {
          setDefaultSearch(config.defaultSearch);
        }
        if (config.ifcEntity) {
          setIfcEntity(config.ifcEntity);
        }
      }
    };

    loadConfig();
  }, []);

  const callback = useCallback((ifcProduct: IfcEntity) => {
    console.log('ifcProduct', ifcProduct);
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

  // always set domains to the defaultDomains from the config
  useEffect(() => {
    const params: RequestParams = {
      headers: { Accept: 'text/plain' },
    };

    if (accessToken !== '') {
      params.headers = { ...params.headers, Authorization: `Bearer ${accessToken}` };
    }
    const fetchDictionaries = async () => {
      try {
        const response = await api.api.dictionaryV1List(
          { IncludeTestDictionaries: true, Offset: 0, Limit: 1000 },
          params,
        );
        const { dictionaries } = response.data;
        if (dictionaries) {
          const newDomains = dictionaries.reduce((accumulator, domain) => {
            if (domain.uri) {
              return { ...accumulator, [domain.uri]: domain };
            }
            return accumulator;
          }, {});

          setDomains(newDomains);
        }
      } catch (error) {
        console.error('Failed to fetch dictionaries:', error);
      }
    };

    fetchDictionaries();
  }, [api, setDomains, accessToken]);

  return (
    <Container>
      <TextInput type="hidden" name="ifcType" id="ifcType" value="" />
      <TextInput type="hidden" name="name" id="name" value="" />
      <TextInput type="hidden" name="material" id="material" value="" />
      <Group mx="md" mt="lg" mb="sm">
        <Search
          api={api}
          activeDomains={activeDomains}
          defaultValue={defaultSearch}
          setActiveClassificationUri={setActiveClassificationUri}
          accessToken={accessToken}
        />
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
              accessToken={accessToken}
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
