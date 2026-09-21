---
brand: "Makita"
model: "DGA408"
seo_title: "Makita DGA408 Angle Grinder Stops / Won't Restart"
meta_description: "Makita DGA408/458/508 grinder cuts out mid-job and won't restart. Makita's own protection-system table: which cause it is, and the fix for each."
image: "./img/makita-dga408.png"
image_alt: "Line-art illustration of the Makita DGA408 cordless angle grinder showing the battery bay, battery indicator button, side handle and guarded grinding wheel"
category: "Batteries & Charging"
symptom: "The grinder stops suddenly mid-cut with no warning, and pulling the switch trigger again does nothing"
likely_cause: "The tool/battery protection system has tripped — overload, overheating or a near-empty battery — rather than a fault in the grinder itself; in some cases repeated tripping locks the tool until the battery is recharged"
diagnostic_steps:
  - "Note exactly what you were doing when it stopped — cutting hard into a stalling wheel points to overload, while a stop after long, hard use in warm conditions points to overheat"
  - "Turn the tool off, then back on and pull the trigger. If it restarts immediately, it was overload protection — Makita's manual states it 'stops without any indication' when the tool draws abnormally high current, and the fix is simply to stop the application that caused it and restart"
  - "If it won't restart straight away, check the battery indicator light. A blinking light means overheat protection — let the tool cool before trying again; Makita's manual also notes the tool won't start if the battery itself is overheated, with no separate warning for that case"
  - "If the indicator shows a low-capacity state rather than blinking for heat, that's overdischarge protection — the battery is too low to continue and needs to come off the tool and go on the charger"
  - "If the trigger does nothing at all even after turning the tool off and on, the protection system has locked out after tripping repeatedly. Makita's fix is specific: remove the battery, put it on the charger, and wait until charging finishes before refitting it — cycling the switch alone will not clear this state"
  - "Only after ruling out all four of the above is a genuine tool fault worth suspecting — this grinder's own documentation gives no further owner-level checks beyond the protection system"
fix_or_verdict: "Free in every case Makita documents. Overload and overheat both clear with nothing more than a pause; overdischarge and the protection lockout both clear with a recharge, which is a normal running cost rather than a repair. There's no scenario in Makita's own fault path here that calls for a part or a service visit — a grinder that still won't run once all four are ruled out is the point to stop testing and get it looked at, not before."
parts:
  - name: "18V LXT battery pack (BL1815N / BL1830 / BL1840 / BL1850 compatible)"
    note: "Only worth replacing if a pack won't hold charge after a full cycle on the charger — test with a fresh charge before assuming the battery itself has failed."
    search: "Makita 18V LXT battery BL1830 BL1840 BL1850"
  - name: "Grinding and cutting discs (100mm / 115mm / 125mm, depending on model)"
    kind: "consumable"
    search: "Makita angle grinder cutting discs 115mm"
source_type: "researched"
sources:
  - "Makita DGA408/DGA458/DGA508 Cordless Angle Grinder instruction manual (media.makita.co.nz) — Tool/battery protection system section: Overload protection ('the tool automatically stops without any indication... turn the tool on to restart'), Overheat protection ('let the tool cool before turning the tool on again'), Overdischarge protection ('remove the battery from the tool and charge the battery'), and Releasing protection lock ('the tool does not start even if turning the tool off and on... remove the battery, set it to the battery charger and wait until the charging finishes')"
  - "Same manual — Specifications table confirms DGA408/458/508 share the same 18V rated voltage and battery cartridge compatibility (BL1815N, BL1820, BL1830, BL1840, BL1850 families)"
date_published: 2026-09-21
---

## The symptom pattern

The grinder is cutting or grinding normally, and then it just stops —
no grinding noise slowing down, no warning, the wheel simply isn't
turning anymore. Pull the trigger again and sometimes it fires straight
back up; other times it does nothing at all, as if the battery had been
pulled out. Both are the same underlying system behaving differently
depending on why it tripped.

## What's actually happening

The DGA408 (and the 458 and 508, which share the same electronics and
manual) runs a tool/battery protection system with four distinct trip
conditions, and Makita documents each one separately rather than lumping
them into one generic "fault." Overload protection fires when the tool
draws abnormally high current — leaning too hard into a cut, or a wheel
starting to bind — and Makita's own wording is that it "stops without any
indication," which is exactly the alarming, silent cutout owners report.
Overheat protection is the one that follows hard, sustained use: the
battery indicator blinks, and the fix is simply time. Overdischarge
protection is a battery genuinely run down too far to continue safely.

The one that catches people out is what Makita calls the protection lock:
if the system trips repeatedly in a short space of time, the tool refuses
to start even after switching off and back on, and there's no separate
indicator to say that's what's happened — it just looks dead.

## Working through it

Turn the tool off and on and try the trigger once. If it runs, that was
overload protection and nothing more needs doing beyond easing off next
time. If it doesn't restart, look at the battery indicator: a blinking
light means heat, and cooling the tool (or the battery, if that's what's
overheated) is the only fix Makita gives — there's no separate cooldown
timer to watch, just wait and retest.

If the indicator instead shows the battery low rather than blinking, take
it off and put it on the charger — that's overdischarge, not a fault.

If none of that applies and the trigger simply does nothing no matter how
many times the tool is switched off and on, that's the protection lock.
The only way Makita gives to clear it is to remove the battery, set it on
the charger, and let it finish a full charge cycle before refitting it —
this is the step that's easy to miss, because switching the tool itself
off and on looks like it should work and doesn't.

## Verdict

Every cause Makita documents for this symptom clears for free — a pause,
a cooldown, or a recharge, never a part or a repair. A battery that won't
hold charge afterwards is a normal wear item rather than evidence of a
grinder fault. If the tool still won't run once overload, overheat,
overdischarge and the protection lock have all been ruled out, that's
past what Makita's own documentation covers, and worth a service centre
rather than further self-diagnosis.
