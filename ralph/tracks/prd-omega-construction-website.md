# PRD: Omega Construction Website

## Introduction

Build a professional, multi-page static website for **Omega Construction** — a Virginia-based general contractor serving both residential and commercial clients. The site mirrors the page structure and professional tone of michaelandson.com but is fully original in design, copy, and visual identity. It will be deployed on GitHub Pages with zero build tooling: plain HTML files, Tailwind CSS loaded via CDN, and vanilla JavaScript for interactivity. No frameworks, no bundlers, no CI pipelines needed — just push and serve.

The site must make first-time visitors feel welcomed and guided, not overwhelmed. Every page should have a clear next step, and reaching Omega's team (phone or form) should never be more than one click away.

---

## Goals

- Launch a polished, fully-responsive 6-page static website deployable to GitHub Pages with a single `git push`
- Establish Omega Construction's brand identity: trustworthy, capable, approachable — a contractor you'd want to invite onto your property
- Give visitors two equally prominent paths to contact the company: phone call and inquiry form
- Showcase both residential and commercial capabilities through a portfolio/projects section
- Score at least 90 on Lighthouse (Performance, Accessibility, Best Practices) on the home page
- Work correctly on mobile, tablet, and desktop without any JS framework

---

## Tech Stack Decision

**Plain HTML + Tailwind CSS (CDN) + Vanilla JS**

Rationale:
- GitHub Pages serves static files directly — no build step, no Actions workflow needed
- Tailwind via CDN (`<script src="https://cdn.tailwindcss.com">`) covers all styling needs without a local toolchain
- Vanilla JS handles the mobile hamburger menu, smooth scroll, form validation, and any lightbox/gallery
- Each page is a self-contained `.html` file; shared layout (nav, footer) is duplicated across files (acceptable for a 6-page site)
- Total deployment: push to `main` branch, enable GitHub Pages in repo settings → done

**File structure:**
```
omega-construction/
├── index.html          # Home
├── about.html          # About Us
├── services.html       # Services
├── projects.html       # Projects / Portfolio
├── contact.html        # Contact
├── 404.html            # Custom not-found page
├── assets/
│   ├── css/
│   │   └── custom.css  # Small overrides Tailwind can't handle inline
│   ├── js/
│   │   └── main.js     # Nav toggle, smooth scroll, form validation
│   └── images/
│       └── placeholder/ # All placeholder images organized by page
└── README.md
```

---

## Design System

### Brand Colors
| Name | Hex | Usage |
|---|---|---|
| Omega Navy | `#1A2E4A` | Primary text, nav background, headings |
| Omega Amber | `#C8963E` | Accent, CTAs, highlights, hover states |
| Omega Cream | `#F7F4EF` | Section backgrounds (alternating) |
| White | `#FFFFFF` | Card backgrounds, nav on scroll |
| Slate | `#64748B` | Body copy, secondary text |
| Light Gray | `#E2E8F0` | Borders, dividers |

### Typography
- **Headings:** `font-family: 'Playfair Display', serif` — loaded via Google Fonts. Conveys craftsmanship and authority.
- **Body:** `font-family: 'Inter', sans-serif` — clean, readable, modern.
- **Scale:** Tailwind defaults (text-sm through text-6xl) with custom heading sizes via config block in CDN script.

### Spacing & Layout
- Max content width: `max-w-7xl mx-auto px-6`
- Section vertical padding: `py-20` (desktop), `py-12` (mobile)
- Consistent 8px grid via Tailwind spacing utilities

### Components (reused across pages)
- **Nav:** Fixed top, navy background, Amber logo accent, hamburger on mobile, CTA button "Get a Quote" always visible
- **Section Header:** Centered, small amber overline label + large navy heading + slate subtext
- **Card:** White background, subtle shadow, rounded-lg, hover lift (`hover:shadow-xl hover:-translate-y-1 transition`)
- **CTA Banner:** Full-width navy section with amber headline and two buttons (Call Now + Contact Form)
- **Footer:** Navy background, 3-column layout: logo+tagline / quick links / contact details

---

## Pages

### Page 1 — Home (`index.html`)

**Purpose:** Make a strong first impression, orient the visitor, and funnel them toward either the portfolio or contact.

**Sections (top to bottom):**

1. **Hero**
   - Full-viewport-height background (placeholder: dark construction site image with navy overlay at 60% opacity)
   - Headline: *"Built to Last. Built for You."*
   - Sub-headline: *"Omega Construction delivers residential and commercial projects across Virginia — on time, on budget, and built right."*
   - Two CTA buttons: `View Our Work` (links to projects.html) and `Get a Free Quote` (links to contact.html)
   - Subtle scroll-down indicator (animated chevron)

