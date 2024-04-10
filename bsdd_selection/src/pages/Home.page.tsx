import { Container, LoadingOverlay, Tabs } from '@mantine/core';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { isProduction } from '../../../common/src/env';
import { BsddBridgeData, BsddDictionary, BsddSettings } from '../../../common/src/IfcData/bsddBridgeData';
import { validateIfcClassification } from '../../../common/src/IfcData/ifcValidators';
import { mockData } from '../../../common/src/IfcData/mockData';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { AppThunk } from '../app/store';
import { selectBsddDataLoaded } from '../features/bsdd/bsddSlice';
import { setValidatedIfcData } from '../features/ifcData/ifcDataSlice';
import Selection from '../features/Selection/Selection';
import Settings from '../features/Settings/Settings';
import { setSettings } from '../features/Settings/settingsSlice';

let CefSharp: any;

const setSettingsWithValidation =
  (settings: BsddSettings): AppThunk =>
  async (dispatch, getState) => {
    const state = getState();
    const validatedMainDictionary = validateIfcClassification(state, settings.mainDictionary);
    const validatedFilterDictionaries = settings.filterDictionaries
      .map((dictionary) => validateIfcClassification(state, dictionary))
      .filter((dictionary): dictionary is BsddDictionary => dictionary !== null);

    const updatedSettings = {
      ...settings,
      mainDictionary: validatedMainDictionary,
      filterDictionaries: validatedFilterDictionaries,
    };
    dispatch(setSettings(updatedSettings));
  };

function HomePage() {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const bsddDataLoaded = useAppSelector(selectBsddDataLoaded);
  const [pendingBridgeData, setPendingBridgeData] = useState<BsddBridgeData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const dispatchDataWhenLoaded = (bsddBridgeData: BsddBridgeData) => {
    setPendingBridgeData(bsddBridgeData);
  };

  // Set up BsddBridge connection
  useEffect(() => {
    const connectToBsddBridge = async () => {
      try {
        if (CefSharp) {
          await CefSharp.BindObjectAsync('bsddBridge');
        }
      } catch (e: any) {
        console.error(e.message);
      }
    };
    connectToBsddBridge();
  }, []);

  useEffect(() => {
    if (bsddDataLoaded && pendingBridgeData) {
      dispatch(setSettingsWithValidation(pendingBridgeData.settings));
      dispatch(setValidatedIfcData(pendingBridgeData.ifcData));
      setPendingBridgeData(null);
      setLoading(false);
    }
  }, [bsddDataLoaded, pendingBridgeData, dispatch]);

  // Load mock data in development
  useEffect(() => {
    if (isProduction) return;

    dispatchDataWhenLoaded(mockData);
  }, [dispatch]);

  // Initial settings load
  useEffect(() => {
    const loadSettings = async () => {
      // @ts-ignore
      if (window?.bsddBridge) {
        // @ts-ignore
        const settings = await window.bsddBridge.loadSettings();
        const settingsParsed = JSON.parse(settings) as BsddSettings;
        console.log('initial loadSettings selection', settingsParsed);
        dispatchDataWhenLoaded(settingsParsed);
      }
    };

    loadSettings();
  }, []);

  // Bridge API functions
  // @ts-ignore
  window.updateSelection = (ifcEntities: IfcEntity[]) => {
    console.log('updateSelection', ifcEntities);
    dispatch(setValidatedIfcData(ifcEntities));
  };

  // @ts-ignore
  window.updateSettings = (settings: BsddSettings) => {
    console.log('updateSettings', settings);
    dispatchDataWhenLoaded(settings);
  };

  return (
    <Container size="40rem">
      <Tabs defaultValue="link">
        <Tabs.List grow>
          <Tabs.Tab value="link">{t('Link')}</Tabs.Tab>
          <Tabs.Tab value="settings">{t('Settings')}</Tabs.Tab>
        </Tabs.List>
        <Selection loading={loading} />
        <Settings />
      </Tabs>
    </Container>
  );
}

export default HomePage;
