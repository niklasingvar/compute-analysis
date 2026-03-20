# 03 – Beräkningsmodell

Tre oberoende trianguleringsspår som korsvalideras.

---

## Spår 1: Botten-upp (användningsfall × adoption × compute/enhet)

### Tier 1: Grundläggande LLM-inference (copilots)

**2029 basscenario** (detaljerad härledning):

| Parameter | Värde | Antagande |
|-----------|-------|-----------|
| Adresserbar population | 500 000 | A13 |
| Adoptionsgrad 2029 | 45% | A16 (medel) |
| Aktiva användare | 225 000 | |
| Interaktioner/dag | 15 | A18 (medel) |
| Tokens per interaktion | 2 000 | A19 (medel) |
| Total tokens/dag | 6,75 miljarder | |
| Inference-throughput per H100 | 3 000 tokens/s | A20 (medel, batch-inference) |
| GPU-sekunder/dag | 2 250 000 | 6,75 × 10⁹ / 3 000 |
| Under 8h arbetsdag (28 800s) | ~78 H100 sustained | |
| Peak-faktor (×1,5) | ~117 H100 | Kontorstimmar har peaks |
| Redundans (×1,3) | ~152 H100 | Failover, underhåll |
| Modellstorlek-overhead (×2) | ~305 H100 | Framtidens modeller är större; mixture-of-experts kräver mer VRAM |
| **Tier 1 bas 2029** | **~300 H100-eq** | |

**Spann**: 150-600 H100-eq (låg: lägre adoption, effektivare modeller; hög: snabbare adoption, större modeller)

### Tier 1 tidsserie:

| År | Aktiva användare (bas) | H100-eq (låg) | H100-eq (bas) | H100-eq (hög) |
|----|----------------------|----------------|----------------|----------------|
| 2026 | 35 000 | 20 | 50 | 120 |
| 2027 | 75 000 | 50 | 110 | 250 |
| 2028 | 140 000 | 100 | 200 | 500 |
| 2029 | 225 000 | 150 | 300 | 600 |
| 2030 | 300 000 | 200 | 450 | 900 |
| 2031 | 375 000 | 250 | 550 | 1 100 |

*Not: Effektivitetsförbättringar (A47-A49) motverkas delvis av större modeller och rikare interaktioner.*

---

### Tier 2: Specialiserad inference

**Medicinsk bildanalys (2029 bas):**

| Parameter | Värde | Antagande |
|-----------|-------|-----------|
| Undersökningar/år | 9 000 000 | A22 |
| AI-adoption 2029 | 40% | Estimat |
| AI-analyserade undersökningar | 3 600 000 | |
| GPU-sekunder per undersökning | 15 | A23 (medel) |
| Total GPU-sekunder/år | 54 000 000 | |
| Fördelat över 250 arbetsdagar × 10h | 6 GPU-s/s | |
| **Sustained H100-eq** | **~6** | Relativt lite i sustained |
| Peak (batch-körningar, rapport) | ~20-50 | Burst vid nattlig batch |

**Komplexa resonemangsuppgifter (2029 bas):**

| Parameter | Värde | Antagande |
|-----------|-------|-----------|
| Ärenden/år | 300 000 | A24 (medel) |
| GPU-sekunder per ärende | 30 | A25 (medel, chain-of-thought) |
| Total GPU-sekunder/år | 9 000 000 | |
| **Sustained H100-eq** | **~1** | |
| Burst/peak | ~10-30 | |

**Geospatial + bedrägeri + övrig domän-AI (2029 bas):**

| Domän | Dedikerad kapacitet (H100-eq) | Antagande |
|-------|-------------------------------|-----------|
| Geospatial (Lantmäteriet, MSB) | 50-200 | A26 |
| Bedrägeridetektering (Skatteverket, FK) | 20-100 | A27 |
| Klimat/miljömodellering | 20-50 | Uppskattning |
| Övrig specialiserad AI | 30-100 | Uppskattning |

**Tier 2 tidsserie:**