2. **Trust Bar**
   - Horizontal strip, cream background
   - 4 stat boxes: `25+ Years Experience` / `300+ Projects Completed` / `Residential & Commercial` / `Licensed & Insured`
   - Each stat: large amber number, small slate label

3. **Services Overview**
   - Section header: overline "What We Do", heading "End-to-End Construction Services"
   - 3-column card grid (stacks to 1 col on mobile)
   - Cards: New Construction / Renovation & Remodeling / Commercial Build-Out
   - Each card: icon (SVG), title, 2-sentence description, amber "Learn More →" link to services.html

4. **Featured Projects**
   - Section header: overline "Our Work", heading "Projects We're Proud Of"
   - 3 project cards with placeholder images, project name, type tag (Residential/Commercial), and "View Project" link
   - Amber "See All Projects →" link below grid

5. **Why Choose Omega**
   - Two-column layout: left = large placeholder image of crew/site; right = text content
   - Heading: *"Your Project. Our Commitment."*
   - 4 bullet points with checkmark icons: Transparent Pricing / Dedicated Project Manager / Clean Jobsites / Warranty on Workmanship
   - CTA button: "About Our Team"

6. **Testimonials**
   - Cream background section
   - 3 testimonial cards: quote text, client name, project type
   - Placeholder names and realistic-sounding quotes

7. **CTA Banner**
   - Navy background, amber headline: *"Ready to Start Your Project?"*
   - Body: *"Contact us today for a free consultation and detailed estimate."*
   - Two buttons: `Call (703) 555-0192` and `Send Us a Message`

8. **Footer**

---

### Page 2 — About (`about.html`)

**Purpose:** Build trust. Show the humans behind Omega, their story, and their values.

**Sections:**

1. **Page Hero** (shorter than home hero — 50vh)
   - Placeholder: team photo or site overhead
   - Heading: *"Who We Are"*
   - Breadcrumb: Home > About

2. **Company Story**
   - Two-column: left = text block; right = placeholder image
   - Heading: *"Built on Integrity, Driven by Craft"*
   - 3 paragraphs: founding story (placeholder: "Omega Construction was founded on a simple belief..."), growth, community commitment
   - Note for implementation: keep tone conversational, first-person plural ("we", "our team")

3. **Core Values**
   - 4-card grid (2×2 on mobile, 4 across on desktop)
   - Values: Integrity / Quality / Communication / Safety
   - Each: icon, value name, 1-sentence explanation

4. **Meet the Team**
   - Section header: "The People Behind Every Project"
   - 3-person grid: placeholder portrait images, name, title, 2-sentence bio
   - Roles: Founder & Principal / Project Manager / Site Superintendent

5. **Certifications & Affiliations**
   - Horizontal strip: logos row (placeholder gray boxes for: Virginia Class A Contractor License / OSHA 30 Certified / NAHB Member / BBB Accredited)

6. **CTA Banner** (same component as home)

7. **Footer**

---

### Page 3 — Services (`services.html`)

**Purpose:** Detail what Omega offers so visitors can self-identify their need and feel confident Omega can handle it.

**Sections:**

1. **Page Hero** (50vh)
   - Heading: *"What We Build"*
   - Sub: *"From custom homes to commercial fit-outs, Omega Construction handles every phase of your project."*

2. **Services Detail**
   - Full-width alternating layout (image left / text right, then flip) — one block per service
   - **Service 1: Custom Home Construction**
     - Placeholder image: framed house structure
     - Heading, 2-paragraph description, bullet list of 4 specifics (site prep, framing, MEP coordination, finish work)
   - **Service 2: Renovation & Remodeling**
     - Placeholder image: before/after kitchen
     - Heading, description, bullet list (kitchen, bath, basement, additions)
   - **Service 3: Commercial Construction**
     - Placeholder image: commercial interior
     - Heading, description, bullet list (office fit-outs, retail spaces, warehouse/industrial, tenant improvements)
   - **Service 4: Project Management & Consulting**
     - Placeholder image: blueprints/planning
     - Heading, description (for owners who have their own GC but need oversight/consulting)

3. **Process Section**
   - Heading: *"How We Work"*
   - 5-step horizontal timeline (wraps to vertical on mobile)
   - Steps: Discovery Call → Site Assessment → Detailed Estimate → Build Phase → Final Walkthrough
   - Each step: number circle (amber), step name, 1-sentence description

