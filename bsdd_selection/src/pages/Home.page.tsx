import { Container, Tabs } from '@mantine/core';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { isProduction } from '../../../common/src/env';
import { BsddDictionary, BsddSettings } from '../../../common/src/IfcData/bsddBridgeData';
import { IfcEntity } from '../../../common/src/IfcData/ifc';
import { validateIfcClassification } from '../../../common/src/IfcData/ifcValidators';
import { mockData } from '../../../common/src/IfcData/mockData';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { AppThunk } from '../app/store';
import { selectBsddDataLoaded } from '../features/bsdd/bsddSlice';
import { setValidatedIfcData } from '../features/IfcData/ifcDataSlice';
import Selection from '../features/Selection/Selection';
import Settings from '../features/Settings/Settings';
import {
  setBsddApiEnvironment,
  setIncludeTestDictionaries,
  setLanguage,
  setSettings,
} from '../features/Settings/settingsSlice';

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
  const [pendingSettings, setPendingSettings] = useState<BsddSettings | null>(null);
  const [ifcData, setIfcData] = useState<IfcEntity[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  // Set up BsddBridge connection
  useEffect(() => {
    const connectToBsddBridge = async () => {
      try {
        if (CefSharp) {
          await CefSharp.BindObjectAsync('bsddBridge');
        }
      } catch (error) {
        console.error('Error connecting to bsddBridge:', error);
      }
    };
    connectToBsddBridge();
  }, []);

  // Set basic settings to be able to load bSDD dictionaries
  // when dictionary list is loaded, validate and set all settings
  useEffect(() => {
    if (pendingSettings) {
      if (bsddDataLoaded) {
        dispatch(setSettingsWithValidation(pendingSettings));
        setPendingSettings(null);
        setLoading(false);
      } else {
        if (pendingSettings?.bsddApiEnvironment) {
          dispatch(setBsddApiEnvironment(pendingSettings.bsddApiEnvironment));
        }
        if (pendingSettings?.includeTestDictionaries !== null) {
          dispatch(setIncludeTestDictionaries(pendingSettings.includeTestDictionaries));
        }
        if (pendingSettings?.language) {
          dispatch(setLanguage(pendingSettings.language));
        }
      }
    }
  }, [bsddDataLoaded, pendingSettings, dispatch]);

  useEffect(() => {
    if (!loading && ifcData) {
      dispatch(setValidatedIfcData(ifcData));
      setIfcData(null);
    }
  }, [loading, ifcData, dispatch]);

  // Initial ifcData load, load mock data in development
  useEffect(() => {
    if (isProduction) {
      setIfcData([]);
    } else {
      console.log('initial loadIfcData selection', mockData.ifcData);
      setIfcData(mockData.ifcData);
    }
  }, []);

  // Initial settings load, load mock data in development
  useEffect(() => {
    const loadSettings = async () => {
      // @ts-ignore
      const settings = await window?.bsddBridge?.loadSettings();
      if (settings) {
        const settingsParsed = JSON.parse(settings) as BsddSettings;
        console.log('initial loadSettings selection', settingsParsed);
        setPendingSettings(settingsParsed);
      }
    };

    if (isProduction) {
      loadSettings();
    } else {
      console.log('initial loadSettings selection', mockData.settings);
      setPendingSettings(mockData.settings);
    }
  }, []);

  // Bridge API functions
  // @ts-ignore
  window.updateSelection = (ifcEntities: IfcEntity[]) => {
    console.log('updateSelection', ifcEntities);
    setIfcData(ifcEntities);
  };

  // @ts-ignore
  window.updateSettings = (settings: BsddSettings) => {
    console.log('updateSettings', settings);
    setPendingSettings(settings);
  };

  return (
    <Container size="40rem">
      <Tabs defaultValue="link">
        <Tabs.List grow>
          <Tabs.Tab value="link">{t('linkTabTitle')}</Tabs.Tab>
          <Tabs.Tab value="settings">{t('settingsTabTitle')}</Tabs.Tab>
        </Tabs.List>
        <Selection loading={loading} />
        <Settings />
      </Tabs>
    </Container>
  );
}

export default HomePage;
