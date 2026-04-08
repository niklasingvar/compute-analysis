# Goal 2 — Make it feel like it matters

GOAL_1 shipped a working site. It's functional. It's also boring. This iteration makes the site match the urgency of the message: Sweden needs to decide on AI compute sovereignty, and the cost of inaction is real.

Two new interaction patterns change how the site works:

1. **Assumption-driven computation** — users pull on real levers (adoption rate, agent share) and watch the number move. They don't pick "low/base/high" from a menu — they build the scenario themselves and understand _why_ the number lands where it does.
   (But we keep templates for low, base, high and we need to have popover that highlight CONSEQUENSE of these choices)

2. **The sovereignty toggle** — one big, unmissable switch: "Suverän träning." ON by default. Turn it off, and the number drops by half — and a hard warning appears explaining what Sweden loses. This is the political core of the analysis made visceral.

Training an EU Owned Frontier model instead of "Suverän träning" (or a better name)

## Objectives & Key Results

### O1 — Assumption-driven interactivity (replace scenario picker)

- KR1: Users adjust at least two real assumptions (adoption rate, agent share) via sliders that recompute the total live.
- KR2: Each slider has a visible, contextual explainer — not a tooltip, but a paragraph that says what this assumption _means_ and why it's uncertain. A reader should walk away understanding what "60% adoption" implies for Swedish public sector.
- KR3: The compute number is derived from a formula, not a lookup table. Default assumptions reproduce the known base scenario (~9 000 H100-eq at 2029).
- KR4: The old low/base/high framing is gone as a primary control. Instead, the scenario emerges from the assumptions the user sets. (Presets for low/base/high can remain as quick-set buttons.)

### O2 — Sovereignty toggle with political consequence

- KR1: A prominent toggle labeled "Suverän träning" / "Sovereign training" controls whether Tier 4 (~4 500 H100-eq) is included.
- KR2: Turning it OFF triggers a visible warning: Sweden becomes dependent on foreign AI providers for sensitive public sector data. The text should be sharp, specific, and unavoidable — not a polite footnote.
- KR3: The compute number visibly drops (9 000 → ~4 300). The visual change should be dramatic — color shift, tier bar disappearing, something that registers emotionally.
- KR4: Turning it back ON restores the full scenario with a positive framing: "Sverige behåller kontrollen" / "Sweden retains control."

### O3 — Visual identity that matches the message

- KR1: Dark theme as default. This is about compute infrastructure, not a wellness app. The aesthetic should feel technical, serious, urgent.
- KR2: Swedish national colors as accent: blue (#006AA7) for interactive elements, gold (#FECC02) for the big compute number and sovereignty-on state.
- KR3: The big compute number dominates the viewport. It should feel like a dashboard, not a paragraph. When it changes, you _notice_.
- KR4: The tier breakdown is a single stacked bar, not four separate progress bars. Compact, visual, shows proportion at a glance.
- KR5: No section of the page should look like it could be from any other website. If you squint, you should know this is about Sweden's AI future.

### O4 — Keep what works from GOAL_1

- KR1: Bilingual (SV/EN) with language switcher preserving context.
- KR2: PR CTA in hero + in-content placement.
- KR3: Narrative sections (why this matters, risks, recommendations, sources) remain.
- KR4: Deploys to Vercel from `main`. https://compute-analysis.vercel.app/ still works.

## What "good" looks like

A Swedish minister opens the link on their phone during a meeting. They see a dark screen with a big gold number: **9 000**. Below it, "H100-ekvivalenter — det Sverige behöver 2029."

They flick the sovereignty toggle off. The number drops to **4 300**, the gold turns muted, and a red-bordered warning appears: _"Utan suverän träning blir Sverige helt beroende av utländska AI-leverantörer för känsliga data inom sjukvård, rättsväsende och myndighetsutövning."_
They can dictate price and terms (aka read our reasearch)

They toggle it back on. The number climbs back. They tap "Justera antaganden" and see a slider for adoption rate. They drag it down to 40%. The number drops to ~5 500. The explainer says: _"40% adoption innebär att färre än hälften av offentliga kunskapsarbetare använder AI-verktyg dagligen 2029 — ungefär där svensk kommunal e-tjänst-adoption var efter 10 år."_

They get it. They share the link. That's the goal.

## Assumption model (AT least 5 leavers)

Example;
| Lever | Range | Default (bas) | What it controls |
|-------|-------|---------------|------------------|
| Adoptionsgrad | 40–80% | 62% | Share of 500K addressable public sector workers using AI daily by 2029 |
| Agentandel | 10–40% | 25% | Share of active users running autonomous agents (10× compute vs copilots) |
| Suveränitet | On/Off | On | Includes Tier 4: sovereign training of Swedish foundation models (~4 500 H100-eq) |
ETC:

Tier 2 (specialized inference, ~1 500) and Tier 3 (fine-tuning, ~600) are visible in the breakdown but not user-adjustable — they're smaller levers and adding more sliders dilutes the message.

## Formula sketch

```
Tier 1 = 500K × adoption × (agentShare × computePerAgent + (1-agentShare) × computePerCopilot) × yearScale
Tier 2 = 1500 × yearScale
Tier 3 = 600 × yearScale
Tier 4 = sovereignty ? 4500 × yearScale : 0
Total  = Tier 1 + Tier 2 + Tier 3 + Tier 4
```

Constants calibrated so defaults at 2029 (yearScale=1.0) reproduce ~9 000.

## Definition of DONE

**DONE = https://compute-analysis.vercel.app/ loads with the new design, the sovereignty toggle works, and at least two assumption sliders recompute the number live.** A minister can understand the sovereignty trade-off in under 30 seconds.

## What this is NOT

- Not a complete data dashboard with 15 sliders. Two sliders + one toggle. Focus.
- Not a light-mode-first design with dark mode as afterthought. Dark IS the design.
- Not a redesign of the analysis content. The narrative sections (conclusions, risks, recs) stay — they just get the new visual treatment.
