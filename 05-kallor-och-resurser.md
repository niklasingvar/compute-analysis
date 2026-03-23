# 05 – Källor och resurser

Detta dokument är ett **riskbaserat källregister**. Målet är inte att lista allt som nämns i projektet, utan att tydligt visa vilka källor som bär de centrala slutsatserna och vilka påståenden de faktiskt stödjer.

## Evidensnivåer

- **Primär**: offentlig myndighet, officiell projektsida, bolagsdokumentation eller direkt rättskälla
- **Semiprimar**: officiell projektrapport, benchmarkaktör eller forskningskälla med tydlig metod
- **Sekundär**: kvalitetsmedia eller analysaktör som används för marknads- och supply-chain-kontekst

---

## 1. Kärnkällor för huvudtesen

| Påstående | Källa | Evidensnivå | URL | Användning i repo |
|-----------|-------|-------------|-----|-------------------|
| Offentlig AI-användning accelererar snabbt internationellt | Public Sector AI Adoption Index 2026 | Semiprimar | https://indexaiglobalpublicservices.publicfirst.co/ | Stöd för A59 och A73; visar snabb AI-uptake bland offentligt anställda |
| Arbetslivet går från copilots mot agentiska arbetsflöden | Microsoft 2025 Annual Work Trend Index | Primär | https://news.microsoft.com/annual-work-trend-index-2025/ | Stöd för A51–A52; visar framväxten av human-agent teams och agentboss-rollen |
| Agentisk användning kan driva höga tokenvolymer och TPM-behov | Anthropic Claude Code Docs – Manage costs effectively | Primär | https://docs.anthropic.com/en/docs/claude-code/costs | Stöd för A55 och A60; visar kostnadsnivåer, TPM-intervall och teamanvändning |
| Anthropic har nått mycket hög run-rate driven av bl.a. Claude Code | Bloomberg, 3 mars 2026 | Sekundär | https://www.bloomberg.com/news/articles/2026-03-03/anthropic-nears-20-billion-revenue-run-rate-amid-pentagon-feud | Stöd för A52 och A59; visar att agentisk användning redan är ekonomiskt stor |
| Compute-marknaden begränsas av logik, minne och kraft | Dwarkesh Patel × Dylan Patel, 13 mars 2026 | Sekundär | https://www.dwarkesh.com/p/dylan-patel | Stöd för A66–A71 och resonemanget i 11/12 om supply-side-begränsningar |

---

## 2. Svensk offentlig sektor och svensk AI-infrastruktur

| Källa | Evidensnivå | URL | Vad den används till |
|------|-------------|-----|----------------------|
| SCB – arbetsmarknadsstatistik | Primär | https://www.scb.se/hitta-statistik/statistik-efter-amne/arbetsmarknad/ | Bas för A1–A4: antal offentliganställda och storleksordning för adresserbar population |
| Statskontoret – myndighetsstruktur | Primär | https://www.statskontoret.se/ | Bas för A5 och strukturantaganden om myndigheter |
| ESV – statliga IT-kostnader | Primär | https://www.esv.se/ | Bas för A8–A12 om IT-budget och budgetandelar |
| SKR / Kolada | Primär | https://www.kolada.se/ | Volymankare för regioner, kommuner och verksamhetsdata i Tier 2 |
| AI-kommissionens Färdplan för Sverige (SOU 2025:12) | Primär | https://www.regeringen.se/rattsliga-dokument/statens-offentliga-utredningar/2025/02/sou-202512/ | Svensk policyankare för behov av beräkningskraft, samordning och nationell riktning |
| GPT-SW3 – AI Sweden | Primär | https://www.ai.se/en/project/gpt-sw3 | Empirisk svensk referens för nationell modellförmåga och suverän träning |

---

## 3. Internationella offentliga compute-program

| Källa | Evidensnivå | URL | Vad den används till |
|------|-------------|-----|----------------------|
| EuroHPC – AI Factories | Primär | https://eurohpc-ju.europa.eu/ai-factories_en | Bas för topp-ned-spåret och EU-jämförelser i 03 och 04 |
| UK AI Opportunities Action Plan: government response | Primär | https://gov.uk/government/publications/ai-opportunities-action-plan-government-response/ai-opportunities-action-plan-government-response | Stöd för UK-skalning; regeringen anger minst 20x ökning av sovereign compute till 2030 |
| University of Bristol – Isambard-AI launches July 2025 | Primär | https://www.bristol.ac.uk/research/centres/bristol-supercomputing/articles/2025/isambard-ai-launches-july-2025.html | Konkret UK-referens för offentlig AI-compute i drift |
| Danish Centre for AI Innovation – Gefion | Primär | https://dcai.dk/gefion | Direkt nordisk jämförelse; visar dansk AI-infrastruktur och suveränitets-/compliance-argument |
| LUMI Supercomputer | Primär | https://www.lumi-supercomputer.eu/ | Finsk jämförelsepunkt i 04 |

