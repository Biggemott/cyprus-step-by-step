# Cyprus Step-by-Step

The public website for Cyprus Step-by-Step. The first milestone implements only the compact smart-download page at `/download/`.

- Production base: `/cyprus-step-by-step/`
- Live Pages URL: `https://biggemott.github.io/cyprus-step-by-step/download/`

## Local development

```sh
npm ci
npm run dev
npm run check
npm run build
npm run test
```

Analytics is intentionally disabled locally by default. Copy `.env.example` to `.env` and set `PUBLIC_UMAMI_WEBSITE_ID` only when you explicitly want local analytics enabled. Do not commit `.env`.

Example VK Cyprus link:

`https://biggemott.github.io/cyprus-step-by-step/download/?utm_source=vkcyprus&utm_medium=referral&utm_campaign=social_insurance`

## GitHub Pages setup

1. In **Settings → Pages**, set the source to **GitHub Actions**.
2. In **Settings → Secrets and variables → Actions**, add repository variable `PUBLIC_UMAMI_WEBSITE_ID` with value `68efbc27-cb06-48ba-9fe8-2a75804405f3`.

The Website ID is public configuration, not a secret. The GitHub Actions workflow supplies it to production builds.

`_workspace/` is intentionally local-only and fully ignored, including source assets and task materials. The root product landing and future SEO pages are out of scope for this milestone.
