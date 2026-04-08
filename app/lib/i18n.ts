export const locales = ["sv", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "sv";

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}

const translations = {
  sv: {
    // Meta
    siteTitle: "Sveriges AI-compute-behov 2026–2031",
    siteDescription:
      "Interaktiv analys av hur mycket beräkningskapacitet svensk offentlig sektor behöver för AI",

    // Nav
    langSwitch: "English",
    navTitle1: "AI Compute",
    navTitle2: "Sverige",

    // Hero
    heroTitle1: "Hur mycket AI-kapacitet",
    heroTitle2: "behöver Sverige?",
    heroLead:
      "Dra i reglagen. Se vad som händer med Sveriges compute-behov när du ändrar antagandena.",

    // Big number
    computeNeed: "Compute-behov",
    unit: "H100-ekvivalenter",
    annualCost: "Årskostnad",
    powerNeed: "Effektbehov",

    // Year
    yearLabel: "År",

    // Tiers
    tier1: "Copilots & agenter",
    tier2: "Specialiserad inference",
    tier3: "Finjustering",
    tier4: "Suverän träning",

    // Presets
    presetLabel: "Snabbval",
    presetLow: "Låg",
    presetBase: "Bas",
    presetHigh: "Hög",
    presetLowConsequence:
      "Defensivt minimum. Sverige köper AI som tjänst — billigare initialt, men fullt beroende av utländska leverantörer. Ingen kontroll över modeller för känsliga data.",
    presetBaseConsequence:
      "Bred AI-användning plus meningsfull nationell modellförmåga. Kräver riktade statliga satsningar utöver befintlig IT-budget — men ger handlingsfrihet.",
    presetHighConsequence:
      "Offensiv ambition. Sverige bygger ledande nordisk AI-kapacitet med omfattande suverän träning. Hög kostnad, men maximal strategisk handlingsfrihet och exportpotential.",

    // Sovereignty toggle
    sovereigntyLabel: "Suverän AI-träning",
    sovereigntySubtitle: "Träning av svenska/EU-ägda grundmodeller",
    sovereigntyOnBadge: "Sverige behåller kontrollen",
    sovereigntyOffBadge: "Beroende av utländska leverantörer",
    sovereigntyOffWarning:
      "Utan suverän träningskapacitet blir Sverige helt beroende av amerikanska och kinesiska AI-leverantörer för känsliga data inom sjukvård, rättsväsende och myndighetsutövning. Utländska aktörer kan diktera pris, villkor och tillgänglighet — och Sverige förlorar möjligheten att träna modeller anpassade för svensk lag, språk och offentlig domän.",
    sovereigntyOffCta: "Läs mer om suveränitetsanalysen",

    // Assumption sliders
    assumptionsLabel: "Justera antaganden",
    assumptionsCollapsed: "Visa antaganden",

    sliderAdoptionLabel: "Adoptionsgrad",
    sliderAdoptionExplainer:
      "Andelen av ~500 000 kunskapsarbetare i offentlig sektor som använder AI-verktyg dagligen 2029. Historiskt har bred IT-adoption i svensk offentlig sektor tagit 7–10 år. 62% på fyra år förutsätter nationella ramavtal, ledningsmandat och kompetensprogram.",

    sliderAgentLabel: "Agentandel",
    sliderAgentExplainer:
      "Andelen aktiva AI-användare som kör autonoma agenter snarare än enkla copilot-assistenter. Agenter kör ~10× mer compute per dag — de arbetar självständigt i bakgrunden, gör verktygsanrop och hanterar hela arbetsflöden. En ökning från 25% till 40% agentandel höjer Tier 1 med ~50%.",

    sliderHealthcareLabel: "Sjukvårdens AI-adoption",
    sliderHealthcareExplainer:
      "Hur djupt sjukvården embracerar AI-diagnostik: bildanalys (röntgen, patologi, MR), kliniskt beslutsstöd, genomik och kronisk övervakning. 55% motsvarar att majoriteten av regionerna har AI i ordinarie diagnostik — inte bara piloter. Sjukvården driver merparten av Tier 2.",

    sliderFineTuningLabel: "Organisationer som finjusterar",
    sliderFineTuningExplainer:
      "Antal myndigheter, regioner och kommuner som aktivt finjusterar AI-modeller på egna data 2029. Finjustering kräver dedikerad GPU-kapacitet under kortare perioder. 80 organisationer motsvarar de stora myndigheterna plus hälften av regionerna.",

    // CTA
    ctaPrimary: "Bidra via PR på GitHub",
    ctaSecondary: "Läs hela analysen",
    ctaExplainer:
      "Alla antaganden och beräkningar är öppna. Hjälp oss förbättra analysen.",

    // Narrative
    narrativeTitle: "Varför detta spelar roll",
    conclusion1Title: "Mer än copilots",
    conclusion1Text:
      "Det räcker inte längre att räkna på enkel chatbotanvändning. Agentiska arbetsflöden, längre kontexter och bakgrundsagenter flyttar upp behovet markant. Tier 1 landar kring ~2 200 H100-eq 2029 i basscenariot.",
    conclusion2Title: "Suveränitet är ett politiskt val",
    conclusion2Text:
      "Om Sverige väljer att träna och vidareutveckla modeller för känsliga data och offentlig domän blir Tier 4 avgörande — ~4 500 H100-eq i basscenariot. Det är ett aktivt policybeslut, inte en konsekvens av användartillväxt.",
    conclusion3Title: "Nuvarande budget räcker inte",
    conclusion3Text:
      "Befintlig IT-budgetlogik bär ~2 000–4 000 H100-eq. Även det rent operativa behovet (~4 300 H100-eq) överstiger detta. Huvudscenariot kräver riktade statliga satsningar, EU-medel och offentlig-privat samverkan.",
    conclusion4Title: "Kostnaden är hanterbar — men kräver beslut nu",
    conclusion4Text:
      "Basscenariot motsvarar ~2 000 MSEK/år och ~6,3 MW 2029. Inte extraordinärt internationellt — men Sverige måste agera i tid i en marknad med långa ledtider.",

    // Why now
    whyNowTitle: "Varför nu?",
    whyNowText:
      "GPU-leveranser har 12–18 månaders ledtid. Datacenter kräver nätanslutning och miljötillstånd. Ramavtal måste upphandlas. Varje kvartal utan beslut är ett kvartal utan kapacitet 2028–2029 — precis när efterfrågan väntas accelerera.",

    // Risks
    riskTitle: "Risker",
    riskNoFunding: "Utebliven nyfinansiering",
    riskNoFundingDesc:
      "Kapaciteten stannar vid ~2 000–4 000 H100-eq — en bråkdel av huvudscenariot",
    riskLowAdoption: "Låg adoption",
    riskLowAdoptionDesc: "Huvudscenariot kan bli för högt på kort sikt",
    riskFastAgents: "Snabb agentisk övergång",
    riskFastAgentsDesc: "Huvudscenariot kan bli för lågt redan före 2029",
    riskSupply: "Supply-begränsningar",
    riskSupplyDesc: "GPU:er och datacenterkapacitet svåra att säkra",

    // Recommendations
    recsTitle: "Tre rekommendationer",
    rec1Title: "Starta upphandling nu",
    rec1Text:
      "Ramavtal, leverantörsdialog, platsval och nätanslutning måste starta innan behovet toppar 2028–2029.",
    rec2Title: "Bygg en hybridmodell",
    rec2Text:
      "Börja med ~1 000–1 500 H100-eq: on-prem för känslig data, moln för burst. Skala mot huvudscenariot.",
    rec3Title: "Koppla compute till kompetens",
    rec3Text:
      "Compute utan styrning ger låg effekt. Paketera med ansvarsfördelning, utbildning och datapolicy.",

    // Sources
    sourcesTitle: "Källor & metodik",
    sourcesIntro:
      "Analysen bygger på 13 öppna dokument med numrerade antaganden (A1–A90), tre trianguleringsspår och transparenta härledningar.",
    sourcesRepo: "Öppna hela analysen på GitHub",
    sourcesMethodTitle: "Triangulering",
    sourcesMethod:
      "Varje central siffra belyses från minst två spår med olika metodansats: botten-upp, topp-ned och storbolagstriangulering.",

    // Footer
    footerText: "Öppen analys — alla antaganden och beräkningar är publika.",
    footerLicense: "Bidra via GitHub",

    // Doc links
    docFramework: "Ramverk & metodik",
    docAssumptions: "Antaganden (A1–A90)",
    docModel: "Beräkningsmodell",
    docInternational: "Internationella jämförelser",
    docSources: "Källregister",
    docSummary: "Sammanfattning",
    docTechnical: "Teknisk bilaga",
    docSovereignty: "Suveränitet & strategi",
    docThoughtExperiment: "Bygga vs. köpa",
    docCanWeWait: "Kan vi vänta?",
    docPractitioner: "Kompletterande perspektiv",
    docStressTest: "Stresstest: varför bas kan vara för lågt",
    docHealthcare: "Sjukvårdens compute-behov",
  },
  en: {
    // Meta
    siteTitle: "Sweden's AI Compute Needs 2026–2031",
    siteDescription:
      "Interactive analysis of how much compute capacity Sweden's public sector needs for AI",

    // Nav
    langSwitch: "Svenska",
    navTitle1: "AI Compute",
    navTitle2: "Sweden",

    // Hero
    heroTitle1: "How much AI capacity",
    heroTitle2: "does Sweden need?",
    heroLead:
      "Pull the levers. See what happens to Sweden's compute need when you change the assumptions.",

    // Big number
    computeNeed: "Compute need",
    unit: "H100 equivalents",
    annualCost: "Annual cost",
    powerNeed: "Power need",

    // Year
    yearLabel: "Year",

    // Tiers
    tier1: "Copilots & agents",
    tier2: "Specialized inference",
    tier3: "Fine-tuning",
    tier4: "Sovereign training",

    // Presets
    presetLabel: "Presets",
    presetLow: "Low",
    presetBase: "Base",
    presetHigh: "High",
    presetLowConsequence:
      "Defensive minimum. Sweden buys AI as a service — cheaper initially, but fully dependent on foreign providers. No control over models for sensitive data.",
    presetBaseConsequence:
      "Broad AI usage plus meaningful national model capability. Requires targeted state funding beyond existing IT budgets — but provides strategic autonomy.",
    presetHighConsequence:
      "Offensive ambition. Sweden builds leading Nordic AI capacity with extensive sovereign training. High cost, but maximum strategic freedom and export potential.",

    // Sovereignty toggle
    sovereigntyLabel: "Sovereign AI training",
    sovereigntySubtitle: "Training Swedish/EU-owned foundation models",
    sovereigntyOnBadge: "Sweden retains control",
    sovereigntyOffBadge: "Dependent on foreign providers",
    sovereigntyOffWarning:
      "Without sovereign training capacity, Sweden becomes fully dependent on American and Chinese AI providers for sensitive data in healthcare, justice, and public administration. Foreign actors can dictate price, terms, and availability — and Sweden loses the ability to train models adapted for Swedish law, language, and public domain.",
    sovereigntyOffCta: "Read the sovereignty analysis",

    // Assumption sliders
    assumptionsLabel: "Adjust assumptions",
    assumptionsCollapsed: "Show assumptions",

    sliderAdoptionLabel: "Adoption rate",
    sliderAdoptionExplainer:
      "Share of ~500,000 knowledge workers in public sector using AI tools daily by 2029. Historically, broad IT adoption in Swedish public sector has taken 7–10 years. 62% in four years requires national framework agreements, leadership mandates, and competence programs.",

    sliderAgentLabel: "Agent share",
    sliderAgentExplainer:
      "Share of active AI users running autonomous agents rather than simple copilot assistants. Agents use ~10× more compute per day — they work independently in the background, make tool calls, and handle entire workflows. An increase from 25% to 40% agent share raises Tier 1 by ~50%.",

    sliderHealthcareLabel: "Healthcare AI adoption",
    sliderHealthcareExplainer:
      "How deeply healthcare embraces AI diagnostics: image analysis (X-ray, pathology, MRI), clinical decision support, genomics, and chronic monitoring. 55% means the majority of regions have AI in routine diagnostics — not just pilots. Healthcare drives most of Tier 2.",

    sliderFineTuningLabel: "Organizations fine-tuning",
    sliderFineTuningExplainer:
      "Number of agencies, regions, and municipalities actively fine-tuning AI models on their own data by 2029. Fine-tuning requires dedicated GPU capacity during shorter periods. 80 organizations corresponds to the large agencies plus half the regions.",

    // CTA
    ctaPrimary: "Contribute via PR on GitHub",
    ctaSecondary: "Read the full analysis",
    ctaExplainer:
      "All assumptions and calculations are open. Help us improve the analysis.",

    // Narrative
    narrativeTitle: "Why this matters",
    conclusion1Title: "More than copilots",
    conclusion1Text:
      "Simple chatbot usage is no longer sufficient to model demand. Agentic workflows, longer contexts, and background agents significantly increase the need. Tier 1 lands around ~2,200 H100-eq in 2029 in the base scenario.",
    conclusion2Title: "Sovereignty is a policy choice",
    conclusion2Text:
      "If Sweden chooses to train and develop models for sensitive data and public domain, Tier 4 becomes decisive — ~4,500 H100-eq in the base scenario. This is an active policy decision, not a consequence of user growth.",
    conclusion3Title: "Current budgets are insufficient",
    conclusion3Text:
      "Existing IT budget logic supports ~2,000–4,000 H100-eq. Even the purely operational need (~4,300 H100-eq) exceeds this. The base scenario requires targeted state investments, EU funding, and public-private partnerships.",
    conclusion4Title: "The cost is manageable — but requires action now",
    conclusion4Text:
      "The base scenario represents ~2,000 MSEK/year and ~6.3 MW in 2029. Not extraordinary internationally — but Sweden must act in time in a market with long lead times.",

    // Why now
    whyNowTitle: "Why now?",
    whyNowText:
      "GPU deliveries have 12–18 month lead times. Data centers require grid connections and permits. Framework agreements must be procured. Every quarter without a decision means a quarter without capacity in 2028–2029 — precisely when demand is expected to accelerate.",

    // Risks
    riskTitle: "Risks",
    riskNoFunding: "No new funding",
    riskNoFundingDesc:
      "Capacity stalls at ~2,000–4,000 H100-eq — a fraction of the base scenario",
    riskLowAdoption: "Low adoption",
    riskLowAdoptionDesc: "Base scenario may be too high short-term",
    riskFastAgents: "Fast agentic transition",
    riskFastAgentsDesc: "Base scenario may be too low before 2029",
    riskSupply: "Supply constraints",
    riskSupplyDesc: "GPUs and data center capacity hard to secure",

    // Recommendations
    recsTitle: "Three recommendations",
    rec1Title: "Start procurement now",
    rec1Text:
      "Framework agreements, vendor dialogue, site selection, and grid connections must start before demand peaks in 2028–2029.",
    rec2Title: "Build a hybrid model",
    rec2Text:
      "Start with ~1,000–1,500 H100-eq: on-prem for sensitive data, cloud for burst. Scale toward the base scenario.",
    rec3Title: "Couple compute with competence",
    rec3Text:
      "Compute without governance yields low impact. Bundle with accountability, training, and data policy.",

    // Sources
    sourcesTitle: "Sources & methodology",
    sourcesIntro:
      "The analysis builds on 13 open documents with numbered assumptions (A1–A90), three triangulation tracks, and transparent derivations.",
    sourcesRepo: "Open the full analysis on GitHub",
    sourcesMethodTitle: "Triangulation",
    sourcesMethod:
      "Each key figure is illuminated from at least two tracks with different methodological approaches: bottom-up, top-down, and big-company triangulation.",

    // Footer
    footerText: "Open analysis — all assumptions and calculations are public.",
    footerLicense: "Contribute on GitHub",

    // Doc links
    docFramework: "Framework & methodology",
    docAssumptions: "Assumptions (A1–A90)",
    docModel: "Calculation model",
    docInternational: "International comparisons",
    docSources: "Source registry",
    docSummary: "Executive summary",
    docTechnical: "Technical appendix",
    docSovereignty: "Sovereignty & strategy",
    docThoughtExperiment: "Build vs. buy",
    docCanWeWait: "Can we wait?",
    docPractitioner: "Complementary perspectives",
    docStressTest: "Stress test: why base may be too low",
    docHealthcare: "Healthcare compute needs",
  },
} as const;

export type TranslationKey = keyof (typeof translations)["sv"];

export function t(locale: Locale, key: TranslationKey): string {
  return translations[locale][key] ?? translations.sv[key] ?? key;
}
