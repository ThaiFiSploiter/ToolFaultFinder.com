---
brand: "Axminster"
model: "AW106PT2"
category: "Motor & Drive"
symptom: "Planer/jointer hums loudly at switch-on but won't start, trips the breaker after a few seconds"
likely_cause: "Failed motor winding (or start capacitor) preventing the induction motor from developing starting torque"
diagnostic_steps:
  - "Unplug the machine; confirm the cutterblock and drive belt spin freely by hand to rule out a mechanical jam"
  - "Inspect and test the start capacitor — bulging, leakage, or capacitance far below the rated value means replace it first, it's the cheap suspect"
  - "Measure winding resistance at the motor terminals and compare start vs run winding readings against expected values"
  - "Check for continuity between any winding and the motor frame — any reading here means an earth fault and the motor is unsafe to run"
  - "Smell test: burnt varnish odour from the motor housing strongly suggests cooked windings rather than a capacitor"
fix_or_verdict: "[PLACEHOLDER] If the capacitor tests bad, replace it — cheap fix. If windings are open, shorted, or earthed, it's a motor rewind or replacement; price both before deciding."
source_type: "researched"
sources:
  - "[PLACEHOLDER] Axminster AW106PT2 user manual, motor specification section"
  - "[PLACEHOLDER] UK Workshop forum thread on AW106PT2 starting failure (link)"
  - "[PLACEHOLDER] Generic single-phase induction motor diagnosis reference (link)"
date_published: 2026-06-15
---

> **[PLACEHOLDER - replace with real content]** This is a researched entry — we
> have not had this machine on the bench. The writeup below is placeholder text
> showing the intended structure; replace it with your compiled research and
> real source links.

## The symptom pattern

[PLACEHOLDER - replace with real content] The reported pattern is consistent
across sources: the machine hums at mains frequency when switched on, the
cutterblock either doesn't turn or creeps slowly, and the breaker or the motor's
thermal cutout trips within seconds. A single-phase induction motor that hums
but won't start has failed to develop starting torque — the question is whether
the start circuit (capacitor, centrifugal switch) or the windings themselves are
at fault.

## Working through the causes

[PLACEHOLDER - replace with real content] Order of likelihood based on the
sources compiled:

1. **Start capacitor** — the most common failure and the cheapest to fix.
   Capacitors on machines stored in unheated workshops fail often.
2. **Centrifugal switch** — stuck contacts stop the start winding from being
   energised (or from dropping out). Listen for the click as the motor spins
   down after a test.
3. **Windings** — the expensive one. Open, shorted, or earthed windings show up
   on resistance measurements and often announce themselves by smell.

## What the sources disagree on

[PLACEHOLDER - replace with real content] Note here anything the sources
conflicted on and how you resolved it — e.g. differing expected winding
resistance figures, or whether this model uses a start-only or start-and-run
capacitor arrangement. Being explicit about uncertainty is what separates a
researched entry from a rumour.

## Verdict

[PLACEHOLDER - replace with real content] Test the capacitor before condemning
the motor. If it is a winding failure, get a quote for a rewind from a local
motor shop and compare against a replacement motor — on this class of machine
the rewind is often uneconomical, but prices vary enough to check.
