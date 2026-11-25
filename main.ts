import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// One childhood memory, exactly one sentence: the Sunday call to grandmother
// on the hallway rotary phone, and the last call that never got answered.
const LINE =
  "I dialled my grandmother's number on the rotary phone in the hallway every Sunday after lunch, listening to the wheel spin back for each digit, and the last time I called, the ring went on so long that I finally understood the silence on the other end had a name.";

function fail(message: string): never {
  console.error(`error: ${message}`);
  process.exit(1);
}

// Gate: /output/entry.txt must be UTF-8 text of 1-280 characters,
// one sentence, not only whitespace.
if (LINE.length < 1 || LINE.length > 280) {
  fail(`line is ${LINE.length} characters, outside the 1-280 range`);
}
if (LINE.trim().length === 0) {
  fail("line is only whitespace");
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  fail("line must be exactly one line");
}
for (const ch of LINE) {
  if (ch.charCodeAt(0) < 0x20 || ch.charCodeAt(0) === 0x7f) {
    fail("line contains a control character");
  }
}
const periods = [...LINE].filter((ch) => ch === ".").length;
if (periods !== 1 || !LINE.endsWith(".")) {
  fail("line must be exactly one sentence ending in a single period");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");

// Round-trip verification: read the file back and refuse to finish unless
// its bytes are byte-identical to the line plus one trailing newline.
const roundTrip = readFileSync("/output/entry.txt");
const expected = Buffer.from(LINE + "\n", "utf8");
if (!roundTrip.equals(expected)) {
  fail("round-trip check failed: /output/entry.txt does not match the line");
}
