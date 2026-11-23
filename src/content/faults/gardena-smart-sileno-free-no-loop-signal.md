---
image: "./img/gardena-smart-sileno-free.png"
image_alt: "Line-art illustration of the Gardena smart SILENO free robotic lawnmower docked at its charging station, showing the low-voltage cable running into the station's base and the status LED on the station"
seo_title: "Gardena smart SILENO free: No Loop Signal Fix"
meta_description: "Gardena smart SILENO free showing 'No loop signal'? The manual's own four causes — power, cable, pairing, interference — checked in the right order."
brand: "Gardena"
model: "smart SILENO free"
category: "Electronics & Firmware"
symptom: "The GARDENA smart system app or the charging station shows a 'No loop signal' message, and the robotic mower won't leave the charging station to start mowing"
likely_cause: "Gardena's own troubleshooting table treats this as the charging station's own signal being lost — caused by a power or cable problem, a lost pairing between the mower and the station, or metal interference near the station — and not a fault in the mower itself"
diagnostic_steps:
  - "Isolate the system before touching anything: unplug the charging station's power supply unit from the wall outlet first"
  - "Look at the LED status indicator on the charging station. If it isn't lit, there's no power reaching the station — check the wall outlet and the residual-current device (RCD) the manual requires on that circuit"
  - "With power confirmed, check that the low-voltage cable is properly connected to the charging station. This cable carries the signal the mower relies on, separately from the mains power supply"
  - "Inspect the power supply unit and the low-voltage cable for visible damage. Gardena's manual gives no repair step here — a damaged cable or power supply is a replace, not a fix"
  - "If the cable and power check out, suspect a lost pairing between the mower and the station and redo the charging station installation in the GARDENA smart system app"
  - "If the fault persists, check what's buried or fixed near the charging station — the manual names fences, reinforcing steel and buried cables as sources of interference with the station's signal, and the fix is repositioning the station away from them"
fix_or_verdict: "Nothing about this fault is a mower repair — every cause Gardena's table gives sits at the charging station or its cabling, not inside the robot itself. Start with the free checks in order: power to the station, then the low-voltage cable connection, since those cost nothing to rule out. A damaged power supply or low-voltage cable is a straightforward replacement part, not a service job. Only reach for repositioning the station or redoing the app pairing if the power and cable both check out clean."
parts:
  - name: "Gardena low-voltage cable (charging station connection)"
    note: "Only buy this if you've confirmed the existing cable is damaged, not just loose — check the connection first."
    search: "Gardena robotic mower low voltage cable"
source_type: "researched"
sources:
  - "GARDENA smart SILENO free Operator's Manual (doc 2516-001), Section 7.1 Messages — 'No loop signal' row, Section 3.1.4 (low-voltage cable/charging station signal caution), and Section 11 Applicable to UK market"
date_published: 2026-11-23
---

## The symptom pattern

The mower sits at its charging station and won't set off to mow, and the
GARDENA smart system app reports a **"No loop signal"** message. This is
one of Gardena's own named fault messages for the smart SILENO free, not a
generic "something's wrong" error — the manual gives it a dedicated row in
the Messages table with its own set of causes.

## What's actually happening

The charging station puts out its own signal over the low-voltage cable
that connects it — the manual's own installation warnings confirm this,
cautioning against coiling the cable near the station because "the coil
causes interference with the signal from the charging station." That's a
separate system from the "virtual boundary" the mower navigates
by using satellite positioning — Gardena's manual treats a lost boundary
signal ("Outside work area") and a lost charging-station signal ("No loop
signal") as two different messages with two different causes, and this
entry only covers the second one. The manual doesn't spell out exactly
what the mower does with the station's signal, only what breaks it and
how to fix each cause.

For "No loop signal" specifically, the manual lists four causes: the power
supply or low-voltage cable isn't connected, the power supply or cable is
damaged, the pairing between the mower and the station has been lost, or
something metal near the station — a fence, reinforcing steel, a buried
cable — is interfering with its signal.

## Working through it

Unplug the charging station's power supply from the wall outlet before
you handle any of the cabling. Then work through the causes in the order
Gardena's own table gives them:

Check the LED status indicator on the charging station first. If it's
not lit, the station has no power — check the wall outlet and the
residual-current device (RCD) the manual requires on that circuit.

With power confirmed at the station, check that the low-voltage cable is
properly connected. This is the cable that actually carries the signal
the mower is missing, and it's separate from the mains lead.

Look over the power supply unit and the low-voltage cable themselves for
damage. The manual doesn't offer a repair step for a damaged cable or
power supply — it goes straight to replacement.

If the wiring is sound, the next cause is a lost pairing between the
mower and the station. Redo the charging station installation in the
GARDENA smart system app rather than touching any hardware.

Only after all of that should you look at what's near the station
itself. Metal objects in the ground — fences, reinforcing steel, buried
cables — can interfere with the signal the station puts out, and
Gardena's fix for that is simply repositioning the station away from
them.

## Verdict

Every cause behind "No loop signal" sits at the charging station or its
cabling, not inside the mower. Work through the checks in the manual's
own order — power, then the low-voltage cable connection, then damage,
then pairing, then interference — since the first two cost nothing to
check. A genuinely damaged power supply or low-voltage cable is a cheap,
straightforward replacement part rather than anything that needs a
service centre.
