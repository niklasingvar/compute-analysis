# 10 – Motargument: Varför estimaten sannolikt är för låga

Denna analys granskar beräkningsmodellens estimat (03) mot bakgrund av den globala compute-marknadens utveckling Q1 2026 — särskilt hyperscalarnas kapitalinvesteringar, AI-labens intäktsexplosion, och de fysiska begränsningarna i halvledarförsörjningskedjan.

**Slutsats: Basscenariot (~3 500 H100-eq 2029) underskattar det verkliga behovet med en storleksordning. Ett reviderat basscenario landar kring 30 000–50 000 H100-eq — motsvarande ~25–40 MW och en nationell AI-infrastruktur i paritet med ett halvt xAI Colossus-kluster.**

Källa för marknadsdata: SemiAnalysis (Dylan Patel), hyperscalarnas kvartalsrapporter, Epoch AI. Podcastkälla: Dwarkesh Patel × Dylan Patel, mars 2026.

---

## 1. Det globala perspektivet avslöjar en storleksordningsfel

### 1.1 Verklighetscheck: 3 500 H100-eq i global kontext

Beräkningsmodellen (03, Spår 3) jämför Sveriges behov med storbolagens investeringar och kallar det en "rundningsdifferens". Men den slutsatsen borde **oroa**, inte lugna.

**Global AI-chipkapacitet 2030 (SemiAnalysis-härledning):**

| Parameter | Värde | Källa |
|-----------|-------|-------|
| Ackumulerade EUV-verktyg 2030 | ~700 | SemiAnalysis |
| EUV-verktyg per GW AI-chips (Rubin) | ~3,5 | SemiAnalysis |
| Teoretisk max AI-chipkapacitet | ~200 GW | Härlett (om all kapacitet → AI) |
| Realistisk AI-allokering (~60%) | ~120 GW | Härlett |
| H100-eq per GW (Rubin-gen, ~4-5x) | ~4–5M | Härlett: 1 GW / 0.8 kW facility × 4x perf |
| **Global AI-kapacitet i H100-eq** | **~500M–600M** | |

**Sveriges "rättvisa andel":**

| Fördelningsnyckel | Sveriges andel | AI-kapacitet (H100-eq) |
|--------------------|---------------|----------------------|
| BNP-andel av världen (~0,5%) | 0,5% × 500M | ~2 500 000 |
| Justerat för hög digital mognad (0,6%) | 0,6% × 500M | ~3 000 000 |
| **Varav offentlig sektor (5–15%)** | | **125 000–450 000** |
| **Nuvarande basscenario** | | **3 500** |
| **Nuvarande bas som andel av "fair share"** | | **~1–3%** |

Det nuvarande basscenariot hävdar alltså att svensk offentlig sektor — som utgör ~50% av BNP i en av världens mest digitaliserade ekonomier — behöver **1–3% av vad en proportionell global allokering skulle ge**. Det är inte konservativt. Det är en implicit prognos att AI knappt transformerar offentlig sektor alls.

### 1.2 Hyperscalarnas capex: $1 biljon per år

| Aktör | Capex 2026 | Kommentar |
|-------|-----------|-----------|
| Amazon | ~$200 mdr | |
| Google | ~$180 mdr | Tar fri kassaflöde till noll; planerar $300 mdr 2027 |
| Microsoft | ~$100 mdr | |
| Meta | ~$100 mdr | Lägger till lika mycket kapacitet som hela 2022-flottan — **på ett enda år** |
| **Summa Big 4** | **~$600 mdr** | |
| Övrig supply chain | ~$400 mdr | CoreWeave, Oracle, neoclouds, etc. |
| **Global AI-infrastruktur** | **~$1 biljon (2026)** | SemiAnalysis-estimat |

Sveriges hela 5-åriga bas-estimat (~$500M kumulativt, 06) motsvarar **0,05%** av ett enda års global investering. Dessa aktörer investerar inte irrationellt — de ser intäkter som motiverar satsningen.

### 1.3 AI-labens intäktsexplosion bevisar efterfrågan

