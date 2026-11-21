import assert from "node:assert/strict";
import { test } from "node:test";
import { readFileSync } from "node:fs";
import { selectMaintenanceEvent } from "../../lib/operations/selection.ts";
import { validateMaintenanceEvents } from "../../lib/operations/validate.ts";

const original = JSON.parse(readFileSync(new URL("../../content/operations/events/2026-11-20.json", import.meta.url), "utf8"));
const earlier = structuredClone(original);
earlier.id = "maintenance-2026-11-19";
earlier.date = "2026-11-19";
earlier.systems = { total: 3, hypervisors: 1, virtual_machines: 1, containers: 1 };
const events = validateMaintenanceEvents([original, earlier]);

test("selects the exact published historical event", () => {
  assert.equal(selectMaintenanceEvent(events, earlier.id)?.date, "2026-11-19");
});

test("falls back to latest record for unknown selection", () => {
  assert.equal(selectMaintenanceEvent(events, "missing")?.id, original.id);
});

test("handles empty history without fabricating an event", () => {
  assert.equal(selectMaintenanceEvent([], ""), undefined);
});
