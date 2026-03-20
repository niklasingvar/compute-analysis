# 03 – Beräkningsmodell

Tre oberoende trianguleringsspår som korsvalideras. Modellen använder agentisk AI-segmentering (A51–A60), uppgraderad suverän träning (A61–A65) och supply-side-restriktioner (A66–A72). Ett separat stresstest av ett ännu högre utfall finns i [12-upprevidering-utmaning.md](12-upprevidering-utmaning.md).

---

## Spår 1: Botten-upp (användningsfall × adoption × compute/enhet)

### Tier 1: LLM-inference — copilots + agentisk AI

Copilot-mönstret (30K tok/dag) gäller fortfarande för majoriteten av användare, men agentisk AI (Claude Code, Cursor, autonoma arbetsflöden) innebär att en betydande minoritet av användarna konsumerar 300K–500K tokens/dag (A52, A55). Beviskedjan:

1. Anthropic ARR $19 mdr (mars 2026, Bloomberg) — varav Claude Code ~$2,5 mdr — visar att agentisk användning redan driver intäkter i skala
2. Microsoft Copilot-data (Q4 2025) visar att merparten av företagsanvändare förblir i chatbot-läge (~60%)
3. Dwarkesh × Dylan Patel (mars 2026): compute-brist driver priser uppåt ($2,40/h); efterfrågan överstiger utbud

2029 basscenario (segmenterad härledning):

| Segment            | Andel | Användare    | Tok/dag | Total tok/dag | Antagande |
| ------------------ | ----- | ------------ | ------- | ------------- | --------- |
| Copilot-användare  | 55%   | 181 500      | 30 000  | 5,4 mdr       | A51, A54  |
| Agent-användare    | 25%   | 82 500       | 400 000 | 33,0 mdr      | A52, A55  |
| Passiva/sporadiska | 20%   | 66 000       | 5 000   | 0,3 mdr       | A53, A56  |
| Bakgrundsagenter   | —     | ~3 000 slots | 100 000 | 0,3 mdr       | A60       |
| Total              |       | 330 000      |         | 39,0 mdr      | A59       |

| Parameter                      | Värde               | Antagande                                    |
| ------------------------------ | ------------------- | -------------------------------------------- |
| Adresserbar population         | 500 000             | A13                                          |
| Adoptionsgrad 2029             | 55–70%              | A59                                          |
| Aktiva användare (bas)         | 330 000             | A59 medel (60% × 550K)                       |
| Total tokens/dag               | 39,0 miljarder      | Härlett ovan                                 |
| Inference-throughput per H100  | 3 000 tokens/s      | A20 (medel)                                  |
| GPU-sekunder/dag               | 13 000 000          | 39,0 × 10⁹ / 3 000                           |
| Under 8h arbetsdag (28 800s)   | ~450 H100 sustained |                                              |
| Peak-faktor (×1,5)             | ~675 H100           | Kontorstimmar har peaks                      |
| Redundans (×1,3)               | ~880 H100           | Failover, underhåll                          |
| Modellstorlek-overhead (×2,5)  | ~2 200 H100         | 2029-modeller: MoE 200B+, reasoning-overhead |
| Tier 1 bas 2029                | ~2 200 H100-eq      |                                              |

Spann: ~1 200–3 500 H100-eq (låg: lägre agentandel, effektivare modeller; hög: högre adoption, fler agentiska arbetsflöden, fler bakgrundsagenter)

Tier 1 växer snabbt, men inte till den extrema nivå som ett fullständigt agentiskt scenario skulle innebära. Modellen antar att majoriteten av användarna fortfarande är i copilot-läge 2029, medan 20–30% driver den stora uppsidan.

### Tier 1 tidsserie:

