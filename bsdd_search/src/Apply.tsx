import { Button } from '@mantine/core';
import { useTranslation } from 'react-i18next';

import { ClassContractV1, DictionaryContractV1 } from '../../common/src/BsddApi/BsddApiBase';
import { IfcClassification, IfcClassificationReference, IfcEntity, IfcPropertySet } from '../../common/src/IfcData/ifc';
import {
  convertBsddDictionaryToIfcClassification,
  getIfcClassAndPredefinedType,
} from '../../common/src/IfcData/ifcBsddConverters';

interface ApplyProps {
  callback: (value: any) => void;
  domains: { [id: string]: DictionaryContractV1 };
  classifications: ClassContractV1[];
  propertySetMap: { [id: string]: IfcPropertySet };
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

  function getIfcEntity(): IfcEntity {
    const ifc: IfcEntity = ifcEntity || { hasAssociations: [], isDefinedBy: [] };

    classifications.forEach((classification) => {
      if (classification?.dictionaryUri?.includes('https://identifier.buildingsmart.org/uri/buildingsmart/ifc/')) {
        const { type, predefinedType } = getIfcClassAndPredefinedType(classification.code);
        ifc.type = type;
        ifc.predefinedType = predefinedType;
      } else {
        const ifcClassificationReference = getIfcClassificationReference(classification);
        if (ifcClassificationReference) {
          ifc.hasAssociations = ifc.hasAssociations || [];
          ifc.hasAssociations.push(ifcClassificationReference);
        }
      }
    });

    ifc.isDefinedBy = Object.values(propertySetMap).length ? Object.values(propertySetMap) : [];

    return ifc;
  }

  const handleOnChange = () => {
    console.log(getIfcEntity());
    callback(getIfcEntity());
  };

  return (
    <Button color="gray" fullWidth onClick={handleOnChange} variant="filled">
      {t('Save')}
    </Button>
  );
}

export default Apply;
