# ccos.systems launch site v1

Institutional launch site for Community Connection Operating Systems LLC.

## Stack

- Next.js 16 / React 19 / TypeScript
- Static export for Cloudflare Pages
- Canonical CCOS Relational Type / Bridge v1.0.1 assets
- No database, backend, analytics, third-party scripts, or remote fonts

## Local development

```bash
npm ci
npm run dev
```

## Build

```bash
npm run typecheck
npm run build
```

Static output is written to `out/`.

## Cloudflare Pages

- Build command: `npm run build`
- Build output directory: `out`
- Node version: 22 or later
- Environment variables: none required
- Production domain: not connected during staging

## Identity controls

Assets under `public/identity/` are deterministic copies from the governed CCOS Corporate Identity v1.0 active production package. Never regenerate, redraw, retype, trace, or approximate the CCOS identity.

## Deployment boundary

Staging deployment is authorized. Connecting `ccos.systems`, changing production DNS, or publicly announcing the site requires separate Founder authorization.

Trademark/confusion review remains an open deployment consideration. Analytics remains pending Founder/product decision.
