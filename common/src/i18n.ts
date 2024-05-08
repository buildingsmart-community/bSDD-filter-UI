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
    'en-GB': {
      translation: {
        apply: 'Assign',
        cancel: 'Cancel',
        noDescription: 'No description',
        linkTabTitle: 'Link',
        settingsTabTitle: 'Settings',
        language: 'Language',
        selectLanguageInstruction: 'Select language',
        selectMainDictionary: 'Main dictionary',
        selectFilterDictionaries: 'Selection filter dictionaries',
        selectObjects: 'Select objects',
        attachToType: 'Attach to type',
        generalSettingsLabel: 'General settings',
        dictionarySelectionLabel: 'Dictionary selection',
        generalSettingsInstruction: 'Set the language and the bSDD environment.',
        dictionarySelectionInstruction:
          'Select the main dictionary and the filter dictionaries to use for the selection of objects. The main dictionary is used to select the objects. The filter dictionaries are used to filter the selection of objects.',
        parameterMappingLabel: 'Parameter mapping',
        parameterMappingInstruction:
          'Define the Revit type parameter in which to store the selected classes for this dictionary.',
        sortFilterDictionariesLabel: 'Sort filter dictionaries',
        sortFilterDictionariesInstruction: 'The dictionaries will be shown in this order anywhere in the application.',
        dictionaryValidationSummaryLabel: 'Validation per dictionary',
        classificationsLabel: 'Classifications',
        propertysetsLabel: 'Property sets',
        ShowPreview: 'Show preview dictionaries',
        entitySelectionInstruction: 'Select entities by using the dropdown at the top of the panel.',
        needHelp: 'Need help?',
        checkDocumentation: 'Check out our documentation',
      },
    },
    'nl-NL': {
      translation: {
        apply: 'Toewijzen',
        cancel: 'Annuleren',
        noDescription: 'Geen beschrijving',
        linkTabTitle: 'Koppelen',
        settingsTabTitle: 'Instellingen',
        language: 'Taal',
        selectLanguageInstruction: 'Selecteer taal',
        selectMainDictionary: 'bSDD domein',
        selectFilterDictionaries: 'Selectie filter domeinen',
        selectObjects: 'Selecteer objecten',
        attachToType: 'Koppelen aan type',
        generalSettingsLabel: 'Algemene instellingen',
        generalSettingsInstruction: 'Stel de taal en de bSDD omgeving in.',
        dictionarySelectionLabel: 'Domein selectie',
        dictionarySelectionInstruction:
          'Selecteer het hoofddomein en de filterdomeinen om te gebruiken voor de selectie van objecten. Het hoofddomein wordt gebruikt om de objecten te selecteren. De filterdomeinen worden gebruikt om de selectie van objecten te filteren.',
        parameterMappingLabel: 'Parameter mapping',
        parameterMappingInstruction:
          'Definieer de Revit type parameter waarin de geselecteerde object typen voor dit domein moeten worden opgeslagen.',
        sortFilterDictionariesLabel: 'Sorteer filter domeinen',
        sortFilterDictionariesInstruction: 'De domeinen worden overal in de app in deze volgorde getoond.',
        dictionaryValidationSummaryLabel: 'Validatie per domein',
        classificationsLabel: 'Classificaties',
        propertysetsLabel: 'Eigenschappen sets',
        ShowPreview: 'Toon voorbeeld domeinen',
        entitySelectionInstruction: 'Selecteer objecten in de dropdown bovenaan in het paneel.',
        needHelp: 'Hulp nodig?',
        checkDocumentation: 'Bekijk onze documentatie',
      },
    },
  },
  lng: 'en-GB',
  fallbackLng: 'nl-NL',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
