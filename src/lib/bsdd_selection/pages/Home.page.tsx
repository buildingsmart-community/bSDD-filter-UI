import { Container, Tabs } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { useApiFunctions } from '../../common/apiFunctionsContext';
import { useAppDispatch, useAppSelector } from '../../common/app/hooks';
import { AppThunk } from '../../common/app/store';
import { BsddBridgeData, BsddDictionary, BsddSettings } from '../../common/IfcData/bsddBridgeData';
import { IfcEntity } from '../../common/IfcData/ifc';
import { validateIfcClassification } from '../../common/IfcData/ifcValidators';
import { selectBsddDictionariesLoaded } from '../../common/slices/bsddSlice';
import { setValidatedIfcData } from '../../common/slices/ifcDataSlice';
import { setIncludeTestDictionaries, setLanguage, setSettings } from '../../common/slices/settingsSlice';
import { BsddSelectionProps } from '../BsddSelectionProps';
import Selection from '../features/Selection/Selection';
import Settings from '../features/Settings/Settings';

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

function HomePage({ initialData }: BsddSelectionProps) {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const bsddDictionariesLoaded = useAppSelector(selectBsddDictionariesLoaded);

  const { bsddSearchLoadSettings } = useApiFunctions();

  const [pendingSettings, setPendingSettings] = useState<BsddSettings | null>(null);
  const [ifcData, setIfcData] = useState<IfcEntity[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const [menuOpened, { toggle: toggleMenu }] = useDisclosure();

  // Set basic settings to be able to load bSDD dictionaries
  // when dictionary list is loaded, validate and set all settings
  useEffect(() => {
    if (pendingSettings) {
      if (bsddDictionariesLoaded) {
        dispatch(setSettingsWithValidation(pendingSettings));
        setPendingSettings(null);
        setLoading(false);
      } else {
        if (pendingSettings?.includeTestDictionaries !== null) {
          dispatch(setIncludeTestDictionaries(pendingSettings.includeTestDictionaries));
        }
        if (pendingSettings?.language) {
          dispatch(setLanguage(pendingSettings.language));
        }
      }
    }
  }, [bsddDictionariesLoaded, pendingSettings, dispatch]);

  useEffect(() => {
    if (!loading && ifcData) {
      dispatch(setValidatedIfcData(ifcData));
      setIfcData(null);
    }
  }, [loading, ifcData, dispatch]);

  // Load initial ifcData when present, otherwise set empty array and await push from backend
  useEffect(() => {
    if (!initialData) {
      setIfcData([]);
    } else {
      console.log('initial loadIfcData selection', initialData.ifcData);
      setIfcData(initialData.ifcData);
    }
  }, [initialData]);

  // Load initial settings when present, otherwise try to load async from backend
  useEffect(() => {
    const loadSettingsCallback = async () => {
      try {
        const loadedSettings = await bsddSearchLoadSettings();
        const { settings } = JSON.parse(loadedSettings) as BsddBridgeData;
        console.log('initial loadSettings selection', settings);
        setPendingSettings(settings);
      } catch (error) {
        console.error('Failed to load settings:', error);
      }
    };

    if (!initialData) {
      loadSettingsCallback();
    } else {
      console.log('initial loadSettings selection', initialData.settings);
      setPendingSettings(initialData.settings);
    }
  }, [initialData, bsddSearchLoadSettings]);

  // Backend bridge API functions

  // @ts-ignore
  window.updateSelection = (selectedIfcEntities: IfcEntity[]) => {
    console.log('updateSelection', selectedIfcEntities);
    setIfcData(selectedIfcEntities);
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
