---
brand: "Makita"
model: "DUC302"
seo_title: "Makita DUC302 Cordless Chainsaw Won't Start"
meta_description: "Makita DUC302 chainsaw won't start. Makita's own fault table plus the lock-off button, chain brake and overheat-protection checks it doesn't group together."
image: "./img/makita-duc302.png"
image_alt: "Line-art illustration of the Makita DUC302 cordless chainsaw showing the twin battery bay, lock-off button and switch trigger on the top handle, and the front hand guard chain brake"
category: "Batteries & Charging"
symptom: "The chainsaw won't start — nothing happens when the switch trigger is pulled, even with a battery fitted"
likely_cause: "Usually one of several separate start conditions rather than a fault: a missing second battery, an unreleased chain brake, the lock-off button not pressed first, or the tool/battery protection system silently blocking a start"
diagnostic_steps:
  - "Check two battery cartridges are fitted and locked in with a click — the DUC302 runs on 36V made from two 18V packs, and its own note states plainly that the tool does not work with only one battery cartridge"
  - "Release the chain brake before assuming a fault: Makita's manual gives this as a direct cause of a saw that fails to start, with the fix stated as 'pull the front hand guard backwards firmly until you feel it engage'"
  - "Check the start sequence: this saw has a lock-off button on top of the rear handle that must be depressed before the switch trigger is pulled — pulling the trigger alone, without the button, does nothing by design"
  - "If the batteries are fitted, charged and the sequence is right, recharge both battery cartridges fully — Makita names battery undervoltage as the specific cause in its own trouble-shooting table, with a full recharge as the first remedy and replacement only if that doesn't work"
  - "Rule out overheat protection: if the saw or a battery has been run hard or left in direct sun, Makita's manual states the tool 'does not start even if pulling the switch trigger' while overheated, and gives no indicator for this condition — let it cool fully before trying again"
  - "If none of the above brings it back, that's the point to stop self-diagnosing — Makita gives no further owner-level fault list beyond these causes, and anything past this is a job for an authorised service centre"
fix_or_verdict: "Almost always free to fix yourself: fit the second battery, release the chain brake, and remember the lock-off button has to be pressed before the trigger, which is easy to forget on a saw you don't use daily. A recharge fixes a genuinely low battery; a pack that won't hold charge afterwards needs replacing, which is a normal running cost rather than a fault. Beyond that Makita's own documentation stops, so a saw that still won't start once all of these are ruled out is a service-centre matter, not something to keep testing on a live blade."
parts:
  - name: "18V LXT battery pack (BL1815N / BL1830 / BL1840 compatible)"
    note: "Only after a full recharge fails to restore it — the DUC302 needs two matched packs fitted together to run at all."
    search: "Makita 18V LXT battery BL1830 BL1840"
  - name: "300mm chainsaw chain (3/8in pitch, 1.1mm gauge, 46 drive links)"
    kind: "consumable"
    note: "Not related to a won't-start fault — the standard replacement chain size this saw's spec table lists for the 300mm bar."
    search: "Makita DUC302 chainsaw chain 3/8 1.1mm 46 drive links"
source_type: "researched"
sources:
  - "Makita DUC252/DUC302 Cordless Chain Saw instruction manual (covers both models) — the Trouble Shooting table entry for 'Chain saw does not start', causes 'Two battery cartridges are not installed' and 'Battery problem (under voltage)'"
  - "Same manual — 'Checking the chain brake' section: 'If the chain saw fails to start, the chain brake must be released. Pull the front hand guard backwards firmly until you feel it engage.'"
  - "Same manual — Switch action and Tool/battery protection system sections, on the lock-off button plus switch trigger sequence and the overheat protection behaviour"
date_published: 2026-09-16
---

## The symptom pattern

Battery's in, trigger's being pulled, and the saw does precisely nothing.
It's easy to read that as the chainsaw itself having failed, but the DUC302
is built with several separate conditions that all have to be satisfied
before it will run — and on a cordless chainsaw, most "won't start" reports
turn out to be one of those rather than a genuine fault.

## What's actually happening

Makita's own trouble-shooting table lists "chain saw does not start" with
two causes: two battery cartridges not installed, and battery undervoltage.
The DUC302 is a 36V tool built from two 18V LXT packs, and the manual is
explicit that "the tool does not work with only one battery cartridge" — fit
only one and, by design, nothing happens.

The chain brake is the cause that isn't in that table at all, but is given
its own direct instruction elsewhere in the manual: "If the chain saw fails
to start, the chain brake must be released. Pull the front hand guard
backwards firmly until you feel it engage." An engaged front hand guard is a
common reason a saw refuses to start after being set down or carried with
the guard nudged forward.

Then there's the start sequence itself. The DUC302 has a lock-off button on
top of the handle that has to be pressed before the switch trigger will do
anything — the manual's own instruction is "depress the lock-off button and
pull the switch trigger," in that order. Pulling the trigger on its own
achieves nothing, which is exactly the "it's dead" moment that leads people
to suspect a fault that isn't there.

The other silent cause is the tool/battery protection system. If the tool or
a battery has overheated, Makita states plainly that "the tool does not
start even if pulling the switch trigger" — and there's no warning light for
this condition on the saw itself, only the instruction to let it cool.

## Working through it

Confirm two batteries are fitted and clicked fully home — you should not be
able to see the red indicator on either battery's release button. Check the
front hand guard hasn't been knocked forward into the brake-engaged
position, and pull it back firmly toward the handle until it releases.
Then check the sequence: press the lock-off button first, and only then pull
the switch trigger, holding both together.

If all three of those are correct and it still won't run, recharge both
battery cartridges fully on the charger before testing again — undervoltage
is the specific cause Makita's table names for this exact symptom. If a
battery won't take or hold a charge afterwards, it's reached the end of its
useful life and needs replacing rather than repairing.

If the saw or a battery has recently been worked hard, or left somewhere
hot, give it time to cool before writing it off — the overheat protection
gives no indicator and can look identical to a dead tool.

## Verdict

Free, in order: two batteries fitted, chain brake released, lock-off button
pressed before the trigger. That clears the overwhelming majority of
"won't start" reports on this saw without spending anything. A pack that
won't recharge is a normal wearing part, priced like any 18V LXT battery.
Once all of the above is ruled out, Makita's own documentation has nothing
further to check — at that point it's a service-centre fault, not one to
keep testing with a bar and chain fitted.
