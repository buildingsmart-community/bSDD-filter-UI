import { Accordion, Button, Group, Tabs } from '@mantine/core';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { BsddSettings } from '../../../../common/src/ifc/bsddBridgeData';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import AppInfo from './AppInfo';
import DomainSelection from './DomainSelection';
import DomainSort from './DomainSort';
import GeneralSettings from './GeneralSettings';
import ParameterMapping from './ParameterMapping';
import { setSettings } from './settingsSlice';

function Settings() {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
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
          {t('save')}
        </Button>
        <Button fullWidth variant="light" onClick={handleCancel} disabled={!unsavedChanges}>
          {t('cancel')}
        </Button>
      </Group>
    </Tabs.Panel>
  );
}

export default Settings;
