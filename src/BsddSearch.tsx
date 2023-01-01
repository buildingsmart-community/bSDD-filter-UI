import React from 'react';
import AsyncSelect from 'react-select/async';
import { Api } from './BsddApi';

var api = new Api();
api.baseUrl = 'https://test.bsdd.buildingsmart.org';

const noOptionsMessage = { inputValue: 'bSDD search...' };

interface Option {
    label: string;
    value: string;
}

interface Props {
    activeDomains: Option[];
    setActiveClassificationUri: (value: string) => void;
}

function BsddSearch(props: Props) {

    const loadOptions = (
        inputValue: string,
        callback: (options: any[]) => void
    ) => {
        if (inputValue.length > 2) {
            var queryParameters = {
                SearchText: inputValue,
                TypeFilter: 'Classifications',
                DomainNamespaceUris: props.activeDomains.map(domain => (domain.value))
            }
            api.api.textSearchListOpenV5List(queryParameters).then(response => {
                if (response.data.classifications) {
                    callback(response.data.classifications.map(c => (
                        {
                            "value": c.namespaceUri,
                            "label": c.name
                        }
                    )));
                }
            });
        } else {
            callback([])
        }
    };

    const handleOnChange = (e: any) => {
        props.setActiveClassificationUri(e.value);
    }

    return (
        <div>
            <AsyncSelect
                loadOptions={loadOptions}
                defaultOptions
                placeholder={<div>bSDD search...</div>}
                onChange={(e) => handleOnChange(e)}
            />
        </div>
    )
}

export default BsddSearch;