/**
 * Portfolio read model for the reviewed public-metrics publication contract.
 * The canonical field allowlist is content/operations/event.schema.json.
 * Do not add internal infrastructure identifiers or free-text exports.
 */
export type MaintenanceCategory =
  | "scheduled-maintenance"
  | "emergency-maintenance"
  | "routine-maintenance";

export type MaintenanceOutcome =
  | "completed"
  | "partially-completed"
  | "rolled-back"
  | "failed";

export interface MaintenanceEvent {
  schema_version: 1;
  id: string;
  date: string;
  category: MaintenanceCategory;
  outcome: MaintenanceOutcome;
  systems: {
    total: number;
    hypervisors: number;
    virtual_machines: number;
    containers: number;
  };
  validation: {
    guests_expected: number;
    guests_recovered: number;
    monitored_hosts_observed: number;
    monitored_hosts_up: number;
    service_warnings: number;
    service_unknown: number;
    service_critical: number;
    storage_integrity_errors: number;
    scheduled_log_rotation_succeeded: boolean | null;
    administrative_closeout_verified: boolean;
  };
  maintenance: {
    obsolete_kernels_removed: number;
    guest_backup_archives_observed: number;
    restore_tests_verified: number | null;
    packages_upgraded: number | null;
    maintenance_duration_minutes: number | null;
    packages_installed?: number | null;
    packages_removed?: number | null;
    packages_purged?: number | null;
    apt_execution_duration_seconds?: number | null;
    apt_systems_collected?: number | null;
  };
}
