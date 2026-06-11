import { Accordion, Button, Group } from '@mantine/core';
import { useQueryClient } from '@tanstack/react-query';
import { del } from 'idb-keyval';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useShallow } from 'zustand/react/shallow';

import { validateSettings } from '../api/validation/validateIfcData';
import type { BsddSettings } from '../common/IfcData/bsddBridgeData';
import type { CefSharpWindow } from '../common/bsddBridge/useCefSharpBridge';
import { selectSettings, useSettingsStore } from '../stores/settingsStore';
import AppInfo from './features/AppInfo/AppInfo';
import DictionarySelection from './features/DictionarySelection/DictionarySelection';
import GeneralSettings from './features/GeneralSettings/GeneralSettings';
import ParameterMapping from './features/ParameterMapping/ParameterMapping';

declare let window: CefSharpWindow;

interface SettingsProps {
  activeTab: boolean;
}

function Settings({ activeTab }: SettingsProps) {
  const queryClient = useQueryClient();
  const { t } = useTranslation();
  const setSettings = useSettingsStore((s) => s.setSettings);
  const globalSettings = useSettingsStore(useShallow(selectSettings));

  const [localSettings, setLocalSettings] = useState<BsddSettings>(globalSettings);
  const [unsavedChanges, setUnsavedChanges] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setLocalSettings(globalSettings);
  }, [globalSettings]);

  const handleSave = async () => {
    console.log('Saving', localSettings);
    if (!localSettings) return;

    // Apply optimistically — validation fetches every configured dictionary through
    // the rate-limited queue, and the other views must not wait seconds for that.
    // The host receives the validated result so its persisted settings match the store.
    setSettings(localSettings);
    setUnsavedChanges(false);

    const validated = await validateSettings(queryClient, localSettings);
    setSettings(validated);

    if (typeof window?.bsddBridge?.saveSettings === 'function') {
      window.bsddBridge.saveSettings(JSON.stringify(validated));
    } else {
      console.error('window.bsddBridge.saveSettings is not a function');
    }
  };

  const handleCancel = () => {
    setLocalSettings(globalSettings);
    setUnsavedChanges(false);
  };

  const handleResetCache = async () => {
    queryClient.clear();
    await del('bsdd-query-cache');
    window.location.reload();
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
          activeTab={activeTab}
        />
        <DictionarySelection
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
        <Button fullWidth variant="subtle" color="red" onClick={handleResetCache}>
          {t('resetCache')}
        </Button>
      </Group>
    </>
  );
}

export default Settings;
