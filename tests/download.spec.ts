import { test, expect } from '@playwright/test';

const basePath = '/cyprus-step-by-step/download/';
const playUrl = 'https://play.google.com/store/apps/details?id=com.cyprussteps.app';

test('unsupported browser locale falls back to English without redirecting', async ({ browser }) => {
  const context = await browser.newContext({ locale: 'fr-FR' });
  const page = await context.newPage();

  await page.goto(basePath);
  await expect(page).toHaveURL(new RegExp(`${basePath}$`));
  await expect(page.locator('html')).toHaveAttribute('lang', 'en');
  await expect(page.getByRole('link', { name: 'Google Play' })).toBeVisible();

  await context.close();
});

test('Android tracks then redirects to the canonical Google Play URL', async ({ browser }) => {
  const context = await browser.newContext({
    userAgent: 'Mozilla/5.0 (Linux; Android 14; Pixel 8) AppleWebKit/537.36 Chrome/120 Mobile Safari/537.36',
  });
  const events: string[] = [];

  await context.exposeFunction('recordUmamiEvent', (name: string) => events.push(name));
  const page = await context.newPage();
  await page.addInitScript(() => {
    window.umami = {
      track: (name: string) => (window as unknown as {
        recordUmamiEvent: (event: string) => void;
      }).recordUmamiEvent(name),
    };
  });
  await page.route('https://play.google.com/**', async (route) => route.fulfill({ status: 200, body: 'ok' }));

  await page.goto(basePath);
  await expect(page).toHaveURL(playUrl);
  await expect.poll(() => events).toContain('android_auto_redirect');

  await context.close();
});

test('iOS stays on page and records interest', async ({ browser }) => {
  const context = await browser.newContext({
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 Version/17.0 Mobile/15E148 Safari/604.1',
  });
  const events: string[] = [];

  await context.exposeFunction('recordUmamiEvent', (name: string) => events.push(name));
  const page = await context.newPage();
  await page.addInitScript(() => {
    window.umami = {
      track: (name: string) => (window as unknown as {
        recordUmamiEvent: (event: string) => void;
      }).recordUmamiEvent(name),
    };
  });

  await page.goto(basePath);
  await page.getByRole('button', { name: 'iOS version' }).click();
  await expect(page).toHaveURL(new RegExp(`${basePath}$`));
  await expect(page.getByText('The iOS version isn’t available yet. Thanks for your interest — we’ve noted it.')).toBeVisible();
  await expect.poll(() => events).toContain('ios_interest');

  await page.getByRole('button', { name: 'RU' }).click();
  await expect(page.getByText('Версия для iOS пока недоступна. Спасибо за интерес — мы его учли.')).toBeVisible();
  await page.getByRole('button', { name: 'EL' }).click();
  await expect(page.getByText('Η έκδοση για iOS δεν είναι ακόμη διαθέσιμη. Ευχαριστούμε για το ενδιαφέρον σας — το έχουμε καταγράψει.')).toBeVisible();

  await context.close();
});

test('modern iPadOS UA detection does not redirect', async ({ browser }) => {
  const context = await browser.newContext({
    userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15) AppleWebKit/605.1.15 Version/17.0 Safari/605.1.15',
  });
  const page = await context.newPage();
  await page.addInitScript(() => {
    Object.defineProperty(navigator, 'platform', { configurable: true, value: 'MacIntel' });
    Object.defineProperty(navigator, 'maxTouchPoints', { configurable: true, value: 5 });
  });
  await page.goto(basePath);
  await expect(page).toHaveURL(new RegExp(`${basePath}$`));
  await expect(page.getByRole('button', { name: 'iOS version' })).toBeVisible();
  await context.close();
});

test('manual Google Play click tracks and opens the canonical URL', async ({ browser }) => {
  const context = await browser.newContext();
  const events: string[] = [];

  await context.exposeFunction('recordUmamiEvent', (name: string) => events.push(name));
  const page = await context.newPage();
  await page.addInitScript(() => {
    window.umami = {
      track: (name: string) => (window as unknown as {
        recordUmamiEvent: (event: string) => void;
      }).recordUmamiEvent(name),
    };
  });
  await page.route('https://play.google.com/**', async (route) => route.fulfill({ status: 200, body: 'ok' }));

  await page.goto(basePath);
  await Promise.all([
    page.waitForURL(playUrl),
    page.getByRole('link', { name: 'Google Play' }).click(),
  ]);
  expect(events).toEqual(['google_play_click']);

  await context.close();
});

test('language switching updates strings and document language', async ({ page }) => {
  await page.goto(basePath);
  await expect(page.getByRole('link', { name: 'Google Play' })).toBeVisible();
  await page.getByRole('button', { name: 'RU' }).click();
  await expect(page.locator('html')).toHaveAttribute('lang', 'ru');
  await expect(page.getByRole('button', { name: 'Версия для iOS' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Google Play' })).toBeVisible();
  await page.getByRole('button', { name: 'EL' }).click();
  await expect(page.locator('html')).toHaveAttribute('lang', 'el');
  await expect(page.getByRole('button', { name: 'Έκδοση για iOS' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Google Play' })).toBeVisible();
});

test('VK Cyprus UTM URL loads under the deployed base path', async ({ page }) => {
  await page.goto(`${basePath}?utm_source=vkcyprus&utm_medium=referral&utm_campaign=social_insurance`);
  await expect(page).toHaveURL(/utm_campaign=social_insurance/);
  await expect(page.getByRole('heading', { name: 'Cyprus Step-by-Step' })).toBeVisible();
});
