# Design System — Michelle DaSilva Portfolio
**Version:** v0.7 · **Last Updated:** 2026-04-25
**Framework:** ui-ux-pro-max · **Stack:** HTML/CSS (Vanilla)
**Migration Status:** ✅ All Stages Complete (Tokens · Docs · Components)

---

## Product Profile

| Attribute | Value |
|-----------|-------|
| Product Type | Executive Portfolio |
| Pattern | Credibility-first, content-dense, professional showcase |
| Target Audience | Enterprise hiring managers, C-suite executives, collaborators |
| Style | Minimal · Premium · Executive · Editorial luxury fintech |
| Tone | Authoritative, refined, trustworthy |
| Reference | Goldman Marcus, Revolut Private — restrained typography, big quiet type, single saturated accent moments |
| Anti-patterns | Playful elements, heavy gradients, emoji icons, skeuomorphism, consumer-app friendliness |

---

## Core Design Principles

1. **Warm, not soft.** Humanity lives in the details — paper background, clay accent — but never sacrifices rigor.
2. **Precision earns trust.** In fintech and pharma, every pixel reads as a claim. Disciplined type, honest hierarchy, no decorative noise.
3. **Story over showcase.** Portfolio pages are arguments, not galleries. The system serves the narrative.
4. **Restraint with one risk.** Every screen holds back in nine places and takes one real swing — that's where personality lives.

---

## Color System

### Foundation Tokens

#### Paper — warm near-white surfaces
| Token | Value | Usage |
|-------|-------|-------|
| `--paper-0` | `#FAFAF7` | Primary page background |
| `--paper-50` | `#F4F4EF` | Elevated panels, alt sections |
| `--paper-100` | `#EAEAE3` | Subtle dividers, borders |

#### Ink — text and neutrals (cool near-blacks)
| Token | Value | Usage |
|-------|-------|-------|
| `--ink-900` | `#0B1418` | Headlines, primary text |
| `--ink-800` | `#162329` | Body text |
| `--ink-600` | `#3A4A52` | Secondary text |
| `--ink-400` | `#6E7F87` | Tertiary text, captions |
| `--ink-300` | `#9AA8AF` | Disabled |
| `--ink-200` | `#C7D0D4` | Inputs, strong borders |
| `--ink-100` | `#E4E8EA` | Hairlines |

#### Teal — primary brand
| Token | Value | Usage |
|-------|-------|-------|
| `--teal-900` | `#0A2A33` | Hover states, dark mode CTAs |
| `--teal-700` | `#124651` | **Primary CTAs, headline emphasis, brand mark** |
| `--teal-500` | `#1D6B77` | Stat values, secondary brand moments |
| `--teal-400` | `#3E8B97` | Dark mode accent |
| `--teal-200` | `#A8CDD3` | Dark mode hover |
| `--teal-100` | `#DCECEF` | Focus rings, tinted bg |

#### Sage — secondary (pharma & healthcare)
| Token | Value | Usage |
|-------|-------|-------|
| `--sage-900` | `#2F4A3D` | Pharma sector strip start |
| `--sage-700` | `#4A7060` | Pharma persona portrait |
| `--sage-500` | `#6FA088` | Pharma sector strip end, eyebrow |
| `--sage-300` | `#B3C4BA` | Soft accents |
| `--sage-100` | `#E2EAE5` | Pharma tag bg, icon tile bg |

#### Clay — accent (used sparingly, ≤5% per surface)
| Token | Value | Usage |
|-------|-------|-------|
| `--clay-700` | `#B8562E` | Banking sector strip start, eyebrow text |
| `--clay-500` | `#D47548` | **Brand signature — nav dot, eyebrows, pull-quote rules, banking strip end** |
| `--clay-300` | `#E8B295` | Soft accents in dark mode |
| `--clay-100` | `#F7E4D7` | Banking tag bg, icon tile bg |

> **Rule for clay:** Never more than ONE clay accent per visible surface. The eyebrow OR the rule, not both. The brand mark OR a button background, not both.

### Semantic Aliases (backward compatibility)

These keep existing component classes working. Update components by editing aliases here, not by find-replacing through the codebase.

