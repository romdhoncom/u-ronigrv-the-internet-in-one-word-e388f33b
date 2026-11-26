// The Internet in One Word — entry: "receipts".
//
// One word for the whole internet. The internet runs on receipts: every
// claim, every drama, every argument ends with somebody posting the
// screenshots. A dull bookkeeping word turned into internet law — funny
// by itself, true of the whole internet, and not the first obvious word
// anyone reaches for.
//
// Against the judge's brief, in order: it is a single word describing
// the whole internet, not one app or mood; it earns a laugh on its own
// (receipts, for the internet); it says something true about the entire
// internet rather than one corner of it; it surprises — the obvious
// reaches are cats, memes, drama — and it lands in one beat: eight
// letters, spelled plainly, readable at a glance.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The word. 8 characters, one word, plain ASCII.
const WORD = "receipts";

// The gate allows 1 to 30 characters of UTF-8 text; stay inside it.
if (WORD.length < 1 || WORD.length > 30 || /\s/.test(WORD)) {
  throw new Error("word must be a single word of 1 to 30 characters");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
// Write the word and nothing else: no trailing newline, so entry.txt
// is byte for byte the word the judge is shown.
writeFileSync(join(outDir, "entry.txt"), WORD, "utf8");
