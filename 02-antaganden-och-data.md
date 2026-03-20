# 02 – Antaganden och data

Alla antaganden är numrerade (A1-A50) och klassificerade efter känslighet. Varje siffra i beräkningsmodellen (03) är spårbar till ett antagande här.

**Känslighetsklasser:**
- **L** (låg): välförankrad data, låg osäkerhet
- **M** (medel): rimlig uppskattning, viss osäkerhet
- **H** (hög): stor osäkerhet, stor påverkan på slutresultat

---

## A. Offentlig sektors storlek och struktur

| # | Antagande | Värde | Källa | Känslighet |
|---|-----------|-------|-------|------------|
| A1 | Totalt antal anställda i offentlig sektor (exkl. försvar) | ~1 150 000 – 1 250 000 | SCB 2024 | L |
| A2 | Varav statliga myndigheter | ~270 000 | ESV/Statskontoret | L |
| A3 | Varav kommuner och regioner | ~900 000 | SKR | L |
| A4 | Andel "kunskapsarbetare" (tjänstemän, handläggare, specialister) | ~40-50% (~500 000) | Uppskattning baserat på SCB yrkesklassificering | M |
| A5 | Antal myndigheter med >100 anställda | ~150 | Statskontoret | L |
| A6 | Antal kommuner | 290 | SKR | L |
| A7 | Antal regioner | 21 | SKR | L |

## B. IT-kostnader och budget

| # | Antagande | Värde | Källa | Känslighet |
|---|-----------|-------|-------|------------|
| A8 | Total IT-kostnad offentlig sektor | ~25-30 mdr SEK/år | ESV, SKR | M |
| A9 | Statliga myndigheters IT-kostnad | ~12-15 mdr SEK/år | ESV | M |
| A10 | AI som andel av IT-budget (2026) | ~1-3% | Gartner, egen uppskattning | H |
| A11 | AI som andel av IT-budget (2029) | ~5-12% | Gartner prognos | H |
| A12 | AI som andel av IT-budget (2031) | ~8-18% | Extrapolering | H |

## C. Tier 1 – Kunskapsarbetare (copilots, LLM-inference)

| # | Antagande | Värde | Källa | Känslighet |
|---|-----------|-------|-------|------------|
| A13 | Adresserbar population för AI-copilots | ~450 000 – 550 000 | A4, justerat för arbetsuppgifter | M |
| A14 | Adoptionsgrad 2026 | 5-10% | Konservativ: LOU-upphandling, pilotprojekt | M |
| A15 | Adoptionsgrad 2028 | 20-35% | S-kurva, ramavtal på plats | M |
| A16 | Adoptionsgrad 2029 | 35-55% | Inflektionspunkt | H |
| A17 | Adoptionsgrad 2031 | 55-80% | Mognad, men inte 100% | H |
| A18 | Interaktioner per användare per dag | 10-20 | Microsoft Copilot-data, Anthropic usage patterns | M |
| A19 | Tokens per interaktion (in + ut) | ~1 500 – 3 000 tokens | Typisk fråga+svar med kontext | M |
| A20 | Inference-throughput per H100 | ~2 000 – 4 000 tokens/s (beroende på modellstorlek och batching) | Artificial Analysis, NVIDIA benchmarks | M |
| A21 | Genomsnittlig GPU-belastning per aktiv användare | ~0,001 – 0,003 H100-eq (sustained average, 8h arbetsdag) | Härlett: A18 × A19 / A20 / 28800s | M |

### Härledning A21
En användare med 15 interaktioner/dag × 2 000 tokens × ~0,5s GPU-tid per 2000 tokens = ~7,5 GPU-sekunder/dag.
Under en 8h arbetsdag (28 800s): 7,5 / 28 800 ≈ 0,0003 sustained H100-eq.
Men med peaks, batching-overhead och redundans: ~0,001 – 0,003 H100-eq i provisionerad kapacitet.

## D. Tier 2 – Specialiserad inference

| # | Antagande | Värde | Källa | Känslighet |
|---|-----------|-------|-------|------------|
| A22 | Medicinsk bildanalys – antal undersökningar/år | ~8-10 miljoner radiologiska undersökningar | Socialstyrelsen, regiondata | M |
| A23 | GPU-tid per bildanalys | ~5-30 sekunder H100-eq | Beroende på modalitet (röntgen vs MR) | M |
| A24 | Komplexa resonemangsuppgifter (juridik, utredning) | ~100 000 – 500 000 ärenden/år | Uppskattning: FK, Migrationsverket, domstolar | H |
| A25 | GPU-tid per komplext resonemang | ~10-60 sekunder H100-eq (chain-of-thought, längre kontext) | Uppskattning baserat på o1/o3-liknande modeller | H |
| A26 | Geospatial analys (Lantmäteriet, MSB) | ~50-200 H100-eq dedikerad kapacitet | Uppskattning | H |
| A27 | Bedrägeridetektering (Skatteverket, FK) | ~20-100 H100-eq dedikerad kapacitet | Uppskattning baserat på transaktionsvolymer | H |

