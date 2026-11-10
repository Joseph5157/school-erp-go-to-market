/** Offline: repository hygiene for the demo automation folder. */

import { readFileSync, readdirSync, statSync } from 'node:fs';
import path from 'node:path';
import { test, expect } from '@playwright/test';
import { FICTIONAL_PASSWORD, FICTIONAL_SCHOOL } from '../../fixtures/fictional.ts';

const ROOT = path.join(__dirname, '..', '..');
const REPO_ROOT = path.join(ROOT, '..', '..');
const SKIP_DIRS = new Set(['node_modules', '.auth', 'test-results', 'playwright-report', 'blob-report', 'demo-artifacts']);

function sourceFiles(dir: string): string[] {
  const out: string[] = [];
  for (const name of readdirSync(dir)) {
    if (SKIP_DIRS.has(name)) continue;
    const full = path.join(dir, name);
    if (statSync(full).isDirectory()) out.push(...sourceFiles(full));
    else if (/\.(ts|md|json|example)$/.test(name) && name !== 'package-lock.json') out.push(full);
  }
  return out;
}

function gitignoreLines(file: string): string[] {
  return readFileSync(file, 'utf8').split(/\r?\n/).map((l) => l.trim());
}

test('authentication state, env files and run output are Git-ignored', () => {
  const root = gitignoreLines(path.join(REPO_ROOT, '.gitignore'));
  for (const entry of ['.env', '**/.auth/', '**/storage-state*.json', 'test-results/', 'playwright-report/', 'node_modules/']) {
    expect(root, entry).toContain(entry);
  }
  const local = gitignoreLines(path.join(ROOT, '.gitignore'));
  for (const entry of ['.auth/', '.env', 'demo-artifacts/', '!.env.example']) {
    expect(local, entry).toContain(entry);
  }
});

test('.env.example leaves every credential and authorisation blank', () => {
  const lines = readFileSync(path.join(ROOT, '.env.example'), 'utf8').split(/\r?\n/);
  for (const line of lines) {
    const m = line.match(/^(DEMO_[A-Z_]+)=(.*)$/);
    if (!m) continue;
    const [, key, value] = m;
    if (key === 'DEMO_CAPTURE') expect(value).toBe('off');
    else expect(value, key).toBe('');
  }
});

test('no source file hardcodes a deployment host or a credential', () => {
  for (const file of sourceFiles(ROOT)) {
    const rel = path.relative(ROOT, file);
    if (file === __filename) continue; // this file spells out the patterns
    const text = readFileSync(file, 'utf8');
    expect(text, rel).not.toMatch(/railway\.app|up\.railway|herokuapp|vercel\.app/i);
    // The fixtures file holds the one deliberately fake password, used to prove
    // values never leak into messages; everything else must be clean.
    if (rel.startsWith('fixtures')) continue;
    expect(text, rel).not.toMatch(/(password|passwd|secret|token)\s*[:=]\s*['"][^'"\s]{6,}['"]/i);
    expect(text, rel).not.toContain(FICTIONAL_PASSWORD);
  }
});

test('fictional fixtures are labelled and use reserved contact domains', () => {
  const text = readFileSync(path.join(ROOT, 'fixtures', 'fictional.ts'), 'utf8');
  expect(text).toContain('FICTIONAL TEST FIXTURES');
  expect(FICTIONAL_SCHOOL.name).toContain('fictional');
  for (const email of text.match(/[\w.+-]+@[\w.-]+/g) ?? []) {
    expect(email, email).toMatch(/@example\.(invalid|test|com)$/);
  }
  // No phone-number-like digit runs (10+ digits).
  expect(text).not.toMatch(/\d{10,}/);
});
