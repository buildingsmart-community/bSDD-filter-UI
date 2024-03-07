import { Accordion, Button, Group, Tabs } from '@mantine/core';
import { useEffect, useState } from 'react';

import { BsddSettings } from '../../../../common/src/IfcData/bsddBridgeData';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { fetchDictionaries, updateBsddApi } from '../bsdd/bsddSlice';
import DomainSelection from './DomainSelection';
import DomainSort from './DomainSort';
import GeneralSettings from './GeneralSettings';
import ParameterMapping from './ParameterMapping';
import {
  selectBsddApiEnvironment,
  selectBsddApiEnvironmentUri,
  selectFilterDictionaries,
  selectLanguage,
  selectMainDictionary,
  setSettings,
} from './settingsSlice';

function Settings() {
  const dispatch = useAppDispatch();
  const mainDictionary = useAppSelector(selectMainDictionary);
  const filterDictionaries = useAppSelector(selectFilterDictionaries);
  const language = useAppSelector(selectLanguage);
  const bsddApiEnvironment = useAppSelector(selectBsddApiEnvironment);
  const bsddApiEnvironmentUri = useAppSelector(selectBsddApiEnvironmentUri);

  const [tempSettings, setTempSettings] = useState<BsddSettings>();
  const [unsavedChanges, setUnsavedChanges] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Update the cached dictionary data when the environment changes
  useEffect(() => {
    if (!bsddApiEnvironmentUri) {
      return;
    }
    dispatch(updateBsddApi(bsddApiEnvironmentUri));
    dispatch(fetchDictionaries(bsddApiEnvironmentUri));
  }, [dispatch, bsddApiEnvironmentUri]);

  useEffect(() => {
    setTempSettings({
      bsddApiEnvironment,
      mainDictionary,
      filterDictionaries,
      language,
    } as BsddSettings);
  }, [mainDictionary, filterDictionaries, bsddApiEnvironment, language]);

  const handleSave = () => {
    if (!tempSettings) return;
    dispatch(setSettings(tempSettings));
    setUnsavedChanges(false);
  };

  const handleCancel = () => {
    // Reload settings from the store or initial state
    setUnsavedChanges(false);
  };

  useEffect(() => {
    if (!bsddApiEnvironment || !mainDictionary) return;
    const settings: BsddSettings = {
      bsddApiEnvironment,
      mainDictionary,
      filterDictionaries,
      language,
    };

    console.log('Save settings', settings);

    // @ts-ignore
    window?.bsddBridge?.saveSettings(JSON.stringify(settings));
  }, [bsddApiEnvironment, mainDictionary, filterDictionaries, language]);

  return (
    <Tabs.Panel value="settings">
      <Accordion defaultValue={['2']} multiple>
        <GeneralSettings
          id={1}
          settings={tempSettings}
          setSettings={setTempSettings}
          setUnsavedChanges={setUnsavedChanges}
        />
        <DomainSelection
          id={2}
          settings={tempSettings}
          setSettings={setTempSettings}
          setUnsavedChanges={setUnsavedChanges}
          setIsLoading={setIsLoading}
        />
        <ParameterMapping
          id={3}
          settings={tempSettings}
          setSettings={setTempSettings}
          setUnsavedChanges={setUnsavedChanges}
        />
        <DomainSort
          id={4}
          settings={tempSettings}
          setSettings={setTempSettings}
          setUnsavedChanges={setUnsavedChanges}
        />
      </Accordion>
      <Group my="sm" justify="center">
        <Button
          fullWidth
          loading={isLoading}
          onClick={handleSave}
          disabled={!unsavedChanges}
          variant={isLoading ? 'light' : 'filled'}
          loaderProps={{ type: 'dots' }}
        >
          Save
        </Button>
        <Button fullWidth variant="light" onClick={handleCancel} disabled={!unsavedChanges}>
          Cancel
        </Button>
      </Group>
    </Tabs.Panel>
  );
}

export default Settings;
