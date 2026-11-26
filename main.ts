// The Internet in One Word — make.fun entry
// One word that describes the whole internet: "actually" — the word
// the internet says most. Every thread is someone correcting someone
// else, every take opens with it, every argument is settled by it.
// The joke is the word itself: the reader hears the pedant's voice
// before finishing it. It is funny by itself (no explanation needed),
// true of the whole internet rather than one app, surprising (not
// "chaos" or "memes"), and it lands in one beat. Writes that one
// word to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR).

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const WORD = "actually";

// The gate: entry.txt must be UTF-8 text of 1 to 30 characters,
// and the brief wants a single word.
if (WORD.length < 1 || WORD.length > 30) {
  throw new Error(`word is ${WORD.length} characters, must be 1-30`);
}
if (/\s/.test(WORD)) {
  throw new Error("entry must be a single word, no whitespace");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), WORD, "utf8");