| År   | Aktiva användare (bas) | H100-eq (låg) | H100-eq (bas) | H100-eq (hög) |
| ---- | ---------------------- | ------------- | ------------- | ------------- |
| 2026 | 45 000                 | 50            | 120           | 300           |
| 2027 | 100 000                | 150           | 400           | 900           |
| 2028 | 190 000                | 400           | 1 000         | 2 000         |
| 2029 | 330 000                | 1 200         | 2 200         | 3 500         |
| 2030 | 390 000                | 1 800         | 3 500         | 5 500         |
| 2031 | 430 000                | 2 500         | 5 000         | 8 000         |

_Not: Agentandelen (A52) ökar successivt genom perioden, samtidigt som tokens per agentanvändare ökar genom bättre modeller och mer iterativa arbetsflöden._

---

### Tier 2: Specialiserad inference

Tier 2 har två huvudkomponenter: **(a) sjukvårdens specialiserade inference** och **(b) övrig domän-AI**. Sjukvårdsposten har tidigare varit kraftigt underskattad — en detaljerad botten-upp-analys per vårdkedja visar att den verkliga compute-nivån är ~50x nuvarande "~6 sustained" ([13-sjukvard-compute-per-vardkedja.md](13-sjukvard-compute-per-vardkedja.md)).

**Dubbelräkningskontroll**: Sjukvårdspersonalens copilot/agent-användning (transkription, journaldokumentation, patientbrev) fångas redan av Tier 1. Tier 2 avser enbart specialiserad inference: bilddiagnostik, patologi, kliniskt beslutsstöd, kronisk övervakning och genomik.

#### a) Sjukvårdens specialiserade inference (2029 bas)

Fem vårdkedjor (skelettfrakturer, lungröntgen, diabetes typ 2, psykisk ohälsa, cancerdiagnostik) analyseras i detalj i [13-sjukvard-compute-per-vardkedja.md](13-sjukvard-compute-per-vardkedja.md). De täcker ~12–15% av nationella vårdkontakter men inkluderar de mest compute-intensiva specialiteterna.

| Komponent                        | Bas (H100-eq) | Antagande              |
| -------------------------------- | ------------- | ---------------------- |
| 5 vårdkedjor (direkt Tier 2)     | ~44           | A81–A87                |
| Extrapolering till hela sjukvården (×8, justerat ×0,5) | ~180 | Konservativt: de 5 är tyngre än snitt |
| Agentisk reasoning-overhead (×2,5) | ~450         | 2029-modeller: MoE, chain-of-thought |
| Redundans + testmiljöer (×1,3)   | ~600          |                        |
| **Sjukvård Tier 2 bas 2029**     | **~450–600**  | A88                    |

Spann: ~200 (låg: lägre adoption, enklare modeller) till ~1 500 (hög: bred adoption, alla vårdkedjor, reasoning-tung).

#### b) Komplexa resonemangsuppgifter (2029 bas)

| Parameter               | Värde     | Antagande                     |
| ----------------------- | --------- | ----------------------------- |
| Ärenden/år              | 300 000   | A24 (medel)                   |
| GPU-sekunder per ärende | 30        | A25 (medel, chain-of-thought) |
| Total GPU-sekunder/år   | 9 000 000 |                               |
| Sustained H100-eq       | ~1        |                               |
| Burst/peak              | ~10-30    |                               |

#### c) Geospatial + bedrägeri + övrig domän-AI (2029 bas)

| Domän                                   | Dedikerad kapacitet (H100-eq) | Antagande    |
| --------------------------------------- | ----------------------------- | ------------ |
| Geospatial (Lantmäteriet, MSB)          | 50-200                        | A26          |
| Bedrägeridetektering (Skatteverket, FK) | 20-100                        | A27          |
| Klimat/miljömodellering                 | 20-50                         | Uppskattning |
| Övrig specialiserad AI                  | 30-100                        | Uppskattning |

#### Tier 2 summering (2029 bas)

