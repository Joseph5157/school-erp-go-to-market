#!/bin/sh
# Open preview: no password. Search-engine locks remain in the Caddyfile and the site build.
set -eu
exec caddy run --config /etc/caddy/Caddyfile --adapter caddyfile
