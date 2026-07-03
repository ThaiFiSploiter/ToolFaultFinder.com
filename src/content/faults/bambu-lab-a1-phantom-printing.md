---
brand: "Bambu Lab"
model: "A1"
image: "./img/bambu-lab-a1.png"
image_alt: "Technical line-art illustration of the Bambu Lab A1 3D printer with its touchscreen and toolhead visible"
category: "Electronics & Firmware"
symptom: "Printer shows 'printing' state in the app and on the display with no job running; won't accept new jobs until power-cycled"
likely_cause: "Stale print-job state left behind after an interrupted job or dropped cloud connection — the previous job's status is never cleared"
diagnostic_steps:
  - "Check whether the printer's own front display also shows a job as active, or only the app — display-plus-app points at the printer's job state, app-only points at a sync issue"
  - "Note what preceded the state: a failed print, a network dropout mid-job, a firmware update, or a print cancelled from the app"
  - "Try clearing or finishing the job from the printer's own display rather than the app"
  - "Power-cycle the printer fully from the physical switch (off, wait ten seconds, on) and confirm the state clears"
  - "If it recurs, compare the installed firmware version against Bambu Lab's release notes for fixes mentioning job state or cloud sync"
fix_or_verdict: "A power cycle clears it, and keeping firmware current is the lasting fix. This is a software state issue, not a hardware fault — don't start replacing parts for this symptom."
source_type: "researched"
sources:
  - "Bambu Lab Wiki (A1 troubleshooting section)"
  - "Bambu Lab firmware release notes"
  - "User reports of stuck 'printing' state on the Bambu Lab community forum"
date_published: 2026-07-01
---

## The symptom pattern

The reports follow a common script: a print ends abnormally — cancelled from
the Bambu Handy app mid-job, interrupted by a network dropout, or following a
failed print — and afterwards the app and/or the printer's display continue to
show the old job as "printing" at a frozen percentage. Attempting to start a
new job from the slicer returns an error that the printer is busy, while the
toolhead sits parked and cold. Nothing is actually running.

## What's actually happening

This is a state-synchronisation problem, not a hardware fault — worth saying
loudly, because the symptom description ("printer stuck, won't respond") sends
people hunting for hardware problems that don't exist. The printer's job-state
record isn't cleared when a job ends abnormally, and while it persists, the
cloud service keeps reflecting the stale state back to every connected client.
That's why the phantom job can appear simultaneously on the printer's display,
in Bambu Handy, and in the slicer's device view.

Recurrence appears to depend on firmware version and on whether the printer is
in cloud or LAN-only mode, which is why the firmware release notes are worth
checking if it keeps happening.

## Clearing it

In order of preference, per user reports and Bambu Lab's own troubleshooting
guidance:

1. Clear or finish the job from the printer's front display, if it offers the
   option.
2. Do a full power cycle from the physical switch — off, wait ten seconds, on.
   This is the reliably reported fix.
3. If the app still shows the phantom job after the printer restarts, force-quit
   and reopen the app so it re-syncs against the printer's now-clean state.

## Verdict

A nuisance-level fault with a zero-cost fix. Keep the firmware current —
release notes have periodically mentioned job-state and sync fixes — and
consider LAN-only mode if it recurs frequently on your network. No repair, no
parts, no teardown.