---

## 4. Supply-side och marknadsstruktur

| Källa | Evidensnivå | URL | Vad den används till |
|------|-------------|-----|----------------------|
| SemiAnalysis – Accelerator Industry Model | Sekundär | https://newsletter.semianalysis.com/p/accelerator-model | Stöd för resonemang om acceleratorinstallbas, HBM och kundallokering |
| SemiAnalysis – Wafer Fab Model | Sekundär | https://newsletter.semianalysis.com/p/wafer-fab-model | Stöd för resonemang om EUV, ledande noder och waferkapacitet |
| Dwarkesh Patel × Dylan Patel | Sekundär | https://www.dwarkesh.com/p/dylan-patel | Tillgänglig, offentlig sammanfattning av SemiAnalysis teser om logik, minne och kraft som flaskhalsar |
| Epoch AI – training compute growth | Semiprimar | https://epoch.ai/blog/training-compute-of-frontier-ai-models-grows-by-4-5x-per-year | Stöd för A47–A50 om compute-tillväxt och Jevons-liknande efterfrågedynamik |
| Artificial Analysis | Semiprimar | https://artificialanalysis.ai/ | Stöd för A20 och throughput-ankare i inference-delen |

---

## 5. Juridik, suveränitet och policy

För strategidokumentet [08-suveranitet.md](08-suveranitet.md) används det nyckelstyrda registret i [resources/links.md](resources/links.md). Följande poster är särskilt centrala:

| Tema | Källa | Evidensnivå | URL |
|------|-------|-------------|-----|
| Svensk policy och samordning | AI-kommissionens Färdplan för Sverige | Primär | https://www.regeringen.se/rattsliga-dokument/statens-offentliga-utredningar/2025/02/sou-202512/ |
| Teknisk suveränitet i EU | Europaparlamentets betänkande | Primär | https://www.europarl.europa.eu/doceo/document/A-10-2025-0107_SV.html |
| CLOUD Act och GDPR-spänning | IMY om EDPB/EDPS gemensamma svar | Primär | https://www.imy.se/om-oss/arkiv/nyhetsarkiv/edpb-och-edps-analyserar-utlamnanden-under-us-cloud-act/ |
| Utkontraktering och molnrisk | eSam ES2023-06 | Primär | https://www.esamverka.se/publikationer/juridik/2025-04-15-es2023-06-vagledning-utkontraktering---sekretess-och-dataskydd.html |
| EU:s AI-policy och AI Act-kontext | European Commission – Artificial Intelligence | Primär | https://digital-strategy.ec.europa.eu/en/policies/artificial-intelligence |
| EU:s konkurrenskraft och investeringsgap | Draghi-rapporten | Primär | https://commission.europa.eu/topics/strengthening-european-competitiveness/eu-competitiveness-looking-ahead_en |

---

## 6. Källor som används med försiktighet

- **SemiAnalysis** används för supply-chain- och marknadslogik, inte som ensam grund för huvudscenariot. Därför kombineras det med offentliga policykällor, officiella projektsidor och interna härledningar.
- **Bloomberg** används för marknadsuppgifter som Anthropics run-rate. Dessa uppgifter får stödja riktningen i resonemanget men ska inte ensamma bära en central 2029-siffra.
- **Microsoft Work Trend Index** används som riktning för agentiska arbetsmönster, inte som direkt offentlig-sektor-data för Sverige.

---

## 7. Praktisk läsanvisning

- **För den kvantitativa modellen**: börja i [02-antaganden-och-data.md](02-antaganden-och-data.md), använd sedan detta dokument för att kontrollera källtyp och URL.
- **För den strategiska argumentationen**: använd [resources/links.md](resources/links.md) tillsammans med [08-suveranitet.md](08-suveranitet.md).
- **För stresstestet**: marknads- och supply-side-källor här används tillsammans med [12-upprevidering-utmaning.md](12-upprevidering-utmaning.md), men det dokumentet är inte huvudmodell.
