---
brand: "DeWalt"
model: "DCD776"
seo_title: "DeWalt DCD776 Combi Drill Cuts Out / Won't Restart"
meta_description: "DeWalt DCD776 combi drill cuts out mid-job and won't restart. DeWalt's own Electronic Protection System: what trips it, and the fix."
image: "./img/dewalt-dcd776.png"
image_alt: "Line-art illustration of the DeWalt DCD776 18V XR combi drill showing the battery pack, dual-range gear shifter, keyless chuck and worklight"
category: "Batteries & Charging"
symptom: "The drill switches itself off mid-job with no warning and won't run again straight away"
likely_cause: "DeWalt's Electronic Protection System has engaged to protect the XR Li-Ion battery pack against overloading, overheating or deep discharge, rather than a fault in the drill"
diagnostic_steps:
  - "Stop and think about what the drill was doing when it cut out — labouring hard into a stalling bit or a tight hole points to overload, while a cutout after a long run of heavy drilling points to overheating"
  - "Confirm the battery pack is properly seated — the drill's manual is clear the protection system is a battery-pack function, so a loose or partially-inserted pack can present the same way as a genuine trip"
  - "Try the trigger once, briefly. DeWalt's manual states plainly: 'the tool will automatically turn off if the Electronic Protection System engages.' There is no separate warning light for this on the DCD776 itself — the only sign is the drill stopping"
  - "Do not keep pulling the trigger repeatedly hoping it clears itself — DeWalt's stated fix is specific: 'place the lithium-ion battery pack on the charger until it is fully charged'"
  - "Put the battery on the charger and wait for a full charge before refitting it, rather than a quick top-up — the manual does not describe a partial-charge reset, only a full one"
  - "If the drill still won't run on a battery that has just come off a full charge cycle, that's past what DeWalt's Electronic Protection System section covers, and worth a different battery pack or a service check rather than more charging cycles"
fix_or_verdict: "Free in the documented case. The Electronic Protection System exists specifically to stop rather than damage the battery pack, and DeWalt's own fix is a full charge, not a repair. A pack that won't run the drill again after a genuine full charge is either faulty in its own right or the drill has a separate problem — at that point it's worth testing with a second, known-good XR battery before assuming the tool itself has failed."
parts:
  - name: "18V XR Li-Ion battery pack (DCB1xx series)"
    note: "Only worth replacing if the drill still won't run a fresh, known-good battery after a full charge cycle — test with a second pack first, since the documented fault clears with charging alone."
    search: "DeWalt 18V XR Li-Ion battery DCB184 DCB182"
  - name: "10mm/13mm keyless chuck drill and screwdriver bit set"
    kind: "consumable"
    search: "DeWalt drill driver bit set"
source_type: "researched"
sources:
  - "DeWalt DCD731/DCD734/DCD771/DCD776 instruction manual, GB edition (service.dewalt.co.uk) — Electronic Protection System section: 'XR Li-Ion tools are designed with an Electronic Protection System that will protect the battery pack against overloading, overheating or deep discharge. The tool will automatically turn off if the Electronic Protection System engages. If this occurs, place the lithium-ion battery pack on the charger until it is fully charged.'"
  - "Same manual — Technical Data table confirms the DCD776 as the 18V, hammer-capable model of the family (0-7650/0-25500 impact rate, 13mm masonry capacity, 1.5-13mm chuck), distinguishing it from the non-hammer DCD771 and the 14.4V DCD731/DCD734"
date_published: 2026-09-21
---

## The symptom pattern

The drill is running normally, mid-hole or mid-screw, and it just stops.
No slowing down first, no grinding, nothing on the drill to say why —
pull the trigger again and sometimes it does nothing at all. It's an
alarming way for a tool to fail because there's no lead-up to it, and on
an 18V XR drill like the DCD776 it's rarely the drill itself that's at
fault.

## What's actually happening

DeWalt builds its XR Li-Ion tools with what it calls an Electronic
Protection System, and its own manual states it plainly: the system
"protect[s] the battery pack against overloading, overheating or deep
discharge," and "the tool will automatically turn off if the Electronic
Protection System engages." There's no separate warning light on the
DCD776 to say which of the three has happened — the only symptom the
drill gives is stopping.

That's the detail worth knowing before assuming the drill has failed:
this is the battery pack's own protection circuit acting to prevent
damage, not a fault developing in the tool.

## Working through it

Check the obvious first — that the battery pack is fully seated and
clicked home, since a pack that isn't properly connected can cut power
in a way that looks identical to a protection trip.

If the pack is seated properly, try the trigger once rather than
repeatedly. DeWalt doesn't describe a reset sequence, a wait time, or a
button to press: the documented fix is to put the battery on the charger
and leave it until it reaches a full charge. A quick top-up isn't what
the manual describes, so give it the time to finish properly before
trying the drill again.

## Verdict

Free, and it's meant to happen this way — the Electronic Protection
System is there to stop the battery being damaged by exactly the
conditions that trip it, not a sign the drill needs repairing. A full
charge clears every case DeWalt documents for this symptom. If the drill
still won't run once a battery has come off a genuine full charge, swap
in a second XR pack before spending on anything else — DeWalt's own
documentation has nothing further to check beyond the protection system,
so a drill that fails on two different fully-charged packs is a
service-centre question, not one to keep testing at home.
