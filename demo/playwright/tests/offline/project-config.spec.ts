/**
 * Offline: the Playwright project configuration and npm scripts.
 * Reads the config object only; no browser starts, nothing authenticates.
 */

import { readFileSync } from 'node:fs';
import path from 'node:path';
import { test, expect } from '@playwright/test';
import config from '../../playwright.config.ts';

const projects = config.projects ?? [];
const liveProjects = projects.filter((p) => p.name !== 'offline');
const projectNames = new Set(projects.map((p) => p.name));
const scripts: Record<string, string> = JSON.parse(
  readFileSync(path.join(__dirname, '..', '..', 'package.json'), 'utf8'),
).scripts;

function selectedProjects(script: string): string[] {
  return [...script.matchAll(/--project=(\S+)/g)].map((m) => m[1]!);
}

test('all six live projects exist', () => {
  expect(liveProjects.map((p) => p.name).sort()).toEqual(
    ['admin', 'auth-admin', 'auth-guardian', 'auth-teacher', 'guardian', 'teacher'],
  );
});

test('every live project blocks Service Workers so request interception sees everything', () => {
  for (const p of liveProjects) {
    expect(p.use?.serviceWorkers, p.name).toBe('block');
  }
});

test('live projects keep traces, video and downloads off by default', () => {
  for (const p of liveProjects) {
    expect(p.use?.trace, p.name).toBe('off');
    expect(p.use?.video, p.name).toBe('off');
    expect(p.use?.acceptDownloads, p.name).toBe(false);
  }
});

test('demo:auth selects exactly the three role auth projects', () => {
  expect(selectedProjects(scripts['demo:auth']!).sort()).toEqual(['auth-admin', 'auth-guardian', 'auth-teacher']);
});

test('every --project named in an npm script exists in the config', () => {
  for (const [name, script] of Object.entries(scripts)) {
    for (const project of selectedProjects(script)) {
      expect(projectNames.has(project), `${name} -> ${project}`).toBe(true);
    }
  }
});

test('npm test runs only the offline project', () => {
  expect(selectedProjects(scripts.test!)).toEqual(['offline']);
});
