#!/usr/bin/env bash
# Catch-up dispatcher for the toolfaultfinder.com autonomous Senior SEO Expert.
# Run hourly (and @reboot) by cron. Fires the daily run once per calendar day, the
# weekly run once per ISO week and the monthly run once per calendar month, WHENEVER
# the PC is next on — so a run missed while the machine was off/asleep happens at the
# next tick instead of being lost.
#
# At most one run fires per tick, in priority order monthly > weekly > daily. A daily
# skipped because the weekly ran that tick is picked up an hour later, since the daily
# stamp is still unset for today.
set -uo pipefail

export HOME=/home/nick
export PATH="/home/nick/.local/bin:/usr/local/bin:/usr/bin:/bin"

PROJ=/home/nick/toolfaultfinder.com
STAMPDIR="$PROJ/seo-agent-logs"
mkdir -p "$STAMPDIR"
RUN="$PROJ/seo-agent-run.sh"

# Single-flight: if a run (or another dispatch) is in progress, bail quietly.
exec 9>"$STAMPDIR/.dispatch.lock"
flock -n 9 || exit 0

# --- Monthly deep-dive: once per calendar month (takes priority) ---
CUR_MONTH="$(date +%Y-%m)"
MON_STAMP="$STAMPDIR/.last-monthly"
if [ "$(cat "$MON_STAMP" 2>/dev/null || true)" != "$CUR_MONTH" ]; then
  if "$RUN" monthly; then echo "$CUR_MONTH" > "$MON_STAMP"; fi
  exit 0   # don't also fire weekly in the same tick
fi

# --- Weekly light run: once per ISO week ---
CUR_WEEK="$(date +%G-%V)"
WK_STAMP="$STAMPDIR/.last-weekly"
if [ "$(cat "$WK_STAMP" 2>/dev/null || true)" != "$CUR_WEEK" ]; then
  if "$RUN" weekly; then echo "$CUR_WEEK" > "$WK_STAMP"; fi
  exit 0   # don't also fire daily in the same tick
fi

# --- Daily content run: once per calendar day (Nick's decision, 14 Sep 2026) ---
CUR_DAY="$(date +%Y-%m-%d)"
DAY_STAMP="$STAMPDIR/.last-daily"
if [ "$(cat "$DAY_STAMP" 2>/dev/null || true)" != "$CUR_DAY" ]; then
  if "$RUN" daily; then echo "$CUR_DAY" > "$DAY_STAMP"; fi
fi
