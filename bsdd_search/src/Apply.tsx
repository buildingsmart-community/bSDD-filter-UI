import { Button } from '@mantine/core';
import { useTranslation } from 'react-i18next';

import { ClassContractV1, DictionaryContractV1 } from '../../common/src/BsddApi/BsddApiBase';
import { IfcClassification, IfcClassificationReference, IfcEntity, IfcPropertySet } from '../../common/src/IfcData/ifc';
import {
  convertBsddDictionaryToIfcClassification,
  getIfcClassAndPredefinedType,
} from '../../common/src/IfcData/ifcBsddConverters';

type DictionaryMap = { [id: string]: DictionaryContractV1 };
type PropertySetMap = { [id: string]: IfcPropertySet };

interface ApplyProps {
  callback: (value: any) => void;
  domains: DictionaryMap;
  classifications: ClassContractV1[];
  propertySetMap: PropertySetMap;
  ifcEntity: IfcEntity | undefined;
}

function Apply({ callback, domains, classifications, propertySetMap, ifcEntity }: ApplyProps) {
  const { t } = useTranslation();

  function getIfcClassification(domainNamespaceUri: string): IfcClassification | null {
    if (domainNamespaceUri in domains) {
      const dictionary: DictionaryContractV1 = domains[domainNamespaceUri];
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

  function createIfcEntity(
    ifcEntityInput: IfcEntity | undefined,
    classificationsInput: ClassContractV1[],
    propertySetsInput: PropertySetMap,
  ): IfcEntity {
    const baseIfc: IfcEntity = ifcEntityInput
      ? { ...JSON.parse(JSON.stringify(ifcEntityInput)), hasAssociations: [] }
      : { hasAssociations: [], isDefinedBy: [] };

    const updatedIfc = classificationsInput.reduce((ifc, classification) => {
      if (classification?.dictionaryUri?.includes('https://identifier.buildingsmart.org/uri/buildingsmart/ifc/')) {
        const { type, predefinedType } = getIfcClassAndPredefinedType(classification.code);
        return { ...ifc, type, predefinedType };
      }
      const ifcClassificationReference = getIfcClassificationReference(classification);
      if (ifcClassificationReference) {
        return { ...ifc, hasAssociations: [...(ifc.hasAssociations || []), ifcClassificationReference] };
      }

      return ifc;
    }, baseIfc);

    return {
      ...updatedIfc,
      isDefinedBy: Object.values(propertySetsInput).length ? Object.values(propertySetsInput) : [],
    };
  }

  const handleOnChange = () => {
    const newIfcEntity = createIfcEntity(ifcEntity, classifications, propertySetMap);
    console.log(newIfcEntity);
    callback(newIfcEntity);
  };

  return (
    <Button color="gray" fullWidth onClick={handleOnChange} variant="filled">
      {t('apply')}
    </Button>
  );
}

export default Apply;
