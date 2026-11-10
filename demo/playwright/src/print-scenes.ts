/**
 * Print the scene catalogue and both sequences (`npm run scenes`).
 * Offline only: reads the catalogue, touches no browser or network.
 */

import { SCENES, SEQUENCES, getScene } from './scenes.ts';
import { ROUTES } from './routes.ts';

console.log('Scenes (none verified live yet)\n');
for (const s of SCENES) {
  const paths = s.routes.map((r) => ROUTES[r].path).join(' -> ') || '(not automated)';
  console.log(`${s.id.padEnd(3)} ${s.status.padEnd(12)} ${s.role.padEnd(9)} ${s.title}`);
  console.log(`    screens:  ${paths}`);
  console.log(`    fallback: ${s.fallback}`);
}

for (const seq of SEQUENCES) {
  console.log(`\n${seq.title}  [${seq.tag}]  (${seq.script})`);
  for (const step of seq.steps) {
    const scenes = step.scenes.map((id) => `${id}${getScene(id).status === 'unavailable' ? '*' : ''}`).join(', ') || '-';
    console.log(`  ${step.slot.padEnd(17)} ${step.mode.padEnd(15)} ${scenes.padEnd(22)} ${step.scriptRef}`);
  }
}
console.log('\n* unavailable: use the scene fallback.');
