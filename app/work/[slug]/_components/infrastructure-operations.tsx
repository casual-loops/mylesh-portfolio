import { getMaintenanceHistory, getMaintenanceSummary } from "@/lib/operations/history";
import MaintenanceTimeline from "./maintenance-timeline";

function Metric({ label, value, note }: { label: string; value: string; note: string }) {
  return (
    <div className="lab-metric">
      <span className="lab-metric-label">{label}</span>
      <strong>{value}</strong>
      <p>{note}</p>
    </div>
  );
}

export default function InfrastructureOperations() {
  const events = getMaintenanceHistory();
  const summary = getMaintenanceSummary();
  return (
    <div className="lab-history">
      <div className="lab-history-caption">
        <span>PUBLIC OPERATIONS HISTORY</span>
        <span>REVIEWED STATIC RECORDS · NOT LIVE TELEMETRY</span>
      </div>
      <div className="lab-metrics-grid" aria-label="Historical maintenance summary">
        <Metric label="Maintenance events" value={String(summary.eventCount)} note="Recorded historical activities" />
        <Metric label="Guest recoveries" value={summary.guestRecoveriesObserved === null ? "Unknown" : String(summary.guestRecoveriesObserved)} note="Observed successful guest returns, summed by event" />
        <Metric label="APT package upgrades" value={summary.packagesUpgraded === null ? "Unknown" : summary.packagesUpgraded.toLocaleString("en-US")} note="Recorded operations, not distinct packages" />
        <Metric label="Obsolete kernels removed" value={summary.obsoleteKernelsRemoved === null ? "Unknown" : String(summary.obsoleteKernelsRemoved)} note="Observed maintenance cleanup operations" />
      </div>
      <p className="lab-operations-disclaimer">
        Measurements are manually reviewed public snapshots, not an availability feed. Missing values remain unknown. Event completion and guest recovery are not evidence of uptime or successful restore testing.
      </p>
      <MaintenanceTimeline events={events} />
    </div>
  );
}
