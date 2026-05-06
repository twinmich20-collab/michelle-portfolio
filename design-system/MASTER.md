# Design System — Michelle DaSilva Portfolio
**Version:** v0.8 · **Last Updated:** 2026-05-05
**Framework:** ui-ux-pro-max · **Stack:** HTML/CSS (Vanilla)
**Migration Status:** ✅ v0.8 Complete — Blue/White System

---

## Product Profile

| Attribute | Value |
|-----------|-------|
| Product Type | Executive Portfolio |
| Pattern | Credibility-first, content-dense, professional showcase |
| Target Audience | Enterprise hiring managers, C-suite executives, collaborators |
| Style | Minimal · Premium · Executive · Clean modern fintech |
| Tone | Authoritative, refined, trustworthy |
| Reference | Stripe, Linear, Vercel — restrained typography, single saturated accent, generous white space |
| Anti-patterns | Warm earth tones, clay/terracotta accents, playful elements, heavy gradients, emoji icons, skeuomorphism, consumer-app friendliness |

---

## Core Design Principles

1. **White space is the layout.** The system breathes through emptiness. Resist the urge to fill every surface.
2. **Precision earns trust.** In fintech and pharma, every pixel reads as a claim. Disciplined type, honest hierarchy, no decorative noise.
3. **Story over showcase.** Portfolio pages are arguments, not galleries. The system serves the narrative.
4. **One accent, used with intent.** Blue is the only color that carries brand meaning. When it appears, it earns attention.

---

## Color System

### Foundation Tokens

#### White & Near-White — primary surfaces
| Token | Value | Usage |
|-------|-------|-------|
| `--white` | `#FFFFFF` | Card bodies, form inputs |
| `--gray-50` | `#F8F9FB` | Primary page background |
| `--gray-100` | `#F1F3F6` | Elevated panels, alt sections |
| `--gray-200` | `#E4E7EC` | Borders, dividers |
| `--gray-300` | `#D0D5DD` | Strong borders, tag outlines |

#### Neutral — text and UI chrome
| Token | Value | Usage |
|-------|-------|-------|
| `--gray-900` | `#0D1117` | Headlines, primary text |
| `--gray-700` | `#344054` | Body text emphasis |
| `--gray-600` | `#475467` | Secondary body text |
| `--gray-500` | `#667085` | Muted text, captions |
| `--gray-400` | `#98A2B3` | Placeholder, disabled |

#### Blue — primary brand (only accent color)
| Token | Value | Usage |
|-------|-------|-------|
| `--blue-900` | `#03233D` | Hover states, darkest CTAs |
| `--blue-800` | `#052F55` | Deep backgrounds (photo fallback) |
| `--blue-700` | `#0D5EA0` | **Primary CTAs, eyebrows, active states** |
| `--blue-600` | `#1A8FE3` | **Stat values, pull quote rule, timeline dot, skill dots** |
| `--blue-500` | `#3AABF5` | Dark mode accent, node network secondary nodes |
| `--blue-400` | `#7ECBFB` | Nav link, hero eyebrow text (on dark bg) |
| `--blue-200` | `#C8E8FC` | Card image panel — light variant |
| `--blue-100` | `#E6F4FD` | Card image panel — lightest, form focus ring bg |

> **Rule for blue:** Blue earns its place by appearing in fewer locations. Eyebrows, CTAs, active states, stat values, and focus rings. Never as a decorative fill on large surfaces.

#### Hero Dark — node network hero only
| Token | Value | Usage |
|-------|-------|-------|
| `--hero-bg` | `#08111c` | Hero section background, nav, footer |
| `#0d2640` | — | Card image panel — deep blue variant |

### Semantic Aliases

| Alias | Maps to | Usage |
|-------|---------|-------|
| `--bg` | `var(--gray-50)` | Page background |
| `--surface` | `var(--gray-100)` | Alt section, panel background |
| `--border` | `var(--gray-200)` | Default borders |
| `--text` | `var(--gray-900)` | Primary text |
| `--text-muted` | `var(--gray-500)` | Secondary and body text |
| `--accent` | `var(--blue-700)` | Primary interactive color |
| `--accent-h` | `var(--blue-900)` | Hover state for accent |

### Dark Mode (`[data-theme="dark"]`)

