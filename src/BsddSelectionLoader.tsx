import { MantineProvider } from '@mantine/core';
import React, { useEffect, useState } from 'react';

import BsddSelection from './lib/bsdd_selection/main';
import { ApiFunctionsProvider } from './lib/common/apiFunctionsContext';
import { IfcEntity } from './lib/common/IfcData/ifc';

declare global {
  interface Window {
    CefSharp: any;
  }
}

function BsddSearchLoader() {
  const [isConnected, setIsConnected] = useState(false);

  const loadSettings = async () => {
    if (!window?.bsddBridge?.loadSettings) {
      return Promise.reject(new Error('window.bsddBridge.loadSettings is not defined'));
    }
    return window?.bsddBridge?.loadSettings();
  };

  // Set up BsddBridge connection
  useEffect(() => {
    const intervalId = setInterval(async () => {
      if (window.CefSharp) {
        console.log('CefSharp is available, trying to bind bsddBridge...');
        try {
          await window.CefSharp.BindObjectAsync('bsddBridge');
          console.log('bsddBridge bound successfully');
          loadSettings();
          setIsConnected(true);
          clearInterval(intervalId); // Clear the interval once the binding is successful
        } catch (error) {
          console.error('Error connecting to bsddBridge:', error);
        }
      } else {
        console.log('CefSharp is not available');
      }
    }, 1000); // Check every second

    // Clean up the interval on unmount
    return () => clearInterval(intervalId);
  }, []);

  function bsddSearchClick(ifcProduct: IfcEntity) {
    console.log('Open bsddSearch', ifcProduct);

    const ifcEntityJson = JSON.stringify(ifcProduct);

    // @ts-ignore
    window?.bsddBridge?.bsddSearch(ifcEntityJson);
  }

  function bsddSelect(ifcProduct: IfcEntity) {
    const ifcEntityJson = JSON.stringify(ifcProduct);

    // @ts-ignore
    window?.bsddBridge?.bsddSelect(ifcEntityJson);
  }

  const apiFunctions = {
    loadSettings,
    bsddSearchClick,
    bsddSelect,
  };

  return (
    <ApiFunctionsProvider value={apiFunctions}>
      <MantineProvider>
        <React.StrictMode>{isConnected && <BsddSelection />}</React.StrictMode>
      </MantineProvider>
    </ApiFunctionsProvider>
  );
}

export default BsddSearchLoader;
