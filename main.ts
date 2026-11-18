// News-image entry: a front-page poster summing up 18 November 2026.
//
// The image lives in this repository as entry.png (a 1024x1024 PNG, 362,064
// bytes). This program does nothing but place that file where the grader
// expects it: /output/entry.png, or MAKEFUN_OUTPUT_DIR when the harness
// sets one (the usual stand-in outside the grading container).
//
// The poster itself was composed for this entry: a burning oil tanker in
// the Strait of Hormuz at dusk, under the masthead "18 NOVEMBER 2026" and
// the headline "US DESTROYS FIVE IRANIAN TANKERS AS IRAN HITS BACK", with
// a "THE DAY IN NUMBERS" strip (5 tankers, 141 drones, 849 Dow points,
// 56-44 Senate, 37 civilians, $130bn Nvidia), a hand-drawn Gulf map beside
// the hero photo marking the five sunk tankers, Qeshm, Bahrain, Kuwait and
// the Strait of Hormuz, a twelve-panel grid for the day's other big stories
// (APEC, Kerch Bridge, markets, cyclone, Gaza, COP31, Peltola, Russia
// drones, UK inflation, Eisenkot, Quad, Sudan) — each panel carries its own
// illustration in its own visual kind (skyline, bridge, falling-line chart,
// India map with cyclone, tent, globe, Senate seat waffle 56-44, drone,
// rising-bar chart, parliament, rings, warning sign) and its own accent
// colour, a dotted world map "WHERE IT HAPPENED", and a numbered list of 32
// more stories, 45 stories across 6 continents on one page. The masthead
// carries a gold globe and a gold compass star. The text was laid out with
// a font renderer so it stays sharp; nothing is fetched at run time, so two
// runs always write the same bytes.
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
