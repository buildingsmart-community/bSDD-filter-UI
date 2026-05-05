import { useQueryClient } from '@tanstack/react-query';
import { useEffect } from 'react';

import { mockData } from '../../../mocks/mockData';
import { validateIfcData, validateSettings } from '../../api/validation/validateIfcData';
import { useIfcDataStore } from '../../stores/ifcDataStore';
import { useSettingsStore } from '../../stores/settingsStore';
import type { BsddBridgeData, BsddSettings } from '../IfcData/bsddBridgeData';
import type { IfcEntity } from '../IfcData/ifc';
import { applyDisplayScale } from '../hooks/useDisplayScale';
import defaultSettings from '../settings/defaultSettings';
import { mergeIfcEntities } from '../tools/mergeIfcEntities';
import type { BsddBridge } from './BsddBridgeInterface';

export interface CefSharpWindow extends Window {
  CefSharp?: {
    BindObjectAsync: (objectName: string) => Promise<void>;
  };
  bsddBridge: BsddBridge;
  updateSelection?: (selection: IfcEntity[]) => void;
  updateEditSelection?: (selection: IfcEntity[]) => void;
  updateSettings?: (settings: BsddSettings) => void;
}

declare let window: CefSharpWindow;

const useCefSharpBridge = () => {
  const queryClient = useQueryClient();
  const setSettings = useSettingsStore((s) => s.setSettings);
  const setLoadedIfcEntities = useIfcDataStore((s) => s.setLoadedIfcEntities);
  const setSelectedIfcEntities = useIfcDataStore((s) => s.setSelectedIfcEntities);
  const setLoadingEntities = useIfcDataStore((s) => s.setLoadingEntities);
  const setSavedPropertyIsInstanceMap = useIfcDataStore((s) => s.setSavedPropertyIsInstanceMap);
  const setIfcEntity = useIfcDataStore((s) => s.setIfcEntity);

  useEffect(() => {
    let cefSharpCheckInterval: ReturnType<typeof setInterval>;
    let cefSharpTimeout: ReturnType<typeof setTimeout>;

    const initializeCefSharpBridge = async () => {
      try {
        await window.CefSharp?.BindObjectAsync('bsddBridge');

        if (window.bsddBridge) {
          // Register global callbacks for CefSharp to call
          window.updateSelection = async (selection: IfcEntity[]) => {
            const language = useSettingsStore.getState().language;
            const validated = await validateIfcData(selection, queryClient, language);
            setLoadedIfcEntities(validated);
          };

          window.updateEditSelection = async (selection: IfcEntity[]) => {
            const language = useSettingsStore.getState().language;
            const validated = await validateIfcData(selection, queryClient, language);
            setSelectedIfcEntities(validated);
          };

          window.updateSettings = async (settings: BsddSettings) => {
            const validated = await validateSettings(queryClient, settings);
            setSettings(validated);
          };

          // Load initial bridge data
          const bridgeDataJson = await window.bsddBridge.loadBridgeData();
          const bsddBridgeData: BsddBridgeData = JSON.parse(bridgeDataJson);
          const { ifcData, settings, propertyIsInstanceMap, displayScale } = bsddBridgeData;

          // Apply host DPI scale so rem units match the modeller's UI density
          applyDisplayScale(displayScale);

          if (settings) {
            const validated = await validateSettings(queryClient, settings);
            setSettings(validated);
          }

          if (ifcData?.length > 0) {
            setLoadingEntities(true);
            const language = useSettingsStore.getState().language;
            const validated = await validateIfcData(ifcData, queryClient, language);
            setSelectedIfcEntities(validated);
            const mergedIfcEntity = mergeIfcEntities(ifcData);
            if (mergedIfcEntity) setIfcEntity(mergedIfcEntity);
            setLoadingEntities(false);
          } else {
            setLoadingEntities(false);
          }

          if (propertyIsInstanceMap) {
            setSavedPropertyIsInstanceMap(propertyIsInstanceMap);
          }
        } else {
          console.error('Failed to bind the bsddBridge object.');
          const validated = await validateSettings(queryClient, defaultSettings);
          setSettings(validated);
        }
      } catch (error) {
        console.error('Error setting up CefSharp connection:', error);
      }
    };

    const checkCefSharpAvailability = () => {
      if (window.CefSharp) {
        clearInterval(cefSharpCheckInterval);
        clearTimeout(cefSharpTimeout);
        initializeCefSharpBridge();
      }
    };

    cefSharpCheckInterval = setInterval(checkCefSharpAvailability, 100);

    cefSharpTimeout = setTimeout(async () => {
      clearInterval(cefSharpCheckInterval);
      console.log('CefSharp not available, loading default settings.');
      const validated = await validateSettings(queryClient, defaultSettings);
      setSettings(validated);
      if (mockData?.ifcData) {
        setLoadingEntities(true);
        const language = useSettingsStore.getState().language;
        const validatedEntities = await validateIfcData(mockData.ifcData, queryClient, language);
        setLoadedIfcEntities(validatedEntities);
        setLoadingEntities(false);
      } else {
        setLoadingEntities(false);
      }
    }, 1000);

    return () => {
      clearInterval(cefSharpCheckInterval);
      clearTimeout(cefSharpTimeout);
    };
  }, [
    queryClient,
    setSettings,
    setLoadedIfcEntities,
    setLoadingEntities,
    setSelectedIfcEntities,
    setSavedPropertyIsInstanceMap,
    setIfcEntity,
  ]);

  const onSearch = (ifcEntities: IfcEntity[]) => {
    const ifcEntityJson = JSON.stringify(ifcEntities);
    if (window?.bsddBridge?.bsddSearch) {
      window.bsddBridge.bsddSearch(ifcEntityJson);
    }
  };

  const onSelect = (ifcEntities: IfcEntity[]) => {
    const ifcEntityJson = JSON.stringify(ifcEntities);
    if (window?.bsddBridge?.bsddSelect) {
      window.bsddBridge.bsddSelect(ifcEntityJson);
    }
  };

  const onSave = (bsddBridgeData: BsddBridgeData) => {
    const ifcEntitiesJson = JSON.stringify(bsddBridgeData);
    if (window?.bsddBridge?.save) {
      return window.bsddBridge.save(ifcEntitiesJson);
    }
    return Promise.resolve('error');
  };

  const onCancel = () => {
    if (window?.bsddBridge?.cancel) {
      window.bsddBridge.cancel();
    }
  };

  return { onSearch, onSelect, onSave, onCancel };
};

export default useCefSharpBridge;
