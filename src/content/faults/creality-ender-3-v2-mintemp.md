---
brand: "Creality"
model: "Ender 3 V2"
seo_title: "Ender 3 V2 \"Err: MINTEMP\" Printer Halted — Fix"
meta_description: "Ender 3 V2 stops with Err: MINTEMP and \"Printer halted. kill() called!\". Why it is almost always a broken thermistor lead — and when it is just a cold garage."
category: "Electronics & Firmware"
symptom: "Printer stops dead and the screen shows 'Err: MINTEMP' with 'Printer halted. kill() called!' — nothing responds until it is switched off and on again"
likely_cause: "An open circuit in a temperature-sensor path — usually a thermistor lead fatigued where the hotend loom flexes — so the firmware reads an impossibly low temperature and shuts everything down; a genuinely cold workshop can trip the same limit with nothing broken"
diagnostic_steps:
  - "Read which heater the message names. A MINTEMP on the bed and a MINTEMP on the nozzle sit on completely separate wiring runs, and chasing the wrong one wastes an evening"
  - "Check the room temperature before you strip anything. Marlin's default minimum is 5 °C, so an unheated garage on a cold morning can trip MINTEMP legitimately — warm the space, restart, and see whether the fault simply goes away"
  - "Power the printer on but command no heating. Watch the reported temperature on the display while gently flexing the hotend loom where it enters and leaves the drag chain: a figure that flicks to zero or jumps about as you move it has located a broken conductor at the flex point"
  - "Switch off and unplug, then unplug and reseat the thermistor connector at both ends — at the hotend and at the mainboard. Look closely at the crimps for the bright glint of a strand that has parted, and for wire that has gone stiff and brittle near the heat"
  - "With the printer still unplugged, measure the thermistor's resistance at the mainboard connector. The Ender 3 V2 uses a 100 kΩ NTC, so expect somewhere around 100 kΩ at normal room temperature; an open circuit confirms a broken sensor or a broken lead"
  - "If the hotend thermistor reads correctly at the board but the error persists, move the suspicion to the mainboard's thermistor input — but only after the wiring has genuinely been cleared, because the wiring is the common case by a wide margin"
  - "Do not raise the MINTEMP threshold in firmware or comment the check out to silence the message. It is the protection that stops the printer driving a heater with no working temperature feedback, and it is the reason a broken thermistor is an inconvenience rather than a fire"
fix_or_verdict: "Nearly always a broken thermistor lead where the loom flexes, and a replacement cartridge thermistor is a few pounds and about twenty minutes — among the cheapest repairs on any 3D printer. Rule out a cold room and a loose connector first, because both cost nothing at all."
source_type: "researched"
sources:
  - "Marlin Firmware configuration documentation — HEATER_0_MINTEMP (default 5 °C) and the MINTEMP safety cut-out"
  - "Creality official community forum thread \"Error:MINTEMP triggered, system stopped! Heater_ID: 0\""
  - "mriscoc/Ender3V2S1 firmware repository discussions on MINTEMP and thermistor faults"
date_published: 2026-08-23
---

## The symptom pattern

Mid-print, or sometimes at the moment heating is commanded, the Ender 3 V2
stops and puts `Err: MINTEMP` on the screen, usually alongside `Printer
halted. kill() called!`. Everything locks up: the controls do nothing, the
heaters go off, and only a power cycle brings it back. Sometimes it prints
fine afterwards for a week. Sometimes it fails again within minutes, and
increasingly often as time goes on.

That pattern — intermittent at first, then more frequent — is characteristic,
and it points at a specific kind of failure.

## What's actually happening

MINTEMP is not a fault report. It is a safety cut-out doing its job.

Marlin, the firmware family the Ender 3 V2 runs, compares each thermistor's
reading against a configured minimum. If the temperature comes back below
that floor, the firmware concludes the reading cannot be trusted and halts
the machine rather than continue driving a heater blind. The default minimum
is 5 °C. A working thermistor in a normal room reads well above that, so in
practice a MINTEMP means the temperature-sensor circuit has gone open — the
board is reading, in effect, nothing at all.

Open circuits in this position are usually mechanical. The hotend loom on a
bedslinger moves thousands of times a print, and copper work-hardens where it
flexes. A strand parts, then another, and the connection becomes marginal
before it becomes permanent — which is exactly why the fault starts as an
occasional halt and becomes a reliable one. Connectors that have worked
loose, and crimps that have gone brittle from sitting near the heater block,
produce the same picture.

There is one honest exception. If the printer lives in an unheated UK garage
in winter and the ambient really is below the configured floor, MINTEMP can
trigger with absolutely nothing wrong. It is worth ten seconds of thought
before it is worth an hour of dismantling.

## Working through it

Use the reported temperature as your test instrument. Power on, command no
heat, and flex the loom by hand while watching the number on the display.
Nothing is hot, nothing is moving under power, and a healthy circuit holds a
steady reading through the full range of movement. A reading that drops to
zero as you bend a particular spot has told you where the break is.

If that comes back clean, unplug and work the connectors — both ends, hotend
and mainboard — and inspect the crimps properly under a light. Then measure:
around 100 kΩ at room temperature for a healthy 100 kΩ NTC, open circuit for
a dead one.

What not to do is edit the threshold out. It is tempting when a message keeps
stopping a long print, and it removes the only thing standing between a
broken sensor and an unmonitored heater.

## Verdict

A cheap fix with a scary message attached. Cold ambient and a loose connector
cost nothing to rule out; beyond that, a replacement cartridge thermistor is
a couple of pounds and a short job with a hex key. Nothing about a MINTEMP
suggests the printer is finished — it suggests the printer noticed.
