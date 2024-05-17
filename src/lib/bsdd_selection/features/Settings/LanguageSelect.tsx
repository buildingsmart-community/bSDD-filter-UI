import { Select } from '@mantine/core';
import { useTranslation } from 'react-i18next';

import { BsddSettings } from '../../../common/IfcData/bsddBridgeData';

interface LanguageSelectProps {
  settings: BsddSettings | undefined;
  setSettings: (settings: BsddSettings) => void;
  setUnsavedChanges: (unsavedChanges: boolean) => void;
}

function LanguageSelect({ settings, setSettings, setUnsavedChanges }: LanguageSelectProps) {
  const { t, i18n } = useTranslation();

  const languages = [
    { value: 'en-GB', label: 'English' },
    { value: 'nl-NL', label: 'Nederlands' },
  ];

  const changeLanguage = (language: string | null) => {
    if (!language || !settings) return;
    i18n.changeLanguage(language);
    setSettings({ ...settings, language });
    setUnsavedChanges(true);
  };

  return (
    <Select
      label={t('language')}
      data={languages}
      value={i18n.language}
      onChange={changeLanguage}
      placeholder={t('selectLanguageInstruction')}
    />
  );
}

export default LanguageSelect;
