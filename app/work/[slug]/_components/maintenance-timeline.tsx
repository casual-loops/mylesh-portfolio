"use client";

import { useState } from "react";
import { selectMaintenanceEvent } from "@/lib/operations/selection";
import type { MaintenanceEvent } from "@/content/operations/schema";
import InfrastructureScene from "./infrastructure-scene";

const formatCount = (value: number | null | undefined) => value == null ? "Not verified" : value.toLocaleString("en-US");
const dateLabel = (date: string) => new Intl.DateTimeFormat("en-US", {
  year: "numeric", month: "long", day: "numeric", timeZone: "UTC",
}).format(new Date(`${date}T12:00:00Z`));

export default function MaintenanceTimeline({ events }: { events: readonly MaintenanceEvent[] }) {
  const [selectedId, setSelectedId] = useState(events[events.length - 1]?.id ?? "");
  const selected = selectMaintenanceEvent(events, selectedId);

  if (!selected) return <p className="lab-empty">No reviewed maintenance records have been published.</p>;

  return (
    <div className="lab-history-detail">
      <div className="lab-history-selector">
        <h3>Maintenance timeline</h3>
        <p>Choose a published maintenance event to examine its observed outcomes.</p>
        <div role="group" aria-label="Maintenance events" className="lab-event-list">
          {[...events].reverse().map((event) => (
            <button
              key={event.id}
              type="button"
              className={`lab-event-button ${selected.id === event.id ? "is-selected" : ""}`}
              aria-pressed={selected.id === event.id}
              onClick={() => setSelectedId(event.id)}
            >
              <time dateTime={event.date}>{dateLabel(event.date)}</time>
              <span>{event.category.replaceAll("-", " ")} · {event.outcome.replaceAll("-", " ")}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="lab-history-results">
        <div className="lab-history-result-head">
          <div>
            <span>SELECTED MAINTENANCE RECORD</span>
            <h3>{dateLabel(selected.date)}</h3>
          </div>
          <span className="lab-outcome">{selected.outcome.replaceAll("-", " ")}</span>
        </div>
        <dl className="lab-history-facts">
          <div><dt>Systems maintained</dt><dd>{selected.systems.total}</dd></div>
          <div><dt>Guests recovered</dt><dd>{selected.validation.guests_recovered} / {selected.validation.guests_expected}</dd></div>
          <div><dt>Monitored hosts observed up</dt><dd>{selected.validation.monitored_hosts_up} / {selected.validation.monitored_hosts_observed}</dd></div>
          <div><dt>Package upgrades</dt><dd>{formatCount(selected.maintenance.packages_upgraded)}</dd></div>
          <div><dt>APT execution</dt><dd>{selected.maintenance.apt_execution_duration_seconds == null ? "Not recorded" : `${formatCount(selected.maintenance.apt_execution_duration_seconds)} cumulative seconds`}</dd></div>
          <div><dt>Restores verified</dt><dd>{formatCount(selected.maintenance.restore_tests_verified)}</dd></div>
          <div><dt>Overall maintenance duration</dt><dd>{selected.maintenance.maintenance_duration_minutes == null ? "Not recorded" : `${selected.maintenance.maintenance_duration_minutes} minutes`}</dd></div>
          <div><dt>Administrative closeout</dt><dd>{selected.validation.administrative_closeout_verified ? "Verified" : "Not verified"}</dd></div>
        </dl>
        <details className="lab-history-method">
          <summary>Measurement scope and limitations</summary>
          <p>Package totals count operations and may include transactions from other work on the same calendar dates. APT execution time is the sum of transaction runtimes, not elapsed maintenance time. Monitoring counts are point-in-time observations, not uptime.</p>
          <p>Missing or unverified data is never counted as zero. Neither guest recovery nor backup archive presence establishes a successful restore test.</p>
          <a href="https://github.com/casual-loops/homelab-infrastructure/tree/main/operations/public-metrics" target="_blank" rel="noopener noreferrer">Review public source records</a>
        </details>
        <InfrastructureScene event={selected} />
      </div>
    </div>
  );
}
