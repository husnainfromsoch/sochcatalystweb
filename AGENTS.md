<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Guidance for AI coding assistants

Orientation for AI assistants (Claude Code, Cursor, etc.) working in this repo.
Humans should read `README.md` first. The block above is auto-managed by the
Next.js tooling — leave it intact.

## What this is

A static marketing site for **Soch Catalyst**, a LinkedIn growth agency for B2B
founders & CEOs. No backend, database, or auth — just content-driven pages.
**Stack:** Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4, Motion
(on-scroll reveals).

## Where things live

- `lib/content.ts` — **single source of truth for all copy**: services, stats,
  testimonials, nav, FAQs, site config. Prefer editing content here over hardcoding
  strings in components.
- `app/*/page.tsx` — one route per folder (`/`, `about`, `audit`, `book`,
  `services`). Pages compose section components.
- `components/` — section components (`Hero`, `ServicesGrid`, …) and `ui/`
  primitives (`Button`, `Section`, `Reveal`). Icons are inline SVGs via
  `components/Icons.tsx` (`<Icon name="..." />`).
- `app/globals.css` — Tailwind v4 `@theme` block defines all design tokens
  (`--color-brand`, `--color-ink`, etc.). There is **no `tailwind.config.js`**;
  colours/utilities come from `@theme`. The `@/` import alias maps to the repo root.

## Conventions to follow

- **Content vs. structure:** new copy → `lib/content.ts`; new markup → a component.
- **Styling:** Tailwind utility classes with the project's custom tokens (`bg-brand`,
  `text-ink`, `bg-mist`, `border-line`, …). Match the existing className style; don't
  introduce CSS modules or inline `style` unless mirroring existing usage.
- **Client components:** add `"use client"` only when a component needs
  interactivity/hooks (e.g. `SchedulerEmbed`, Motion reveals). Default to server
  components.
- **Booking:** the scheduler reads `NEXT_PUBLIC_SCHEDULER_URL` (env). When unset, a
  fallback card renders — keep that fallback working.

## House rules

- Keep changes surgical: touch only what the task needs; don't refactor or reformat
  adjacent code. Match existing style.
- Don't replace the placeholder testimonials/logos/stats/logo with invented "real"
  content — they're deliberately fake and owned by the client.
- Verify before claiming done: `npm run lint` and `npm run build` should pass.
