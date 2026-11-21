# Infrastructure Lab: Public Operations History

This is a **reviewed static snapshot** of the existing public publication contract maintained in
[casual-loops/homelab-infrastructure](https://github.com/casual-loops/homelab-infrastructure/tree/main/operations/public-metrics).

## Source and provenance

- Canonical schema: [event.schema.json](https://github.com/casual-loops/homelab-infrastructure/blob/main/operations/public-metrics/event.schema.json)
- First source record: [November 20, 2026](https://github.com/casual-loops/homelab-infrastructure/blob/main/operations/public-metrics/events/2026-11-20.json)
- Local source snapshot: `event.schema.json` and `events/2026-11-20.json`
- Every numeric value is a sanitized **observed count**, not a live query, extrapolation or independent verification by the portfolio.
- `null` means not recorded or independently verified. It never means zero.
- `outcome: completed` describes the maintenance work and is **not** confirmation of administrative closeout, restore testing or uptime.

## Publication and correction process

1. Review primary evidence privately and approve a sanitized public event in the source repository.
2. Copy **only** approved schema fields and reviewed event JSON into this portfolio repository.
3. Run `npm run test:operations`, `npm run lint` and `npm run build`.
4. Review the diff for inadvertent topology, identifiers, addresses, endpoints, sensitive descriptions, logs, fingerprints or secrets.
5. Publish via a reviewed PR; do not automatically synchronize the public repository or connect the site to private infrastructure.
6. Preserve historical events; any correction must be an explicit, documented change through code review.

This snapshot does not contain a live host inventory and must never be presented as a live operational feed. Point-in-time monitoring health does not measure availability or uptime.