4. **FAQ Accordion**
   - Heading: *"Common Questions"*
   - 6 Q&As covering: licensing, service area, timeline estimates, payment terms, subcontractors, permits
   - Vanilla JS accordion — one open at a time

5. **CTA Banner**

6. **Footer**

---

### Page 4 — Projects (`projects.html`)

**Purpose:** Prove capability through a visual portfolio. Let the work speak.

**Sections:**

1. **Page Hero** (50vh)
   - Heading: *"Our Work"*
   - Sub: *"Every project is a partnership. Here's what we've built together."*

2. **Filter Bar**
   - Three toggle buttons: `All` / `Residential` / `Commercial`
   - Vanilla JS filters the grid by data attribute (no page reload)
   - Amber underline on active filter

3. **Project Grid**
   - Masonry-style or uniform 3-column grid of 9 project cards
   - Each card:
     - Placeholder image (landscape aspect ratio)
     - Project name (e.g., "Fairfax Custom Home", "Arlington Office Suite")
     - Type tag (Residential / Commercial)
     - Hover overlay with brief description and "View Details" (opens lightbox)
   - Mix: 5 residential, 4 commercial
   - Lightbox (vanilla JS): larger image, project name, location, scope, completion year

4. **CTA Banner**

5. **Footer**

---

### Page 5 — Contact (`contact.html`)

**Purpose:** Make it as easy as possible to reach Omega. Remove all friction.

**Sections:**

1. **Page Hero** (40vh)
   - Heading: *"Let's Talk About Your Project"*
   - Sub: *"No pressure, no jargon — just a straightforward conversation about what you need."*

2. **Contact Split Layout**
   - Left column (40%): Contact info block
     - Phone: `(703) 555-0192` (large, clickable `tel:` link)
     - Email: `info@omegaconstruction.com` (clickable `mailto:` link)
     - Office Hours: Mon–Fri 7am–5pm
     - Service Area: Northern Virginia & surrounding areas
     - Small placeholder map image (static, links to Google Maps)
   - Right column (60%): Inquiry Form
     - Fields: Full Name*, Email*, Phone, Project Type (dropdown: Residential / Commercial / Not Sure), Project Description (textarea), Preferred Contact Method (radio: Phone / Email)
     - Submit button: amber, full-width on mobile, "Send My Inquiry"
     - Form validation: vanilla JS, inline error messages
     - On submit: hide form, show success message ("Thank you! We'll be in touch within 1 business day.")
     - Note: GitHub Pages is static — form submission uses Formspree (free tier) via `action="https://formspree.io/f/YOUR_ID"` and `method="POST"`

3. **Footer**

---

### Page 6 — 404 (`404.html`)

**Purpose:** Keep lost visitors on the site rather than abandoning.

**Content:**
- Nav + Footer (same as all pages)
- Centered content: large amber "404", heading "Page Not Found", friendly copy, two buttons: "Go Home" and "Contact Us"

---

## User Stories

### US-001: Project Setup & GitHub Pages Configuration

**Description:** As a developer, I need the repository wired up for GitHub Pages so any push to `main` immediately updates the live site.

**Acceptance Criteria:**
- [ ] `index.html` exists at repository root
- [ ] `404.html` exists at repository root (GitHub Pages uses this automatically)
- [ ] All internal links use relative paths (no absolute paths that break on subdomain)
- [ ] README.md documents how to deploy and how to update Formspree form ID
- [ ] Verified: pushing to `main` and enabling Pages in repo settings serves the site correctly

---

### US-002: Design System & Shared Assets

**Description:** As a developer, I need the brand colors, fonts, and Tailwind config defined once so every page looks consistent.

**Acceptance Criteria:**
- [ ] Google Fonts (`Playfair Display`, `Inter`) loaded via `<link>` in every HTML `<head>`
- [ ] Tailwind CDN script included with inline `tailwind.config` block defining brand colors and font families
- [ ] `assets/css/custom.css` created with any overrides (e.g., hero overlay, smooth scroll, transition defaults)
- [ ] `assets/js/main.js` created with shared JS (nav toggle, smooth scroll)
- [ ] Placeholder images organized in `assets/images/placeholder/` with descriptive filenames

---

### US-003: Navigation Component

**Description:** As a visitor, I want a clear, always-visible navigation so I can find any page from anywhere on the site.