| Subkomponent                      | Bas (H100-eq) |
| --------------------------------- | ------------- |
| Sjukvård (specialiserad inference) | ~500          |
| Komplexa resonemangsuppgifter      | ~20           |
| Geospatial + bedrägeri + övrigt    | ~280          |
| **Tier 2 totalt**                  | **~800**      |

Tier 2 tidsserie:

| År   | H100-eq (låg) | H100-eq (bas) | H100-eq (hög) |
| ---- | ------------- | ------------- | ------------- |
| 2026 | 80            | 200           | 500           |
| 2027 | 150           | 400           | 1 000         |
| 2028 | 300           | 800           | 2 000         |
| 2029 | 500           | 1 500         | 3 500         |
| 2030 | 800           | 2 500         | 6 000         |
| 2031 | 1 200         | 4 000         | 9 000         |

_Not: Den stora uppjusteringen jämfört med tidigare Tier 2-estimat (~900 bas 2029) drivs framför allt av att sjukvårdens specialiserade inference nu fångas fullständigt (bilddiagnostik, patologi, beslutsstöd, kronisk övervakning, genomik) istället för enbart "~6 sustained" radiologi._

---

### Tier 3: Finjustering och anpassning

2029 basscenario:

| Parameter                                           | Värde                  | Antagande        |
| --------------------------------------------------- | ---------------------- | ---------------- |
| Organisationer som finjusterar                      | 80                     | A28 (medel 2029) |
| Jobb per organisation per år                        | 6                      | A30 (medel)      |
| GPU-timmar per jobb                                 | 200                    | A29 (medel)      |
| Total GPU-timmar/år                                 | 96 000                 |                  |
| RAG/embedding per organisation                      | 30 GPU-h × 80          | A31              |
| Total inkl. RAG                                     | ~100 000 GPU-h/år      |                  |
| Fördelat over 8 760 timmar                          | ~11 sustained H100-eq  |                  |
| Burst-kapacitet (jobb körs i dagar, inte året runt) | ~100-300 H100-eq burst | A32              |

Tier 3 tidsserie (burst-kapacitet — fler organisationer, större modeller att finjustera):

| År   | H100-eq (låg) | H100-eq (bas) | H100-eq (hög) |
| ---- | ------------- | ------------- | ------------- |
| 2026 | 50            | 100           | 250           |
| 2027 | 80            | 200           | 500           |
| 2028 | 150           | 350           | 800           |
| 2029 | 250           | 600           | 1 500         |
| 2030 | 350           | 800           | 2 000         |
| 2031 | 500           | 1 200         | 3 000         |

---

### Tier 4: Suverän träning

70B-modeller är svaga som långsiktig målbild 2029 (A61). Basscenariot utgår därför från 200B+-modell. RL-tuning (A63–A64) adderas som separat post — Anthropic och OpenAI spenderar ~20–30% av sin träningsbudget på RL.

2029 basscenario:

| Parameter                              | Värde                                | Antagande           |
| -------------------------------------- | ------------------------------------ | ------------------- |
| Svensk 200B+-grundmodell               | 1 körning × 5 000 000 H100-h         | A62 (medel)         |
| RL-tuning för grundmodell              | 500 000 H100-h                       | A63 (medel)         |
| Känslig-data-modeller (hälsa, juridik) | 3 körningar × 300 000 H100-h         | A39                 |
| Kontinuerlig RL för domänmodeller      | 300 000 H100-h/år                    | A64 (medel)         |
| Total H100-timmar/år                   | ~6 700 000                           |                     |
| Om huvudkörning pågår i 4 månader      | ~5 600 H100 sustained under perioden |                     |
| Annualiserat (4+2 mån aktiv, överlapp) | ~2 200 H100-eq årsmedeltal           |                     |
| Burst peak                             | ~4 000–5 500 H100-eq                 | Under aktiv träning |

Hög-scenariot inkluderar: 400B+-modell, multimodala modeller, fler domänmodeller, kontinuerlig RL i skala → 6 000–10 000 H100-eq burst.

