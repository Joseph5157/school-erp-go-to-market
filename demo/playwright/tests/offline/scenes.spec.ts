/** Offline: scene catalogue, sequence mapping and the link to live spec files. */

import { readFileSync, readdirSync } from 'node:fs';
import path from 'node:path';
import { test, expect } from '@playwright/test';
import { ROUTES, routePattern } from '../../src/routes.ts';
import { SCENES, SEQUENCES, getScene, sequenceTagsFor, tagsFor } from '../../src/scenes.ts';
import { ROLES } from '../../src/config.ts';
import { SAMPLE_IDS } from '../../fixtures/fictional.ts';

const LIVE_DIR = path.join(__dirname, '..', 'live');
const REPO_ROOT = path.join(__dirname, '..', '..', '..', '..');

function liveSource(role: string): string {
  return readFileSync(path.join(LIVE_DIR, `${role}.spec.ts`), 'utf8');
}

test.describe('scene catalogue', () => {
  test('scene ids are unique', () => {
    const ids = SCENES.map((s) => s.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  test('every scene has evidence and a safe fallback', () => {
    for (const s of SCENES) {
      expect(s.evidence.length, s.id).toBeGreaterThan(10);
      expect(s.fallback.length, s.id).toBeGreaterThan(10);
    }
  });

  test('automated scenes use only routes of their own role', () => {
    for (const s of SCENES.filter((x) => x.status !== 'unavailable')) {
      expect(s.routes.length, s.id).toBeGreaterThan(0);
      for (const key of s.routes) {
        expect(ROUTES[key].role, `${s.id} -> ${key}`).toBe(s.role);
      }
    }
  });

  test('unavailable scenes visit no route and say why', () => {
    for (const s of SCENES.filter((x) => x.status === 'unavailable')) {
      expect(s.routes, s.id).toEqual([]);
      expect(s.reason, s.id).toBeTruthy();
    }
  });

  test('implemented scenes never need a record id', () => {
    for (const s of SCENES.filter((x) => x.status === 'implemented')) {
      for (const key of s.routes) {
        expect(ROUTES[key].path, `${s.id} uses ${key}`).not.toContain(':');
      }
    }
  });

  test('no scene claims live verification yet', () => {
    expect(SCENES.every((s) => s.liveVerified === false)).toBe(true);
  });

  test('the required workflows are covered for every role', () => {
    for (const role of ROLES) {
      expect(SCENES.some((s) => s.role === role && s.status !== 'unavailable'), role).toBe(true);
    }
    const required = ['A1', 'A2', 'A4', 'A5', 'A6', 'A7', 'T1', 'T2', 'T3', 'T4', 'G1', 'G2', 'G3', 'G4', 'G5'];
    for (const id of required) expect(() => getScene(id)).not.toThrow();
  });

  test('getScene rejects unknown ids', () => {
    expect(() => getScene('Z9')).toThrow('Unknown scene id');
  });
});

test.describe('route patterns', () => {
  test('patterns match filled examples and reject other shapes', () => {
    expect(routePattern(ROUTES.studentDetail.path).test(`/students/${SAMPLE_IDS.pk}/`)).toBe(true);
    expect(routePattern(ROUTES.studentDetail.path).test('/students/new/')).toBe(false);
    expect(routePattern(ROUTES.portalReportCard.path).test(`/guardian/children/${SAMPLE_IDS.uuid}/report-cards/${SAMPLE_IDS.uuid}/`)).toBe(true);
    expect(routePattern(ROUTES.portalChild.path).test('/guardian/children/12/')).toBe(false);
  });

  test('every route records its URL name and source template', () => {
    for (const [key, r] of Object.entries(ROUTES)) {
      expect(r.urlName, key).toMatch(/^(core|portal):[a-z-]+$/);
      expect(r.source, key).toMatch(/templates\//);
      expect(r.path.startsWith('/') && r.path.endsWith('/'), key).toBe(true);
    }
  });
});

test.describe('sequences', () => {
  for (const seq of SEQUENCES) {
    test(`${seq.id}: steps are contiguous and fill ${seq.durationMinutes} minutes`, () => {
      expect(seq.steps[0]!.startMinute).toBe(0);
      expect(seq.steps.at(-1)!.endMinute).toBe(seq.durationMinutes);
      for (let i = 1; i < seq.steps.length; i++) {
        expect(seq.steps[i]!.startMinute, seq.steps[i]!.slot).toBe(seq.steps[i - 1]!.endMinute);
      }
    });

    test(`${seq.id}: every referenced scene exists and automated steps include a runnable scene`, () => {
      for (const step of seq.steps) {
        for (const id of step.scenes) expect(() => getScene(id), `${step.slot} -> ${id}`).not.toThrow();
        if (step.mode === 'automated') {
          expect(step.scenes.some((id) => getScene(id).status !== 'unavailable'), step.slot).toBe(true);
        }
      }
    });

    test(`${seq.id}: every slot appears verbatim in the presenter script`, () => {
      const script = readFileSync(path.join(REPO_ROOT, seq.script), 'utf8');
      for (const step of seq.steps) {
        expect(script, `${seq.script} should contain "${step.slot}"`).toContain(step.slot);
      }
    });
  }

  test('the executive sequence automates no unavailable step on its own', () => {
    const exec = SEQUENCES.find((s) => s.id === 'exec8')!;
    for (const step of exec.steps.filter((x) => x.mode === 'automated')) {
      expect(step.scenes.filter((id) => getScene(id).status !== 'unavailable').length, step.slot).toBeGreaterThan(0);
    }
  });

  test('tags combine sequence, role, status and id', () => {
    expect(sequenceTagsFor('A1')).toEqual(['@exec8', '@live30']);
    expect(tagsFor(getScene('T3'))).toEqual(['@exec8', '@live30', '@teacher', '@provisional', '@T3']);
  });
});

test.describe('live spec files', () => {
  const declared = new Map<string, string>();
  for (const file of readdirSync(LIVE_DIR).filter((f) => f.endsWith('.spec.ts'))) {
    const src = readFileSync(path.join(LIVE_DIR, file), 'utf8');
    for (const m of src.matchAll(/demoScene\('([A-Z]\d+)'/g)) declared.set(m[1]!, file);
  }

  test('every catalogue scene is declared in the spec file for its role', () => {
    for (const s of SCENES) {
      expect(declared.get(s.id), s.id).toBe(`${s.role}.spec.ts`);
    }
  });

  test('every declared scene exists in the catalogue', () => {
    for (const id of declared.keys()) expect(() => getScene(id)).not.toThrow();
  });

  test('live specs never call write-style Playwright APIs or hardcode a host', () => {
    for (const role of ROLES) {
      const src = liveSource(role);
      expect(src, role).not.toMatch(/\.(fill|check|uncheck|selectOption|setInputFiles|press)\(/);
      expect(src, role).not.toMatch(/request\.(post|put|patch|delete)\(/);
      expect(src, role).not.toMatch(/https?:\/\//);
      expect(src, role).not.toMatch(/screenshot\(/);
    }
  });
});
