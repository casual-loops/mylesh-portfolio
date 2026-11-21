import type { MaintenanceEvent } from "@/content/operations/schema";
import { validateMaintenanceEvents } from "./validate";

/**
 * Historical activity counts are not uptime, fleet size or unique asset counts.
 * An unknown value stays unknown instead of silently becoming zero.
 */
export function aggregateMaintenanceEvents(inputs: readonly unknown[]) {
  const events: MaintenanceEvent[] = validateMaintenanceEvents(inputs);
  const observedSum = (select: (event: MaintenanceEvent) => number | null): number | null =>
    events.every((event) => select(event) !== null)
      ? events.reduce((sum, event) => sum + (select(event) ?? 0), 0)
      : null;

  return {
    eventCount: events.length,
    completedCount: events.filter((event) => event.outcome === "completed").length,
    administrativeCloseoutPendingCount: events.filter((event) => !event.validation.administrative_closeout_verified).length,
    guestRecoveriesObserved: observedSum((event) => event.validation.guests_recovered),
    obsoleteKernelsRemoved: observedSum((event) => event.maintenance.obsolete_kernels_removed),
    packagesUpgraded: observedSum((event) => event.maintenance.packages_upgraded),
    totalDurationMinutes: observedSum((event) => event.maintenance.maintenance_duration_minutes),
    verifiedRestoreTests: observedSum((event) => event.maintenance.restore_tests_verified),
  };
}
