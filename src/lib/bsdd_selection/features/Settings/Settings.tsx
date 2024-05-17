import { Accordion, Button, Group, Tabs } from '@mantine/core';
import { useEffect, useState } from 'react';

import { useAppDispatch, useAppSelector } from '../../../common/app/hooks';
import { BsddSettings } from '../../../common/IfcData/bsddBridgeData';
import { setSettings } from '../../../common/slices/settingsSlice';
import DomainSelection from './DomainSelection';
import DomainSort from './DomainSort';
import GeneralSettings from './GeneralSettings';
import ParameterMapping from './ParameterMapping';

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

    // @ts-ignore
    window?.bsddBridge?.saveSettings(JSON.stringify(localSettings));

    setUnsavedChanges(false);
  };

  const handleCancel = () => {
    setLocalSettings(globalSettings);
    setUnsavedChanges(false);
  };

  return (
    <Tabs.Panel value="settings">
      <Accordion defaultValue={['2']} multiple>
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
    </Tabs.Panel>
  );
}

export default Settings;
