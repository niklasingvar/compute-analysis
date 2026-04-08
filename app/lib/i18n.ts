export const locales = ["sv", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "sv";

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}

const translations = {
  sv: {
    siteTitle: "Sveriges AI-compute-behov — i europeisk kontext",
    siteDescription:
      "Interaktiv analys av hur mycket beräkningskapacitet Sverige och EU behöver för AI",
    langSwitch: "English",
    navTitle1: "AI Compute",
    navTitle2: "Sverige",

    // Hero
    heroTitle1: "Hur mycket AI-kapacitet",
    heroTitle2: "behöver Sverige?",
    heroSubtitle: "i europeisk kontext",
    heroLead:
      "Dra i reglagen och se hur antagandena påverkar Sveriges totala AI-compute-behov — från offentlig sektor till hela ekonomin.",

    // Sector toggles
    sectorsLabel: "Sektorer",
    sectorPublicCore: "Offentlig sektor",
    sectorPublicCoreDesc: "Exkl. sjukvård & försvar",
    sectorHealthcare: "Sjukvård",
    sectorHealthcareDesc: "AI-diagnostik, beslutsstöd, genomik",
    sectorDefense: "Försvar",
    sectorDefenseDesc: "Uppskattning — ingen underliggande modell",
    sectorPrivate: "Privat sektor",
    sectorPrivateDesc: "Grov uppskattning — tokens per capita",
    dataQualityStrong: "Stark datakvalitet",
    dataQualityGood: "God datakvalitet",
    dataQualityRough: "Grov uppskattning",
    dataQualityNone: "Ingen modell — uppskattning",
    sectorDefenseDisclaimer:
      "Ingen botten-upp-modell finns. Uppskattat som ~12% av övrig offentlig sektors AI-compute baserat på internationella försvarstbudgetproportioner. Bidra med bättre data via PR.",
    sectorPrivateDisclaimer:
      "Baserat på tokens-per-capita-kontroll (250 000 tokens/capita/dag → 35 000–50 000 H100-eq hela Sverige). Privat sektor ≈ offentlig × 3,5. Källa: 11-kompletterande-perspektiv.md.",

    // Year / units
    yearLabel: "År",
    computeNeed: "Compute-behov",
    unit: "H100-ekvivalenter",
    annualCost: "Årskostnad",
    powerNeed: "Effektbehov",

    // Tier labels
    tier1: "Copilots & agenter",
    tier2: "Specialiserad inference",
    tier3: "Finjustering",
    tier4: "Suverän träning",

    // Sovereignty
    sovereigntyLabel: "Suverän AI-träning",
    sovereigntySubtitle: "Träning av svenska/EU-ägda grundmodeller",
    sovereigntyOnBadge: "Sverige behåller kontrollen",
    sovereigntyOffBadge: "Beroende av utländska leverantörer",
    sovereigntyOffWarning:
      "Utan suverän träningskapacitet blir Sverige helt beroende av amerikanska och kinesiska AI-leverantörer för känsliga data inom sjukvård, rättsväsende och myndighetsutövning. Utländska aktörer kan diktera pris, villkor och tillgänglighet.",
    sovereigntyOffCta: "Läs suveränitetsanalysen",

    // Assumption sliders
    assumptionsLabel: "Justera antaganden",
    assumptionsCollapsed: "Visa antaganden",
    sliderAdoptionLabel: "Adoptionsgrad",
    sliderAdoptionExplainer:
      "Andelen av ~500 000 kunskapsarbetare i offentlig sektor som använder AI-verktyg dagligen 2029. Historiskt har bred IT-adoption i svensk offentlig sektor tagit 7–10 år. 62% på fyra år förutsätter nationella ramavtal, ledningsmandat och kompetensprogram.",
    sliderAdoptionLow:
      "Under 40% — ungefär där svensk kommunal e-tjänst-adoption var efter 10 år.",
    sliderAdoptionHigh:
      "Över 70% — snabbare än någon historisk IT-adoption i svensk offentlig sektor, inklusive pandemi-driven Teams-utrullning.",
    sliderAgentLabel: "Agentandel",
    sliderAgentExplainer:
      "Andelen aktiva AI-användare som kör autonoma agenter snarare än enkla copilot-assistenter. Agenter kör ~10× mer compute per dag — de arbetar självständigt, gör verktygsanrop och hanterar hela arbetsflöden.",
    sliderAgentLow:
      "Under 15% — mestadels enkel copilot-användning, få autonoma arbetsflöden.",
    sliderAgentHigh:
      "Över 35% — agentiska arbetsflöden dominerar, varje dag kör bakgrundsagenter tusentals uppgifter autonomt.",
    sliderHealthcareLabel: "Sjukvårdens AI-adoption",
    sliderHealthcareExplainer:
      "Hur djupt sjukvården embracerar AI-diagnostik: bildanalys (röntgen, patologi, MR), kliniskt beslutsstöd, genomik och kronisk övervakning.",
    sliderHealthcareLow:
      "Under 35% — AI finns i piloter men inte i ordinarie diagnostik.",
    sliderHealthcareHigh:
      "Över 70% — majoriteten av diagnostiska arbetsflöden har AI-stöd som standard.",
    sliderFineTuningLabel: "Organisationer som finjusterar",
    sliderFineTuningExplainer:
      "Antal myndigheter, regioner och kommuner som aktivt finjusterar AI-modeller på egna data. Finjustering kräver dedikerad GPU-kapacitet under kortare perioder.",
    sliderFineTuningLow:
      "Under 40 — bara de största myndigheterna finjusterar.",
    sliderFineTuningHigh:
      "Över 150 — de flesta kommuner och alla regioner finjusterar aktivt.",

    // Presets
    presetLabel: "Snabbval",
    presetLow: "Låg",
    presetBase: "Bas",
    presetHigh: "Hög",
    presetLowConsequence:
      "Defensivt minimum. Sverige köper AI som tjänst — billigare initialt, men fullt beroende av utländska leverantörer.",
    presetBaseConsequence:
      "Bred AI-användning plus nationell modellförmåga. Kräver riktade statliga satsningar — men ger handlingsfrihet.",
    presetHighConsequence:
      "Offensiv ambition. Omfattande suverän kapacitet med exportpotential. Hög kostnad, maximal strategisk frihet.",

    // Chart
    chartTitle: "Compute-behov över tid",
    chartYAxis: "H100-ekvivalenter",

    // Energy
    energyTitle: "Energibehov",
    energyUnit: "MW",
    energyContext:
      "~6 MW = ett medelstort datacenter. Facebooks Luleå startade med ~40 MW.",
    energyLabel: "Facility power",

    // Cost
    costTitle: "Årskostnad",
    costUnit: "MSEK",

    // EU context
    euTitle: "I europeisk kontext",
    euSubtitle:
      "Sveriges compute-behov jämfört med nordiska och europeiska AI-satsningar",
    euSweden: "Sverige (bas)",
    euSwedenFull: "Sverige (alla sektorer)",

    // Narrative
    narrativeTitle: "Varför detta spelar roll",
    conclusion1Title: "Mer än copilots",
    conclusion1Text:
      "Agentiska arbetsflöden, längre kontexter och bakgrundsagenter flyttar upp behovet markant. Tier 1 landar kring ~2 200 H100-eq 2029 i basscenariot.",
    conclusion2Title: "Suveränitet är ett politiskt val",
    conclusion2Text:
      "Suverän träning står för ~4 500 H100-eq — hälften av basscenariot. Det är ett aktivt policybeslut, inte en konsekvens av användartillväxt.",
    conclusion3Title: "Nuvarande budget räcker inte",
    conclusion3Text:
      "Befintlig IT-budgetlogik bär ~2 000–4 000 H100-eq. Huvudscenariot kräver riktade statliga satsningar, EU-medel och offentlig-privat samverkan.",
    conclusion4Title: "Hela ekonomin behöver 4–5× mer",
    conclusion4Text:
      "Offentlig sektor är ~20% av Sveriges totala AI-compute-behov. Privat sektor, forskning och försvar tillkommer. Energiinfrastruktur och nätkapacitet måste planeras för helheten.",

    // Why now
    whyNowTitle: "Varför nu?",
    whyNowText:
      "GPU-leveranser har 12–18 månaders ledtid. Datacenter kräver nätanslutning och miljötillstånd. Varje kvartal utan beslut är ett kvartal utan kapacitet 2028–2029.",

    // Risks
    riskTitle: "Risker",
    riskNoFunding: "Utebliven nyfinansiering",
    riskNoFundingDesc: "Kapaciteten stannar vid ~2 000–4 000 H100-eq",
    riskLowAdoption: "Låg adoption",
    riskLowAdoptionDesc: "Huvudscenariot kan bli för högt på kort sikt",
    riskFastAgents: "Snabb agentisk övergång",
    riskFastAgentsDesc: "Huvudscenariot kan bli för lågt redan före 2029",
    riskSupply: "Supply-begränsningar",
    riskSupplyDesc: "GPU:er och datacenterkapacitet svåra att säkra",
    riskEnergy: "Elnätskapacitet",
    riskEnergyDesc:
      "Datacenter kräver nätanslutning — ledtider 2–5 år för nya anslutningar i Sverige",

    // Recommendations
    recsTitle: "Tre rekommendationer",
    rec1Title: "Starta upphandling nu",
    rec1Text:
      "Ramavtal, leverantörsdialog, platsval och nätanslutning måste starta innan behovet toppar 2028–2029.",
    rec2Title: "Bygg en hybridmodell",
    rec2Text:
      "Börja med ~1 000–1 500 H100-eq: on-prem för känslig data, moln för burst.",
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
      "Varje central siffra belyses från minst två spår: botten-upp, topp-ned och storbolagstriangulering.",

    // CTA
    ctaPrimary: "Bidra via PR på GitHub",
    ctaSecondary: "Läs hela analysen",
    ctaExplainer:
      "Alla antaganden och beräkningar är öppna. Hjälp oss förbättra analysen — särskilt för sektorer med svag datakvalitet.",

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
    siteTitle: "Sweden's AI Compute Needs — in European Context",
    siteDescription:
      "Interactive analysis of how much compute capacity Sweden and the EU need for AI",
    langSwitch: "Svenska",
    navTitle1: "AI Compute",
    navTitle2: "Sweden",

    heroTitle1: "How much AI capacity",
    heroTitle2: "does Sweden need?",
    heroSubtitle: "in European context",
    heroLead:
      "Pull the levers and see how assumptions affect Sweden's total AI compute need — from public sector to the full economy.",

    sectorsLabel: "Sectors",
    sectorPublicCore: "Public sector",
    sectorPublicCoreDesc: "Excl. healthcare & defense",
    sectorHealthcare: "Healthcare",
    sectorHealthcareDesc: "AI diagnostics, decision support, genomics",
    sectorDefense: "Defense",
    sectorDefenseDesc: "Estimate — no underlying model",
    sectorPrivate: "Private sector",
    sectorPrivateDesc: "Rough estimate — tokens per capita",
    dataQualityStrong: "Strong data quality",
    dataQualityGood: "Good data quality",
    dataQualityRough: "Rough estimate",
    dataQualityNone: "No model — estimate",
    sectorDefenseDisclaimer:
      "No bottom-up model exists. Estimated at ~12% of other public sector AI compute based on international defense budget proportions. Contribute better data via PR.",
    sectorPrivateDisclaimer:
      "Based on tokens-per-capita check (250,000 tokens/capita/day → 35,000–50,000 H100-eq for all of Sweden). Private sector ≈ public × 3.5. Source: 11-kompletterande-perspektiv.md.",

    yearLabel: "Year",
    computeNeed: "Compute need",
    unit: "H100 equivalents",
    annualCost: "Annual cost",
    powerNeed: "Power need",

    tier1: "Copilots & agents",
    tier2: "Specialized inference",
    tier3: "Fine-tuning",
    tier4: "Sovereign training",

    sovereigntyLabel: "Sovereign AI training",
    sovereigntySubtitle: "Training Swedish/EU-owned foundation models",
    sovereigntyOnBadge: "Sweden retains control",
    sovereigntyOffBadge: "Dependent on foreign providers",
    sovereigntyOffWarning:
      "Without sovereign training capacity, Sweden becomes fully dependent on American and Chinese AI providers for sensitive data in healthcare, justice, and public administration. Foreign actors can dictate price, terms, and availability.",
    sovereigntyOffCta: "Read the sovereignty analysis",

    assumptionsLabel: "Adjust assumptions",
    assumptionsCollapsed: "Show assumptions",
    sliderAdoptionLabel: "Adoption rate",
    sliderAdoptionExplainer:
      "Share of ~500,000 knowledge workers in public sector using AI tools daily by 2029. Historically, broad IT adoption in Swedish public sector has taken 7–10 years.",
    sliderAdoptionLow:
      "Below 40% — roughly where Swedish municipal e-service adoption was after 10 years.",
    sliderAdoptionHigh:
      "Above 70% — faster than any historical IT adoption in Swedish public sector.",
    sliderAgentLabel: "Agent share",
    sliderAgentExplainer:
      "Share of active AI users running autonomous agents rather than simple copilots. Agents use ~10× more compute per day.",
    sliderAgentLow:
      "Below 15% — mostly simple copilot usage, few autonomous workflows.",
    sliderAgentHigh:
      "Above 35% — agentic workflows dominate, background agents run thousands of tasks daily.",
    sliderHealthcareLabel: "Healthcare AI adoption",
    sliderHealthcareExplainer:
      "How deeply healthcare embraces AI diagnostics: image analysis, clinical decision support, genomics, chronic monitoring.",
    sliderHealthcareLow:
      "Below 35% — AI exists in pilots but not routine diagnostics.",
    sliderHealthcareHigh:
      "Above 70% — most diagnostic workflows have AI support as default.",
    sliderFineTuningLabel: "Organizations fine-tuning",
    sliderFineTuningExplainer:
      "Number of agencies, regions, and municipalities actively fine-tuning AI models on their own data.",
    sliderFineTuningLow:
      "Below 40 — only the largest agencies fine-tune.",
    sliderFineTuningHigh:
      "Above 150 — most municipalities and all regions actively fine-tune.",

    presetLabel: "Presets",
    presetLow: "Low",
    presetBase: "Base",
    presetHigh: "High",
    presetLowConsequence:
      "Defensive minimum. Sweden buys AI as a service — cheaper initially, but fully dependent on foreign providers.",
    presetBaseConsequence:
      "Broad AI usage plus national model capability. Requires targeted state funding — but provides strategic autonomy.",
    presetHighConsequence:
      "Offensive ambition. Extensive sovereign capacity with export potential. High cost, maximum strategic freedom.",

    chartTitle: "Compute need over time",
    chartYAxis: "H100 equivalents",

    energyTitle: "Energy need",
    energyUnit: "MW",
    energyContext:
      "~6 MW = a mid-sized data center. Facebook's Luleå started at ~40 MW.",
    energyLabel: "Facility power",

    costTitle: "Annual cost",
    costUnit: "MSEK",

    euTitle: "In European context",
    euSubtitle:
      "Sweden's compute need compared to Nordic and European AI investments",
    euSweden: "Sweden (base)",
    euSwedenFull: "Sweden (all sectors)",

    narrativeTitle: "Why this matters",
    conclusion1Title: "More than copilots",
    conclusion1Text:
      "Agentic workflows, longer contexts, and background agents significantly increase the need. Tier 1 lands around ~2,200 H100-eq in 2029.",
    conclusion2Title: "Sovereignty is a policy choice",
    conclusion2Text:
      "Sovereign training accounts for ~4,500 H100-eq — half the base scenario. An active policy decision, not a consequence of user growth.",
    conclusion3Title: "Current budgets are insufficient",
    conclusion3Text:
      "Existing IT budget logic supports ~2,000–4,000 H100-eq. The base scenario requires targeted state investments, EU funding, and public-private partnerships.",
    conclusion4Title: "The full economy needs 4–5× more",
    conclusion4Text:
      "Public sector is ~20% of Sweden's total AI compute need. Private sector, research, and defense add up. Energy infrastructure and grid capacity must be planned for the whole picture.",

    whyNowTitle: "Why now?",
    whyNowText:
      "GPU deliveries have 12–18 month lead times. Data centers require grid connections and permits. Every quarter without a decision means a quarter without capacity in 2028–2029.",

    riskTitle: "Risks",
    riskNoFunding: "No new funding",
    riskNoFundingDesc: "Capacity stalls at ~2,000–4,000 H100-eq",
    riskLowAdoption: "Low adoption",
    riskLowAdoptionDesc: "Base scenario may be too high short-term",
    riskFastAgents: "Fast agentic transition",
    riskFastAgentsDesc: "Base scenario may be too low before 2029",
    riskSupply: "Supply constraints",
    riskSupplyDesc: "GPUs and data center capacity hard to secure",
    riskEnergy: "Grid capacity",
    riskEnergyDesc:
      "Data centers require grid connections — lead times of 2–5 years for new connections in Sweden",

    recsTitle: "Three recommendations",
    rec1Title: "Start procurement now",
    rec1Text:
      "Framework agreements, vendor dialogue, site selection, and grid connections must start before demand peaks in 2028–2029.",
    rec2Title: "Build a hybrid model",
    rec2Text:
      "Start with ~1,000–1,500 H100-eq: on-prem for sensitive data, cloud for burst.",
    rec3Title: "Couple compute with competence",
    rec3Text:
      "Compute without governance yields low impact. Bundle with accountability, training, and data policy.",

    sourcesTitle: "Sources & methodology",
    sourcesIntro:
      "The analysis builds on 13 open documents with numbered assumptions (A1–A90), three triangulation tracks, and transparent derivations.",
    sourcesRepo: "Open the full analysis on GitHub",
    sourcesMethodTitle: "Triangulation",
    sourcesMethod:
      "Each key figure is illuminated from at least two tracks: bottom-up, top-down, and big-company triangulation.",

    ctaPrimary: "Contribute via PR on GitHub",
    ctaSecondary: "Read the full analysis",
    ctaExplainer:
      "All assumptions and calculations are open. Help us improve the analysis — especially for sectors with weak data quality.",

    footerText: "Open analysis — all assumptions and calculations are public.",
    footerLicense: "Contribute on GitHub",

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
