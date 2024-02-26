import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Possible dutch translations for bSDD "dictionary":
// - domein / domeinen
// - definitielijst (definitie)
// - begrippenlijst (begrip / begrippen)
// - termenlijst (term / termen)
// - bibliotheek
// - woordenlijst
// - ontologie

// Possible dutch translations for bSDD "class":
// - classificatie / classificaties
// - definitie / definities
// - begrip / begrippen
// - term / termen
// - object type / object types
// - objecttype / objecttypes

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        'No description': 'No description',
        Link: 'Link',
        Settings: 'Settings',
        Language: 'Language',
        'Select language': 'Select language',
        'bSDD environment': 'bSDD environment',
        'Main dictionary': 'Main dictionary',
        'Selection filter dictionaries': 'Selection filter dictionaries',
        'Select objects': 'Select objects',
        'Attach to type': 'Attach to type',
        'General settings': 'General settings',
        'Dictionary selection': 'Dictionary selection',
        'General settings help text': 'Set the language and the bSDD environment.',
        'Dictionary selection help text':
          'Select the main dictionary and the filter dictionaries to use for the selection of objects. The main dictionary is used to select the objects. The filter dictionaries are used to filter the selection of objects.',

        'Parameter mapping': 'Parameter mapping',
        'Parameter mapping help text':
          'Define the Revit type parameter in which to store the selected classes for this dictionary.',
        'Sort filter dictionaries': 'Sort filter dictionaries',
        'Sort filter dictionaries help text':
          'The dictionaries will be shown in this order anywhere in the application.',
        'Validation per dictionary': 'Validation per dictionary',
        'Classifications': 'Classifications',
        'Propertysets': 'Property sets',
      },
    },
    nl: {
      translation: {
        'No description': 'Geen beschrijving',
        Link: 'Koppelen',
        Settings: 'Instellingen',
        Language: 'Taal',
        'Select language': 'Selecteer taal',
        'bSDD environment': 'bSDD omgeving',
        'Main dictionary': 'bSDD domein',
        'Selection filter dictionaries': 'Selectie filter domeinen',
        'Select objects': 'Selecteer objecten',
        'Attach to type': 'Koppelen aan type',
        'General settings': 'Algemene instellingen',
        'General settings help text': 'Stel de taal en de bSDD omgeving in.',
        'Dictionary selection': 'Domein selectie',
        'Dictionary selection help text':
          'Selecteer het hoofddomein en de filterdomeinen om te gebruiken voor de selectie van objecten. Het hoofddomein wordt gebruikt om de objecten te selecteren. De filterdomeinen worden gebruikt om de selectie van objecten te filteren.',

        'Parameter mapping': 'Parameter mapping',
        'Parameter mapping help text':
          'Definieer de Revit type parameter waarin de geselecteerde object typen voor dit domein moeten worden opgeslagen.',
        'Sort filter dictionaries': 'Sorteer filter domeinen',
        'Sort filter dictionaries help text': 'De domeinen worden overal in de app in deze volgorde getoond.',
        'Validation per dictionary': 'Validatie per domein',
        'Classifications': 'Classificaties',
        'Propertysets': 'Eigenschapen sets',
      },
    },
  },
  lng: 'nl',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
