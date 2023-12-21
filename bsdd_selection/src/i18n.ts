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

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          "No description": "No description",
          "Link": "Link",
          "Settings": "Settings",
          "Language": "Language",
          "Select language": "Select language",
          "bSDD environment": "bSDD environment",
          "Main dictionary": "Main dictionary",
          "Selection filter dictionaries": "Selection filter dictionaries",
          "Sort filter dictionaries": "Sort filter dictionaries",
          "Select objects": "Select objects",
          "Attach to type": "Attach to type",
        }
      },
      nl: {
        translation: {
          "No description": "Geen beschrijving",
          "Link": "Koppelen",
          "Settings": "Instellingen",
          "Language": "Taal",
          "Select language": "Selecteer taal",
          "bSDD environment": "bSDD omgeving",
          "Main dictionary": "bSDD domein",
          "Selection filter dictionaries": "Selectie filter domeinen",
          "Sort filter dictionaries": "Sorteer filter domeinen",
          "Select objects": "Selecteer objecten",
          "Attach to type": "Koppelen aan type",
        }
      },
    },
    lng: "nl",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;