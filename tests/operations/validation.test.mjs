import assert from "node:assert/strict";
import { test } from "node:test";
import { readFileSync } from "node:fs";
import { validateMaintenanceEvent, validateMaintenanceEvents } from "../../lib/operations/validate.ts";
import { aggregateMaintenanceEvents } from "../../lib/operations/aggregate.ts";

const recorded = JSON.parse(readFileSync(new URL("../../content/operations/events/2026-11-20.json", import.meta.url), "utf8"));
const copy = () => structuredClone(recorded);

test("accepts the canonical, reviewed public record", () => {
  assert.deepEqual(validateMaintenanceEvent(copy()), recorded);
  assert.equal(recorded.validation.administrative_closeout_verified, false);
  assert.equal(recorded.maintenance.packages_upgraded, null);
});

test("rejects unexpected top-level and nested fields", () => {
  const top = copy(); top.internal_hostname = "private";
  assert.throws(() => validateMaintenanceEvent(top), /unapproved field/);
  const nested = copy(); nested.systems.internal_address = "private";
  assert.throws(() => validateMaintenanceEvent(nested), /unapproved field/);
});

test("rejects invalid values and missing fields", () => {
  const invalid = copy(); invalid.systems.total = -1;
  assert.throws(() => validateMaintenanceEvent(invalid), /below minimum/);
  const missing = copy(); delete missing.validation.service_critical;
  assert.throws(() => validateMaintenanceEvent(missing), /missing required/);
  const impossible = copy(); impossible.date = "2026-11-31"; impossible.id = "maintenance-2026-11-31";
  assert.throws(() => validateMaintenanceEvent(impossible), /calendar date/);
});

test("rejects inconsistent totals and mismatched identifiers", () => {
  const inconsistent = copy(); inconsistent.systems.total = 999;
  assert.throws(() => validateMaintenanceEvent(inconsistent), /sum/);
  const unmatched = copy(); unmatched.id = "maintenance-2026-11-19";
  assert.throws(() => validateMaintenanceEvent(unmatched), /must match/);
  const recovered = copy(); recovered.validation.guests_recovered = 11;
  assert.throws(() => validateMaintenanceEvent(recovered), /exceeds/);
  const monitored = copy(); monitored.validation.monitored_hosts_up = 13;
  assert.throws(() => validateMaintenanceEvent(monitored), /exceeds/);
});

test("rejects duplicate records and sorts distinct events", () => {
  assert.throws(() => validateMaintenanceEvents([copy(), copy()]), /duplicate/);
  const earlier = copy(); earlier.id = "maintenance-2026-11-19"; earlier.date = "2026-11-19";
  assert.deepEqual(validateMaintenanceEvents([copy(), earlier]).map((event) => event.date), ["2026-11-19", "2026-11-20"]);
});

test("aggregates observed counts without inventing unknown measurements", () => {
  const summary = aggregateMaintenanceEvents([copy()]);
  assert.equal(summary.eventCount, 1);
  assert.equal(summary.completedCount, 1);
  assert.equal(summary.administrativeCloseoutPendingCount, 1);
  assert.equal(summary.guestRecoveriesObserved, 10);
  assert.equal(summary.packagesUpgraded, null);
  assert.equal(summary.totalDurationMinutes, null);
  assert.equal(summary.verifiedRestoreTests, null);
});