| År | H100-eq (låg) | H100-eq (bas) | H100-eq (hög) |
|----|----------------|----------------|----------------|
| 2026 | 30 | 80 | 200 |
| 2027 | 60 | 150 | 400 |
| 2028 | 120 | 300 | 800 |
| 2029 | 200 | 500 | 1 200 |
| 2030 | 350 | 800 | 2 000 |
| 2031 | 500 | 1 100 | 3 000 |

---

### Tier 3: Finjustering och anpassning

**2029 basscenario:**

| Parameter | Värde | Antagande |
|-----------|-------|-----------|
| Organisationer som finjusterar | 80 | A28 (medel 2029) |
| Jobb per organisation per år | 6 | A30 (medel) |
| GPU-timmar per jobb | 200 | A29 (medel) |
| Total GPU-timmar/år | 96 000 | |
| RAG/embedding per organisation | 30 GPU-h × 80 | A31 |
| Total inkl. RAG | ~100 000 GPU-h/år | |
| Fördelat over 8 760 timmar | ~11 sustained H100-eq | |
| Burst-kapacitet (jobb körs i dagar, inte året runt) | **~100-300 H100-eq burst** | A32 |

**Tier 3 tidsserie (burst-kapacitet):**

| År | H100-eq (låg) | H100-eq (bas) | H100-eq (hög) |
|----|----------------|----------------|----------------|
| 2026 | 30 | 70 | 150 |
| 2027 | 50 | 120 | 300 |
| 2028 | 80 | 200 | 500 |
| 2029 | 100 | 300 | 700 |
| 2030 | 150 | 400 | 1 000 |
| 2031 | 200 | 550 | 1 400 |

---

### Tier 4: Suverän träning

**2029 basscenario:**

| Parameter | Värde | Antagande |
|-----------|-------|-----------|
| Svensk 70B-grundmodell | 1 körning × 1 000 000 H100-h | A35 (medel) |
| Känslig-data-modeller (hälsa, juridik) | 2 körningar × 200 000 H100-h | A39 |
| Total H100-timmar/år | ~1 400 000 | |
| Om körning pågår i 4 månader | ~1 450 H100 sustained under perioden | |
| Annualiserat (4 av 12 månader aktiv) | **~500 H100-eq årsmedeltal** | |
| **Burst peak** | **~1 500-2 000 H100-eq** | Under aktiv träning |

Hög-scenariot inkluderar: 200B-modell + multimodala modeller + fler domänmodeller → 2 000-4 000 H100-eq burst.

**Tier 4 tidsserie (burst-kapacitet):**

| År | H100-eq (låg) | H100-eq (bas) | H100-eq (hög) |
|----|----------------|----------------|----------------|
| 2026 | 100 | 200 | 400 |
| 2027 | 300 | 600 | 1 000 |
| 2028 | 600 | 1 200 | 2 500 |
| 2029 | 1 000 | 2 000 | 4 500 |
| 2030 | 1 500 | 3 000 | 7 000 |
| 2031 | 2 000 | 4 500 | 10 000 |

---

### Botten-upp summering

| År | Tier 1 | Tier 2 | Tier 3 | Tier 4 | **Total (bas)** | Låg | Hög |
|----|--------|--------|--------|--------|-----------------|-----|-----|
| 2026 | 50 | 80 | 70 | 200 | **400** | 180 | 870 |
| 2027 | 110 | 150 | 120 | 600 | **980** | 460 | 1 950 |
| 2028 | 200 | 300 | 200 | 1 200 | **1 900** | 900 | 4 300 |
| 2029 | 300 | 500 | 300 | 2 000 | **3 100** | 1 450 | 7 000 |
| 2030 | 450 | 800 | 400 | 3 000 | **4 650** | 2 200 | 10 900 |
| 2031 | 550 | 1 100 | 550 | 4 500 | **6 700** | 2 950 | 15 500 |

---

## Spår 2: Topp-ned (internationella jämförelser)

### Metod A: EU AI Factories-allokering

EU:s AI Factories-initiativ planerar €2-3 miljarder i AI-infrastruktur. Sveriges BNP-andel av EU ≈ 3,4%, befolkningsandel ≈ 2,3%.

