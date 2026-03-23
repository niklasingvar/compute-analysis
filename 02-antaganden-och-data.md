# 02 – Antaganden och data

Alla antaganden är numrerade (A1–A89) och klassificerade efter känslighet. Varje central siffra i [03-berakningsmodell.md](03-berakningsmodell.md), [12-upprevidering-utmaning.md](12-upprevidering-utmaning.md) och [13-sjukvard-compute-per-vardkedja.md](13-sjukvard-compute-per-vardkedja.md) ska vara spårbar till ett antagande här.

Känslighetsklasser:

- L (låg): välförankrad data, låg osäkerhet
- M (medel): rimlig uppskattning, viss osäkerhet
- H (hög): stor osäkerhet, stor påverkan på slutresultat

Antaganden under Tier 4 – suverän träning (A33–A39) och flera poster med känslighet H speglar politiska ambitionsval — hur mycket nationell modellkapacitet, adoption och finansiering som förutsätts. Strategisk motivering: [08-strategi.md](08-strategi.md).

---

## A. Offentlig sektors storlek och struktur

| #   | Antagande                                                        | Värde                  | Källa                                           | Känslighet |
| --- | ---------------------------------------------------------------- | ---------------------- | ----------------------------------------------- | ---------- |
| A1  | Totalt antal anställda i offentlig sektor (exkl. försvar)        | ~1 150 000 – 1 250 000 | SCB 2024                                        | L          |
| A2  | Varav statliga myndigheter                                       | ~270 000               | ESV/Statskontoret                               | L          |
| A3  | Varav kommuner och regioner                                      | ~900 000               | SKR                                             | L          |
| A4  | Andel "kunskapsarbetare" (tjänstemän, handläggare, specialister) | ~40-50% (~500 000)     | Uppskattning baserat på SCB yrkesklassificering | M          |
| A5  | Antal myndigheter med >100 anställda                             | ~150                   | Statskontoret                                   | L          |
| A6  | Antal kommuner                                                   | 290                    | SKR                                             | L          |
| A7  | Antal regioner                                                   | 21                     | SKR                                             | L          |
| A89 | Uppskattat nuläge AI-compute offentlig sektor (2025)             | ~50–200 H100-eq        | Proxybaserat: NAISS-allokering, molnutgifter (ESV), kända piloter (AI Sweden Vårdkarta) | H          |

## B. IT-kostnader och budget

| #   | Antagande                         | Värde             | Källa                      | Känslighet |
| --- | --------------------------------- | ----------------- | -------------------------- | ---------- |
| A8  | Total IT-kostnad offentlig sektor | ~25-30 mdr SEK/år | ESV, SKR                   | M          |
| A9  | Statliga myndigheters IT-kostnad  | ~12-15 mdr SEK/år | ESV                        | M          |
| A10 | AI som andel av IT-budget (2026)  | ~1-3%             | Gartner, egen uppskattning | H          |
| A11 | AI som andel av IT-budget (2029)  | ~5-12%            | Gartner prognos            | H          |
| A12 | AI som andel av IT-budget (2031)  | ~8-18%            | Extrapolering              | H          |

## C. Tier 1 – Kunskapsarbetare (copilots, LLM-inference)

| #   | Antagande                                        | Värde                                                            | Källa                                            | Känslighet |
| --- | ------------------------------------------------ | ---------------------------------------------------------------- | ------------------------------------------------ | ---------- |
| A13 | Adresserbar population för AI-copilots           | ~450 000 – 550 000                                               | A4, justerat för arbetsuppgifter                 | M          |
| A14 | Adoptionsgrad 2026                               | 5-10%                                                            | Konservativ: LOU-upphandling, pilotprojekt       | M          |
| A15 | Adoptionsgrad 2028                               | 20-35%                                                           | S-kurva, ramavtal på plats                       | M          |
| A16 | Adoptionsgrad 2029                               | 35-55%                                                           | Inflektionspunkt                                 | H          |
| A17 | Adoptionsgrad 2031                               | 55-80%                                                           | Mognad, men inte 100%                            | H          |

### Adoptionsbana — från nuläge till 2029

Antagandena A14–A17 och A59 definierar en S-kurva från ~5–10% (2026) till 55–70% (2029, A59 inkl. agentisk mix). Det är en aggressiv bana. Tillgängliga svenska datapunkter:

