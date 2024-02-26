import { useEffect, useState } from 'react';
import { MsalProvider } from '@azure/msal-react';
import { PublicClientApplication } from '@azure/msal-browser';

import Search from './Search';
import Classifications from './Classifications';
import PropertySets from './PropertySets';
import Apply from './Apply';
import { IfcEntity, IfcPropertySet } from '../../../common/src/IfcData/ifc';
import { bsddEnvironments } from '../../../common/src/BsddApi/BsddApiEnvironments';
import { BsddApi } from '../../../common/src/BsddApi/BsddApi';
import { ClassContractV1, DictionaryContractV1, RequestParams } from '../../../common/src/BsddApi/BsddApiBase';
import { Accordion, Text, Container, Group, TextInput, Title, Button } from '@mantine/core';
import { useTranslation } from 'react-i18next';

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

interface Props {
  callback: (value: IfcEntity) => void;
  config: BsddConfig;
  msalInstance: PublicClientApplication;
}

function BsddSearch({ callback, config, msalInstance }: Props) {
  const { t } = useTranslation();
  const [activeClassificationUri, setActiveClassificationUri] = useState<string>();
  const [recursiveMode, setRecursiveMode] = useState<boolean>(false);
  const [activeDomains, setActiveDomains] = useState<Option[]>(getDefaultDomains());
  const [domains, setDomains] = useState<{ [id: string]: DictionaryContractV1 }>({});
  const [classifications, setClassifications] = useState<ClassContractV1[]>([]);
  const [propertySets, setPropertySets] = useState<{ [id: string]: IfcPropertySet }>({});
  const [accessToken, setAccessToken] = useState<string>('');
  const [api, setApi] = useState<BsddApi<unknown>>(new BsddApi('https://test.bsdd.buildingsmart.org'));

  useEffect(() => {
    const baseUrl =
      config.baseUrl && bsddEnvironments[config.baseUrl]
        ? bsddEnvironments[config.baseUrl]
        : 'https://test.bsdd.buildingsmart.org';
    setApi(new BsddApi(baseUrl));
  }, [config]);

  function getDefaultDomains(): Option[] {
    if (config && config.defaultDomains && config.defaultDomains.length) {
      return config.defaultDomains;
    }
    return [];
  }

  const params: RequestParams = {
    headers: { Accept: 'text/plain' },
  };

  if (accessToken !== '') {
    params.headers = { ...params.headers, Authorization: 'Bearer ' + accessToken };
  }

  // always set domains to the defaultDomains from the config
  useEffect(() => {
    const fetchDictionaries = async () => {
      try {
        const response: any = await api.api.dictionaryV1List(undefined, params);
        const dictionaries: DictionaryContractV1[] = response.data.dictionaries;
        if (dictionaries) {
          const selectOptions = dictionaries
            .filter((domain) => domain.uri && domain.name)
            .map((domain) => ({
              value: domain.uri,
              label: domain.name,
            }));

          const domains = dictionaries.reduce((accumulator, domain) => {
            if (domain.uri) {
              return { ...accumulator, [domain.uri]: domain };
            }
            return accumulator;
          }, {});

          setDomains(domains);
        }
      } catch (error) {
        console.error('Failed to fetch dictionaries:', error);
      }
    };

    fetchDictionaries();
  }, [api, setDomains, accessToken]);

  return (
    <MsalProvider instance={msalInstance}>
      <Container>
        <TextInput type="hidden" name="ifcType" id="ifcType" value="" />
        <TextInput type="hidden" name="name" id="name" value="" />
        <TextInput type="hidden" name="material" id="material" value="" />
        <Group mx="md" mt="lg" mb="sm">
          <Search
            api={api}
            activeDomains={activeDomains}
            defaultValue={config?.defaultSearch}
            setActiveClassificationUri={setActiveClassificationUri}
            accessToken={accessToken}
          />
        </Group>

        <Accordion defaultValue={['Classifications']} multiple>
          <Accordion.Item key={'Classifications'} value={'Classifications'}>
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
          <Accordion.Item key={'Propertysets'} value={'Propertysets'}>
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
            ifcEntity={config.ifcEntity}
          />
          <Button fullWidth variant="light" color="gray">
            {t('Cancel')}
          </Button>
        </Group>
      </Container>
    </MsalProvider>
  );
}

export default BsddSearch;
