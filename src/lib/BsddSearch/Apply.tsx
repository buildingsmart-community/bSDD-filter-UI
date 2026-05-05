import { Button } from '@mantine/core';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useShallow } from 'zustand/react/shallow';

import type { BsddBridgeData } from '../common/IfcData/bsddBridgeData';
import type { IfcEntity } from '../common/IfcData/ifc';
import { updateEntitiesWithIfcEntity } from '../common/tools/mergeIfcEntities';
import { selectIfcEntity, useIfcDataStore } from '../stores/ifcDataStore';
import { selectSettings, useSettingsStore } from '../stores/settingsStore';

interface ApplyProps {
  onSave: (bsddBridgeData: BsddBridgeData) => Promise<string>;
}

function createBridgeData(
  ifcEntity: IfcEntity,
  propertyIsInstanceMap: Record<string, boolean>,
  settings: ReturnType<typeof selectSettings>,
  selectedIfcEntities: IfcEntity[],
): BsddBridgeData {
  console.log('Creating onSave data', selectedIfcEntities);
  if (!selectedIfcEntities) {
    return {
      ifcData: [],
      settings,
      propertyIsInstanceMap,
    };
  }
  return {
    ifcData: updateEntitiesWithIfcEntity(ifcEntity, selectedIfcEntities),
    settings,
    propertyIsInstanceMap,
  };
}

function Apply({ onSave }: ApplyProps) {
  const { t } = useTranslation();

  const settings = useSettingsStore(useShallow(selectSettings));
  const propertyIsInstanceMap = useIfcDataStore((s) => s.propertyIsInstanceMap);
  const selectedIfcEntities = useIfcDataStore((s) => s.selectedIfcEntities);

  const callback = useCallback(
    (ifcProduct: IfcEntity) => {
      console.log('Sending onSave data back to host', ifcProduct);
      onSave(createBridgeData(ifcProduct, propertyIsInstanceMap, settings, selectedIfcEntities)).then(
        (actualResult) => {
          console.log('Sent iFC data back to host', actualResult);
        },
      );
    },
    [onSave, propertyIsInstanceMap, selectedIfcEntities, settings],
  );

  // selectIfcEntity is a derived projection (deep-cloned object). Reading via
  // getState() inside the handler avoids subscribing the component to a value
  // that produces a new reference on every read.
  const handleOnChange = () => {
    const ifcEntity = selectIfcEntity(useIfcDataStore.getState());
    callback(ifcEntity);
  };

  return (
    <Button color="gray" fullWidth onClick={handleOnChange} variant="filled">
      {t('apply')}
    </Button>
  );
}

export default Apply;
