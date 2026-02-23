# AGENTS.md (TSTM Website)

## Scope
- Applies to:
  - `/Users/asimdeyaf/Dropbox/VR Sim Labs LLC/Website/TSTM-Website`
- This repository is the code-managed website workspace for The Simulation(TM).

## Core Working Preference (Asim)
- Default to push-first workflow.
- After meaningful changes, commit and push so review happens on deployed GitHub Pages.
- Local preview is optional and should only be used when:
  - explicitly requested, or
  - deployment verification is blocked.

## Deployment Target
- Source repo:
  - `https://github.com/asimdeyaf/TSTM-Website`
- Live deployment:
  - `https://thesimulationtm.com/`

## Related Systems
- Twine source repo:
  - `https://github.com/asimdeyaf/TSTM-Twine-Narrative`
- Twine story URL:
  - `https://asimdeyaf.github.io/TSTM-Twine-Narrative/Stories/tstm-story-script.html`
- Twine animatic URL:
  - `https://asimdeyaf.github.io/TSTM-Twine-Narrative/Stories/tstm-animatic.html`
- Unity hub documentation index:
  - `/Users/asimdeyaf/Dropbox/VR Sim Labs LLC/_UNITY/_OfficalCollabProjects/TheSimulationTM/Assets/__TSTM__/READMEs/Documentation/README-DocumentationIndex.md`

## Restricted Access Convention
- Restricted entry page:
  - `restricted-access/index.html`
- Restricted portal page:
  - `restricted-access/portal/index.html`
- Passcode definition:
  - `assets/js/restricted-access.js`
- Current passcode:
  - `sup`
- Current access gate is client-side convenience only, not strong security.

## Routing And Structure Rules
- Keep directory-based routes (`<route>/index.html`) for stable clean URLs.
- Maintain key top-level routes unless explicitly changed:
  - `/about/`, `/contact/`, `/credits/`, `/team/`, `/faqs/`, `/privacy-policy/`, `/support/`, `/mock-app-store/`, `/dev-book/`, `/restricted-access/`

## Asset Rules
- Keep site images under:
  - `assets/images/`
- Avoid large binaries/video in this repo.
- Use external platforms for large video delivery and embed/link from web pages.

## Change Flow
1. Implement requested website change in this repo.
2. Validate deployment-critical routes and restricted portal behavior.
3. Commit with clear message.
4. Push to `main`.
5. Report live URL and exact affected paths.

## When Unclear
- Ask the user for intent before changing IA/navigation or protected-route behavior.
