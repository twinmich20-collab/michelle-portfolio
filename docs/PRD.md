# Product Requirements Document
## Michelle DaSilva — Personal UX Design Portfolio Website

**Version:** 1.1
**Date:** 2026-04-03
**Author:** Michelle DaSilva
**Status:** Implemented

---

## 1. Overview

### 1.1 Project Summary
A personal portfolio website for Michelle DaSilva, a UX Designer, to showcase professional work, attract potential employers and clients, and serve as a central hub for her professional online presence.

### 1.2 Goals
- Present case studies and UX projects in a compelling, easy-to-navigate format
- Communicate Michelle's skills, tools, and design philosophy
- Enable potential employers or clients to get in touch
- Provide a downloadable resume/CV
- Reflect Michelle's personal brand through a polished, professional aesthetic

### 1.3 Non-Goals
- No blog or editorial publishing system
- No e-commerce or payment functionality
- No user accounts or authentication
- No CMS integration (at launch)

---

## 2. Target Audience

| Audience | Goal When Visiting |
|---|---|
| Hiring managers / recruiters | Evaluate UX experience and see portfolio work |
| Potential clients | Assess design quality and process |
| Collaborators / peers | Connect and learn about Michelle's background |
| General professional network | Quick reference to skills and contact info |

---

## 3. Tech Stack Recommendation

Given that Michelle is a designer without a coding background, the recommended stack prioritizes simplicity and long-term maintainability:

| Layer | Technology | Reason |
|---|---|---|
| Markup | HTML5 | Human-readable, no build step required |
| Styling | CSS3 (with CSS variables) | Powerful enough for modern design; easy to customize colors/fonts |
| Interactivity | Vanilla JavaScript | No framework overhead; easy to understand and modify |
| Hosting | GitHub Pages | Free, reliable, deploys directly from a GitHub repository |
| Contact Form | Formspree (free tier) | Handles form submissions without a backend; no server required |
| Fonts | Google Fonts (Inter + Playfair Display) | Free, fast, modern typography pairing for professional portfolios |
| Icons | Lucide Icons or Heroicons (SVG) | Clean, minimal SVG icons; no npm required |

**Recommendation:** This stack requires no terminal commands beyond the initial GitHub Pages setup. Files can be edited directly in a code editor like VS Code, and changes pushed to GitHub will automatically update the live site.

---

## 4. Site Architecture

```
michelledasilva.github.io/
│
├── index.html          ← Single-page layout (all sections)
├── style.css           ← Global styles and dark mode theme
├── script.js           ← Scroll animations, mobile menu, form handling
├── assets/
│   ├── resume.pdf      ← Downloadable CV
│   ├── images/
│   │   ├── hero-photo.jpg
│   │   ├── project-1-cover.jpg
│   │   ├── project-2-cover.jpg
│   │   └── ...
│   └── icons/          ← Any custom SVG icons
└── case-studies/       ← (Optional v2) Individual project pages
    ├── project-1.html
    └── project-2.html
```

**Architecture decision:** Single-page application (SPA) with anchor-based navigation. All primary content lives on `index.html`. Case study detail pages are implemented as separate HTML files in the `case-studies/` directory.

---

## 5. Page Sections & Requirements

### 5.1 Navigation Bar
- **Fixed/sticky** at the top of the page on scroll
- Logo or name ("Michelle DaSilva") on the left
- Navigation links on the right: Work, About, Skills, Resume, Contact
- Theme toggle button (light/dark mode) on the right
- **Mobile:** Hamburger menu that opens a full-screen or slide-in nav
- Smooth scroll to sections on link click
- Active link highlights as user scrolls through sections

### 5.2 Hero / Intro
- **Purpose:** Immediately communicate who Michelle is and what she does
- Large headline: *"Designing for Scale. Leading with Purpose."*
- Short subheadline: *"I turn enterprise complexity into intuitive, high-impact products — leading UX strategy across Finance, Healthcare, and Consumer Goods for organizations serving millions."*
- Two CTAs: **"View My Work"** (scrolls to portfolio) and **"Get In Touch"** (scrolls to contact)
- Stats section: Users Impacted (8.7M+), Pharma Segment Led ($15B), Lift in Patient Engagement (40%)
- Subtle animated floating orbs in the background
- Full viewport height on desktop; compact on mobile

### 5.3 Case Studies / Project Portfolio
- **Section heading:** "Selected Work"
- Grid layout: 2 columns on desktop, 1 column on mobile
- Each project card contains:
  - Icon (SVG)
  - Project title
  - Short description (1–2 sentences)
  - Tags (e.g. UX Research, Prototyping, Figma)
  - "View Case Study" button or link
