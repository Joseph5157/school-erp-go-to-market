#!/usr/bin/env node
// Validate the Marp client presentation without changing committed exports.
//
// Run from the repository root:
//   node scripts/ci/check_presentation.mjs            # source, theme, SVG and HTML checks (no browser)
//   node scripts/ci/check_presentation.mjs --render   # also PNG + PDF smoke renders in Chrome
//
// All renders go to a temporary directory that is deleted afterwards. The committed
// files in presentations/marp/exports/ are hashed before and after and must not change.
// Exit code 0 when every check passes, 1 otherwise.

import { spawnSync } from "node:child_process";
import { createHash } from "node:crypto";
import { existsSync, mkdtempSync, readdirSync, readFileSync, rmSync, statSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join, relative, resolve, sep } from "node:path";

const MARP_CLI = "@marp-team/marp-cli@4.5.1"; // keep in step with presentations/marp/README.md
const DECK = "presentations/marp/school-erp-client-deck.md";
const THEME = "presentations/marp/themes/school-erp-institutional.css";
const EXPORTS = "presentations/marp/exports";
const EXPECTED_SLIDES = 12;
const BUILTIN_THEMES = new Set(["default", "gaia", "uncover"]);
// --allow-local-files (needed to load the local SVG diagrams) always prints this warning.
const ALLOWED_WARNINGS = [/Insecure local file accessing is enabled/];

const root = process.cwd();
const render = process.argv.includes("--render");
const errors = [];
const fail = (message) => {
  errors.push(message);
  console.log(`FAIL  ${message}`);
};
const ok = (message) => console.log(`OK    ${message}`);

function readText(path) {
  if (!existsSync(path)) {
    fail(`missing file: ${path}`);
    return "";
  }
  return readFileSync(path, "utf8");
}

function insideRepo(path) {
  const rel = relative(root, path);
  return rel && !rel.startsWith("..") && !rel.startsWith(sep) && !/^[A-Za-z]:/.test(rel);
}