- **AI Sweden Vårdkarta 2025:** 197 AI-initiativ i svensk sjukvård, varav 13% fullt implementerade i klinisk drift.
- **Digibarometern 2025:** ~5–10% av kommuner har AI i ordinarie verksamhet (utanför pilotfas).
- **OECD AI Policy Observatory 2025:** Sverige rankas i mellanskiktet bland OECD-länder för offentlig AI-adoption.

Historiska svenska paralleller för IT-adoption i offentlig sektor:

| Teknikskifte | Period | Tid till bred adoption | Kommentar |
| ------------ | ------ | ---------------------- | --------- |
| E-post i kommuner | ~1995–2005 | ~10 år | Gradvis, ingen central pådrivning |
| E-tjänster (1177, Mina sidor) | ~2005–2015 | ~10 år | Krävde standardisering och infrastruktur |
| Office 365 / Teams | ~2016–2023 | ~7 år | Snabbast — pandemidriven acceleration |
| 1177 Vårdguiden digital | ~2013–2020 | ~7 år | Regionalt drivande, nationell utrullning |

55–70% adoption av AI-verktyg (A59) på fyra år (2026–2029) är snabbare än samtliga historiska svenska IT-adoptionscykler i offentlig sektor, med undantag för den pandemidriven Teams-utrullningen. Banan förutsätter:

1. Nationella ramavtal för AI-tjänster på plats senast 2027
2. Politisk prioritering och tydligt ledningsmandat
3. Kompetensprogram för tiotusentals anställda
4. Lösning av LOU- och informationssäkerhetshinder (eller pragmatisk tillämpning)

Om dessa förutsättningar inte uppfylls fullt ut är den nedre delen av intervallet (A16: 35–55%) mer historiskt förankrad. A59:s 55–70% representerar en optimistisk men möjlig bana givet att AI-adoption har starkare pull-effekt (direkt produktivitetsvinst för enskild användare) än tidigare teknikskiften.

| A18 | Interaktioner per användare per dag              | 10-20                                                            | Microsoft Copilot-data, Anthropic usage patterns | M          |
| A19 | Tokens per interaktion (in + ut)                 | ~1 500 – 3 000 tokens                                            | Typisk fråga+svar med kontext                    | M          |
| A20 | Inference-throughput per H100                    | ~2 000 – 4 000 tokens/s (beroende på modellstorlek och batching) | Artificial Analysis, NVIDIA benchmarks           | M          |
| A21 | Genomsnittlig GPU-belastning per aktiv användare | ~0,001 – 0,003 H100-eq (sustained average, 8h arbetsdag)         | Härlett: A18 × A19 / A20 / 28800s                | M          |

### Härledning A21

En användare med 15 interaktioner/dag × 2 000 tokens × ~0,5s GPU-tid per 2000 tokens = ~7,5 GPU-sekunder/dag.
Under en 8h arbetsdag (28 800s): 7,5 / 28 800 ≈ 0,0003 sustained H100-eq.
Men med peaks, batching-overhead och redundans: ~0,001 – 0,003 H100-eq i provisionerad kapacitet.

## D. Tier 2 – Specialiserad inference

| #   | Antagande                                          | Värde                                                      | Källa                                           | Känslighet |
| --- | -------------------------------------------------- | ---------------------------------------------------------- | ----------------------------------------------- | ---------- |
| A22 | Medicinsk bildanalys – antal undersökningar/år     | ~8-10 miljoner radiologiska undersökningar                 | Socialstyrelsen, regiondata                     | M          |
| A23 | GPU-tid per bildanalys                             | ~5-30 sekunder H100-eq                                     | Beroende på modalitet (röntgen vs MR)           | M          |
| A24 | Komplexa resonemangsuppgifter (juridik, utredning) | ~100 000 – 500 000 ärenden/år                              | Uppskattning: FK, Migrationsverket, domstolar   | H          |
| A25 | GPU-tid per komplext resonemang                    | ~10-60 sekunder H100-eq (chain-of-thought, längre kontext) | Uppskattning baserat på o1/o3-liknande modeller | H          |
| A26 | Geospatial analys (Lantmäteriet, MSB)              | ~50-200 H100-eq dedikerad kapacitet                        | Uppskattning                                    | H          |
| A27 | Bedrägeridetektering (Skatteverket, FK)            | ~20-100 H100-eq dedikerad kapacitet                        | Uppskattning baserat på transaktionsvolymer     | H          |

