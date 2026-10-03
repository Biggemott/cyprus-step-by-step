import { appStoreUrl, googlePlayUrl } from '../config/links';
import { translations, type Language } from '../i18n/translations';

const track = (eventName: string) => window.umami?.track(eventName);

const languageFromBrowser = (): Language => {
  const locales = navigator.languages?.length ? navigator.languages : [navigator.language];
  const locale = locales.find(Boolean)?.toLowerCase() ?? '';
  if (locale.startsWith('ru')) return 'ru';
  if (locale.startsWith('el')) return 'el';
  return 'en';
};

const setLanguage = (language: Language) => {
  document.documentElement.lang = language;
  document.querySelectorAll<HTMLElement>('[data-i18n]').forEach((element) => {
    const key = element.dataset.i18n as keyof (typeof translations)[Language];
    element.textContent = translations[language][key];
  });
  document.querySelectorAll<HTMLButtonElement>('[data-language]').forEach((button) => {
    button.setAttribute('aria-pressed', String(button.dataset.language === language));
  });
};

const isIos = () => {
  const userAgent = navigator.userAgent;
  const platform = (navigator as unknown as { platform?: string }).platform;
  return /iPhone|iPad|iPod/i.test(userAgent) || (platform === 'MacIntel' && navigator.maxTouchPoints > 1);
};

const isAndroid = () => /Android/i.test(navigator.userAgent);

// Waits briefly for Umami so the redirect is counted, but never longer than 200ms.
const startStoreRedirect = (storeUrl: string, eventName: string) => {
  let redirected = false;
  const redirect = () => {
    if (redirected) return;
    redirected = true;
    window.clearInterval(poll);
    window.location.replace(storeUrl);
  };
  const tryTrackAndRedirect = () => {
    if (window.umami) {
      track(eventName);
      redirect();
    }
  };
  const poll = window.setInterval(tryTrackAndRedirect, 25);
  tryTrackAndRedirect();
  window.setTimeout(redirect, 200);
};

const initialLanguage = languageFromBrowser();
setLanguage(initialLanguage);

document.querySelectorAll<HTMLButtonElement>('[data-language]').forEach((button) => {
  button.addEventListener('click', () => setLanguage(button.dataset.language as Language));
});

document.querySelector<HTMLAnchorElement>('[data-google-play]')?.addEventListener('click', () => {
  track('google_play_click');
});

document.querySelector<HTMLAnchorElement>('[data-app-store]')?.addEventListener('click', () => {
  track('app_store_click');
});

if (isIos()) startStoreRedirect(appStoreUrl, 'ios_auto_redirect');
else if (isAndroid()) startStoreRedirect(googlePlayUrl, 'android_auto_redirect');