// Spawn the pinned Marp CLI through npx and return { status, output }.
function marp(args) {
  const isWindows = process.platform === "win32";
  const all = ["-y", MARP_CLI, ...args];
  const quoted = isWindows ? all.map((a) => (/[\s"]/.test(a) ? `"${a.replace(/"/g, '\\"')}"` : a)) : all;
  const result = spawnSync(isWindows ? "npx.cmd" : "npx", quoted, {
    cwd: root,
    encoding: "utf8",
    shell: isWindows,
    timeout: 180_000,
  });
  return { status: result.status, output: `${result.stdout ?? ""}${result.stderr ?? ""}`, error: result.error };
}

// Marp exits 0 even when it cannot register a theme, so its log is checked too.
function marpProblems(output) {
  const messages = [];
  for (const line of output.split(/\r?\n/)) {
    const start = line.match(/^\[\s*(WARN|ERROR)\s*\]\s*(.*)$/);
    if (start) messages.push({ level: start[1], text: start[2] });
    else if (messages.at(-1) && /^\s+\S/.test(line)) messages.at(-1).text += ` ${line.trim()}`;
    else if (/^\[\s*INFO\s*\]/.test(line)) messages.push(null);
  }
  return messages.filter((m) => m && !ALLOWED_WARNINGS.some((re) => re.test(m.text)));
}

function runMarp(label, args) {
  const { status, output, error } = marp(args);
  if (error) {
    fail(`${label}: could not run Marp CLI (${error.message})`);
    return false;
  }
  const problems = marpProblems(output);
  for (const p of problems) fail(`${label}: Marp ${p.level}: ${p.text}`);
  if (status !== 0) {
    fail(`${label}: Marp CLI exited with code ${status}`);
    console.log(output.trim());
  }
  return status === 0 && problems.length === 0;
}

function hashTree(dir) {
  const hashes = new Map();
  const walk = (d) => {
    for (const name of readdirSync(d)) {
      const path = join(d, name);
      if (statSync(path).isDirectory()) walk(path);
      else hashes.set(relative(root, path), createHash("sha256").update(readFileSync(path)).digest("hex"));
    }
  };
  if (existsSync(dir)) walk(dir);
  return hashes;
}

// ---------------------------------------------------------------- source and theme
const deck = readText(DECK);
const theme = readText(THEME);

const front = deck.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n/);
const frontValue = (key) => front?.[1].match(new RegExp(`^${key}:\\s*(.+?)\\s*$`, "m"))?.[1].replace(/^["']|["']$/g, "");
if (!front) fail(`${DECK}: no YAML front matter`);
if (frontValue("marp") !== "true") fail(`${DECK}: front matter must contain "marp: true"`);
const deckTheme = frontValue("theme");
if (!deckTheme) fail(`${DECK}: front matter must name a theme`);

const themeName = theme.match(/\/\*[\s\S]*?@theme\s+([\w-]+)[\s\S]*?\*\//)?.[1];
if (!themeName) fail(`${THEME}: missing /* @theme name */ metadata comment`);
else if (deckTheme && themeName !== deckTheme)
  fail(`theme name mismatch: deck uses "${deckTheme}" but ${THEME} declares "${themeName}"`);
else ok(`deck front matter and theme agree on "${themeName}"`);

for (const [, target] of theme.matchAll(/@import\s+(?:url\()?["']?([^"');]+)["']?\)?\s*;/g)) {
  const local = resolve(dirname(THEME), target);
  if (!BUILTIN_THEMES.has(target) && !existsSync(local))
    fail(`${THEME}: @import "${target}" is neither a built-in Marp theme nor a local file`);
}

// Brace balance outside comments and strings (Marp would only warn about this).
const cssBody = theme.replace(/\/\*[\s\S]*?\*\//g, "").replace(/"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'/g, "");
let depth = 0;
for (const ch of cssBody) {
  if (ch === "{") depth += 1;
  if (ch === "}") depth -= 1;
  if (depth < 0) break;
}
if (depth !== 0) fail(`${THEME}: unbalanced braces in CSS`);

// ---------------------------------------------------------------- local image references
const refs = new Map(); // resolved path -> source label
const addRef = (from, target) => {
  if (/^(data:|https?:|#)/i.test(target)) return;
  const clean = decodeURI(target.split(/[?#]/)[0]);
  refs.set(resolve(dirname(from), clean), `${from}: ${target}`);
};
const deckNoCode = deck.replace(/^(```|~~~)[\s\S]*?^\1/gm, "");
for (const [, target] of deckNoCode.matchAll(/!\[[^\]]*\]\(\s*<?([^)\s>]+)>?/g)) addRef(DECK, target);
for (const [, target] of deckNoCode.matchAll(/<img\b[^>]*\bsrc=["']([^"']+)["']/gi)) addRef(DECK, target);
for (const [, target] of deckNoCode.matchAll(/url\(\s*["']?([^"')]+)["']?\s*\)/g)) addRef(DECK, target);
for (const [, target] of theme.matchAll(/url\(\s*["']?([^"')]+)["']?\s*\)/g)) addRef(THEME, target);

let svgCount = 0;
for (const [path, label] of refs) {
  if (!insideRepo(path)) {
    fail(`reference outside the repository: ${label}`);
    continue;
  }
  if (!existsSync(path)) {
    fail(`missing local file: ${label}`);
    continue;
  }
  if (path.toLowerCase().endsWith(".svg")) {
    svgCount += 1;
    const svg = readFileSync(path, "utf8");
    if (!/<svg[\s>]/.test(svg) || !/<\/svg>\s*$/.test(svg.trim() + "\n"))
      fail(`not a complete SVG document: ${relative(root, path)}`);
  }
}
if (refs.size) ok(`${refs.size} local image reference(s) resolve (${svgCount} SVG)`);

// ---------------------------------------------------------------- Marp HTML render (no browser)
const work = mkdtempSync(join(tmpdir(), "marp-ci-"));
const exportsBefore = hashTree(EXPORTS);
try {
  const html = join(work, "deck.html");
  if (runMarp("HTML render", [DECK, "--theme", THEME, "--html=false", "-o", html]) && existsSync(html)) {
    const out = readFileSync(html, "utf8");
    const slides = [...out.matchAll(/<section\b[^>]*\bid="(\d+)"/g)].length;
    const totals = new Set([...out.matchAll(/data-marpit-pagination-total="(\d+)"/g)].map((m) => Number(m[1])));
    if (slides !== EXPECTED_SLIDES) fail(`expected exactly ${EXPECTED_SLIDES} slides, rendered ${slides}`);
    else if (totals.size && (totals.size !== 1 || !totals.has(EXPECTED_SLIDES)))
      fail(`pagination total ${[...totals].join(",")} does not match ${EXPECTED_SLIDES}`);
    else ok(`Marp ${MARP_CLI.split("@").at(-1)} rendered exactly ${slides} slides to HTML`);

    const rendered = new Set();
    for (const [, src] of out.matchAll(/<img\b[^>]*\bsrc="([^"]+)"/g))
      if (!/^(data:|https?:)/i.test(src)) rendered.add(resolve(dirname(DECK), decodeURI(src)));
    for (const path of rendered)
      if (!refs.has(path)) fail(`rendered image not found by the source scan: ${relative(root, path)}`);
  }

  // -------------------------------------------------------------- Chrome smoke renders
  if (render) {
    const common = [DECK, "--theme", THEME, "--allow-local-files", "--browser-timeout", "60"];
    const pngDir = join(work, "png");
    if (runMarp("PNG render", [...common, "--images", "png", "-o", join(pngDir, "slide.png")])) {
      const pngs = existsSync(pngDir) ? readdirSync(pngDir).filter((f) => /^slide\.\d+\.png$/.test(f)) : [];
      const tiny = pngs.filter((f) => statSync(join(pngDir, f)).size < 5_000);
      if (pngs.length !== EXPECTED_SLIDES) fail(`PNG render produced ${pngs.length} slides, expected ${EXPECTED_SLIDES}`);
      else if (tiny.length) fail(`PNG render produced suspiciously small images: ${tiny.join(", ")}`);
      else ok(`Chrome rendered ${pngs.length} PNG slides`);
    }
    const pdf = join(work, "deck.pdf");
    if (runMarp("PDF render", [...common, "--pdf", "-o", pdf])) {
      const bytes = existsSync(pdf) ? readFileSync(pdf) : Buffer.alloc(0);
      if (bytes.subarray(0, 5).toString() !== "%PDF-" || bytes.length < 20_000)
        fail(`PDF render is not a valid PDF (${bytes.length} bytes)`);
      else ok(`Chrome rendered a ${Math.round(bytes.length / 1024)} KB PDF`);
    }
  } else {
    console.log("SKIP  Chrome PNG/PDF smoke renders (pass --render to include them)");
  }
} finally {
  rmSync(work, { recursive: true, force: true });
}

// ---------------------------------------------------------------- committed exports untouched
const exportsAfter = hashTree(EXPORTS);
const changed = [...new Set([...exportsBefore.keys(), ...exportsAfter.keys()])].filter(
  (k) => exportsBefore.get(k) !== exportsAfter.get(k),
);
if (changed.length) fail(`committed exports changed: ${changed.join(", ")}`);
else ok(`${exportsAfter.size} committed export file(s) unchanged`);

if (errors.length) {
  console.log(`\n${errors.length} problem(s) found.`);
  process.exit(1);
}
console.log("\nAll presentation checks passed.");
