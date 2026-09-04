# Cyprus Step-by-Step

Cyprus Step-by-Step is a free app with practical step-by-step guides for life in Cyprus, including personalised checklists, official source links, progress tracking and reminders.

This repository contains the public website for Cyprus Step-by-Step.

Current live page:

[https://biggemott.github.io/cyprus-step-by-step/download/](https://biggemott.github.io/cyprus-step-by-step/download/)

## Smart download page

The current web experience provides a lightweight platform-aware download page:

- Android visitors are redirected to the published Google Play app.
- iOS visitors can register interest while the public iOS version is not yet available.
- Desktop and other platforms can choose the available platform options.
- English, Russian and Greek are supported.
- Anonymous traffic and interaction analytics are measured with Umami.

Google Play:

[https://play.google.com/store/apps/details?id=com.cyprussteps.app](https://play.google.com/store/apps/details?id=com.cyprussteps.app)

## Tech stack

- Astro
- TypeScript
- Vanilla CSS
- Playwright
- GitHub Pages / GitHub Actions

## Local development

```sh
npm ci
npm run dev
```

Validation:

```sh
npm run check
npm run build
npm run test
```