Låg-scenariot: behåll 70B-fokus (A35), begränsad RL → 1 500–2 500 H100-eq burst.

Tier 4 tidsserie (burst-kapacitet):

| År   | H100-eq (låg) | H100-eq (bas) | H100-eq (hög) |
| ---- | ------------- | ------------- | ------------- |
| 2026 | 200           | 500           | 1 000         |
| 2027 | 500           | 1 200         | 2 500         |
| 2028 | 1 000         | 2 500         | 5 000         |
| 2029 | 1 500         | 4 500         | 10 000        |
| 2030 | 2 500         | 6 000         | 14 000        |
| 2031 | 3 500         | 8 000         | 20 000        |

---

### Botten-upp summering

| År   | Tier 1 | Tier 2 | Tier 3 | Tier 4 | Total (bas) | Låg   | Hög    |
| ---- | ------ | ------ | ------ | ------ | ----------- | ----- | ------ |
| 2026 | 120    | 200    | 100    | 500    | 920         | 450   | 2 050  |
| 2027 | 400    | 400    | 200    | 1 200  | 2 200       | 880   | 4 700  |
| 2028 | 1 000  | 800    | 350    | 2 500  | 4 650       | 1 850 | 9 000  |
| 2029 | 2 200  | 1 500  | 600    | 4 500  | 8 800       | 3 200 | 19 000 |
| 2030 | 3 500  | 2 500  | 800    | 6 000  | 12 800      | 5 500 | 28 000 |
| 2031 | 5 000  | 4 000  | 1 200  | 8 000  | 18 200      | 8 000 | 40 000 |

Tier 1 och Tier 4 står tillsammans för huvuddelen av uppsidan, men Tier 2 har vuxit betydligt efter att sjukvårdens specialiserade inference nu fångas fullständigt ([13-sjukvard-compute-per-vardkedja.md](13-sjukvard-compute-per-vardkedja.md)). Det är kombinationen av agentisk användning, sjukvårds-AI och suverän modellambition som förklarar varför huvudscenariot ligger väsentligt över det rent copilot-baserade läget.

---

## Spår 2: Topp-ned (internationella jämförelser)

### Metod A: EU AI Factories-allokering

EU:s AI Factories-initiativ planerar €2-3 miljarder i AI-infrastruktur. Sveriges BNP-andel av EU ≈ 3,4%, befolkningsandel ≈ 2,3%.

| Fördelningsnyckel       | Sveriges andel | Motsvarar (H100-eq)                 |
| ----------------------- | -------------- | ----------------------------------- |
| BNP-andel (3,4%)        | ~€70-100M      | ~2 000-3 000 H100-eq kapacitet      |
| Befolkningsandel (2,3%) | ~€50-70M       | ~1 500-2 000 H100-eq kapacitet      |
| Nuvarande EuroHPC-andel | ~€30-50M       | ~1 000-1 500 H100-eq (konservativt) |

_Konvertering: €1M ≈ 12-15 H100 i årskapacitet (hybridmodell moln+on-prem)_

### Metod B: UK AI Strategy skalning

UK planerar ~£1-2,5 mdr i offentlig AI-infrastruktur. Sverige ≈ 15% av UK:s arbetsstyrka.

| UK-investering | Skalat till Sverige (15%) | H100-eq      |
| -------------- | ------------------------- | ------------ |
| £1 mdr (låg)   | ~1 500 MSEK               | ~2 000-3 000 |
| £2,5 mdr (hög) | ~3 750 MSEK               | ~5 000-8 000 |

### Metod C: AI som andel av IT-budget

| År   | IT-budget (mdr SEK) | AI-andel | AI-budget (MSEK) | H100-eq (vid 200 KSEK/GPU/år) |
| ---- | ------------------- | -------- | ---------------- | ----------------------------- |
| 2026 | 27                  | 2%       | 540              | ~700                          |
| 2029 | 30                  | 8%       | 2 400            | ~3 000-4 000                  |
| 2031 | 33                  | 13%      | 4 300            | ~5 500-7 000                  |

