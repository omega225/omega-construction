# Omega Construction Website

Professional 6-page static website for Omega Construction — a Virginia-based residential and commercial general contractor. Built with plain HTML, Tailwind CSS (CDN), and vanilla JS.

## Pages

- `index.html` — Home
- `about.html` — About Us
- `services.html` — Services
- `projects.html` — Projects Portfolio
- `contact.html` — Contact
- `404.html` — 404 Error

## Tech Stack

- **HTML5** — semantic markup, no build step
- **Tailwind CSS** — loaded via CDN with an inline config block
- **Vanilla JS** — `assets/js/main.js` handles all interactivity
- **Google Fonts** — Playfair Display & Inter via `<link>`

## Local Development

Open any `.html` file directly in a browser, or use a simple static server:

```bash
npx serve .
# or
python -m http.server 8080
```

## Deploying to GitHub Pages

1. Push the repository to GitHub.
2. Go to **Settings → Pages**.
3. Under **Source**, select the `main` branch and `/ (root)` folder.
4. Click **Save**. GitHub will publish the site at `https://<your-username>.github.io/<repo-name>/`.
5. Wait ~60 seconds, then visit the URL shown in the Pages settings.

> **Custom domain:** Add a `CNAME` file at the repo root containing your domain (e.g. `www.omegaconstruction.com`), then configure your DNS to point to `<your-username>.github.io`.

## Formspree Setup (Contact Form)

The contact form uses [Formspree](https://formspree.io/) for email delivery.

1. Sign up at <https://formspree.io/> and create a new form.
2. Copy your form endpoint ID (looks like `xabcdefg`).
3. Open `contact.html` and replace **`YOUR_FORM_ID`** in the `<form>` action attribute:
   ```html
   <!-- Before -->
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   <!-- After -->
   <form action="https://formspree.io/f/xabcdefg" method="POST">
   ```
4. Test by submitting the form — Formspree will forward submissions to your registered email.

## Assets

```
assets/
  css/
    custom.css        ← smooth scroll, hero overlay, transition defaults
  js/
    main.js           ← nav toggle, scroll nav, accordion, filter, lightbox, form validation
  images/
    placeholder/      ← placeholder images (replace with real photos)
```

## Brand Colors

| Name  | Hex       |
|-------|-----------|
| Navy  | `#1A2E4A` |
| Amber | `#C8963E` |
| Cream | `#F7F4EF` |
| Slate | `#64748B` |
