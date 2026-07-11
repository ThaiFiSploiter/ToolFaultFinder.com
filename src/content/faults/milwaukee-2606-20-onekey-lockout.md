---
brand: "Milwaukee"
model: "2606-20"
image: "./img/milwaukee-2606-20.png"
image_alt: "Line-art illustration of the Milwaukee M18 2606-20 drill driver"
category: "Electronics & Firmware"
symptom: "Drill appears completely dead with a fully charged battery — no lights, no response, as if the tool has failed entirely"
likely_cause: "The tool has been remotely locked via Milwaukee's One-Key app, not a hardware fault — a locked tool looks and behaves exactly like a dead one"
diagnostic_steps:
  - "Confirm the battery itself works: swap in a different known-good M18 battery, and/or test the suspect battery in a different M18 tool"
  - "Check whether the tool or battery has ever been paired with the One-Key app, even briefly — a shop demo unit, a previous owner, or a company fleet setup can all leave a lock in place"
  - "Look for a One-Key badge or Bluetooth icon on the tool's body or nameplate, which marks it as One-Key capable"
  - "If One-Key capable, download the free Milwaukee One-Key app and try to connect to the tool over Bluetooth to check its lock status"
  - "Stay close to the tool while checking — it needs to be within Bluetooth range of the phone to unlock"
fix_or_verdict: "If genuinely locked, unlocking via the One-Key app resolves it instantly and costs nothing — check this before assuming a dead circuit board or motor. Only pursue hardware diagnosis once a One-Key lockout is ruled out."
source_type: "researched"
sources:
  - "Milwaukee One-Key tool security / lockout feature documentation"
  - "iFixit Milwaukee 2606-20 troubleshooting wiki"
  - "User and repair-forum reports of M18 tools appearing 'dead' due to One-Key lockout"
date_published: 2026-07-11
---

## The symptom pattern

A Milwaukee M18 tool suddenly stops responding entirely — no trigger
response, no LED, nothing — even though the battery is confirmed good on a
charger or in another tool. It looks exactly like a catastrophic failure: a
dead circuit board, a blown trigger switch, or a bricked tool. Owners often
assume the worst and start pricing a replacement before checking anything
else.

## What's actually happening

Many M18 tools ship with Milwaukee's One-Key Bluetooth system built in,
which lets an owner remotely track, customize, and — critically — lock the
tool via a phone app. A locked tool is designed to look completely dead: no
lights, no trigger response, nothing to distinguish it from a genuine
hardware failure. That's a deliberate anti-theft feature, not a bug, but it
produces symptoms identical to a dead tool. It's an especially easy trap on
a secondhand tool, or one briefly paired with One-Key by a previous owner, a
shop demo unit, or a company fleet-management setup, since the lock persists
even after the tool changes hands.

## Working through it

Rule out the battery first: swap in a different known-good M18 battery,
and/or test the suspect battery in a different M18 tool. If the tool is
still unresponsive with a confirmed-good battery, check the body for a
One-Key badge or Bluetooth icon — that marks it as One-Key capable. Download
the free Milwaukee One-Key app, stand close to the tool with Bluetooth
enabled, and try to connect — the app shows the tool's current lock status
and lets you unlock it on the spot if it's been locked. This costs nothing
and takes a couple of minutes, so it's worth doing before opening the tool
up or writing it off.

## Verdict

If the tool is One-Key capable, check for a lockout before any other
diagnosis — it's a free, two-minute check that fully resolves the fault if
that's the cause. Only move on to genuine hardware diagnosis (circuit board,
trigger switch) once a One-Key lock has been ruled out.