| Alias | Maps to | Old equivalent |
|-------|---------|----------------|
| `--bg` | `var(--paper-0)` | was `#f8f6f3` |
| `--surface` | `var(--paper-50)` | was `#ffffff` |
| `--surface-2` | `var(--paper-100)` | was `#f0ece7` |
| `--border` | `var(--ink-100)` | was `#e4ddd6` |
| `--text` | `var(--ink-900)` | was `#1a1612` |
| `--text-muted` | `var(--ink-600)` | was `#6b6560` |
| `--accent` | `var(--teal-700)` | was `#00959f` (cyan-blue) |
| `--accent-hover` | `var(--teal-900)` | was `#007a84` |
| `--accent-2` | `var(--clay-500)` | was `#64ffda` (was secondary teal) |
| `--font` | `var(--font-body)` | was `'Inter', system` |
| `--font-headline` | `var(--font-display)` | was `'Plus Jakarta Sans'` |

### Phase Palette (process diagrams only)

**Preserved unchanged.** Multi-color sequential differentiation for process diagrams (methodology, workflow, decision flows) — a different functional job from brand surface or engagement narrative.

| Token | Value | Use |
|-------|-------|-----|
| `--phase-teal` | `#14b8a6` | Step 2 / discovery |
| `--phase-amber` | `#f59e0b` | Step 3 / synthesis |
| `--phase-purple` | `#8b5cf6` | Step 4 / definition |
| `--phase-pink` | `#ec4899` | Accent variation |
| `--phase-cyan` | `#06b6d4` | Data callouts |
| `--phase-orange` | `#f97316` | Warning / highlight |
| `--phase-green` | `#22c55e` | Success / positive metric |

