import { Accordion, Button, Group } from '@mantine/core';
import { useEffect, useState } from 'react';

import { useAppDispatch, useAppSelector } from '../common/app/hooks';
import { CefSharpWindow } from '../common/bsddBridge/useCefSharpBridge';
import { BsddSettings } from '../common/IfcData/bsddBridgeData';
import { setSettings } from '../common/slices/settingsSlice';
import AppInfo from './features/AppInfo/AppInfo';
import DomainSelection from './features/DictionarySelection/DictionarySelection';
import DomainSort from './features/DictionarySort/DictionarySort';
import GeneralSettings from './features/GeneralSettings/GeneralSettings';
import ParameterMapping from './features/ParameterMapping/ParameterMapping';

declare let window: CefSharpWindow;

function Settings() {
  const dispatch = useAppDispatch();
  const globalSettings = useAppSelector((state) => state.settings);

  const [localSettings, setLocalSettings] = useState<BsddSettings>(globalSettings);
  const [unsavedChanges, setUnsavedChanges] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setLocalSettings(globalSettings);
  }, [globalSettings]);

  const handleSave = () => {
    console.log('Saving', localSettings);
    if (!localSettings) return;
    dispatch(setSettings(localSettings));

    if (typeof window?.bsddBridge?.saveSettings === 'function') {
      window.bsddBridge.saveSettings(JSON.stringify(localSettings));
    } else {
      console.error('window.bsddBridge.saveSettings is not a function');
    }

    setUnsavedChanges(false);
  };

  const handleCancel = () => {
    setLocalSettings(globalSettings);
    setUnsavedChanges(false);
  };

  return (
    <>
      <Accordion defaultValue={['2']} multiple>
        <AppInfo id={0} />
        <GeneralSettings
          id={1}
          localSettings={localSettings}
          setLocalSettings={setLocalSettings}
          setUnsavedChanges={setUnsavedChanges}
        />
        <DomainSelection
          id={2}
          localSettings={localSettings}
          setLocalSettings={setLocalSettings}
          setUnsavedChanges={setUnsavedChanges}
          setIsLoading={setIsLoading}
        />
        <ParameterMapping
          id={3}
          localSettings={localSettings}
          setLocalSettings={setLocalSettings}
          setUnsavedChanges={setUnsavedChanges}
        />
        <DomainSort
          id={4}
          localSettings={localSettings}
          setLocalSettings={setLocalSettings}
          setUnsavedChanges={setUnsavedChanges}
        />
      </Accordion>
      <Group my="sm" justify="center">
        <Button
          fullWidth
          loading={isLoading}
          onClick={handleSave}
          disabled={!unsavedChanges || !localSettings?.mainDictionary?.ifcClassification?.location}
          variant={isLoading ? 'light' : 'filled'}
          loaderProps={{ type: 'dots' }}
        >
          Save
        </Button>
        <Button fullWidth variant="light" onClick={handleCancel} disabled={!unsavedChanges}>
          Cancel
        </Button>
      </Group>
    </>
  );
}

export default Settings;
