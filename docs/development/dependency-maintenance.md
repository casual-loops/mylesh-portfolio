# Dependency maintenance and security updates

Applies to the public portfolio in `casual-loops/mylesh-portfolio`. The deployment branch is `main`; Vercel publishes from that branch.

## Ownership and cadence

The repository maintainer owns dependency triage, testing, approval, deployment verification, and rollback. Dependabot opens weekly npm and GitHub Actions update PRs. Review alerts and PRs weekly, merge tested compatible changes on a monthly cadence, and assess major framework upgrades, Node.js support, and end-of-life dates quarterly. Security fixes may bypass the normal cadence based on exposure and urgency.

Dependabot groups compatible npm minor and patch **version** updates for review. Major upgrades are separate. GitHub security-update PRs and alerts should be reviewed independently, and must not be assumed to follow the grouping or weekly schedule.

## Local update procedure

1. Start from a clean, up-to-date `main` checkout and create a dedicated maintenance branch. Check `git status`, branch tracking, and active PRs. Keep feature/data-model changes out.
2. Use supported Node.js 24 and the npm version bundled with that runtime. Confirm with `node --version` and `npm --version`.
3. Inspect `package.json`, `package-lock.json`, `npm outdated`, `npm audit` and relevant upstream advisories. Assess Next.js advisories against the **resolved** version in the lockfile.
4. Apply intentional compatible changes with npm. Review major upgrades separately; never run `npm audit fix --force` as routine remediation.
5. Commit `package.json` and `package-lock.json` together whenever package resolutions change. Do not edit lockfile resolutions by hand.
6. Verify the following from a clean installation:

   ```sh
   npm ci
   npm run validate:operations
   npm run test:operations
   npm run lint
   npm run build
   npm audit --audit-level=high
   ```

7. Open a focused PR against `main`. Include the version changes, advisory references, migration notes, verification output, and risk/rollback plan.
8. Confirm GitHub Actions checks pass and review the Vercel preview before merging. Smoke test `/`, `/work`, `/work/infrastructure-lab`, `/work/tapestree`, `/work/domain-doctor`, `/about`, `/experience`, and existing case-study visuals. Verify responsive, keyboard, reduced-motion, and non-WebGL fallback states where affected.

`npm run lint` currently invokes `tsc --noEmit`; it does **not** run ESLint. Add a separate ESLint check only after configuration and compatibility have been deliberately introduced.

## Security triage and escalation

Record the advisory, affected installed versions, reachability/exposure, exploit evidence, fixed version, owner, and decision in the PR or related issue. Prioritize actively exploited and internet-exposed critical/high issues for immediate assessment and an expedited, focused PR. For other high findings, investigate promptly and document remediation or an explicit, justified temporary exception. Moderate/low findings enter weekly triage. Severity alone is not a substitute for checking actual applicability.

If a fix is blocked, document the reason, compensating controls, next review date, and intended target version. Do not suppress advisories silently. Check that dependency and repository security alerts are enabled in GitHub settings.

## Review and deployment gates

Require review of the manifest and lockfile diff, a successful Node 24 validation workflow, and a passing Vercel preview before merge. Configure branch rules in GitHub to require the `Node 24 validation` check and prevent bypass where the repository plan permits; merely having a CI workflow does not enforce branch protection. No automatic merge is enabled by this document.

After merge, confirm the production Vercel deployment is healthy and check key routes. If a regression is found, use the Vercel deployment rollback capability where available, or revert the responsible commit through a reviewed PR and deploy the known-good version. Verify the restored routes and record the incident. Do not assume reverting only `package.json` is sufficient: revert its corresponding lockfile changes too.

## Maintenance log

For each batch, record: date, package and version transitions, advisory or release links, validation results, preview/production verification, reviewer, and rollback reference. Maintain major-upgrade decisions separately from routine compatible updates.
