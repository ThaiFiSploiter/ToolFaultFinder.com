---
brand: "Bambu Lab"
model: "P1S"
seo_title: "Bambu Lab P1S Heatbed Not Heating Up — Causes & Fix"
meta_description: "Bambu Lab P1S heatbed stays cold or reads 0°C during print preparation. How to split a sensor fault from a power fault before ordering any parts."
category: "Electronics & Firmware"
symptom: "Heatbed temperature does not rise during print preparation, or the bed simply never heats after a bed temperature is set"
likely_cause: "Either the bed's temperature sensor circuit is broken, so the printer reads nothing and never asks for heat, or the sensor is fine and the mains-side heating supply to the bed has failed"
diagnostic_steps:
  - "Read the bed temperature on the printer's own display first — this single reading splits the fault in two, and every step after it depends on which branch you are in"
  - "If the bed reads 0, the fault is in the sensing circuit: power the printer off at the mains and check the heatbed NTC connector and the heatbed-to-MC-board cable for a loose or skewed plug"
  - "Note that Bambu fixes both of those connectors with white silicone gel, so a plug that looks seated may still be lifted — their guidance is to press it home again, and to warm the gel with a hair dryer first if a connector has to come apart"
  - "If the bed reads a plausible room temperature but never climbs, the sensor is working and the fault is on the mains heating side instead"
  - "With the printer unplugged from the wall, measure the resistance across the two heatbed terminals under the cover — Bambu's stated normal range is 40 to 60 ohms, and a reading outside it condemns the heatbed"
  - "If the heatbed itself measures in range, check the heatbed power cable the same way and re-seat the cable between the MC board and the AC power board before suspecting the board itself"
fix_or_verdict: "A re-seated NTC or MC-board connector is the best outcome and costs nothing. An out-of-range resistance reading means the heatbed or its power cable is the failed part. If the bed and cable both measure correctly and the connections are sound, Bambu's own procedure concludes that the AC power board has failed and must be replaced. Price the heatbed and the AC board before ordering — they are the two dearest parts in this failure, and the resistance test is what tells you which one you actually need."
source_type: "researched"
sources:
  - "Bambu Lab Wiki, 'Troubleshooting for P1 series heatbed is not heating up' — causes and solutions, safety warning, and the two-scenario diagnostic split"
  - "Bambu Lab Wiki, same article, Scenario two Step 2 and Step 7 — the 40 to 60 ohm resistance range for the heatbed and its power cable"
  - "Bambu Lab Wiki, same article, Scenario one — heatbed NTC and MC board connector checks and the silicone-gel note"
date_published: 2026-09-01
---

## Safety first, because this one is mains

The P1S heatbed is not a low-voltage part. Bambu state plainly in their own
troubleshooting article that the heatbed is heated directly from the mains
supply, that there is a high-voltage hazard, and that fault-finding must be
carried out with the power off.

That is not boilerplate on this machine. Unplug the printer at the wall — not
just the front switch — before opening anything, and treat the AC power board
and the bed's power terminals as live-until-proven-otherwise. If you are not
comfortable measuring resistance on a mains-fed heater with the machine
isolated, this is a reasonable point to stop and raise a ticket instead.

## The symptom pattern

The print starts, the printer moves into its preparation sequence, and the
bed temperature simply does not climb. Sometimes the print sits waiting
indefinitely; sometimes it errors out. The nozzle may heat perfectly normally,
which is what makes owners suspect a firmware bug rather than a hardware
fault.

## The one reading that splits the fault

Before touching a screwdriver, look at what the printer says the bed
temperature is. Bambu's own procedure branches on exactly this, and it is the
most useful thirty seconds you can spend.

**Bed reads 0.** The printer is not getting a temperature at all, so it never
commands heat. This is a sensing fault, and it is the cheaper branch. The
suspects are the heatbed NTC connector and the cable running from the heatbed
to the MC board — a two-pin plug for the NTC, plus the main connector. Both
are fixed in place with white silicone gel, which matters: a connector held
in soft gel can lift a pin without looking obviously wrong. Bambu's advice is
to press them home again if there is no obvious tilt or withdrawn pin, and to
soften the gel with a hair dryer first if a connector genuinely has to be
disconnected.

**Bed reads something plausible but never heats.** The sensor is telling the
truth and the heat is not arriving. That points at the mains supply path to
the bed, and it is the more expensive branch.

## Working through the power-side branch

With the printer isolated, the bed's own resistance is the measurement that
decides everything. Bambu give a specific window: between 40 and 60 ohms
across the two heatbed terminals is normal. Outside that range the heatbed has
burnt components or an open circuit and needs replacing — no further testing
required.

If the bed measures in range, the same check applies to the heatbed power
cable, measured after removing its two blue silicone sleeves. Bambu add a
caution worth repeating: put those sleeves back afterwards, because they are
what keeps the plugs insulated.

Then the connections. The cable between the MC board and the AC power board is
checked for looseness and skew in the same way as the sensor side, and poor
contact there is a real cause rather than a formality.

## The fix

If the heatbed or its power cable measures outside 40–60 ohms, that part is
the failure and gets replaced.

If the bed, the cable and every connector check out, Bambu's procedure reaches
a conclusion rather than a shrug: the AC power board is faulty and must be
replaced. Visible damage on the board confirms it without further testing —
and their article adds a sensible warning that where one of the heatbed and
the AC board is found burnt, the other should be inspected at the same time,
because these two fail together.

## Verdict

Very much worth diagnosing before spending. The two outcomes at the end of
this — a heatbed or an AC power board — are among the dearer parts in the
machine, and the resistance test is a five-minute check that tells you which
one you need rather than buying both hopefully. A re-seated connector, which
is a genuine possibility on the sensor branch, costs nothing at all.

Both parts are user-replaceable and Bambu publish the replacement procedures,
so this is not a printer to write off. Price the heatbed and the AC board
before ordering, and if the diagnosis stalls between the two, Bambu's support
ticket route exists for exactly that.
