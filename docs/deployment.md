# Vercel hosting

Configured on 15 October 2026 at the owner's request.

- Production: https://teki-chi.vercel.app/
- Team: Clous Team (Pro), `my-team-4f230354`.
- Project: `teki`, `prj_wx095sIeeOr03emvRy4VmL1ZeDHb`.
- Source: `alvarovillalbaa/teki`, production branch `main`, repository root.
- `vercel.json` runs `npm run build` without installing dependencies and serves `dist/`. The builder copies public pages, CSS, browser JavaScript and assets; repository docs and scripts are excluded.
- No environment variables or custom domain are required. The site uses `/`; 404 assets and recovery links use root paths. GitHub Discussions remains the community destination.

The cutover below supersedes the original GitHub Pages hosting. Earlier Pages/browser results remain historical evidence in [verification.md](verification.md).

## Verified cutover

- **Target / status:** production / READY, Git-triggered deployment from `be5483e4510188a98d3f24b3612eaa876acb1b9f`.
- **Deployment:** [dpl_8WHedFZuLDdUWHhqn6KH1RNDrz27](https://vercel.com/my-team-4f230354/teki/8WHedFZuLDdUWHhqn6KH1RNDrz27); framework Other (static HTML); build duration 2.6s.
- **HTTP:** 18 production URL checks matched expectations, including 5 expected 404s. 13 downloaded public files matched source bytes. See [machine-readable results](deployment-verification.json).
- **GitHub:** `main` push triggered the deployment automatically; the repository homepage now points to Vercel. Pages is disabled (`has_pages: false`), and the former Pages URL returns HTTP 404. No old-URL redirect is configured.
- **Checks:** `npm run check` and `npm run build` passed. `git diff --check` passed.
- **Observability:** the last-hour Vercel runtime-error scan returned no errors. Drains inventory returned HTTP 404, so drains/continuous monitoring are unverified. Static delivery and HTTP checks do not prove browser interactions or physical audio output.

The migration adds no dependencies or required environment variables. Browser interaction QA was not rerun against these Vercel sites; earlier browser evidence remains scoped to its original deployment. The following evidence-only commit may trigger a fresh build; the source commit above identifies the fully checked migration build.
