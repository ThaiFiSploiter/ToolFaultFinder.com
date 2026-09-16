---
brand: "DeWalt"
model: "DCN660"
seo_title: "DeWalt DCN660 Nailer Won't Fire Nails"
meta_description: "DeWalt DCN660/661 nailer won't drive fasteners. DeWalt's own worklight-by-worklight checklist for a tool that's dead, jammed, or firing short."
image: "./img/dewalt-dcn660.png"
image_alt: "Line-art illustration of the DeWalt DCN660 18V XR finish nailer showing the nosepiece contact trip, the worklights either side of the trigger, the magazine and the trigger lock-off switch"
category: "Mechanical & Motion"
symptom: "The nailer won't drive fasteners — the trigger does nothing, or it fires the motor but no nail comes out"
likely_cause: "DeWalt splits this into distinct stages rather than one fault — trigger lock-off left engaged, a flat battery, an unreleased contact trip or mode selector, or a jam in the nosepiece or magazine — and the worklights next to the trigger indicate which"
diagnostic_steps:
  - "Check the trigger lock-off switch first — DeWalt's own fault list opens with 'check trigger lock-off is not engaged' before anything else, since a locked-off tool behaves exactly like a dead one"
  - "If the worklights don't come on at all, check the battery: remove the battery pack, wait at least five seconds, then re-insert it, and check the battery's own charge level"
  - "If the worklights are on but the motor doesn't run, make sure both the nosepiece contact trip and the trigger are fully released and then actuate the contact trip on its own first — DeWalt states the tool needs this specific order, not trigger-then-trip"
  - "Check the mode selector switch is set correctly — the DCN660 supports sequential and bump firing and DeWalt lists the mode switch as a specific check when the motor runs but no fastener is driven"
  - "If the motor runs but nothing fires, check the magazine: confirm the correct fastener type is loaded, sitting properly, and that the pusher is actually pushing the strip forward"
  - "Check for a jam in the nosepiece or magazine — clear it per the manual's jam-clearing procedure, then cycle the stall release lever and the trigger lock-off, which DeWalt states are both needed to reset the tool's electronic control after a jam, not just the physical mechanism"
  - "If fasteners fire but don't drive fully home, that's a separate, simpler check — adjust the driving depth setting and confirm the battery still has useful charge, per DeWalt's own list for that specific symptom"
fix_or_verdict: "Almost always resolves without parts: the lock-off switch, the contact-trip-then-trigger order, the mode selector and a magazine jam account for DeWalt's entire published fault list, and all of them are user-level checks. The one exception is worth taking seriously — DeWalt's own troubleshooting explicitly names a worn or damaged driver blade assembly as the cause when jams keep recurring after the checks above, and routes that straight to a repair agent rather than giving a user procedure for it, so don't attempt to strip the drive mechanism yourself."
parts:
  - name: "16 gauge brad/finish nails, 32–63mm, 20° angle strips"
    kind: "consumable"
    note: "Confirm the strip matches this angle and length range — the wrong fastener is one of DeWalt's own listed causes of jamming and misfires."
    search: "DeWalt DCN660 20 degree 16 gauge finish nails 32-63mm"
source_type: "researched"
sources:
  - "DeWalt 18V XR 16GA Finish Nailer (DCN660/DCN661) instruction manual, fetched from service.dewalt.co.uk — 'Troubleshooting' section: 'Tool does not work. Worklights do not switch on... Check trigger lock off is not engaged'; 'Worklights are on but motor does not run... Ensure both the contact trip and trigger are released and then actuate only contact trip. Check the mode selector switch (DCN660 Only)'"
  - "Same manual, same section — 'Worklights are on, motor runs, tool does not drive fasteners at all' and '...fully' entries, on the mode selector, fastener choice, driving-depth adjustment and battery checks"
  - "Same manual — 'Fasteners jam in tool.' entry: 'Driver blade assembly may be damaged\\worn. Please contact your repair agent if above steps do not resolve the issue', and the note that 'the stall release lever should be used to reset the mechanism. The Trigger Lock Off may also need to be cycled to reset the electronic control'"
  - "Same manual — Technical Data table confirming 18V, 16 gauge, 32–63mm/1.6mm/20° fasteners for both DCN660 and DCN661"
date_published: 2026-09-16
---

## The symptom pattern

Pull the trigger and nothing happens, or the tool runs but no nail comes
out — either way it reads like a dead nailer. DeWalt's own manual treats
this as several distinct, ordered faults rather than one problem, and which
one applies depends on what the worklights either side of the trigger are
doing.

## What's actually happening

If nothing lights up at all, DeWalt's first listed cause is the simplest:
"check trigger lock off is not engaged." The DCN660 has a physical lock-off
switch specifically to stop accidental firing, and a tool left in that
state behaves indistinguishably from a flat battery or a dead trigger.

If the worklights are on but the motor doesn't run, the manual points to
the firing sequence itself: "ensure both the contact trip and trigger are
released and then actuate only contact trip." This nailer expects the
nosepiece pressed against the work first, separately from the trigger — not
trigger-then-push. On the DCN660 specifically, DeWalt also lists checking
the mode selector switch at this stage, since the tool supports both
sequential and bump firing.

If the motor runs but no fastener is driven, or it drives but doesn't seat
fully, the cause moves to the magazine and the fastener itself: the wrong
gauge or angle of nail, a pusher that isn't pushing, or a driving-depth
setting that's too shallow. None of this is a fault as such — it's the
tool correctly refusing to fire something it isn't loaded to handle.

A jam is the one DeWalt treats differently. Clearing the nail is only the
first step; the manual specifically notes that "the stall release lever
should be used to reset the mechanism" and "the Trigger Lock Off may also
need to be cycled to reset the electronic control" — two separate resets,
mechanical and electronic, and missing the second one can leave a nailer
that looks jammed again immediately after the first jam was cleared.

## Working through it

Start with the lock-off switch — it costs nothing to check and explains a
surprising number of "dead tool" reports. If the worklights are off,
remove the battery, wait five seconds, and refit it before assuming a
charger or battery fault. If they're on but the motor won't run, release
both the contact trip and the trigger fully, then press only the contact
trip against the work — not the trigger first. Check the mode selector
matches how you're firing it.

If the motor runs and still nothing drives, open the magazine and confirm
the fastener strip is the right gauge, length and angle for this tool, and
that the pusher spring is actually advancing it. For a jam, clear it via
the nosepiece inspection door as the manual describes, then specifically
cycle the stall release lever and re-engage and release the trigger
lock-off — both, not just one — before testing again.

If jams keep recurring once fastener type, loading and both resets are
confirmed correct, DeWalt's own manual stops giving user steps at that
point and names a worn or damaged driver blade assembly as the likely
cause, routed to a repair agent rather than a DIY fix.

## Verdict

Free in the large majority of cases: a lock-off switch, a firing-order
habit, a mode selector setting or a magazine loading issue, all covered
by DeWalt's own checklist and all fixable on the spot. Recurring jams
after doing the checks properly are the exception — DeWalt names a worn
driver blade assembly as the cause and gives no owner procedure for it,
so that's a repair-agent job rather than something to keep working around
by clearing jams one at a time.
