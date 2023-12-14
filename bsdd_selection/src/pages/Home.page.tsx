import { Container, Tabs } from '@mantine/core';
import { useState } from 'react';
import { BsddBridgeData } from '../../../common/src/IfcData/bsddBridgeData';
import { mockData } from '../../../common/src/IfcData/mockData';
import Settings from '../features/Settings/Settings';
import Selection from '../features/Selection/Selection';

let CefSharp: any;

export function HomePage() {
  const [bsddBridgeData, setBsddBridgeData] = useState<BsddBridgeData>(mockData);

  // @ts-ignore
  window.updateSelection = (inputSelection: BsddBridgeData) => {
    setBsddBridgeData(inputSelection);
  };

  return (
    <>
      <Container size={'40rem'}>
        <Tabs defaultValue={'koppelen'}>
          <Tabs.List grow>
            <Tabs.Tab value={'koppelen'}>Koppelen</Tabs.Tab>
            <Tabs.Tab value={'settings'}>Settings</Tabs.Tab>
          </Tabs.List>

          <Selection
            bsddApiEnvironment={bsddBridgeData.bsddApiEnvironment}
            mainDictionaryUri={bsddBridgeData.mainDictionaryUri}
            ifcData={bsddBridgeData.ifcData}
          />
          <Settings bsddBridgeData={bsddBridgeData} />
        </Tabs>
      </Container>
    </>
  );
}
