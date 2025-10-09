Got it—here’s a **simple, no-frills README.md** you can paste in your repo:

---

# Portfolio (Netflix-style)

**Live:** [https://jayu2236j.github.io/Portfolio-NetFlix/](https://jayu2236j.github.io/Portfolio-NetFlix/)

A small static site to show projects and experience. Click a card to open a detail page.

## Files

```
index.html        # Home
styles.css        # Styles
script.js         # Small JS (year + row scroll)
nav.js            # Click a card → open detail page
data.js           # Edit this to change content
project.html      # Project detail template
project.js        # Renders project by ?id=
job.html          # Job detail template
job.js            # Renders job by ?id=
assets/
  logos/          # Company/project logos
  screenshots/    # Project screenshots
```

## Edit Content

* Open **`data.js`**

  * Projects: `DETAILS.project.<id>` → title, image, tags, languages, skills, description, links
  * Jobs: `DETAILS.job.<id>` → title, logo, tags, description
* Put images in `assets/logos/` and `assets/screenshots/`.

## Run Locally

* Open `index.html` in a browser, or use VS Code **Live Server**.

## Deploy (GitHub Pages)

1. Repo → **Settings → Pages** → **Deploy from a branch** → `main` / **/** (root).
2. Visit: `https://jayu2236j.github.io/Portfolio-NetFlix/`

### If it doesn’t load

* URL is **case-sensitive**.
* `index.html` must be in the repo root.
* If Actions is stuck, set **Settings → Actions → Workflow permissions → Read and write**, re-run.

## Links

* Portfolio: [https://jayu2236j.github.io/Portfolio-NetFlix/](https://jayu2236j.github.io/Portfolio-NetFlix/)
* GitHub: [https://github.com/jayu2236j](https://github.com/jayu2236j)

---
