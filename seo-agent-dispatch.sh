#!/usr/bin/env bash
# Catch-up dispatcher for the toolfaultfinder.com autonomous Senior SEO Expert.
# Run hourly (and @reboot) by cron. Fires the content run up to 2 times per ISO week
# (max once per calendar day), the weekly run once per ISO week and the monthly run once
# per calendar month, WHENEVER the PC is next on — so a run missed while the machine was
# off/asleep happens at the next tick instead of being lost.
#
# At most one run fires per tick, in priority order monthly > weekly > content. A content
# run skipped because the weekly ran that tick is picked up an hour later, since its day
# stamp is still unset.
#
# The content run is capped per WEEK rather than pinned to fixed weekdays, deliberately:
# pinned days silently lose a run whenever the PC is off on one of them, which is the
# exact failure this dispatcher exists to avoid. 2 runs x up to 7 entries = up to 14/week.
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
  exit 0   # don't also fire content in the same tick
fi

# --- Content run: up to CONTENT_RUNS_PER_WEEK per ISO week, max once per calendar day.
# Nick's decision, 14 Sep 2026: 4 days a week, 2 entries each.
CONTENT_RUNS_PER_WEEK=2
CUR_DAY="$(date +%Y-%m-%d)"
DAY_STAMP="$STAMPDIR/.last-content-day"
WEEK_COUNT="$STAMPDIR/.content-week"

if [ "$(cat "$DAY_STAMP" 2>/dev/null || true)" != "$CUR_DAY" ]; then
  # .content-week holds "<iso-week> <runs so far>"; a new week resets the count.
  # Guard with -r rather than redirecting stderr: `< missing 2>/dev/null` still prints,
  # because bash applies the input redirect before the stderr one.
  cw_week=""; cw_count=0
  [ -r "$WEEK_COUNT" ] && read -r cw_week cw_count < "$WEEK_COUNT"
  [ "$cw_week" = "$CUR_WEEK" ] || cw_count=0
  case "$cw_count" in ''|*[!0-9]*) cw_count=0 ;; esac

  if [ "$cw_count" -lt "$CONTENT_RUNS_PER_WEEK" ]; then
    if "$RUN" content; then
      echo "$CUR_DAY" > "$DAY_STAMP"
      echo "$CUR_WEEK $((cw_count + 1))" > "$WEEK_COUNT"
    fi
  fi
fi
