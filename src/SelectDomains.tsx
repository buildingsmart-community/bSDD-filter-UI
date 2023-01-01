import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { Api } from './BsddApi';

var api = new Api();
api.baseUrl = 'https://test.bsdd.buildingsmart.org';

interface Option {
    label: string;
    value: string;
}

interface Props {
    activeDomains: Option[];
    setActiveDomains: (value: Option[]) => void;
}

export default function SelectDomains(props: Props) {
    const [selectOptions, setSelectOptions] = useState<any[]>(props.activeDomains);

    useEffect(() => {
        api.api.domainV3List().then(response => {
            if (response.data) {
                setSelectOptions(response.data.map(c => (
                    {
                        "value": c.namespaceUri,
                        "label": c.name
                    }
                )));
            }
        });
    }, [setSelectOptions]);

    const handleOnChange = (e: any) => {
        props.setActiveDomains(e.map((option: Option) => (
            option
        )));
    }

    return < Select
        isMulti
        name="domains"
        options={selectOptions}
        className="basic-multi-select"
        classNamePrefix="select"
        placeholder={< div > filter domains...</div >}
        onChange={(e) => handleOnChange(e)}
        defaultValue={props.activeDomains.map(domain => (domain))}
    />
}