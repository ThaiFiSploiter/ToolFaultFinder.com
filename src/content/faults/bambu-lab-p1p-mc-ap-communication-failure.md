---
brand: "Bambu Lab"
model: "P1P"
seo_title: "Bambu Lab P1P Toolhead Dead, No Temperature Reading"
meta_description: "Bambu Lab P1P won't move the toolhead and/or shows 0°C on both nozzle and bed — a broken MC-AP link. The 7-step order Bambu's own guide checks it in."
image: "./img/bambu-lab-p1p.png"
image_alt: "Line-art illustration of the Bambu Lab P1P 3D printer showing its open CoreXY gantry frame, rear panel and filament chute"
category: "Electronics & Firmware"
symptom: "Printer is on and idle but the toolhead won't move on the direction buttons, or the nozzle and bed both read 0°C, or both happen together"
likely_cause: "A broken communication link between the MC board (which drives the toolhead) and the AP board (which runs the display and temperature readout) — most often a loose or damaged MC-AP cable, occasionally a fault on one of the boards themselves"
diagnostic_steps:
  - "With the printer on and idle, check both halves separately: try the toolhead direction buttons to see if X/Y movement responds, and look at whether the nozzle and bed temperatures both read 0 — this tells you whether it's a movement (Rx) fault, a temperature (Tx) fault, or both"
  - "If both movement and temperature are affected, leave the printer powered and check the MC board's status LED through the excess-filament chute (remove the rear panel first if you can't see it clearly) — a normally flashing LED means the board itself is alive and the fault is downstream; an LED that isn't flashing points at the MC board needing replacement"
  - "If only temperature is affected, power the printer on and release the fixing tape on the AP-MC cable, then gently flex the whole cable while watching the displayed temperature — a reading that changes as you flex it means a loose connection on that cable, not a dead board"
  - "With the printer powered off, remove the foam cover on the AP board, disconnect the camera cable, and look at the components under the card slot for anything visibly missing or burnt — replace the AP board only if you find damage there"
  - "Check both ends of the MC-AP cable: find its connectors on the AP board and the MC board, unplug each, and inspect the plug and socket for bent pins or other damage"
  - "Test the cable itself with a multimeter: check for continuity across the second and third contacts of the AP-side plug (two separate pairs) — a break in either pair means the cable has failed and needs replacing"
  - "If the cable tests good and the MC board LED was already confirmed flashing, inspect the MC board itself for visible component damage; if nothing is visibly wrong, Bambu's own guidance at that point is to send the printer's log file to their support team rather than keep guessing"
fix_or_verdict: "Work through it in this order, because it goes from free to expensive: reseating a cable that was simply loose costs nothing, a confirmed-broken MC-AP cable is the cheapest real part to replace, and a damaged AP or MC board is the most expensive outcome. Don't replace either board on suspicion — the guide's own order puts board inspection last for a reason, and both are user-replaceable if the diagnosis actually points there. If every step checks out clean, this isn't a DIY fault any more; Bambu's own next step is a support ticket with the log file, not continued teardown."
parts:
  - name: "PLA filament, 1.75mm"
    kind: "consumable"
    search: "PLA filament 1.75mm 1kg"
source_type: "researched"
sources:
  - "Bambu Lab Wiki, \"P1P Communication failure between MC and AP\" — phenomenon, causes & solutions, tools needed, and the 7-step operation guide (MC board LED check, AP-MC cable flex test, AP board inspection, connector check, continuity test, MC board inspection)"
date_published: 2026-10-20
---

## The symptom pattern

The printer is powered on and sitting idle, but something in the
toolhead-to-display link has gone quiet. It shows up one of three ways:
the toolhead won't respond to the direction buttons on screen, the nozzle
and bed temperatures both sit at 0°C with no reading at all, or both of
those happen at once.

## What's actually happening

The P1P splits its brain in two: an MC board that drives the toolhead and
reads its sensors, and an AP board that runs the screen and talks to the
MC board over a dedicated cable. Bambu's own name for this is an "Rx
exception" (the toolhead doesn't receive movement commands) or a "Tx
exception" (temperature data isn't being sent back) — and which one you've
got narrows down where to look first.

**Safety note, because this involves opening the printer:** Bambu's own
guide is explicit that the printer should be powered off and unplugged
before any of the teardown steps below — reconnecting a cable or board
with power still applied risks a short circuit and further electronic
damage.

## Working through it

Start by confirming exactly which symptom you've got: toolhead movement,
temperature, or both. That decides the branch.

**If both are affected**, leave the printer on and look at the MC board's
status LED through the excess-filament chute — the rear panel comes off
if you can't see it clearly. A normally flashing LED tells you the board
itself is alive and the fault is somewhere in the link downstream;
replace the MC board only if the LED isn't flashing at all.

**If only temperature is affected**, power the printer on, release the
tape holding the AP-MC cable in place, and flex the cable gently while
watching the displayed temperature. If the reading changes as you move
the cable, that's a loose connection, not a dead part — reseating it is
the fix.

If neither of those settles it, work through the rest in order: open the
AP board (foam cover off, camera cable disconnected) and look for
anything visibly missing or burnt before blaming it; check both ends of
the MC-AP cable's connectors for bent pins or damage; then test the cable
itself with a multimeter across the two relevant contact pairs on the
AP-side plug — a break in either pair confirms the cable has failed.

If the cable passes and the MC board's LED was already confirmed healthy,
the last step is a visual check of the MC board itself for damaged
components.

## Verdict

Diagnose before you order anything — the three possible causes here span
a huge price range, from a cable that just needed pushing back in, to a
cable that needs replacing, to a board that does. Bambu's own order
exists to stop you replacing the expensive part first on a guess. If
every check comes back clean — cable intact, both boards undamaged, LED
behaving normally — that's not a sign to keep disassembling further; it's
the point where Bambu's guide itself hands off to a support ticket with
the printer's log file, because the remaining possibilities need their
diagnostic tools, not yours.
