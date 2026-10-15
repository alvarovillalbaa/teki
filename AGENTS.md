# Working on teki

teki is a Spanish-language technology community starting in Madrid. It is a static site with no runtime dependencies, build step, registration backend or environment variables.

- Read `README.md`, `docs/design.md` and `docs/verification.md` before changes.
- `index.html` owns visible page content and format cards; `app.js` owns their detail content, filters and mobile navigation. Update both together when changing a format.
- `styles.css` owns all styles. Fonts and photos are self-hosted in `assets/`; preserve their licenses and provenance in `docs/assets.md` and `privacidad.html`.
- Increment the stylesheet's `?v=` version in all four HTML pages whenever CSS changes; this avoids stale styles in returning browsers on GitHub Pages.
- `npm run check` and `git diff --check` are the static verification commands. `npm start` serves the site at `http://127.0.0.1:4174/teki/` when running a server is authorized.
- Preserve progressive enhancement, keyboard access, focus management and reduced-motion support.
- The first events are proposals. Do not invent confirmed dates, venues, membership figures, testimonials, partners or registrations. A date requires an actual organizer-confirmed announcement in Discussions.
- GitHub Discussions is the real launch community. Never replace it with placeholder handles or a form that does not save anything.
- Keep the `/teki/` GitHub Pages prefix in mind. The 404 page uses absolute paths; all other site assets use relative paths.
- Follow the owner's authorization for browser checks, public publication and deployment. Record actual verification and publication evidence in `docs/verification.md`.
