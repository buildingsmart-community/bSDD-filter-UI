import { useEffect, useMemo, useRef } from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { BsddDictionary, BsddSettings } from '../IfcData/bsddBridgeData';
import { IfcEntity } from '../IfcData/ifc';
import defaultSettings from '../settings/defaultSettings';
import {
  setSettingsWithValidation,
  selectMainDictionary,
  selectFilterDictionaries,
  selectLanguage,
  selectIncludeTestDictionaries,
  selectIfcDictionary,
} from '../slices/settingsSlice';
import { useQueryParams, StringParam, ArrayParam, BooleanParam, withDefault } from 'use-query-params';

const useBrowserBridge = () => {
  const dispatch = useAppDispatch();
  const mainDictionary = useAppSelector(selectMainDictionary);
  const ifcDictionary = useAppSelector(selectIfcDictionary);
  const filterDictionaries = useAppSelector(selectFilterDictionaries);
  const language = useAppSelector(selectLanguage);
  const includeTestDictionaries = useAppSelector(selectIncludeTestDictionaries);

  const [query, setQuery] = useQueryParams({
    mainDictionary: StringParam,
    ifcDictionary: StringParam,
    filterDictionaries: withDefault(ArrayParam, []),
    language: StringParam,
    includeTestDictionaries: BooleanParam,
  });

  const initialLoad = useRef(true);

  // Read query parameters on page load and update settings state
  useEffect(() => {
    if (initialLoad.current) {
      initialLoad.current = false;

      const hasQueryParams = Object.values(query).some((param) => {
        if (Array.isArray(param)) {
          return param.length > 0;
        }
        return param !== undefined && param !== null && param !== '';
      });

      if (!hasQueryParams) {
        dispatch(setSettingsWithValidation(defaultSettings));
      } else {
        const settings: BsddSettings = {
          mainDictionary: query.mainDictionary
            ? ({
                ifcClassification: {
                  type: 'IfcClassification',
                  location: query.mainDictionary,
                },
              } as BsddDictionary)
            : null,
          ifcDictionary: query.ifcDictionary
            ? ({
                ifcClassification: {
                  type: 'IfcClassification',
                  location: query.ifcDictionary,
                },
              } as BsddDictionary)
            : null,
          filterDictionaries: query.filterDictionaries.map(
            (location) =>
              ({
                ifcClassification: {
                  type: 'IfcClassification',
                  location,
                },
              } as BsddDictionary),
          ),
          language: query.language || 'en-GB',
          includeTestDictionaries: query.includeTestDictionaries || false,
        };
        dispatch(setSettingsWithValidation(settings));
      }
    }
  }, [query, dispatch]);

  const settings: BsddSettings = useMemo(() => {
    return {
      mainDictionary: mainDictionary,
      ifcDictionary: ifcDictionary,
      filterDictionaries: filterDictionaries,
      language: language,
      includeTestDictionaries: includeTestDictionaries,
    };
  }, [mainDictionary, ifcDictionary, filterDictionaries, language, includeTestDictionaries]);

  // Synchronize settings state with URL query parameters
  useEffect(() => {
    const newQuery = {
      mainDictionary: mainDictionary?.ifcClassification.location,
      ifcDictionary: ifcDictionary?.ifcClassification.location,
      filterDictionaries: filterDictionaries.map((dict) => dict.ifcClassification.location),
      language,
      includeTestDictionaries,
    };

    if (JSON.stringify(query) !== JSON.stringify(newQuery)) {
      setQuery(newQuery);
    }
  }, [mainDictionary, ifcDictionary, filterDictionaries, language, includeTestDictionaries, setQuery, query]);

  const bsddSearch = (ifcEntity: IfcEntity) => {
    console.log('bsddSearch called with:', ifcEntity);
  };

  const bsddSelect = (ifcEntity: IfcEntity) => {
    console.log('bsddSelect called with:', ifcEntity);
  };

  const bsddSearchSave = (ifcEntities: IfcEntity[]) => {
    console.log('bsddSearchSave called with:', ifcEntities);
    return Promise.resolve('success');
  };

  const bsddSearchCancel = () => {
    console.log('bsddSearchCancel called');
  };

  return { bsddSearch, bsddSelect, bsddSearchSave, bsddSearchCancel };
};

export default useBrowserBridge;
