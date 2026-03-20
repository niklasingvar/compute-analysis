# Offentlig sektors AI-compute-behov 2026-2031

## Sammanfattning för beslutsfattare

---

### Varför denna analys?

Offentlig sektor behöver AI-beräkningskapacitet för allt från handläggarstöd till suverän modellträning. Frågan "hur mycket?" kan inte besvaras med en enda kalkyl — fältet förändras för snabbt. **Detta dokument sätter därför metoden i centrum:** tre oberoende sätt att uppskatta samma behov. Där de **konvergerar** får vi trovärdighet i **storleksordningen**; där de skiljer sig åt redovisar vi osäkerhet. Siffrorna ges som **intervall** (låg / bas / hög) så att politiken kan välja **ambitionsnivå** — inte bara volym utan också kompetens och handlingsfrihet på egna villkor (utvecklat i [08-filosofi.md](08-filosofi.md)).

---

### Metoden: tre oberoende spår som konvergerar

Detta är analysens **huvudargument**. Ingen enskild metod räcker; tillsammans ger de starkare underlag än en detaljmodell som kan vara känslig för fel antaganden.

**1. Botten-upp (användningsfall × adoption × compute per enhet)**  
Detaljerad beräkning av fyra behovstyper: AI-copilots för ~500 000 kunskapsarbetare, specialiserad AI (vård, bedrägeridetektering), finjustering för svenska behov, samt suverän modellträning. Resultat 2029 (bas): ~3 100 H100-eq.

**2. Topp-ned (internationella jämförelser skalade till Sverige)**  
EU AI Factories, UK:s AI-strategi, Finlands LUMI, Danmarks Gefion m.fl. Nordiska grannar investerar proportionellt mer per capita än Sverige gör idag. Resultat 2029 (bas): ~2 400 H100-eq.

**3. Storbolagstriangulering (back-calculation från kända investeringar)**  
Anthropic, Meta, OpenAI och xAI spenderar $100M–$1B+ per modellträning. Sveriges hela 5-åriga compute-behov (~$500M kumulativt) är jämförbart med **en enda** frontier-träningskörning. Resultat 2029 (bas): ~3 100 H100-eq.

> **Konvergens:** Spånen möts kring **2 500–3 500 H100-eq för 2029** i basscenariot. Det innebär att frågan inte längre primärt är *om* offentlig sektor behöver betydande kapacitet, utan *på vilken ambitionsnivå* den ska dimensioneras — se scenarier och [08-filosofi.md](08-filosofi.md).

---

### Konvergens i siffror: GPU-kapacitet, kostnad och effekt

Tabellen nedan är **resultatet av trianguleringen och känslighetsanalys**, inte en enskild punktprognos.

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

**Låg / bas / hö** motsvarar inte bara "optimistisk pessimism" utan **ambitionsval**: låg ≈ defensivt minimum; bas ≈ pragmatisk volym; hö ≈ satsning på kompetens, suverän modellaktivitet och strategisk handlingsfrihet (se [03-berakningsmodell.md](03-berakningsmodell.md)).

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

### Storbolagsjämförelsen – perspektiv

| Aktör | Compute-investering |
|-------|---------------------|
| xAI (Colossus-kluster) | 100 000 H100 – ett enda kluster |
| Meta (planerad kapacitet) | 600 000+ GPU:er |
| Anthropic (total finansiering) | >$10 mdr, varav merparten till compute |
| **Sveriges offentliga sektor (hela 5-årsbehovet, bas)** | **~3 500 H100-eq peak, ~$500M kumulativt** |

Sveriges samlade behov är en **rundningsdifferens** mot en enda stor lab-investering. Det som krävs är inte en omöjlig budget i internationell jämförelse — det är ett **medvetet strategiskt val** att göra investeringen.

---

### Viktiga osäkerheter (kort)

