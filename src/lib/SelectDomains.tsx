import { useState, useEffect } from 'react';
import Select from 'react-select';
import { Api, DomainContractV3, RequestParams } from './BsddApi';

const api = new Api();
api.baseUrl = 'https://test.bsdd.buildingsmart.org';

interface Option {
  label: string;
  value: string;
}

interface Props {
  activeDomains: Option[];
  setActiveDomains: (value: Option[]) => void;
  setDomains: (value: { [id: string]: DomainContractV3 }) => void;
  accessToken: string;
}

export default function SelectDomains(props: Props) {
  const [selectOptions, setSelectOptions] = useState<any[]>(props.activeDomains);
  const params: RequestParams = {};
  
  if (props.accessToken !== '') {
    params.headers = { Authorization: 'Bearer ' + props.accessToken };
  }

  useEffect(() => {
    api.api.domainV3List(undefined, params).then((response) => {
      if (response.data) {
        setSelectOptions(
          response.data.map((domain) => ({
            value: domain.namespaceUri,
            label: domain.name,
          })),
        );
        props.setDomains(
          response.data.reduce((accumulator, domain) => {
            if (domain.namespaceUri) {
              return { ...accumulator, [domain.namespaceUri]: domain };
            }
            return { ...accumulator };
          }, {}),
        );
      }
    });
  }, [setSelectOptions, props.setDomains, props.accessToken]);

  const handleOnChange = (e: any) => {
    props.setActiveDomains(e.map((option: Option) => option));
  };

  return (
    <Select
      isMulti
      name="domains"
      options={selectOptions}
      className="basic-multi-select"
      classNamePrefix="select"
      placeholder={<div> filter domains...</div>}
      onChange={(e) => handleOnChange(e)}
      defaultValue={props.activeDomains.map((domain) => domain)}
    />
  );
}
