# Offentlig sektors AI-compute-behov 2026-2031

## Abstract

Sveriges offentliga sektor (exkl. försvar) behöver **3 500–8 000 H100-ekvivalenter** i AI-beräkningskapacitet 2029, beroende på ambitionsnivå. Kostnaden — ~600–2 000 MSEK/år — är en rundningsdifferens jämfört med vad enskilda techbolag investerar i en enda modellträning. Att *inte* investera innebär att offentlig sektor blir permanent beroende av utländska leverantörer för kritisk digital infrastruktur, med begränsad kontroll över data, prissättning och strategisk riktning.

---

## Executive Summary

### Sverige behöver betydande AI-beräkningskapacitet — och valet handlar om ambition

Offentlig sektor behöver AI-beräkningskapacitet för allt från handläggarstöd till suverän modellträning. Tre oberoende analysmetoder konvergerar kring samma storleksordning, vilket ger hög konfidens i behovsbilden:

| Spår | Metod | 2029 bas (H100-eq) |
|------|-------|---------------------|
| Botten-upp | Användningsfall × adoption × compute/enhet | ~3 100 |
| Topp-ned | Internationella investeringar skalade till Sverige | ~2 400 |
| Storbolagstriangulering | Back-calculation från kända AI-investeringar | ~3 100 |

### Resultat

| År | Låg | Bas | Hög | Enhet |
|----|-----|-----|-----|-------|
| **2026** | 200 | 400 | 800 | H100-ekvivalenter |
| **2029** | 1 500 | **3 500** | 8 000 | |
| **2031** | 3 500 | 8 000 | 18 000 | |

**Basscenario 2029:** ~3 500 H100-eq, ~600–1 200 MSEK/år, ~3 MW effekt.

Scenarierna är ambitionsval:
- **Låg** = defensivt minimum — drift utan kompetensuppbyggnad
- **Bas** = pragmatisk volym, men fortsatt beroende för frontier-AI
- **Hög** = investering i kompetens, innovation och strategisk handlingsfrihet

### Vad driver behovet?

| Typ | Andel 2029 | Karaktär |
|-----|-----------|----------|
| Suverän träning (grundmodeller, känslig data) | ~65% | Episodisk men massiv, politiskt driven |
| Specialiserad AI (vård, juridik, bedrägeri) | ~15% | Domänspecifik, växande bevisbas |
| AI-copilots (skrivstöd, sökning) | ~10% | Daglig, hög volym |
| Finjustering (svenska modeller) | ~10% | Periodisk burst |

Om Sverige avstår suverän modellträning halveras compute-behovet — men till priset av strategiskt beroende och begränsad förmåga att hantera känsliga data.

### Perspektiv: Sveriges behov i internationell kontext

| Aktör | Compute-investering |
|-------|---------------------|
| xAI (Colossus) | 100 000 H100 — ett enda kluster |
| Meta | 600 000+ GPU:er planerade |
| **Sverige, hela offentlig sektor (5 år, bas)** | **~3 500 H100-eq peak, ~$500M kumulativt** |

Den investering som krävs är modest i internationell jämförelse. Det som saknas är inte budget utan ett medvetet strategiskt beslut.

### Rekommendationer

1. **Nationell AI-compute-plattform (2026–2027)** — minst ~1 000 H100-eq initialt. Hybrid moln/on-prem. Samordna via DIGG, Sunet/NAISS, AI Sweden. ~200–400 MSEK initialt.
2. **Suverän modellträning (beslut 2026, kapacitet 2027–2028)** — successor till GPT-SW3 på 70B+-skala. ~1 000–2 000 H100-eq burst, ~100–300 MSEK per körning.
3. **Upphandlingsförmåga och ramavtal (2026)** — LOU-processen (6–18 månader) är den akuta flaskhalsen.

### Strategisk slutsats

Basscenariot ger tillräcklig volym för drift men garanterar inte att Sverige bygger kompetens, forskningsmiljöer eller innovationskraft på egna villkor. Högscenariot ligger närmare vad jämförbara länder investerar per capita och motsvarar ett val att säkra kapacitet, kompetens och styrning — inte bara beräkningsvolym.

Valet mellan bas och hög är i stor utsträckning ett politiskt beslut om ambition. Den strategiska ramen — konkurrenskraft, teknisk suveränitet och varför "tillräcklig volym" inte räcker — utvecklas i [08-strategi.md](08-strategi.md). En konkret genomgång av bygga vs. köpa vs. hybrid finns i [09-tanke-exempel.md](09-tanke-exempel.md).

---

### Dokumentstruktur

| Dokument | Innehåll |
|----------|----------|
| **[06-sammanfattning.md](06-sammanfattning.md)** | Sammanfattning för beslutsfattare |
| [01-ramverk.md](01-ramverk.md) | Analytiskt ramverk, drivare, triangulering |
| [02-antaganden-och-data.md](02-antaganden-och-data.md) | Antaganderegister (A1–A50) |
| [03-berakningsmodell.md](03-berakningsmodell.md) | Full härledning, scenarier |
| [04-internationella-jamforelser.md](04-internationella-jamforelser.md) | Internationella jämförelser |
| [05-kallor-och-resurser.md](05-kallor-och-resurser.md) | Källregister |
| [07-teknisk-bilaga.md](07-teknisk-bilaga.md) | GPU-specifikationer, ordlista |
| [08-strategi.md](08-strategi.md) | Strategisk ram: konkurrenskraft, beroende, ambition |
| [09-tanke-exempel.md](09-tanke-exempel.md) | Bygga vs. köpa — konkret tankeexperiment |
| [10-kan-vi-vanta.md](10-kan-vi-vanta.md) | "Kan vi vänta?" — stresstest av avvakta-strategin |
| [11-kompletterande-perspektiv.md](11-kompletterande-perspektiv.md) | Praktiker-stresstest: elnät, tokens/capita, NVIDIA-orderkö |

Policykällor: [resources/links.md](resources/links.md) (L1–L11). Projektkonventioner: [CLAUDE.md](CLAUDE.md).

---

*Analysen är framtagen mars 2026. Alla estimat bör revideras årligen då AI-fältet utvecklas snabbt.*
