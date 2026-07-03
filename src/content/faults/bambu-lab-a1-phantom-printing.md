---
brand: "Bambu Lab"
model: "A1"
category: "Electronics & Firmware"
symptom: "Printer shows 'printing' state in the app and on the display with no job running; won't accept new jobs until power-cycled"
likely_cause: "Stale print-job state left behind after an interrupted job or dropped cloud connection — firmware fails to clear the previous job's status"
diagnostic_steps:
  - "Check whether the printer itself (front display) also shows a job as active, or only the app/Bambu Handy — display-only vs app-only points to different layers"
  - "Note what preceded the state: a failed print, a network dropout mid-job, a firmware update, or a print cancelled from the app"
  - "Try clearing the job from the printer's own display rather than the app"
  - "Power-cycle the printer fully (switch off, wait 10 seconds, switch on) and confirm the state clears"
  - "If it recurs, check the installed firmware version against Bambu Lab's release notes for fixes mentioning job-state or cloud-sync issues"
fix_or_verdict: "[PLACEHOLDER] Power-cycle clears it; a firmware update appears to be the lasting fix. No hardware fault — do not start replacing parts for this symptom."
source_type: "firsthand"
date_published: 2026-07-01
---

> **[PLACEHOLDER - replace with real content]** Placeholder writeup demonstrating
> structure and tone. Replace with your real notes on the A1 phantom-print state,
> including the firmware versions you observed it on.

## How the fault showed up

[PLACEHOLDER - replace with real content] After a print was cancelled from the
Bambu Handy app mid-job, the A1 finished its cancel routine normally — but both
the app and the printer's display continued to show the old job as "printing" at
a frozen percentage. Attempting to start a new job from the slicer returned an
error that the printer was busy. The toolhead was parked and cold; nothing was
actually running.

## What's actually happening

[PLACEHOLDER - replace with real content] This is a state-synchronisation bug,
not a hardware fault — worth saying loudly, because the symptom pattern ("printer
stuck, won't respond") sends people hunting for hardware problems that don't
exist. The printer's job-state record isn't cleared when a job ends abnormally,
and the cloud service keeps reflecting the stale state back to every client.

Note for this entry: this is a firmware/software fault documented firsthand on
our own machine. Record the exact firmware version, slicer version, and whether
the printer was in cloud or LAN-only mode when it happened — recurrence seems to
depend on these.

## Clearing it

[PLACEHOLDER - replace with real content] Steps that worked, in order of
preference:

1. Clear/finish the job from the printer's front display, if it offers the option.
2. Full power cycle from the physical switch — this cleared it reliably for us.
3. If the app still shows the phantom job after the printer restarts, force-quit
   and reopen the app so it re-syncs.

## Verdict

[PLACEHOLDER - replace with real content] Nuisance-level fault with a zero-cost
fix. Update the firmware when a release mentions job-state handling, and consider
LAN-only mode if it recurs frequently. No repair, no parts, no teardown.