## D2. Tier 2 – Sjukvårdens specialiserade inference

Sjukvårdens AI-compute delas i Tier 1 (copilot/agent: transkription, dokumentation, kommunikation — ingår redan i A13/A51–A60) och Tier 2 (specialiserad inference: bilddiagnostik, patologi, kliniskt beslutsstöd, kronisk övervakning, genomik). Följande antaganden avser enbart den Tier 2-unika delen. Fullständig härledning: [13-sjukvard-compute-per-vardkedja.md](13-sjukvard-compute-per-vardkedja.md).

| #   | Antagande                                             | Värde                       | Källa                                                       | Känslighet |
| --- | ----------------------------------------------------- | --------------------------- | ----------------------------------------------------------- | ---------- |
| A81 | Radiologiska undersökningar per år (alla modaliteter) | ~8–10 miljoner              | SSM rapport 2025:07, Socialstyrelsen                        | M          |
| A82 | GPU-sekunder per radiologisk AI-analys (Tier 2-del)   | ~27–65 (thorax), 54–137 (fraktur) | NVIDIA NIM VISTA-3D benchmarks; Geo-MIL (Nature 2025)  | M          |
| A83 | Cancerdiagnostik: utredningar per år                  | ~200 000–300 000            | Socialstyrelsen Cancerregistret 2024 (~60 000 bekräftade)   | M          |
| A84 | GPU-sekunder per cancerutredning (Tier 2-del)         | ~140–560                    | WSI gigapixelanalys, genomik, MDK-förberedelse              | H          |
| A85 | Diabetes typ 2: patienter under aktiv vård            | ~450 000–550 000            | NDR; prevalens ~7,5% (2021, ökande)                         | L          |
| A86 | Kronisk övervakning GPU-sek per patient/år            | ~70–330                     | CGM-dataanalys + proaktiv flaggning                         | H          |
| A87 | AI-adoption sjukvård 2029 (specialiserad inference)   | ~40–70%                     | AI Sweden Vårdkartan 2025: 13% fullt implementerat (bas); accelererande | H |
| A88 | Tier 2 sjukvård totalt (2029 bas, med peak + redundans) | ~450–600 H100-eq          | Härlett från A81–A87, extrapolerat från 5 vårdkedjor        | H          |

## E. Tier 3 – Finjustering och anpassning

| #   | Antagande                                          | Värde                                       | Källa                                                | Känslighet |
| --- | -------------------------------------------------- | ------------------------------------------- | ---------------------------------------------------- | ---------- |
| A28 | Antal organisationer som finjusterar egna modeller | 20-50 (2026) → 100-200 (2031)               | Uppskattning: stora myndigheter och regioner         | H          |
| A29 | GPU-timmar per finjusterings-jobb (7B-70B modell)  | 50-500 H100-timmar per jobb                 | Beroende på modellstorlek och datamängd              | M          |
| A30 | Antal finjusterings-jobb per organisation per år   | 2-12                                        | Uppskattning: kvartalsvis till månadsvis uppdatering | H          |
| A31 | RAG-systemträning och embedding-generering         | ~10-50 H100-timmar per stor dokumentsamling | Uppskattning                                         | M          |
| A32 | Total Tier 3-kapacitet (burst, ej sustained)       | 100-300 H100-eq (2029 bas)                  | Härlett från A28-A31                                 | H          |

## F. Tier 4 – Suverän träning

| #   | Antagande                                            | Värde                                    | Källa                                               | Känslighet |
| --- | ---------------------------------------------------- | ---------------------------------------- | --------------------------------------------------- | ---------- |
| A33 | Behov av svensk grundmodell (successor till GPT-SW3) | Ja, 70B-200B parameter                   | AI Sweden, AI-kommissionen                          | M          |
| A34 | Träningsdata: svensk text + domändata                | ~500 mdr – 2 biljoner tokens             | Uppskattning baserat på Llama 3 (15T tokens) skalat | H          |
| A35 | H100-timmar för 70B-modell                           | ~500 000 – 2 000 000                     | Meta Llama 2 70B: 1,7M A100-h ≈ 850K H100-h         | M          |
| A36 | H100-timmar för 200B-modell                          | ~2 000 000 – 10 000 000                  | Skalningslagar: ~kubisk med parametrar              | H          |
| A37 | Frekvens: stora träningskörningar                    | 1-2 per år                               | Följer frontier-labs cykler                         | M          |
| A38 | Dedikerad träningskapacitet (sustained)              | 500-4 000 H100-eq under träningsperioder | A35-A37, konverterat till sustained årskapacitet    | H          |
| A39 | Modeller för känsliga data (hälso-/rättsdata)        | Ytterligare 200-1 000 H100-eq burst      | Uppskattning: domänspecifika modeller               | H          |

