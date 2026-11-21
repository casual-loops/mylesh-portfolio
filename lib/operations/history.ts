import sourceEvent from "../../content/operations/events/2026-11-20.json";
import { aggregateMaintenanceEvents } from "./aggregate";
import { validateMaintenanceEvents } from "./validate";
import type { MaintenanceEvent } from "../../content/operations/schema";

/** Static reviewed snapshots only. Never fetch private infrastructure at runtime. */
const reviewedRecords: readonly unknown[] = [sourceEvent];

export function getMaintenanceHistory(): MaintenanceEvent[] {
  return validateMaintenanceEvents(reviewedRecords);
}

export function getMaintenanceSummary() {
  return aggregateMaintenanceEvents(reviewedRecords);
}
