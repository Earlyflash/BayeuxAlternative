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

## Before going live

- Add Shed's address or a map link in the "Make a day of it" section.
- Check the opening days, tour price and tour times against Reading Museum's own site.
- Add an `og:image` (a 1200×630 PNG) so links look good when shared.