- **Adoptionshastighet**: S-kurvans inflektionspunkt (2028 eller 2030?) driver det största intervallet.
- **Effektivitetsförbättringar**: Kan minska behov per uppgift — men större modeller har historiskt absorberat vinsterna.
- **Suverän ambition**: Politiska beslut om svensk modellträning avgör hur stor del av behovet (Tier 4) som materialiseras.
- **EU-reglering**: AI Act kan både öka behov av europeisk infra och lägga compliance-last på budget.
- **Budgetverklighet**: Kommuner under press 2025–2027 kan adoptera långsammare.

---

### Slutsats: ambitionsnivå avgör — "tillräcklig volym" räcker inte som enda mål

Trianguleringen ger **konfidens i storleksordningen**: offentlig sektor behöver **betydande** beräkningskapacitet; avfärdande av hela intervallet är svårt att förena med tre oberoende spår.

**Basscenariot** (~3 500 H100-eq 2029) kan tolkas som dimensionering för **rimlig drift och begränsad nationell modellaktivitet**. Det löser många kortsiktiga flaskhalsar men **garanterar inte** att Sverige bygger egen kompetens, forskningsmiljöer och innovationskraft på **egna villkor** — eller att man undviker långsiktigt leverantörsberoende för frontier-AI.

**Högscenariot** (~8 000 H100-eq 2029) ligger närmare vad **internationella jämförelser** skvallrar om när man skalar grannländer till Sverige, och motsvarar ett medvetet val att investera i **kapacitet + kompetens + styrning** (jfr [04-internationella-jamforelser.md](04-internationella-jamforelser.md), syntes).

Den strategiska ramen — konkurrenskraft, **teknisk suveränitet**, rättsliga spänningar vid molntjänster i tredjeland, och varför öppna modeller fortfarande kräver egen infra — utvecklas i **[08-filosofi.md](08-filosofi.md)** med källhänvisningar i [resources/links.md](resources/links.md).

**Kärnan:** Valet mellan bas och hö är i stor utsträckning ett **politiskt beslut om ambition**, inte en teknisk finjustering. Trianguleringen säger att behovet av ordning **finns**; ambitionsnivån avgör om Sverige bara "hänger med" eller bygger varaktig förmåga.

---

### Tre policyrekommendationer (kopplade till ambition)

**1. Investera i en nationell AI-compute-plattform (2026–2027)**  
Gemensam infrastruktur — hybrid moln/on-prem — med **minst ~1 000 H100-eq** initial kapacitet så att piloter och utbildningsmiljöer kan växa **innan** toppbelastning 2028–2029. Samordna via DIGG, Sunet/NAISS, AI Sweden. Kostnad: ~200–400 MSEK initialt, ~200 MSEK/år drift. *Utan denna grund blir högre ambitionsnivå omöjlig att nå i tid.*

**2. Planera för suverän modellträning (beslut 2026, kapacitet 2027–2028)**  
Successor till GPT-SW3 på 70B+-skala kräver ~1 000–2 000 H100-eq burst under 2–4 månader (delbar med inference). Utred Arrhenius (EuroHPC) kontra dedikerad kapacitet. ~100–300 MSEK per stor körning. *Detta är den konkreta länken mellan "volym" och nationell modellförmåga.*

**3. Säkerställ upphandlingsförmåga och ramavtal (2026)**  
LOU (6–18 månader) är den akuta flaskhalsen. Ramavtal för GPU-moln och AI-tjänster möjliggör att **både** bas- och högscenario kan realiseras när behovet materialiseras.

---

### Metodik och spårbarhet

Alla siffror bygger på ~50 numrerade antaganden ([02-antaganden-och-data.md](02-antaganden-och-data.md)), med källa och känslighetsklassning. Full härledning: [03-berakningsmodell.md](03-berakningsmodell.md). Extern validering: [04-internationella-jamforelser.md](04-internationella-jamforelser.md). GPU-specifikationer och ordlista: [07-teknisk-bilaga.md](07-teknisk-bilaga.md). **Strategisk ram och motivering för ambitionsnivå:** [08-filosofi.md](08-filosofi.md). Källlista för policy: [resources/links.md](resources/links.md). Ramverk och trianguleringslogik: [01-ramverk.md](01-ramverk.md).

---

*Analysen är framtagen mars 2026. Alla estimat bör revideras årligen då AI-fältet utvecklas snabbt.*
