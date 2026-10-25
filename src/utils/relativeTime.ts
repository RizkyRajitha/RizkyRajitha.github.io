const formatter = new Intl.RelativeTimeFormat("en", { numeric: "always" });

const TIME_UNITS = [
    ["day", 86_400_000],
    ["hour", 3_600_000],
    ["minute", 60_000],
] as const;

// Whole calendar months from `from` to `to`, rounded toward zero.
function wholeMonthsBetween(from: Date, to: Date): number {
    let months =
        (to.getUTCFullYear() - from.getUTCFullYear()) * 12 +
        (to.getUTCMonth() - from.getUTCMonth());

    // Time elapsed within the month, so a partial last month isn't counted.
    const offsetInMonth = (d: Date) =>
        d.getTime() - Date.UTC(d.getUTCFullYear(), d.getUTCMonth());

    if (months > 0 && offsetInMonth(to) < offsetInMonth(from)) months--;
    if (months < 0 && offsetInMonth(to) > offsetInMonth(from)) months++;

    return months;
}

// Same output style as luxon's toRelative(), e.g. "3 months ago".
// Used both at build time and in the browser, so the two always agree.
export function formatRelative(date: Date, now: Date = new Date()): string {
    const months = wholeMonthsBetween(now, date);

    if (Math.abs(months) >= 12) {
        return formatter.format(Math.trunc(months / 12), "year");
    }
    if (months !== 0) {
        return formatter.format(months, "month");
    }

    const diff = date.getTime() - now.getTime();
    for (const [unit, ms] of TIME_UNITS) {
        if (Math.abs(diff) >= ms) {
            return formatter.format(Math.trunc(diff / ms), unit);
        }
    }
    return formatter.format(Math.trunc(diff / 1000), "second");
}
