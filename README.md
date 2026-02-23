# TSTM Website

Code-managed website for The Simulation(TM).

## Local Preview

```bash
cd '/Users/asimdeyaf/Dropbox/VR Sim Labs LLC/Website/TSTM-Website'
python3 -m http.server 8000
```

Open `http://localhost:8000`.

## Current Structure

- `index.html`: Homepage
- `about/`, `contact/`, `credits/`, `team/`, `faqs/`, `privacy-policy/`, `support/`: key pages
- `mock-app-store/`: Apple Vision Pro teaser listing archive page
- `dev-book/`: Dev Book entry page
- `restricted-access/`: passcode entry page
- `restricted-access/portal/`: gated links page
- `404.html`: custom not-found page
- `assets/images/`: locally hosted image assets
- `assets/css/site.css`: shared styling
- `assets/js/site-nav.js`: shared menu behavior
- `assets/js/restricted-access.js`: gate logic
- `assets/js/portal-guard.js`: gated-page guard logic

## Passcode

Current passcode value is set in:

- `assets/js/restricted-access.js`

Update `PASSCODE` there when needed.

Note: this is client-side access gating for convenience, not strong security.
