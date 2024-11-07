import { ComboboxItem, Select } from '@mantine/core';
import { useTranslation } from 'react-i18next';

import { languages } from '../../../common/i18n';
import { BsddSettings } from '../../../common/IfcData/bsddBridgeData';

interface LanguageSelectProps {
  localSettings: BsddSettings | undefined;
  setLocalSettings: (settings: BsddSettings) => void;
  setUnsavedChanges: (unsavedChanges: boolean) => void;
}

function getLanguageOptions(): ComboboxItem[] {
  return Object.entries(languages).map(([key, value]) => ({
    value: key,
    label: value,
  }));
}

function LanguageSelect({ localSettings, setLocalSettings, setUnsavedChanges }: LanguageSelectProps) {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language: string | null) => {
    if (!language || !localSettings) return;
    i18n.changeLanguage(language);
    setLocalSettings({ ...localSettings, language });
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
