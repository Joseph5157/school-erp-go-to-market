// GTM-WEBSITE-01 static checks for the built site in dist/.
// Run after `npm run build` (or use `npm run check`, which does both).
// Fails if a page is indexable, links break, a form or contact detail appears,
// external resources are loaded, or a known product-boundary claim slips in.
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, relative, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const dist = fileURLToPath(new URL('../dist/', import.meta.url));
if (!existsSync(dist)) {
  console.error('dist/ not found. Run `npm run build` first.');
  process.exit(1);
}

const EXPECTED_PAGES = ['index.html', 'features/index.html', 'who-its-for/index.html', 'implementation/index.html', 'faq/index.html', 'contact/index.html', '404.html'];

function walk(dir) {
  return readdirSync(dir).flatMap((name) => {
    const full = join(dir, name);
    return statSync(full).isDirectory() ? walk(full) : [full];
  });
}

const files = walk(dist);
const htmlFiles = files.filter((f) => f.endsWith('.html'));
const rel = (f) => relative(dist, f).split(sep).join('/');
const errors = [];
const fail = (file, message) => errors.push(`${file}: ${message}`);

// Page inventory
for (const page of EXPECTED_PAGES) {
  if (!existsSync(join(dist, page))) fail(page, 'expected page is missing');
}

// robots.txt must block everything until publication is approved
const robots = existsSync(join(dist, 'robots.txt')) ? readFileSync(join(dist, 'robots.txt'), 'utf8') : '';
if (!/User-agent:\s*\*\s*[\r\n]+Disallow:\s*\/\s*$/m.test(robots)) fail('robots.txt', 'must contain "User-agent: *" and "Disallow: /"');

const pages = new Map(htmlFiles.map((f) => [rel(f), readFileSync(f, 'utf8')]));
const idsByPage = new Map();
for (const [name, html] of pages) {
  idsByPage.set(name, new Set([...html.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1])));
}

function resolveTarget(pathname) {
  const clean = decodeURI(pathname).replace(/^\//, '');
  const candidates = clean === '' ? ['index.html'] : [clean, `${clean.replace(/\/$/, '')}/index.html`, `${clean}.html`];
  return candidates.find((c) => existsSync(join(dist, c)) && statSync(join(dist, c)).isFile());
}

// Strip <script> and <style> bodies before content checks.
const visibleText = (html) =>
  html
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&#39;|&rsquo;|’/g, "'")
    .replace(/\s+/g, ' ');

// Positive claims of unsupported features that the site must never make.
const FORBIDDEN_CLAIMS = [
  /\bpay (your |school )?fees online\b/i,
  /\bonline (fee )?payments? (are|is) (supported|available|included)\b/i,
  /\bworks offline\b/i,
  /\boffline mode (is )?(available|supported)\b/i,
  /\b(download|get) (it|the app) (on|from) (google play|the app store|play store)\b/i,
  /\bautomatically sends?\b/i,
  /\bone-click (promotion|rollover)\b/i,
  /\bmulti-school saas\b/i,
  /\b(is|are|fully|100%) DPDP[- ]compliant\b(?!\?)/i,
  /\bguaranteed\b/i,
  /\bAI-powered\b/i,
];

for (const [name, html] of pages) {
  // Head and indexing
  if (!/<html lang="en-IN"/.test(html)) fail(name, 'missing <html lang="en-IN">');
  if (!/<meta name="robots" content="noindex, nofollow"/.test(html)) fail(name, 'missing noindex, nofollow robots meta');
  if (!/<title>[^<]+<\/title>/.test(html)) fail(name, 'missing <title>');
  if (!/<meta name="description" content="[^"]{40,}"/.test(html)) fail(name, 'missing or short meta description');
  if (/rel="canonical"|property="og:/.test(html)) fail(name, 'canonical/Open Graph tags must wait for an approved domain');

  // Structure
  const h1s = html.match(/<h1[\s>]/g) ?? [];
  if (h1s.length !== 1) fail(name, `expected exactly one <h1>, found ${h1s.length}`);
  if (!/<main id="main"/.test(html)) fail(name, 'missing <main id="main"> skip-link target');
  if (!/<nav[^>]*aria-label="Main"/.test(html)) fail(name, 'missing main navigation');
  for (const m of html.matchAll(/<img\b[^>]*>/g)) {
    if (!/\salt="[^"]+"/.test(m[0])) fail(name, `image without alt text: ${m[0].slice(0, 80)}`);
  }
  const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]);
  const dupes = ids.filter((id, i) => ids.indexOf(id) !== i);
  if (dupes.length) fail(name, `duplicate ids: ${[...new Set(dupes)].join(', ')}`);

  // Enquiry rules: no forms, no data collection, no invented contact details
  if (/<form\b|<input\b|<textarea\b|<select\b/i.test(html)) fail(name, 'forms and input fields are not allowed in this draft');
  if (/(mailto:|tel:|sms:|wa\.me|api\.whatsapp)/i.test(html)) fail(name, 'contact links are not allowed until details are approved');
  const text = visibleText(html);
  if (/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i.test(text)) fail(name, 'email address found');
  if (/(\+91[\s-]?)?\b[6-9]\d{4}[\s-]?\d{5}\b/.test(text)) fail(name, 'phone number found');
  if (/\bwww\.|\.(com|in|co\.in|org|net)\b/i.test(text)) fail(name, 'domain-like text found');

  // External resources and tracking
  for (const m of html.matchAll(/\s(?:src|href)="(https?:)?\/\/[^"]*"/g)) fail(name, `external reference: ${m[0].trim()}`);
  if (/googletagmanager|google-analytics|gtag\(|plausible|clarity\.ms|hotjar|facebook\.net|segment\.com/i.test(html)) fail(name, 'tracking code found');

  // Product boundary claims
  for (const pattern of FORBIDDEN_CLAIMS) {
    const hit = text.match(pattern);
    if (hit) fail(name, `forbidden claim "${hit[0]}"`);
  }

  // Internal links and anchors
  for (const m of html.matchAll(/\shref="([^"]+)"/g)) {
    const href = m[1];
    if (href.startsWith('data:')) continue;
    if (href.startsWith('#')) {
      if (href !== '#' && !idsByPage.get(name).has(href.slice(1))) fail(name, `broken in-page anchor ${href}`);
      continue;
    }
    if (!href.startsWith('/')) {
      fail(name, `unexpected link ${href}`);
      continue;
    }
    const [path, hash] = href.split('#');
    const target = resolveTarget(path);
    if (!target) {
      fail(name, `broken link ${href}`);
      continue;
    }
    if (hash && target.endsWith('.html') && !idsByPage.get(target)?.has(hash)) fail(name, `broken anchor ${href}`);
  }
  for (const m of html.matchAll(/\ssrc="(\/[^"]+)"/g)) {
    if (!resolveTarget(m[1])) fail(name, `missing asset ${m[1]}`);
  }
}

// Asset weight budget (lightweight assets)
const totalBytes = files.reduce((sum, f) => sum + statSync(f).size, 0);
const BUDGET = 1_000_000;
if (totalBytes > BUDGET) errors.push(`dist/: total size ${totalBytes} bytes exceeds ${BUDGET}`);

if (errors.length) {
  console.error(`Site check failed with ${errors.length} problem(s):`);
  for (const e of errors) console.error(`  - ${e}`);
  process.exit(1);
}
console.log(`Site check passed: ${pages.size} pages, ${files.length} files, ${(totalBytes / 1024).toFixed(0)} KiB total.`);
