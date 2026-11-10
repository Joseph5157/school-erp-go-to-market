// GTM-WEBSITE-01: static marketing site, local preview only.
// No `site` URL is set: the domain is not decided and nothing is published.
import { defineConfig } from 'astro/config';
import { fileURLToPath } from 'node:url';

const repoRoot = fileURLToPath(new URL('..', import.meta.url));

export default defineConfig({
  output: 'static',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
  devToolbar: { enabled: false },
  vite: {
    // Approved diagrams are read from ../diagrams/svg so there is one source.
    server: { fs: { allow: [repoRoot] } },
  },
});
