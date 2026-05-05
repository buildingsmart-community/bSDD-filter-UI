// Purpose: i18next bootstrap with lazy-loaded locales.
//
// Locales are discovered at build time via Vite's `import.meta.glob` and
// loaded on demand when `i18n.changeLanguage(...)` is called. This keeps the
// initial bundle free of the ~26 translation files (~250 KB) and lets the
// host swap languages without any prefetching.
import i18n from 'i18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import { initReactI18next } from 'react-i18next';

// Eagerly bundle English (fallback) and Dutch (majority of users) so first
// paint never has to wait on a network round-trip for either.
// Every other locale is loaded lazily by the backend.
import enGB from './locales/en-GB.json';
import nlNL from './locales/nl-NL.json';

// Map of `{ "./locales/xx-YY.json": () => Promise<{ default: ... }> }`.
const LOCALE_LOADERS = import.meta.glob('./locales/*.json');

function localeLoader(locale: string): (() => Promise<unknown>) | undefined {
  const key = `./locales/${locale}.json`;
  return LOCALE_LOADERS[key] as (() => Promise<{ default: unknown }>) | undefined;
}

/** Friendly label per locale; the keys are the full set of supported BCP-47 codes. */
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

i18n
  .use(
    resourcesToBackend(async (language: string, namespace: string) => {
      const load = localeLoader(language);
      if (!load) return {};
      const mod = (await load()) as { default: Record<string, unknown> };
      // Locale files are shaped as { "translation": { ... } }.
      // Return just the namespace subtree so i18next doesn't double-nest.
      const resources = mod.default;
      return (resources[namespace] as Record<string, string>) ?? resources;
    }),
  )
  .use(initReactI18next)
  .init({
    // English and Dutch are bundled so first render never blocks on the backend.
    resources: {
      'en-GB': { translation: enGB.translation },
      'nl-NL': { translation: nlNL.translation },
    },
    lng: 'en-GB',
    fallbackLng: 'en-GB',
    interpolation: { escapeValue: false },
    react: { useSuspense: true },
    partialBundledLanguages: true,
  });

export default i18n;
