#!/usr/bin/env bash
# Autonomous Senior-SEO-Expert runner for toolfaultfinder.com. Invoked by cron.
# Usage: seo-agent-run.sh [weekly|monthly]
set -uo pipefail

export HOME=/home/nick
export PATH="/home/nick/.local/bin:/usr/local/bin:/usr/bin:/bin"

MODE="${1:-weekly}"
PROJ=/home/nick/toolfaultfinder.com
LOGDIR="$PROJ/seo-agent-logs"
mkdir -p "$LOGDIR"
STAMP="$(date +%Y%m%d-%H%M%S)"
RUNLOG="$LOGDIR/run-$MODE-$STAMP.log"
SUMMARY="$LOGDIR/summary-$MODE-$STAMP.txt"

# Opus for both runs — the agent pushes to a live site and writes public-facing
# technical content, so capability/safety outweigh speed. Cost is plan usage
# (local login), not metered API billing.
MODEL="claude-opus-5"

PROMPT="You are running as the autonomous Senior SEO Expert for toolfaultfinder.com. This is your scheduled **$MODE** run. \
First read /home/nick/toolfaultfinder.com/SEO-AGENT-PLAYBOOK.md in full and follow it exactly, including the SPLIT-AUTHORITY RULE, the HARD SAFETY RAILS, and the $MODE-run checklist. \
Also read MEMORY.md and the relevant memory files for accumulated context before acting. \
Your goal is to grow organic search clicks week on week and build out the fault-entry library. \
Pull live GSC data, diagnose, and act: technical SEO improvements you commit and push to main yourself (build first, verify the live site after); new fault-entry content you write and push to a content/ branch for Nick to fact-check and illustrate, NEVER merged to main. \
Then log a report to seo-agent-logs/JOURNAL.md and update project memory. \
Work autonomously; do not wait for approval, but never violate the safety rails."

cd "$PROJ" || exit 1
echo "=== SEO agent run: mode=$MODE model=$MODEL start=$(date -Is) ===" >> "$RUNLOG"

# Headless, fully autonomous (no permission prompts). Capture the agent's summary
# separately so it can be emailed; full transcript still goes to the run log.
claude -p "$PROMPT" \
  --model "$MODEL" \
  --dangerously-skip-permissions \
  > "$SUMMARY" 2>>"$RUNLOG"
RC=$?
cat "$SUMMARY" >> "$RUNLOG"
echo "=== SEO agent run: mode=$MODE end=$(date -Is) exit=$RC ===" >> "$RUNLOG"

# Email the report via the shared Brevo mailer on the wegotthemove prod box
# (the API key lives there and never leaves it). toolfaultfinder has no server.
HOST=root@46.225.76.10
if [ -s "$SUMMARY" ]; then
  SUBJ="ToolFaultFinder SEO Agent — $MODE report $(date +%Y-%m-%d)"
  ssh -o ConnectTimeout=20 "$HOST" "node /root/seo-agent-mail.mjs \"$SUBJ\"" < "$SUMMARY" >> "$RUNLOG" 2>&1
else
  SUBJ="ToolFaultFinder SEO Agent — $MODE run PROBLEM $(date +%Y-%m-%d)"
  printf 'The %s SEO agent run produced no summary (exit %s).\nCheck %s on the host.\n' \
    "$MODE" "$RC" "$RUNLOG" \
    | ssh -o ConnectTimeout=20 "$HOST" "node /root/seo-agent-mail.mjs \"$SUBJ\"" >> "$RUNLOG" 2>&1
fi

# Keep only the last 40 of each artifact.
ls -1t "$LOGDIR"/run-*.log 2>/dev/null | tail -n +41 | xargs -r rm -f
ls -1t "$LOGDIR"/summary-*.txt 2>/dev/null | tail -n +41 | xargs -r rm -f