| Mått | Värde | Källa |
|------|-------|-------|
| Anthropic ARR (mars 2026) | ~$20 mdr | Mediarapporter |
| Anthropic intäktsökning jan 2026 | +$4 mdr/mån | SemiAnalysis |
| Anthropic intäktsökning feb 2026 | +$6 mdr/mån | SemiAnalysis |
| Anthropic bruttomarginal | <50% | The Information |
| Anthropic compute-spend (implied) | ~$13–14 mdr/år | $20B ARR × ~50% cost |
| Anthropic compute-behov (slutet 2026) | 5–6 GW | SemiAnalysis-estimat |
| OpenAI compute-behov (slutet 2026) | 6+ GW | SemiAnalysis-estimat |
| OpenAI compute-behov 2027 | ~12 GW | SemiAnalysis-estimat |

Anthropic gick från noll till $20 mdr ARR på ~2 år. Tillväxten bromsas av **brist på compute**, inte brist på efterfrågan — Cloud Code har låg tillförlitlighet just för att de är kapacitetsbegränsade och måste "förstöra efterfrågan" genom att inte kunna leverera.

**Nyckelinsikt**: Den globala AI-marknaden befinner sig i en fas där efterfrågan **överstiger utbudet med bred marginal**. Prissignalen bekräftar detta — H100-hyrespriser har **stigit** från ~$1,40/h till $2,40/h. I denna marknad är passivitet den dyraste strategin.

---

## 2. Utbudsrestriktioner: Tre hårda fysiska tak

### 2.1 Halvledarproduktion — ASML som yttersta flaskhals

Beräkningsmodellen (03) och tekniska bilagan (07) diskuterar GPU-generationer men behandlar inte **tillgångssidan** som en restriktion. I verkligheten är det den dominerande faktorn.

**ASML EUV — den mest komplexa maskin mänskligheten bygger:**

| Parameter | Värde | Källa |
|-----------|-------|-------|
| EUV-verktyg producerade 2026 | ~70 | SemiAnalysis |
| EUV-verktyg 2027 | ~80 | SemiAnalysis |
| EUV-verktyg 2030 (aggressivt) | ~100 | SemiAnalysis |
| Pris per verktyg | $300–400M | ASML |
| EUV-pass per GW AI-chips | ~2 000 000 | SemiAnalysis |
| EUV-verktyg per GW (vid 75 wafers/h, 90% uptime) | ~3,5 | SemiAnalysis |

Varje verktyg kräver 18 multilager-speglar från Carl Zeiss (<1 000 anställda på detta), en EUV-källa från Cymer (San Diego) som skjuter tenndropppar med laser tre gånger i följd, och ett rekylsteg som rör sig med 9G. Leveranskedjan omfattar >10 000 underleverantörer.

**Varför kan de inte skala snabbare?**

- Halvledarindustrin är **inte AGI-pilled** — ASML, Zeiss och TSMC tror inte på de efterfrågenivåer som AI-labben ser
- Tillverkningen är "artisanal" — hundratals enheter per år, inte tiotusentals
- Sub-nanometer-precision i varje komponent; alla fel stackar
- Verktygen byggs i Eindhoven, demonteras, flygs till kund, återmonteras — månaders process
- Expansion av leveranskedjan tar år, inte månader

**Konsekvens för Sverige**: I en värld med ett hårt produktionstak om ~100 GW AI-chips per år (2030) konkurrerar alla om samma pool. Sverige kan inte anta att kapacitet "finns" — den måste **säkras aktivt**, och tidigt.

### 2.2 Minnescrunch — den dolda krisen

| Parameter | Värde | Källa |
|-----------|-------|-------|
| Andel av hyperscalar-capex → minne | ~30% | SemiAnalysis |
| DRAM-prisökning sedan 2025 | ~3x | SemiAnalysis |
| HBM bandbredd vs DDR per chip-edge | ~20x | SemiAnalysis |
| Smartphone-volymer (prognos 2027 vs 2024) | –40% | SemiAnalysis |
| iPhone prisökning pga minnescrunch | ~$250/enhet | SemiAnalysis (BOM-analys) |
| Nya minnesfabriker online | Sent 2027–2028 | SemiAnalysis |

Minnestillverkarna (SK Hynix, Samsung, Micron) byggde inga nya fabriker 2022–2024 — de förlorade pengar 2023. Nu tar nya fabriker 2 år att bygga. Resultat: **smartphone-volymer halveras** eftersom AI-chips betalar mer per wafer.

