import { googlePlayUrl } from '../config/links';
import { translations, type Language } from '../i18n/translations';
import { initLanguage } from './language';

const track = (eventName: string) => window.umami?.track(eventName);

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

initLanguage(translations, (language) => {
  const status = document.querySelector<HTMLElement>('[data-ios-status]');
  if (status?.textContent?.trim()) {
    status.textContent = translations[language].iosUnavailable;
  }
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
