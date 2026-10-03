import { appStoreUrl, googlePlayUrl } from '../config/links';
import { translations } from '../i18n/translations';
import { initLanguage } from './language';

const track = (eventName: string) => window.umami?.track(eventName);

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

initLanguage(translations);

document.querySelector<HTMLAnchorElement>('[data-google-play]')?.addEventListener('click', () => {
  track('google_play_click');
});

document.querySelector<HTMLAnchorElement>('[data-app-store]')?.addEventListener('click', () => {
  track('app_store_click');
});

if (isIos()) startStoreRedirect(appStoreUrl, 'ios_auto_redirect');
else if (isAndroid()) startStoreRedirect(googlePlayUrl, 'android_auto_redirect');