**Konsekvens**: HBM4 för Rubin kräver ~170 000 DRAM-wafers per GW. Minnesbristen driver upp priset på alla AI-acceleratorer. Kostnadsantagandena i modellen (A40–A42) är **för optimistiska**.

### 2.3 TSMC-logik — fullbokat

| Parameter | Värde | Källa |
|-----------|-------|-------|
| NVIDIA:s andel av N3-kapacitet 2027 | ~70%+ | SemiAnalysis |
| Google TPU v7 wafer-ökning Q3 2025 | Så snabb att TSMC krävde förklaring | SemiAnalysis |
| Apple:s andel av TSMC-intäkter | Sjunkande — AI tar över | SemiAnalysis |
| TSMC:s marginal på HPC vs mobil | Högre på HPC → de prioriterar AI | SemiAnalysis |

TSMC:s 3nm-kapacitet är i princip fullbokad. Google "vaknade" sent 2025 och försökte köpa mer — fick svaret "vi kan jobba på 2027." NVIDIA säkrade kapacitet **innan** Google och Amazon genom att lägga icke-annullerbara förbeställningar med depositioner.

**Konsekvens**: Leveranstider för AI-chips mäts i **år**, inte månader. Sverige kan inte planera att köpa kapacitet 2028 om beslutet tas 2027.

### 2.4 Energi — lösbart men relevant

Energi är **inte** det ultimata taket (chips är det), men kontexten är viktig:

| Parameter | Värde | Källa |
|-----------|-------|-------|
| Inkrementell AI-datacenterkapacitet USA 2026 | ~20 GW | SemiAnalysis |
| Energikällor för nya datacenter | 16+ typer av gasdrivna generatorer, bränsleceller, sol+batteri | SemiAnalysis |
| Behind-the-meter capex | Upp till $3 500/kW (2x traditionell) | SemiAnalysis |
| Energi som andel av GPU TCO | ~10–15% | SemiAnalysis |
| Datorer som andel av US elnät 2028 | ~10% | SemiAnalysis |

USA bygger ut med allt från kombinerade gasturbiner till **skeppsmotorer** (Nebius för Microsoft i New Jersey) och Bloom Energy-bränsleceller. Marknaden accepterar 2–3x dyrare energi per kW — för att GPU:ns värde är så högt att 10 cent/timme i energikostnad är irrelevant jämfört med $2,40/h GPU-kostnad.

**Sveriges komparativa fördel:**

| Faktor | Sverige | USA (typisk) | Fördel |
|--------|---------|--------------|--------|
| Elpris | 0,30–0,80 SEK/kWh | 0,80–2,00 SEK/kWh | ~2x billigare |
| PUE | 1,10–1,25 | 1,30–1,60 | 15–25% effektivare |
| Fossilfritt | ~95%+ | ~40–60% | Regulatorisk fördel |
| Kyla | Naturlig 9–11 mån/år | Energikrävande | Lägre driftkostnad |

Men: **billig el utan GPU:er är som en tom fabrik med bra belysning**. Fördelen realiseras bara med fysisk hårdvara.

---

## 3. Varför 15 interaktioner/dag × 2 000 tokens är fel

### 3.1 Agentisk AI har redan förändrat compute-profilen

Beräkningsmodellens Tier 1 antar copilot-användning: 15 frågor/dag × 2 000 tokens = **30 000 tokens/dag** per användare (A18–A19).

Den typ av AI som driver Anthropics $6 mdr/månad intäktsökning är inte chatbots — det är **agentisk AI**: autonoma system som arbetar i timmar, skriver kod, utreder ärenden, analyserar dokument. En enda Claude Code-session kan använda 100 000–1 000 000 tokens.

| Användningsmönster | Tokens/uppgift | Uppgifter/dag | Tokens/dag | vs. A18–A19 |
|--------------------|---------------|---------------|------------|-------------|
| **Nuvarande antagande** | 2 000 | 15 | 30 000 | 1x |
| Agentisk kodning (Claude Code) | 100 000–500 000 | 2–5 | 500 000 | **17x** |
| Agentisk ärendehandläggning | 20 000–100 000 | 5–15 | 500 000 | **17x** |
| Reasoning-analys (utredning, juridik) | 10 000–50 000 | 5–10 | 200 000 | **7x** |
| Bakgrundsagenter (batch, övervakning) | 5 000–20 000 | 50–200 | 1 000 000 | **33x** |
| **Realistisk mix 2029** | | | **~300 000** | **~10x** |

