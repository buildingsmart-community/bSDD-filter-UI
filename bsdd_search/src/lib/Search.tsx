import AsyncSelect from 'react-select/async';
import { useEffect, useState } from 'react';
import { BsddApi } from '../../../common/src/BsddApi/BsddApi';
import { RequestParams } from '../../../common/src/BsddApi/BsddApiBase';
import { debounce } from 'lodash';


interface Option {
  label: string;
  value: string;
}

interface Props {
  api: BsddApi<unknown>;
  activeDomains: Option[];
  defaultValue: Option | undefined;
  setActiveClassificationUri: (value: string) => void;
  accessToken: string;
}

const searchInSingleDictionary = (
  api: BsddApi<unknown>,
  activeDictionaries: Option[],
  params: RequestParams,
  inputValue: string,
  callback: (options: any[]) => void,
) => {
  const queryParameters = {
    SearchText: inputValue,
    DictionaryUri: activeDictionaries[0].value,
    // LanguageCode: 'NL',
    // RelatedIfcEntities: 'IfcWall',
  };
  api.api.searchInDictionaryV1List(queryParameters, params).then((response) => {
    const searchResult = response.data;
    if (searchResult.count) {
      const dictionaryClasses = searchResult.dictionary?.classes;
      if (dictionaryClasses) {
        callback(
          dictionaryClasses.map((c) => ({
            value: c.uri,
            label: c.name,
          })),
        );
      }
    }
  });
};

const searchInMultipleDictionaries = (
  api: BsddApi<unknown>,
  activeDictionaries: Option[],
  params: RequestParams,
  inputValue: string,
  callback: (options: any[]) => void,
) => {
  const queryParameters = {
    SearchText: inputValue,
    DictionaryUris: [activeDictionaries[0].value],
    // DictionaryUris: activeDomains.map((domain) => domain.value),
    // LanguageCode: 'NL',
    // RelatedIfcEntities: 'IfcWall',
  };
  api.api.classSearchV1List(queryParameters, params).then((response) => {
    if (response.data.classes) {
      callback(
        response.data.classes.map((c) => ({
          value: c.uri,
          label: c.name,
        })),
      );
    }
  });
};

//https://medium.com/how-to-react/react-select-dropdown-tutorial-using-react-select-51664ab8b6f3
function Search({
  api,
  activeDomains: activeDictionaries,
  defaultValue: defaultSelection,
  setActiveClassificationUri,
  accessToken,
}: Props) {
  const [selected, setSelected] = useState<Option | undefined>(defaultSelection);

  const params: RequestParams = {
    headers: { Accept: 'text/plain' },
  };

  if (accessToken !== '') {
    params.headers = { ...params.headers, Authorization: 'Bearer ' + accessToken };
  }

  const loadOptions = debounce((inputValue: string, callback: (options: any[]) => void) => {
    if (activeDictionaries.length === 1) {
      searchInSingleDictionary(api, activeDictionaries, params, inputValue, callback);
    } else if (activeDictionaries.length > 2) {
      searchInMultipleDictionaries(api, activeDictionaries, params, inputValue, callback);
    } else {
      callback([]);
    }
  }, 500);


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
