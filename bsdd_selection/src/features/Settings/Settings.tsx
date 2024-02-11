import { Accordion, Tabs } from '@mantine/core';

import ParameterMapping from './ParameterMapping';
import DomainSort from './DomainSort';
import DomainSelection from './DomainSelection';
import GeneralSettings from './GeneralSettings';
import { useEffect } from 'react';
import { BsddSettings } from '../../../../common/src/IfcData/bsddBridgeData';
import { useAppSelector } from '../../app/hooks';
import { RootState } from '../../app/store';
import { selectBsddApiEnvironmentUri } from '../../../../common/src/settings/settingsSlice';

interface SettingsProps {}

function Settings({}: SettingsProps) {
  const mainDictionary = useAppSelector((state: RootState) => state.settings.mainDictionary);
  const filterDictionaries = useAppSelector((state: RootState) => state.settings.filterDictionaries);
  const language = useAppSelector((state: RootState) => state.settings.language);

  const bsddApiEnvironment = useAppSelector(selectBsddApiEnvironmentUri);

  useEffect(() => {
    if (!mainDictionary) return;
    const settings: BsddSettings = {
      bsddApiEnvironment: bsddApiEnvironment,
      mainDictionary: mainDictionary,
      filterDictionaries: filterDictionaries,
      language: language,
    };

    console.log('Save settings', settings);

    // @ts-ignore
    // bsddBridge.saveSettings(settings);
  }, [bsddApiEnvironment, mainDictionary, filterDictionaries, language]);

  return (
    <Tabs.Panel value="settings">
      <Accordion defaultValue={['2']} multiple>
        <GeneralSettings id={1} />
        <DomainSelection id={2} />
        <ParameterMapping id={3} />
        <DomainSort id={4} />
      </Accordion>
    </Tabs.Panel>
  );
}

export default Settings;