## G. Hårdvara och kostnader

| #   | Antagande                                             | Värde                                                | Källa                          | Känslighet |
| --- | ----------------------------------------------------- | ---------------------------------------------------- | ------------------------------ | ---------- |
| A40 | H100 SXM pris (inköp)                                 | ~$25 000 – $35 000 per GPU (2025)                    | NVIDIA listpris, volymrabatter | M          |
| A41 | Totalt systempris per H100 (server, nätverk, rack)    | ~$50 000 – $80 000 per GPU                           | DGX-system / OEM-priser        | M          |
| A42 | Molnkostnad per H100-timme                            | ~$2-4/h (reserverade instanser)                      | AWS/Azure/GCP prissättning     | M          |
| A43 | Effekt per H100 (TDP)                                 | 700W                                                 | NVIDIA specifikation           | L          |
| A44 | Total faciliteteffekt per GPU (PUE ~1.2-1.3 i Norden) | ~900-1 000W per GPU inkl. kylning, nätverk, storage  | Nordiskt PUE-antagande         | L          |
| A45 | Elpris (Norden)                                       | ~0,50-1,00 SEK/kWh                                   | Nordpool, beroende på elområde | M          |
| A46 | Nästa generations GPU:er (B200, post-Blackwell)       | 2-3x prestanda/watt vs H100, tillgängliga ~2026-2027 | NVIDIA roadmap                 | M          |

## H. Effektivitetsförbättringar

| #   | Antagande                                                                                                                                                                                                                                                                                                                       | Värde                                                                                   | Källa                                    | Känslighet |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | ---------------------------------------- | ---------- |
| A47 | Algoritmisk effektivisering (inference)                                                                                                                                                                                                                                                                                         | ~2x per 18-24 månader                                                                   | Epoch AI, historisk trend                | M          |
| A48 | Hårdvarueffektivisering (nya GPU-generationer)                                                                                                                                                                                                                                                                                  | ~2-3x per generation (2 år)                                                             | NVIDIA roadmap: H100→B200→post-Blackwell | M          |
| A49 | Kvantisering och optimering                                                                                                                                                                                                                                                                                                     | Ytterligare ~1,5-2x genom INT8/FP8-inference                                            | Forskning, NVIDIA TensorRT               | L          |
| A50 | Netto-effekt: behov i H100-eq reduceras med ~30-50% per 2 år i _fysiska_ GPU:er, men modellerna blir större och mer kapabla → nettoefterfrågan ökar ändå. Öppna resonemangsmodeller (chain-of-thought) förstärker trenden: 5–50x fler tokens per fråga jämfört med standardinference, vilket motverkar effektiviseringsvinster. | Komplext samspel – modellerad som ~20% årlig ökning i efterfrågan trots effektivisering | Egen syntes                              | H          |

### Differentierad nettoeffekt per användningsprofil (A50)

Nettoeffekten av effektivisering vs. modell/kapabilitetstillväxt varierar kraftigt beroende på användningsfall:

| Användningsprofil | Typisk modellstorlek | Påverkas av frontier-tillväxt? | Nettoeffekt av effektivisering |
| ----------------- | -------------------- | ------------------------------ | ------------------------------ |
| Kommun: ärendesammanfattning, enkel dokumentation | 70B tillräcklig | Nej — uppgiften kräver inte större modell | **Kostnadsbesparing ~30–50% per 2 år** |
| Myndighet: komplex juridisk analys, utredning | 200B+ önskad | Delvis — bättre resonemang motiverar uppgradering | Balans: ~0–20% ökning |
| Agentiska arbetsflöden (autonoma processer, kodgenerering) | 200B+ | Ja — fler tokens per uppgift, längre kontexter | Kraftig ökning |
| Suverän träning av grundmodell | Frontier-skala | Ja — själva målpunkten ökar | Kraftig ökning |

