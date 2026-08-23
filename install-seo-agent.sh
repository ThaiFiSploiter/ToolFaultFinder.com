#!/usr/bin/env bash
# One-time installer for the toolfaultfinder.com autonomous SEO agent.
# Run once:  bash install-seo-agent.sh
# Idempotent — safe to re-run.
set -euo pipefail

PROJ=/home/nick/toolfaultfinder.com

echo "1/3  Making agent scripts executable..."
chmod 755 "$PROJ/seo-agent-run.sh" "$PROJ/seo-agent-dispatch.sh"

echo "2/3  Syntax-checking..."
bash -n "$PROJ/seo-agent-run.sh"
bash -n "$PROJ/seo-agent-dispatch.sh"
echo "     OK"

echo "3/3  Installing cron entries (hourly at :45, offset from the other three sites)..."
if crontab -l 2>/dev/null | grep -q 'toolfaultfinder.com/seo-agent-dispatch.sh'; then
  echo "     Already installed — leaving crontab alone."
else
  { crontab -l 2>/dev/null || true
    echo ""
    echo "# toolfaultfinder autonomous Senior SEO Expert — local catch-up dispatcher (offset :45)"
    echo "45 * * * * $PROJ/seo-agent-dispatch.sh"
    echo "@reboot sleep 210 && $PROJ/seo-agent-dispatch.sh"
  } | crontab -
  echo "     Installed."
fi

echo
echo "Done. Current toolfaultfinder cron entries:"
crontab -l | grep -A1 toolfaultfinder || true
echo
echo "The first weekly run fires at the next :45 tick."
echo "To trigger a run right now instead:  bash $PROJ/seo-agent-run.sh weekly"
