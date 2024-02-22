import { ClassContractV1, DictionaryContractV1 } from '../../../common/src/BsddApi/BsddApiBase';
import {
  IfcClassification,
  IfcClassificationReference,
  IfcEntity,
  IfcPropertySet,
} from '../../../common/src/IfcData/ifc';

interface ApplyProps {
  callback: (value: any) => void;
  domains: { [id: string]: DictionaryContractV1 };
  classifications: ClassContractV1[];
  propertySetMap: { [id: string]: IfcPropertySet };
  ifcEntity?: IfcEntity;
}

function Apply({ callback, domains, classifications, propertySetMap, ifcEntity }: ApplyProps) {
  function getIfcEntity(): IfcEntity {
    const ifc: IfcEntity = ifcEntity || {};
    if (classifications.length) {
      ifc.hasAssociations = classifications.map((classification) => getIfcClassificationReference(classification));
    }
    const propertySets: IfcPropertySet[] = Object.values(propertySetMap);
    if (propertySets.length) {
      ifc.isDefinedBy = propertySets;
    }
    return ifc;
  }

  function getIfcClassification(domainNamespaceUri: string): IfcClassification | null {
    if (domainNamespaceUri in domains) {
      const dictionary: DictionaryContractV1 = domains[domainNamespaceUri];
      if (dictionary) {
        const ifc: IfcClassification = {
          type: 'IfcClassification',
          location: dictionary.uri,
          name: dictionary.name,
        };
        return ifc;
      }
    }
    return null;
  }

  function getIfcClassificationReference(bsdd: ClassContractV1): IfcClassificationReference {
    const ifc: IfcClassificationReference = {
      type: 'IfcClassificationReference',
      name: bsdd.name,
    };
    if (bsdd.uri) {
      ifc.location = bsdd.uri;
    }
    if (bsdd.code) {
      ifc.identification = bsdd.code;
    }
    if (bsdd.dictionaryUri) {
      const referencedSource = getIfcClassification(bsdd.dictionaryUri);
      if (referencedSource) {
        ifc.referencedSource = referencedSource;
      }
    }
    return ifc;
  }

  const handleOnChange = () => {
    callback(getIfcEntity());
  };

  return (
    <div>
      <button type="button" className="btn btn-secondary w-100" onClick={() => handleOnChange()}>
        Apply
      </button>
    </div>
  );
}

export default Apply;
