import { Button } from '@mantine/core';
import { useTranslation } from 'react-i18next';

import { useAppSelector } from '../common/app/hooks';
import { ClassContractV1, DictionaryContractV1 } from '../common/BsddApi/BsddApiBase';
import { IfcClassification, IfcClassificationReference, IfcEntity } from '../common/IfcData/ifc';
import { convertBsddDictionaryToIfcClassification } from '../common/IfcData/ifcBsddConverters';
import { selectBsddDictionaries } from '../common/slices/bsddSlice';
import { selectIfcEntity } from '../common/slices/ifcEntitySlice';
import { BsddBridgeData } from '../common/IfcData/bsddBridgeData';
import { selectPropertyIsInstanceMap, selectSelectedIfcEntities } from '../common/slices/ifcDataSlice';
import { useCallback } from 'react';
import { selectSettings } from '../common/slices/settingsSlice';
import { updateEntitiesWithIfcEntity } from '../common/tools/mergeIfcEntities';

interface ApplyProps {
  bsddSearchSave: (bsddBridgeData: BsddBridgeData) => Promise<string>;
}

function Apply({ bsddSearchSave }: ApplyProps) {
  const { t } = useTranslation();

  const dictionaries = useAppSelector(selectBsddDictionaries);
  const ifcEntity = useAppSelector(selectIfcEntity);
  const settings = useAppSelector(selectSettings);
  const propertyIsInstanceMap = useAppSelector(selectPropertyIsInstanceMap);
  const selectedIfcEntities = useAppSelector(selectSelectedIfcEntities);

  function createBridgeData(ifcEntity: IfcEntity, propertyIsInstanceMap: Record<string, boolean>): BsddBridgeData {
    console.log('Creating bsddSearchSave data', selectedIfcEntities);
    if (!selectedIfcEntities) {
      return {
        ifcData: [],
        settings,
        propertyIsInstanceMap: propertyIsInstanceMap,
      };
    }
    return {
      ifcData: updateEntitiesWithIfcEntity(ifcEntity, selectedIfcEntities),
      settings,
      propertyIsInstanceMap: propertyIsInstanceMap,
    };
  }

  const callback = useCallback(
    (ifcProduct: IfcEntity) => {
      console.log('Sending bsddSearchSave data back to host', ifcProduct);
      bsddSearchSave(createBridgeData(ifcProduct, propertyIsInstanceMap)).then((actualResult) => {
        console.log('Sent iFC data back to host', actualResult);
      });
    },
    [bsddSearchSave, propertyIsInstanceMap],
  );

  function getIfcClassification(domainNamespaceUri: string): IfcClassification | null {
    if (domainNamespaceUri in dictionaries) {
      const dictionary: DictionaryContractV1 = dictionaries[domainNamespaceUri];
      if (dictionary) {
        return convertBsddDictionaryToIfcClassification(dictionary);
      }
    }
    return null;
  }

  function getIfcClassificationReference(classContract: ClassContractV1): IfcClassificationReference | null {
    const ifc: IfcClassificationReference = {
      type: 'IfcClassificationReference',
      name: classContract.name,
      location: classContract.uri || undefined,
      identification: classContract.code || undefined,
      referencedSource: classContract.dictionaryUri
        ? getIfcClassification(classContract.dictionaryUri) || undefined
        : undefined,
    };

    return ifc;
  }

  const handleOnChange = () => {
    console.log(ifcEntity);
    callback(ifcEntity);
  };

  return (
    <Button color="gray" fullWidth onClick={handleOnChange} variant="filled">
      {t('apply')}
    </Button>
  );
}

export default Apply;
