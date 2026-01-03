/**
 * Formats a date using UTC values to avoid timezone shifting issues.
 * YAML dates like "2015-05-02" are parsed as UTC midnight, so we use
 * UTC timezone to display the intended date regardless of local timezone.
 */
const dateFormat = (
  date: Date | string,
  pattern: string = "MMM d, yyyy",
): string => {
  const d = typeof date === "string" ? new Date(date) : date;

  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone: "UTC",
    day: pattern.includes("dd") ? "2-digit" : "numeric",
    month: pattern.includes("MMMM") ? "long" : "short",
    year: "numeric",
  });

  const parts = formatter.formatToParts(d);
  const get = (type: string) => parts.find((p) => p.type === type)?.value ?? "";

  const tokens: Record<string, string> = {
    dd: get("day"),
    d: get("day"),
    MMMM: get("month"),
    MMM: get("month"),
    yyyy: get("year"),
  };

  return pattern.replace(/dd|d|MMMM|MMM|yyyy/g, (match) => tokens[match]);
};

export default dateFormat;
