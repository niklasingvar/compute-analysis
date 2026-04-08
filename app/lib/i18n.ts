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

    // Advanced / Monte Carlo
    advancedMode: "Avancerat",
    advancedModeCollapse: "Dölj avancerat",
    uncertaintyLabel: "Osäkerhet / spridning",
    uncertaintyExplainer: "Skalar bredden på alla sannolikhetsfördelningar. 100% = standard. 200% = mycket bred osäkerhet.",
    modelAmbitionLabel: "Modellambition",
    modelAmbition_none: "Ingen",
    modelAmbition_70b: "70B",
    modelAmbition_200b: "200B+",
    modelAmbition_400b: "400B+",
    bgAgentsLabel: "Bakgrundsagenter nationellt",
    bgAgentsExplainer: "Autonoma AI-agenter som kör 24/7 utan mänsklig interaktion — batchprocessning, övervakning, analys.",
    overheadLabel: "Overhead-multiplikator",
    overheadExplainer: "Kombinerad faktor för peak-belastning (1,5×), redundans (1,3×), modellstorlek (1,5×), chain-of-thought (1,5×) och batching (1,15×).",
    demandGrowthLabel: "Årlig efterfrågetillväxt",
    demandGrowthExplainer: "Netto-tillväxt i compute-efterfrågan per år, efter effektiviseringsvinster. 20% innebär att behovet fördubblas var ~3,5 år.",
    iterationsLabel: "Monte Carlo-iterationer",
    iterationsExplainer: "Fler iterationer ger stabilare resultat. 500 räcker för översikt, 5 000 för precisa percentiler.",
    budgetRiskTitle: "Budgetrisk 2029",
    budgetRiskText: "sannolikhet att behovet överstiger",
    chartModeSectors: "Sektorer",
    chartModeUncertainty: "Osäkerhet",
    medianLabel: "Median",
    rangeLabel: "p10–p90",
    repoBaseLine: "Repo bas-scenario",
    metodCLine: "IT-budgettak",

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

    // Risks — plain language, multiple perspectives
    riskTitle: "Vad kan gå fel?",
    risk1Title: "Vad händer om pengarna inte kommer?",
    risk1Minister: "Utan riktade satsningar stannar kapaciteten vid ~2 000–4 000 GPU:er — en bråkdel av vad som behövs. Sverige halkar efter länder som investerar nu.",
    risk1Hospital: "Sjukhus som vill använda AI-diagnostik blir beroende av dyra molntjänster — eller får vänta.",
    risk1Citizen: "Handläggningstider förblir långa. AI-verktyg som kunde kortat väntetider i vården och hos myndigheter dröjer.",
    risk2Title: "Vad händer om AI sprids långsammare än väntat?",
    risk2Minister: "Investeringen i compute riskerar att stå outnyttjad. Men det är en mer hanterbar risk — kapacitet kan hyras ut.",
    risk2Hospital: "AI-piloter som fungerar i labbmiljö tar längre tid att nå ordinarie vård.",
    risk2Citizen: "Förändringen märks inte ännu. Men världen runt om fortsätter.",
    risk3Title: "Vad händer om vi inte hinner köpa GPU:er?",
    risk3Minister: "GPU-leveranser har 12–18 månaders ledtid. Varje kvartal utan beställning är ett kvartal utan kapacitet 2028–2029.",
    risk3Hospital: "AI-verktyg finns men kan inte köras lokalt — känsliga patientdata måste skickas utomlands.",
    risk3Citizen: "Sverige har tekniken men inte infrastrukturen. Som att ha elbilarna men inte laddstolparna.",
    risk4Title: "Vad händer om elnätet inte räcker?",
    risk4Minister: "Datacenter kräver nätanslutning. Ledtider för nya anslutningar i Sverige: 2–5 år. Det är längre än GPU-ledtiderna.",
    risk4Hospital: "Regionala datacenter kan inte expandera utan tillräcklig elkapacitet.",
    risk4Citizen: "AI-infrastruktur konkurrerar om samma elnät som bostäder och industri. Planering måste ske nu.",

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

    advancedMode: "Advanced",
    advancedModeCollapse: "Hide advanced",
    uncertaintyLabel: "Uncertainty / spread",
    uncertaintyExplainer: "Scales the width of all probability distributions. 100% = standard. 200% = very wide uncertainty.",
    modelAmbitionLabel: "Model ambition",
    modelAmbition_none: "None",
    modelAmbition_70b: "70B",
    modelAmbition_200b: "200B+",
    modelAmbition_400b: "400B+",
    bgAgentsLabel: "Background agents nationally",
    bgAgentsExplainer: "Autonomous AI agents running 24/7 without human interaction — batch processing, monitoring, analysis.",
    overheadLabel: "Overhead multiplier",
    overheadExplainer: "Combined factor for peak load (1.5×), redundancy (1.3×), model size (1.5×), chain-of-thought (1.5×), and batching (1.15×).",
    demandGrowthLabel: "Annual demand growth",
    demandGrowthExplainer: "Net growth in compute demand per year, after efficiency gains. 20% means demand doubles every ~3.5 years.",
    iterationsLabel: "Monte Carlo iterations",
    iterationsExplainer: "More iterations give more stable results. 500 is fine for overview, 5,000 for precise percentiles.",
    budgetRiskTitle: "Budget risk 2029",
    budgetRiskText: "probability demand exceeds",
    chartModeSectors: "Sectors",
    chartModeUncertainty: "Uncertainty",
    medianLabel: "Median",
    rangeLabel: "p10–p90",
    repoBaseLine: "Repo base scenario",
    metodCLine: "IT budget ceiling",

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

    riskTitle: "What could go wrong?",
    risk1Title: "What if the money doesn't come?",
    risk1Minister: "Without targeted investment, capacity stalls at ~2,000–4,000 GPUs — a fraction of what's needed. Sweden falls behind countries investing now.",
    risk1Hospital: "Hospitals wanting AI diagnostics become dependent on expensive cloud services — or wait.",
    risk1Citizen: "Processing times stay long. AI tools that could shorten waits in healthcare and government are delayed.",
    risk2Title: "What if AI spreads slower than expected?",
    risk2Minister: "The compute investment risks standing unused. But it's a more manageable risk — capacity can be leased out.",
    risk2Hospital: "AI pilots that work in labs take longer to reach routine care.",
    risk2Citizen: "The change isn't felt yet. But the world around us keeps moving.",
    risk3Title: "What if we can't buy GPUs in time?",
    risk3Minister: "GPU deliveries have 12–18 month lead times. Every quarter without an order means a quarter without capacity in 2028–2029.",
    risk3Hospital: "AI tools exist but can't run locally — sensitive patient data must be sent abroad.",
    risk3Citizen: "Sweden has the technology but not the infrastructure. Like having electric cars but no charging stations.",
    risk4Title: "What if the power grid isn't enough?",
    risk4Minister: "Data centers need grid connections. Lead times for new connections in Sweden: 2–5 years. That's longer than GPU lead times.",
    risk4Hospital: "Regional data centers can't expand without sufficient power capacity.",
    risk4Citizen: "AI infrastructure competes for the same grid as homes and industry. Planning must happen now.",

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
