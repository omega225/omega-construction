# Omega Construction Website

A professional, fully responsive construction company website built with vanilla HTML, CSS, and JavaScript. Inspired by the layout and structure of michaelandson.com, rebranded for **Omega Construction**.

## Pages

| File | Description |
|------|-------------|
| `index.html` | Homepage — hero, services accordion, Omega Care plan, why us, testimonials, service areas |
| `about.html` | Company story, milestones, leadership team |
| `roofing.html` | Roofing services — replacement, repair, gutters, inspections |
| `remodeling.html` | Remodeling — kitchens, bathrooms, basements, additions |
| `commercial.html` | Commercial construction — offices, retail, warehouse, tenant improvements |
| `restoration.html` | Damage restoration — water, fire, storm, mold |
| `new-construction.html` | New builds — custom homes, foundations, framing, site work |
| `contact.html` | Contact form + service area listing |

## Tech Stack

- **HTML5 / CSS3 / Vanilla JS** — no frameworks or build tools required
- **Google Fonts** — Montserrat (headings) + Inter (body)
- **Font Awesome 6** — icons (CDN)
- Fully responsive (mobile, tablet, desktop)
- Scroll animations via IntersectionObserver
- Animated counters in hero and about sections

## Deploying to GitHub Pages

1. **Create a GitHub repository** (e.g. `omega-construction`)
2. **Push this folder** to the `main` branch:
   ```bash
   git add .
   git commit -m "Initial site"
   git push origin main
   ```
3. Go to your repo on GitHub → **Settings** → **Pages**
4. Under **Source**, select **Deploy from a branch** → `main` → `/ (root)`
5. Click **Save** — your site will be live at:
   `https://<your-username>.github.io/omega-construction/`

## Customization Checklist

- [ ] Replace `(800) 555-0198` with the real phone number (find & replace across all HTML files)
- [ ] Replace `info@omegaconstruction.com` with the real email
- [ ] Update the office address in the footer of each page
- [ ] Replace service area names with real cities/neighborhoods
- [ ] Update license numbers with real credentials
- [ ] Swap `#` social media links with real profile URLs
- [ ] Update pricing to match actual rates

## File Structure

```
omega-construction/
├── index.html
├── about.html
├── roofing.html
├── remodeling.html
├── commercial.html
├── restoration.html
├── new-construction.html
├── contact.html
├── css/
│   └── style.css
└── js/
    └── main.js
```
