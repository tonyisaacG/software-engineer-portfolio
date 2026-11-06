# Portfolio Section Plans — Editorial/Magazine Direction

Design language: editorial/magazine. Split layouts, oversized display typography,
numbered sections (01, 02, 03…), hairline rules, generous whitespace, subtle depth
(offset shadows, hover lifts, image treatments). Light default + dark theme via
existing CSS custom properties. No flat color blocks; texture comes from type,
rules, and spacing — not gradients or decoration.

Global rules for every section:
- Semantic HTML (`<section>` + `aria-labelledby`), `id` matching nav anchors.
- `scroll-margin-top` for sticky header offset.
- Responsive: stacked on mobile, split/asymmetric on ≥768px.
- All personal data lives in `src/app/core/data/profile.ts` (single source of truth).
- No invented claims; missing data renders as `[PLACEHOLDER]` or is hidden.

---

## 00. Design System Refresh (prerequisite)

- Update `_variables.scss`: add display font stack (e.g. a serif or condensed
  display face via system stack or Google Fonts — decide: self-host vs CDN).
- Extend `_themes.scss`: add `--color-accent-2`, `--color-rule` (hairline),
  `--shadow-lift` for hover depth.
- New `_utilities.scss` or extend `_global.scss`: `.section-number`,
  `.display-heading`, `.meta-label` (small caps eyebrow), `.rule` (hairline).
- Header restyle: thinner, rule-bottom, brand becomes name in display font;
  nav links get index numbers (01 About, 02 Experience…).

## 01. Hero (new — replaces bare About intro)

- Full-width editorial spread: oversized name in display font (clamp 3–6rem),
  headline beneath, meta row (location • focus • status).
- Right column or below: short lede paragraph + CTA row (CV download, GitHub,
  LinkedIn, email — only render links that exist).
- Optional: portrait/photo slot with offset frame (placeholder until photo
  provided). Keep it typographic if no photo.
- Micro-detail: blinking cursor or rotating word? Keep minimal — maybe a
  subtle "Currently" line instead.

## 02. About

- Two-column split: sticky left rail (section number "01", heading, small bio
  portrait or monogram) + right column prose.
- Sub-blocks as numbered subsections: Technical Focus (list with hairline
  separators, not cards), Interests (inline tag list, not pills-with-shadows),
  Philosophy (pull-quote style, larger italic/display type, left rule).
- Optional stats row ONLY if real numbers exist (years, projects shipped) —
  otherwise omit entirely.

## 03. Experience

- Editorial timeline: left column = year range in display font, right column =
  role, company, 2–3 bullet achievements, tech tags.
- Entries separated by hairlines; hover lifts the entry slightly.
- Each entry: `role — company`, dates, location optional.
- No fabricated metrics; bullets describe scope, not invented numbers.

## 04. Projects

- Alternating split layout per project (image/diagram left, text right, then
  flip) OR consistent grid with large index numbers (01, 02, 03).
- Each: name, one-line pitch, stack list, links (live demo / repo / case study).
- Featured project gets wider treatment; others compact.
- Image slot: screenshot or abstract diagram placeholder until assets exist.

## 05. Case Studies

- List-style index (like a magazine contents page): number, title, domain,
  year, arrow link.
- Each links to a detail page/section later; for now anchor or disabled.
- Optional: one featured case study with problem → approach → outcome
  three-column breakdown.

## 06. Writing

- Article index: date, title, reading time, tag.
- Empty state if no posts: "Essays on engineering practice — coming soon."
- No fake posts.

## 07. Contact / Footer

- Contact section: big display-font "Let's build something reliable." +
  email CTA (mailto only if real email provided) + social links row.
- Footer: name, dynamic year, social icons (inline SVG), small colophon
  ("Built with Angular").

## 08. Navigation Update

- Header nav becomes: 01 About · 02 Experience · 03 Projects · 04 Case Studies ·
  05 Writing · 06 Contact — all real anchors once sections exist.
- Active-section highlight via IntersectionObserver (optional, milestone 2).
- Mobile menu keeps current behavior, restyled to match editorial theme.

## Data file: `src/app/core/data/profile.ts`

```ts
export const profile = {
  name: '[PLACEHOLDER]',
  headline: 'Software Engineer — .NET & Backend Engineering',
  location: '[PLACEHOLDER]',
  email: '[PLACEHOLDER]',
  links: { github: '', linkedin: '', cv: '' },
  experience: [ /* { role, company, start, end, location, summary, highlights[], stack[] } */ ],
  projects: [ /* { name, pitch, stack[], links{}, featured? } */ ],
  caseStudies: [],
  articles: [],
};
```

## Implementation order (per milestone)

1. Design tokens + typography refresh + hero (v0.2)
2. About redesign (v0.2)
3. Experience section (v0.3)
4. Projects section (v0.3)
5. Case Studies + Writing (v0.4)
6. Contact + nav polish (v0.4)
