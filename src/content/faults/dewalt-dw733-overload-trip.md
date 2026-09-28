---
brand: "DeWalt"
model: "DW733"
seo_title: "DeWalt DW733 Thicknesser Cuts Out / Trips — Fix"
meta_description: "DeWalt DW733 stops mid-cut and won't restart. The overload breaker and reset button fix, per DeWalt's own manual, and how to stop it recurring."
image: "./img/dewalt-dw733.png"
image_alt: "Line-art illustration of the DeWalt DW733 portable thicknesser with its infeed table, cutterhead cover, and the switch and reset button on the front"
category: "Motor & Drive"
symptom: "Thicknesser cuts out mid-job and the switch won't restart the motor until you find and press a reset button"
likely_cause: "The built-in motor-overload circuit breaker in the On/Off switch has tripped — usually from taking too heavy a cut, feeding too fast, or starting the cut with the workpiece already touching the cutterhead — and is protecting the motor rather than failing"
diagnostic_steps:
  - "Turn the machine off at the switch first — DeWalt's manual is explicit that the reset button only works once the tool has been switched off, not while it's still trying to run"
  - "Find the reset button on the switch housing (item 36 in the manual's figure) and press it"
  - "Before switching back on, check the workpiece is clear of the cutterhead — the manual states the workpiece should not be in contact with the cutterhead when switching on, and starting under load is exactly what trips the breaker a second time"
  - "Restart with the green start button and let the motor reach full speed before feeding anything in — feeding while it's still spinning up is named directly as a way to overload it again"
  - "If it keeps tripping on cuts that used to run fine, look at what changed: a deeper pass than the machine's stated depth-of-cut guidelines for that width of stock, feeding faster than the cutterhead can clear, or blunt blades making the motor work harder for the same cut. None of these are the reset button's fault"
fix_or_verdict: "This is a protection feature doing its job, not a failure — pressing the reset button after switching off, then restarting clear of the workpiece, clears the great majority of these with no cost at all. If it trips repeatedly on cuts within the machine's own depth and feed guidance, the likely next step is blunt blades increasing cutting resistance, which is a cheap consumable to check before assuming anything electrical is wrong."
parts:
  - name: "DW733 replacement planer blades (pair)"
    kind: "consumable"
    note: "Check these before anything else if the breaker trips on cuts the machine used to manage — blunt blades make the motor work harder for the same depth of cut. DeWalt's manual gives a 3mm re-sharpening limit before the blades need replacing outright."
    search: "DeWalt DW733 planer blades"
source_type: "researched"
sources:
  - "DeWalt DW733 Instruction Manual, UK/GB edition (DW733_T11_GB_XE.pdf) — 'Switching On and Off' and 'Changing Blades' sections"
date_published: 2026-09-28
---

## The symptom pattern

Mid-way through a run of boards, or sometimes on the very first pass of a
thick or wide piece, the DW733 simply stops. The green start button does
nothing when you press it again — the motor is dead until something else
is done first, which is what throws people, because nothing about the
machine looks broken.

## What's actually happening

DeWalt builds a circuit breaker into the DW733's On/Off switch specifically
to protect the motor from overload. Draw too much current — by taking a
deep cut, feeding the workpiece too fast for the cutterhead to clear, or
starting the machine with the workpiece already pressed against the
cutters — and the breaker cuts power to the motor before it overheats.
It's the same idea as a fuse tripping, sized to this one machine.

The switch has a separate reset button for exactly this, and DeWalt's
manual is specific about the order: switch the machine off, then press the
reset button — not the other way round.

## Working through it

Switch the machine off first — trying to reset while the switch is still
in the "on" position doesn't work and isn't how DeWalt's manual describes
the sequence. Locate the reset button on the switch housing and press it;
it should click home. Before you press start again, make sure the
workpiece isn't sitting against the cutterhead — DeWalt states this
directly as a switch-on condition, and skipping it is the single most
common way to trip the breaker a second time in a row. Restart, and let
the motor spin up to full speed before feeding anything through it.

If that clears it and the next few boards run fine, that was a one-off
overload and there's nothing further to do. If the same cut trips it
repeatedly, look at what the cut is asking of the motor rather than at the
switch: check you're within the machine's stated depth-of-cut for that
width of stock, slow the feed rate, and check the blades. DeWalt's manual
notes blades can be re-sharpened up to 3mm down from new before they need
replacing outright — blunt blades cut less efficiently and load the motor
harder for the same result, which is a common reason a previously
reliable cut starts tripping the breaker again.

## Verdict

Not a fault worth worrying about on its own — it's the overload protection
working as designed, and the fix costs nothing but switching off, pressing
the reset button, and clearing the workpiece before restarting. Only chase
further than that if it keeps recurring on cuts the machine used to handle,
in which case check the blades before suspecting the switch itself.
