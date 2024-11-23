import { useEffect } from 'react';
import { mockData } from '../../../mocks/mockData';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../app/hooks';
import { BsddBridgeData, BsddSettings } from '../IfcData/bsddBridgeData';
import { IfcEntity } from '../IfcData/ifc';
import defaultSettings from '../settings/defaultSettings';
import { setSavedPropertyIsInstanceMap, setValidatedIfcData } from '../slices/ifcDataSlice';
import { setIfcEntity } from '../slices/ifcEntitySlice';
import { setSettingsWithValidation } from '../slices/settingsSlice';
import { selectActiveDictionaries } from '../slices/settingsSlice';
import { BsddBridge } from './BsddBridgeInterface';

export interface CefSharpWindow extends Window {
  CefSharp?: {
    BindObjectAsync: (objectName: string) => Promise<void>;
  };
  bsddBridge: BsddBridge;
  updateSelection?: (selection: IfcEntity[]) => void;
  updateSettings?: (settings: BsddSettings) => void;
}

declare let window: CefSharpWindow;

const useCefSharpBridge = () => {
  const dispatch = useAppDispatch();
  const activeDictionaries = useSelector(selectActiveDictionaries);

  useEffect(() => {
    let cefSharpCheckInterval: ReturnType<typeof setInterval>;
    let cefSharpTimeout: ReturnType<typeof setTimeout>;

    const initializeCefSharpBridge = async () => {
      try {
        // Bind the object from CefSharp to the window
        await window.CefSharp?.BindObjectAsync('bsddBridge');

        if (window.bsddBridge) {
          // Define global functions that can be called from the CefSharp backend
          window.updateSelection = async (selection: IfcEntity[]) => {
            dispatch(setValidatedIfcData(selection));
            console.log('CefSharp updateSelection:', selection);
          };

          window.updateSettings = async (settings: BsddSettings) => {
            dispatch(setSettingsWithValidation(settings));
            console.log('CefSharp updateSettings:', settings);
          };

          // Call the loadBridgeData function on the bridge object
          const BridgeDataJson = await window.bsddBridge.loadBridgeData();
          const bsddBridgeData: BsddBridgeData = JSON.parse(BridgeDataJson);
          const { ifcData, settings, propertyIsInstanceMap } = bsddBridgeData;

          if (settings) {
            await dispatch(setSettingsWithValidation(settings));
            console.log('CefSharp settings:', settings);
          }

          if (ifcData?.length > 0) {
            await dispatch(setValidatedIfcData(ifcData));
            dispatch(setIfcEntity(ifcData[0]));
            console.log('CefSharp initial IFC entities:', ifcData);
          }

          if (propertyIsInstanceMap) {
            dispatch(setSavedPropertyIsInstanceMap(propertyIsInstanceMap));
            console.log('CefSharp propertyIsInstanceMap:', propertyIsInstanceMap);
          }

          console.log('CefSharp connection and global functions are set up successfully.');
        } else {
          console.error('Failed to bind the bsddBridge object.');
          await dispatch(setSettingsWithValidation(defaultSettings));
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
      } else {
        console.log('Waiting for CefSharp to be available...');
      }
    };

    // Start checking for CefSharp availability
    cefSharpCheckInterval = setInterval(checkCefSharpAvailability, 100); // Check every 100ms

    cefSharpTimeout = setTimeout(() => {
      clearInterval(cefSharpCheckInterval);
      console.log('CefSharp not available, loading default settings.');
      dispatch(setSettingsWithValidation(defaultSettings));
      dispatch(setValidatedIfcData(mockData?.ifcData || []));
    }, 1000); // 1 second

    return () => {
      clearInterval(cefSharpCheckInterval);
      clearTimeout(cefSharpTimeout);
    };
  }, [dispatch]);

  useEffect(() => {
    // Re-run setValidatedIfcData when activeDictionaries change
    dispatch(setValidatedIfcData(mockData?.ifcData || []));
  }, [dispatch, activeDictionaries]);

  const bsddSearch = (ifcEntities: IfcEntity[]) => {
    const ifcEntityJson = JSON.stringify(ifcEntities);
    if (window?.bsddBridge?.bsddSearch) {
      window.bsddBridge.bsddSearch(ifcEntityJson);
    } else {
      console.error('bsddBridge or bsddSearch method is not available.');
    }
  };

  const bsddSelect = (ifcEntities: IfcEntity[]) => {
    const ifcEntityJson = JSON.stringify(ifcEntities);
    if (window?.bsddBridge?.bsddSelect) {
      window.bsddBridge.bsddSelect(ifcEntityJson);
    } else {
      console.error('bsddBridge or bsddSelect method is not available.');
    }
  };

  const bsddSearchSave = (bsddBridgeData: BsddBridgeData) => {
    const ifcEntitiesJson = JSON.stringify(bsddBridgeData);
    console.log('bsddBridge save:', ifcEntitiesJson);
    if (window?.bsddBridge?.save) {
      return window.bsddBridge.save(ifcEntitiesJson);
    }
    console.error('bsddBridge or save method is not available.');
    return Promise.resolve('error');
  };

  const bsddSearchCancel = () => {
    if (window?.bsddBridge?.cancel) {
      window.bsddBridge.cancel();
    } else {
      console.error('bsddBridge or cancel method is not available.');
    }
  };

  return { bsddSearch, bsddSelect, bsddSearchSave, bsddSearchCancel };
};

export default useCefSharpBridge;
