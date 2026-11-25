import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const LINE = "I dialled my grandmother's number on the rotary phone in the hallway every Sunday after lunch, listening to the wheel spin back for each digit, and the last time I called, the ring went on so long that I finally understood the silence on the other end had a name.";

const OUTPUT_PATH = "/output/entry.txt";
const MAX_CHARS = 280;

function fail(message: string): never {
  console.error(`gate failed: ${message}`);
  process.exit(1);
}

function charCount(text: string): number {
  return Array.from(text).length;
}

function countSentences(text: string): number {
  const trimmed = text.trim();
  const body = trimmed.replace(/[.!?]+$/, "");
  if (/[.!?]/.test(body)) {
    return 2;
  }
  return /[.!?]$/.test(trimmed) ? 1 : 0;
}

function hasControlChar(text: string): boolean {
  for (const ch of text) {
    const code = ch.codePointAt(0) ?? 0;
    if (code < 0x20 || code === 0x7f) {
      return true;
    }
  }
  return false;
}

function validate(text: string): void {
  if (text.trim().length === 0) {
    fail("line is blank");
  }
  if (/[\r\n]/.test(text)) {
    fail("line must be a single line");
  }
  if (hasControlChar(text)) {
    fail("line contains a control character");
  }
  const chars = charCount(text);
  if (chars > MAX_CHARS) {
    fail(`line is ${chars} characters, over the ${MAX_CHARS} limit`);
  }
  if (countSentences(text) !== 1) {
    fail("line must be exactly one sentence");
  }
}

validate(LINE);
mkdirSync("/output", { recursive: true });
writeFileSync(OUTPUT_PATH, LINE + "\n", "utf8");

const roundTrip = readFileSync(OUTPUT_PATH, "utf8");
if (roundTrip !== LINE + "\n") {
  fail("round-trip check failed: entry file does not match the line");
}

console.log(`wrote ${charCount(LINE)} characters to ${OUTPUT_PATH}`);
