import { readdirSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import { validateMaintenanceEvents } from "../lib/operations/validate.ts";

const directory = resolve("content/operations/events");
const filenames = readdirSync(directory).sort();
if (!filenames.length) throw new Error("No reviewed public maintenance records found");
if (filenames.some((name) => !/^\d{4}-\d{2}-\d{2}\.json$/.test(name))) {
  throw new Error("Unexpected maintenance file; only YYYY-MM-DD.json is approved");
}
const records = filenames.map((name) => {
  const event = JSON.parse(readFileSync(resolve(directory, name), "utf8"));
  if (event.date !== name.slice(0, 10)) throw new Error(`Record date does not match filename: ${name}`);
  return event;
});
validateMaintenanceEvents(records);
console.log(`Validated ${records.length} reviewed maintenance record(s). Manual provenance and privacy review is still required.`);
