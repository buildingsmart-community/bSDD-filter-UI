import { useEffect } from 'react';

import { mockData } from '../../../mocks/mockData';
import { useAppDispatch } from '../app/hooks';
import { BsddBridgeData, BsddSettings } from '../IfcData/bsddBridgeData';
import { IfcEntity } from '../IfcData/ifc';
import defaultSettings from '../settings/defaultSettings';
import { setValidatedIfcData } from '../slices/ifcDataSlice';
import { setIfcEntity } from '../slices/ifcEntitySlice';
import { setSettings } from '../slices/settingsSlice';
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

  useEffect(() => {
    let cefSharpCheckInterval: ReturnType<typeof setInterval>;
    let cefSharpTimeout: ReturnType<typeof setTimeout>;

    const initializeCefSharpBridge = async () => {
      try {
        // Bind the object from CefSharp to the window
        await window.CefSharp?.BindObjectAsync('bsddBridge');

        if (window.bsddBridge) {
          // Call the loadBridgeData function on the bridge object
          await window.bsddBridge.loadBridgeData().then((BridgeDataJson: string) => {
            console.log('CefSharp loadBridgeData.');
            const bsddBridgeData: BsddBridgeData = JSON.parse(BridgeDataJson);
            console.log('CefSharp bsddBridgeData:', bsddBridgeData);
            const { ifcData, settings } = bsddBridgeData;
            if (settings) {
              dispatch(setSettings(settings));
              console.log('CefSharp settings:', settings);
            }
            if (ifcData?.length > 0) {
              dispatch(setValidatedIfcData(ifcData));
              dispatch(setIfcEntity(ifcData[0]));
              console.log('CefSharp initial IFC entities:', ifcData);
            }
          });

          // Define global functions that can be called from the CefSharp backend
          window.updateSelection = (selection: IfcEntity[]) => {
            dispatch(setValidatedIfcData(selection));
            console.log('CefSharp updateSelection:', selection);
          };

          window.updateSettings = async (settings: BsddSettings) => {
            dispatch(setSettings(settings));
            console.log('CefSharp updateSettings:', settings);
          };

          console.log('CefSharp connection and global functions are set up successfully.');
        } else {
          console.error('Failed to bind the bsddBridge object.');
          dispatch(setSettings(defaultSettings));
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
      dispatch(setSettings(defaultSettings));
      dispatch(setValidatedIfcData(mockData?.ifcData || []));
    }, 1000); // 1 seconds

    return () => {
      clearInterval(cefSharpCheckInterval);
      clearTimeout(cefSharpTimeout);
    };
  }, [dispatch]);

  const bsddSearch = (ifcEntity: IfcEntity) => {
    const ifcEntityJson = JSON.stringify(ifcEntity);
    if (window?.bsddBridge?.bsddSearch) {
      window.bsddBridge.bsddSearch(ifcEntityJson);
    } else {
      console.error('bsddBridge or bsddSearch method is not available.');
    }
  };

  const bsddSelect = (ifcEntity: IfcEntity) => {
    const ifcEntityJson = JSON.stringify(ifcEntity);
    if (window?.bsddBridge?.bsddSelect) {
      window.bsddBridge.bsddSelect(ifcEntityJson);
    } else {
      console.error('bsddBridge or bsddSelect method is not available.');
    }
  };

  const bsddSearchSave = (ifcEntities: IfcEntity[]) => {
    const ifcEntitiesJson = JSON.stringify(ifcEntities);
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