_Not: AI-budget inkluderar mer än compute (personal, licenser, data). Compute ≈ 40-60% av AI-budget._

Justerat för compute-andel:

| År   | H100-eq (låg, 40%) | H100-eq (bas, 50%) | H100-eq (hög, 60%) |
| ---- | ------------------ | ------------------ | ------------------ |
| 2026 | 280                | 350                | 420                |
| 2029 | 1 200              | 1 750              | 2 400              |
| 2031 | 2 200              | 3 250              | 4 200              |

### Metod D: Nordisk jämförelse

| Land             | Befolkning (vs SE) | Känd AI-compute              | Skalat till Sverige          |
| ---------------- | ------------------ | ---------------------------- | ---------------------------- |
| Finland (LUMI)   | 0,53x              | ~5 000 H100-eq GPU-partition | ~9 400 (men inkl. forskning) |
| Danmark (Gefion) | 0,57x              | ~1 528 H100                  | ~2 700 (enbart Gefion)       |

Justerat: Finlands LUMI betjänar hela EuroHPC + forskning, inte bara offentlig sektor. Danmarks Gefion är privat-offentligt partnerskap. Rensat för enbart offentlig sektor: 1 500-4 000 H100-eq.

### Topp-ned sammanfattning (2029):

| Metod                  | Låg    | Bas    | Hög    | Kommentar                                                                 |
| ---------------------- | ------ | ------ | ------ | ------------------------------------------------------------------------- |
| EU AI Factories        | 1 500  | 3 000  | 5 000  | Fångar europeisk offentlig investeringsnivå                               |
| UK-skalning            | 3 000  | 5 000  | 12 000 | Fångar mer offensiv offentlig ambitionsnivå                               |
| IT-budget-andel        | 1 500  | 2 500  | 4 000  | Ger ett konservativt budgetankare                                         |
| Nordisk jämförelse     | 2 000  | 4 000  | 8 000  | Visar vad jämförbara länder redan bygger                                  |
| Tokens per capita (11) | 3 000  | 6 000  | 10 000 | Fångar agentisk användning bättre än klassiska offentliga investeringsplaner |
| Topp-ned medel         | ~2 200 | ~4 100 | ~7 800 |

---

## Spår 3: Storbolagstriangulering

### Vad kostar frontier-modellerna?

| Bolag/Modell                   | Estimerad träningskostnad | GPU-kapacitet               | Källa                                                      |
| ------------------------------ | ------------------------- | --------------------------- | ---------------------------------------------------------- |
| OpenAI GPT-4                   | $100M+                    | ~25 000 A100, ~3 månader    | Semianalysis, WSJ                                          |
| Meta Llama 2 70B               | ~$20-30M (compute)        | 1,7M A100-h                 | Meta Research                                              |
| Meta Llama 3 405B              | ~$100-200M (compute)      | 30M+ GPU-h                  | Meta, uppskattningar                                       |
| Anthropic Claude (frontier)    | ~$200M-$1B per körning    | Tiotusentals H100           | Finansieringsdata, mediarapporter                          |
| Anthropic compute-spend (2026) | ~$10–14 mdr/år implied    | 5–6 GW planerat slutet 2026 | SemiAnalysis, Bloomberg ($19 mdr ARR, <50% bruttomarginal) |
| xAI Colossus (infrastruktur)   | ~$3-4 mdr (infra)         | 100 000 H100                | Elon Musk, The Information                                 |
| Google Gemini Ultra            | ~$100M+ (compute)         | Tusentals TPU v4/v5         | Google, uppskattningar                                     |
| Global hyperscalar-capex 2026  | ~$700 mdr (Big 5)         |                             | Wolf Street, CNBC, A72                                     |

