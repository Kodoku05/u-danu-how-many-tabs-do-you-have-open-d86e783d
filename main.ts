import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";

// How many tabs do you have open? 366 — one tab for every day of a leap
// year, including 29 February. Surprising (far above the typical 47–137
// the field guesses, and one stranger than the 365 "year of tabs" entries),
// believable (a real tab hoarder's count, not a round shock number like
// 1000 or 9999), and it hints at a life behind it: a full leap year of
// unread tabs, one opened per day and never closed.
const COUNT = "366";
if (!/^[0-9]+$/.test(COUNT) || COUNT.length < 1 || COUNT.length > 5) {
  throw new Error("the entry must be a single number of 1 to 5 digits");
}
const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";

await mkdir(outputDir, { recursive: true });
await writeFile(join(outputDir, "entry.txt"), COUNT, "utf8");