## E. Tier 3 – Finjustering och anpassning

| # | Antagande | Värde | Källa | Känslighet |
|---|-----------|-------|-------|------------|
| A28 | Antal organisationer som finjusterar egna modeller | 20-50 (2026) → 100-200 (2031) | Uppskattning: stora myndigheter och regioner | H |
| A29 | GPU-timmar per finjusterings-jobb (7B-70B modell) | 50-500 H100-timmar per jobb | Beroende på modellstorlek och datamängd | M |
| A30 | Antal finjusterings-jobb per organisation per år | 2-12 | Uppskattning: kvartalsvis till månadsvis uppdatering | H |
| A31 | RAG-systemträning och embedding-generering | ~10-50 H100-timmar per stor dokumentsamling | Uppskattning | M |
| A32 | Total Tier 3-kapacitet (burst, ej sustained) | 100-300 H100-eq (2029 bas) | Härlett från A28-A31 | H |

## F. Tier 4 – Suverän träning

| # | Antagande | Värde | Källa | Känslighet |
|---|-----------|-------|-------|------------|
| A33 | Behov av svensk grundmodell (successor till GPT-SW3) | Ja, 70B-200B parameter | AI Sweden, AI-kommissionen | M |
| A34 | Träningsdata: svensk text + domändata | ~500 mdr – 2 biljoner tokens | Uppskattning baserat på Llama 3 (15T tokens) skalat | H |
| A35 | H100-timmar för 70B-modell | ~500 000 – 2 000 000 | Meta Llama 2 70B: 1,7M A100-h ≈ 850K H100-h | M |
| A36 | H100-timmar för 200B-modell | ~2 000 000 – 10 000 000 | Skalningslagar: ~kubisk med parametrar | H |
| A37 | Frekvens: stora träningskörningar | 1-2 per år | Följer frontier-labs cykler | M |
| A38 | Dedikerad träningskapacitet (sustained) | 500-4 000 H100-eq under träningsperioder | A35-A37, konverterat till sustained årskapacitet | H |
| A39 | Modeller för känsliga data (hälso-/rättsdata) | Ytterligare 200-1 000 H100-eq burst | Uppskattning: domänspecifika modeller | H |

## G. Hårdvara och kostnader

| # | Antagande | Värde | Källa | Känslighet |
|---|-----------|-------|-------|------------|
| A40 | H100 SXM pris (inköp) | ~$25 000 – $35 000 per GPU (2025) | NVIDIA listpris, volymrabatter | M |
| A41 | Totalt systempris per H100 (server, nätverk, rack) | ~$50 000 – $80 000 per GPU | DGX-system / OEM-priser | M |
| A42 | Molnkostnad per H100-timme | ~$2-4/h (reserverade instanser) | AWS/Azure/GCP prissättning | M |
| A43 | Effekt per H100 (TDP) | 700W | NVIDIA specifikation | L |
| A44 | Total faciliteteffekt per GPU (PUE ~1.2-1.3 i Norden) | ~900-1 000W per GPU inkl. kylning, nätverk, storage | Nordiskt PUE-antagande | L |
| A45 | Elpris (Norden) | ~0,50-1,00 SEK/kWh | Nordpool, beroende på elområde | M |
| A46 | Nästa generations GPU:er (B200, post-Blackwell) | 2-3x prestanda/watt vs H100, tillgängliga ~2026-2027 | NVIDIA roadmap | M |

## H. Effektivitetsförbättringar

| # | Antagande | Värde | Källa | Känslighet |
|---|-----------|-------|-------|------------|
| A47 | Algoritmisk effektivisering (inference) | ~2x per 18-24 månader | Epoch AI, historisk trend | M |
| A48 | Hårdvarueffektivisering (nya GPU-generationer) | ~2-3x per generation (2 år) | NVIDIA roadmap: H100→B200→post-Blackwell | M |
| A49 | Kvantisering och optimering | Ytterligare ~1,5-2x genom INT8/FP8-inference | Forskning, NVIDIA TensorRT | L |
| A50 | Netto-effekt: behov i H100-eq reduceras med ~30-50% per 2 år i *fysiska* GPU:er, men modellerna blir större och mer kapabla → nettoefterfrågan ökar ändå | Komplext samspel – modellerad som ~20% årlig ökning i efterfrågan trots effektivisering | Egen syntes | H |

---

## Sammanfattning av känslighetsprofil

De antaganden med **högst påverkan** på slutresultatet:
1. **A16-A17** (adoptionsgrad 2029-2031) – driver Tier 1-volymen
2. **A38-A39** (suverän träningskapacitet) – driver Tier 4, den största enskilda posten
3. **A50** (netto-effektivitet vs växande modeller) – påverkar hela tidsserien
4. **A10-A12** (AI-andel av IT-budget) – budgetrestriktion som begränsar realistiskt utfall