| Token | Light Value | Dark Value |
|-------|-------------|------------|
| `--bg` | `#F8F9FB` | `#0D1117` |
| `--surface` | `#F1F3F6` | `#161B22` |
| `--border` | `#E4E7EC` | `#21262D` |
| `--text` | `#0D1117` | `#F0F6FC` |
| `--text-muted` | `#667085` | `#8B949E` |
| `--accent` | `#0D5EA0` | `#3AABF5` |
| `--accent-h` | `#03233D` | `#7ECBFB` |

### Deprecated Tokens (v0.7 → v0.8)

The following token families are **fully deprecated** as of v0.8. Remove from any component that still references them.

| Deprecated | Replacement |
|------------|-------------|
| `--paper-0`, `--paper-50`, `--paper-100` | `--gray-50`, `--gray-100`, `--gray-200` |
| `--ink-900`, `--ink-800`, `--ink-600` etc. | `--gray-900`, `--gray-600`, `--gray-500` etc. |
| `--teal-700`, `--teal-500`, `--teal-400` etc. | `--blue-700`, `--blue-600`, `--blue-500` etc. |
| `--sage-900` through `--sage-100` | Removed entirely — no replacement |
| `--clay-700`, `--clay-500`, `--clay-300`, `--clay-100` | Removed entirely — no replacement |
| `--accent-2` (clay) | Removed — blue is the only accent |
| `--contribution-bg` | `var(--hero-bg)` |

### Contrast Compliance (WCAG AA — 4.5:1 minimum)

| Pairing | Ratio | Status |
|---------|-------|--------|
| `#0D1117` on `#F8F9FB` | ~18.5:1 | ✅ AAA |
| `#475467` on `#F8F9FB` | ~7.2:1 | ✅ AAA |
| `#667085` on `#F8F9FB` | ~4.7:1 | ✅ AA |
| `#0D5EA0` on `#F8F9FB` | ~7.1:1 | ✅ AAA |
| `#1A8FE3` on `#F8F9FB` | ~4.6:1 | ✅ AA |
| `#F0F6FC` on `#0D1117` | ~18.1:1 | ✅ AAA |
| `#3AABF5` on `#0D1117` | ~7.8:1 | ✅ AA |

> **Rule:** Never apply `opacity` to muted text — it fails contrast. Use a darker token instead.
> **Rule:** `--gray-500` (`#667085`) just passes at 4.7:1 — use only for muted captions, never for body copy.

---

## Typography

### Font Stack

| Role | Family | Weights | Usage |
|------|--------|---------|-------|
| Display / Headline | **Satoshi** | 300, 400, 500, 700 | `h1`, `h2`, eyebrows, card titles, stat values, labels |
| Body / UI | **Inter** | 300, 400, 500, 600, 700 | All body copy, ledes, form inputs, captions |
| Mono | JetBrains Mono | 400, 500 | Code, tokens, technical metadata |
| System fallback | -apple-system, BlinkMacSystemFont, sans-serif | — | Always declared after primary |

**Import:**
```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet"/>
<link href="https://api.fontshare.com/v2/css?f[]=satoshi@300,400,500,700&display=swap" rel="stylesheet"/>
```

```css
--font-display: 'Satoshi', -apple-system, sans-serif;
--font-body:    'Inter', -apple-system, sans-serif;
```

### Type Scale

| Name | Size | Weight | Line Height | Usage |
|------|------|--------|-------------|-------|
| Hero Headline | `clamp(2.5rem, 6vw, 4.25rem)` | 300/700 mix | 1.04 | `h1.hero-headline` |
| Section Title | `clamp(1.875rem, 4vw, 2.625rem)` | 300/700 mix | 1.1 | `h2.section-title` |
| CS Hero Title | `clamp(2rem, 5vw, 3.25rem)` | 300/700 mix | 1.0–1.15 | `h1.cs-hero-title` |
| Card Title | `clamp(1.5rem, 2.8vw, 2rem)` | 700 | 1.15 | `.cs-card__title` |
| About Headline | `clamp(1.75rem, 3.5vw, 2.5rem)` | 300/700 mix | 1.1 | `.about-headline-v3` |
| Body Lede | `clamp(.9375rem, 1.8vw, 1.0625rem)` | 400 | 1.7 | `.hero-sub` |
| Body | `1rem` | 400 | 1.65–1.75 | `p` in content |
| Card Desc | `clamp(.9rem, 1.4vw, 1.0625rem)` | 400 | 1.7 | `.cs-card__desc` |
| Caption / Meta | `0.8125rem` | 400–500 | 1.5 | Timeline roles, edu school |
| Label / Eyebrow | `0.6875rem` | 700 | — | Uppercase, `letter-spacing: .18em` |
| Micro | `0.75rem` | 500 | — | Timeline years, nav links |

