import { Select } from '@mantine/core';
import { useTranslation } from 'react-i18next';

const LanguageSelect = () => {
  const { t, i18n } = useTranslation();

  const languages = [
    { value: 'en', label: 'English' },
    { value: 'nl', label: 'Nederlands' },
  ];

  const changeLanguage = (language: string | null) => {
    if (!language) return;
    i18n.changeLanguage(language);
  };

  return <Select label={t('Language')} data={languages} value={i18n.language} onChange={changeLanguage} placeholder={t('Select language')} />;
};

export default LanguageSelect;

