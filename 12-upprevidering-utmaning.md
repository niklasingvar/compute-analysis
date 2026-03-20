# 12 – Upprevidering-utmaning

Detta dokument stresstestar huvudscenariot i [03-berakningsmodell.md](03-berakningsmodell.md) och [06-sammanfattning.md](06-sammanfattning.md). Frågan är inte om huvudscenariot på **~9 000 H100-ekvivalenter 2029** är möjligt. Frågan är om det också kan vara **för lågt**.

Kort svar: **ja, men bara under tydliga och mer aggressiva antaganden än huvudmodellen använder**.

---

## Vad som talar för att 9 000 kan vara för lågt

Tre observationer talar för uppsidesrisk:

### 1. Offentlig adoption kan gå snabbare än klassisk IT-adoption

Public Sector AI Adoption Index 2026 visar redan hög AI-uptake internationellt. Om svensk offentlig sektor får tydlig ledning, bättre verktygstillgång och enklare ramavtal kan adoptionen gå snabbare än huvudantagandet i A59.

### 2. Agentiska arbetsflöden kan bli norm snabbare än väntat

Om en större del av användarna går från copilots till agentiska arbetsflöden, och om varje agentanvändare ligger närmare den övre delen av A55 än mittpunkten, växer Tier 1 snabbt. Det gäller särskilt om bakgrundsagenter blir vanliga i ärendeflöden, dokumentanalys och löpande kvalitetskontroll.

### 3. Suverän träning kan bli ett program, inte en enskild satsning

Huvudscenariot innehåller ett meningsfullt träningsspår. Men om Sverige vill kombinera en större svensk grundmodell med flera domänmodeller, kontinuerlig RL och bred forskningsaccess blir Tier 4 betydligt tyngre än i huvudmodellen.

---

## Vad som talar mot att hoppa direkt till 30 000–50 000

Det finns samtidigt tre starka skäl att inte göra ett mycket högre utfall till nytt basscenario för offentlig sektor:

### 1. Huvudscenariot antar fortfarande att majoriteten är copilot-användare

Det är ett viktigt realismankare. Offentlig sektor innehåller stora grupper där AI-användning förblir sporadisk, hårt styrd eller begränsad av process och juridik.

### 2. Supply-side begränsar vad som är realistiskt att säkra i tid

Även om efterfrågan skulle peka mycket högre betyder det inte att offentlig sektor kan realisera den nivån till 2029. Ledtider, allokering och praktisk köpkraft sätter ett tak på vad som är genomförbart.

### 3. 30 000–50 000 passar bättre som nationell infrastrukturfråga än som offentlig-sektor-bas

När siffrorna kommer upp i den storleksordningen närmar man sig en bredare svensk AI-infrastruktur för offentlig sektor, forskning och delar av näringslivet tillsammans. Det kan vara relevant strategiskt, men det är inte samma sak som ett konservativt basscenario för offentlig sektor enbart.

---

## Vad som krävs för att flytta upp huvudscenariot

Om följande tre saker sker samtidigt blir ett klart högre utfall möjligt:

| Drivare | Huvudscenario | Stressat utfall |
|--------|---------------|-----------------|
| Adoptionsgrad 2029 | 55–70% | närmare eller över övre delen av intervallet |
| Agentisk användning | 20–30% av aktiva | klart högre andel och högre tokenvolym per användare |
| Suverän modellambition | ett meningsfullt träningsspår | flera återkommande tränings- och RL-spår parallellt |

Under ett sådant samlat stresstest kan offentlig sektor plausibelt röra sig mot **~15 000–30 000 H100-eq** 2029.

---

## Hur detta dokument ska användas

Detta dokument ska inte användas för att ersätta scenarioarkitekturen i huvudrepo. Det ska användas för tre saker:

- testa om huvudscenariot underskattar uppsidan
- synliggöra vilka antaganden som faktiskt måste ändras för att landa högre
- skilja mellan **offentlig-sektor-scenario** och **bred nationell AI-infrastrukturfråga**

---

## Slutsats

Huvudscenariot på **~9 000 H100-ekvivalenter 2029** är fortfarande den mest rimliga mittpunkten för svensk offentlig sektor. Men det finns en tydlig uppsidesrisk om:

- adoptionen går snabbare än väntat
- agentiska arbetsflöden blir norm i större delar av förvaltningen
- Sverige väljer en mer omfattande suverän modellagenda

Den rätta läsningen av upprevideringsutmaningen är därför inte att huvudmodellen är fel, utan att **huvudmodellen bör kombineras med en tydlig uppsidesberedskap**.
