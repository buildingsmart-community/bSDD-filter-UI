import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import arSA from './locales/ar-SA.json';
import csCZ from './locales/cs-CZ.json';
import daDK from './locales/da-DK.json';
import deDE from './locales/de-DE.json';
import enGB from './locales/en-GB.json';
import esES from './locales/es-ES.json';
import fiFI from './locales/fi-FI.json';
import frFR from './locales/fr-FR.json';
import hiIN from './locales/hi-IN.json';
import hrHR from './locales/hr-HR.json';
import isIS from './locales/is-IS.json';
import itIT from './locales/it-IT.json';
import jaJP from './locales/ja-JP.json';
import koKR from './locales/ko-KR.json';
import ltLT from './locales/lt-LT.json';
import nlNL from './locales/nl-NL.json';
import noNO from './locales/no-NO.json';
import plPL from './locales/pl-PL.json';
import ptBR from './locales/pt-BR.json';
import ptPT from './locales/pt-PT.json';
import roRO from './locales/ro-RO.json';
import slSI from './locales/sl-SI.json';
import srSP from './locales/sr-SP.json';
import svSE from './locales/sv-SE.json';
import trTR from './locales/tr-TR.json';
import zhCN from './locales/zh-CN.json';

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

export const languages = {
  'en-GB': 'English',
  'nl-NL': 'Dutch (Nederlands)',
  'ar-SA': 'Arabic (اَلْعَرَبِيَّةُ)',
  'zh-CN': 'Chinese (中文)',
  'hr-HR': 'Croatian (Hrvatski)',
  'cs-CZ': 'Czech (Čeština)',
  'da-DK': 'Danish (Dansk)',
  'fi-FI': 'Finnish (Suomi)',
  'fr-FR': 'French (Français)',
  'de-DE': 'German (Deutsch)',
  'hi-IN': 'Hindi (हिन्दी)',
  'is-IS': 'Icelandic (Íslenska)',
  'it-IT': 'Italian (Italiano)',
  'ja-JP': 'Japanese (日本語)',
  'ko-KR': 'Korean (한국어)',
  'lt-LT': 'Lithuanian (Lietuviškai)',
  'no-NO': 'Norwegian (Norsk)',
  'pl-PL': 'Polish (Polski)',
  'pt-PT': 'Portuguese (Português)',
  'pt-BR': 'Portuguese, Brazilian',
  'ro-RO': 'Romanian (Românește)',
  'sr-SP': 'Serbian (Српски)',
  'sl-SI': 'Slovenian (Slovenščina)',
  'es-ES': 'Spanish (Español)',
  'sv-SE': 'Swedish (Svenska)',
  'tr-TR': 'Turkish (Türkçe)',
};

i18n.use(initReactI18next).init({
  resources: {
    'en-GB': enGB,
    'nl-NL': nlNL,
    'ar-SA': arSA,
    'zh-CN': zhCN,
    'hr-HR': hrHR,
    'cs-CZ': csCZ,
    'da-DK': daDK,
    'fi-FI': fiFI,
    'fr-FR': frFR,
    'de-DE': deDE,
    'hi-IN': hiIN,
    'is-IS': isIS,
    'it-IT': itIT,
    'ja-JP': jaJP,
    'ko-KR': koKR,
    'lt-LT': ltLT,
    'no-NO': noNO,
    'pl-PL': plPL,
    'pt-PT': ptPT,
    'pt-BR': ptBR,
    'ro-RO': roRO,
    'sr-SP': srSP,
    'sl-SI': slSI,
    'es-ES': esES,
    'sv-SE': svSE,
    'tr-TR': trTR,
  },
  lng: 'en-GB',
  fallbackLng: 'nl-NL',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
