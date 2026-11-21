# Repository Agent Instructions

## Mission and scope

Maintain the public engineering portfolio at [mylesh.dev](https://mylesh.dev), in `casual-loops/mylesh-portfolio`. This is a **Next.js App Router application**, not a homelab management application. Keep work scoped to the user's requested issue or feature. Inspect the current repository state before suggesting code changes; never rely on an earlier conversation's branch or dependency state.

Read `README.md`, `package.json`, and the relevant existing components before implementation. Treat this file as guidance, not authorization to change production infrastructure, publish private data, merge PRs, or delete user work.

## Project architecture

- Framework: Next.js 16, React 19, TypeScript (strict). Match the versions actually installed and locked, not examples or assumptions.
- Routing and pages: `app/`, including `app/work/[slug]/page.tsx` and case studies under `app/work/[slug]/_components/`.
- Shared UI and motion: `components/`, Motion, Lucide React.
- Visual system: custom CSS in `app/globals.css`. Keep the dark, orbital, restrained design language; extend current conventions instead of introducing a competing styling framework.
- Editorial and project data: `content/site.ts`.
- SEO and social image: `lib/seo.ts`, `app/layout.tsx`, `app/opengraph-image.tsx`, `app/sitemap.ts`, and `app/robots.ts`.
- Deployment: GitHub to Vercel. `main` is the deployment branch.
- Existing portfolio GitHub contribution calendar is server-rendered. Its optional `GITHUB_ACTIVITY_TOKEN` belongs in local/Vercel environment configuration and must never be sent to a client component, committed, or echoed.

Prefer server components and static content when interactivity is unnecessary. Put `"use client"` only where browser interaction is required. Do not add a database, private API connection, monitoring endpoint, or telemetry collector for a static portfolio visualization.

## Change discipline and branch safety

1. Inspect `git status`, `git branch -vv`, and the merge base before modifying a local checkout.
2. Never delete a branch with unique commits or uncommitted work. Review differences first. Delete only explicitly identified obsolete local branches after merge verification; use `git branch -d` rather than force-deleting.
3. When a PR has been squash-merged, its old branch can appear unmerged to Git. Confirm the PR and compare effective changes before cleanup. Do not assume `git branch --merged` is sufficient.
4. Start new work from updated `main` where possible. Isolate maintenance/dependency updates from new features unless the user requests otherwise.
5. Do not automatically merge, deploy, force-push, rewrite shared history, remove remote branches, or change GitHub protections.
6. Keep changes small enough to review. Report exact files affected and any outstanding validation.
7. Do not claim local tests have run unless their output was actually observed.

For Infrastructure Operations, Slice 1 was merged through PR #16. The remaining feature work is on `feat/infrastructure-operations-visualizations`. The earlier `feat/infrastructure-operations` branch is historical, not the current implementation target. These branch names describe the state when this file was written; always verify the current branch and PR status before acting.

## Infrastructure Operations publication boundary

The Infrastructure Lab case study is at `/work/infrastructure-lab`.

- Canonical approved public source: `casual-loops/homelab-infrastructure/operations/public-metrics`.
- Portfolio copies: `content/operations/event.schema.json`, `content/operations/events/*.json`, and TypeScript contract `content/operations/schema.ts`.
- Read model and validation: `lib/operations/`.
- UI: `app/work/[slug]/_components/infrastructure-operations.tsx`, `maintenance-timeline.tsx`, and `infrastructure-scene.tsx`.
- Full publication procedure: `content/operations/PUBLICATION.md`.
- Local verification walkthrough: `docs/development/infrastructure-operations-local-testing.md`.

**Mandatory privacy and evidence rules:**

- Work from manually reviewed, explicitly allowlisted **static** public records. Do not read from or call live Proxmox, Checkmk, private endpoints, backups, guest agents, or collectors from the public site.
- Reject unknown JSON fields. Schema expansions require explicit review against the upstream publication contract. Do not paste raw logs, hostnames, guest IDs, IP addresses, port inventories, secrets, internal URLs, private topology, vulnerability findings, or detailed software fingerprints into this public repository.
- Never fabricate historical measurements or describe estimates as observations. `null` is unknown, never zero.
- `outcome: completed` does **not** mean administrative closeout or restore testing was verified.
- Point-in-time monitored-host observations are **not** uptime or availability.
- APT counts represent package **operations**, not distinct upgraded packages or security fixes. Collection may include unrelated transactions on the selected local dates.
- `apt_execution_duration_seconds` is cumulative transaction runtime, **not** wall-clock maintenance duration or downtime.
- `apt_systems_collected` is the event-specific APT collection count, not the overall system inventory.
- Visualizations must represent abstract categories, not real network relationships. Provide a readable text or static alternative to WebGL and respect reduced-motion preferences.
- Do not implement automatic public data publication unless explicitly authorized through a separately reviewed design.

## Code and user experience expectations

- TypeScript should remain strict. Favor explicit types for public data and validated external inputs.
- Preserve accessible semantic headings, labels, keyboard operation, focus indicators, and clear data units and limitations.
- Preserve mobile layouts, reduced-motion behavior, and non-WebGL fallbacks.
- Prefer existing CSS naming, React patterns, and components. Avoid unnecessary dependencies and large unrelated refactors.
- Keep the portfolio's narrative accurate: proposals and future work must not be presented as deployed capabilities.
- Avoid exposing environment variables, runtime configuration, or private service addresses through client components.
- For new historic event views, use one canonical validated record source for summaries, timelines, and visualizations.

## Dependencies, testing and deployment

Before changing dependencies, check `package.json`, `package-lock.json`, installed Node/npm versions, and `npm outdated` or security advisories. Commit manifest and lockfile changes together. Major version updates need compatibility review; do not use `npm audit fix --force` without explicit approval.

Required local checks for changes affecting the Infrastructure Operations feature:

```bash
npm ci
npm run validate:operations
npm run test:operations
npm run lint
npm run build
```

`npm run lint` currently runs `tsc --noEmit`; it is **not ESLint**. For changes elsewhere, run the available relevant checks and `npm run build`. Examine the actual installed scripts before invoking them. Perform a browser review on affected routes, including responsive, keyboard and motion/fallback states.

Any new npm dependency must have its resolved `package-lock.json` committed before a PR is proposed as ready. In particular, the Three.js dependency on the visualization branch requires local lockfile generation and verification.

Do not open a final feature PR or claim successful verification merely because code was pushed. Report blocked or unrun checks explicitly. Do not deploy or merge without the user's approval.

## Agent communication

Briefly state the intended change and the validation plan for substantial tasks. Surface relevant security, data-integrity and compatibility risks. At completion, report what changed, what was actually tested, what remains unverified, and the relevant branch or PR. Prefer precise evidence over optimistic completion claims.