**Acceptance Criteria:**
- [ ] Fixed top nav on all 6 pages with: Logo (text-based "Ω OMEGA CONSTRUCTION" with amber omega symbol), nav links (Home / About / Services / Projects / Contact), and "Get a Quote" amber CTA button
- [ ] Active page link is highlighted (amber underline or color)
- [ ] On mobile (<768px): nav links collapse into hamburger menu; clicking hamburger toggles a dropdown
- [ ] Hamburger menu closes when a link is clicked
- [ ] Nav background transitions from transparent (on hero pages) to solid navy on scroll
- [ ] Verify in browser using dev-browser skill

---

### US-004: Footer Component

**Description:** As a visitor, I want a footer with quick links and contact info so I can navigate or reach out without scrolling back to the top.

**Acceptance Criteria:**
- [ ] Footer on all 6 pages with: Logo + tagline / Quick Links (all 5 pages) / Contact info (phone, email, hours)
- [ ] Copyright line: "© 2025 Omega Construction LLC. All rights reserved."
- [ ] All footer links work correctly
- [ ] Responsive: 3 columns on desktop, stacked on mobile
- [ ] Verify in browser using dev-browser skill

---

### US-005: Home Page

**Description:** As a first-time visitor, I want to immediately understand what Omega does, feel confident in their work, and know how to take the next step.

**Acceptance Criteria:**
- [ ] All 7 content sections render correctly (Hero, Trust Bar, Services, Featured Projects, Why Choose Omega, Testimonials, CTA Banner)
- [ ] Hero CTA buttons link to correct pages
- [ ] Trust bar stats are visible and legible on mobile
- [ ] Services cards link to `services.html`
- [ ] Project cards link to `projects.html`
- [ ] Testimonials section has 3 placeholder quotes
- [ ] CTA Banner phone button uses `tel:` link; form button links to `contact.html`
- [ ] Page is fully responsive (no horizontal scroll at 375px width)
- [ ] Verify in browser using dev-browser skill

---

### US-006: About Page

**Description:** As a potential client, I want to learn about Omega's history, values, and team so I can decide if I trust them with my project.

**Acceptance Criteria:**
- [ ] All 5 sections render (Story, Values, Team, Certifications, CTA)
- [ ] Two-column layouts collapse to single column on mobile
- [ ] Team section has 3 placeholder cards with consistent styling
- [ ] Certifications strip shows 4 placeholder affiliation blocks
- [ ] Verify in browser using dev-browser skill

---

### US-007: Services Page

**Description:** As a visitor, I want to understand exactly what Omega builds so I can confirm they handle my type of project.

**Acceptance Criteria:**
- [ ] 4 service blocks render with alternating image/text layout
- [ ] Alternating layout collapses to stacked (image on top) on mobile
- [ ] Process timeline shows 5 steps with amber numbered circles
- [ ] Timeline displays horizontally on desktop, vertically on mobile
- [ ] FAQ accordion: clicking a question expands its answer; opening one closes the previously open one
- [ ] FAQ has 6 question/answer pairs
- [ ] Verify in browser using dev-browser skill

---

### US-008: Projects Page

**Description:** As a potential client, I want to browse Omega's past work filtered by project type so I can see relevant examples before reaching out.

**Acceptance Criteria:**
- [ ] 9 project cards render in a 3-column grid (2-col tablet, 1-col mobile)
- [ ] Filter buttons (All / Residential / Commercial) correctly show/hide cards by `data-type` attribute
- [ ] Active filter button has amber styling; inactive buttons are outlined
- [ ] Clicking "View Details" on a card opens a lightbox overlay with larger image and project details
- [ ] Lightbox closes when clicking outside it or pressing Escape
- [ ] No layout breaks when filtering to fewer cards
- [ ] Verify in browser using dev-browser skill

---

### US-009: Contact Page

**Description:** As a ready-to-hire visitor, I want to easily reach Omega by phone or form so I can start my project inquiry without friction.

**Acceptance Criteria:**
- [ ] Phone number renders as a `tel:` link and is tappable on mobile
- [ ] Email renders as a `mailto:` link
- [ ] Form has all required fields: Name, Email, Phone, Project Type, Description, Preferred Contact
- [ ] Submitting empty required fields shows inline validation error messages
- [ ] Form `action` points to Formspree endpoint (placeholder ID documented in README)
- [ ] On successful submit, form is replaced with a thank-you message
- [ ] Contact info and form display side-by-side on desktop, stacked on mobile
- [ ] Verify in browser using dev-browser skill

---

### US-010: 404 Page

