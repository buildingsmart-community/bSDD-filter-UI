import { useQueryClient } from '@tanstack/react-query';
import { useEffect, useRef } from 'react';

import { mockData } from '../../../mocks/mockData';
import { validateIfcData, validateSettings } from '../../api/validation/validateIfcData';
import { useIfcDataStore } from '../../stores/ifcDataStore';
import { useSettingsStore } from '../../stores/settingsStore';
import { BsddBridgeData, BsddDictionary, BsddSettings } from '../IfcData/bsddBridgeData';
import { IfcEntity } from '../IfcData/ifc';
import defaultSettings from '../settings/defaultSettings';

const useBrowserBridge = () => {
  const queryClient = useQueryClient();
  const setSettings = useSettingsStore((s) => s.setSettings);
  const setLoadedIfcEntities = useIfcDataStore((s) => s.setLoadedIfcEntities);
  const setLoadingEntities = useIfcDataStore((s) => s.setLoadingEntities);
  const setSavedPropertyIsInstanceMap = useIfcDataStore((s) => s.setSavedPropertyIsInstanceMap);
  const initialLoad = useRef(true);

  useEffect(() => {
    if (!initialLoad.current) return;
    initialLoad.current = false;

    const init = async () => {
      // Read URL query params
      const params = new URLSearchParams(window.location.search);
      const hasQueryParams = params.has('mainDictionary') || params.has('language');

      let settings: BsddSettings;
      if (!hasQueryParams) {
        settings = defaultSettings;
      } else {
        settings = {
          mainDictionary: params.get('mainDictionary')
            ? ({
                ifcClassification: { type: 'IfcClassification', location: params.get('mainDictionary') },
              } as BsddDictionary)
            : null,
          ifcDictionary: params.get('ifcDictionary')
            ? ({
                ifcClassification: { type: 'IfcClassification', location: params.get('ifcDictionary') },
              } as BsddDictionary)
            : null,
          filterDictionaries: (params.get('filterDictionaries')?.split(',') || [])
            .filter(Boolean)
            .map(
              (location) =>
                ({ ifcClassification: { type: 'IfcClassification', location } }) as BsddDictionary,
            ),
          language: params.get('language') || 'en-GB',
          includeTestDictionaries: params.get('includeTestDictionaries') === 'true',
        };
      }

      // Validate and apply settings first (caches dictionaries for entity validation)
      const validatedSettings = await validateSettings(queryClient, settings);
      setSettings(validatedSettings);

      if (mockData.propertyIsInstanceMap) {
        setSavedPropertyIsInstanceMap(mockData.propertyIsInstanceMap);
      }

      // Then validate and load IFC entities (uses cached dictionaries)
      if (mockData.ifcData) {
        setLoadingEntities(true);
        const language = validatedSettings.language || 'en-GB';
        const validatedEntities = await validateIfcData(mockData.ifcData, queryClient, language);
        setLoadedIfcEntities(validatedEntities);
      } else {
        setLoadingEntities(false);
      }
    };

    init();
  }, [queryClient, setSettings, setLoadedIfcEntities, setLoadingEntities, setSavedPropertyIsInstanceMap]);

  const onSearch = (ifcEntities: IfcEntity[]) => {
    console.log('onSearch called with:', ifcEntities);
  };

  const onSelect = (ifcEntities: IfcEntity[]) => {
    console.log('onSelect called with:', ifcEntities);
  };

  const onSave = (bsddBridgeData: BsddBridgeData) => {
    console.log('onSave called with:', bsddBridgeData);
    return Promise.resolve('success');
  };

  const onCancel = () => {
    console.log('onCancel called');
  };

  return { onSearch, onSelect, onSave, onCancel };
};

export default useBrowserBridge;
