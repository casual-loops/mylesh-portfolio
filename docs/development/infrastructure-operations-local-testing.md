# Infrastructure Operations: Local Verification

This feature extends the existing `/work/infrastructure-lab` case study. It uses only the static, reviewed JSON snapshots in `content/operations/events`.

## First checkout and dependency lockfile

The feature introduces Three.js and its TypeScript declarations. The GitHub connector could not resolve npm registry packages, so **the updated dependency lockfile must be generated locally before validation or opening the final PR**.

```powershell
git fetch origin
git switch --track origin/feat/infrastructure-operations-visualizations
npm install three@0.187.0
npm install --save-dev @types/three@0.187.0
npm ci
npm run validate:operations
npm run test:operations
npm run lint
npm run build
npm run dev
```

If the branch already exists locally, use `git switch feat/infrastructure-operations-visualizations` and `git pull --ff-only`. Review and commit `package-lock.json` after the installs. Do not force npm audit fixes or merge without successful validation.

## Browser walkthrough

Open `http://localhost:3000/work/infrastructure-lab`.

- [ ] Existing case study sections, navigation, fonts and design remain intact.
- [ ] Operational History is a new section between Operations and What it teaches me.
- [ ] Dashboard accurately displays one published event, 10 observed guest recoveries and 192 package upgrade operations.
- [ ] Administrative closeout remains pending and verified restores remain unknown.
- [ ] Timeline selection shows the November 20, 2026 historical record.
- [ ] APT transaction runtime is presented as cumulative seconds and is never labeled total maintenance duration.
- [ ] Breakdown lists installations, removals, purges, backups, systems collected and storage-integrity observations.
- [ ] Orbital nodes are abstract infrastructure categories. No live topology, network identifiers or private endpoints are shown.
- [ ] Orbit can be dragged with a pointer and rotated or paused using its control.
- [ ] With reduced motion enabled, the static visualization and category-count legend remain visible.
- [ ] With WebGL unavailable, the static fallback and category legend remain readable.
- [ ] At narrow viewport sizes (approximately 375px), cards stack and the event selector remains usable without body-wide horizontal scrolling.
- [ ] Keyboard focus is visible on timeline controls, comparison selectors and any scene controls.
- [ ] With an additional **reviewed** event added to the static import list, the comparison table becomes available; it does not invent deltas or treat unknown values as zero.
- [ ] Browser network inspector shows no calls to homelab management, monitoring, private APIs or collector endpoints.

## Final review

- [ ] Confirm published JSON and schema match the reviewed upstream source snapshots.
- [ ] Review every public-data change for sensitive information or inadvertent reconstruction of topology.
- [ ] Review the complete diff from current `main`.
- [ ] Confirm the lockfile is committed.
- [ ] Confirm no installation errors, hydration errors, React warnings or failed local tests.
- [ ] Only then open **one** final feature PR targeting `main`.

The old Slice 1 PR (#16) was merged. This branch is based on the post-merge `main` and intentionally has no new pull request yet.