**Description:** As a lost visitor, I want a helpful error page so I'm not stranded and can easily return to the site.

**Acceptance Criteria:**
- [ ] Page renders with nav and footer
- [ ] Large "404" in amber, clear heading, friendly message
- [ ] "Go Home" button links to `index.html`
- [ ] "Contact Us" button links to `contact.html`
- [ ] Verify in browser using dev-browser skill

---

## Functional Requirements

- **FR-1:** Every HTML page must include the same `<head>` block: charset, viewport meta, title (page-specific), Google Fonts link, Tailwind CDN script with config, custom.css link
- **FR-2:** Navigation must be present and functional on all 6 pages, with the current page indicated
- **FR-3:** Footer must be present on all 6 pages
- **FR-4:** All internal links must use relative paths (e.g., `./projects.html`, not `/projects.html`) to work on GitHub Pages subdirectory deployments
- **FR-5:** All images must have descriptive `alt` attributes for accessibility
- **FR-6:** Color contrast must meet WCAG AA (4.5:1 for body text, 3:1 for large text)
- **FR-7:** The mobile hamburger menu must be implemented in `main.js` using event listeners — no CSS-only hack
- **FR-8:** The FAQ accordion must allow only one item open at a time
- **FR-9:** The project filter must operate by toggling CSS `hidden` class on cards based on `data-type` attribute — no page reload
- **FR-10:** The contact form must use Formspree as the POST target; the Formspree endpoint ID must be documented in README as a required setup step
- **FR-11:** Form validation must run client-side (JS) before allowing submission; required fields are Name, Email, Project Description
- **FR-12:** The site must not use any `localhost`-only resources; all CDN links must use HTTPS
- **FR-13:** Placeholder images should use a consistent size convention: `1200×800` for landscape project/service images, `600×600` for portrait team photos, `1920×1080` for hero backgrounds — use `https://placehold.co/WxH/1A2E4A/F7F4EF?text=Label` to generate colored placeholders matching the brand palette

---

## Non-Goals

- No CMS or admin panel — content is updated by editing HTML files directly
- No blog or news section
- No e-commerce or payment processing
- No user accounts or login
- No animations beyond CSS transitions and hover effects (no GSAP, no scroll-triggered animations)
- No third-party analytics in initial build (easy to add a `<script>` tag later)
- No automated CI/CD pipeline — deployment is manual push to `main`
- No server-side code — Formspree handles form submissions entirely

---

## Technical Considerations

- **GitHub Pages URL format:** If deployed at `https://username.github.io/omega-construction/`, all relative paths (`./about.html`) will resolve correctly. Absolute paths (`/about.html`) will NOT — enforce relative paths throughout.
- **Tailwind CDN mode limitations:** The CDN version does not support PurgeCSS or custom plugins. Keep custom styles in `custom.css` and use Tailwind utilities for everything else. The CDN bundle is ~300KB — acceptable for this site's scale.
- **Formspree setup:** The form submits to `https://formspree.io/f/{FORM_ID}`. The developer must create a free Formspree account, create a form, and replace `YOUR_FORM_ID` in `contact.html`. Document this in README.
- **Placeholder images:** Use `https://placehold.co/` with brand colors baked in so the site looks intentional even before real photos are added.
- **Smooth scroll:** Add `scroll-behavior: smooth` to `html` in `custom.css` — covers all anchor links with zero JS.
- **Font loading:** Use `display=swap` parameter on Google Fonts URL to prevent FOIT.

---

## Success Metrics

- All 6 pages load without console errors in Chrome DevTools
- Lighthouse scores ≥ 90 on Performance, Accessibility, Best Practices on `index.html`
- No horizontal scrollbar on any page at 375px viewport width
- A non-technical person can update text content by editing HTML without breaking layout
- Site is live on GitHub Pages within 5 minutes of enabling the Pages setting
- Contact form successfully delivers test submission to configured email via Formspree

---

## Open Questions

- **OQ-1:** Does Omega Construction have a real phone number, email address, or physical office address to replace the placeholders before launch?
- **OQ-2:** Will real project photography be provided, or should the site launch with styled placeholder images and swap in photos later?
- **OQ-3:** Should the Formspree form ID be set up before implementation begins, or should implementation use a clearly-marked placeholder and swap it in at the end?
- **OQ-4:** Is "Omega Construction LLC" the correct legal name for the footer copyright line?
- **OQ-5:** Should the site include a Privacy Policy page (relevant once Formspree collects email addresses)?
