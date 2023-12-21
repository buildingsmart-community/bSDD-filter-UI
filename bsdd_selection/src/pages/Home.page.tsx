import { Container, Tabs } from '@mantine/core';
import { useEffect, useState } from 'react';
import { BsddBridgeData } from '../../../common/src/IfcData/bsddBridgeData';
import { mockData } from '../../../common/src/IfcData/mockData';
import Settings from '../features/Settings/Settings';
import Selection from '../features/Selection/Selection';
import { useTranslation } from 'react-i18next';
import { bsddEnvironments } from '../../../common/src/BsddApi/BsddApiEnvironments';
import { DictionaryContractV1 } from '../../../common/src/BsddApi/BsddApiBase';
import { BsddApi } from '../../../common/src/BsddApi/BsddApi';

export function HomePage() {
  const [bsddBridgeData, setBsddBridgeData] = useState<BsddBridgeData>(mockData);
  const [bsddApiEnvironment, setBsddApiEnvironment] = useState<string>('production');
  const [mainDictionary, setMainDictionary] = useState<DictionaryContractV1>();
  const [bsddDictionaries, setBsddDictionaries] = useState<DictionaryContractV1[]>([]);
  const [filterDictionaries, setFilterDictionaries] = useState<DictionaryContractV1[]>([]);
  const { t } = useTranslation();

  // @ts-ignore
  window.updateSelection = (inputSelection: BsddBridgeData) => {
    setBsddBridgeData(inputSelection);
  };

  // Get the initial settings
  useEffect(() => {
    if (bsddBridgeData.bsddApiEnvironment) {
      setBsddApiEnvironment(bsddBridgeData.bsddApiEnvironment);
    }
  }, [bsddBridgeData, setBsddApiEnvironment]);

  // Fetches the list of dictionaries from the bSDD API based on the selected environment.
  useEffect(() => {
    if (!bsddApiEnvironment) return;

    const api = new BsddApi(bsddEnvironments[bsddApiEnvironment]);
    api.api
      .dictionaryV1List()
      .then((response) => {
        // If the response is not ok, throw an error
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        console.log(response);
        if (response.data) {
          if (response.data.dictionaries) {
            setBsddDictionaries(response.data.dictionaries);
          }
        }
      })
      .catch((error) => {
        throw new Error(`bSDD API error! status: ${error}`);
      });
  }, [bsddApiEnvironment, setBsddDictionaries]);

  // Set the initial bSDD API environment
  useEffect(() => {
    if (bsddBridgeData.bsddApiEnvironment) {
      setBsddApiEnvironment(bsddBridgeData.bsddApiEnvironment);
    }
  }, [bsddBridgeData, setBsddApiEnvironment]);

  // Set the initial main dictionary
  useEffect(() => {
    const mainDictionaryUri = bsddBridgeData.mainDictionaryUri;
    if (!mainDictionaryUri) return;
    const mainDictionaryResult = bsddDictionaries.find((item) => item.uri === mainDictionaryUri);
    if (!mainDictionaryResult) return;
    setMainDictionary(mainDictionaryResult);
  }, [bsddBridgeData, bsddDictionaries]);

  // Set the initial filter dictionaries
  useEffect(() => {
    const filterDictionaryUris = bsddBridgeData.filterDictionaryUris;
    if (!filterDictionaryUris && filterDictionaries.length == 0) return;
    const filterDictionariesResult = bsddDictionaries.filter((item) => filterDictionaryUris.includes(item.uri));
    if (!filterDictionariesResult || filterDictionariesResult.length === 0) return;
    setFilterDictionaries(bsddDictionaries.filter((item) => filterDictionaryUris.includes(item.uri)));
  }, [bsddBridgeData, bsddDictionaries]);

  return (
    <>
      <Container size={'40rem'}>
        <Tabs defaultValue={'koppelen'}>
          <Tabs.List grow>
            <Tabs.Tab value={'koppelen'}>{t('Link')}</Tabs.Tab>
            <Tabs.Tab value={'settings'}>{t('Settings')}</Tabs.Tab>
          </Tabs.List>

          <Selection
            bsddApiEnvironment={bsddApiEnvironment}
            mainDictionaryUri={bsddBridgeData.mainDictionaryUri}
            ifcData={bsddBridgeData.ifcData}
          />
          <Settings
            bsddDictionaries={bsddDictionaries}
            bsddApiEnvironment={bsddApiEnvironment}
            setBsddApiEnvironment={setBsddApiEnvironment}
            mainDictionary={mainDictionary}
            setMainDictionary={setMainDictionary}
            filterDictionaries={filterDictionaries}
            setFilterDictionaries={setFilterDictionaries}
          />
        </Tabs>
      </Container>
    </>
  );
}
