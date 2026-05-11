# portfolio-site

React + Vite portfolio intended to live at **https://portfolio.cloutyskies.org**, deployed as **Cloudflare Workers static assets** (SPA mode).

## Develop

```bash
npm install
npm run dev
```

## Build & deploy

```bash
npm run build
npx wrangler deploy
```

Or use `npm run deploy` to build and deploy in one step.

## Custom domain (Cloudflare DNS)

1. In the Cloudflare dashboard, open your **Workers & Pages** service that maps to this repo (this project’s Worker name in `wrangler.jsonc` is `portfolio-site`; rename it to match your existing Worker if needed).
2. Add a **Custom Domain** for `portfolio.cloutyskies.org`. Cloudflare will wire **DNS** and **TLS** for you when the zone is already on Cloudflare.
3. Optional: create or verify a **DNS** record for `portfolio` (often a CNAME to the Worker hostname) if the dashboard prompts you.

After deploy, `not_found_handling: single-page-application` ensures client-side routes fall back to `index.html`.

## Stack

- React 19, TypeScript, Vite
- CSS Modules for layout (easy to layer in Framer Motion, R3F, etc. later)
- Wrangler 4.x + Workers static assets

## Content

Copy and structure follow **Lonnie Johnston / Clouty Skies** portfolio references. Hero, collages, and social blocks use **Unsplash placeholders**; replace `src/App.tsx` image URLs with assets in `/public` or your CDN. Update the **YouTube portfolio** link in the Social section when you have the channel URL.
