import AsyncSelect from 'react-select/async';
import { Api, RequestParams } from './BsddApi';
import { useEffect, useState } from 'react';

interface Option {
  label: string;
  value: string;
}

interface Props {
  api: Api<unknown>;
  activeDomains: Option[];
  defaultValue: Option | undefined;
  setActiveClassificationUri: (value: string) => void;
  accessToken: string;
}

//https://medium.com/how-to-react/react-select-dropdown-tutorial-using-react-select-51664ab8b6f3
function Search({ api, activeDomains, defaultValue: defaultSelection, setActiveClassificationUri, accessToken }: Props) {
  const [selected, setSelected] = useState<Option | undefined>(defaultSelection);

  const params: RequestParams = {
    headers: { Accept: 'text/plain' },
  };

  if (accessToken !== '') {
    params.headers = { ...params.headers, Authorization: 'Bearer ' + accessToken };
  }

  const loadOptions = (inputValue: string, callback: (options: any[]) => void) => {
    if (activeDomains.length === 1 && accessToken) {
      const queryParameters = {
        SearchText: inputValue,
        DomainNamespaceUri: activeDomains[0].value,
        // LanguageCode: 'NL',
        // RelatedIfcEntities: 'IfcWall',
      };
      api.api.searchListV2List(queryParameters, params).then((response) => {
        const searchResult = response.data;
        if (searchResult.numberOfClassificationsFound) {
          const domains = response.data.domains;
          if (domains && domains[0] && domains[0].classifications) {
            callback(
              domains[0].classifications.map((c) => ({
                value: c.namespaceUri,
                label: c.name,
              })),
            );
          }
        }
      });
    } else if (inputValue.length > 2) {
      const queryParameters = {
        SearchText: inputValue,
        DomainNamespaceUris: activeDomains.map((domain) => domain.value),
        // LanguageCode: 'NL',
        // RelatedIfcEntities: 'IfcWall',
      };
      api.api.classificationSearchOpenV1List(queryParameters, params).then((response) => {
        if (response.data.classifications) {
          callback(
            response.data.classifications.map((c) => ({
              value: c.namespaceUri,
              label: c.name,
            })),
          );
        }
      });
    } else {
      callback([]);
    }
  };

  useEffect(() => {
    if (defaultSelection) {
      setSelected(defaultSelection);
    }
  }, [defaultSelection]);

  useEffect(() => {
    if (selected) {
      setActiveClassificationUri(selected.value);
    }
  }, [selected]);

  const handleOnChange = (e: any) => {
    setActiveClassificationUri(e.value);
    setSelected(e);
  };

  return (
    <div>
      <AsyncSelect
        loadOptions={loadOptions}
        // defaultOptions
        placeholder={<div>bSDD search...</div>}
        onChange={(e) => handleOnChange(e)}
        value={selected}
      />
    </div>
  );
}

export default Search;
