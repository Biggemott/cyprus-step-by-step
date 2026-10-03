import type { Language } from '../i18n/translations';

const languageFromBrowser = (): Language => {
  const locales = navigator.languages?.length ? navigator.languages : [navigator.language];
  const locale = locales.find(Boolean)?.toLowerCase() ?? '';
  if (locale.startsWith('ru')) return 'ru';
  if (locale.startsWith('el')) return 'el';
  return 'en';
};

// Fills every [data-i18n] element from the page's strings and wires the EN/RU/EL switcher.
// The page renders English in its HTML, so it stays readable without JavaScript.
export const initLanguage = <Strings extends Record<string, string>>(
  translations: Record<Language, Strings>,
  onChange?: (language: Language) => void,
) => {
  const setLanguage = (language: Language) => {
    document.documentElement.lang = language;
    document.querySelectorAll<HTMLElement>('[data-i18n]').forEach((element) => {
      const key = element.dataset.i18n as keyof Strings;
      element.textContent = translations[language][key];
    });
    document.querySelectorAll<HTMLButtonElement>('[data-language]').forEach((button) => {
      button.setAttribute('aria-pressed', String(button.dataset.language === language));
    });
    onChange?.(language);
  };

  setLanguage(languageFromBrowser());

  document.querySelectorAll<HTMLButtonElement>('[data-language]').forEach((button) => {
    button.addEventListener('click', () => setLanguage(button.dataset.language as Language));
  });
};
