import { useEffect, useState } from 'react';
import Select from 'react-select';
import { DictionaryContractV1, RequestParams } from '../../../common/src/BsddApi/BsddApiBase';
import { BsddApi } from '../../../common/src/BsddApi/BsddApi';

interface Option {
  label: string;
  value: string;
}

interface Props {
  api: BsddApi<unknown>;
  activeDomains: Option[];
  setActiveDomains: (value: Option[]) => void;
  setDomains: (value: { [id: string]: DictionaryContractV1 }) => void;
  accessToken: string;
}

export default function SelectDomains({ api, activeDomains, setActiveDomains, setDomains, accessToken }: Props) {
  const [selectOptions, setSelectOptions] = useState<any[]>(activeDomains);
  const params: RequestParams = {
    headers: { Accept: 'text/plain' },
  };

  if (accessToken !== '') {
    params.headers = { ...params.headers, Authorization: 'Bearer ' + accessToken };
  }

  useEffect(() => {
    const fetchDictionaries = async () => {
      try {
        const response: any = await api.api.dictionaryV1List(undefined, params);
        const dictionaries: DictionaryContractV1[] = response.data.dictionaries;
        if (dictionaries) {
          const selectOptions = dictionaries
            .filter((domain) => domain.uri && domain.name)
            .map((domain) => ({
              value: domain.uri,
              label: domain.name,
            }));

          const domains = dictionaries.reduce((accumulator, domain) => {
            if (domain.uri) {
              return { ...accumulator, [domain.uri]: domain };
            }
            return accumulator;
          }, {});

          setSelectOptions(selectOptions);
          setDomains(domains);
        }
      } catch (error) {
        console.error('Failed to fetch dictionaries:', error);
      }
    };

    fetchDictionaries();
  }, [api, setSelectOptions, setDomains, accessToken]);

  const handleOnChange = (e: any) => {
    setActiveDomains(e.map((option: Option) => option));
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
      defaultValue={activeDomains.map((domain) => domain)}
    />
  );
}
