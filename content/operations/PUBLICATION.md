# Controlled publication of maintenance history

## Boundary

The portfolio consumes static JSON snapshots copied **only** from approved
[homelab-infrastructure public metrics](https://github.com/casual-loops/homelab-infrastructure/tree/main/operations/public-metrics).
It never queries private hosts, monitoring interfaces, guest APIs, backups, or collectors.
An upstream publication is not automatically reflected in this portfolio.

## Manual publication steps

1. Privately reconcile evidence, including APT transaction attribution and completion checks.
2. Publish reviewed allowlisted event JSON and schema upstream through the upstream review process.
3. On a portfolio feature branch, manually copy the reviewed public schema and records.
4. Update `content/operations/schema.ts` when the canonical schema adds fields; do not silently widen the public allowlist.
5. Add reviewed event imports to `lib/operations/history.ts`. Events are explicitly included, not discovered from untrusted paths during rendering.
6. Run `npm run validate:operations`, `npm run test:operations`, `npm run lint` and `npm run build`.
7. Inspect the diff manually for network details, internal identifiers, endpoints, software fingerprints, secrets, free text or inadvertently exposed topology.
8. Record the provenance and justification for any correction to existing historical records in the PR.
9. Merge the reviewed change only after validation. Automatic publishing is intentionally disabled.

## Reporting rules

- `outcome: completed` reports execution, not administrative closeout.
- `null` means unknown, not zero.
- Monitored hosts up is an observation, not uptime or availability.
- APT package totals are operations and may include unrelated date-scoped transactions. They are not distinct packages or security fixes.
- APT execution duration is cumulative transaction runtime, not elapsed wall-clock maintenance duration.
- `apt_systems_collected` describes event-specific APT collection coverage and excludes non-APT appliances.
- Archive counts are not restore tests.
- Orbital scene nodes represent categories and counts only, never actual host relationships.

## Handling corrections

Do not mutate an existing event without a reviewed correction. Document what changed, the public provenance and how any derived aggregates were affected. Preserve the prior version in Git history. Never publish raw supporting evidence into this repo.