### 3.2 Konsekvens: Tier 1 exploderar

| Parameter | Nuvarande bas (03) | Reviderad (agentisk mix) |
|-----------|--------------------|--------------------------|
| Tokens/dag per användare | 30 000 | 300 000 |
| Aktiva användare 2029 | 225 000 | 300 000 (60% adoption, A16 justerad) |
| Total tokens/dag | 6,75 mdr | 90 mdr |
| GPU-sekunder/dag (vid 3 000 tok/s) | 2,25M | 30M |
| Sustained H100 (8h arbetsdag) | ~78 | ~1 040 |
| Med peak, redundans, modell-overhead (×6) | ~470 | ~6 200 |
| Med reasoning-overhead (×2 för 2029-modeller) | — | **~12 000** |
| **Tier 1 reviderat (2029)** | **300** | **5 000–15 000** |

### 3.3 GPU-värdet ökar — inte minskar

Podcasten lyfter en kontraintuitiv poäng: **en H100 är värd mer idag än för tre år sedan**. Anledningen: bättre modeller (GPT-5.4, Opus 4.6) extraherar mer värde per GPU. En H100 som kör GPT-5.4 producerar fler tokens av högre kvalitet än samma GPU med GPT-4.

Effektivitetsantagandena (A47–A49) modellerar att behov per uppgift **minskar**. Men verkligheten är att bättre modeller **öppnar nya uppgifter** — samma Jevons paradox som gör att effektivare bilar leder till mer körning, inte mindre.

Blackwell vs Hopper: 2–3x i rena FLOPS men **20x** i verklig inference-prestanda (DeepSeek/Kimi K2.5, SemiAnalysis). Skillnaden beror på nätverksarkitektur, skaldomäner och minnesbandbedd — inte bara transistorer. Framtida GPU-generationer ger enorma prestandalyft, men modellerna absorberar vinsterna.

---

## 4. Reviderat estimat: Botten-upp med globala realiteter

### 4.1 Justerade antaganden

| # | Nuvarande | Reviderat | Motivering |
|---|-----------|-----------|------------|
| A16 | 35–55% adoption 2029 | 50–70% | Anthropic $0→$20B ARR på 2 år visar att adoption accelererar snabbare |
| A18–A19 | 15 int × 2 000 tok = 30K tok/dag | 300K tok/dag (agentisk mix) | Agentisk AI, reasoning, bakgrundsagenter |
| A35 | 500K–2M H100-h för 70B-modell | 2M–10M H100-h för 200B+-modell | Frontier-tröskeln har flyttats; 70B är inte längre competitive |
| A38 | 500–4 000 H100-eq burst | 5 000–20 000 H100-eq burst | RL-tuning kräver massiv compute; frontier kräver mer |
| A42 | $2–4/h moln | $3–6/h moln | Compute-brist driver priser uppåt |
| A50 | 20% årlig netto-ökning | 40–60% årlig netto-ökning | Agentisk AI, Jevons paradox |
| NY | — | Bakgrundsagenter: 200K+ tokens/dag per "agent-slot" | Autonoma agenter för batch-arbete, övervakning, kodgranskning |

### 4.2 Reviderad botten-upp (2029)

| Tier | Nuvarande bas | Reviderat bas | Reviderat hög | Kommentar |
|------|--------------|---------------|---------------|-----------|
| **Tier 1**: Copilots → agenter | 300 | 8 000–12 000 | 25 000 | 10x tokens/dag, högre adoption |
| **Tier 2**: Specialiserad AI | 500 | 3 000–5 000 | 10 000 | Agentisk ärendehandläggning, medicinsk AI i skala |
| **Tier 3**: Finjustering | 300 | 2 000–3 000 | 5 000 | Fler organisationer, större modeller, kontinuerlig RL |
| **Tier 4**: Suverän träning | 2 000 | 15 000–25 000 | 60 000 | 200B+-modeller, RL i skala, känsliga domänmodeller |
| **Infrastruktur-overhead** | — | 2 000–5 000 | 10 000 | Redundans, testmiljöer, forskning |
| **Botten-upp total** | **3 100** | **30 000–50 000** | **110 000** |

