# Offentlig sektors AI-compute-behov 2026-2031

## Sammanfattning för beslutsfattare

---

### Sverige behöver 3 500–8 000 H100-ekvivalenter i AI-kapacitet 2029

Offentlig sektor — myndigheter, regioner, kommuner — behöver beräkningskapacitet för AI-copilots, specialiserad AI inom vård och juridik, finjustering av svenska modeller och suverän modellträning. Tre oberoende analysmetoder (botten-upp, internationella jämförelser, storbolagstriangulering) konvergerar kring samma storleksordning:

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
| Årskostnad (compute) | ~600–1 200 MSEK |
| Effektbehov (datacenter) | ~3 MW |
| Fysiska GPU:er (B200-generation) | ~900–1 400 |

Scenarierna är inte bara tekniska extrapolationer — de är **ambitionsval**:
- **Låg** = defensivt minimum — drift utan kompetensuppbyggnad
- **Bas** = pragmatisk volym, men fortsatt beroende för frontier-AI
- **Hög** = investering i kompetens, innovation och strategisk handlingsfrihet på egna villkor

---

### Konvergensen ger konfidens

Att tre oberoende metoder landar i samma storleksordning gör det svårt att avfärda behovet:

| Spår | Låg | Bas | Hög |
|------|-----|-----|-----|
| Botten-upp | 1 450 | 3 100 | 7 000 |
| Topp-ned (internationella jämförelser) | 1 400 | 2 400 | 4 300 |
| Storbolagstriangulering | 1 200 | 3 100 | 6 000 |
| **Syntes** | **~1 350** | **~2 900** | **~5 800** |

Detaljerad härledning: [03-berakningsmodell.md](03-berakningsmodell.md). Internationell validering: [04-internationella-jamforelser.md](04-internationella-jamforelser.md). Antaganden: [02-antaganden-och-data.md](02-antaganden-och-data.md) (A1–A50).

---

### Vad driver behovet?

| Typ | Andel av behov (2029) | Karaktär |
|-----|----------------------|----------|
| **Suverän träning** (svenska grundmodeller, känslig-data-modeller) | ~65% | Episodisk men massiv, politiskt driven |
| **Specialiserad AI** (medicinsk bildanalys, juridik, bedrägeri) | ~15% | Domänspecifik, växande bevisbas |
| **AI-copilots** (sammanfattning, skrivstöd, sökning) | ~10% | Daglig användning, hög volym, låg per fråga |
| **Finjustering** (svenska modeller, myndighetsanpassning) | ~10% | Periodisk, burst-kapacitet |

Suverän modellträning dominerar. Om Sverige väljer att helt förlita sig på utländska modeller halveras compute-behovet — men till priset av strategiskt beroende och begränsad förmåga att hantera känsliga data.

---

### Perspektiv: en rundningsdifferens globalt

| Aktör | Compute-investering |
|-------|---------------------|
| xAI (Colossus-kluster) | 100 000 H100 — ett enda kluster |
| Meta (planerad kapacitet) | 600 000+ GPU:er |
| Anthropic (total finansiering) | >$10 mdr, varav merparten till compute |
| **Sveriges offentliga sektor (hela 5-årsbehovet, bas)** | **~3 500 H100-eq peak, ~$500M kumulativt** |

Sveriges samlade behov motsvarar vad ett enda AI-lab spenderar på en enda frontier-träningskörning. Den investering som krävs är modest — det som behövs är ett medvetet strategiskt val.

En konkret genomgång av bygga vs. köpa vs. hybrid finns i [09-tanke-exempel.md](09-tanke-exempel.md).

---

### Viktiga osäkerheter

- **Adoptionshastighet**: S-kurvans inflektionspunkt (2028 eller 2030?) driver det största intervallet.
- **Effektivitetsförbättringar**: Kan minska behov per uppgift — men större modeller har historiskt absorberat vinsterna.
- **Suverän ambition**: Politiska beslut om svensk modellträning avgör Tier 4-behovets storlek.
- **EU-reglering**: AI Act kan både öka behov av europeisk infra och lägga compliance-last på budget.
- **Budgetverklighet**: Kommuner under press 2025–2027 kan adoptera långsammare.

---

### Slutsats: ambitionsnivå avgör

Basscenariot (~3 500 H100-eq 2029) ger tillräcklig volym för drift och begränsad nationell modellaktivitet. Det löser kortsiktiga flaskhalsar men **garanterar inte** att Sverige bygger egen kompetens, forskningsmiljöer och innovationskraft på egna villkor — eller att man undviker långsiktigt leverantörsberoende.

Högscenariot (~8 000 H100-eq 2029) ligger närmare vad jämförbara länder investerar per capita och motsvarar ett medvetet val att investera i **kapacitet + kompetens + styrning**.

Valet mellan bas och hög är i stor utsträckning ett **politiskt beslut om ambition**, inte en teknisk finjustering. Den strategiska ramen — konkurrenskraft, teknisk suveränitet, leverantörsberoende och varför "tillräcklig volym" inte räcker — utvecklas i [08-strategi.md](08-strategi.md).

---

### Tre rekommendationer

**1. Investera i en nationell AI-compute-plattform (2026–2027)**
Gemensam infrastruktur — hybrid moln/on-prem — med **minst ~1 000 H100-eq** initial kapacitet så att piloter och utbildningsmiljöer kan växa innan toppbelastning 2028–2029. Samordna via DIGG, Sunet/NAISS, AI Sweden. Kostnad: ~200–400 MSEK initialt, ~200 MSEK/år drift.

**2. Planera för suverän modellträning (beslut 2026, kapacitet 2027–2028)**
Successor till GPT-SW3 på 70B+-skala kräver ~1 000–2 000 H100-eq burst under 2–4 månader. Utred Arrhenius (EuroHPC) kontra dedikerad kapacitet. ~100–300 MSEK per stor körning.

**3. Säkerställ upphandlingsförmåga och ramavtal (2026)**
LOU (6–18 månader) är den akuta flaskhalsen. Ramavtal för GPU-moln och AI-tjänster möjliggör att både bas- och högscenario kan realiseras när behovet materialiseras.

---

### Spårbarhet

Alla siffror bygger på ~50 numrerade antaganden ([02](02-antaganden-och-data.md)), med källa och känslighetsklassning. Full härledning: [03](03-berakningsmodell.md). Internationell validering: [04](04-internationella-jamforelser.md). GPU-specifikationer och ordlista: [07](07-teknisk-bilaga.md). Strategisk ram: [08](08-strategi.md). Policykällor: [resources/links.md](resources/links.md). Bygga vs. köpa: [09](09-tanke-exempel.md). Ramverk: [01](01-ramverk.md).

---

*Analysen är framtagen mars 2026. Alla estimat bör revideras årligen då AI-fältet utvecklas snabbt.*