- Four project cards: Novartis PSS, JPMorgan ASM, Novartis USPharma Design System, JPMorgan SecureAccess
- Hover state on cards: subtle lift/shadow effect
- Clicking a card links to a detail page

### 5.4 About Me
- **Purpose:** Build trust and personality
- Professional photo of Michelle
- 2–3 short paragraphs covering:
  - Background and how she got into UX
  - Design approach / philosophy
  - Personal interests (brief, humanizing)
- Optional: A short list of fun facts or values

### 5.5 Skills & Tools
- **Purpose:** Quickly signal proficiencies to hiring managers
- Organized into categories, e.g.:
  - **Design:** Figma, Adobe XD, Sketch
  - **Research:** User interviews, Usability testing, Affinity mapping
  - **Prototyping:** InVision, Framer, Marvel
  - **Collaboration:** Miro, Notion, Jira, Confluence
- Visual presentation: icon + label tiles or a clean tag/pill layout
- No progress bars (subjective and considered outdated in UX portfolios)

### 5.6 Resume / CV Download
- A dedicated section or a persistent CTA in the navigation
- Brief note: "Download my full resume for a detailed look at my experience"
- Button: **"Download Resume (PDF)"** — links directly to `assets/resume.pdf`
- File opens in a new tab and/or triggers a download

### 5.7 Contact Form
- **Purpose:** Primary inbound channel for opportunities
- Fields:
  - Name (required)
  - Email address (required, validated)
  - Subject (optional)
  - Message (required)
  - Submit button: "Send Message"
- Form submission handled by **Formspree** (no backend required)
- Success state: Inline confirmation message ("Thanks! I'll be in touch soon.")
- Error state: Inline validation messages per field
- Social links below the form: LinkedIn, Dribbble (or Behance), GitHub (optional)

### 5.8 Footer
- Copyright line: © 2026 Michelle DaSilva
- Repeat social links
- Optional: Back-to-top button

---

## 6. Design Requirements

### 6.1 Visual Style
| Attribute | Specification |
|---|---|
| Mode | Dark mode by default |
| Primary background | Near-black (e.g. `#0d0d0d` or `#111111`) |
| Surface / card background | Dark gray (e.g. `#1a1a1a` or `#1e1e1e`) |
| Primary text | Off-white (e.g. `#f0f0f0`) |
| Secondary text | Muted gray (e.g. `#a0a0a0`) |
| Accent color | One highlight color — e.g. soft purple `#9b59b6`, teal `#00bcd4`, or warm amber `#f5a623` — TBD by Michelle |
| Border / divider | Subtle dark border (e.g. `#2a2a2a`) |

### 6.2 Typography
Use a two-font system that communicates executive leadership, editorial confidence, and modern product clarity.

Font pairing:
- Headlines: Playfair Display
- Body, navigation, labels, buttons, captions, and all functional/UI text: Inter

Design intent:
- Playfair Display should convey authority, strategic thinking, and a polished editorial tone
- Inter should convey clarity, professionalism, readability, and modern product/system thinking
- The combined effect should feel premium, restrained, and appropriate for a senior UX/design leadership portfolio

Usage rules:
1. Playfair Display
- Use only for hero headlines, section headlines, and key narrative statements
- Prefer Regular or Medium weight
- Avoid using overly bold weights
- Do not use for body copy, labels, navigation, buttons, or small text
- For large headlines, apply slight negative letter spacing if needed for a refined look

2. Inter
- Use for all body copy and all functional text
- Use Regular (400) for default paragraphs
- Use Medium (500) for buttons, labels, and subtle emphasis
- Use Semi-Bold (600) sparingly for subheaders or key supporting headings
- Prioritize readability and consistent visual rhythm

Recommended type scale:
Desktop:
- H1: 60px–72px, Playfair Display
- H2: 36px–44px, Playfair Display
- H3: 22px–26px, Inter Semi-Bold
- Body Large: 18px–20px, Inter Regular
- Body: 16px–18px, Inter Regular
- Small / Meta: 13px–14px, Inter Regular

Mobile:
- H1: 32px–38px
- H2: 24px–28px
- Body: 15px–16px
- Small: 13px

Line height:
- Headlines in Playfair Display: 1.1 to 1.2
- Body text in Inter: 1.5 to 1.7

Letter spacing:
- Playfair Display headlines may use slight negative tracking for large display sizes
- Inter body text should use default tracking
- If all-caps labels are used in Inter, slight positive tracking is acceptable

Hierarchy principles:
- Headlines should feel editorial, declarative, and calm
- Body text should feel highly legible, professional, and understated
- Create contrast through font family, size, and spacing rather than decorative effects
- Keep the system restrained and consistent

