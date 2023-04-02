import AsyncSelect from 'react-select/async';
import { Api, RequestParams } from './BsddApi';

const api = new Api();
api.baseUrl = 'https://test.bsdd.buildingsmart.org';

interface Option {
  label: string;
  value: string;
}

interface Props {
  activeDomains: Option[];
  setActiveClassificationUri: (value: string) => void;
  accessToken: string;
}

//https://medium.com/how-to-react/react-select-dropdown-tutorial-using-react-select-51664ab8b6f3
function Search(props: Props) {
  const params: RequestParams = {};

  if (props.accessToken !== '') {
    params.headers = { Authorization: 'Bearer ' + props.accessToken };
  }

  const loadOptions = (inputValue: string, callback: (options: any[]) => void) => {
    if (inputValue.length > 2) {
      const queryParameters = {
        SearchText: inputValue,
        TypeFilter: 'Classifications',
        DomainNamespaceUris: props.activeDomains.map((domain) => domain.value),
      };
      api.api.textSearchListOpenV5List(queryParameters, params).then((response) => {
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

  const handleOnChange = (e: any) => {
    props.setActiveClassificationUri(e.value);
  };

  return (
    <div>
      <AsyncSelect
        loadOptions={loadOptions}
        defaultOptions
        placeholder={<div>bSDD search...</div>}
        onChange={(e) => handleOnChange(e)}
      />
    </div>
  );
}

export default Search;
