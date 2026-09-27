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

Last checked 27 September 2026.

**Reading Museum** ([opening times](https://www.readingmuseum.org.uk/your-visit/opening-times), [Bayeux Gallery](https://www.readingmuseum.org.uk/your-visit/what-see/bayeux-gallery), [tours](https://www.readingmuseum.org.uk/whats-on/bayeux-tapestry-tours)):
- Free entry, suggested £5 donation. Two minutes' walk from Reading station.
- Open Tue–Fri 10–4, Sat 10–5. Closed Sun, Mon, bank holidays and Christmas to New Year; open on the Monday of February and October half terms.
- In term time the Bayeux Gallery may close on weekdays 10am–2.15pm for school workshops; quieter after 2.30pm. The museum publishes a closure calendar.
- Guided tours £12, Tue & Thu 2.30pm, Sat 2pm, allow 90 minutes. Almost every date sold out until March 2027.
- Still photography allowed without flash or tripod, for personal use.
- Abbey Ruins: free, dawn to dusk, 5–10 minutes' walk through Forbury Gardens. Henry I founded Reading Abbey in 1121.

**British Museum:** on show 10 Sep 2026 – 11 Jul 2027. Timed tickets only, sold out to 31 Dec 2026 after an online queue of up to nine hours; Jan–Mar 2027 tickets go on sale 21 Oct 2026. Ticket holders have reported queuing over two hours to get in, some were turned away, and the museum apologised. Photography banned up close, allowed from the upper level.

**Independents:** Sweeney & Todd (10 Castle St, nearly 50 years), Shed (8 Merchants Place), Blue Collar (Market Place, Wed & Fri 11.30–2.30), The Sound Machine (24 Harris Arcade), C.U.P. (7 Blagrave St and 53 St Mary's Butts), Lincoln Coffee House (60 Kings Rd). Workhouse Coffee on King Street is reported closed, so it's no longer listed.

## Before going live

- Add an `og:image` (a 1200×630 PNG) so links look good when shared.
