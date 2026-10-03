import { test, expect } from '@playwright/test';

const basePath = '/cyprus-step-by-step/support/';
const privacyUrl = 'https://biggemott.github.io/cyprussteps-privacy/';

test('support page renders English contact, FAQ and links', async ({ browser }) => {
  const context = await browser.newContext({ locale: 'fr-FR' });
  const page = await context.newPage();

  await page.goto(basePath);
  await expect(page.locator('html')).toHaveAttribute('lang', 'en');
  await expect(page.getByRole('heading', { name: 'Cyprus Step-by-Step' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Contact us' })).toBeVisible();
  await expect(page.getByText('Is this an official government app?')).toBeVisible();
  await expect(page.getByText('Independent guide. Not affiliated with the Government of Cyprus or any public authority.')).toBeVisible();
  await expect(page.getByRole('link', { name: 'Download the app' })).toHaveAttribute('href', '/cyprus-step-by-step/download/');

  await context.close();
});

test('English content is readable without JavaScript', async ({ browser }) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();

  await page.goto(basePath);
  await expect(page.getByRole('heading', { name: 'Contact us' })).toBeVisible();
  await expect(page.getByText('Where is my data stored?')).toBeVisible();
  await expect(page.getByRole('link', { name: 'biggemot.software@gmail.com' })).toBeVisible();

  await context.close();
});

test('contact link opens an email to the support address', async ({ page }) => {
  await page.goto(basePath);
  await expect(page.getByRole('link', { name: 'biggemot.software@gmail.com' }))
    .toHaveAttribute('href', 'mailto:biggemot.software@gmail.com');
});

test('privacy policy link points to the published policy', async ({ page }) => {
  await page.goto(basePath);
  await expect(page.getByRole('link', { name: 'Privacy policy' })).toHaveAttribute('href', privacyUrl);
});

test('language switching updates strings and document language', async ({ page }) => {
  await page.goto(basePath);
  await page.getByRole('button', { name: 'RU' }).click();
  await expect(page.locator('html')).toHaveAttribute('lang', 'ru');
  await expect(page.getByRole('heading', { name: 'Связаться с нами' })).toBeVisible();
  await expect(page.getByText('Независимый гид. Не связан с правительством Кипра и государственными органами.')).toBeVisible();
  await expect(page.getByRole('link', { name: 'Политика конфиденциальности' })).toHaveAttribute('href', privacyUrl);

  await page.getByRole('button', { name: 'EL' }).click();
  await expect(page.locator('html')).toHaveAttribute('lang', 'el');
  await expect(page.getByRole('heading', { name: 'Επικοινωνία' })).toBeVisible();
  await expect(page.getByText('Ανεξάρτητος οδηγός. Δεν συνδέεται με την Κυβέρνηση της Κύπρου ή οποιαδήποτε δημόσια αρχή.')).toBeVisible();
});

test('browser language selects the initial language', async ({ browser }) => {
  const context = await browser.newContext({ locale: 'el-GR' });
  const page = await context.newPage();

  await page.goto(basePath);
  await expect(page.locator('html')).toHaveAttribute('lang', 'el');
  await expect(page.getByRole('heading', { name: 'Συχνές ερωτήσεις' })).toBeVisible();

  await context.close();
});