| Fördelningsnyckel | Sveriges andel | Motsvarar (H100-eq) |
|--------------------|---------------|---------------------|
| BNP-andel (3,4%) | ~€70-100M | ~2 000-3 000 H100-eq kapacitet |
| Befolkningsandel (2,3%) | ~€50-70M | ~1 500-2 000 H100-eq kapacitet |
| Nuvarande EuroHPC-andel | ~€30-50M | ~1 000-1 500 H100-eq (konservativt) |

*Konvertering: €1M ≈ 12-15 H100 i årskapacitet (hybridmodell moln+on-prem)*

### Metod B: UK AI Strategy skalning

UK planerar ~£1-2,5 mdr i offentlig AI-infrastruktur. Sverige ≈ 15% av UK:s arbetsstyrka.

| UK-investering | Skalat till Sverige (15%) | H100-eq |
|----------------|--------------------------|---------|
| £1 mdr (låg) | ~1 500 MSEK | ~2 000-3 000 |
| £2,5 mdr (hög) | ~3 750 MSEK | ~5 000-8 000 |

### Metod C: AI som andel av IT-budget

| År | IT-budget (mdr SEK) | AI-andel | AI-budget (MSEK) | H100-eq (vid 200 KSEK/GPU/år) |
|----|---------------------|----------|-------------------|-------------------------------|
| 2026 | 27 | 2% | 540 | ~700 |
| 2029 | 30 | 8% | 2 400 | ~3 000-4 000 |
| 2031 | 33 | 13% | 4 300 | ~5 500-7 000 |

*Not: AI-budget inkluderar mer än compute (personal, licenser, data). Compute ≈ 40-60% av AI-budget.*

Justerat för compute-andel:

| År | H100-eq (låg, 40%) | H100-eq (bas, 50%) | H100-eq (hög, 60%) |
|----|--------------------|--------------------|---------------------|
| 2026 | 280 | 350 | 420 |
| 2029 | 1 200 | 1 750 | 2 400 |
| 2031 | 2 200 | 3 250 | 4 200 |

### Metod D: Nordisk jämförelse

| Land | Befolkning (vs SE) | Känd AI-compute | Skalat till Sverige |
|------|--------------------|-----------------|---------------------|
| Finland (LUMI) | 0,53x | ~5 000 H100-eq GPU-partition | ~9 400 (men inkl. forskning) |
| Danmark (Gefion) | 0,57x | ~1 528 H100 | ~2 700 (enbart Gefion) |

Justerat: Finlands LUMI betjänar hela EuroHPC + forskning, inte bara offentlig sektor. Danmarks Gefion är privat-offentligt partnerskap. Rensat för enbart offentlig sektor: 1 500-4 000 H100-eq.

### Topp-ned sammanfattning (2029):

| Metod | Låg | Bas | Hög |
|-------|-----|-----|-----|
| EU AI Factories | 1 000 | 2 000 | 3 000 |
| UK-skalning | 2 000 | 3 500 | 8 000 |
| IT-budget-andel | 1 200 | 1 750 | 2 400 |
| Nordisk jämförelse | 1 500 | 2 500 | 4 000 |
| **Topp-ned medel** | **~1 400** | **~2 400** | **~4 300** |

---

## Spår 3: Storbolagstriangulering

### Vad kostar frontier-modellerna?

| Bolag/Modell | Estimerad träningskostnad | GPU-kapacitet | Källa |
|--------------|--------------------------|---------------|-------|
| OpenAI GPT-4 | $100M+ | ~25 000 A100, ~3 månader | Semianalysis, WSJ |
| Meta Llama 2 70B | ~$20-30M (compute) | 1,7M A100-h | Meta Research |
| Meta Llama 3 405B | ~$100-200M (compute) | 30M+ GPU-h | Meta, uppskattningar |
| Anthropic Claude (frontier) | ~$200M-$1B per körning | Tiotusentals H100 | Finansieringsdata, mediarapporter |
| xAI Colossus (infrastruktur) | ~$3-4 mdr (infra) | 100 000 H100 | Elon Musk, The Information |
| Google Gemini Ultra | ~$100M+ (compute) | Tusentals TPU v4/v5 | Google, uppskattningar |

### Vad behöver Sveriges offentliga sektor?

**Sverige behöver INTE träna frontier-modeller från scratch.** Men Sverige behöver:

