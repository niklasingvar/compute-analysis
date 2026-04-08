# Goal 3 — The full picture: all sectors, energy, and a real tool

GOAL_2 made the site feel alive. This iteration makes it useful. The scope expands from "public sector only" to "all of Sweden's AI compute" — and makes the energy consequence real.

## Design direction

Inspired by [mollyra.github.io/ai-fluency-framework](https://mollyra.github.io/ai-fluency-framework/): clean typography, generous spacing, scroll-reveal animation, color-coded categories, inline insight boxes. But our layout is different — this is a **split-view dashboard**, not a single-column article.

**Layout: sliders LEFT, results RIGHT.**

Left panel: assumption sliders with popovers explaining each one. Always visible (sticky on desktop). Collapsible on mobile.

Right panel: a year-by-year line/area chart (2026–2031) showing how compute grows over time across all tiers. The chart IS the hero — not a big static number. The number lives inside the chart. When you drag a slider, the lines move.

Below the split view: the narrative sections (why this matters, risks, recs, sources) — single column, like now.

## Scope expansion: three sector toggles

The current model only covers public sector excl. defense. This iteration adds toggles to show broader scope:

### Toggle 1: Offentlig sektor (exkl. sjukvård & försvar) — DEFAULT ON
The core model. Tier 1 (copilots/agents for ~500K knowledge workers), Tier 3 (fine-tuning), Tier 4 (sovereign training). Tier 2 reduced to non-healthcare specialized inference (~600 H100-eq).

### Toggle 2: Sjukvård (Healthcare) — DEFAULT ON
Adds healthcare-specific compute back: Tier 2 healthcare (~450 H100-eq bas 2029, range 200–900), plus healthcare workers' copilot/agent usage (proportional share of Tier 1). Source: 13-sjukvard-compute-per-vardkedja.md.

### Toggle 3: Försvar (Defense/Military) — DEFAULT OFF
**No bottom-up data exists in the research.** This toggle needs to be transparent about that. When toggled ON, show an estimate range with a clear "uppskattning utan underliggande modell" / "estimate without underlying model" disclaimer. Use international comparisons: defense IT budgets suggest ~10–20% of public sector AI compute → ~500–2,000 H100-eq range. This is a placeholder that invites contribution.

### Toggle 4: Privat sektor (Private sector) — DEFAULT OFF
Uses the tokens-per-capita stress test from 11-kompletterande-perspektiv.md: 250,000 tokens/capita/day nationally → 35,000–50,000 H100-eq total Sweden. Subtract public sector → ~26,000–41,000 implied private. Display as a wide range bar with explicit "grov uppskattning" / "rough estimate" framing. The point: public sector is ~20% of national AI compute need. The real number is much larger.

### What this means for the graph

When all toggles are ON, the chart shows:
- Stacked areas: public core, healthcare, defense, private sector
- Each in a distinct color
- The total reaches 35,000–50,000 for 2029, vs ~9,000 for public sector alone
- This is the "wow" — the full picture is 4–5× the public sector number

## Energy as consequence

Energy is not a footnote — it's a first-class output. The right panel shows:

**Power requirement (MW)** as a secondary axis or a separate card below the chart. Derived from:
- H100 TDP: ~700W → ~0.7 kW/H100-eq (2029, with Rubin-gen efficiency)
- PUE: 1.25
- Facility power = H100-eq × kW × PUE

Per-year power efficiency improves (03-berakningsmodell.md):
| Year | kW per H100-eq |
|------|----------------|
| 2026 | 1.0 |
| 2027 | 0.9 |
| 2028 | 0.8 |
| 2029 | 0.7 |
| 2030 | 0.6 |
| 2031 | 0.5 |

Context comparison shown as annotation: "~6.3 MW = ett medelstort datacenter. Facebook Luleå startade med ~40 MW."

When private sector is toggled on, the energy number becomes dramatic: ~25–35 MW for all of Sweden's AI compute 2029. That's a real infrastructure question.

## Sweden & EU perspective

Frame this as a Swedish AND European question:

- Top of page: "Sveriges AI-compute-behov — i europeisk kontext"
- EU context bar: show Sweden's compute need relative to EU AI Factories budget (EUR 2–3bn), EuroHPC commitments, and peer countries (Finland LUMI ~5,000 H100-eq, Denmark Gefion ~1,528 H100)
- Sovereignty section ties to EU AI Act, Schrems II, European data sovereignty
- Language framing: "Sverige och EU behöver" not just "Sverige behöver"

Source: 04-internationella-jamforelser.md, 08-suveranitet.md

## Assumption sliders (left panel)

Same 4 as GOAL_2, plus popover-heavy UX:

| Slider | Range | Default | Popover content |
|--------|-------|---------|-----------------|
| Adoptionsgrad | 30–85% | 62% | Historical S-curves, comparison to Teams rollout, what this % means in real workers |
| Agentandel | 5–50% | 25% | What agents vs copilots are, the 10× compute multiplier, real-world examples |
| Sjukvårdens AI-adoption | 20–90% | 55% | What AI diagnostics means in practice, which care chains, maturity today |
| Finjusterande organisationer | 10–300 | 80 | What fine-tuning is, why orgs need it, GPU-hours per run |

Each slider triggers a popover/insight box beneath it (not tooltip — visible inline, with a colored left border like the MollyRa insight boxes). The explainer updates contextually: at low values it says one thing, at high values another.

**Sovereignty toggle** remains separate and prominent above the sliders — it's not a slider, it's a political choice.

**Low/base/high presets** remain as quick-set buttons with consequence popovers.

## Visual design

Keep the dark theme from GOAL_2 but adopt cues from MollyRa:
- Slightly warmer dark: `#0C0E14` instead of `#080C10`
- Section eyebrows with decorative underlines
- Scroll-reveal fade-up animation on narrative sections
- Card hover with subtle lift
- Use `DM Sans` or keep `Geist` — either works, but tighten the type scale
- Color-coded sector areas in the chart: blue (public core), teal (healthcare), slate (defense), amber (private)

## Continual learning (from GOAL_1)

### O6 — Update CLAUDE.md on every gotcha (internal)

- KR1: Every error, snag, or workaround encountered during development is captured as a rule or convention in `CLAUDE.md` within the same iteration.
- KR2: `CLAUDE.md` contains at least one entry per phase (foundation, hero, narrative, sources, QA) by project end.
- KR3: Future loops on this repo produce fewer first-iteration failures because guardrails already exist in `CLAUDE.md`.

### O7 — Build up target architecture knowledge in CLAUDE.md (internal)

- KR1: `CLAUDE.md` documents the target architecture: stack choices, directory layout, i18n approach, data flow from research markdown to interactive UI.
- KR2: Any architectural decision (framework, library, deployment config) is recorded in `CLAUDE.md` before or immediately after implementation.
- KR3: A new contributor (human or AI) can read `CLAUDE.md` alone and understand how to extend the site without reading existing code first.

## Data gaps — be honest

| Sector | Data quality | Source |
|--------|-------------|--------|
| Public sector core | Strong — bottom-up model with numbered assumptions | 03-berakningsmodell.md |
| Healthcare | Good — detailed bottom-up per care chain | 13-sjukvard-compute-per-vardkedja.md |
| Defense/military | None — no model exists | Need new research |
| Private sector | Rough — tokens-per-capita back-of-envelope only | 11-kompletterande-perspektiv.md |
| EU aggregate | None — only country-level proxies scaled to Sweden | 04-internationella-jamforelser.md |

Where data is weak, the UI should say so explicitly. This is an invitation to contribute, not a pretense of completeness.

## Definition of DONE

**DONE = https://compute-analysis.vercel.app/ loads with:**
1. Split-view layout: sliders left, year-by-year chart right
2. Sector toggles (at least public core + healthcare + private sector) that stack in the chart
3. Energy (MW) shown as consequence
4. EU context visible
5. Each assumption slider has popover/inline explainer
6. Sovereignty toggle with dramatic on/off

**A decision-maker can see that Sweden's full AI compute need is 4–5× the public sector number alone, and understand the energy infrastructure question in under 60 seconds.**

## What this is NOT

- Not a replacement of the research. The research documents stay untouched.
- Not a precise model for defense or private sector. Those are flagged estimates that invite PR contributions.
- Not a complete EU compute model. The EU framing is contextual, not quantitative.
