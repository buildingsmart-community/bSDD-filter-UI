import { ComboboxItem, Select } from '@mantine/core';
import { useTranslation } from 'react-i18next';

import { languages } from '../../../common/i18n';
import { BsddSettings } from '../../../common/IfcData/bsddBridgeData';

interface LanguageSelectProps {
  settings: BsddSettings | undefined;
  setSettings: (settings: BsddSettings) => void;
  setUnsavedChanges: (unsavedChanges: boolean) => void;
}

function getLanguageOptions(): ComboboxItem[] {
  return Object.entries(languages).map(([key, value]) => ({
    value: key,
    label: value,
  }));
}

function LanguageSelect({ settings, setSettings, setUnsavedChanges }: LanguageSelectProps) {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language: string | null) => {
    if (!language || !settings) return;
    i18n.changeLanguage(language);
    setSettings({ ...settings, language });
    setUnsavedChanges(true);
  };

  return (
    <Select
      label={t('language')}
      data={getLanguageOptions()}
      value={i18n.language}
      onChange={changeLanguage}
      placeholder={t('selectLanguageInstruction')}
    />
  );
}

export default LanguageSelect;
