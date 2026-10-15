# Verification and publication

Project created on 15 October 2026. This record distinguishes implemented behavior from verified behavior and local work from published state.

## Required outcome

- Complete original website for technology community teki, starting in Madrid.
- Inspiration grounded in mad.builders, Exponential and established running communities.
- Working community destination on GitHub, as selected by the owner.
- Source uploaded to `alvarovillalbaa/teki`.

## Current evidence

- `npm run check`: passed. JavaScript syntax plus four pages, 42 local references, assets, anchors, filter hooks and launch disclosures.
- Prettier parsed and formatted authored HTML, CSS, JavaScript, JSON and Markdown using an already installed local tool. No package dependencies were added.
- `git diff --check`: passed. The upstream font license has one original trailing space; `.gitattributes` exempts only that license so its bytes remain unchanged.
- Photographs were visually inspected and source credits verified. The social-sharing JPG was exported from the original SVG using librsvg and sips, then inspected at 1200 × 630 pixels.
- Public repository created at `https://github.com/alvarovillalbaa/teki` with Discussions enabled, verified through the GitHub API.
- Community launch topics created and verified: [welcome](https://github.com/alvarovillalbaa/teki/discussions/1), [first meetup proposals](https://github.com/alvarovillalbaa/teki/discussions/2), [show and tell](https://github.com/alvarovillalbaa/teki/discussions/3). Event calls to action link directly to the actual planning topic.

Source uploaded to `main` in commit `36623fc928001e668e9dc6cc12cd292fd42ec081`. The GitHub commit API and local `git rev-parse HEAD^{tree}` both report source tree `2f1150fe50181f610d1e152b4ac21b60ef51e228`, proving the uploaded source matches the local implementation. The remote recursive tree is untruncated and contains all 26 original files. Local worktree was clean after the upload.

Browser verification and GitHub Pages activation require explicit permission under the owner's supplied AGENTS.md instructions and have not been performed yet. The permission question is pending; it is not treated as approval. No browser-runtime or live-site claim is made from static checks. A later documentation-only commit records this evidence.

Follow-up audit on 15 October 2026: GitHub `main` and local `HEAD` both resolve to `92c57779bd1893f428bc7e7f90b76f959366fb9c`, with matching source tree `b3f49e2d2d8fc9aaa03b79202eaf8c779e5f2524`. The worktree was clean. GitHub's Pages API returned HTTP 404, confirming that no Pages site is configured. The source review found no additional required edit independent of the pending approval. No server, browser check or deployment was started. This is an authorization wait, not proof of completed verification.

## Completion audit

| Requirement | Evidence | Status |
| --- | --- | --- |
| Original tech-community website for teki in Madrid | Four site pages, original graphics, Spanish content and source files; static checks pass | Implemented; rendered browser behavior awaiting authorized check |
| Referenced inspiration | Inspected primary sites and recorded decisions in `docs/design.md` | Verified research |
| GitHub launch community | Public repository has Discussions enabled; topics 1–3 fetched through GitHub API | Published and verified |
| Upload to owner's GitHub account | Commit and source tree hashes match GitHub `main` | Published and verified |
| Live web hosting | GitHub Pages activation prepared, permission pending | Not deployed |

## Known limits

- The first events are proposals, with no date or venue confirmed. Community participation does not reserve attendance.
- Photography is licensed reference imagery.
- GitHub Discussions requires an account to post; the website stores no registration data.
- No domain has been purchased or configured. No payment, auth, database or email service is needed by the static site.