### 4.3 Topp-ned-validering

| Metod | Nuvarande bas | Reviderat | Källa |
|-------|--------------|-----------|-------|
| BNP-andel av globalt (0,5% × 500M × 10% offentlig) | 2 400 | 250 000 | GDP-proportionell |
| BNP-andel justerat (5% till offentlig, konservativt) | — | 125 000 | Konservativ GDP |
| Per capita vs Finland LUMI (skalat, 2029-nivå) | 4 000 | 30 000–60 000 | LUMI2-expansion |
| Per capita vs Danmark (skalat, 2029-nivå) | 2 700 | 20 000–40 000 | Gefion + expansion |
| UK AI Strategy skalat (uppreviderat) | 3 500 | 40 000–80 000 | UK £5–10 mdr plan |
| **Topp-ned medel** | **~2 400** | **~40 000–80 000** | |

### 4.4 Storbolagstriangulering (reviderad)

| Jämförelse | Compute | Kommentar |
|------------|---------|-----------|
| xAI Colossus (1 kluster) | 100 000 H100 | Elon Musks **första** kluster |
| Anthropic (slutet 2026) | 5–6 GW ≈ 5–6M H100-eq | **Ett enda AI-lab** |
| Meta (planerad 2026) | 600 000+ GPU:er | Adderar lika mycket som hela 2022-flottan per år |
| **Sveriges offentliga sektor (reviderat bas)** | **30 000–50 000 H100-eq** | ~0,5 Colossus, ~1% av Anthropic |

Det reviderade basscenariot innebär att Sveriges hela offentliga sektor behöver **ungefär hälften av ett enda xAI-kluster** — fortfarande en rundningsdifferens, men nu en som är **rimlig i proportion**.

### 4.5 Reviderad sammanfattning

| År | Nuvarande bas | **Reviderat bas** | Nuvarande hög | **Reviderat hög** |
|----|--------------|-------------------|---------------|-------------------|
| 2026 | 400 | **2 000–3 000** | 800 | **5 000** |
| 2027 | 1 000 | **5 000–8 000** | 2 000 | **15 000** |
| 2028 | 2 000 | **12 000–20 000** | 4 500 | **40 000** |
| 2029 | 3 500 | **30 000–50 000** | 8 000 | **80 000–150 000** |
| 2030 | 5 500 | **50 000–80 000** | 12 000 | **150 000–250 000** |
| 2031 | 8 000 | **80 000–120 000** | 18 000 | **200 000–400 000** |

---

## 5. Reviderad kostnads- och effektöversättning

### 5.1 Kostnader (reviderat basscenario 2029)

| Mått | Nuvarande bas | Reviderat bas | Enhet |
|------|--------------|---------------|-------|
| H100-eq | 3 500 | 30 000–50 000 | H100-eq |
| Fysiska GPU:er (Rubin-gen, ~5x) | ~900 | ~6 000–10 000 | GPU:er |
| Årskostnad (hybrid, 270–380 KSEK/eq/år) | ~770 MSEK | ~8 000–19 000 MSEK | MSEK/år |
| Kumulativ 5-årskostnad | ~3 500 MSEK | ~35 000–75 000 MSEK | MSEK |

### 5.2 Effektbehov

| Mått | Nuvarande bas | Reviderat bas | Reviderat hög | Enhet |
|------|--------------|---------------|---------------|-------|
| H100-eq 2029 | 3 500 | 40 000 | 100 000 | H100-eq |
| kW per H100-eq (2029, facility) | 0,8 | 0,8 | 0,8 | kW |
| **Facility power** | **~3 MW** | **~32 MW** | **~80 MW** | **MW** |
| PUE 1,2 → IT-last | ~2,5 MW | ~27 MW | ~67 MW | MW |

32 MW motsvarar ett **medelstort datacenter** — jämförbart med Facebooks datacenter i Luleå (initial kapacitet ~40 MW, nu expanderat). 80 MW (hög) är fortfarande en bråkdel av de GW-skaliga datacenter som byggs i USA.