### The Light-Meets-Bold Move

The system's signature typographic gesture: **Satoshi 300 ultralight paired with Satoshi 700 bold within the same headline**, with the bold portion in `--blue-600` or `--blue-400` (on dark backgrounds) for emphasis.

```html
<h1 class="hero-headline">
  Designing for <strong>Scale.</strong><br/>
  Leading with <strong>Purpose.</strong>
</h1>
```

```css
.hero-headline { font-weight: 300; color: #fff; }
.hero-headline strong { font-weight: 700; color: var(--blue-400); }

.section-title { font-weight: 300; color: var(--text); }
.section-title strong { font-weight: 700; color: var(--accent); }
```

Use in: hero headlines, section titles, about headline, case study openers. Never mix all-bold headlines on the same page.

### Typography Rules

- `letter-spacing: -0.03em` on hero and section headline scale
- `letter-spacing: -0.02em` on card titles and h3
- `letter-spacing: .18em` on eyebrow labels (uppercase, very wide tracking)
- `letter-spacing: .12em` on tags and chips
- Minimum body text: **16px** (avoids iOS auto-zoom)
- Minimum rendered text: **11px** — only for non-essential micro labels
- Use `clamp()` for fluid headlines — never fixed `px` for `h1`/`h2`
- Line length: 65–75 chars for body (`max-width: 70ch`); 52–62ch for hero sub copy

---

## Spacing System

Based on **4pt grid**.

| Token | Value | Usage |
|-------|-------|-------|
| `--nav-height` | `64px` | Fixed nav reservation |
| 1 | `4px` | Icon gaps, micro spacing |
| 2 | `8px` | Tag gap, dot offsets |
| 3 | `12px` | Inline gaps |
| 4 | `16px` | Small component padding |
| 6 | `24px` | Container padding, card gap |
| 8 | `32px` | Card body padding, form gaps |
| 10 | `40px` | Section sub-spacing |
| 16 | `64px` | Section separation |
| 24 | `96px` | Section vertical padding |

Section padding: `clamp(4rem, 8vw, 6rem)` top and bottom.

---

## Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| `--radius-sm` | `2px` | Minimal — nav link hover bg |
| `--radius-md` | `6px` | Form inputs, small panels |
| `--radius-lg` | `10px` | Photo frames, resume block |
| `--radius-xl` | `16px` | **Case study cards** |
| `50px` | pill | Buttons, tags, nav CTA |
| `50%` | circle | Photo frames, timeline markers |

---

## Elevation / Shadow

| Token | Value | Usage |
|-------|-------|-------|
| `--shadow-xs` | `0 1px 3px rgba(0,0,0,.06)` | Default card resting state |
| `--shadow-sm` | `0 2px 8px rgba(0,0,0,.07), 0 1px 2px rgba(0,0,0,.04)` | Inputs, small panels |
| `--shadow-md` | `0 8px 24px rgba(0,0,0,.09), 0 2px 6px rgba(0,0,0,.05)` | Hover lifts, popovers |
| `--shadow-lg` | `0 20px 48px rgba(0,0,0,.12), 0 4px 12px rgba(0,0,0,.06)` | Card hover state |

> **Rule:** Use `transform: translateY(-4px)` for card hover lift — never change `margin` or `top`.

---

## Animation

### Timing Tokens

| Token | Value | Usage |
|-------|-------|-------|
| `--tr` | `150ms ease` | Micro-interactions (color, bg, border) |
| `--trs` | `300ms ease` | Card hover, theme toggle, mobile menu |
| `--ease-out` | `cubic-bezier(0.16, 1, 0.3, 1)` | Primary motion curve |
| Fade-in scroll | `0.6s var(--ease-out)` | `.fade-in` IntersectionObserver reveal |

### Rules

- Use `transform` and `opacity` only — never animate `width`, `height`, `top`, `left`
- Card hover lift: `translateY(-4px)`
- Button hover lift: `translateY(-1px)`
- Arrow indicators: `translateX(3px)` on hover
- CTA in cards: `translateX(3px)` on hover (horizontal directional cue)
- All animations: respect `prefers-reduced-motion`

---

## Component Inventory

### Navigation

