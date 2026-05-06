# Page Override — Case Study Pages
**Version:** v0.8 · **Last Updated:** 2026-05-05
**Inherits from:** [../MASTER.md](../MASTER.md) · Rules here take precedence over Master.

---

## What Changed in v0.8

The entire color system has been migrated from teal/sage/clay to a **pure blue spectrum**. All deprecated tokens (`--teal-*`, `--sage-*`, `--clay-*`, `--paper-*`, `--ink-*`) have been replaced. See the token mapping table at the end of this document.

---

## Layout Overrides

- Hero padding: `calc(var(--nav-height) + 4rem) 0 4rem` (taller offset for full-nav clearance)
- Body sections: `clamp(3.5rem, 6vw, 5rem)` vertical padding (vs Master's `clamp(4rem, 8vw, 6rem)`) — slightly tighter for denser long-form reading
- Cover strip: `320px` desktop / `200px` mobile — image loads via `<img>` with `mix-blend-mode: luminosity` + `opacity: .45` over gradient bg
- Section dividers: `border-bottom: 1px solid var(--border)`
- Alt sections: `background: var(--surface)` (`--gray-100`)
- Subsection spacing: `.cs-subsection` → `margin-top: 3.5rem; padding-top: 2.75rem; border-top: 1px solid var(--border)`
- Subsection small: `.cs-subsection--sm` → `margin-top: 2.25rem; padding-top: 2rem; border-top: 1px solid var(--border)`

---

## Typography Overrides

| Element | Size | Notes |
|---------|------|-------|
| CS Hero Title | `clamp(2.25rem, 5.5vw, 3.75rem)` | Satoshi 300/700 mix — light-meets-bold move applies |
| CS Section Title | `clamp(1.5rem, 3vw, 2rem)` | Satoshi 300/700 mix, line-height 1.15 |
| CS Body Text | `1rem / 1.75` line-height | Inter 400, max-width 68ch |
| CS Lede | `clamp(1rem, 1.8vw, 1.125rem) / 1.72` | Inter 400 — hero sub-copy |
| CS Outcome Value | Satoshi 300 at `2.5rem` | Color cycles through blue shades — `--blue-700 → --blue-600 → --blue-500` |
| CS Pull Quote | Satoshi 300 italic, `clamp(1.25rem, 2.5vw, 1.625rem)` | `--text`, letter-spacing `-0.025em` |
| Phase card title | Satoshi 700, `.9375rem` | Color `--text`, letter-spacing `-0.02em` |
| Eyebrow / label | Satoshi 700, `.6875rem`, tracking `.18em`, uppercase | Color `--blue-700` light / `--blue-500` dark |

> **CS hero applies the light-meets-bold move.** One word or phrase in the headline goes Satoshi 700 in `--blue-400` (on dark bg); the rest stays 300. Reserved for the hero — section titles use Satoshi 300 with a 700-weight `<strong>` in `--accent`.

---

## Component Overrides

### CS Hero (`.cs-hero`)

Dark slab hero — always `background: var(--hero-bg)` (`#08111c`) regardless of page theme.

```css
.cs-hero {
  background: var(--hero-bg);
  padding-top: calc(var(--nav-height) + 4rem);
  padding-bottom: 4rem;
}
```

**Layout:** Full-width dark, two-column `cs-hero__main` grid: `1fr 280px` — lede on left, stat panel on right.

**Anatomy:**
```
.cs-hero__top         — eyebrow + case index (e.g. "001 / 04")
.cs-hero__eyebrow     — Satoshi 700, .6875rem, --blue-400, tracking .18em, uppercase
.cs-hero__index       — Inter 500, .6875rem, rgba(255,255,255,.3)
.cs-hero__title       — Satoshi 300, clamp(2.25rem,5.5vw,3.75rem), #fff. <strong> = Satoshi 700, --blue-400
.cs-hero__lede        — Inter 400, clamp(1rem,1.8vw,1.125rem), rgba(255,255,255,.6), max-width 54ch
.cs-hero__panel       — rgba(255,255,255,.05) bg, rgba(255,255,255,.1) border, radius var(--radius-lg)
  .cs-hero__panel-label  — Satoshi 700, .6875rem, --blue-400, tracking .18em, uppercase
  .cs-hero__panel-stat   — Satoshi 300, 3.25rem, #fff. <strong> = Satoshi 700, --blue-400
  .cs-hero__panel-caption — Inter 400, .8125rem, rgba(255,255,255,.45)
.cs-hero__meta        — 4-column flex row, border-top: 1px solid rgba(255,255,255,.1)
  .cs-hero__meta-label   — Satoshi 700, .6875rem, rgba(255,255,255,.35), tracking .14em, uppercase
  .cs-hero__meta-value   — Satoshi 600, .9375rem, rgba(255,255,255,.85)
```

**Meta row fields:** Client · Role · Timeline · Status

**Dark mode:** Hero is always dark — no dark mode override needed.

**Mobile:** `cs-hero__main` stacks to single column. `cs-hero__meta` wraps with `gap: 1.5rem`.

> The stat panel is a one-per-page moment. Keep it to one key metric. Its job is to anchor the opening.

---

### CS Back Link (`.cs-back`)

```css
.cs-back {
  display: inline-flex; align-items: center; gap: .5rem;
  font-size: .75rem; font-weight: 600; letter-spacing: .08em; text-transform: uppercase;
  color: rgba(255,255,255,.5); text-decoration: none;
  margin-bottom: 2rem; transition: color 150ms;
}
.cs-back:hover { color: rgba(255,255,255,.9); }
```

Arrow icon: 14×14px, `stroke-width: 2`, `chevron-left` style (`M19 12H5M12 5l-7 7 7 7`).

---

### Cover Strip (`.cs-cover`)

Full-bleed gradient bar below the hero. Provides visual transition from dark hero to light body.

```css
.cs-cover {
  height: 320px; /* mobile: 200px */
  background: linear-gradient(135deg, var(--blue-900) 0%, var(--blue-700) 50%, var(--blue-600) 100%);
  position: relative; overflow: hidden;
}
```

**Grid overlay:** `24-cell` CSS grid inside `.cs-cover-grid`, spans are white at `opacity: .08` — provides subtle texture.

**Image:** `<img class="cs-cover-image">` sits on top with `mix-blend-mode: luminosity; opacity: .45`. When an image loads it creates a washed blueprint effect over the gradient. If no image, the gradient + grid stands alone.

```css
.cs-cover-image { width: 100%; height: 100%; object-fit: cover; object-position: center 20%; mix-blend-mode: luminosity; opacity: .45; }
```

> One cover per case study. Never repeat the gradient in body sections.

---

### Engagement Phase Tracker (`.cs-phase-track`)

The signature pattern for showing a multi-phase engagement. Horizontal row of clickable phase cards, each linking to the corresponding phase section below.

**Layout:** `grid-template-columns: repeat(5, 1fr)` — collapses to `1fr 1fr` at ≤768px, `1fr` at ≤560px.

**Color spectrum — v0.8 blue system (5-phase journey):**

| Phase | Chip color | Token | Logic |
|-------|-----------|-------|-------|
| Phase 01 | `var(--blue-900)` | `#03233D` | Foundation — deepest authority |
| Phase 02 | `var(--blue-800)` | `#052F55` | The work begins |
| Phase 03 | `var(--blue-700)` | `#0D5EA0` | Brand primary — synthesis midpoint |
| Phase 04 | `var(--blue-600)` | `#1A8FE3` | The work crystallizes |
| Phase 05 | `var(--blue-500)` | `#3AABF5` | Delivery — closing energy |

The spectrum tells a story: **deep navy opens with authority → mid-blue carries the work → bright blue closes with delivery energy.**

**CSS classes:** `.cs-phase-card--p1` through `.cs-phase-card--p5` apply the chip background.

**Card anatomy:**
```html
<a class="cs-phase-card cs-phase-card--p1" href="#phase-01">
  <div class="cs-phase-card__chip">01</div>
  <div class="cs-phase-card__body">
    <div class="cs-phase-card__label">Phase</div>
    <div class="cs-phase-card__title">Align</div>
    <div class="cs-phase-card__metric"><strong>25+</strong> stakeholders</div>
  </div>
</a>
```

**Style specs:**
```css
.cs-phase-card {
  background: var(--white);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  display: grid;
  grid-template-columns: 52px 1fr;
  align-items: stretch;
  overflow: hidden;
  text-decoration: none;
  color: inherit;
  box-shadow: var(--shadow-xs);
  transition: transform 300ms var(--ease-out),
              box-shadow 300ms var(--ease-out),
              border-color 300ms;
}
.cs-phase-card:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow-md);
  border-color: var(--gray-300);
}
.cs-phase-card__chip {
  display: flex; align-items: center; justify-content: center;
  font-family: var(--font-display);
  font-size: 1.125rem; font-weight: 700;
  letter-spacing: -0.02em; color: #fff;
}
.cs-phase-card__body {
  padding: 14px 16px;
  display: flex; flex-direction: column; justify-content: center; gap: 5px;
}
.cs-phase-card__label {
  font-family: var(--font-display);
  font-size: .5625rem; font-weight: 700;
  letter-spacing: .18em; text-transform: uppercase;
  color: var(--gray-400);
}
.cs-phase-card__title {
  font-family: var(--font-display);
  font-size: .9375rem; font-weight: 700;
  color: var(--text); letter-spacing: -0.02em; line-height: 1.2;
}
.cs-phase-card__metric {
  font-family: var(--font-body);
  font-size: .6875rem; font-weight: 500; color: var(--text-muted);
}
.cs-phase-card__metric strong { color: var(--blue-700); font-weight: 700; }
```

**Variant — minimal (no metric line):** Remove `.cs-phase-card__metric`. Use when per-phase metrics aren't meaningful. Card height ~78px vs ~104px default.

> Don't include descriptions inside phase cards. The surrounding section lede carries the explanation. Cards are navigation + quantified evidence only.

---

### Phase Banner (`.cs-phase-banner`)

Per-section opener. Appears at the top of each phase section, anchoring the reader before the prose begins.

```css
.cs-phase-banner {
  background: var(--white);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  display: grid; grid-template-columns: 80px 1fr;
  align-items: stretch; overflow: hidden; margin-bottom: 2.5rem;
}
.cs-phase-chip {
  display: flex; align-items: center; justify-content: center;
  font-family: var(--font-display);
  font-size: 1.5rem; font-weight: 700; letter-spacing: -0.02em; color: #fff;
}
```

Modifier classes `.cs-phase-banner--p1` through `--p5` apply chip backgrounds (same blue spectrum as phase tracker).

**Body anatomy:**
```
.cs-phase-body-label    — Satoshi 700, .625rem, --blue-700, tracking .16em, uppercase
.cs-phase-body-title    — Satoshi 700, 1.0625rem, --text, letter-spacing -.02em
.cs-phase-body-question — Inter 400, .875rem, --text-muted, line-height 1.5
```

---

### Contribution Cards (`.cs-contribution`)

Shows what the UX lead specifically owned. `4-column auto grid`, collapses to `2-col` at ≤1024px, `1-col` at ≤768px.

**Left accent — four blue shades:**
```css
.cs-contribution-item:nth-child(1) { border-left: 2px solid var(--blue-900); }
.cs-contribution-item:nth-child(2) { border-left: 2px solid var(--blue-700); }
.cs-contribution-item:nth-child(3) { border-left: 2px solid var(--blue-600); }
.cs-contribution-item:nth-child(4) { border-left: 2px solid var(--blue-500); }
```

**Icon tile:** `32×32px`, `border-radius: 8px`, `background: var(--blue-100)`, `border: 1px solid var(--blue-200)`, `color: var(--blue-700)`.

---

### Scale / Stats Grid (`.cs-scale-grid`)

For platform-scale metrics. Stacked grid: hero cell on top, sub-cells in a horizontal row below.

```css
.cs-scale-grid { border: 1px solid var(--border); border-radius: var(--radius-md); overflow: hidden; }
.cs-scale-hero { background: var(--blue-100); border-bottom: 1px solid var(--border); text-align: center; padding: 1.75rem 1.5rem; }
.cs-scale-hero .cs-scale-value { font-size: 2.5rem; font-weight: 700; color: var(--blue-700); }
.cs-scale-card { background: var(--white); flex: 1; text-align: center; padding: 1.25rem 1rem; border-right: 1px solid var(--border); }
.cs-scale-card:last-child { border-right: none; }
/* Sub-cell value color cycle */
.cs-scale-card:nth-child(1) .cs-scale-value { color: var(--blue-700); }
.cs-scale-card:nth-child(2) .cs-scale-value { color: var(--blue-600); }
.cs-scale-card:nth-child(3) .cs-scale-value { color: var(--blue-500); }
```

---

### Problem Shortfall Cards (`.cs-shortfall-grid`)

3-column problem cards with top border accent.

```css
.cs-shortfall-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 1.25rem; margin-top: 2rem; }
.cs-shortfall-card { background: var(--white); border: 1px solid var(--border); border-top: 3px solid; border-radius: var(--radius-md); padding: 1.5rem; }
.cs-shortfall-card:nth-child(1) { border-top-color: var(--blue-700); }
.cs-shortfall-card:nth-child(2) { border-top-color: var(--blue-600); }
.cs-shortfall-card:nth-child(3) { border-top-color: var(--blue-500); }
/* Label color mirrors border */
.cs-shortfall-card:nth-child(1) .cs-shortfall-label { color: var(--blue-700); }
.cs-shortfall-card:nth-child(2) .cs-shortfall-label { color: var(--blue-600); }
.cs-shortfall-card:nth-child(3) .cs-shortfall-label { color: var(--blue-500); }
```

---

### Finding Cards (`.cs-findings-grid`)

2-column grid of research findings or approach cards. Left border cycles through blue shades.

```css
.cs-findings-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-top: 1.75rem; }
.cs-finding-card { background: var(--white); border: 1px solid var(--border); border-left: 3px solid var(--blue-700); border-radius: var(--radius-md); padding: 1.25rem 1.5rem; }
.cs-finding-card:nth-child(2) { border-left-color: var(--blue-600); }
.cs-finding-card:nth-child(3) { border-left-color: var(--blue-500); }
.cs-finding-card:nth-child(4) { border-left-color: var(--blue-400); }
.cs-finding-title { font-family: var(--font-display); font-size: .875rem; font-weight: 700; color: var(--blue-700); margin-bottom: .375rem; }
.cs-finding-card:nth-child(2) .cs-finding-title { color: var(--blue-600); }
.cs-finding-card:nth-child(3) .cs-finding-title { color: var(--blue-500); }
```

---

### Research Quote Card (`.cs-rq-card`)

For customer/participant voices embedded in the research narrative.

```css
.cs-rq-card {
  background: var(--white);
  border: 1px solid var(--border);
  border-left: 3px solid var(--blue-700);
  border-radius: var(--radius-md);
  padding: 1.375rem 1.5rem 1.125rem;
}
.cs-rq-card__eyebrow {
  font-family: var(--font-display); font-size: .625rem; font-weight: 700;
  letter-spacing: .18em; text-transform: uppercase; color: var(--blue-700);
  display: block; margin-bottom: .625rem;
}
.cs-rq-card__quote {
  font-family: var(--font-display); font-size: 1rem; font-weight: 300;
  font-style: italic; line-height: 1.65; color: var(--text); margin: 0 0 .75rem;
}
.cs-rq-card__attr {
  font-family: var(--font-display); font-size: .6875rem; font-weight: 600; color: var(--text-muted);
}
```

---

### Outcome Cards (`.cs-outcomes`)

3-column grid. Top border and value color cycle through blue shades.

```css
.cs-outcomes { display: grid; grid-template-columns: repeat(3,1fr); gap: 1.5rem; margin-top: 2.5rem; }
.cs-outcome { background: var(--white); border: 1px solid var(--border); border-top: 3px solid; border-radius: var(--radius-lg); padding: 1.75rem 1.5rem; }
.cs-outcome:nth-child(1) { border-top-color: var(--blue-700); }
.cs-outcome:nth-child(2) { border-top-color: var(--blue-600); }
.cs-outcome:nth-child(3) { border-top-color: var(--blue-500); }
.cs-outcome-value { font-family: var(--font-display); font-size: 2.5rem; font-weight: 300; letter-spacing: -0.04em; line-height: 1; margin-bottom: .5rem; }
.cs-outcome:nth-child(1) .cs-outcome-value { color: var(--blue-700); }
.cs-outcome:nth-child(2) .cs-outcome-value { color: var(--blue-600); }
.cs-outcome:nth-child(3) .cs-outcome-value { color: var(--blue-500); }
.cs-outcome-label { font-family: var(--font-display); font-size: .75rem; font-weight: 700; letter-spacing: .1em; text-transform: uppercase; color: var(--text); margin-bottom: .5rem; }
.cs-outcome-desc { font-size: .8125rem; color: var(--text-muted); line-height: 1.65; }
```

> Reserve outcome cards for 3–4 key metrics. More dilutes impact.

---

### Callout Block (`.cs-callout`) — Editorial moment

Used 1–2 times per case study for key insight moments.

```css
.cs-callout {
  border-left: 3px solid var(--blue-700);
  background: var(--surface);
  border-radius: 0 var(--radius-md) var(--radius-md) 0;
  padding: 1.5rem 1.75rem;
  margin: 2rem 0;
}
.cs-callout__eyebrow {
  font-family: var(--font-display); font-size: .625rem; font-weight: 700;
  letter-spacing: .18em; text-transform: uppercase; color: var(--blue-700);
  display: block; margin-bottom: .625rem;
}
.cs-callout__body {
  font-family: var(--font-display); font-size: 1.0625rem; font-weight: 300;
  font-style: italic; line-height: 1.65; color: var(--text);
}
```

---

### Pull Quote (`.cs-pullquote`)

For editorial reflection moments and interview-driven insights. No border rule in v0.8 — centered or left-aligned block, max-width `760px`.

```css
.cs-pullquote { margin-top: 3rem; max-width: 760px; }
.cs-pullquote__eyebrow {
  font-family: var(--font-display); font-size: .6875rem; font-weight: 700;
  letter-spacing: .18em; text-transform: uppercase;
  color: var(--blue-700); display: block; margin-bottom: 1rem;
}
.cs-pullquote__quote {
  font-family: var(--font-display); font-size: clamp(1.25rem, 2.5vw, 1.625rem);
  font-weight: 300; font-style: italic; letter-spacing: -0.025em;
  color: var(--text); line-height: 1.45; margin-bottom: .875rem;
}
.cs-pullquote__mark { font-weight: 700; font-style: inherit; color: var(--blue-700); }
.cs-pullquote__attr { font-size: .8125rem; color: var(--text-muted); }
```

> v0.8 removes the clay left border. Pull quotes are typographic moments only — no decorative rule.

---

### Persona Block (`.cs-persona`)

For research-driven case studies. Two-column: portrait on left, body on right.

```css
.cs-persona { display: grid; grid-template-columns: 200px 1fr; gap: 2rem; align-items: start; }
.cs-persona__portrait {
  border-radius: var(--radius-lg); overflow: hidden;
  aspect-ratio: 3/4; display: flex; align-items: center; justify-content: center;
  font-family: var(--font-display); font-size: 4rem; font-weight: 300; font-style: italic;
  color: rgba(255,255,255,.6); letter-spacing: -0.04em;
}
/* Portrait gradient — three blue variants */
.cs-persona--1 .cs-persona__portrait { background: linear-gradient(135deg, var(--blue-900), var(--blue-700)); }
.cs-persona--2 .cs-persona__portrait { background: linear-gradient(135deg, var(--blue-800), var(--blue-600)); }
.cs-persona--3 .cs-persona__portrait { background: linear-gradient(135deg, var(--blue-700), var(--blue-500)); }
```

**Body anatomy:**
```
.cs-persona__eyebrow  — Satoshi 700, .6875rem, --blue-700, tracking .18em, uppercase
.cs-persona__name     — Satoshi 700, 1.25rem, --text, letter-spacing -.02em
.cs-persona__role     — Inter 500, .875rem, --text-muted
.cs-persona__quote    — Satoshi 300 italic, 1rem, --text, border-left 2px solid --blue-600
.cs-persona__tags     — Outlined pills, --gray-300 border
```

> Limit personas to 3 per case study. More than that turns research into inventory.

---

### Status Badge (`.cs-badge`)

Inline tag for delivery status. Used near the top of outcome sections.

```css
.cs-badge {
  display: inline-flex; align-items: center; gap: .375rem;
  background: var(--blue-100); border: 1px solid var(--blue-200); border-radius: 50px;
  padding: .25rem .875rem; font-size: .6875rem; font-weight: 600; color: var(--blue-700);
  margin-bottom: 1rem;
}
.cs-badge::before { content: ''; display: block; width: 7px; height: 7px; border-radius: 50%; background: var(--blue-700); }
```

---

### Process Diagrams

For methodology / decision flow sections — more granular than the engagement phase tracker.

In v0.8, process diagrams use **shades of blue only** — no separate phase palette. Use the blue spectrum (900 → 500) to differentiate steps sequentially, consistent with the phase tracker.

> v0.7 preserved a separate `--phase-teal/amber/purple/pink` palette for process diagrams. This is **deprecated in v0.8**. All process steps now use the blue spectrum.

---

### Case Study Nav Footer (`.cs-nav-footer`)

Prev / next navigation at the bottom of every case study.

```css
.cs-nav-footer {
  display: flex; align-items: center; justify-content: space-between;
  padding: 2rem 0; border-top: 1px solid var(--border); margin-top: 1rem;
}
.cs-nav-footer a {
  display: inline-flex; align-items: center; gap: .5rem;
  font-size: .75rem; font-weight: 600; letter-spacing: .06em; text-transform: uppercase;
  color: var(--text-muted); text-decoration: none; transition: color 150ms;
}
.cs-nav-footer a:hover { color: var(--accent); }
```

---

## Navigation

- Back link: `.cs-back` — positioned inside `.cs-hero` above the eyebrow, color `rgba(255,255,255,.5)` → `.9` on hover. Chevron-left icon 14×14px, stroke-width 2.
- Nav footer: prev/next links with direction labels and arrow icons. Direction `left` for prev, `right` for next.

---

## NDA Indicator

All project cards (homepage) show a lock icon (16px, `--gray-400`) preceding the title to indicate confidential content. On the protected case study page itself, a `.cs-badge` with a lock icon appears in the hero meta row.

---

## Page Composition Pattern

Recommended section order for a complete case study:

1. **Hero** (`.cs-hero`) — dark slab, title + lede + stat panel + meta row (role / client / timeline / status)
2. **Cover strip** (`.cs-cover`) — blue gradient with optional image overlay
3. **Engagement Phase Tracker** (`.cs-phase-track`) — 5-phase journey overview
4. **My Contribution** (`.cs-contribution`) — 4-card what-I-led grid
5. **Overview** — what the product/platform is, scale stats (`.cs-scale-grid`)
6. **Our Customer** — persona or customer ecosystem image
7. **The Problem** — shortfall cards (`.cs-shortfall-grid`), original design image, research quote
8. **Per-Phase Sections** — each with a phase banner (`.cs-phase-banner`) + findings grid + quotes
9. **Outcomes** (`.cs-outcomes`) — 3-stat outcome grid + reflective pull quote
10. **What's Next** — forward-looking 2-card grid linking to the next case study
11. **Nav footer** (`.cs-nav-footer`) — prev/next case studies

Not every case study needs every section. Pick the 6–8 that serve the narrative.

---

## Token Migration — v0.7 → v0.8

| v0.7 Token | v0.8 Replacement | Notes |
|------------|-----------------|-------|
| `--teal-900` | `--blue-900` | Phase 01 chip |
| `--teal-700` | `--blue-700` | Phase 02 chip, primary accent, finding titles |
| `--teal-500` | `--blue-600` | Phase 03 chip (was --teal-500 secondary) |
| `--teal-400` | `--blue-500` | Phase 04 chip |
| `--teal-200` | `--blue-200` | Tinted bg, tag borders |
| `--teal-100` | `--blue-100` | Icon tile bg, scale hero bg |
| `--sage-900` | `--blue-800` | Phase 02 chip (deeper blue) |
| `--sage-700` | `--blue-600` | Removed — use blue spectrum |
| `--sage-500` | `--blue-500` | Removed — use blue spectrum |
| `--sage-*` | Removed | No sage/green in v0.8 |
| `--clay-700` | `--blue-500` | Phase 05 (now lighter blue for delivery) |
| `--clay-500` | `--blue-700` | Eyebrows, callout borders → now blue |
| `--clay-*` | Removed | No clay/terracotta in v0.8 |
| `--paper-0` | `--white` / `--gray-50` | Card bg → `--white`, page bg → `--gray-50` |
| `--paper-50` | `--gray-100` | Alt section bg |
| `--ink-900` | `--gray-900` / `--text` | Primary text |
| `--ink-600` | `--gray-500` / `--text-muted` | Body / muted text |
| `--ink-400` | `--gray-400` | Placeholder, disabled |
| `--ink-200` | `--gray-300` | Strong borders |
| `--ink-100` | `--gray-200` / `--border` | Default borders |
| `--phase-teal/amber/purple/pink` | Blue spectrum | Process diagrams now use blue only |

---

## Migration History

### v0.8 — Current (2026-05-05)
- ✅ **Color system migrated** — teal/sage/clay replaced with pure blue spectrum throughout
- ✅ **Phase tracker color scheme** updated — teal-900 → clay-500 spectrum replaced with blue-900 → blue-500
- ✅ **Phase banners** updated — same blue spectrum as tracker chips
- ✅ **Contribution cards** — left accent updated from brand spectrum (teal/sage/clay) to four blue shades
- ✅ **Shortfall cards** — top border updated from teal/sage/clay cycle to blue spectrum
- ✅ **Finding cards** — border-left cycle updated to blue shades
- ✅ **Research quote card** — border-left updated from `--teal-700` to `--blue-700`
- ✅ **Outcome cards** — top border and value color cycle updated to blue spectrum
- ✅ **Callout block** — left border updated from `--clay-500` to `--blue-700`
- ✅ **Pull quote** — clay left border removed; typographic only
- ✅ **Persona portraits** — gradients updated from teal/sage/clay to three blue variants
- ✅ **Status badge** — updated from teal to blue-100/blue-700
- ✅ **CS hero** — panel and meta updated to blue palette on dark bg
- ✅ **Cover strip** — gradient updated from fintech teal to blue-900 → blue-600
- ✅ **Process diagrams** — deprecated phase palette (teal/amber/purple/pink); now use blue spectrum
- ✅ **Nav footer** — hover color updated from `--teal-700` to `--accent` (blue-700)
- ✅ **Back link** — updated to white on dark; no teal reference
- ✅ **Scale grid** — hero cell updated from teal-100 to blue-100; value colors updated to blue spectrum
- ✅ **Paper/ink tokens** — all replaced with gray/white equivalents

### v0.7 (2026-04-25)
- Hero color panel pattern documented
- Cover gradients aligned to teal/sage/clay sector palette
- Outcome card color cycle updated to teal/sage/clay
- Callout block used `--clay-500` border
- Phase tracker introduced with teal-900 → clay-500 spectrum
- Persona block with teal/sage/clay portrait gradients

### v0.6 and earlier
- Cover gradients used standalone navy/forest/indigo palette
- Outcome cards cycled accent/teal/purple
- Phase tracker used phase palette (teal/amber/purple/pink)

---

*Page-specific patterns. For tokens, typography, and global components, see [MASTER.md](../MASTER.md).*
