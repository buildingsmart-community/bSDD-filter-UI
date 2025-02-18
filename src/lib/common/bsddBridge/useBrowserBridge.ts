import { useEffect, useMemo, useRef } from 'react';
import { ArrayParam, BooleanParam, StringParam, useQueryParams, withDefault } from 'use-query-params';

import { mockData } from '../../../mocks/mockData';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { BsddBridgeData, BsddDictionary, BsddSettings } from '../IfcData/bsddBridgeData';
import { IfcEntity } from '../IfcData/ifc';
import defaultSettings from '../settings/defaultSettings';
import { setSavedPropertyIsInstanceMap, setValidatedIfcData } from '../slices/ifcDataSlice';
import {
  selectFilterDictionaries,
  selectIfcDictionary,
  selectIncludeTestDictionaries,
  selectLanguage,
  selectMainDictionary,
  setSettingsWithValidation,
} from '../slices/settingsSlice';

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

  const setSettings = async () => {
    const hasQueryParams = Object.values(query).some((param) => {
      if (Array.isArray(param)) {
        return param.length > 0;
      }
      return param !== undefined && param !== null && param !== '';
    });

    if (!hasQueryParams) {
      await dispatch(setSettingsWithValidation(defaultSettings));
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
            }) as BsddDictionary,
        ),
        language: query.language || 'en-GB',
        includeTestDictionaries: query.includeTestDictionaries || false,
      };
      await dispatch(setSettingsWithValidation(settings));
    }

    if (mockData.propertyIsInstanceMap) {
      await dispatch(setSavedPropertyIsInstanceMap(mockData.propertyIsInstanceMap));
    }
  };

  // Read query parameters on page load and update settings state
  useEffect(() => {
    setSettings().then(() => {
      if (mockData.ifcData) {
        dispatch(setValidatedIfcData(mockData.ifcData));
      }
    });
  }, []);

  const settings: BsddSettings = useMemo(() => {
    return {
      mainDictionary,
      ifcDictionary,
      filterDictionaries,
      language,
      includeTestDictionaries,
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

  const bsddSearch = (ifcEntities: IfcEntity[]) => {
    console.log('bsddSearch called with:', ifcEntities);
  };

  const bsddSelect = (ifcEntities: IfcEntity[]) => {
    console.log('bsddSelect called with:', ifcEntities);
  };

  const bsddSearchSave = (bsddBridgeData: BsddBridgeData) => {
    console.log('bsddSearchSave called with:', bsddBridgeData);
    return Promise.resolve('success');
  };

  const bsddSearchCancel = () => {
    console.log('bsddSearchCancel called');
  };

  return { bsddSearch, bsddSelect, bsddSearchSave, bsddSearchCancel };
};

export default useBrowserBridge;