- Fixed top bar: `64px` height, `rgba(8,17,28,.95)` bg (always dark, regardless of page theme)
- `backdrop-filter: blur(14px)` for frosted glass effect
- Brand: **wordmark only** — `Michelle DaSilva` in Satoshi 700, letter-spacing `.12em`, uppercase. No dot or icon mark.
- Desktop: horizontal nav links, uppercase, `.75rem`, color `rgba(255,255,255,.5)` → `.9` on hover/active
- Mobile (`<768px`): hamburger → slide-down overlay menu, same dark bg
- Theme toggle: 34×34px circle button, `rgba(255,255,255,.18)` border, sun/moon SVG icons
- Nav CTA: `Get in Touch` — pill border button in `--blue-400`, transitions to solid `--blue-700` on hover
- Skip link: visually hidden, visible on `:focus`

### Buttons

| Variant | Class | Style | Context |
|---------|-------|-------|---------|
| Primary (hero) | `.btn--primary` | White bg, `#08111c` text | Inside hero section only |
| Primary (page) | `.btn--primary` | `--blue-700` bg, white text | All in-page sections |
| Secondary (hero) | `.btn--secondary` | Transparent, `rgba(255,255,255,.25)` border | Inside hero section only |
| Secondary (page) | `.btn--secondary` | Transparent, `--gray-300` border, `--text` color | All in-page sections |
| Accent | `.btn--accent` | `--blue-700` bg, white text | Download, LinkedIn, submit |
| Full-width | `.btn--full` | `width: 100%`, centered | Contact form submit |

All buttons: `border-radius: 50px` (pill), `font-size: .75rem`, `font-weight: 600`, `letter-spacing: .08em`, `text-transform: uppercase`, min-height `44px`.

### Eyebrow Label (`.eyebrow`)

```css
font-family: var(--font-display);
font-size: .6875rem;
font-weight: 700;
letter-spacing: .18em;
text-transform: uppercase;
color: var(--blue-700);   /* light mode */
color: var(--blue-500);   /* dark mode */
```

Used above section titles and card headers to orient the reader. One eyebrow per section.

### Hero Node Network

The homepage hero uses a full-bleed SVG node-and-connection-graph pattern on `#08111c` background. Key specs:

- **Background:** `#08111c` — deep blue-black, not pure black
- **Overlay:** `linear-gradient(135deg, rgba(8,17,28,.88) 0%, rgba(8,17,28,.35) 55%, rgba(8,17,28,.78) 100%)` — ensures text legibility while preserving pattern depth
- **Node colors:** Primary nodes `#1A8FE3` (`--blue-600`), secondary nodes `#3AABF5` (`--blue-500`)
- **Connection lines:** `#1A8FE3` at `stroke-opacity: 0.2`, secondary cross-lines `#3AABF5` at `opacity: 0.07`
- **Ambient glow:** Two `radialGradient` ellipses — blue at `60%/28%` and lighter blue at `18%/72%`
- **Glow rings:** Two concentric rings on the primary anchor node at `opacity: 0.28` and `0.1`
- **White dots:** Small `opacity: 0.18` — endpoint nodes only
- **viewBox:** `0 0 1400 700`, `preserveAspectRatio="xMidYMid slice"`

### Case Study Cards (`.cs-card`) — Horizontal Split

The portfolio's primary unit. Replaces the previous vertical card grid.

**Layout:** Two-column grid, `grid-template-columns: 1fr 1fr`. Image fills one half, content fills the other. Alternating direction via `.cs-card--flip` (sets `direction: rtl` on the card, `direction: ltr` on children).

**Specs:**
- `border-radius: var(--radius-xl)` (16px)
- `border: 1px solid var(--border)`
- `min-height: 400px` desktop
- Hover: `translateY(-4px)` + `--shadow-lg`
- Background: `--white` / dark mode `--surface`

**Image panel background variants** (four blue shades, no other hues):

| Class | Value | Card |
|-------|-------|------|
| `.cs-card__image--blue-1` | `var(--blue-100)` `#E6F4FD` | Card 1 — lightest |
| `.cs-card__image--blue-2` | `var(--blue-200)` `#C8E8FC` | Card 3 — soft mid |
| `.cs-card__image--blue-3` | `#0d2640` | Card 2 — deep blue |
| `.cs-card__image--blue-4` | `var(--blue-900)` `#03233D` | Card 4 — darkest |

