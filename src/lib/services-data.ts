export const SERVICE_IDS = [
  "filtered-water",
  "sparkling",
  "delivery",
  "bottles",
  "subscription",
  "home-filters",
] as const;

export type ServiceId = (typeof SERVICE_IDS)[number];

export function isValidServiceId(id: string): id is ServiceId {
  return (SERVICE_IDS as readonly string[]).includes(id);
}