### Vad behöver Sveriges offentliga sektor?

Sverige behöver INTE träna frontier-modeller från scratch. Men Sverige behöver:

#### a) Köra inference på frontier-modeller i stor skala

- Agentisk AI-mix: ~2 200 H100-eq sustained inference (bas 2029, A58)
- Kostnad: ~$200–400M/år i compute — fortfarande en bråkdel av en frontier-träningskörning
- Jämförelse: Anthropic spenderar ~$10–14 mdr/år enbart på compute

#### b) Finjustera modeller för svenska behov

- Finjustering av 200B+-modell: ~200–2 000 H100-timmar per jobb [A29, justerat för större modeller]
- Totalt ~200 000 GPU-h/år ≈ ~$1–5M/år
- = fortfarande <1% av Llama 3 405B:s träningskostnad, upprepat varje år

#### c) Träna svenska grundmodeller (200B+-skala)

- En GPT-SW3-efterträdare på 200B+: ~5 000 000 H100-timmar [A62]
- RL-tuning: ~500 000 H100-timmar [A63]
- Kostnad: ~$200–500M per träningscykel (träning + RL)
- = ungefär 2x GPT-4 men 1/10 av frontier-skala 2029 — Sverige tränar inte frontier, utan en nischad 200B-modell

#### d) Modeller för känsliga data + kontinuerlig RL

- Hälsodata, rättsdata, utbildningsdata kräver svenska modeller
- 3 domänmodeller × 300K H100-h + löpande RL 300K H100-h/år [A39, A64]
- Total: ~1 200 000 H100-h/år beroende på ambition

### Nyckelinsikt: Storbolagsjämförelsen

> Sveriges hela offentliga sektors 5-åriga compute-behov (~48 000 H100-eq-år kumulativt, 2026–2031) motsvarar fortfarande bara en liten bråkdel av vad ledande AI-aktörer spenderar på compute under ett enskilt år.

Uppställning:

- Offentlig sektor 2026-2031 kumulativt: ~48 000 H100-eq-år × ~$30K/GPU-år ≈ ~$1,4 mdr totalt
- Anthropic compute-spend 2026: ~$10–14 mdr _per år_ (härledd från $19 mdr ARR, <50% bruttomarginal)
- xAI Colossus: 100 000 H100 — ett enda kluster
- Hyperscalar capex 2026: ~$700 mdr (Big 5 ensamt, A72)

Politisk slutsats: Även huvudscenariot är en rundningsdifferens i global kontext. Investeringen är stor i svensk budgetlogik men liten relativt de aktörer som definierar marknaden. Det som krävs är ett strategiskt val och tidig aktion givet supply-constraints (A66–A72).

### Storbolagsspårets estimat (2029):

| Komponent               | H100-eq (bas 2029) | Kostnad (MSEK/år) |
| ----------------------- | ------------------ | ----------------- |
| Inference-kapacitet (a) | 2 500              | 600-900           |
| Finjustering (b)        | 600                | 100-200           |
| Suverän träning (c+d)   | 4 500 (burst)      | 800-1 500         |
| Total                   | ~7 600             | ~1 500-2 600      |

---

## Triangulering: Konvergens

### 2029-estimat jämförelse:

| Spår       | Låg    | Bas    | Hög     |
| ---------- | ------ | ------ | ------- |
| Botten-upp | 3 200  | 8 800  | 19 000  |
| Topp-ned   | 2 200  | 4 100  | 7 800   |
| Storbolag  | 2 500  | 7 600  | 15 000  |
| Syntes     | ~3 000 | ~7 000 | ~14 000 |

Botten-upp och storbolagsspåren konvergerar kring ~8 000–9 000 H100-eq för basscenariot 2029. Topp-ned hamnar lägre (~4 100), vilket reflekterar att internationella jämförelser och offentliga investeringsplaner ofta är pre-agentiska och därmed konservativa.