För de vanligaste offentliga användningsfallen — sammanfattning, översättning, enkel dokumentation, standardiserade svar — innebär effektivisering att en 70B-modell som är tillräcklig idag förblir tillräcklig och blir billigare över tid. Det är främst i agentiska arbetsflöden och suverän träning som "modeller blir större"-argumentet har full kraft.

Analysens 20% årliga ökning i nettoefterfrågan (efter effektivisering) gäller den viktade blandningen av alla användningsfall. För kommuner och enklare myndighetsanvändning kan nettoeffekten vara negativ (efterfrågan per uppgift minskar). För frontier-användning och agentisk drift är den klart positiv.

---

## I. Tier 1 – Agentisk AI-mix

A18–A19 ovan (copilot-mönster: 30K tok/dag) gäller enbart den del av användarpopulationen som förblir i copilot-läge. Följande antaganden modellerar en segmenterad verklighet där agentisk AI (Claude Code, Cursor, autonoma arbetsflöden) driver kraftigt ökad token-konsumtion.

| #   | Antagande                                             | Värde                               | Källa                                                                                                                                                             | Känslighet |
| --- | ----------------------------------------------------- | ----------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| A51 | Andel copilot-användare (av aktiva, 2029)             | ~50–65%                             | Microsoft Copilot-data Q4 2025: merparten använder chatbot-liknande interaktion                                                                                   | M          |
| A52 | Andel agent-användare (av aktiva, 2029)               | ~20–30%                             | Anthropic Claude Code-adoption: ~$2,5 mdr ARR Q1 2026 visar snabb men fortfarande minoritetsadoption; agentiska arbetsflöden kräver hög digital mognad            | H          |
| A53 | Andel passiva/sporadiska (av aktiva, 2029)            | ~10–20%                             | Historisk IT-adoption: ~15% av licensierade användare nyttjar verktyg sällan                                                                                      | L          |
| A54 | Tokens/dag copilot-användare                          | ~30 000                             | A18 × A19, oförändrat: 15 int × 2 000 tok                                                                                                                         | M          |
| A55 | Tokens/dag agent-användare                            | ~300 000–500 000                    | Claude Code-sessioner kan använda 100K–500K+ tokens; resonemangsmodeller och iterativa arbetsflöden driver upp dagsvolymen för power-users                        | H          |
| A56 | Tokens/dag passiv användare                           | ~5 000                              | Sporadisk: 3–5 korta frågor/dag                                                                                                                                   | L          |
| A57 | Vägt genomsnitt tokens/dag per aktiv användare (2029) | ~80 000–170 000                     | Härlett från A51–A56; mittpunkt ~120K om 25% agentanvändare ligger kring ~400K tok/dag                                                                            | H          |
| A58 | Tier 1 sustained (2029)                               | ~1 200–3 500 H100-eq                | Härlett från A57, A59 och A60; mittpunkt ~2 000 H100-eq vid ~330K aktiva användare och ~120K tok/dag                                                             | H          |
| A59 | Adoptionsgrad 2029                                    | 55–70%                              | Offentlig AI-användning accelererar, men svensk offentlig sektor bromsas fortfarande av LOU, säkerhet och styrning                                               | H          |
| A60 | Bakgrundsagenter per större organisation (2029)       | 20–50 agent-slots                   | Gäller främst större myndigheter, regioner och större kommuner; motsvarar grovt ~2 000–5 000 nationella slots                                                    | H          |

### Härledning A58

Segmenterad beräkning (2029 basscenario):

| Segment          | Andel | Användare    | Tok/dag | Total tok/dag |
| ---------------- | ----- | ------------ | ------- | ------------- |
| Copilot          | 55%   | 181 500      | 30 000  | 5,4 mdr       |
| Agent            | 25%   | 82 500       | 400 000 | 33,0 mdr      |
| Passiv           | 20%   | 66 000       | 5 000   | 0,3 mdr       |
| Bakgrundsagenter | —     | ~3 000 slots | 100 000 | 0,3 mdr       |
| Total            |       | 330 000      |         | 39,0 mdr      |

39,0 mdr tokens/dag ÷ 3 000 tok/s = 13,0M GPU-s/dag.
Under 8h arbetsdag: 13,0M ÷ 28 800 = ~450 sustained H100.

#### Overhead-dekomposition (sustained 450 → provisionerad ~2 200)

