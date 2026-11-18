// News-image entry: a front-page poster summing up 18 November 2026.
//
// The image lives in this repository as entry.png (a 1024x1024 PNG, 665,653
// bytes). This program does nothing but place that file where the grader
// expects it: /output/entry.png, or MAKEFUN_OUTPUT_DIR when the harness
// sets one (the usual stand-in outside the grading container).
//
// The poster itself was composed for this entry: a burning oil tanker in
// the Strait of Hormuz at dusk, under the masthead "18 NOVEMBER 2026" and
// the headline "US DESTROYS FIVE IRANIAN TANKERS AS IRAN HITS BACK", with
// five labelled strips for the day's other stories (Kerch Bridge, Gaza,
// COP31, the Quad summit, Eisenkot). The text was laid out with a font
// renderer so it stays sharp; nothing is fetched at run time, so two runs
// always write the same bytes.

import { copyFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(
  new URL('./entry.png', import.meta.url),
  join(outDir, 'entry.png'),
);
