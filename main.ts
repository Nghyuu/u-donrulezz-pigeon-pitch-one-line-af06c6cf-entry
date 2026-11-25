import { mkdirSync, writeFileSync, chmodSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}

// One line, at most 200 characters: the elevator pitch a city pigeon
// gives investors for its startup. A single trailing newline is added.
const pitch =
  "We're disrupting last-mile delivery: I fly the package, eat the tip, and poop on the porch — that's not a bug, it's our retention strategy.";

if (pitch.length > 200 || pitch.includes("\n")) {
  throw new Error("pitch must be one line of at most 200 characters");
}

const entryPath = join(outDir, "entry.txt");
mkdirSync(outDir, { recursive: true });
writeFileSync(entryPath, pitch + "\n", "utf8");
chmodSync(entryPath, 0o644);
