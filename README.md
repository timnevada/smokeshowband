# Band Site Starter

This is a simple Next.js App Router starter for a band website that deploys well on Vercel.

Recommended local Node version: `20.x`

## What is included

- A one-page homepage for music, shows, about, and social links
- App Router metadata, `robots.ts`, and `sitemap.ts`
- Styling that feels more like a band poster than a default SaaS template

## Local development

Install dependencies:

```bash
npm install
```

Start the dev server:

```bash
npm run dev
```

## Deploy to Vercel

1. Push this project to GitHub.
2. Import the repo into Vercel.
3. Set `NEXT_PUBLIC_SITE_URL` to your production URL.
4. In Cloudflare DNS, point your domain to Vercel:
   - Apex domain: add the A record Vercel provides
   - `www`: add the CNAME Vercel provides
5. Add the same domain in your Vercel project settings.

## Good next edits

- Replace the remaining placeholder copy in [app/page.tsx](/Users/timothy/Documents/development/Codex/smokeshowband/app/page.tsx)
- Add your real links for streaming and social platforms
- Add press photos, cover art, and embedded music players
