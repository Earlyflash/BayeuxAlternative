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

Checked in September 2026.

**Reading Museum:** free entry (suggested £5 donation), open Tue–Fri 10–4 and Sat 10–5, closed Sun/Mon/bank holidays. Guided tours £12 (Tue & Thu 2.30pm, Sat 2pm). The gallery may close on weekdays 10am–2.15pm for school workshops during the Year of the Normans. The copy hangs as 25 panels with captions along the length.

**British Museum:** on show 10 Sep 2026 – 11 Jul 2027. Timed tickets only, no walk-ins; sold out to 31 Dec 2026 after an online queue of up to nine hours. Jan–Mar 2027 tickets go on sale 21 Oct 2026. Timed groups walk a one-way route in about 40 minutes, with projected animations. Photography banned up close since the first week, but allowed from the upper level.

**Not yet confirmed:** that photography is allowed in Reading's Bayeux Gallery.

## Before going live

- Add an `og:image` (a 1200×630 PNG) so links look good when shared.
