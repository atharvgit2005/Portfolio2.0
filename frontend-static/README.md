# Static Frontend (HTML/CSS/JS)

This directory contains a fully static version of the portfolio UI with plain HTML, CSS, and JavaScript.

## Structure

- `index.html` – page structure and sections (Navbar, Hero, About, Tech, Projects, Contact, Footer)
- `styles.css` – simple dark/light theme, responsive layout, components
- `script.js` – theme toggle, smooth scrolling, demo contact handler, dynamic footer year

## Run locally

- Option 1: Open directly
  - Double-click `index.html` (or open it in your browser). Works fine without a server.

- Option 2: Serve (recommended for testing)
  - Using `serve`:
    - `npx serve -s .`
  - Using Python:
    - Python 3: `python3 -m http.server 8080`
    - Then open http://localhost:8080

## Customize

- Update text/links in `index.html` (Projects section buttons, contact form, etc.).
- Tweak colors and spacing in `styles.css` (CSS variables at the top).
- Add behavior in `script.js` as needed.

## Deploy

Any static hosting works. Examples:
- GitHub Pages: push this folder to a `gh-pages` branch or configure Pages to serve from `frontend-static/`.
- Netlify: drag-and-drop this folder into the dashboard or set a site to deploy it.
- Vercel: import the repo and set the output directory to `frontend-static/`.
