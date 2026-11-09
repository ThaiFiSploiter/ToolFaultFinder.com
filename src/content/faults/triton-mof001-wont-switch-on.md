---
brand: "Triton"
model: "MOF001"
seo_title: "Triton MOF001 Won't Switch On — It's an Interlock"
meta_description: "Triton MOF001 router switch won't move, or the router won't plunge down to change the bit? Both are the same built-in interlock, not a fault — here's how it works."
image: "./img/triton-mof001.png"
image_alt: "Line-art illustration of the Triton MOF001 plunge router showing the power switch with its retracting shutter, the collet at the base, and the plunge lock lever"
category: "Guards & Safety"
symptom: "The power switch won't move or do anything when pressed, or the router won't plunge all the way down to the bit-change position"
likely_cause: "Triton's own manual documents this as a single built-in interlock, not a fault: a retracting shutter physically blocks the power switch whenever the router is plunged to its collet-lock depth, and that same lock has to be disengaged before the switch is reachable again — the two symptoms are opposite faces of the same mechanism"
diagnostic_steps:
  - "If the power switch won't move: check whether the router is plunged all the way down to the collet-lock position — Triton's manual states 'the retracting shutter will lock closed when the collet lock is engaged,' so the switch is meant to be physically inaccessible there, not broken"
  - "Return the router to a normal operating depth using the free plunge or handle winder plunge mode — the manual states this 'will disengage the collet lock and release the retracting switch shutter, enabling access to the power switch'"
  - "If instead the router won't plunge down far enough to reach the collet-lock position for a bit change: check the power switch is off first — Triton's troubleshooting table lists the switch being 'On' as the named cause, with the fix simply 'switch power off'"
  - "With the switch off and the motor fully stopped, plunge the router to maximum depth using free plunge or winder handle mode, and confirm the depth stop is fully retracted — the manual notes the collet should then be 'protruding through the base, allowing easy spanner access' for the bit change"
  - "Once the bit is changed, return the router to a normal operating depth before trying the power switch again — trying to switch on while still at the collet-lock position is what reproduces the 'won't switch on' symptom"
fix_or_verdict: "Not a fault at all — Triton built this interlock in deliberately so the router can't be switched on while it's parked at the bit-change depth, and can't be plunged to that depth while the switch is live. Working through the sequence above (power off, plunge to depth, change the bit, return to operating depth, then switch on) is the whole fix, and it costs nothing."
source_type: "researched"
sources:
  - "Triton MOF001 1400W Dual Mode Precision Plunge Router, Operating & Safety Instructions (code 330085) — Functions section (Power Switch, Collet Lock) and Troubleshooting table ('Shutter on power switch not releasing', 'Can't plunge to collet lock position' rows); UK/EU hardware confirmed via 230-240V part numbers (TRA 386 speed controller, TRA 054 switch) and the Triton Workshop Systems (UK) Ltd address"
date_published: 2026-11-09
---

## The symptom pattern

Two complaints about this router both look like a dead switch or a
jammed plunge mechanism, and they tend to show up together: the power
switch sits dead under a finger, refusing to move at all, or the router
won't plunge down far enough to get the collet out where a spanner can
reach it for a bit change. Neither one is damage — Triton built them
into the router on purpose, as two sides of the same interlock.

## What Triton's own documentation says

The manual describes a "retracting switch shutter" that "prevents
accidental starting of the router. It must be retracted before the
router can be switched on." That shutter is directly tied to the collet
lock: "the retracting shutter will lock closed when the collet lock is
engaged" — in other words, parking the router at full plunge depth to
change a bit deliberately locks the switch shut.

The other direction is in the troubleshooting table itself: "Shutter on
power switch not releasing — Router is plunged to full depth - in
collet lock position — Reduce plunge depth," and separately, "Can't
plunge to collet lock position — Power switch 'On' — Switch power
'Off'." The two rows describe the same lockout from opposite ends: the
switch won't open while the router is at collet-lock depth, and the
router won't reach collet-lock depth while the switch is live.

## Working through it

If the switch won't move, don't force it — check the plunge depth
first. Bring the router back up to a normal operating depth with the
free plunge or handle winder plunge mode; the manual states this
"disengage[s] the collet lock and release[s] the retracting switch
shutter, enabling access to the power switch." If instead you're trying
to change the bit and the router won't go down far enough, check the
switch is off before anything else — with the motor stopped, plunge to
maximum depth, confirm the depth stop is fully retracted, and the
collet should then protrude through the base for the spanner. Change
the bit, bring the router back to normal depth, and only then try the
switch.

## Verdict

Free, because there's nothing to fix. The interlock exists so the
router physically can't be switched on with the cutter parked at
bit-change depth — working through the sequence in the right order
(power off, plunge down, change the bit, plunge back up, then switch
on) resolves both symptoms every time without opening the tool.
