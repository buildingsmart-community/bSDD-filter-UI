import { Modal } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useState } from 'react';

import BsddSearch from './lib/bsdd_search/main';
import BsddSelection from './lib/bsdd_selection/main';
import { ApiFunctionsProvider } from './lib/common/apiFunctionsContext';
import useCefSharpBridge from './lib/common/bsddBridge/useCefSharpBridge';
import { IfcEntity } from './lib/common/IfcData/ifc';
import { mockData } from './mocks/mockData';

function BsddCombinedLoader() {
  const [opened, { open, close }] = useDisclosure(false);
  const [selectedIfcEntity, setSelectedIfcEntity] = useState<IfcEntity | undefined>(mockData.ifcData[0]);
  const { bsddSearchSave, bsddSearchCancel } = useCefSharpBridge();

  function bsddSearch(ifcProduct: IfcEntity) {
    console.log('Open bsddSearch called with:', ifcProduct);

    setSelectedIfcEntity(ifcProduct);

    open();
  }

  function bsddSelect(ifcProduct: IfcEntity) {
    const ifcEntityJson = JSON.stringify(ifcProduct);

    console.log('bsddSelect called with:', ifcEntityJson);
  }

  const apiFunctions = {
    bsddSearch,
    bsddSelect,
    bsddSearchSave,
    bsddSearchCancel,
  };

  return (
    <ApiFunctionsProvider value={apiFunctions}>
      <BsddSelection initialData={mockData} />
      <Modal opened={opened} onClose={close} title="Select bSDD class" centered size="100vw">
        <BsddSearch selectedIfcEntity={selectedIfcEntity} />
      </Modal>
    </ApiFunctionsProvider>
  );
}

export default BsddCombinedLoader;
