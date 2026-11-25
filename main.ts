import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const LINE =
  "I was nine when I dialled my grandmother's number on the rotary phone in the cold hallway every Sunday after lunch, listening to the wheel spin back for each digit, and the last time I called, the ring went on so long that I whispered hello to the dial tone anyway.";

// Gate: /output/entry.txt must be UTF-8 text of 1-280 characters,
// one sentence, not only whitespace.
if (LINE.length < 1 || LINE.length > 280) {
  throw new Error(`entry length ${LINE.length} is outside 1-280 characters`);
}
if (LINE.trim().length === 0) {
  throw new Error("entry is only whitespace");
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry must be exactly one line");
}
for (const ch of LINE) {
  if (ch.charCodeAt(0) < 0x20 || ch.charCodeAt(0) === 0x7f) {
    throw new Error("entry contains a control character");
  }
}
const periods = [...LINE].filter((ch) => ch === ".").length;
if (periods !== 1 || !LINE.endsWith(".")) {
  throw new Error("entry must be exactly one sentence ending in a single period");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");

// Round-trip verification: read the file back and require the bytes to be
// byte-identical to the line plus a single trailing newline.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== LINE + "\n") {
  throw new Error("round-trip check failed: /output/entry.txt does not match the entry line");
}
