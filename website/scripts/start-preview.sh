#!/bin/sh
# Fail closed: refuse to serve any preview content without an approved hash.
set -eu
: "${PREVIEW_PASSWORD_HASH:?PREVIEW_PASSWORD_HASH must be set}"
case "$PREVIEW_PASSWORD_HASH" in
  '$2a$'*|'$2b$'*) ;;
  *) echo >&2 "Invalid PREVIEW_PASSWORD_HASH: expected a bcrypt hash"; exit 1 ;;
esac
exec caddy run --config /etc/caddy/Caddyfile --adapter caddyfile