### 5.3 Kostnadsperspektiv: fortfarande en rimlig investering

| Jämförelse | Kostnad |
|------------|---------|
| Reviderat bas (5 år, ~50 000 MSEK) | ~10 000 MSEK/år |
| Statliga myndigheters IT-kostnad (A9) | ~12–15 mdr SEK/år |
| Total offentlig IT-budget | ~25–30 mdr SEK/år |
| Sveriges BNP | ~6 500 mdr SEK |
| **AI-compute som andel av offentlig IT** | **~30–40%** |
| **AI-compute som andel av BNP** | **~0,15%** |

~10 mdr SEK/år är mycket pengar. Men det är ~0,15% av BNP i en ekonomi som avsätter ~50% av BNP till offentlig sektor. Om AI levererar ens 5% produktivitetsvinst i offentlig förvaltning (~30 mdr SEK/år i besparingar vid 600 mdr personalkostnad) är investeringen lönsam med bred marginal.

---

## 6. Försörjningsrisk: Sverige måste agera 2026 — inte 2028

### 6.1 I en compute-begränsad värld blir små köpare utkonkurrerade

Från podcasten:
- Anthropic — $20 mdr ARR — **kan inte få tillräckligt med compute**
- De tvingas gå till "lägre kvalitets"-leverantörer och betala $2,40/h istället för $1,40/h
- Google sålde TPU-kapacitet till Anthropic **innan de insåg att de behövde den själva** — sedan var det för sent att köpa tillbaka
- NVIDIA allokerar kapacitet till aktörer som tecknar **icke-annullerbara 5-årsavtal med förskottsbetalning**
- OpenAI har kontrakt med allt från CoreWeave till **SoftBank Energy, som aldrig byggt ett datacenter**

**Implikation**: I denna marknad är en svensk offentlig aktör med LOU-krav, årsvisa budgetcykler och ingen historia av GPU-inköp i princip **osynlig**. Kapacitet kommer inte att finnas tillgänglig "när budgeten väl godkänns".

### 6.2 Tidslinje

| Händelse | Datum |
|----------|-------|
| TSMC 3nm fullbokad 2027 | Nu |
| Nya minnesfabriker online | Sent 2027–2028 |
| NVIDIA Rubin i volym | 2027 |
| Nuvarande analysens "inflektionspunkt" | 2028–2029 |
| **Om Sverige startar LOU-upphandling 2027** | **Leverans ~2029** |
| **Om Sverige startar avsiktsförklaring 2026** | **Leverans ~2027–2028** |

### 6.3 NVIDIA:s allokeringsstrategi och varför den spelar roll

NVIDIA frakturerar medvetet den komplementära industrin — de allokerar chips till många neoclouds för att behålla sin förhandlingsmakt. Men: de **prioriterar** kunder som:
1. Tecknar 3–5-årsavtal
2. Betalar depositioner
3. Har befintliga datacenter redo
4. Köper hela ekosystemet (GPU + nätverk + mjukvara)

Sverige behöver en **samlad aktör** (NAISS/AI Sweden/DIGG) med mandat att agera som en enda kund — inte 290 kommuner som var och en försöker upphandla sin egen GPU.

---

## 7. Politiska implikationer: Tre nivåer av ambition (reviderat)

Det nuvarande ramverkets tre nivåer (låg/bas/hög) motsvarar i den reviderade analysen:

| Nivå | Nuvarande namn | H100-eq 2029 | Faktisk innebörd |
|------|---------------|--------------|------------------|
| Nuvarande "bas" | Pragmatisk | 3 500 | **Marginell AI-adoption** — chatbots, inte transformation |
| Reviderat bas | **Nationell AI-infrastruktur** | 30 000–50 000 | Agentisk AI i bred användning, suverän modellkapacitet, forskningsinfrastruktur |
| Reviderat hög | **Strategisk paritet** | 80 000–150 000 | I linje med vad jämförbara länder investerar per capita; kapacitet för frontier-nära modeller |

### Vad det reviderade basscenariot ger:
- **~300 000 offentliganställda** med daglig tillgång till agentisk AI (inte bara chatbot)
- **Suverän träning** av 200B+-modeller anpassade för svenska, juridik, vård
- **Forskningsinfrastruktur** som möjliggör att svenska universitet och myndigheter bidrar till — inte bara konsumerar — AI-utveckling
- **~6 000–10 000 fysiska GPU:er** (Rubin-generation) i ett nationellt datacenter om ~30 MW
- **Driftkostnad ~10 mdr SEK/år** — betydande men <1% av offentliga utgifter

