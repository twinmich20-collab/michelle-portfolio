# Page Override — Case Study Pages
**Version:** v0.7 · **Last Updated:** 2026-04-25
**Inherits from:** [../MASTER.md](../MASTER.md) · Rules here take precedence over Master.

---

## Layout Overrides

- Hero padding: `calc(var(--nav-height) + 64px) 0 80px` (taller offset for full-nav clearance)
- Body sections: `72px 0` vertical padding (vs Master's `96px`) — shorter for denser reading
- Cover strip: `400px` desktop / `240px` mobile
- Section dividers: `border-bottom: 1px solid var(--ink-100)`
- Alt sections: `background-color: var(--paper-50)`

---

## Typography Overrides

| Element | Size | Notes |
|---------|------|-------|
| CS Hero Title | `clamp(2rem, 5vw, 3.25rem)` | Satoshi 300/700 mix — light-meets-bold move applies |
| CS Section Title | `clamp(1.4rem, 3vw, 1.9rem)` | Satoshi 500, section sub-headers |
| CS Body Text | `1rem / 1.65` line-height | Inter, slightly looser than homepage for long-form readability |
| CS Lede | `1.0625rem / 1.4` | Satoshi 300 italic — opens the case study, sits below hero |
| CS Outcome Value | `2.5rem 700` Satoshi | Large stat callout — uses `--teal-500` |
| CS Pull Quote | `2rem 300 italic` Satoshi | The structural breathing device |

> **CS hero applies the light-meets-bold move.** One word in the headline goes 700 weight in `--teal-700`; rest stays 300. Reserved for the hero — section titles use a single weight.

---

## Component Overrides

### CS Hero — Light Mode (default)

The case study hero combines the editorial title with a color anchor panel.

- **Layout:** `grid-template-columns: 1fr 320px` — title/lede on left, gradient panel on right
- **Title:** Satoshi 300/700 mix at `clamp(40px, 7vw, 96px)`, letter-spacing `-0.05em`
- **Lede:** Satoshi 300 italic at 22px in `--ink-600`
- **Panel:** Gradient `linear-gradient(135deg, var(--teal-700) 0%, var(--teal-500) 50%, var(--sage-500) 100%)`, holds the headline outcome stat
- **Panel stat:** Satoshi 300 at 56px on `--paper-0`, with optional 700-weight emphasis
- **Panel CTA:** Inline, top-bordered, with arrow indicator
- **Mobile:** Panel stacks below lede

> The hero panel is a one-per-page moment. Don't repeat the gradient elsewhere in the case study — its job is to anchor the opening, not to decorate.

### CS Hero — Dark Mode

When user has flipped to dark mode, the hero becomes the dark slab variant:

- Background: `--ink-900`
- Title: `--paper-0` with `--teal-200` for emphasized words
- Faint `--clay-500` radial glow in top-right corner (opacity 0.18)
- No color panel (the dark slab is itself the visual anchor)

### Outcome Cards (`.cs-outcome`)

- `border-top: 3px solid` — color rotates by `nth-child`:
  - `1n+1`: `--teal-700` (fintech / primary)
  - `2n+2`: `--sage-700` (pharma / secondary)
  - `3n+3`: `--clay-700` (banking / accent)
- Padding: `28px 24px`
- Value: Satoshi 300 at `2.5rem` in `--teal-500`
- Label: Satoshi 700 caps, `--ink-400`, tracking 0.2em

> **Color cycle changed in v0.7.** Was `accent → teal → purple`. Now uses sector palette (teal/sage/clay) so outcome cards reinforce sector identity rather than introducing phase-palette colors that belong to process diagrams.

### Callout Block (`.cs-callout`) — Editorial moment

The signature callout — used 1–2 times per case study for emphasis.

- Left border: `3px solid var(--clay-500)` (was `--accent` — now uses signature clay per the "Restraint with one risk" principle)
- Background: `var(--paper-50)`
- Text: Satoshi 300 italic at `1.125rem / 1.65`
- Optional eyebrow above: `--clay-500`, Satoshi 700 caps, e.g., "Key insight"

### Pull Quote (`.cs-pullquote`)

For interview-driven moments inside a case study. Inherits `.pullquote` from MASTER.md with case-study-specific spacing.

- Left border: `3px solid var(--clay-500)`
- Padding-left: `32px`, max-width: `800px`, centered
- Eyebrow above: `--clay-500`, Satoshi 700 caps, tracking 0.2em (e.g., "From the research")
- Quote: Satoshi 300 italic at 32px, letter-spacing `-0.025em`, color `--ink-900`
- Attribution: Satoshi 700 name + Inter role, `--ink-600`

### Persona Block (`.cs-persona`)

For research-driven case studies (SecureAccess, Patient Onboarding, etc.). Inherits `.persona` from MASTER.md.

- Two-column grid: `200px portrait | 1fr body`
- Portrait: gradient block, `64px` Satoshi 300 initials in `--paper-0`
  - Persona 1: `linear-gradient(135deg, var(--teal-700), var(--teal-500))`
  - Persona 2: `linear-gradient(135deg, var(--sage-700), var(--sage-500))`
  - Persona 3 (if used): `linear-gradient(135deg, var(--clay-700), var(--clay-500))`
- Body: eyebrow (`--clay-500`) → Satoshi 700 name → Inter role → italic Satoshi quote with clay rule → tag attributes
- Mobile: stacks to single column, portrait padding becomes `48px`

> Limit personas to 3 per case study. More than that turns research into inventory.

### Cover Gradient Palette

**Updated to align with sector colors.** Each gradient now reinforces the case study's sector identity (matches the card sector strip and icon).

| Sector | Class | Gradient |
|--------|-------|----------|
| Fintech | `cs-cover--fintech` | `--teal-900 → --teal-700 → --teal-500` |
| Pharma | `cs-cover--pharma` | `--sage-900 → --sage-700 → --sage-500` |
| Banking | `cs-cover--banking` | `--clay-700 → --clay-500 → --clay-300` |
| Generic | `cs-cover--ink` | `--ink-900 → --ink-800 → --teal-700` (fallback / dark statement) |

Grid overlay: `opacity: 0.08` for texture (preserved from previous system).

> **Migration note:** Old class names `cs-cover--1` (navy), `cs-cover--2` (forest), `cs-cover--3` (indigo) are deprecated. Existing case studies should be updated to use sector-aligned classes. The old gradients introduced colors outside the system palette — the new ones tie cover, card strip, and icon together as a single sector signal.

### Process Steps (`.cs-process-step`)

**Phase palette preserved.** Process diagrams need multi-color sequential differentiation — this is functionally distinct from sector branding.

- Step number color cycle: `--phase-teal → --phase-amber → --phase-purple → --phase-pink`
- Number sizing/weight: per Master

### Stat Callouts (within case study body)

For inline metrics in the middle of a case study (vs. the outcome grid at the end):

- Use `.stats` component from Master (hairline-bordered grid)
- Values: `--teal-500`, Satoshi 300 at `56px`
- Labels: Satoshi 700 caps in `--ink-400`
- Reserve for 3–4 key metrics — more dilutes impact

---

## Navigation

- Back link: `.cs-back` — Satoshi 500 in `--ink-600`, hover to `--teal-700`, chevron-left icon (16px, 2px stroke)
- Case study nav footer: prev/next links with direction labels (`PREV CASE` / `NEXT CASE` in eyebrow style above the title)
- Password gate: `auth.js` — gates content until correct password entered

## NDA Indicator

All project cards (homepage and case study index) show a lock icon (16px, `--ink-400`) preceding the title to indicate confidential content. On the protected case study page itself, an NDA tag (`tag--neutral` with lock icon) appears in the hero meta row.

---

## Page Composition Pattern

Recommended section order for a complete case study:

1. **Hero** — title + lede + color panel + meta row (role / sector / timeline / outcome)
2. **Cover strip** — sector-aligned gradient with project name (optional, used for visual transition)
3. **Context** — the problem space, prose body
4. **Research** — persona blocks (1–3), pull quotes from interviews
5. **Process** — process steps with phase-palette numbering
6. **Solution** — screen showcases, design rationale
7. **Outcome cards** — the "did it work?" moment, sector-cycled border colors
8. **Callout** — one editorial moment near the end (clay rule)
9. **Reflection** — Inter prose, lessons learned
10. **Nav footer** — prev/next case studies

Not every case study needs every section. Pick the 6–7 that serve the narrative.

---

## Migration History

### v0.7 — Current (2026-04-25)
- ✅ Hero color panel pattern documented (matches `style.css` Stage 3 implementation)
- ✅ Cover gradients re-aligned to sector palette (teal/sage/clay) — old navy/forest/indigo deprecated
- ✅ Outcome card color cycle updated to sector palette (was accent/teal/purple)
- ✅ Callout block now uses `--clay-500` (was `--accent`) per the signature accent rule
- ✅ Persona block and pull quote documented as case study patterns
- ✅ Page composition pattern added

### v0.6 and earlier
- Cover gradients used standalone palette (navy/forest/indigo)
- Outcome cards cycled accent/teal/purple
- Callout used `--accent` border + `--accent-glow` bg

---

*Page-specific patterns. For tokens, typography, and global components, see [MASTER.md](../MASTER.md).*
