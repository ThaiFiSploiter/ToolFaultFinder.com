#!/usr/bin/env bash
# Autonomous Senior-SEO-Expert runner for toolfaultfinder.com. Invoked by cron.
# Usage: seo-agent-run.sh [content|weekly|monthly]
set -uo pipefail

export HOME=/home/nick
export PATH="/home/nick/.local/bin:/usr/local/bin:/usr/bin:/bin"

MODE="${1:-weekly}"
case "$MODE" in
  content|weekly|monthly) ;;
  *) echo "usage: $0 [content|weekly|monthly]" >&2; exit 2 ;;
esac
PROJ=/home/nick/toolfaultfinder.com
LOGDIR="$PROJ/seo-agent-logs"
mkdir -p "$LOGDIR"
STAMP="$(date +%Y%m%d-%H%M%S)"
RUNLOG="$LOGDIR/run-$MODE-$STAMP.log"
SUMMARY="$LOGDIR/summary-$MODE-$STAMP.txt"

# Switched Opus -> Sonnet 2026-09-01 to cut plan-usage cost across the non-flagship
# sites (wegotthemove stays on Opus). Safety rails in the playbook are the actual
# backstop for autonomous prod deploys, not the model choice.
MODEL="claude-sonnet-5"

case "$MODE" in
  content)
    MODE_TASK="Your job this run is content: **write up to 7 new fault entries, illustrate them, and publish them live**. \
Seven is a CEILING, not a quota. The binding limit is sourcing, not effort: publish every entry you can verify against a primary document and stop there. A run that publishes 3 well-sourced entries and reports why it stopped is a good run; padding to 7 with thin sourcing is the worst outcome available to you. \
**Work one entry at a time, start to finish: research -> draft -> verification gate -> illustrate -> build -> commit -> push -> verify live -> journal, THEN start the next one.** Do not batch all seven and push at the end. This run is long and may be interrupted by a session limit or a crash; entry-at-a-time means an interruption leaves finished work live and recorded rather than losing the lot. \
Before writing each entry, re-check \`src/content/faults/\` and the journal for an existing entry on that brand+model — a duplicate route breaks the build, and a re-run after an interruption is exactly when that happens. \
Generate each entry's illustration yourself with the \`generate_image\` tool from the \`openai-image\` MCP server, following the ILLUSTRATION section of the playbook for the prompt template, file naming and frontmatter. \
Do NOT do the weekly CTR/indexing sweep — that is the weekly run's job. \
For every entry you MUST complete the PRE-PUBLISH VERIFICATION GATE in the playbook before its push, and paste the supporting quote from the primary document into your run report."
    ;;
  weekly)
    MODE_TASK="Your job this run is measurement and technical SEO, not bulk content: pull live GSC data, diagnose the week-on-week click delta, and ship the CTR and indexing fixes in the weekly checklist. \
The content runs handle new entries — do not write a batch of entries here. \
Audit the week's published entries instead: re-check a sample of what the content runs published against their cited sources, and correct or unpublish anything that does not hold up."
    ;;
  monthly)
    MODE_TASK="Your job this run is the deep-dive in the monthly checklist: month-over-month trend, a full coverage sweep, per-cluster promote-or-leave decisions, and one structural improvement. \
Also review the month's published entries as a body of work — indexing rate, thin spots, and whether the content cadence is actually converting to clicks or just to URLs."
    ;;
esac

PROMPT="You are running as the autonomous Senior SEO Expert for toolfaultfinder.com. This is your scheduled **$MODE** run. \
First read /home/nick/toolfaultfinder.com/SEO-AGENT-PLAYBOOK.md in full and follow it exactly, including the AUTHORITY RULE, the HARD SAFETY RAILS, and the $MODE-run checklist. \
Also read MEMORY.md and the relevant memory files for accumulated context before acting. \
Your goal is to grow organic search clicks week on week and build out the fault-entry library. \
$MODE_TASK \
You publish to production yourself: build before every push, push to main, and verify the change on the live site afterwards. There is no human review step — nothing you publish is checked by anyone before readers act on it physically, so the sourcing rails are the only safeguard and they are absolute. \
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

# Keep only the last 90 of each artifact — raised from 40 when the content run was added,
# so the window still covers roughly a quarter rather than six weeks.
ls -1t "$LOGDIR"/run-*.log 2>/dev/null | tail -n +91 | xargs -r rm -f
ls -1t "$LOGDIR"/summary-*.txt 2>/dev/null | tail -n +91 | xargs -r rm -f

# Propagate the claude invocation's exit code so the dispatcher's catch-up
# logic doesn't stamp a failed run (e.g. hit a session limit) as done for the
# week/month — without this a failure was silently marked complete and the
# dispatcher wouldn't retry until the next period.
exit $RC
