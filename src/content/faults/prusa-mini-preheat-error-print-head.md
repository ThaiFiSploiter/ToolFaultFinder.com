---
brand: "Prusa"
model: "MINI"
seo_title: "Prusa MINI Preheat Error #12202 — Causes and Fix"
meta_description: "Prusa MINI stops with \"Preheat error print head\" #12202. Why the hotend fails to gain 2 °C in 20 seconds, and the resistance checks that find the fault."
category: "Electronics & Firmware"
symptom: "Printer stops during the initial preheat with \"Preheat error print head\" and error code #12202, before the print begins"
likely_cause: "The hotend is not gaining heat at all — usually a broken or intermittent connection in the heater or thermistor wiring at the print head, rather than a failed mainboard"
diagnostic_steps:
  - "Note when the error appears. #12202 is raised when the printer cannot heat the hotend more than 2 °C in 20 seconds, so it points at heat never arriving — not at heat being lost, which is the separate thermal runaway error #12204"
  - "Switch the printer off and unplug it, then inspect the print-head loom for split insulation or a severed core, paying attention to where the cables flex as the head moves"
  - "With the printer still off, move the thermistor and heater wires gently by hand at the head — a wire that has parted inside intact insulation will often only show up under movement"
  - "Loosen the cover screw on the Buddy mainboard, remove the cable cover, and confirm the thermistor and heater connectors are fully seated in their sockets"
  - "With the printer off, at room temperature and the component unplugged from the mainboard, measure the hotend thermistor on a multimeter's 200 kΩ range — Prusa rates its thermistors at 100 kΩ at 25 °C and gives 80 kΩ to 125 kΩ across normal room temperatures. An open circuit means a broken thermistor or its wiring"
  - "Measure the hotend heater the same way on the 200 Ω range. Prusa publishes its hot-end heater windows per model and does not list the MINI among them, so read this one qualitatively rather than against a number: a low, steady resistance is what you want, and an open circuit means the heater cartridge or its wiring has failed"
  - "Repeat both measurements while flexing the cable at the head. A reading that jumps or drops out confirms a micro-fracture in the loom rather than a failed component"
fix_or_verdict: "Worth repairing. Both the thermistor and the heater cartridge are inexpensive, individually replaceable service parts with published Prusa service guides, so this is a cheap fix once the multimeter has told you which one it is — and if the reading only misbehaves when you move the cable, the part is fine and it is the loom that needs attention."
source_type: "researched"
sources:
  - "Prusa Knowledge Base — \"Preheat error print head #12202 (MINI)\" (trigger condition, likely causes, wiring and connector checks)"
  - "Prusa Knowledge Base — \"Multimeter usage\" (thermistor and heater resistance figures, meter ranges, and the cold/unplugged precaution)"
  - "Prusa Knowledge Base — \"Thermal runaway print head #12204 (MINI)\" (the contrasting trigger condition)"
date_published: 2026-08-24
---

## The symptom pattern

The printer is asked to start a print, the hotend begins to warm, and within
half a minute the display stops everything with *Preheat error print head* and
the code **#12202**. Nothing has actually printed. Power-cycling gets the same
result, sometimes after the temperature has crept up a few degrees, sometimes
with the reading barely moving off ambient.

It is easy to read this as a dead mainboard, because the printer appears to be
refusing to do anything at all. It is more often a wiring fault a few
centimetres from the nozzle.

## What's actually happening

Prusa's firmware raises #12202 when the printer **cannot heat the hotend more
than 2 °C in 20 seconds**. That is a deliberately specific test, and it is worth
understanding what it rules out. The check does not say the hotend got hot and
then lost heat — that is the separate thermal runaway error, #12204, which fires
when the temperature *drops* and does not recover. #12202 says the heat never
arrived in the first place.

Two things produce that. Either the heater is not receiving power, or the
thermistor is not reporting the temperature it should. Both are usually a
connection problem rather than a dead part, because the print head is the one
place on the machine where the cables are flexed thousands of times per print.
A conductor can fracture inside insulation that still looks perfect.

## Working through it

Start with your eyes, with the printer off and unplugged. Follow the loom from
the head back and look for split insulation or a crushed section. Then move the
wires by hand near the head — intermittent faults often only reveal themselves
under movement, and that is a much faster diagnosis than reading temperatures.

Next, open the Buddy board's cable cover and check the thermistor and heater
connectors are properly seated. Connectors that have vibrated part-way out of
their sockets are common enough to be worth eliminating before reaching for the
multimeter.

Then measure — printer off, at room temperature, and the component unplugged
from the mainboard. On the 200 kΩ range the thermistor should read **80 kΩ to
125 kΩ**; Prusa rates its thermistors at 100 kΩ at 25 °C and gives that band to
cover normal room temperatures. The heater goes on the 200 Ω range, but here
it is worth being careful about what the numbers mean: Prusa's published
hot-end heater windows are given per printer model, and the MINI is not one of
the models listed, so treat the reading as a pass/fail rather than matching it
to a figure quoted for a different machine. A low, steady resistance is normal;
an open circuit identifies the failed side outright.

The step people skip is the useful one: take both readings again while flexing
the cable where it enters the head. A component that measures correctly at rest
but drops out when moved is not a faulty component — it is a broken conductor,
and swapping the part will not fix it.

One thing not to do if you find a broken thermistor wire: Prusa specifically
advises against soldering these back, because the joint changes the thermistor's
resistance and therefore the temperature the printer thinks it is reading.

## Verdict

Worth repairing, and cheaply. The thermistor and heater cartridge are both
inexpensive service parts sold individually, with Prusa service guides for
fitting them, so once the meter has told you which side has failed the job is
straightforward. The important thing is to let the flex test decide between a
failed part and a failed cable, because those are two different repairs and
only one of them is fixed by buying a new heater.

Isolate the printer at the mains before opening anything or taking any reading —
these are low-voltage measurements, but the PSU behind them is not.