> **Critical distinction (v0.7):** The phase palette is for **process diagrams** — granular methodology illustration. **Engagement phase trackers** (the high-level "here are the 5 phases of this project" component) use the **brand spectrum** (`teal-900 → teal-700 → sage-700 → clay-700 → clay-500`) instead. See [`pages/case-study.md`](pages/case-study.md#engagement-phase-tracker-cs-phase-track).

### Semantic States

| Token | Value | Usage |
|-------|-------|-------|
| `--success` | `#3E7057` | Form success, positive deltas |
| `--warning` | `#C89B3C` | Form warnings |
| `--error` | `#A84A3C` | Form errors |
| `--info` | `var(--teal-500)` | Informational states |

### Dark Mode (`[data-theme="dark"]`)

Ink-based (cool blue-dark), not warm brown. The accent shifts to teal-400 for stronger contrast on dark surfaces.

| Token | Light Value | Dark Value |
|-------|-------------|-----------|
| `--paper-0` | `#FAFAF7` | `#0B1418` |
| `--paper-50` | `#F4F4EF` | `#162329` |
| `--ink-900` | `#0B1418` | `#FAFAF7` |
| `--accent` | `#124651` | `#3E8B97` |
| `--accent-2` | `#D47548` | `#E8B295` |

### Contrast Compliance (WCAG AA — 4.5:1 minimum)

| Pairing | Ratio | Status |
|---------|-------|--------|
| `#0B1418` on `#FAFAF7` | ~17.4:1 | ✅ AAA |
| `#162329` on `#FAFAF7` | ~14.8:1 | ✅ AAA |
| `#3A4A52` on `#FAFAF7` | ~7.9:1 | ✅ AAA |
| `#6E7F87` on `#FAFAF7` | ~3.9:1 | ⚠️ AA Large only — use `--ink-600` for body |
| `#124651` on `#FAFAF7` | ~9.4:1 | ✅ AAA |
| `#1D6B77` on `#FAFAF7` | ~5.8:1 | ✅ AA |
| `#FAFAF7` on `#0B1418` | ~17.4:1 | ✅ AAA |
| `#3E8B97` on `#0B1418` | ~6.8:1 | ✅ AA |

> **Rule:** Never apply `opacity` to muted text — it fails contrast. Use a darker token instead.
> **Rule:** Use `--ink-600` (#3A4A52) for body-weight muted text. Reserve `--ink-400` for tertiary captions only.

---

## Typography

### Font Stack

| Role | Family | Weights | Usage |
|------|--------|---------|-------|
| Display / Headline | **Satoshi** | 300, 400, 500, 700 | `h1`, `h2`, `.cs-hero-title`, eyebrows, labels, stat values |
| Body / UI | **Inter** | 300, 400, 500, 600, 700 | All body, ledes, captions, form input text |
| Mono | JetBrains Mono | 400, 500 | Code, tokens, technical metadata |
| System fallback | -apple-system, BlinkMacSystemFont, sans-serif | — | Always declared after primary |

> **Why Satoshi + Inter (changed from Plus Jakarta Sans):** Satoshi reads more "luxury fintech" — Goldman Marcus / Revolut Private posture — with a wider weight range (300 ultralight → 700 bold) that supports the system's light-meets-bold contrast move. Plus Jakarta Sans was warmer but lacked the weight range to do dramatic typographic contrast convincingly.

### Type Scale

| Name | Size | Weight | Line Height | Usage |
|------|------|--------|-------------|-------|
| Hero Headline | `clamp(2.5rem, 7vw, 4.5rem)` | 300/700 mix | 1.0–1.05 | `h1.hero-headline` |
| Section Title | `clamp(2rem, 4vw, 2.75rem)` | 300/700 mix | 1.05–1.15 | `h2.section-title` |
| CS Hero Title | `clamp(2rem, 5vw, 3.25rem)` | 300/700 mix | 1.0–1.15 | `h1.cs-hero-title` |
| CS Section Title | `clamp(1.4rem, 3vw, 1.9rem)` | 500 | 1.15 | `h2.cs-section-title` |
| Card Title | `1.5rem` | 700 | 1.15 | `h3.project-title`, `.card__title` |
| Body Lede | `1.0625rem` | 400 | 1.65 | `.hero-sub`, `.cs-lede` |
| Body | `1rem` | 400 | 1.5–1.6 | `p` in content |
| Caption | `0.8125rem` | 400 | 1.5 | Captions, hints |
| Label / Eyebrow | `0.75rem` | 700 | — | Eyebrow labels (uppercase, tracking 0.2em) |
| Micro | `0.6875rem` | 600–700 | — | Timeline years, col labels |

### The Light-Meets-Bold Move

The system's signature typographic gesture: **Satoshi 300 ultralight crashed against Satoshi 700 bold within the same headline**, with the bold portion in `--teal-700` for emphasis.

```html
<h1 class="hero-headline">
  Designed for <strong>trust</strong>.<br>
  Built for <strong>scale</strong>.
</h1>
```

Use this in: hero headlines, case study openers, section titles where one word carries weight. Never mix with all-bold headlines on the same page.

### Typography Rules

- `letter-spacing: -0.05em` on hero scale (Satoshi reads tight at large sizes)
- `letter-spacing: -0.035em` on display titles
- `letter-spacing: -0.02em` on h2/h3
- `letter-spacing: 0.2em` on eyebrow labels (uppercase, very wide tracking)
- Minimum body text: **16px** (avoids iOS auto-zoom)
- Minimum rendered text: **11px** — only for non-essential micro labels
- Use `clamp()` for fluid headlines — never fixed px for h1/h2
- Line length: 65–75 chars for body (`max-width: 70ch`); 52–62ch for hero sub copy

---

## Spacing System

Based on **4pt grid** — supports tighter editorial rhythm than the previous 8pt.

| Token | Value | Usage |
|-------|-------|-------|
| `--nav-height` | `64px` | Fixed nav reservation |
| 1 | `4px` | Icon gaps, micro spacing |
| 2 | `8px` | Tag gap, dot offsets |
| 3 | `12px` | Inline gaps |
| 4 | `16px` | Card padding subtask |
| 5 | `20px` | — |
| 6 | `24px` | Container padding, card gap |
| 8 | `32px` | Card body padding, form gaps |
| 10 | `40px` | Section sub-spacing |
| 12 | `48px` | Section sub-spacing |
| 16 | `64px` | Section separation |
| 20 | `80px` | Hero padding |
| 24 | `96px` | Section vertical padding |
| 32 | `128px` | Major section separation |

---

## Border Radius

**Updated for Satoshi pairing.** Slightly softer than v0.6 to feel current without going consumer-app.

| Token | Value | Usage |
|-------|-------|-------|
| `--radius-sm` | `6px` | Tags, dots, small chips |
| `--radius-md` | `10px` | **Buttons, form inputs** (was 4px in v0.6) |
| `--radius-lg` | `14px` | Icon tiles, panels |
| `--radius-xl` | `20px` | **Cards, hero containers** |
| `100px` | pill | Tags (`.tag`), cover labels |
| `50%` | circle | Photo frames, timeline markers, brand dot |

---

## Elevation / Shadow

Ink-tinted (never pure black) for warmth and depth that feels like paper rather than plastic.

| Token | Value | Usage |
|-------|-------|-------|
| `--shadow-xs` | `0 1px 2px rgba(11, 20, 24, 0.04)` | Subtle separation |
| `--shadow-sm` | `0 2px 6px rgba(11, 20, 24, 0.05), 0 1px 2px rgba(11, 20, 24, 0.03)` | Cards, inputs |
| `--shadow-md` | `0 8px 24px rgba(11, 20, 24, 0.08), 0 2px 6px rgba(11, 20, 24, 0.04)` | Hover lifts, popovers |
| `--shadow-lg` | `0 20px 48px rgba(11, 20, 24, 0.12), 0 4px 12px rgba(11, 20, 24, 0.06)` | Modals, hero panels |

> **Rule:** Use `transform: translateY()` for hover lift — never change `margin` or `top`.

---

## Animation

### Timing Tokens

| Token | Value | Usage |
|-------|-------|-------|
| `--transition` | `150ms ease` | Micro-interactions (color, bg) |
| `--transition-slow` | `300ms ease` | Card hover, mobile menu |
| `--ease-out` | `cubic-bezier(0.16, 1, 0.3, 1)` | Confident decel — primary motion curve |
| `--ease-in-out` | `cubic-bezier(0.65, 0, 0.35, 1)` | Two-state transitions |
| `--ease-spring` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Playful overshoot — toggle thumbs, icon scales |
| Fade-in scroll | `0.6s ease` | `.fade-in` IntersectionObserver reveal |

### Rules

- Use `transform` and `opacity` only — never animate `width`, `height`, `top`, `left`, `letter-spacing`
- Hover lifts: `translateY(-1px)` for buttons, `translateY(-3px)` for cards (was -6px — softened for editorial restraint)
- Card icon hover: `transform: scale(1.05) rotate(-2deg)` — subtle playful moment
- Arrow indicators: `translateX(3-4px)` on hover for "read more" cues
- All animations: respect `prefers-reduced-motion`

---

## Component Inventory

> **Status:** All components below exist as live classes in `style.css` as of v0.7.

### Buttons

| Variant | Class | Style |
|---------|-------|-------|
| Primary | `.btn--primary` | `--teal-700` bg, `--paper-0` text, hover deepens to teal-900 with shadow |
| Secondary | `.btn--secondary` | Transparent bg, `--ink-900` border, inverts on hover |
| Ghost | `.btn--ghost` | Transparent bg, `--ink-200` border, subtle hover |
| Accent | `.btn--accent` | `--clay-500` bg — for "Get in Touch" hero CTAs only |
| Sizes | `.btn--sm`, `.btn--lg` | Default 12/22 padding |
| Full-width | `.btn--full` | `width: 100%`, centered |
| Min-height | All | `44px` (touch target compliance) |

> **Primary uses teal/700, NOT ink/900.** Black primaries read too institutional/cold; teal carries the brand into every CTA.

### Navigation

- Fixed top bar: `64px` height, `--paper-0` bg, `backdrop-filter: blur(16px)`
- Brand: text + clay dot signature mark
- Desktop: horizontal links with active state (clay underline, not background fill)
- Mobile (`<640px`): hamburger → full-screen overlay menu
- Theme toggle (v0.7): editorial pill with sun/moon icons, sun on left / moon on right, active icon sits in filled `--ink-900` circle
- CTA: teal/700 small button, right-aligned
- Skip link: visually hidden, visible on focus

### Case Study Cards (`.card`)

The portfolio's primary unit. Composed of:

- 6px gradient sector strip across the top (`--accent--teal` for fintech, `--accent--sage` for pharma, `--accent--clay` for banking)
- Top-right floating icon mark (44×44 tile, sector-tinted bg)
- Sector eyebrow in matching color
- Bold Satoshi headline
- Inter body description
- Hairline footer with read-more arrow in teal/700

Border-radius: `--radius-xl` (20px). Hover: `translateY(-3px)` + shadow + border darkens. Icon tile gets subtle `scale(1.05) rotate(-2deg)`.

**Sector icons:**
- Fintech: shield-check (security/protection)
- Pharma: leaf (life sciences/wellbeing)
- Banking: building (institution)

### Stats (`.stats`, `.stat`)

Hairline-bordered grid. Numbers in Satoshi 300 at 56px, color `--teal-500`. Labels in Satoshi 700 caps, `--ink-400`.

### Persona Block (`.persona`)

Two-column: left is gradient portrait (teal for one persona, sage for another, clay for a third if used), right is body. Italic Satoshi pull quote inside, clay rule on the left of quote, attribution disciplined and quiet.

### Pull Quote (`.pullquote`)

Clay rule on the left, Satoshi 300 italic at 32px, clay eyebrow above ("From the research"), attribution underneath in `--ink-600`.

### Hero Color Panel (`.hero__panel`)

For light-mode case study heroes. A gradient panel (teal-700 → teal-500 → sage-500) holding the headline outcome stat. Persona-portrait gradient family — ties the system together. Used only on the case study hero, once per page. **See [pages/case-study.md](pages/case-study.md) for full hero composition rules.**

### Engagement Phase Tracker (`.cs-phase-track`)

Compact horizontal-row tracker for showing a multi-phase engagement (e.g., Alignment → Discovery → Synthesis → Definition → Delivery). Each phase card has a full-height saturated color slab on the left holding the phase number; content sits beside it. Color uses brand spectrum (`teal-900 → teal-700 → sage-700 → clay-700 → clay-500`) — the journey through the brand. Two variants: default with one supporting metric per phase, minimal variant with title only. **See [pages/case-study.md](pages/case-study.md#engagement-phase-tracker-cs-phase-track) for full specs.**

### Form

- Labels: visible, above input, Satoshi 700 caps with 0.14em tracking
- Required: asterisk `*` in `--clay-500`
- Input height: `min-height: 44px`
- Input radius: `--radius-md` (10px) — matches buttons
- Focus: `box-shadow: 0 0 0 3px var(--teal-100)`, teal-500 border
- Error: `--error` border, error message below field
- Submit: disables + shows "Sending…" during async fetch

### Tags / Chips (`.tag`)

Pill-shaped (`100px` radius). Variants: `--neutral`, `--teal`, `--sage`, `--clay`, `--success`, `--warning`, `--danger`. Satoshi 700 caps with 0.12em tracking.

### Theme Toggle (`.theme-toggle`)

Editorial pill housing two 28×28 icon buttons (sun + moon). Active icon sits in a filled `--ink-900` circle; inactive is bare. Border `--ink-200`, sharpens to `--ink-900` on hover. Wired via `auth.js` or equivalent toggle script — sets `data-theme="dark"` on `<html>` and persists to `localStorage`.

---

## Layout

### Breakpoints

| Label | Width | Behavior |
|-------|-------|----------|
| Desktop | `>1024px` | Full multi-column layouts |
| Tablet | `≤1024px` | Stacked about/split layouts, 2-col skills |
| Mobile | `≤768px` | Single column, hamburger nav, simplified card icons |
| Small mobile | `≤560px` | Industry list stacks vertically |
| Very small | `≤480px` | Persona/OKR grids collapse to 1-col |

### Grid Patterns

| Context | Desktop | Tablet | Mobile |
|---------|---------|--------|--------|
| Projects | 2-col or 3-col | 2-col | 1-col |
| About bio | auto + 1fr | 1-col | 1-col |
| Background (career + skills) | 2-col | 1-col | 1-col |
| Skills inside background | 2-col | 2-col | 1-col |
| Contact | 1fr + 1.6fr | 1-col | 1-col |
| Education | 3-col | 1-col | 1-col |
| CS: two-col | 1fr + 1fr | 1-col | 1-col |
| CS: persona grid | 2-col | 2-col | 1-col |
| CS: outcomes | 4-col | 2-col | 1-col |
| Hero stats | 3-col with dividers | 3-col | 1-col stacked |

### Container

- `max-width: 1100px`, `margin: 0 auto`, `padding: 0 24px`
- For new wider layouts (case study heroes, showcase): `1320px` max with `40px` padding

### Hero

- `min-height: 100vh; min-height: 100dvh`
- Centered layout with optional color panel anchor on the right (case study heroes — see [pages/case-study.md](pages/case-study.md))

---

## Imagery & Icons

- **Icon library:** Custom inline SVG (Lucide-style, 2px stroke)
- **Icon sizes:** 14px (toggle), 18–22px (card icons), 16–20px (inline)
- **Stroke weight:** 2px — consistent throughout
- **Sector icons (case study cards):**
  - Fintech: shield-check (security/protection)
  - Pharma: leaf (life sciences/wellbeing)
  - Banking: building (institution)
- **No emoji** used as structural icons
- **Photos:** `object-fit: cover` — warmth filter removed (paper background already provides warmth)
- **Images:** Always `loading="lazy"` except above-fold hero content

---

## Accessibility Standards

| Rule | Requirement |
|------|------------|
| Color contrast | 4.5:1 AA for body text (≥18px or ≥14px bold: 3:1) |
| Focus rings | `outline: 2px solid var(--teal-500); outline-offset: 3px` on `:focus-visible` |
| Skip link | Present, appears on keyboard focus |
| ARIA | `aria-label` on icon-only buttons, `aria-expanded` on toggles, `aria-required` on form fields |
| Form errors | `role="alert"` on error spans, `aria-live="polite"` on success |
| Reduced motion | `animation: none` for decorative; `0.01ms` duration for all others |
| Keyboard nav | Tab order matches visual order; Escape closes mobile menu |
| Screen reader | `aria-hidden="true"` on decorative SVGs, descriptive alt on meaningful images |

---

## Page-Specific Overrides

Page-level patterns and component variants live in `design-system/pages/`:

- **[pages/case-study.md](pages/case-study.md)** — Case study hero (light + dark), cover gradients, outcome cards, callouts, persona blocks, process steps, page composition pattern

When adding a new page type with its own conventions (e.g., a writing/blog index, an about page with distinct components), create a new override file in `design-system/pages/` and link it here.

---

## Migration History

### v0.7 — Current (2026-04-25)
- ✅ **Stage 1 — Token foundation** replaced (paper/ink/teal/sage/clay)
- ✅ **Stage 2 — MASTER.md** synced to v0.7 reality
- ✅ **Stage 3 — Components shipped** in `style.css`:
  - Sector strip case study cards with top-right icon
  - Hero color panel (gradient anchor for case study heroes)
  - Persona blocks (gradient portrait + italic quote)
  - Pull quote with clay rule
  - Theme toggle pill (sun/moon editorial style)
  - Engagement phase tracker — horizontal chip layout, brand spectrum (teal-900 → clay-500), title + supporting metric per phase. **Replaces the old phase-palette-based phase tracker for engagement overviews.** See `pages/case-study.md`.
- ✅ Typography updated to Satoshi + Inter (was Plus Jakarta Sans + Inter)
- ✅ Dark mode reworked from warm-brown to ink-blue
- ✅ Phase palette preserved unchanged for process diagrams
- ✅ Semantic aliases preserve all pre-v0.7 component classes

### v0.6 and earlier
- Plus Jakarta Sans + Inter typography
- Cyan-blue accent (`#00959f`)
- Warm brown dark mode
- Original phase palette established

---

## Do / Don't Quick Reference

| Do | Don't |
|----|-------|
| Use semantic color tokens (`var(--accent)`, `var(--text)`) | Hardcode raw hex values in components |
| Use Satoshi 300 + 700 contrast for hero headlines | Use a single weight throughout — kills the move |
| Limit clay to ONE accent per surface | Stack clay eyebrow + clay rule + clay button on the same screen |
| Use SVG icons from consistent stroke-width family | Use emoji as structural icons |
| Use `transform` for all motion | Animate `letter-spacing`, `width`, `height` |
| Keep `opacity` off muted text | Stack `opacity` on already-borderline contrast |
| Use `aria-label` on all icon-only interactive elements | Leave SVG-only buttons unlabeled |
| Use `dvh` with `vh` fallback | Use `vh` alone (breaks on mobile Safari) |
| Validate on blur; show errors inline | Show browser `alert()` for form errors |
| Reserve dark hero slab for dark mode only | Use it as a default light-mode hero |
| Match radius across buttons + inputs (`--radius-md`) | Mix radii within a form |
| Use sector colors (teal/sage/clay) for sector identity | Use phase palette for sector identity |
| Use **brand spectrum** (teal-900 → clay-500) for engagement phase trackers | Use phase palette for engagement narrative |
| Use **phase palette** (teal/amber/purple/pink) for process/methodology diagrams | Use sector colors for technical process diagrams |

---

*This document is the Source of Truth for all design decisions. Page-specific overrides live in `design-system/pages/`.*
