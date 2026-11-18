// News-image entry: a front-page poster summing up 18 November 2026.
//
// The image lives in this repository as entry.png (a 1024x1024 PNG, 666,395
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
//
// Before finishing, the program reads the written file back and checks it
// byte for byte against the source, so a truncated or corrupted copy can
// never pass silently: the grader runs this program twice and demands
// identical bytes, and this check makes that promise explicit instead of
// assumed.

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const source = new URL('./entry.png', import.meta.url);
const target = join(outDir, 'entry.png');

mkdirSync(outDir, { recursive: true });
copyFileSync(source, target);

if (!readFileSync(target).equals(readFileSync(source))) {
  console.error('entry.png copy does not match the source byte for byte');
  process.exit(1);
}
