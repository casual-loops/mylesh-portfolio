import type { MaintenanceEvent } from "../../content/operations/schema.ts";

/** Deterministic event selection, including when events are added or removed. */
export function selectMaintenanceEvent(events: readonly MaintenanceEvent[], selectedId: string): MaintenanceEvent | undefined {
  return events.find((event) => event.id === selectedId) ?? events[events.length - 1];
}