| Faktor | Multiplikator | Motivering | Källa | Känsl. |
| ------ | ------------- | ---------- | ----- | ------ |
| Peak-variation (kontorstid) | ×1,5 | ~80% av dygnsbelastningen faller på ~30% av tiden (förmiddag + tidig eftermiddag) | Typiskt SaaS-belastningsmönster; Microsoft 365 usage telemetry | M |
| Redundans / failover | ×1,3 | N+1 redundans, underhållsfönster, uppgraderingscykler | Branschstandard för production inference (AWS/Azure SLA-nivå) | L |
| Modellstorlek 2029 | ×1,5 | MoE 200B+-arkitekturer kräver mer VRAM och compute per token än 70B-referens | NVIDIA benchmarks: Mixtral 8×22B ~1,4–1,6x dyrare per token än Llama 70B | M |
| Chain-of-thought reasoning | ×1,5 | Resonerangsmodeller genererar 5–50x fler interna tokens per fråga; viktat till ~1,5x på blandad arbetsbelastning (majoriteten är fortfarande copilot) | Epoch AI, OpenAI o-series benchmarks, Anthropic extended thinking-data | H |
| Batching-ineffektivitet | ×1,15 | Längre sekvenser och heterogena förfrågningar reducerar batching-effektivitet | vLLM och TensorRT-LLM benchmarks vid blandade kontextlängder | L |
| **Kombinerat** | **×4,9** | 1,5 × 1,3 × 1,5 × 1,5 × 1,15 ≈ 4,9 | | |

450 × 4,9 ≈ **~2 200 H100-eq**.

#### Sensitivitet: alternativa overhead-nivåer

| Scenario | Kombinerad faktor | Tier 1 resultat | Skillnad |
| -------- | ----------------- | --------------- | -------- |
| Bas (ovan) | ×4,9 | ~2 200 H100-eq | referens |
| Lägre reasoning-overhead (×1,2 istf ×1,5) | ×3,4 | ~1 530 H100-eq | −670 |
| Lägre modellstorlek + reasoning (×1,2 + ×1,2) | ×2,7 | ~1 215 H100-eq | −985 |
| Konservativt (alla overheads nedreviderade) | ×2,5 | ~1 125 H100-eq | −1 075 |

Den största enskilda osäkerheten är chain-of-thought-factorn (×1,5). Den antar att ~25% agentanvändare (A52) driver resonerangsmodeller med 5–50x fler tokens. Om agentandelen sjunker (se källkritik nedan) sjunker också denna faktor.

Spann: ~1 200–3 500 H100-eq beroende på agentandel, tokens per agentanvändare, antal bakgrundsagenter och overhead-nivå.

### Källkritik: Agentisk adoption (A52, A55)

A52 (andel agentanvändare: 20–30%) och A55 (tokens/dag agent: 300K–500K) baseras på Anthropic Claude Code-data och Microsofts Work Trend Index. Båda källorna har kommersiellt intresse av att agentisk AI uppfattas som snabbväxande. Oberoende kontrollpunkter:

- **McKinsey State of AI 2025:** ~20% av företag rapporterar _någon form_ av agentisk AI — men det avser organisationer, inte andel individuella användare.
- **Historisk Office-adoption:** Avancerade funktioner (makron, Power Automate) används av <10% av licensierade användare även 5+ år efter lansering.
- **Svensk myndighetsdata:** Ingen svensk myndighetsstudie mäter agentisk AI-användning specifikt. Digibarometern 2025 fångar enbart "AI i verksamheten", inte användningsmönster.

Ingen oberoende källa bekräftar att 25% av offentliganställda kunskapsarbetare kommer att använda agentiska arbetsflöden med 300K–500K tokens/dag 2029. Antagandet är rimligt som en ambitionsnivå men vilar på leverantörsdata.

#### Sensitivitet: agentandel (A52) → Tier 1

| Agentandel (A52) | Aktiva agenter | Tier 1 bas 2029 | Förändring |
| ----------------- | -------------- | --------------- | ---------- |
| 25% (bas) | 82 500 | ~2 200 H100-eq | referens |
| 15% | 49 500 | ~1 500 H100-eq | −700 |
| 10% | 33 000 | ~1 200 H100-eq | −1 000 |
| 5% | 16 500 | ~900 H100-eq | −1 300 |

