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
    langSwitchShort: "EN",

    // Hero
    heroTitle: "Hur mycket AI-kapacitet behöver Sverige?",
    heroSubtitle:
      "Utforska scenarier för offentlig sektors compute-behov 2026–2031",
    heroLead:
      "Svensk offentlig sektor behöver planera för betydande AI-beräkningskapacitet. Dra i reglagen nedan för att se hur olika antaganden påverkar behovet.",

    // Scenario labels
    scenarioLow: "Låg",
    scenarioBase: "Bas",
    scenarioHigh: "Hög",
    scenarioLabel: "Ambitionsnivå",

    // Interactive widget
    yearLabel: "Fokusår",
    computeNeed: "Compute-behov",
    unit: "H100-ekvivalenter",
    annualCost: "Årskostnad",
    powerNeed: "Effektbehov",
    strategicMeaning: "Strategisk innebörd",

    // Scenario descriptions
    lowDesc:
      "Defensivt minimum — mestadels molnbaserad inference, begränsad nationell kontroll",
    baseDesc:
      "Bred AI-användning + meningsfull nationell modellförmåga och suverän träning",
    highDesc:
      "Offensiv ambition — omfattande suverän kapacitet, ledande nordisk AI-nation",

    // Tiers
    tier1: "Copilots & agenter",
    tier2: "Specialiserad inference",
    tier3: "Finjustering",
    tier4: "Suverän träning",
    tierExplainer:
      "Compute-behovet byggs upp av fyra lager. Tier 4 (suverän träning) är det största enskilda politiska valet.",

    // CTA
    ctaPrimary: "Bidra via PR på GitHub",
    ctaSecondary: "Läs hela analysen",
    ctaExplainer:
      "Alla antaganden och beräkningar är öppna. Hjälp oss förbättra analysen.",

    // Narrative sections
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

    // Risk table
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
      "Varje central siffra belyses från minst två spår med olika metodansats: botten-upp (användningsfall × adoption × compute), topp-ned (internationella jämförelser) och storbolagstriangulering (global marknadskostnad).",

    // Footer
    footerText: "Öppen analys — alla antaganden och beräkningar är publika.",
    footerLicense: "Bidra via GitHub",

    // Document links
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
    langSwitchShort: "SV",

    // Hero
    heroTitle: "How much AI capacity does Sweden need?",
    heroSubtitle:
      "Explore scenarios for public sector compute needs 2026–2031",
    heroLead:
      "Sweden's public sector needs to plan for significant AI compute capacity. Adjust the controls below to see how different assumptions affect the need.",

    // Scenario labels
    scenarioLow: "Low",
    scenarioBase: "Base",
    scenarioHigh: "High",
    scenarioLabel: "Ambition level",

    // Interactive widget
    yearLabel: "Focus year",
    computeNeed: "Compute need",
    unit: "H100 equivalents",
    annualCost: "Annual cost",
    powerNeed: "Power need",
    strategicMeaning: "Strategic meaning",

    // Scenario descriptions
    lowDesc:
      "Defensive minimum — mostly cloud-based inference, limited national control",
    baseDesc:
      "Broad AI usage + meaningful national model capability and sovereign training",
    highDesc:
      "Offensive ambition — extensive sovereign capacity, leading Nordic AI nation",

    // Tiers
    tier1: "Copilots & agents",
    tier2: "Specialized inference",
    tier3: "Fine-tuning",
    tier4: "Sovereign training",
    tierExplainer:
      "Compute needs are built from four tiers. Tier 4 (sovereign training) is the single largest policy choice.",

    // CTA
    ctaPrimary: "Contribute via PR on GitHub",
    ctaSecondary: "Read the full analysis",
    ctaExplainer:
      "All assumptions and calculations are open. Help us improve the analysis.",

    // Narrative sections
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

    // Risk table
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
      "Each key figure is illuminated from at least two tracks with different methodological approaches: bottom-up (use cases × adoption × compute), top-down (international comparisons), and big-company triangulation (global market cost).",

    // Footer
    footerText: "Open analysis — all assumptions and calculations are public.",
    footerLicense: "Contribute on GitHub",

    // Document links
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

export function getTranslations(locale: Locale) {
  return translations[locale];
}
