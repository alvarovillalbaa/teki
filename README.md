# teki ✳

**Gente tech. Planes reales.** A new technology community starting in Madrid.

A complete Spanish-language static website with an original identity, responsive layouts, three filterable meetup formats, accessible detail dialogs, FAQs, a real GitHub community destination, community guidelines, privacy and asset credits, a custom 404 page and social sharing metadata.

## Run

Requires Node.js 22+. No installation, dependencies, environment variables or external services are needed to run the site. `npm run build` copies public pages and assets to `dist/` for hosting.

```sh
npm start
```

Open `http://127.0.0.1:4174/teki/`. The server binds to loopback, supports the GitHub Pages `/teki/` prefix and serves an explicit list of public files. Set `PORT` to use another port.

## Check

```sh
npm run check
git diff --check
```

The static checker verifies local files and anchors, asset references, document metadata, duplicate IDs, filter hooks and several launch-state invariants. It does not prove browser behavior or external service availability. See [verification](docs/verification.md) for actual checks and publication status.

## Launch state

The owner supplied the name **teki**, chose **Madrid**, and selected **GitHub as the launch community space**. The three initial formats are proposals. No dates, venues, membership figures, partners, testimonials or attendance confirmations are invented. Photography is licensed reference imagery, not documentation of actual teki members or events.

The community lives at [GitHub Discussions](https://github.com/alvarovillalbaa/teki/discussions). Reading is public; contributing requires a free GitHub account. Website visitors can explore formats and join the conversation. The site does not collect registrations or claim to reserve places.

## Edit

| What                                   | Where                                                       |
| -------------------------------------- | ----------------------------------------------------------- |
| Page content, cards, community links   | `index.html`                                                |
| Colors, type, layouts, breakpoints     | `styles.css`                                                |
| Detail content, filtering, mobile menu | `app.js`                                                    |
| Privacy and image credits              | `privacidad.html`                                           |
| Community agreements                   | `convivencia.html`, `CODE_OF_CONDUCT.md`                    |
| Brand mark and social image            | `assets/mark.svg`, `assets/social.svg`, `assets/social.jpg` |
| Decisions and source references        | `docs/design.md`, `docs/assets.md`                          |

Before publishing a scheduled event, confirm its date, location, host and participation conditions in Discussions, then update the relevant card and dialog together. Never remove the proposed-format notice without an actual confirmed event. Replace reference photography when owned community photographs become available, with permission from the people pictured.

After changing `styles.css`, increment its `?v=` version in all four HTML pages so returning visitors receive the new styles through browser caching.

## Publish

The site is live at **[teki-chi.vercel.app](https://teki-chi.vercel.app/)** on Clous Team (Pro). Vercel is connected to `alvarovillalbaa/teki` and deploys `main` to production. `vercel.json` runs `npm run build` and serves `dist/`; no install step or environment variables are needed. See [deployment evidence](docs/deployment.md).

When changing the domain, update canonical/Open Graph URLs. The 404 page uses root paths; the local server also supports the former project prefix.

Fonts and photography have their own licenses; see [asset provenance](docs/assets.md). No software license has been assigned on the owner's behalf.
