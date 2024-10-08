import { Button } from '@mantine/core';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { useAppSelector } from '../common/app/hooks';
import { ClassContractV1, DictionaryContractV1 } from '../common/BsddApi/BsddApiBase';
import { IfcClassification, IfcClassificationReference, IfcEntity, IfcPropertySet } from '../common/IfcData/ifc';
import {
  convertBsddDictionaryToIfcClassification,
  getIfcClassAndPredefinedType,
} from '../common/IfcData/ifcBsddConverters';
import { selectBsddDictionaries } from '../common/slices/bsddSlice';
import { selectHasAssociations, selectIsDefinedBy } from '../common/slices/ifcEntitySlice';

interface ApplyProps {
  callback: (value: any) => void;
  ifcEntity: IfcEntity | undefined;
}

function Apply({ callback, ifcEntity }: ApplyProps) {
  const { t } = useTranslation();
  const dictionaries = useAppSelector(selectBsddDictionaries);
  const isDefinedBy = useSelector(selectIsDefinedBy);
  const hasAssociations = useSelector(selectHasAssociations);

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

  function createIfcEntity(ifcEntityInput: IfcEntity | undefined): IfcEntity {
    const baseIfc: IfcEntity = ifcEntityInput
      ? { ...JSON.parse(JSON.stringify(ifcEntityInput)) }
      : { hasAssociations: [], isDefinedBy: [] };

    baseIfc.isDefinedBy = isDefinedBy?.filter((propertySet: IfcPropertySet) => propertySet.name !== 'Attributes');

    baseIfc.hasAssociations = [];

    hasAssociations?.forEach((association) => {
      if (
        association.type === 'IfcClassificationReference' &&
        association?.referencedSource?.location?.includes('https://identifier.buildingsmart.org/uri/buildingsmart/ifc/')
      ) {
        const { type, predefinedType } = getIfcClassAndPredefinedType(association.identification);
        if (type) {
          baseIfc.type = type;
        }

        if (predefinedType) {
          baseIfc.predefinedType = predefinedType;
        }
        if (!baseIfc.predefinedType) {
          baseIfc.predefinedType = 'NOTDEFINED';
        }
      } else {
        baseIfc.hasAssociations?.push(association);
      }
    });

    return baseIfc;
  }

  const handleOnChange = () => {
    const newIfcEntity = createIfcEntity(ifcEntity);
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
