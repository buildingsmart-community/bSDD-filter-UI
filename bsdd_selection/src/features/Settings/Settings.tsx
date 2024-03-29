import { Accordion, Button, Group, Tabs } from '@mantine/core';
import { useEffect, useState } from 'react';

import { BsddSettings } from '../../../../common/src/IfcData/bsddBridgeData';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import DomainSelection from './DomainSelection';
import DomainSort from './DomainSort';
import GeneralSettings from './GeneralSettings';
import ParameterMapping from './ParameterMapping';
import {
  selectBsddApiEnvironment,
  selectFilterDictionaries,
  selectIncludeTestDictionaries,
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
  const includeTestDictionaries = useAppSelector(selectIncludeTestDictionaries);

  const [tempSettings, setTempSettings] = useState<BsddSettings>();
  const [unsavedChanges, setUnsavedChanges] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setTempSettings({
      bsddApiEnvironment,
      mainDictionary,
      filterDictionaries,
      language,
      includeTestDictionaries,
    } as BsddSettings);
  }, [mainDictionary, filterDictionaries, bsddApiEnvironment, language, includeTestDictionaries]);

  const handleSave = () => {
    if (!tempSettings) return;
    dispatch(setSettings(tempSettings));

    // @ts-ignore
    window?.bsddBridge?.saveSettings(JSON.stringify(tempSettings));

    setUnsavedChanges(false);
  };

  const handleCancel = () => {
    // Reload settings from the store or initial state
    setUnsavedChanges(false);
  };

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