Syntesens basscenario sätts till **~9 000 H100-eq** 2029. Det ligger nära de två efterfrågebaserade spåren, samtidigt som topp-ned-spåret används som konservativt golv snarare än centrum. Uppjusteringen jämfört med ett rent copilot-scenario drivs av tre faktorer: agentisk AI (Tier 1), sjukvårdens specialiserade inference (Tier 2, [13-sjukvard-compute-per-vardkedja.md](13-sjukvard-compute-per-vardkedja.md)) och suverän modellambition (Tier 4).

Kompletterande sanity check — tokens per capita: En alternativ topp-ned-modell baserad på ~250 000 tokens/capita/dag (hela Sveriges befolkning, moget AI-scenario 2030) ger ~35 000–50 000 H100-eq _nationellt_. Isolerat till offentlig sektor (~15–20% med hög AI-intensitet) motsvarar det ~5 000–10 000 H100-eq — i linje med huvudscenariot. Fullständig härledning: [11-kompletterande-perspektiv.md](11-kompletterande-perspektiv.md).

### Source of variance

| Gap | Huvudförklaring |
|-----|------------------|
| Botten-upp > topp-ned | Botten-upp fångar agentiska arbetsflöden och suverän träning tydligare än offentliga investeringsplaner gör |
| Storbolag > topp-ned | Storbolagsspåret utgår från faktisk global kostnadsnivå för modellkapacitet, inte från offentliga budgetramar |
| Botten-upp ≈ storbolag | Båda spåren fångar efterfrågesidan snarare än enbart dagens offentliga planeringsnivå |

Det centrala tolkningsvalet är därför att använda topp-ned-spåret som **konservativt golv** och efterfrågespåren som **bättre indikatorer på faktisk kapacitetsnivå**.

### Kombinerat estimat — offentlig sektor:

| År   | Låg   | Bas    | Hög    | Enhet   |
| ---- | ----- | ------ | ------ | ------- |
| 2026 | 400   | 900    | 2 000  | H100-eq |
| 2027 | 900   | 2 200  | 5 000  | H100-eq |
| 2028 | 1 800 | 4 500  | 9 500  | H100-eq |
| 2029 | 3 000 | 9 000  | 20 000 | H100-eq |
| 2030 | 5 500 | 13 000 | 30 000 | H100-eq |
| 2031 | 8 000 | 18 000 | 42 000 | H100-eq |

_Bas inkluderar agentisk AI-mix och 200B+-träning. Hög inkluderar hög agentandel, 400B+-modeller och kontinuerlig RL i skala._

---

## Supply-side-implikationer

Behovsmodellen ovan beskriver **efterfrågan**. Den beskriver inte automatiskt vad som kan anskaffas utan framförhållning. A66–A72 pekar på tre slutsatser:

1. **Kapacitet är inte bara en budgetfråga.** ASML/EUV, HBM och TSMC:s ledande noder gör att den globala tillgången på AI-acceleratorer växer långsammare än efterfrågan.
2. **Tidiga avtal blir strategiska.** I en marknad med 12–24 månaders ledtider kan en svensk offentlig köpare inte anta att kapacitet går att köpa “när den behövs”.
3. **Huvudscenariot kräver tidig aktivering.** Ett behov på ~9 000 H100-eq 2029 innebär inte att Sverige måste köpa allt 2026, men att upphandling, nätanslutning, partnerskap och ramavtal måste starta i god tid.

Modellen ska därför läsas som: **detta är den kapacitet som sannolikt behövs**, inte **detta är den kapacitet som spontant kommer finnas att köpa**.

---

## Kostnadsöversättning

### Modell: Hybrid moln/on-prem

Antagande: 60% on-prem (egna/delade datacenter), 40% moln (burst, flexibilitet) [optimerat för kostnadseffektivitet].

