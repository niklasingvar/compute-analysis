# Goal

Deploy a Vercel-hosted, bilingual (SV/EN) web app that makes Sweden/EU AI-compute needs understandable through interactive assumption-driven scenarios, including a readable article, and helps decision makers and for those who need guide arm-chair contributors to give feedback on github.

Internal goal: on every gotcha, snag, error, or epiphany, update CLAUDE.md with what to do and what not to do — so every loop iteration leaves the repo smarter than it found it. Continual Learning FTW.

## Objectives & Key Results

### O1 — Ship a production baseline on Vercel

- KR1: Live production URL with automated deploys from `main`.
- KR3: Core pages load in both Swedish and English with no broken routes.

### O2 — Make compute assumptions interactive above the fold

- KR1: Above-the-fold hero includes interactive assumptions control (sliders/toggles) for low/bas/hög compute outcomes that shows the compute need. (Design goal, nerdy graph and dashboard)
- KR2: Assumption changes update visible compute outputs immediately (same view, no page reload).
- KR3: At least 80 % of test users can explain how one key antagande changes compute need after using the interactive section.

### O3 — Convert interested readers to GitHub PR contributors

- KR1: Primary CTA text explicitly points to PR contribution, e.g. "Contribute via PR on GitHub".
- KR2: CTA appears in hero and at least one in-content placement.
- KR3: PR-contribution click-through reaches target threshold after launch (set during analytics bootstrap).

### O4 — Ensure high-quality bilingual delivery (SV/EN)

- KR1: 100 % of user-facing pages available in Swedish and English.
- KR2: Language switch preserves current page context.
- KR3: Terminology glossary for AI/compute terms is consistent across both languages.

### O5 — Ensure EU and Swedish decision-makers understand urgency

- KR1: Messaging includes a dedicated "why now" narrative tied to policy/timing risk for Sweden and EU.
- KR2: Stakeholder test interviews show decision-makers can state the main recommendation and consequence of inaction.
- KR3: Page structure supports executive scanning: interactive hero → concise argument/blog section → detailed sources.

### O6 — Continual learning: update CLAUDE.md on every gotcha (internal)

- KR1: Every error, snag, or workaround encountered during development is captured as a rule or convention in `CLAUDE.md` within the same iteration.
- KR2: `CLAUDE.md` contains at least one entry per phase (foundation, hero, narrative, sources, QA) by project end.
- KR3: Future Ralph loops on this repo produce fewer first-iteration failures because guardrails already exist in `CLAUDE.md`.

### O7 — Build up target architecture knowledge in CLAUDE.md (internal)

- KR1: `CLAUDE.md` documents the target architecture: stack choices, directory layout (`/app` structure), i18n approach, data flow from research markdown to interactive UI.
- KR2: Any architectural decision (framework, library, deployment config) is recorded in `CLAUDE.md` before or immediately after implementation.
- KR3: A new contributor (human or AI) can read `CLAUDE.md` alone and understand how to extend the site without reading existing code first.

## Page narrative (information architecture)

1. **Above the fold** — Interactive compute widget (assumptions → compute need) + primary PR CTA.
2. **Middle layer** — Blog-style explanatory narrative with expandable "read more" depth sections.
3. **Bottom layer** — Sources/evidence section with clear references to repo research files.

## Repo layout

- `/app` — All web-app code (Next.js on Vercel).
- Root — Research markdown files (`01-ramverk.md` … `13-sjukvard-compute-per-vardkedja.md`), untouched except for reading/linking.

## Definition of DONE

**DONE = https://compute-analysis.vercel.app/ loads and works.** Not a local build. Not a passing CI check. A real URL that a human can click and see the interactive compute widget. If the link 404s, we are NOT done.

## Resources

- `.env` with `VERCEL_TOKEN` and `VERCEL_PROJECT_ID` for deployment
