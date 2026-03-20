# Offentlig sektors AI-compute-behov 2026-2031

## Sammanfattning för beslutsfattare

Sveriges offentliga sektor behöver planera för **cirka 9 000 H100-ekvivalenter 2029** om målet är bred AI-användning, meningsfull nationell modellförmåga och rimlig strategisk handlingsfrihet. Ett lägre spår på **~3 000 H100-eq** är möjligt, men lämnar Sverige mer beroende av externa leverantörer och med svagare kapacitet för känsliga domäner. Ett högre spår på **~20 000 H100-eq** motsvarar en tydligt mer offensiv ambitionsnivå.

Tre oberoende spår ligger bakom slutsatsen:

| Spår | 2029-nivå | Vad spåret fångar |
|------|-----------|-------------------|
| Botten-upp | ~8 800 H100-eq | Användningsfall, adoption, agentisk belastning och suverän träning |
| Topp-ned | ~4 100 H100-eq | Dagens offentliga investeringsplaner och internationell praxis |
| Storbolagstriangulering | ~7 600 H100-eq | Vad motsvarande modell- och driftförmåga kostar i global marknad |

Två efterfrågebaserade spår konvergerar alltså nära **9 000**, medan topp-ned-spåret fungerar som ett konservativt golv.

---

## Tre huvudslutsatser

### 1. Offentlig sektor behöver mer än ett copilot-scenario

Det är inte längre tillräckligt att räkna på enkel chatbotanvändning. Agentiska arbetsflöden, längre kontexter, fler verktygsanrop och bakgrundsagenter flyttar upp inference-behovet tydligt. Därför landar Tier 1 i huvudscenariot kring **~2 200 H100-eq 2029**, inte några hundra.

### 2. Suverän modellförmåga är den största enskilda posten

Om Sverige vill kunna träna eller vidareutveckla modeller för känsliga data, svensk offentlig domän och nationell styrning blir Tier 4 avgörande. I huvudscenariot står suverän träning och RL-relaterat arbete för **~4 500 H100-eq** i 2029-årsbilden.

### 3. Det som ser dyrt ut i svensk budgetlogik är hanterbart i strategisk kontext

Huvudscenariot motsvarar ungefär **~2 000 MSEK per år i compute** och **~6,3 MW** i facility power 2029. Det är betydande men inte extraordinärt i internationell jämförelse. Den stora risken är inte att kapaciteten är omöjlig att finansiera, utan att Sverige agerar för sent i en marknad med långa ledtider.

---

## Scenarioöversikt

| År | Låg | Bas | Hög | Enhet |
|----|-----|-----|-----|-------|
| 2026 | 400 | 900 | 2 000 | H100-ekvivalenter |
| 2027 | 900 | 2 200 | 5 000 | H100-ekvivalenter |
| 2028 | 1 800 | 4 500 | 9 500 | H100-ekvivalenter |
| 2029 | **3 000** | **9 000** | **20 000** | H100-ekvivalenter |
| 2030 | 5 500 | 13 000 | 30 000 | H100-ekvivalenter |
| 2031 | 8 000 | 18 000 | 42 000 | H100-ekvivalenter |

| Mått (basscenario 2029) | Värde |
|-------------------------|-------|
| Beräkningskapacitet | ~9 000 H100-ekvivalenter |
| Årskostnad (compute) | ~2 000 MSEK |
| Effektbehov | ~6,3 MW |
| Strategisk innebörd | Bred AI-användning + meningsfull nationell modellförmåga |

---

## Tre rekommendationer

### 1. Starta upphandling, partnerskap och nätplanering nu

Det viktigaste beslutet 2026 är inte att köpa all kapacitet direkt, utan att säkra **tidslinjen**. Ramavtal, leverantörsdialog, platsval, nätanslutning och styrning måste starta innan behovet toppar 2028-2029.

### 2. Bygg en hybridmodell med tydlig skaltrappa

Ett rimligt första steg är **1 000–1 500 H100-eq initialt**, med hybridarkitektur: on-prem för känslig data och modellarbete, moln för burst och icke-kritiska arbetslaster. Därefter bör kapaciteten kunna skalas mot huvudscenariot.

### 3. Koppla compute till kompetens, data och ansvar

Compute utan styrning ger låg effekt. Beslutet bör därför paketeras tillsammans med:

- ansvarsfördelning mellan statliga aktörer
- utbildning och användarstöd
- datapolicy för känslig respektive icke-känslig information
- prioritering av vilka användningsfall som ska få kapacitet först

---

## Risksida

| Risk | Vad som kan hända | Konsekvens |
|------|-------------------|------------|
| **För låg adoption** | Offentlig sektor använder AI långsammare än väntat | Huvudscenariot kan bli för högt på kort sikt |
| **För snabb agentisk övergång** | Fler användare går från copilot till agentiskt arbete | Huvudscenariot kan bli för lågt redan före 2029 |
| **Supply-side-begränsningar** | GPU:er, HBM eller datacenterkapacitet blir svåra att säkra | Behovet kvarstår men blir svårare att realisera |
| **Svag styrning** | Kapacitet byggs utan gemensam prioritering | Låg nyttjandegrad och sämre legitimitet |
| **För låg suverän ambition** | Sverige väljer bort modellförmåga för känsliga domäner | Lägre kostnad men större leverantörsberoende |

---

## Vad 12-dokumentet betyder

[12-upprevidering-utmaning.md](12-upprevidering-utmaning.md) är ett medvetet stresstest av om även **~9 000 H100-eq** kan vara för lågt. Det dokumentet är viktigt, men det är inte huvudscenariot. Huvudlinjen i detta repo är att:

- **~3 000 H100-eq** är ett defensivt minimum
- **~9 000 H100-eq** är ett rimligt huvudscenario
- **~20 000 H100-eq** är en tydligt mer offensiv ambition

---

## Spårbarhet

Antaganden: [02-antaganden-och-data.md](02-antaganden-och-data.md)  
Beräkningsmodell: [03-berakningsmodell.md](03-berakningsmodell.md)  
Internationella jämförelser: [04-internationella-jamforelser.md](04-internationella-jamforelser.md)  
Källregister: [05-kallor-och-resurser.md](05-kallor-och-resurser.md)  
Strategisk ram: [08-strategi.md](08-strategi.md)  
Bygga vs. köpa: [09-tanke-exempel.md](09-tanke-exempel.md)  
Väntestrategi: [10-kan-vi-vanta.md](10-kan-vi-vanta.md)