**Content anatomy:**
```
.cs-card__eyebrow   — Satoshi 700, .6875rem, --blue-700, letter-spacing .18em, uppercase
.cs-card__title     — Satoshi 700, clamp(1.5rem, 2.8vw, 2rem), --text, letter-spacing -.03em
.cs-card__desc      — Inter 400, clamp(.9rem, 1.4vw, 1.0625rem), --text-muted, line-height 1.7
.cs-card__tags      — Outlined pills, --gray-300 border, --gray-600 text
.cs-card__cta       — Inter 600, .875rem, white text, --blue-700 bg, 50px radius, hover darkens + translateX(3px)
```

**Tag style (`.cs-tag`):**
```css
border: 1px solid var(--gray-300);
color: var(--gray-600);
background: transparent;
border-radius: 50px;
font-family: var(--font-display);
font-size: .6875rem;
font-weight: 700;
letter-spacing: .12em;
text-transform: uppercase;
```

**Image fallback:** When project images don't load, shows italic Satoshi initials in `rgba(26,143,227,.3)` on the panel bg.

**Responsive:** Below `900px`, stacks to single column. `.cs-card--flip` reverts to normal direction. Image panel: `min-height: 240px`.

### Stats

| Context | Style |
|---------|-------|
| Hero stats | Satoshi 300, `clamp(1.5rem, 3vw, 1.875rem)`, white. `strong` inside = Satoshi 700, `--blue-400` |
| About stats | Satoshi 300, `1.75rem`, `--text`. `strong` inside = Satoshi 700, `--accent` |
| Section stats | Satoshi 300, large, `--blue-600`. Labels Satoshi 700 caps, `--text-muted` |

### Pull Quote (`.pullquote`)

```
.pullquote-mark   — Satoshi 700, .6875rem, --blue-600, letter-spacing .2em, uppercase
.pullquote-body   — Satoshi 300 italic, clamp(1.25rem, 2.5vw, 1.625rem), --text, letter-spacing -.025em
.pullquote-attr   — Inter 400, .8125rem, --text-muted. Name in Inter 600, --text
```

Centered, `max-width: 760px`. No border rule (v0.8 removes the clay left border).

### Timeline (`.timeline`)

- Left border `1px solid var(--border)` — vertical track
- Dot: `9px` circle, `--border` fill by default, `--blue-600` fill for current role
- Current company name color: `--accent` (`--blue-700`)
- Years: Inter 500, `.75rem`, uppercase, `--text-muted`

### Form

- Labels: Satoshi 700, `.6875rem`, letter-spacing `.14em`, uppercase
- Required `*`: `--blue-600`
- Input height: `min-height: 44px`
- Input radius: `var(--radius-md)` (6px)
- Focus: `border-color: var(--blue-600)`, `box-shadow: 0 0 0 3px var(--blue-100)`
- Error: `#A84A3C` border + message below field

### Footer

Always dark (`var(--hero-bg)` = `#08111c`), regardless of page theme. Brand mark: italic Satoshi `MD` in `rgba(58,171,245,.4)`. Social and back-to-top links in `rgba(255,255,255,.3)` → `--blue-500` on hover.

---

## Layout

### Breakpoints

| Label | Width | Behavior |
|-------|-------|----------|
| Desktop | `>1024px` | Full multi-column layouts |
| Tablet | `≤1024px` | Stacked about/split layouts |
| Card stack | `≤900px` | Horizontal cards stack to single column |
| Mobile | `≤768px` | Single column, hamburger nav |
| Small mobile | `≤480px` | Hero headline reduced, stats stack vertically |

### Grid Patterns

| Context | Desktop | Tablet | Mobile |
|---------|---------|--------|--------|
| About | `300px 1fr` | `240px 1fr` | `1-col` |
| Case study cards | `1fr 1fr` (horizontal split) | `1fr 1fr` | `1-col` |
| Experience | `1fr 1fr` | `1-col` | `1-col` |
| Contact | `1fr 1.5fr` | `1-col` | `1-col` |
| Education | `3-col` | `2-col` | `1-col` |

### Container

- `max-width: 1100px`, `margin: 0 auto`
- `padding-inline: clamp(1.25rem, 4vw, 2.5rem)`

---

## Imagery & Icons

- **Icon library:** Custom inline SVG (2px stroke, Lucide-style)
- **Icon sizes:** 14px (nav toggle), 16px (form, education headers), 18px (footer social)
- **No emoji** used as structural icons
- **Card image panels:** Real project screenshots load via `<img>` with `object-fit: cover`. `onerror` fallback shows italic Satoshi initials.
- **Hero photo:** `object-fit: cover`, warm filter removed