Om agentandelen hamnar på 10–15% (mer i linje med historisk adoption av avancerade IT-funktioner) sjunker Tier 1 med 700–1 000 H100-eq.

---

## J. Tier 4 – Suverän träning

| #   | Antagande                                        | Värde                      | Källa                                                                                                                                    | Känslighet |
| --- | ------------------------------------------------ | -------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| A61 | Modellstorlek för svensk grundmodell             | 200B+ parameter            | 70B är svag som långsiktig målbild 2029; frontier ligger på 200B–1T MoE                                                                    | H          |
| A62 | H100-timmar för 200B-modellträning               | ~3 000 000–8 000 000       | A36 (medel–hög); Meta Llama 3 405B: 30M+ GPU-h vid A100 ≈ 15M H100-h; 200B skalat                                                        | H          |
| A63 | RL-tuning (reinforcement learning) per modell    | ~200 000–1 000 000 H100-h  | Ny post: RLHF/RLAIF kräver separat compute-budget; Anthropic/OpenAI spenderar ~20–30% av träningsbudget på RL                            | H          |
| A64 | Kontinuerlig RL för domänmodeller                | ~100 000–500 000 H100-h/år | Löpande RL-förbättring av modeller i drift (hälsa, juridik) med mänsklig feedback                                                        | H          |
| A65 | Tier 4 burst (2029 bas)                          | 3 000–6 000 H100-eq        | Härlett: 200B-träning (5M H100-h) + RL (500K) + 3 domänmodeller (à 300K) = ~6,4M H100-h/år; 4 mån burst → ~5 300 sustained under körning | H          |

---

## K. Supply-side-restriktioner

Dessa antaganden modellerar utbudsbegränsningar som kan hindra Sverige från att anskaffa kapacitet oavsett budget.

| #   | Antagande                                      | Värde                                 | Källa                                                                                            | Känslighet |
| --- | ---------------------------------------------- | ------------------------------------- | ------------------------------------------------------------------------------------------------ | ---------- |
| A66 | Global EUV-verktygsproduktion (ASML) per år    | ~70–100 (2026–2030)                   | SemiAnalysis (Dylan Patel), Dwarkesh Podcast mars 2026                                           | M          |
| A67 | EUV-verktyg per GW AI-chipkapacitet            | ~3,5                                  | SemiAnalysis                                                                                     | M          |
| A68 | Teoretisk maximal global AI-chipkapacitet 2030 | ~100–200 GW                           | Härlett: ~700 ackumulerade EUV ÷ 3,5 per GW; justerat för allokering ~60% AI                     | H          |
| A69 | H100-hyrespris (Q1 2026)                       | ~$2,40/h (stigande, var $1,40/h 2024) | SemiAnalysis, cloud-prisdata                                                                     | M          |
| A70 | DRAM-prisökning sedan 2025                     | ~3x                                   | SemiAnalysis; SK Hynix/Samsung kvartalsrapporter                                                 | M          |
| A71 | Leveranstid för AI-chip-allokering             | 12–24 månader                         | NVIDIA-allokering kräver icke-annullerbara flerårsavtal med depositioner; TSMC N3 fullbokad 2027 | H          |
| A72 | Hyperscalar-capex 2026 (Big 5)                 | ~$700 mdr                             | Wolf Street, CNBC, kvartalsrapporter Q4 2025/Q1 2026                                             | L          |

---

## L. Dokumentövergripande kalibrering

| #   | Antagande                                                                 | Värde | Källa | Känslighet |
| --- | ------------------------------------------------------------------------- | ----- | ----- | ---------- |
| A73 | Offentlig AI-adoption kan accelerera snabbare än traditionell IT-adoption | Ja    | Public Sector AI Adoption Index 2026; Microsoft- och Anthropic-data | H |
| A74 | Öppna resonemangsmodeller ökar snarare än minskar behovet av egen infrastruktur | Ja | [10-kan-vi-vanta.md](10-kan-vi-vanta.md), [11-kompletterande-perspektiv.md](11-kompletterande-perspektiv.md), Epoch AI | M |
| A75 | Tillgång till GPU:er styrs av relationer och framförhållning, inte bara budget | Ja | NVIDIA-allokeringar, TSMC-fullbokning, Dwarkesh × Dylan Patel | H |
| A76 | Sverige kan i ett första steg säkra hundratals till några tusen GPU:er, inte tiotusentals | Ja | Praktikerbedömningar i [11-kompletterande-perspektiv.md](11-kompletterande-perspektiv.md) och jämförelser i [04-internationella-jamforelser.md](04-internationella-jamforelser.md) | H |
| A77 | Elnät, nätanslutning och lokalisering är praktiska restriktioner för on-prem-skalning | Ja | [07-teknisk-bilaga.md](07-teknisk-bilaga.md), [11-kompletterande-perspektiv.md](11-kompletterande-perspektiv.md) | M |

