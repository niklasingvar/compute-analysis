# Offentlig sektors AI-compute-behov 2026-2031

## Abstract

Denna analys uppskattar Sveriges offentliga sektors (exkl. försvar) behov av AI-beräkningskapacitet 2026-2031. **Huvudbidraget är inte en enskild siffra utan metodiken:** tre oberoende trianguleringsspår (botten-upp, topp-ned, storbolagstriangulering) som konvergerar kring **2 500–3 500 H100-ekvivalenter** för 2029 i basscenariot. Konvergensen ger trovärdighet i **storleksordningen** och visar att frågan inte längre är *om* investering behövs utan *på vilken ambitionsnivå*.

**Slutsats:** Basscenariot (~3 500 H100-eq 2029) ger "tillräcklig volym" för drift men garanterar inte kompetens, innovation eller strategisk handlingsfrihet på egna villkor. **Högscenariot** (~8 000 H100-eq 2029) motsvarar vad jämförbara länder faktiskt satsar per capita och är nödvändigt för att bygga varaktig förmåga utan långsiktigt leverantörsberoende.

---

## Executive Summary

### Frågeställning

Hur mycket AI-beräkningskapacitet behöver Sveriges offentliga sektor 2026-2031? Frågan kan inte besvaras med en enda kalkyl — fältet förändras för snabbt, adoption är osäker, och politiska beslut är inte fattade. Därför sätter denna analys **metodiken i centrum**: tre oberoende sätt att uppskatta samma behov.

### Metod: Triangulering

**1. Botten-upp** — Användningsfall × adoption × compute per enhet  
Detaljerad beräkning av AI-copilots, specialiserad AI, finjustering och suverän modellträning. Resultat 2029: ~3 100 H100-eq (bas).

**2. Topp-ned** — Internationella jämförelser skalade till Sverige  
EU AI Factories, UK, Finland, Danmark m.fl. Nordiska grannar investerar proportionellt mer per capita. Resultat 2029: ~2 400 H100-eq (bas).

**3. Storbolagstriangulering** — Back-calculation från kända investeringar  
Anthropic, Meta, OpenAI, xAI spenderar $100M–$1B+ per modellträning. Sveriges hela 5-åriga behov (~$500M) = en enda frontier-träningskörning. Resultat 2029: ~3 100 H100-eq (bas).

> **Konvergens:** Spånen möts kring **2 500–3 500 H100-eq för 2029**. Detta är analysens huvudargument — konvergens mellan oberoende metoder ger starkare trovärdighet än en enskild punktprognos.

### Resultat: Intervall, inte punktvärden

| År | Låg | Bas | Hög | Enhet |
|----|-----|-----|-----|-------|
| **2029** | 1 500 | **3 500** | 8 000 | H100-ekvivalenter |
| **2031** | 3 500 | 8 000 | 18 000 | |

**Basscenario 2029:** ~3 500 H100-eq, ~600–1 200 MSEK/år, ~3 MW effekt.

Scenarierna är **ambitionsval**, inte bara tekniska extrapolationer:
- **Låg** = defensivt minimum
- **Bas** = pragmatisk volym, men fortsatt beroende för frontier-AI
- **Hög** = kompetens, innovation och strategisk handlingsfrihet på egna villkor

### Vad driver behovet?

- **AI-copilots** (~10%) — daglig användning, hög volym
- **Specialiserad AI** (~15%) — vård, juridik, bedrägeri
- **Finjustering** (~10%) — svenska modeller, myndighetsanpassning
- **Suverän träning** (~65%) — svenska grundmodeller, känslig-data-modeller

Suverän modellträning dominerar. Om Sverige väljer att helt förlita sig på utländska modeller halveras compute-behovet — men till priset av strategiskt beroende.

### Slutsats: Ambitionsnivå avgör

Trianguleringen ger **konfidens i storleksordningen**: offentlig sektor behöver betydande kapacitet. Avfärdande av hela intervallet är svårt att förena med tre oberoende spår.

**Basscenariot** löser många kortsiktiga flaskhalsar men **garanterar inte** att Sverige bygger egen kompetens, forskningsmiljöer och innovationskraft på **egna villkor** — eller att man undviker långsiktigt leverantörsberoende för frontier-AI.

**Högscenariot** ligger närmare vad **internationella jämförelser** visar när man skalar grannländer till Sverige, och motsvarar ett medvetet val att investera i **kapacitet + kompetens + styrning**.

**Kärnan:** Valet mellan bas och hög är i stor utsträckning ett **politiskt beslut om ambition**, inte en teknisk finjustering. Trianguleringen säger att behovet av ordning **finns**; ambitionsnivån avgör om Sverige bara "hänger med" eller bygger varaktig förmåga.

### Policyrekommendationer

1. **Investera i nationell AI-compute-plattform (2026-2027)** — minst ~1 000 H100-eq initialt för piloter och utbildningsmiljöer
2. **Planera för suverän modellträning (beslut 2026, kapacitet 2027-2028)** — ~1 000–2 000 H100-eq burst för successor till GPT-SW3
3. **Säkerställ upphandlingsförmåga och ramavtal (2026)** — LOU-processen är den akuta flaskhalsen

### Dokumentstruktur

| Dokument | Innehåll |
|----------|----------|
| **[06-sammanfattning.md](06-sammanfattning.md)** | **Läs denna först** — sammanfattning för beslutsfattare |
| [01-ramverk.md](01-ramverk.md) | Analytiskt ramverk, triangulering, drivare |
| [02-antaganden-och-data.md](02-antaganden-och-data.md) | Antaganderegister (A1–A50), spårbarhet |
| [03-berakningsmodell.md](03-berakningsmodell.md) | Full härledning, låg/bas/hög-scenarier |
| [04-internationella-jamforelser.md](04-internationella-jamforelser.md) | Internationella jämförelser (validering) |
| [05-kallor-och-resurser.md](05-kallor-och-resurser.md) | Källregister |
| [07-teknisk-bilaga.md](07-teknisk-bilaga.md) | GPU-specifikationer, ordlista |
| **[08-filosofi.md](08-filosofi.md)** | **Strategisk ram:** konkurrenskraft, beroende, varför "tillräcklig volym" inte räcker |

### Ytterligare resurser

- **Policykällor:** [resources/links.md](resources/links.md) (L1–L11) — Draghi-rapporten, SOU 2025:12, CLOUD Act, Schrems II, Epoch AI, Mistral m.fl.
- **Projektkonventioner:** [CLAUDE.md](CLAUDE.md)

---

**Analysen är framtagen mars 2026. Alla estimat bör revideras årligen då AI-fältet utvecklas snabbt.**