---

## Accessibility Standards

| Rule | Requirement |
|------|------------|
| Color contrast | 4.5:1 AA for body text |
| Focus rings | `border-color: var(--blue-600)` + `box-shadow: 0 0 0 3px var(--blue-100)` on inputs; `outline: 2px solid var(--blue-600)` on buttons |
| Skip link | Present, appears on keyboard focus |
| ARIA | `aria-label` on icon-only buttons, `aria-expanded` on nav toggle, `aria-required` on form fields |
| Form errors | `role="alert"` on error spans, `aria-live="polite"` on success |
| Reduced motion | `animation: none` / `0.01ms` for all transitions |
| Keyboard nav | Tab order matches visual order; Escape closes mobile menu |
| Screen reader | `aria-hidden="true"` on decorative SVGs, descriptive `alt` on meaningful images |

---

## Page-Specific Overrides

- **[pages/case-study.md](pages/case-study.md)** — Case study hero, cover gradients, phase tracker, outcome cards, persona blocks, pull quote, process steps. **Note:** case-study.md references the v0.7 palette (teal/sage/clay). Update those color references to the v0.8 blue system before building new case study pages.

---

## Migration History

### v0.8 — Current (2026-05-05)
- ✅ **Color system overhauled** — paper/ink/teal/sage/clay replaced with pure white/gray/blue
  - `--paper-*` → `--gray-*`
  - `--ink-*` → `--gray-*`
  - `--teal-*` → `--blue-*`
  - `--sage-*` **removed** — no replacement (no green in palette)
  - `--clay-*` **removed** — no replacement (no warm accent in palette)
- ✅ **Navigation** — clay dot brand mark removed; wordmark only
- ✅ **Case study cards** — vertical grid replaced with horizontal split layout (`1fr 1fr` per card, alternating flip). Four blue-shade image panels replace teal/sage/clay sector strips.
- ✅ **Eyebrow** — color updated from `--clay-500` to `--blue-700` (light) / `--blue-500` (dark)
- ✅ **Pull quote** — clay left border removed; centered editorial layout only
- ✅ **Timeline dot** — current role dot updated from `--clay-500` to `--blue-600`
- ✅ **Skill dots** — updated from `--clay-500` to `--blue-600`
- ✅ **Hero node network** — SVG palette updated to pure blue (`#1A8FE3`, `#3AABF5`)
- ✅ **Dark mode** — updated from warm ink-blue to pure blue-on-black

### v0.7 (2026-04-25)
- Satoshi + Inter typography (replaced Plus Jakarta Sans)
- Paper/ink/teal/sage/clay token system
- Horizontal case study phase tracker introduced
- Hero color panel pattern for case study heroes

### v0.6 and earlier
- Plus Jakarta Sans + Inter typography
- Cyan-blue accent (`#00959f`)
- Warm brown dark mode

---

## Do / Don't Quick Reference

| Do | Don't |
|----|-------|
| Use `--blue-700` as the primary CTA and eyebrow color | Use any other hue as an accent (no clay, teal, sage, green, orange, red) |
| Use Satoshi 300 + 700 contrast for hero and section headlines | Use a single weight throughout — kills the move |
| Keep `--blue-600` for stats, timeline dots, skill dots, focus rings | Overuse blue on large surface fills |
| Use `--gray-50` as the primary background | Use pure white `#fff` as the page background (too stark) |
| Use `--white` (`#fff`) only for card bodies and form inputs | Use paper/ink/clay/teal/sage token names — they are deprecated |
| Use `transform` for all motion | Animate `letter-spacing`, `width`, `height` |
| Keep `aria-label` on all icon-only interactive elements | Leave SVG-only buttons unlabeled |
| Use `dvh` with `vh` fallback | Use `vh` alone (breaks on mobile Safari) |
| Validate on blur; show errors inline | Show browser `alert()` for form errors |
| Keep the hero and footer always dark (`#08111c`) | Apply theme switching to the hero or footer |
| Use four blue shades for card image panels | Mix in any non-blue color for sector differentiation |
| Keep the nav always dark regardless of page theme | Switch the nav bg with the page theme toggle |

---

*This document is the Source of Truth for all design decisions. Page-specific overrides live in `design-system/pages/`.*