---

## M. Styrande repoantaganden

| #   | Antagande                                                                 | Värde | Källa | Känslighet |
| --- | ------------------------------------------------------------------------- | ----- | ----- | ---------- |
| A78 | Internationella offentliga investeringsplaner tenderar att släpa efter agentiska användningsmönster | Ja | Jämförelse mellan [04-internationella-jamforelser.md](04-internationella-jamforelser.md) och A51–A60 | H |
| A79 | [12-upprevidering-utmaning.md](12-upprevidering-utmaning.md) ska behandlas som stresstest, inte som nytt basscenario | Ja | Scenarioarkitektur i [01-ramverk.md](01-ramverk.md) och [CLAUDE.md](CLAUDE.md) | L |
| A80 | [02-antaganden-och-data.md](02-antaganden-och-data.md) är enda sanningskälla för numeriska intervall | Ja | Projektregel | L |

---

## Sammanfattning av känslighetsprofil

De antaganden med högst påverkan på slutresultatet:

1. A57–A60 (agentisk AI-mix, adoption, bakgrundsagenter) – driver Tier 1-volymen
2. A61–A65 (suverän träning: 200B+, RL) – driver Tier 4, den största enskilda posten
3. A81–A88 (sjukvårdens specialiserade inference) – visar att Tier 2 är kraftigt underskattat utan vårdkedjeanalys
4. A50 (netto-effektivitet vs växande modeller) – påverkar hela tidsserien
5. A66–A72 (supply-constraints) – begränsar vad som kan anskaffas oavsett budget; driver urgensargument
6. A10-A12 (AI-andel av IT-budget) – budgetrestriktion som kan göra topp-ned-spåret för konservativt
7. A73–A80 (repoövergripande kalibrering) – styr hur stresstest, källor och praktiska restriktioner ska tolkas

## Topp 12 antaganden – påverkan på 2029

| Antagande | Roll i modellen | Rimligt basspann | Ungefärlig påverkan på 2029 |
|-----------|-----------------|------------------|-----------------------------|
| **A59** | Andel aktiva användare | 55–70% | Flyttar Tier 1 med flera hundra H100-eq |
| **A55** | Tokens/dag för agentanvändare | 300K–500K | Driver nästan hela uppsidan i Tier 1 |
| **A52** | Andel agentanvändare | 20–30% | Avgör hur mycket copilot som blir agentisk belastning |
| **A60** | Bakgrundsagenter | 20–50 slots per större organisation | Adderar kontinuerlig belastning utanför kontorstid |
| **A88** | Sjukvårdens Tier 2-compute | ~450–600 H100-eq | Största enskilda uppjusteringen av Tier 2 |
| **A87** | AI-adoption sjukvård 2029 | 40–70% | Avgör hur snabbt sjukvårdens specialiserade AI skalar |
| **A61** | Modellstorlek för svensk grundmodell | 200B+ | Bestämmer om Tier 4 är nischad eller strategiskt ambitiös |
| **A62** | Träningsh för 200B-modell | 3M–8M H100-h | Avgör hur tung huvudkörningen blir |
| **A63** | RL per modell | 200K–1M H100-h | Kan förvandla en enstaka träningskörning till ett program |
| **A64** | Kontinuerlig RL för domänmodeller | 100K–500K H100-h/år | Gör Tier 4 mer återkommande än episodisk |
| **A11** | AI som andel av IT-budget 2029 | 5–12% | Sätter ett realistiskt tak i topp-ned-spåret |
| **A71** | Ledtid för chip-allokering | 12–24 månader | Påverkar inte behovet, men avgör om behovet kan realiseras i tid |

Huvudpoängen är att **A52, A55, A59 och A60** driver den generella inference-delen, **A81–A88** visar att sjukvårdens specialiserade inference är underskattat i nuvarande modell, medan **A61–A64** driver den strategiska modellambitionen.