| Komponent                         | Kostnad per H100-eq/år |
| --------------------------------- | ---------------------- |
| On-prem (amortering 4 år + drift) | ~150-200 KSEK          |
| Moln (reserverade instanser)      | ~250-350 KSEK          |
| Vägt snitt (60/40)                | ~190-260 KSEK          |

### Årskostnad (compute):

| År   | Bas H100-eq | Kostnad låg (MSEK) | Kostnad bas (MSEK) | Kostnad hög (MSEK) |
| ---- | ----------- | ------------------ | ------------------ | ------------------ |
| 2026 | 900         | 80                 | 200                | 500                |
| 2027 | 2 200       | 200                | 480                | 1 200              |
| 2028 | 4 500       | 420                | 990                | 2 400              |
| 2029 | 9 000       | 700                | 2 000              | 4 900              |
| 2030 | 13 000      | 1 100              | 2 800              | 7 300              |
| 2031 | 18 000      | 1 500              | 3 900              | 10 300             |

_Inkluderar compute-kostnad. Personal, mjukvara och data tillkommer separat. Molnpriser ligger högre än den gamla deflationslogiken antydde (A69: ~$2,40/h, stigande)._

### Effektbehov:

| År   | Bas H100-eq | Facility power (MW) vid PUE 1.25 | Anmärkning                  |
| ---- | ----------- | -------------------------------- | --------------------------- |
| 2026 | 900         | ~0,8                             | Mestadels moln              |
| 2027 | 2 200       | ~1,8                             |                             |
| 2028 | 4 500       | ~3,6                             | Blackwell: ~0,8 kW/H100-eq  |
| 2029 | 9 000       | ~6,3                             | Rubin-gen: ~0,7 kW/H100-eq  |
| 2030 | 13 000      | ~7,8                             | Post-Rubin: ~0,6 kW/H100-eq |
| 2031 | 18 000      | ~9,0                             | Fortsatt effektivisering    |

_~6,3 MW (2029) motsvarar ett medelstort datacenter — jämförbart med Facebooks initiala Luleå-kapacitet (~40 MW). 8 MW (2031) är fortfarande en bråkdel av de GW-skaliga datacenter som byggs i USA._

---

## Känslighetsanalys

### Mest inflytelserika parametrar (tornado-diagram):

| Parameter                                | Effekt på 2029 bas-estimat                         |
| ---------------------------------------- | -------------------------------------------------- |
| Agentandel + tokens per agent (A52, A55) | Flyttar Tier 1 från ~1 200 till ~3 500 H100-eq     |
| Adoptionsgrad 2029 (A59)                 | Flyttar huvudscenariot ungefär mellan ~7 500 och ~10 500 |
| Suverän tränings-ambition (A61-A65)      | Flyttar Tier 4 ungefär mellan ~3 000 och ~6 000    |
| Effektivitetsförbättring (A47-A50)       | Motverkar en del av uppgången men ändrar inte riktningen |
| AI-budget som andel av IT (A10-A12)      | Begränsar vad som är realistiskt i topp-ned-spåret |
| Leveranstid/allokering (A71)             | Påverkar inte behovet men avgör om behovet kan realiseras i tid |

### Scenario-sammanfattning:

**Låg** (~3 000 H100-eq 2029): Defensivt minimum — drift, viss specialiserad AI och begränsad nationell modellförmåga. Räcker för att minska de värsta flaskhalsarna men inte för att bygga ett starkt ekosystem.

**Bas** (~9 000 H100-eq 2029): Bred offentlig AI-användning med agentisk komponent och fullständigt fångad sjukvårds-AI, meningsfull suverän modellförmåga och tillräcklig kapacitet för att kombinera drift med kompetensuppbyggnad.

**Hög** (~20 000 H100-eq 2029): Strategisk handlingsfrihet — hög agentandel, stark forsknings- och utbildningsmiljö, större träningsprogram och mer robust kapacitet för känsliga domäner. Strategisk motivering: [08-strategi.md](08-strategi.md).
