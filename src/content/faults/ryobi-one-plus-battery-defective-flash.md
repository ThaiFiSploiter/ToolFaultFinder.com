---
brand: "Ryobi"
model: "ONE+ 18V"
category: "Batteries & Charging"
symptom: "Battery refuses to charge after storage — charger flashes its 'defective' pattern the moment the pack is inserted"
likely_cause: "Deep discharge during storage has dropped the cells below the cutoff voltage the charger accepts, so it flags a healthy-but-empty pack as faulty"
diagnostic_steps:
  - "Rule out the charger: try a known-good battery in it, and the suspect battery in a second charger if one is available"
  - "Clean the battery and charger terminals — oxidised or dusty contacts produce the same rejection"
  - "Measure voltage across the pack's main terminals: a healthy resting 18V pack reads around 18–20V; a deeply discharged one reads well below that"
  - "Check the pack for swelling, dents, leakage, or any smell — physical damage means stop, the pack is scrap regardless of voltage"
  - "Try short charge bursts: insert the pack for a few seconds, remove, reinsert, and repeat — many chargers will accept the pack once the voltage creeps above the cutoff"
fix_or_verdict: "Often recoverable at no cost via short charge-burst cycling if the pack was simply stored flat. A pack that is swollen, damaged, or reads near zero volts is done — recycle it, don't push it."
source_type: "researched"
sources:
  - "Ryobi ONE+ charger manual (LED status indicator table)"
  - "Lithium-ion battery management references on over-discharge cutoff behaviour"
  - "Widespread user reports of deep-discharge recovery on tool forums and r/ryobi"
date_published: 2026-05-22
---

## The symptom pattern

A battery that worked fine goes into a drawer for a few months, and on its
return the charger immediately shows its defective indication and refuses to
charge. The pack shows no damage and was never abused. This pattern — fine
before storage, "defective" after — is reported constantly across every
cordless platform, and Ryobi's ONE+ range is no exception.

## What's actually happening

Lithium-ion packs self-discharge slowly in storage, and the pack's electronics
draw a small current on top. Store a partly flat pack for long enough and the
cells sink below the minimum voltage the charger is designed to accept. The
charger can't tell the difference between "healthy but over-discharged" and
"genuinely failed", so it errs on the side of caution and rejects the pack.

That caution exists for a reason. Cells held below their minimum voltage for
long periods can develop internal damage that makes recharging them genuinely
hazardous. The recovery approach below is for packs that spent a manageable
time slightly under the cutoff — not for packs that read near zero volts or
have sat flat for years.

## Working through it

First eliminate the cheap explanations: test the charger with a known-good
pack, and clean both sets of terminals — a film of workshop dust produces the
same rejection as a flat cell. Then measure the pack voltage across its main
terminals. Just under the cutoff is the recoverable case; a reading near zero,
or any swelling or smell, means the pack is scrap.

For the recoverable case, the widely reported technique is charge-burst
cycling: insert the pack, leave it a few seconds, pull it out, reinsert, and
repeat. Each burst nudges the voltage up before the charger's rejection logic
trips, and after a number of cycles the pack crosses the threshold and charges
normally. Supervise the first full charge and check the pack doesn't get more
than mildly warm.

## Verdict

Zero-cost fix in the common case. Prevent the recurrence by storing packs
around half charge rather than empty, and topping them up every few months.
Never attempt to recover a swollen, damaged, or near-zero pack, and never
charge any recovered pack unattended for the first cycle.
