import eventSchema from "../../content/operations/event.schema.json" with { type: "json" };
import type { MaintenanceEvent } from "../../content/operations/schema.ts";

type SchemaNode = {
  type?: string | string[];
  const?: unknown;
  enum?: unknown[];
  pattern?: string;
  format?: string;
  minimum?: number;
  required?: string[];
  additionalProperties?: boolean;
  properties?: Record<string, SchemaNode>;
};

function isPlainObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null
    && !Array.isArray(value) && Object.getPrototypeOf(value) === Object.prototype;
}

function check(value: unknown, schema: SchemaNode, path: string): void {
  const allowedTypes = schema.type === undefined ? [] : Array.isArray(schema.type) ? schema.type : [schema.type];

  if (allowedTypes.length > 0 && !allowedTypes.some((type) =>
    type === "null" ? value === null :
    type === "object" ? isPlainObject(value) :
    type === "integer" ? typeof value === "number" && Number.isSafeInteger(value) :
    type === "string" ? typeof value === "string" :
    type === "boolean" ? typeof value === "boolean" : false
  )) {
    throw new Error(`${path}: invalid type`);
  }

  if ("const" in schema && value !== schema.const) throw new Error(`${path}: invalid constant`);
  if (schema.enum && !schema.enum.includes(value)) throw new Error(`${path}: invalid value`);
  if (schema.minimum !== undefined && typeof value === "number" && value < schema.minimum) {
    throw new Error(`${path}: below minimum`);
  }
  if (schema.pattern && typeof value === "string" && !new RegExp(schema.pattern).test(value)) {
    throw new Error(`${path}: invalid format`);
  }
  if (schema.format === "date" && typeof value === "string") {
    const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value);
    const timestamp = match ? Date.parse(value + "T00:00:00.000Z") : NaN;
    if (!match || !Number.isFinite(timestamp) || new Date(timestamp).toISOString().slice(0, 10) !== value) {
      throw new Error(`${path}: invalid calendar date`);
    }
  }

  if (isPlainObject(value) && schema.properties) {
    for (const field of schema.required ?? []) {
      if (!Object.hasOwn(value, field)) throw new Error(`${path}.${field}: missing required field`);
    }
    for (const [key, child] of Object.entries(value)) {
      const childSchema = schema.properties[key];
      if (!childSchema) {
        if (schema.additionalProperties === false) throw new Error(`${path}.${key}: unapproved field`);
        continue;
      }
      check(child, childSchema, `${path}.${key}`);
    }
  }
}

/** Fail closed: unknown fields, bad types and inconsistent observed counts are rejected. */
export function validateMaintenanceEvent(input: unknown): MaintenanceEvent {
  check(input, eventSchema as SchemaNode, "event");
  const event = input as MaintenanceEvent;
  if (event.id !== `maintenance-${event.date}`) throw new Error("event.id must match event.date");
  const { systems, validation } = event;
  if (systems.total !== systems.hypervisors + systems.virtual_machines + systems.containers) {
    throw new Error("systems.total must equal the sum of infrastructure classes");
  }
  if (validation.guests_recovered > validation.guests_expected) {
    throw new Error("guests_recovered exceeds guests_expected");
  }
  if (validation.monitored_hosts_up > validation.monitored_hosts_observed) {
    throw new Error("monitored_hosts_up exceeds monitored_hosts_observed");
  }
  return event;
}

/** IDs and dates are unique. Returns chronological records without mutating inputs. */
export function validateMaintenanceEvents(inputs: readonly unknown[]): MaintenanceEvent[] {
  const events = inputs.map(validateMaintenanceEvent);
  if (new Set(events.map((event) => event.id)).size !== events.length
    || new Set(events.map((event) => event.date)).size !== events.length) {
    throw new Error("duplicate maintenance event ID or date");
  }
  return events.sort((a, b) => a.date.localeCompare(b.date));
}
