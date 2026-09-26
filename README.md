# The Other Tapestry

A small static site promoting the full-size Victorian copy of the Bayeux Tapestry at Reading Museum, for everyone who can't face the queue at the British Museum.

No build step. Everything lives in `public/`.

## Run it locally

```sh
cd public && python3 -m http.server 8000
```

## Deploy to Cloudflare

**Pages (dashboard):** connect this repo, leave the build command empty, set the output directory to `public`.

**Workers static assets (CLI):**

```sh
npx wrangler deploy
```

`wrangler.toml` points at `public/` and serves `404.html` for missing pages. Security and cache headers are in `public/_headers`.

## Facts

Checked against readingmuseum.org.uk in September 2026: free entry (suggested £5 donation), open Tue–Fri 10–4 and Sat 10–5, closed Sun/Mon/bank holidays, guided tours £10 (Tue & Thu 2.30pm, Sat 2pm), and the gallery may close on weekdays 10am–2.15pm for school workshops during the Year of the Normans. Re-check these before big pushes.

## Before going live

- Add Shed's address or a map link in the "Make a day of it" section.
- Add an `og:image` (a 1200×630 PNG) so links look good when shared.
