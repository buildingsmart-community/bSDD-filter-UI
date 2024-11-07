import { Accordion, Checkbox, Space, Text, Title } from '@mantine/core';
import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

import { useAppDispatch, useAppSelector } from '../../../common/app/hooks';
import { BsddSettings } from '../../../common/IfcData/bsddBridgeData';
import { fetchDictionaries } from '../../../common/slices/bsddSlice';
import { selectIncludeTestDictionaries } from '../../../common/slices/settingsSlice';
import LanguageSelect from './LanguageSelect';

interface GeneralSettingsProps {
  id: number;
  localSettings: BsddSettings;
  setLocalSettings: (settings: BsddSettings) => void;
  setUnsavedChanges: (unsavedChanges: boolean) => void;
}

function GeneralSettings({ id, localSettings, setLocalSettings, setUnsavedChanges }: GeneralSettingsProps) {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const includeTestDictionaries = useAppSelector(selectIncludeTestDictionaries);

  const prevIncludeTestDictionariesRef = useRef<boolean | null>(null);

  // Update dictionary selection list when parameters change
  useEffect(() => {
    if (includeTestDictionaries === undefined) return;

    if (prevIncludeTestDictionariesRef.current === includeTestDictionaries) {
      return;
    }

    dispatch(fetchDictionaries(includeTestDictionaries));

    prevIncludeTestDictionariesRef.current = includeTestDictionaries;
  }, [dispatch, includeTestDictionaries]);

  return (
    <Accordion.Item key={id} value={id.toString()}>
      <Accordion.Control>
        <Title order={5}>{t('generalSettingsLabel')}</Title>
        <Text size="xs" c="dimmed">
          {t('generalSettingsInstruction')}
        </Text>
      </Accordion.Control>
      <Accordion.Panel>
        <LanguageSelect localSettings={localSettings} setLocalSettings={setLocalSettings} setUnsavedChanges={setUnsavedChanges} />{' '}
        <Space h="xs" />
        <Checkbox
          label={t('ShowPreview')}
          checked={
            localSettings && localSettings.includeTestDictionaries ? localSettings.includeTestDictionaries : false
          }
          indeterminate={!localSettings || localSettings.includeTestDictionaries === null}
          type="checkbox"
          onChange={(e: any) => {
            if (!localSettings) return;
            setLocalSettings({ ...localSettings, includeTestDictionaries: e.currentTarget.checked });
            setUnsavedChanges(true);
          }}
        />
      </Accordion.Panel>
    </Accordion.Item>
  );
}

export default GeneralSettings;
