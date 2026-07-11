---
brand: "Prusa"
model: "MK3S"
category: "Electronics & Firmware"
symptom: "Print aborts partway through with a THERMAL RUNAWAY error, usually right as the part-cooling fan spins up, even though the hotend was heating perfectly moments before"
likely_cause: "The part-cooling fan is cooling the hotend heater block faster than it can compensate — usually because the silicone sock insulating the heater block is missing, worn out, or the printer's sock/no-sock setting doesn't match reality — which trips the firmware's thermal safety cutoff and looks exactly like a failed thermistor or heater cartridge"
diagnostic_steps:
  - "Check whether the silicone sock is actually fitted on the heater block, and that it isn't torn, melted, or pushed out of position"
  - "If applicable, verify the printer's hardware setup menu is set correctly for 'with sock' vs 'without sock' — a mismatch here alone can trigger this"
  - "Note exactly when the runaway triggers: happening right as the cooling fan spins up (often the first layer) is the tell for an airflow-related cause, not a wiring fault"
  - "Temporarily lower the part-cooling fan speed in slicer settings and re-run the same print before replacing anything"
  - "Only after ruling out the sock and fan speed, test the thermistor's resistance and check the heater cartridge for continuity"
fix_or_verdict: "A missing, worn, or wrongly-configured silicone sock causes a large share of these — refitting it or correcting the sock setting resolves the fault for free, well before assuming a failed thermistor or heater."
source_type: "researched"
sources:
  - "Prusa3D official community forum — multiple threads specifically on thermal runaway triggered during the cooling-fan phase"
  - "User-reported troubleshooting timelines describing thermistor/heater cartridge replacement attempts before finding the sock/airflow cause"
date_published: 2026-07-11
---

## The symptom pattern

The print is going fine — first layer down, hotend holding temperature — and
then the printer aborts with a thermal runaway error the moment the part
cooling fan kicks in. It reads like a serious electronics fault: a failed
thermistor, a failing heater cartridge, or a wiring fault in the hotend. Many
owners start there, sometimes replacing several parts before the fault
recurs.

## What's actually happening

The part-cooling fan blows directly across the hotend's heater block. If
that block is properly insulated with its silicone sock, the heater easily
keeps up with the airflow. Without one — missing, torn, melted, or simply
not seated properly — the fan can pull heat out of the block faster than
the heater can replace it. The firmware watches for exactly this: a
temperature drop past a threshold in a short window, and it shuts down as a
safety measure against a genuinely failed heater. The safety check can't
tell the difference between "heater actually failed" and "heater is fine but
losing a fight against cold air," so a sock problem and a hardware failure
look identical from the error message alone.

## Working through it

Start by actually looking at the sock: is it there, intact, and correctly
seated over the block? If the printer has a sock/no-sock setting in its
hardware configuration, check that it matches reality — a mismatch here can
trigger the same fault even with a sock fitted correctly. The strongest tell
is timing: if the abort consistently happens right as the cooling fan spins
up, that points at airflow, not wiring. Before swapping any parts, try
temporarily lowering the part-cooling fan speed in the slicer and re-running
the print — if that alone stops the runaway, the sock/airflow theory is
confirmed. Only if all of that checks out normal is it worth testing the
thermistor's resistance and the heater cartridge's continuity directly.

## Verdict

Check the sock and the fan-speed relationship before touching the
electronics — it's a five-minute check that resolves the fault outright in
a large share of cases, and it's a much cheaper first step than a
thermistor or heater cartridge replacement that turns out not to be needed.
