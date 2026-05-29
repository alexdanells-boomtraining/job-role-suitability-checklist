# Job Role Suitability Checklist

## Project purpose
A form/checklist completed by employers on behalf of apprentices at the point of UK apprenticeship enrolment. The employer confirms the level of exposure and frequency/likelihood of exposure to criteria required by the apprenticeship standard, ensuring the role can satisfy the necessary learning outcomes.

## Stack
- **HTML** — single entry point: `index.html`
- **CSS** — all styles in `style.css`
- **JavaScript** — all logic in `app.js`
- **LocalStorage** — persistence (no backend, no database)
- **Hosting** — GitHub Pages (static, no build step)

## File rules
- Everything lives in exactly three files: `index.html`, `style.css`, `app.js`
- Do NOT add any new libraries or CDN scripts without explicit user approval
- Do NOT create additional JS/CSS files
- Do NOT introduce a build tool, bundler, or package manager

## How the app runs
The user opens `index.html` directly in a browser (file:// or GitHub Pages URL). After any change, the user manually refreshes the page to see updates. There is no dev server.

## Git & deployment
- Repo: hosted on GitHub under account `alexdanells-boomtraining`
- Deployed via GitHub Pages from the `main` branch root
- Commit early and often; every meaningful change should be committed and pushed so the live Pages site stays current

## User profile
The user (Alex) has built similar apps before (HTML/CSS/JS/LocalStorage on GitHub Pages) but should be guided as a non-developer — explain steps clearly, flag anything that requires manual action in the browser or GitHub UI, and avoid jargon without explanation.

## Development conventions
- No comments in code unless the WHY is non-obvious
- No docstrings or multi-line comment blocks
- Prefer vanilla JS DOM APIs; no frameworks
- LocalStorage keys should be namespaced: `jrsc_*`
- Form state should auto-save to LocalStorage on change so the employer can return and continue
