import { Select } from '@mantine/core';
import { useTranslation } from 'react-i18next';
import { BsddSettings } from '../../../../common/src/IfcData/bsddBridgeData';

interface LanguageSelectProps {
  settings: BsddSettings | undefined;
  setSettings: (settings: BsddSettings) => void;
  setUnsavedChanges: (unsavedChanges: boolean) => void;
}

const LanguageSelect = ({ settings, setSettings, setUnsavedChanges }: LanguageSelectProps) => {
  const { t, i18n } = useTranslation();

  const languages = [
    { value: 'en', label: 'English' },
    { value: 'nl', label: 'Nederlands' },
  ];

  const changeLanguage = (language: string | null) => {
    if (!language || !settings) return;
    i18n.changeLanguage(language);
    setSettings({ ...settings, language: language });
    setUnsavedChanges(true);
  };

  return (
    <Select
      label={t('Language')}
      data={languages}
      value={i18n.language}
      onChange={changeLanguage}
      placeholder={t('Select language')}
    />
  );
};

export default LanguageSelect;
