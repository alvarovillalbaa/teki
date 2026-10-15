# Verification and publication

Current hosting and migration evidence: [Vercel deployment](deployment.md). The Pages checks below describe the initial launch.

Verified on 15 October 2026. The owner explicitly approved browser checks and GitHub Pages publication in this conversation.

## Published result

- Website: [alvarovillalbaa.github.io/teki](https://alvarovillalbaa.github.io/teki/).
- Source: [alvarovillalbaa/teki](https://github.com/alvarovillalbaa/teki), public repository, main branch.
- Community: [GitHub Discussions](https://github.com/alvarovillalbaa/teki/discussions), with verified [welcome](https://github.com/alvarovillalbaa/teki/discussions/1), [meetup planning](https://github.com/alvarovillalbaa/teki/discussions/2) and [project sharing](https://github.com/alvarovillalbaa/teki/discussions/3) topics.
- Hosting: GitHub Pages, branch deployment from main and /, HTTPS enforced. The repository homepage points to the actual site.
- Initial [deployment](https://github.com/alvarovillalbaa/teki/actions/runs/38748639768) and first responsive-fix [deployment](https://github.com/alvarovillalbaa/teki/actions/runs/38749575579) completed successfully.
- Final implementation commit: `58547c5afbad50e50302b1c3eb71d80f8f85d40e`. Its [deployment](https://github.com/alvarovillalbaa/teki/actions/runs/38750868457) completed successfully; the final 320px view loaded `styles.css?v=3` and passed visual and DOM geometry checks.

## Static and asset checks

- `npm run check`: passed after the runtime changes. Checks JavaScript syntax, four pages, 42 local references, document metadata, duplicate IDs, assets, anchors and filter hooks. The checker resolves versioned local asset URLs.
- `git diff --check`: passed. The upstream font license retains its original bytes; .gitattributes exempts only that license's original trailing space.
- Authored HTML, CSS, JavaScript and JSON were parsed and formatted with an already installed formatter. No dependencies were installed or added.
- Photographs were inspected and their primary-source credits verified. Font and photo provenance is recorded in [assets.md](assets.md) and on the site's privacy page.
- The original social image was inspected at 1200 × 630 pixels and its live URL returned HTTP 200 with image/jpeg.
- All four final HTML pages, versioned CSS and app.js were downloaded from the actual site and compared byte for byte to local files. All six matched. SHA-256 values were captured in the execution output.

## Browser checks

Used the connected Chrome browser through CUA against the actual HTTPS website. The workspace sandbox prevented a local server from binding to port 4174 (listen EPERM); no permission boundary was bypassed. Browser checks therefore used the published site.

| Area                     | Observed result                                                                                                                                                                                                      |
| ------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Desktop, 1440 × 812      | Hero, navigation and plan layouts rendered; both photos and the self-hosted Bricolage font loaded; no horizontal overflow.                                                                                           |
| Tablet, 768 × 1024       | Desktop navigation and two-column hero fit; document width 753px equals its client width, with a normal 15px scrollbar.                                                                                              |
| Mobile, 390 × 844        | Single-column hero, collapsed menu and dialog fit; document width 375px equals client width.                                                                                                                         |
| Small phone, 320 × 740   | Corrected view verified: header starts at y=0, menu at y=13; the 44px headline is two lines (86.23px height at 43.12px line height). Document and client widths both equal 305px. FAQ wording has the correct space. |
| All plan filters         | Create, connect and move each displayed only the matching card; all restored three cards. Pressed states and live result text updated correctly.                                                                     |
| All three format dialogs | Correct title, description and three expectation items rendered. Date and venue remain visibly unconfirmed.                                                                                                          |
| Dialog controls          | Close button, Escape and a backdrop click dismissed the modal; focus returned to the originating plan link. Tab reached the modal CTA without focusing background page controls.                                     |
| Mobile menu              | Open revealed the links; Escape closed it and returned focus to the toggle. Selecting Los planes navigated to #planes and closed the menu.                                                                           |
| Mobile plan flow         | Filtered to teki run, opened its full mobile dialog, then followed its CTA to the actual planning discussion #2.                                                                                                     |
| Community CTA            | Opened the real Discussions index with all three launch topics visible. No comments or registrations were submitted during QA.                                                                                       |
| FAQs                     | All five native disclosures opened and displayed their answers. Mobile review found and corrected the missing space in the heading.                                                                                  |
| Secondary pages          | Privacy and credits, then community guidelines opened from site links with expected content.                                                                                                                         |
| Custom 404               | An intentional /teki/no-existe request rendered the original 404 page; HTTP status was 404, and its home link returned to teki.                                                                                      |
| Browser logs             | No unexpected site-origin JavaScript errors observed during the interaction checks. Existing Chrome-extension warnings were excluded. The intentional missing-page request is an expected HTTP 404.                  |

## Fixes from browser QA

1. At widths up to 360px, hide the secondary header location label and size the hero headline from its measured text width. Madrid remains clear in the content and photo sticker.
2. Preserve a real space in “Antes de decir hola” when the mobile stylesheet hides its line break.
3. Version the stylesheet URL in all four pages. Chrome retained older CSS while receiving updated HTML; the current ?v=3 gives the final styles a distinct cache key. The local reference checker and contributor instructions were updated accordingly.

## Screenshots

- [Desktop](screenshots/desktop.jpg)
- [Tablet](screenshots/tablet.jpg)
- [Mobile](screenshots/mobile.jpg)
- [Small phone, corrected](screenshots/small-phone.jpg)
- [Desktop dialog](screenshots/dialog.jpg)
- [Mobile dialog](screenshots/mobile-dialog.jpg)

## Completion audit

| Requirement                                         | Authoritative evidence                                                                                         | Status                           |
| --------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------- |
| New technology-community website for teki in Madrid | Original identity and source, four pages, actual rendered site and interaction checks above                    | Implemented and browser verified |
| Inspiration from supplied sites and run clubs       | Primary sites inspected and specific decisions recorded in [design.md](design.md)                              | Verified                         |
| GitHub community selected by owner                  | Actual Discussions index and planning topic reached from website CTAs                                          | Published and verified           |
| Upload to owner's GitHub account                    | Runtime commits pushed to public alvarovillalbaa/teki; GitHub source-tree checks and deployed file comparisons | Published and verified           |
| Approved live hosting                               | Pages configuration, successful deployment runs, HTTPS website and real HTTP responses                         | Published and verified           |

## Scope and operational input

Responsive checks use Chrome viewport emulation, not physical devices or Safari/Firefox. No cross-browser or complete WCAG certification is claimed. JavaScript-disabled operation and reduced-motion rules were inspected in source, not independently exercised in a browser.

The first events remain proposals with no date, venue or host confirmed. Photography is licensed reference imagery. Community participation uses GitHub and does not reserve attendance. Those are explicit launch characteristics, not unfinished website functionality. A custom domain was not requested and none was purchased.
