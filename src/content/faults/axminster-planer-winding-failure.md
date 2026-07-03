---
brand: "Axminster"
model: "AW106PT2"
image: "./img/axminster-aw106pt2.png"
image_alt: "Illustration of a benchtop planer thicknesser/jointer with its fence, tables, and dust extraction port"
category: "Motor & Drive"
symptom: "Planer/jointer hums loudly at switch-on but won't start, trips the breaker after a few seconds"
likely_cause: "Failed start capacitor or motor winding preventing the induction motor from developing starting torque"
diagnostic_steps:
  - "Unplug the machine; confirm the cutterblock and drive belt spin freely by hand to rule out a mechanical jam"
  - "Inspect and test the start capacitor — bulging, leakage, or capacitance far below the rated value means replace it first, as it's the cheap suspect"
  - "Measure winding resistance at the motor terminals and compare start vs run winding readings against expected values"
  - "Check for continuity between any winding and the motor frame — any reading here means an earth fault and the motor is unsafe to run"
  - "A burnt-varnish smell from the motor housing strongly suggests cooked windings rather than a capacitor"
fix_or_verdict: "Test the capacitor before condemning the motor — it's the common, cheap fix. Open, shorted, or earthed windings mean a rewind or replacement motor; price both before deciding."
source_type: "researched"
sources:
  - "Axminster AW106PT2 user manual (motor specification section)"
  - "Single-phase induction motor fault-diagnosis references"
  - "Owner reports of AW106PT2 starting failures on UK woodworking forums"
date_published: 2026-06-15
---

## The symptom pattern

The reported pattern is consistent across sources: the machine hums at mains
frequency when switched on, the cutterblock either doesn't turn or creeps
slowly, and the breaker or the motor's thermal cutout trips within seconds. A
single-phase induction motor that hums but won't start has failed to develop
starting torque — the question is whether the start circuit (capacitor,
centrifugal switch) or the windings themselves are at fault.

## Working through the causes

In rough order of likelihood:

1. **Start capacitor** — the most common failure on this class of machine and
   by far the cheapest to fix. Capacitors age poorly in unheated workshops; a
   bulged case, visible leakage, or a capacitance reading far below the printed
   rating condemns it. Replace like-for-like on capacitance and voltage rating.
2. **Centrifugal switch** — stuck or burnt contacts stop the start winding from
   being energised (or from dropping out once the motor is up to speed). A
   healthy switch clicks audibly as the motor spins down after being switched
   off; silence is suspicious.
3. **Windings** — the expensive one. Open, shorted, or earthed windings show up
   on resistance measurements at the motor terminals, and cooked windings
   usually announce themselves with a burnt-varnish smell. Any continuity
   between a winding and the motor frame is an earth fault: stop, and do not
   run the motor again until it's repaired or replaced.

Before any electrical testing, rule out the mechanical explanation: with the
machine unplugged, the cutterblock and belt should spin freely by hand. A
seized bearing or jammed drive produces the same hum-and-trip symptom with a
perfectly healthy motor.

## Verdict

Test the capacitor first — statistically it's the answer, and it costs little
to rule out. If the windings are genuinely gone, get a rewind quote from a
local motor shop and compare it against a replacement motor: on machines of
this class the rewind is often uneconomical, but prices vary enough that it's
always worth the phone call.
