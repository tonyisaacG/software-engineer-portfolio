<<<<<<< HEAD
# Software Engineer Portfolio

A professional, minimal portfolio built with Angular. Currently at milestone v0.1:
global layout, responsive header, light/dark themes, and the About section.

## Tech stack

- Angular 21 (standalone components, signals)
- TypeScript (strict)
- SCSS with CSS custom properties for theming
- Angular Router

## Prerequisites

- Node.js LTS (developed on Node 22)
- npm 10+

## Setup

```bash
npm install
npm start
```

Then open http://localhost:4200/.

## Build

```bash
npm run build
```

Production output is written to `dist/portfolio/`.

## Theming

Light and dark themes are driven by CSS custom properties in
`src/styles/_themes.scss`. The active theme is stored in `localStorage`
(`portfolio-theme`) and falls back to the OS `prefers-color-scheme` preference.
Toggle it with the header button.

## Project structure

```text
src/
├── app/
│   ├── core/services/theme.service.ts
│   ├── shared/components/{header,footer}/
│   ├── features/about/
│   ├── app.ts / app.html / app.scss
│   ├── app.config.ts
│   └── app.routes.ts
├── styles/
│   ├── _variables.scss
│   ├── _themes.scss
│   ├── _mixins.scss
│   └── _global.scss
└── styles.scss
```

## Roadmap

Future milestones will add Experience, Projects, Case Studies, Writing, and
Contact sections. Navigation items for unimplemented sections are rendered as
disabled placeholders and do not link anywhere.
=======
# software-engineer-portfolio
My professional software engineering portfolio
>>>>>>> 84a8e9b9c085eaa6cf37877dc9e2fd26ee06e143
