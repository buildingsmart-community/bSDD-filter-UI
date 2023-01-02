import React, { useState } from 'react';
import { ClassificationContractV4, DomainContractV3 } from './BsddApi';

interface Props {
    callback: (value: any) => void;
    domains: { [id: string]: DomainContractV3 };
    classifications: ClassificationContractV4[];
    setClassifications: (value: ClassificationContractV4[]) => void;
}

function Apply(props: Props) {
    const [selectOptions, setSelectOptions] = useState<any[]>([]);

    function getIfcEntity(): IfcEntity {
        let ifc: IfcEntity = {};
        if (props.classifications.length) {
            ifc.hasAssociations = props.classifications.map(classification => getIfcClassificationReference(classification));
        }
        return ifc;
    }

    function getIfcClassification(domainNamespaceUri: string): IfcClassification | null {
        if (domainNamespaceUri in props.domains) {
            let domain: DomainContractV3 = props.domains[domainNamespaceUri];
            if (domain) {
                let ifc: IfcClassification = {
                    type: 'IfcClassification',
                    name: domain.name
                };
                return ifc;
            }
        }
        return null;
    }

    function getIfcClassificationReference(bsdd: ClassificationContractV4): IfcClassificationReference {
        let ifc: IfcClassificationReference = { type: 'IfcClassificationReference' };
        if (bsdd.namespaceUri) { ifc.location = bsdd.namespaceUri }
        if (bsdd.code) { ifc.identification = bsdd.code }
        if (bsdd.name) { ifc.name = bsdd.name }
        if (bsdd.domainNamespaceUri) {
            let referencedSource = getIfcClassification(bsdd.domainNamespaceUri);
            if (referencedSource) {
                ifc.referencedSource = referencedSource;
            }
        }
        return ifc;
    }

    const handleOnChange = (e: any) => {
        props.callback(getIfcEntity());
    }

    return (
        <div>
            <button
                type="button"
                className="btn btn-secondary w-100"
                onClick={(e) => handleOnChange(e)}
            >Apply</button>
        </div>
    )
}

export default Apply;