### Vad det nuvarande basscenariot ger:
- Chatbot-nivå AI för ~225 000 användare
- **Ingen** meningsfull suverän träning i global skala
- **Ingen** konkurrenskraftig forskningsinfrastruktur
- **900 fysiska GPU:er** — mindre än vad ett medelstort neocloud-startup har

---

## 8. Slutsats

### Storleksordningsfelet

Det nuvarande basscenariot (3 500 H100-eq) utgår från en värld där AI är ett **produktivitetsverktyg** — ett bättre Word, en smartare sökmotor. Den globala marknaden prissätter AI som en **transformativ teknologi** som ersätter hela arbetsflöden. Skillnaden är inte 2x — den är 10x.

| Dimension | Nuvarande analys | Verkligheten Q1 2026 |
|-----------|-----------------|---------------------|
| Global compute-marknad | Stor men hanterbar | $1 biljon/år, strukturell brist |
| AI-adoption | Gradvis S-kurva 2028–2029 | Exponentiell — $6 mdr/mån intäktsökning |
| GPU-tillgänglighet | Köps vid behov | Allokerat 1–2 år i förväg; priser stiger |
| Användningsmönster | Chatbot (30K tok/dag) | Agentisk AI (300K+ tok/dag) |
| Halvledarförsörjning | Implicit obegränsad | Hårt tak: ASML ~70–100 EUV/år |
| Minnesmarknad | Stabil | Priser 3x; smartphones –40% |
| H100-priser | $2–4/h (sjunkande) | $2,40/h (stigande) |
| Värdet per GPU | Sjunker med tid | Stiger — bättre modeller = mer värde/GPU |

### Tre uppgraderade rekommendationer

**1. Höj basscenario till 30 000–50 000 H100-eq (2029)**

Det nuvarande basscenariot (~3 500) är ett lågscenario som förutsätter chatbot-nivå användning och begränsad suverän ambition. Ett realistiskt basscenario kring 30 000–50 000 H100-eq motsvarar ~30 MW — ett medelstort datacenter, jämförbart med befintlig nordisk infrastruktur (Facebook Luleå). Kostnaden (~10 mdr SEK/år) är ~0,15% av BNP — i linje med vad en AI-transformation av offentlig sektor borde kosta.

**2. Ge mandat att teckna avtal under 2026**

I en marknad där även Anthropic med $20 mdr ARR kämpar om compute-kapacitet, och NVIDIA prioriterar aktörer med fleråriga icke-annullerbara avtal, måste Sverige agera **nu**. En samlad aktör (NAISS/AI Sweden) behöver mandat att teckna avsiktsförklaringar, lägga depositioner och förhandla direkt med NVIDIA/AMD/molnleverantörer — **parallellt** med LOU-processen.

**3. Planera för ett nationellt AI-datacenter i GW-beredskap**

Sveriges billiga fossilfria el och naturliga kylning är en **globalt unik** komparativ fördel. Men den realiseras bara med fysisk hårdvara. Sverige bör planera för ett nationellt datacenter med initialt ~30 MW (reviderat bas) och möjlighet att skala till ~100 MW+ (reviderat hög). Lokalisering nära befintlig elinfrastruktur (norra Sverige) med koppling till Arrhenius/NAISS.

---

### Spårbarhet

Alla påståenden om den globala marknaden bygger på SemiAnalysis-data (Dylan Patel, mars 2026), hyperscalarnas kvartalsrapporter Q4 2025/Q1 2026, och Epoch AI. Analysramverket (triangulering, intervall, spårbara antaganden) följer [01-ramverk.md](01-ramverk.md). Reviderade antaganden bör formaliseras som A51–A65 i [02-antaganden-och-data.md](02-antaganden-och-data.md) vid nästa uppdatering.

---

*Tillägg mars 2026. Bör läsas som motargument till [03-berakningsmodell.md](03-berakningsmodell.md) och [06-sammanfattning.md](06-sammanfattning.md).*
