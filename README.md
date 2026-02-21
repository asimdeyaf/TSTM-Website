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
- `about/`, `contact/`, `faqs/`, `privacy-policy/`, `support/`: key pages
- `restricted-access/`: passcode entry page
- `restricted-access/portal/`: gated links page
- `assets/images/`: locally hosted image assets
- `assets/css/site.css`: shared styling
- `assets/js/restricted-access.js`: gate logic
- `assets/js/portal-guard.js`: gated-page guard logic

## Passcode

Current passcode value is set in:

- `assets/js/restricted-access.js`

Update `PASSCODE` there when needed.

Note: this is client-side access gating for convenience, not strong security.
