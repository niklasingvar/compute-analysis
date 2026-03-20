# Offentlig sektors AI-compute-behov 2026-2031

## Sammanfattning för beslutsfattare

---

### Huvudbudskap

**Sveriges offentliga sektor (exkl. försvar) behöver tillgång till ~3 500 H100-ekvivalenter beräkningskapacitet år 2029, till en årskostnad av 600-1 200 MSEK.** Behovet växer från ~400 GPU-ekvivalenter 2026 till ~8 000 år 2031. Intervallet speglar osäkerhet i adoptionshastighet och ambitionsnivå för suverän modellträning.

Denna investering motsvarar ungefär vad ett enda stort teknikbolag spenderar på en enda modellträning. Att *inte* investera innebär att offentlig sektor blir helt beroende av utländska molntjänster för en alltmer kritisk kapacitet.

---

### Estimat: GPU-kapacitet, kostnad och effekt

| År | Låg | Bas | Hög | Enhet |
|----|-----|-----|-----|-------|
| **2026** | 200 | 400 | 800 | H100-ekvivalenter |
| **2027** | 500 | 1 000 | 2 000 | |
| **2028** | 1 000 | 2 000 | 4 500 | |
| **2029** | 1 500 | **3 500** | 8 000 | |
| **2030** | 2 500 | 5 500 | 12 000 | |
| **2031** | 3 500 | 8 000 | 18 000 | |

| Mått (basscenario 2029) | Värde |
|--------------------------|-------|
| Beräkningskapacitet | ~3 500 H100-ekvivalenter |
| Årskostnad (compute) | ~600-1 200 MSEK |
| Effektbehov (datacenter) | ~3 MW |
| Fysiska GPU:er (B200-generation) | ~900-1 400 |

---

### Tre oberoende spår bekräftar bilden

Estimatet bygger på tre trianguleringsspår som konvergerar:

**1. Botten-upp (användningsfall × adoption × compute per enhet)**
Detaljerad beräkning av fyra behovstyper: AI-copilots för ~500 000 kunskapsarbetare, specialiserad AI (vård, bedrägeridetektering), finjustering av modeller för svenska behov, samt suverän modellträning. Resultat 2029: ~3 100 H100-eq (bas).

**2. Topp-ned (internationella jämförelser skalade till Sverige)**
EU AI Factories, UK:s AI-strategi, Finlands LUMI, Danmarks Gefion – alla skalade till Sveriges storlek. Samtliga nordiska grannar investerar proportionellt mer per capita idag. Resultat 2029: ~2 400 H100-eq (bas).

**3. Storbolagstriangulering (back-calculation från kända investeringar)**
Anthropic, Meta, OpenAI och xAI spenderar $100M-$1B+ per modellträning. Sveriges hela 5-åriga compute-behov (~$500M kumulativt) är jämförbart med en enda frontier-träningskörning. Resultat 2029: ~3 100 H100-eq (bas).

> Spånen konvergerar kring **2 500-3 500 H100-eq för 2029**, vilket ger god konfidens i basscenariot.

---

### Vad driver behovet?

Fyra efterfrågetyper med distinkta profiler:

| Typ | Andel av behov (2029) | Karaktär |
|-----|----------------------|----------|
| **AI-copilots** (sammanfattning, skrivstöd, sökning) | ~10% | Daglig användning, hög volym, låg per fråga |
| **Specialiserad AI** (medicinsk bildanalys, juridik, bedrägeri) | ~15% | Domänspecifik, växande bevisbas |
| **Finjustering** (svenska modeller, myndighetsanpassning) | ~10% | Periodisk, burst-kapacitet |
| **Suverän träning** (svenska grundmodeller, känslig-data-modeller) | ~65% | Episodisk men massiv, politiskt driven |

Suverän modellträning dominerar behovsbilden. Om Sverige väljer att helt förlita sig på utländska modeller halveras compute-behovet – men till priset av strategiskt beroende och begränsad förmåga att hantera känsliga data.

---

### Storbolagsjämförelsen – en tankeväckare

| Aktör | Compute-investering |
|-------|---------------------|
| xAI (Colossus-kluster) | 100 000 H100 – ett enda kluster |
| Meta (planerad kapacitet) | 600 000+ GPU:er |
| Anthropic (total finansiering) | >$10 mdr, varav merparten till compute |
| **Sveriges offentliga sektor (hela 5-årsbehovet, bas)** | **~3 500 H100-eq peak, ~$500M kumulativt** |

Sveriges hela offentliga sektors 5-åriga behov är en rundningsdifferens i denna kontext. Det som krävs är inte en enorm investering i internationell jämförelse – det är ett medvetet strategiskt val att göra den.

---

### Tre policyrekommendationer

**1. Investera i en nationell AI-compute-plattform (2026-2027)**
En gemensam infrastruktur för offentlig sektor – hybrid moln/on-prem – med ~1 000 H100-eq initial kapacitet. Samordna via befintliga strukturer (DIGG, Sunet/NAISS, AI Sweden). Kostnad: ~200-400 MSEK i initial investering, ~200 MSEK/år i drift. Möjliggör omedelbar start för piloter och tidiga adoptörer.

**2. Planera för suverän modellträning (beslut 2026, kapacitet 2027-2028)**
En successor till GPT-SW3 på 70B+-skala kräver ~1 000-2 000 H100-eq burst-kapacitet under 2-4 månader. Denna kapacitet kan delas med inference under övrig tid. Utred om Arrhenius (EuroHPC) kan komplettera, eller om dedikerad kapacitet krävs. Kostnad: ~100-300 MSEK per stor träningskörning.

**3. Säkerställ upphandlingsförmåga och ramavtal (2026)**
LOU-processens längd (6-18 månader) är den mest akuta flaskhalsen. Påbörja ramavtalsupphandlingar för GPU-moln och AI-tjänster omedelbart. Utan redo ramavtal kan varken myndigheter eller kommuner agera när behovet materialiseras 2028-2029.

---

### Viktiga osäkerheter

- **Adoptionshastighet**: S-kurvans inflektionspunkt (2028 eller 2030?) driver det största osäkerhetsintervallet
- **Effektivitetsförbättringar**: Algoritmiska genombrott kan minska compute-behovet med 50% – men historiskt har större modeller absorberat vinsterna
- **Suverän ambition**: Det politiska beslutet om svensk modellträning avgör om Tier 4 (65% av behovet) materialiseras eller ej
- **EU-reglering**: AI Act kan både accelerera (krav driver behov av europeisk infra) och bromsa (compliance-overhead)
- **Budgetverklighet**: Kommuner under ekonomisk press 2025-2027 adopterar långsammare

---

### Metodik och spårbarhet

Alla siffror i denna sammanfattning bygger på ~50 numrerade antaganden (02-antaganden-och-data.md), var och en med källa och känslighetsklassning. Beräkningsmodellen (03-berakningsmodell.md) redovisar fullständig härledning. Internationella jämförelser (04-internationella-jamforelser.md) ger extern validering. Teknisk bilaga (07-teknisk-bilaga.md) innehåller GPU-specifikationer, enhetskonverteringar och ordlista.

---

*Analysen är framtagen mars 2026. Alla estimat bör revideras årligen då AI-fältet utvecklas snabbt.*
