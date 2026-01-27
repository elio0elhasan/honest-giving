# Copilot Instructions for AI Agents

## Project Overview
- **Purpose:** Volunteer-driven platform for Ramadan iftar donations, intentionally minimal and non-commercial.
- **Ethical Boundaries:** No donation goals, progress bars, statistics, emotional manipulation, user accounts, tracking, or marketing. See README for full list.

## Architecture & Structure
- **Frontend:** React (TypeScript) with Vite, Tailwind CSS.
- **Entry Point:** `src/main.tsx` (mounts `App.tsx`)
- **Pages:** Located in `src/pages/` (e.g., `Donate.tsx`, `Transparency.tsx`, `Index.tsx`, `NotFound.tsx`).
- **Layout & Navigation:** Shared UI in `src/components/` (e.g., `Header.tsx`, `Footer.tsx`, `Layout.tsx`).
- **UI Primitives:** Reusable components in `src/components/ui/` (e.g., `button.tsx`, `form.tsx`, `input.tsx`).
- **Hooks & Utils:** Custom hooks in `src/hooks/`, utilities in `src/lib/utils.ts`.

## Developer Workflows
- **Install:** `bun install` (uses Bun for package management)
- **Dev Server:** `bun run dev` (starts Vite dev server)
- **Build:** `bun run build` (Vite production build)
- **Test:** `bun run test` (uses Vitest, see `src/test/`)
- **Lint:** `bun run lint`

## Project Conventions
- **No analytics, cookies, or user tracking.**
- **No user authentication or accounts.**
- **No marketing, popups, or social sharing.**
- **UI/UX:** Minimal, honest, and distraction-free. Avoid persuasive or gamified elements.
- **Component Pattern:** Prefer functional components, colocate styles (Tailwind), keep logic simple.
- **Routing:** Page components are mapped in the router (see `src/main.tsx`).

## Integration & External Dependencies
- **Tailwind CSS:** Configured via `tailwind.config.ts`.
- **Vite:** Main build tool (`vite.config.ts`).
- **No backend or API integration**—all logic is client-side.

## Examples
- To add a new page: create a file in `src/pages/`, add to router in `src/main.tsx`.
- To add a UI element: use or extend components in `src/components/ui/`.

## References
- See `README.md` for project philosophy and restrictions.
- See `package.json` for scripts and dependencies.
- See `tailwind.config.ts` for styling conventions.

---

**When in doubt, prioritize clarity, restraint, and user privacy.**
