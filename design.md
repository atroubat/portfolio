# Portfolio design system — locked (Hallmark)

Genre: **modern-minimal**. Theme: **Cobalt**. This file is the single source of truth for
every page. Redesign work on any route must read this file first and stay inside it.

## Genre & voice

SRE / platform-engineer portfolio — infra/dev-tool/technical register. Instrument-panel
feel: precise, quiet, engineered. Not editorial, not playful.

## Theme — Cobalt (replaces Starbucks)

Cool engineered near-white paper, one electric cobalt signal accent, tight radii, bordered
controls.

**Light mode**
- `--color-paper: oklch(98% 0.006 240)` — near-white canvas
- `--color-paper-2: oklch(95% 0.008 240)` — secondary surface
- `--color-ink: oklch(18% 0.012 240)` — primary text
- `--color-ink-2: oklch(38% 0.010 240)` — secondary text
- `--color-rule: oklch(88% 0.010 240)` — hairlines/borders
- `--color-accent: oklch(55% 0.19 255)` — electric cobalt signal
- `--color-focus: oklch(62% 0.20 255)` — focus ring

**Dark mode** (same hue 255, per Hallmark's dark-mode recipe: never switch hue)
- paper `oklch(14% 0.012 240)`, ink `oklch(94% 0.008 240)`, accent lightness +7%, chroma −0.03

**Radii**: 6px tight, everywhere (buttons, cards, inputs) — replacing Starbucks' rounder radii.

**Note**: dark-mode tokens are defined but there is no toggle UI in this project (confirmed
dormant `.dark` class, dead `showThemeToggle` prop) — out of scope for this redesign, do not add one.

## Typography (2+1 rule)

- **Display**: Space Grotesk Variable — headings, wordmark
- **Body**: Onest Variable (Fontshare-adjacent modern grotesk, fontsource-hosted) — Inter is
  banned by Hallmark's default list; General Sans (the original pick) has no self-hostable
  npm/fontsource package, so Onest is the substitute — same Geist-adjacent register
- **Mono/outlier**: JetBrains Mono Variable — already self-hosted in this project, reused as-is
- All font-family declarations self-hosted via `@fontsource-variable/*`, matching the
  project's existing convention. No Google Fonts `<link>`, no CDN.
- Heading weight 700, tracking −0.02em, body leading 1.6 (unchanged from current tokens).

## Spacing & motion — reused, unchanged

- Spacing: existing 4pt scale (`--space-0`…`--space-96`, `--space-section-sm/md/lg/xl`).
- Motion: existing `--transition-fast/normal/slow`, `--ease-default/out/spring`. No new
  motion system.

## Nav — N1b SaaS three-section (sitewide)

Wordmark left · centered 4–6-link cluster · CTA right. Frosts on scroll.
Implementation: `Header.astro` `shape="bar" variant="solid"` (existing scroll-reactive frost
behavior already matches this knob) on **every** layout — including Landing/404, which
currently use `shape="floating"` and must be switched to match. `showCta={true}`, label
"Me contacter", `href: '/contact'` or the site's actual contact anchor. Nav items sourced
from `getNavItems()` (site config), unchanged.

## Footer — Ft2 inline single line (sitewide)

Wordmark + tagline + tiny credit/copyright, hairline rule above, no columns. Every layout's
`Footer` call switches from `layout="simple"` to a matching inline-single-line configuration
(may require a small adjustment inside `Footer.astro` if `simple` doesn't collapse into a
true single line — check against the component-cookbook Ft2 spec before adding a new variant).

## Macrostructure families

- **Marketing** (`index`, `about`): Split Studio — diptych text/proof alternating.
- **Listing** (`blog/index`, `projects/index`): Portfolio Grid — card grid, keeps existing
  data-driven BlogCard/project-card rendering.
- **Document** (`blog/[...slug]`, `projects/[slug]`, `mentions-legales`): Long Document —
  single-column prose, no marketing chrome (already close to conformant, light touch).
- **404**: standalone, exempt from the shared families — its own centered treatment,
  restyled to Cobalt tokens only.

## Component-level rules (carried from the prior audit-fix pass, applied sitewide)

- No icon-in-a-box Card tiles for list-like content — use the divided-list pattern (icon
  inline-left of heading, hairline row dividers) established on the homepage.
- Portfolio Grid pages keep card grids (the macrostructure calls for cards) but drop any
  remaining double eyebrow-Badge-on-section-head pattern.
- No fabricated metrics, no re-drawn browser/IDE chrome, no italic headers.

## CTA voice

Direct, first-person-plural-free, French. "Me contacter" not "Nous contacter" (personal
site, one person). No hype adjectives ("révolutionnaire", "puissant").

## Stamp format

```
/* Hallmark · genre: modern-minimal · macrostructure: <name> · theme: cobalt · enrichment: <tier> · nav: N1b · footer: Ft2 */
```

## Export

`.hallmark/log.json` gets one combined entry after all 8 pages are redesigned, `"scope": "app"`.
