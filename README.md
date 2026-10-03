# Cyprus Step-by-Step

Cyprus Step-by-Step is a free app with practical step-by-step guides for life in Cyprus, including personalised checklists, official source links, progress tracking and reminders.

This repository contains the public website for Cyprus Step-by-Step.

Current live page:

[https://biggemott.github.io/cyprus-step-by-step/download/](https://biggemott.github.io/cyprus-step-by-step/download/)

## Smart download page

The current web experience provides a lightweight platform-aware download page:

- Android visitors are redirected to the published Google Play app.
- iOS and iPadOS visitors are redirected to the App Store app.
- Desktop and other platforms can choose Google Play or the App Store.
- English, Russian and Greek are supported.
- Anonymous traffic and interaction analytics are measured with Umami.

Google Play:

[https://play.google.com/store/apps/details?id=com.cyprussteps.app](https://play.google.com/store/apps/details?id=com.cyprussteps.app)

App Store:

[https://apps.apple.com/app/id6818281986](https://apps.apple.com/app/id6818281986)

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
