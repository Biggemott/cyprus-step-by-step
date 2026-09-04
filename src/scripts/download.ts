import { googlePlayUrl } from '../config/links';
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

  const status = document.querySelector<HTMLElement>('[data-ios-status]');
  if (status?.textContent?.trim()) {
    status.textContent = translations[language].iosUnavailable;
  }
};

const isIos = () => {
  const userAgent = navigator.userAgent;
  const platform = (navigator as unknown as { platform?: string }).platform;
  return /iPhone|iPad|iPod/i.test(userAgent) || (platform === 'MacIntel' && navigator.maxTouchPoints > 1);
};

const isAndroid = () => /Android/i.test(navigator.userAgent);

const startAndroidRedirect = () => {
  let redirected = false;
  const redirect = () => {
    if (redirected) return;
    redirected = true;
    window.clearInterval(poll);
    window.location.replace(googlePlayUrl);
  };
  const tryTrackAndRedirect = () => {
    if (window.umami) {
      track('android_auto_redirect');
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

document.querySelector<HTMLButtonElement>('[data-ios-interest]')?.addEventListener('click', () => {
  track('ios_interest');
  const status = document.querySelector<HTMLElement>('[data-ios-status]');
  const activeLanguage = document.documentElement.lang as Language;
  if (status) status.textContent = translations[activeLanguage].iosUnavailable;
});

if (isAndroid() && !isIos()) startAndroidRedirect();
