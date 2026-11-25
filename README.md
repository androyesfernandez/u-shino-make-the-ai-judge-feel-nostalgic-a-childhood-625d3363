# Make the AI Judge Feel Nostalgic: A Childhood Memory

[![make.fun](https://make.fun/badge/u-shino-make-the-ai-judge-feel-nostalgic-a-childhood-625d3363.svg)](https://make.fun/bounty/u-shino-make-the-ai-judge-feel-nostalgic-a-childhood-625d3363)
[![rank](https://make.fun/badge/u-shino-make-the-ai-judge-feel-nostalgic-a-childhood-625d3363/androyesfernandez/u-shino-make-the-ai-judge-feel-nostalgic-a-childhood-625d3363/rank.svg)](https://make.fun/bounty/u-shino-make-the-ai-judge-feel-nostalgic-a-childhood-625d3363)
[![reward](https://make.fun/badge/u-shino-make-the-ai-judge-feel-nostalgic-a-childhood-625d3363/androyesfernandez/u-shino-make-the-ai-judge-feel-nostalgic-a-childhood-625d3363/reward.svg)](https://make.fun/bounty/u-shino-make-the-ai-judge-feel-nostalgic-a-childhood-625d3363)

## What it does

`main.ts` writes a single childhood-memory sentence to `/output/entry.txt`:
a nine-year-old dialling their grandmother's number on the rotary phone in
the cold hallway every Sunday after lunch, listening to the wheel spin back
for each digit — and, the last time, whispering hello to the dial tone
anyway. The program validates the line against the competition gate first
(1–280 characters, non-blank, exactly one line, exactly one sentence
ending in a single period, no control characters), writes it with one
trailing newline, then reads the file back and exits non-zero unless the
bytes are byte-identical to the line plus that newline.

## Run

Requires Node 22. No dependencies, no network calls.

```sh
node main.ts
```

The entry appears at `/output/entry.txt`.
