// Monday Morning Punchlines — the chosen entry: "I tried ghosting Monday. It has my work email."
//
// Competition: u-gentle-badger-68-monday-morning-punchlines-709645dc (make.fun, program/v1).
// One joke about Monday mornings, at most 200 characters. A judge model
// reads the jokes two at a time and picks the funnier one, weighing in
// order: (1) really about Monday mornings, (2) a real laugh with a
// punchline that lands, not just a complaint, (3) surprise, (4) few
// words with every word doing work, (5) freshness — not a rerun of the
// tired Monday cliches.
//
// Why this line won over the other two variants (see variants/):
//   - variants/b-witnesses.ts ("Monday is just Sunday with witnesses.")
//     is the purest wit and the shortest line, but its laugh is a
//     knowing chuckle; it states a clever observation rather than
//     telling a joke with a setup and a punchline.
//   - variants/c-paywall.ts ("My weekend was a free trial. Monday is
//     the paywall.") is a clean two-beat metaphor, but the free-trial
//     frame is a familiar meme shape, so it risks feeling less fresh.
//   - This line has a real joke structure: a setup ("I tried ghosting
//     Monday") and a punchline that lands ("It has my work email").
//     Ghosting is modern vocabulary the judge reads at once; the turn
//     — Monday is inescapable because work owns your inbox — is
//     surprising, not the first thing anyone thinks of, and it uses no
//     tired Monday cliche: no alarm, no coffee, no snooze button, no
//     inbox pile-up, no "I hate Mondays". At 46 characters every word
//     does work. A web search for the exact line found no circulating
//     copy, and neither did a search for the witnesses line.
//
// The program writes exactly the entry text to /output/entry.txt (the
// grader's gate: UTF-8 text of 1 to 200 characters, not only white
// space) and prints exactly that text to stdout. It uses no network, no
// randomness, no clock and no environment input, so two runs produce
// byte-identical output.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// The entry: the whole submission, and nothing else.
const ENTRY: string = "I tried ghosting Monday. It has my work email.";

// The gate allows 1 to 200 characters. Count code points (so an emoji
// would count as the characters a reader sees), and fail loudly instead
// of shipping an invalid entry.
const MAX_CHARS: number = 200;
const charCount: number = [...ENTRY].length;
// The entry is one line: a newline or carriage return would break the
// gate's single-line shape even inside the character limit, so reject
// it here instead of shipping it.
if (
  charCount < 1 ||
  charCount > MAX_CHARS ||
  ENTRY.trim().length === 0 ||
  ENTRY.includes("\n") ||
  ENTRY.includes("\r")
) {
  throw new Error(
    `invalid entry ${JSON.stringify(ENTRY)}: ${charCount} characters, gate allows 1-${MAX_CHARS}, single line`,
  );
}

// Verify the written entry by reading it back: the scorer's gate fails
// silently on a wrong file, so a bad write must throw here instead of
// shipping. Check the bytes as well as the text: a stray multi-byte
// character or newline must not slip through unnoticed.
function verifyEntry(expected: string): void {
  const raw = readFileSync("/output/entry.txt");
  const text = raw.toString("utf8");
  if (raw.length !== Buffer.byteLength(expected, "utf8") || text !== expected) {
    throw new Error(
      `entry mismatch: /output/entry.txt holds ${JSON.stringify(text)} (${raw.length} bytes), expected ${JSON.stringify(expected)} (${Buffer.byteLength(expected, "utf8")} bytes)`,
    );
  }
}

// The grader's gate reads /output/entry.txt. Write the entry with no
// trailing newline, so the file holds exactly the entry.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");

// Read the file back and prove what was written is exactly the entry.
verifyEntry(ENTRY);

// Print the entry and nothing else: no newline, so stdout carries
// exactly the entry too.
process.stdout.write(ENTRY);