#### a) Köra inference på frontier-modeller i stor skala
- Att servera 1,2 miljoner offentliganställda med AI-copilots kostar ungefär **1/100 till 1/10** av en enda frontier-träningskörning per år [se Tier 1-beräkning]
- Bas 2029: ~300 H100-eq sustained inference ≈ ~$50-100M/år i compute ≈ en liten bråkdel av GPT-4:s träningskostnad

#### b) Finjustera modeller för svenska behov
- Finjustering av 70B-modell: ~50-500 H100-timmar per jobb [A29]
- Totalt ~100 000 GPU-h/år ≈ ~$0,5-2M/år
- = cirka **1/100 av Llama 2:s träning**, upprepat varje år

#### c) Träna svenska grundmodeller (70B-skala)
- En GPT-SW3-efterträdare på 70B: ~1 000 000 H100-timmar [A35]
- Kostnad: ~$50-150M per träningskörning
- = ungefär **en halv GPT-4-träning** eller **1/3 av Llama 3 405B**
- Detta är den enskilt största posten, men den är episodisk

#### d) Modeller för känsliga data (suveränitetskrav)
- Hälsodata, rättsdata, underrättelsedata (civilt) kräver svenska modeller
- ~200 000-1 000 000 H100-h/år beroende på ambition [A39]

### Nyckelinsikt: Storbolagsjämförelsen

> **Sveriges hela offentliga sektors totala 5-åriga compute-behov (basscenario ~17 000 H100-eq-år kumultivt) motsvarar ungefär vad ETT storbolag spenderar på EN ENDA frontier-träningskörning.**

Uppställning:
- Offentlig sektor 2026-2031 kumulativt: ~17 000 H100-eq-år × ~$30K/GPU-år ≈ **~$500M totalt** (bas)
- xAI Colossus: 100 000 H100 × 1 år = 100 000 H100-år → redan ~$3 mdr bara i infrastruktur
- Anthropics totala kapital: >$10 mdr, varav betydande del till compute
- Metas GPU-plan: 600 000+ GPU:er

**Politisk slutsats**: Den investering Sverige behöver göra är en rundningsdifferens jämfört med vad enskilda techbolag investerar. Att *inte* investera innebär att offentlig sektor blir helt beroende av utländska molntjänster för kritisk infrastruktur.

### Storbolagsspårets estimat (2029):

Baserat på ovanstående back-calculation:

| Komponent | H100-eq (bas 2029) | Kostnad (MSEK/år) |
|-----------|--------------------|--------------------|
| Inference-kapacitet (a) | 800 | 200-400 |
| Finjustering (b) | 300 | 50-100 |
| Suverän träning (c+d) | 2 000 (burst) | 300-600 |
| **Total** | **~3 100** | **~550-1 100** |

---

## Triangulering: Konvergens

### 2029-estimat jämförelse:

| Spår | Låg | Bas | Hög |
|------|-----|-----|-----|
| Botten-upp | 1 450 | 3 100 | 7 000 |
| Topp-ned | 1 400 | 2 400 | 4 300 |
| Storbolag | 1 200 | 3 100 | 6 000 |
| **Syntes** | **~1 350** | **~2 900** | **~5 800** |

Bas-scenarierna konvergerar väl kring **~2 500-3 500 H100-eq för 2029**. Topp-ned ger ett något lägre tal, vilket är rimligt – internationella investeringar inkluderar inte alltid alla dimensioner vi fångar botten-upp.

**Kompletterande sanity check — tokens per capita**: En alternativ topp-ned-modell baserad på ~250 000 tokens/capita/dag (hela Sveriges befolkning, moget AI-scenario 2030) ger ~35 000–50 000 H100-eq *nationellt*. Isolerat till offentlig sektor (~15–20% med hög AI-intensitet) motsvarar det ~5 000–10 000 H100-eq — i linje med hög-scenariot. Denna modell inkluderar inte Tier 4 (träning) men fångar effekten av resonerangsmodeller med hög token-volym. Fullständig härledning: [11-kompletterande-perspektiv.md](11-kompletterande-perspektiv.md).

### Kombinerat estimat (slutligt):