Do:
- Use typography as a primary expression of brand and tone
- Keep usage consistent across all pages
- Emphasize clarity, spacing, and hierarchy
- Let serif headlines create moments of authority and differentiation

Do not:
- Introduce additional font families
- Use Playfair Display for small or functional text
- Overuse bold weights
- Use decorative, trendy, or novelty fonts

Accessibility requirements:
- Maintain sufficient color contrast
- Avoid thin font weights for long-form text
- Keep body text at a readable minimum size
- Preserve readable line lengths where possible

Fallback stacks:
- Inter: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif
- Playfair Display: 'Playfair Display', Georgia, serif

Final typography goal:
- The typography system should communicate “strategic design leadership grounded in real product execution.”
- Playfair Display should act as the voice of perspective.
- Inter should act as the voice of system, clarity, and delivery.

### 6.3 Spacing & Layout
- Max content width: 1100px, centered
- Section padding: 80px top/bottom on desktop, 48px on mobile
- Consistent 8px spacing grid

### 6.4 Motion & Animation
- Subtle scroll-triggered fade-in for sections (CSS + Intersection Observer)
- Floating orbs animation in hero background
- Smooth hover transitions (150–200ms ease)
- No auto-playing animations or distracting motion
- Respect `prefers-reduced-motion` media query

---

## 7. Responsive Design Requirements

| Breakpoint | Width | Behavior |
|---|---|---|
| Mobile | < 640px | Single column, stacked layout, hamburger nav |
| Tablet | 640px – 1024px | 2-column grid where applicable |
| Desktop | > 1024px | Full layout, sticky nav, 2-col project grid |

- All tap targets minimum 44x44px on mobile
- Images use `srcset` or are appropriately sized for mobile
- No horizontal scroll on any viewport

---

## 8. Accessibility Requirements

- WCAG 2.1 AA compliance target
- Sufficient color contrast ratio (minimum 4.5:1 for normal text)
- All images have descriptive `alt` attributes
- Form fields have associated `<label>` elements
- Keyboard navigable (tab order, focus styles visible)
- Semantic HTML: correct use of `<main>`, `<section>`, `<nav>`, `<article>`, `<header>`, `<footer>`

---

## 9. Performance Requirements

- Lighthouse score target: 90+ on Performance, Accessibility, Best Practices, SEO
- Images compressed and served in WebP format where possible
- No unnecessary JavaScript libraries or dependencies
- Page load under 3 seconds on a standard connection

---

## 10. SEO Requirements

- Descriptive `<title>` tag: "Michelle DaSilva | UX Designer"
- Meta description: 150–160 character summary
- Open Graph tags for social sharing previews
- Semantic heading hierarchy (`h1` → `h2` → `h3`)
- `robots.txt` and `sitemap.xml` at launch (auto-generated by GitHub Pages or manually added)

---

## 11. Content Requirements

Michelle is responsible for providing the following content before development begins:

| Content Item | Format | Notes |
|---|---|---|
| Hero headline & subheadline | Text | 1 headline + 1–2 sentences |
| Professional photo | JPG/PNG, min 800×800px | For Hero and About sections |
| About me text | Text | 2–3 short paragraphs |
| Project case studies (min 3) | Text + images | Title, description, tags, cover image |
| Skills & tools list | Text | Grouped by category |
| Resume | PDF | Finalized version |
| Accent color preference | Hex code or description | Chosen from design options |
| Social profile URLs | URLs | LinkedIn, Dribbble/Behance |

---

## 12. Launch Checklist

- [ ] All content provided and proofread
- [ ] Resume PDF uploaded and download link tested
- [ ] Contact form tested end-to-end via Formspree
- [ ] Site tested on Chrome, Firefox, Safari
- [ ] Site tested on iPhone and Android (or device simulators)
- [ ] Lighthouse audit run and scores reviewed
- [ ] GitHub Pages deployed and URL confirmed
- [ ] Open Graph / social preview tested (e.g. via opengraph.xyz)

---

## 13. Future Iterations (Out of Scope for v1)

- Individual case study detail pages with full process documentation
- Light/dark mode toggle
- Custom domain (e.g. michelledasilva.com)
- Blog or writing section
- Password-protected case studies for NDA work
- CMS integration (e.g. Contentful or Sanity) for easier content updates
- Testimonials / recommendations section

---

## 14. Success Metrics

| Metric | Target |
|---|---|
| Page load time | < 3 seconds |
| Lighthouse Performance | 90+ |
| Lighthouse Accessibility | 90+ |
| Mobile usability | No issues in Google Search Console |
| Contact form submissions | Functional from day one |

---

*This document will evolve as design and development decisions are made. All major changes should be versioned and dated.*
