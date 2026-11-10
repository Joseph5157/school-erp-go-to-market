// Runs the Astro CLI with its anonymous usage telemetry switched off,
// so local previews and builds send nothing to third parties.
import { spawn } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const astroBin = fileURLToPath(new URL('../node_modules/astro/bin/astro.mjs', import.meta.url));

const child = spawn(process.execPath, [astroBin, ...process.argv.slice(2)], {
  stdio: 'inherit',
  env: { ...process.env, ASTRO_TELEMETRY_DISABLED: '1' },
});
child.on('exit', (code) => process.exit(code ?? 1));