| År | Låg | Bas | Hög | Enhet |
|----|-----|-----|-----|-------|
| 2026 | 200 | 400 | 800 | H100-eq |
| 2027 | 500 | 1 000 | 2 000 | H100-eq |
| 2028 | 1 000 | 2 000 | 4 500 | H100-eq |
| 2029 | 1 500 | 3 500 | 8 000 | H100-eq |
| 2030 | 2 500 | 5 500 | 12 000 | H100-eq |
| 2031 | 3 500 | 8 000 | 18 000 | H100-eq |

*Bas justeras uppåt från ren botten-upp-beräkning för att reflektera att suverän träning sannolikt accelererar (politiskt tryck, EU-initiativ).*

---

## Kostnadsöversättning

### Modell: Hybrid moln/on-prem

Antagande: 60% on-prem (egna/delade datacenter), 40% moln (burst, flexibilitet) [optimerat för kostnadseffektivitet].

| Komponent | Kostnad per H100-eq/år |
|-----------|----------------------|
| On-prem (amortering 4 år + drift) | ~150-200 KSEK |
| Moln (reserverade instanser) | ~250-350 KSEK |
| **Vägt snitt (60/40)** | **~190-260 KSEK** |

### Årskostnad (compute):

| År | Bas H100-eq | Kostnad låg (MSEK) | Kostnad bas (MSEK) | Kostnad hög (MSEK) |
|----|------------|--------------------|--------------------|---------------------|
| 2026 | 400 | 60 | 90 | 200 |
| 2027 | 1 000 | 130 | 220 | 500 |
| 2028 | 2 000 | 250 | 440 | 1 100 |
| 2029 | 3 500 | 400 | 770 | 2 000 |
| 2030 | 5 500 | 550 | 1 200 | 3 000 |
| 2031 | 8 000 | 750 | 1 750 | 4 500 |

*Inkluderar compute-kostnad. Personal, mjukvara och data tillkommer separat.*

### Effektbehov:

| År | Bas H100-eq | Facility power (MW) vid PUE 1.25 | Anmärkning |
|----|------------|----------------------------------|------------|
| 2026 | 400 | ~0,4 | Mestadels moln |
| 2027 | 1 000 | ~0,9 | |
| 2028 | 2 000 | ~1,8 | Effektivare GPU:er reducerar per enhet |
| 2029 | 3 500 | ~3,1 | Nyare GPU:er (~B200): ~0,7 kW/H100-eq |
| 2030 | 5 500 | ~4,0 | Post-Blackwell: ~0,5 kW/H100-eq |
| 2031 | 8 000 | ~5,0 | Fortsatt effektivisering |

*Not: Effektbehov per H100-eq minskar över tid genom nya GPU-generationer (A46, A48). Facility power beräknas med successivt lägre W/H100-eq.*

---

## Känslighetsanalys

### Mest inflytelserika parametrar (tornado-diagram):

| Parameter | Effekt på 2029 bas-estimat |
|-----------|---------------------------|
| Adoptionsgrad Tier 1 (A16) | ±30% → 2 200-4 000 H100-eq |
| Suverän tränings-ambition (A38) | ±50% → 2 100-4 100 H100-eq |
| Effektivitetsförbättring (A47-A49) | ±40% → 2 000-4 300 H100-eq |
| Modellstorlek (trend) | ×2 modell = ~+40% Tier 1-2 |
| AI-budget som andel av IT | Tak: 2 400 MSEK (A11 hög) begränsar hög-scen |

### Scenario-sammanfattning:

**Låg** (1 500 H100-eq 2029): Defensivt minimum — långsam adoption, strikt budget, begränsad suverän träning. Drift utan kompetensuppbyggnad.

**Bas** (3 500 H100-eq 2029): Pragmatisk volym — rimlig S-kurva, viss suverän kapacitet, men frontier-AI kommer fortfarande i stor utsträckning från utländska leverantörer.

**Hög** (8 000 H100-eq 2029): Kompetens, innovation och strategisk handlingsfrihet — ambitiös suverän modellträning, förmåga att utbilda, forska och anpassa modeller utan att vara låst till en enda API-leverantör. Strategisk motivering: [08-strategi.md](08-strategi.md).
