---
brand: "Ryobi"
model: "ONE+ 18V"
seo_title: "Ryobi ONE+ 18V Charger Flashing Defective — What It Means"
meta_description: "Ryobi ONE+ 18V charger flags a stored pack as defective the moment it goes in. What the flashing LEDs mean, how to isolate battery vs charger, and what Ryobi's own guidance says to do next."
image: "./img/ryobi-one-plus-18v.png"
image_alt: "Line-art illustration of a Ryobi ONE+ 18V lithium battery pack with its charge indicator and release latch"
category: "Batteries & Charging"
symptom: "Battery refuses to charge after storage — charger shows its 'defective' LED pattern the moment the pack is inserted"
likely_cause: "Usually the battery, not the charger — a pack that sat flat in storage can trip the charger's defective-pack logic. Ryobi's own support guidance treats this as a swap-test case, not a diagnosis you can make from the LED pattern alone"
diagnostic_steps:
  - "Remove and reinsert the suspect battery once — Ryobi's own guidance has this as the first step before concluding anything is actually faulty"
  - "Swap-test: try the suspect battery in a different charger if one is available, and a known-good battery in the suspect charger. Whichever one still shows the fault is the actual problem"
  - "Clean the battery and charger terminals — oxidised or dusty contacts can produce the same rejection as a genuine fault"
  - "Check the pack for swelling, dents, leakage, or any smell — physical damage means stop regardless of what the charger shows"
fix_or_verdict: "There is no Ryobi-published recovery procedure for a pack that fails the swap test — their own support guidance stops at isolating battery from charger, then routes a confirmed-faulty unit to warranty assessment or an authorised service centre. If the pack is still within warranty, that is the route to use rather than anything attempted at home. Out of warranty, a battery that fails the swap test and shows no physical damage is reasonably replaced; a charger that fails it is the cheaper half to replace. Treat charge-cycling tricks circulating on forums as unverified — Ryobi doesn't publish or endorse one, and repeatedly cycling a pack that may have been damaged by deep discharge is not a risk worth taking to save the cost of a battery."
parts:
  - name: "Replacement 18V ONE+ battery pack"
    note: "Check warranty first — Ryobi's own guidance routes a confirmed-faulty pack to warranty assessment or a service centre, not a home fix. Only buy once that's ruled out."
    search: "Ryobi ONE+ 18V battery pack"
  - name: "ONE+ battery charger"
    note: "Only if the swap test points to the charger rather than the battery, and warranty doesn't cover it."
    search: "Ryobi ONE+ 18V battery charger"
source_type: "researched"
sources:
  - "Ryobi Support Australia — \"How to Troubleshoot a Ryobi Charger That's Not Lighting Up or Charging\" (support.ryobi.com.au)"
  - "Ryobi Support New Zealand — \"What Do LED Lights Mean? Ryobi 18V Multi-Port Chargers\" (support.ryobi.co.nz)"
date_published: 2026-05-22
---

## The symptom pattern

A battery that worked fine goes into a drawer for a few months, and on its
return the charger immediately shows its defective indication and refuses to
charge. The pack shows no damage and was never abused. This pattern — fine
before storage, "defective" after — is reported constantly across every
cordless platform, and Ryobi's ONE+ range is no exception.

## What Ryobi's own guidance actually says

Ryobi's support documentation for its 18V chargers is explicit that a
"defective" LED pattern (on most ONE+ chargers, the red and green LEDs
flashing together) does not by itself tell you whether the fault is the
battery or the charger — it describes a swap test instead: try a different
battery in the same charger, and the suspect battery in a different charger
if one is available. If a different battery charges normally, the original
battery is the likely fault; if a different battery also shows the same
pattern, suspect the charger instead.

What the official guidance does **not** do is offer a home recovery
procedure. Once the swap test confirms a fault, Ryobi's own instruction is to
return the faulty unit for warranty assessment or take it to an authorised
service centre — not to attempt anything further at home. That's worth
taking at face value: a pack that's been deeply discharged in storage can
develop internal cell damage, and a manufacturer that routes this to a
service check rather than publishing a DIY fix is making a deliberate choice,
not an oversight.

## Working through it

Start with the simple checks the official guidance itself leads with: remove
and reinsert the battery once, then run the swap test — the suspect battery
in a different charger, a known-good battery in the suspect charger. While
you're at it, clean both sets of terminals; a film of workshop dust can
produce the same rejection as a genuine fault. Check the pack for swelling,
dents, leakage, or any smell at every stage — any of those means stop
regardless of what the LEDs show.

You will likely come across "charge-burst cycling" advice on forums —
repeatedly inserting and removing a flat pack to coax a charger's rejection
logic into accepting it. Ryobi doesn't publish or endorse this, and there's
no way to verify from here whether it's safe on a given pack. Given that the
manufacturer's own position is to route a confirmed-faulty pack to a service
check rather than a home procedure, that's the more honest answer, even
though it means no guaranteed free fix.

## Verdict

Run the swap test before buying anything — plenty of "defective" readings
turn out to be the charger, a dirty contact, or resolve on a simple
reinsert. If the battery fails the test and is still under warranty, that's
the route to use. Out of warranty, with no physical damage and a confirmed
fault, replacing the failed half (pack or charger, whichever the swap test
points to) is reasonable — there's no manufacturer-backed way to revive a
pack that's actually failed.
