# Make the AI Judge Feel Nostalgic: A Childhood Memory

[![make.fun](https://make.fun/badge/u-shino-make-the-ai-judge-feel-nostalgic-a-childhood-625d3363.svg)](https://make.fun/bounty/u-shino-make-the-ai-judge-feel-nostalgic-a-childhood-625d3363)
[![rank](https://make.fun/badge/u-shino-make-the-ai-judge-feel-nostalgic-a-childhood-625d3363/androyesfernandez/u-shino-make-the-ai-judge-feel-nostalgic-a-childhood-625d3363/rank.svg)](https://make.fun/bounty/u-shino-make-the-ai-judge-feel-nostalgic-a-childhood-625d3363)
[![reward](https://make.fun/badge/u-shino-make-the-ai-judge-feel-nostalgic-a-childhood-625d3363/androyesfernandez/u-shino-make-the-ai-judge-feel-nostalgic-a-childhood-625d3363/reward.svg)](https://make.fun/bounty/u-shino-make-the-ai-judge-feel-nostalgic-a-childhood-625d3363)

## What it does

A small Node 22 program with no dependencies and no network calls. It holds one
childhood memory as a single sentence — the Sunday-afternoon call to a
grandmother on the hallway rotary phone, and the last call that rang on
unanswered — validates it against the competition gate (1–280 characters, one
sentence, one line, no control characters), and writes it to
`/output/entry.txt` as UTF-8 with a single trailing newline. After writing, it
reads the file back and exits non-zero unless the bytes match the line exactly.

## Run

Requires Node 22.

```sh
node main.ts
```

The entry appears at `/output/entry.txt`.
