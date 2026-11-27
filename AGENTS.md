# Portfolio Project Guide

## Purpose

Personal one-page portfolio built with Vite, Vanilla JavaScript, and CSS. The owner is the intended editor and publisher.

## Sources Of Truth

- `README.md`: setup, local use, and publication checklist
- `package.json`: runnable scripts and declared dependencies
- `bun.lock`: dependency lock; Bun is the canonical package manager

## Important Paths

- `src/main.js`: page content and behavior
- `src/scene.js`: hero three.js scene, loaded lazily; `src/cockpit.svg`: cockpit drawn in front of it
- `src/code.js` + `src/welcome.webp`: backdrop that fades in below the hero
- `vite.config.js` + `.github/workflows/deploy.yml`: Pages deploy; the workflow sets `BASE` from the repo name
- `src/style.css`: visual design and responsive styles
- `public/`: files copied directly to the build
- `dist/`: generated build output; never edit or commit it

## Commands

Run from the repository root:

- Install: `bun install --frozen-lockfile`
- Develop: `bun run dev`
- Build: `bun run build`
- Preview: `bun run preview`

There is no automated test or lint script. Do not claim those checks ran.

## Invariants And Boundaries

- Do not introduce npm, pnpm, or Yarn lockfiles while `bun.lock` is canonical.
- Keep `node_modules/` and `dist/` untracked.
- Preserve the existing framework-free structure unless a framework migration is explicitly requested.
- Treat personal profile text, contact details, and outbound links as owner-controlled content.
- Do not add analytics or external forms. Do not push, change remotes, or publish the site without approval; pushing `main` triggers the Pages deploy.

## Completion Checks

- Run `bun run build` after code or asset changes.
- For visual changes, inspect the affected desktop and mobile layouts when browser verification is available.
- Confirm Git contains no generated output or unintended lockfile changes.
