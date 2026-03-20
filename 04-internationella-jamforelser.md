# 04 – Internationella jämförelser

Internationella jämförelser används som **topp-ned-validering**. De svarar inte på exakt hur mycket compute Sverige bör bygga, men de visar vilken storleksordning andra länder redan rör sig mot och vad som framstår som orimligt lågt.

---

## Huvudslutsats

Skalat till svensk offentlig sektor pekar internationella jämförelser mot ett **konservativt golv på cirka 2 000–5 000 H100-ekvivalenter 2029**. Det ligger under huvudscenariot i [03-berakningsmodell.md](03-berakningsmodell.md), vilket är väntat: många offentliga investeringsplaner är skrivna före dagens agentiska användningsmönster och få fångar en mer ambitiös suverän träningsagenda.

Det internationella spåret används därför som:

- **golv** för vad som framstår som rimligt i offentlig sektor
- **sanity check** mot att modellen inte har tappat verklighetskontakt
- **jämförelsepunkt** för om Sverige väljer att följa, matcha eller överträffa grannländernas ambition

---

## Jämförande tabell

| Land / program | Officiell referens | Vad som är känt | Skalat till Sverige | Tolkning för svensk offentlig sektor |
|----------------|--------------------|-----------------|---------------------|--------------------------------------|
| **Storbritannien** | AI Opportunities Action Plan + Isambard-AI | Regeringen talar om minst 20x sovereign compute till 2030; Isambard-AI är en konkret offentlig resurs | ~3 000–6 000 H100-eq | Visar att central statlig compute-kapacitet kan byggas snabbt när politisk prioritet finns |
| **Finland** | LUMI / EuroHPC | Finland har tidig tillgång till mycket större forskningscompute än Sverige | ~2 000–4 000 H100-eq för offentlig sektor | Ger ett nordiskt ankare men fångar främst forskning, inte hela offentlig sektor |
| **Danmark** | Gefion / DCAI | Gefion ger Danmark en konkret nationell AI-infrastruktur med suveränitetsargument | ~2 500–4 000 H100-eq | Stark jämförelsepunkt för nordisk ambitionsnivå och offentlig-privat modell |
| **Frankrike** | France 2030 / Jean Zay / statlig AI-linje | Hög statlig styrning, tydligt suveränitetsmotiv | ~2 000–4 000 H100-eq | Viktig som jämförelse för länder som kopplar AI till strategisk autonomi |
| **Tyskland** | Federala och delstatliga AI-satsningar | Stor total volym men mer fragmenterad modell | ~1 500–3 000 H100-eq | Visar att större ekonomi inte automatiskt ger snabb offentlig adoption |
| **EU AI Factories** | EuroHPC AI Factories | EU bygger gemensam AI-infrastruktur med AI-optimiserade resurser | ~1 500–5 000 H100-eq | Viktig lägstanivå för vad ett europeiskt offentligt ambitionstak kan se ut |

---

## Fördjupning per jämförelsespår

### Storbritannien

Storbritannien är den starkaste jämförelsen för offentlig strategi. Regeringens svar på AI Opportunities Action Plan talar om att bygga ut sovereign compute kraftigt till 2030, samtidigt som Isambard-AI visar att det går att leverera konkret offentlig kapacitet på kort tid. För Sverige innebär det att ett scenario under några tusen H100-eq 2029 ser defensivt ut om målet är att hålla jämna steg.

### Finland

Finland visar vad tidig tillgång till EuroHPC-resurser och nationell samordning kan betyda. LUMI är inte en ren offentlig-sektorresurs, men den visar att den nordiska referensramen för avancerad AI-compute redan ligger betydligt högre än Sveriges faktiska tillgång i dag.

### Danmark

Gefion är särskilt relevant eftersom Danmark, liksom Sverige, är ett litet rikt land med hög digital mognad och starka life-science-intressen. Den danska modellen visar också att offentlig-privat samverkan är en realistisk väg till snabb uppskalning.

### Frankrike och Tyskland

Frankrike är relevant som exempel på ett land där suveränitetsmotiv tydligt driver investeringar. Tyskland är relevant av motsatt skäl: även stora budgetar ger inte alltid snabb offentlig effekt när styrningen är fragmenterad. Tillsammans visar de att styrning och målbild betyder nästan lika mycket som pengar.

---

## Vad jämförelserna inte fångar

Internationella jämförelser underskattar sannolikt den del av efterfrågan som kommer från:

- **agentiska arbetsflöden** i stor skala
- **bakgrundsagenter** och automatiserade processer
- **suverän träning** och kontinuerlig RL för känsliga domäner

Det är därför topp-ned-spåret i [03-berakningsmodell.md](03-berakningsmodell.md) hamnar lägre än botten-upp- och storbolagsspåren. De flesta offentliga planerna är skrivna för en värld där AI främst betyder copilots, inte agentisk drift.

---

## Slutsats

Internationell praxis talar inte för ett svenskt behov på bara några hundra GPU:er. Den talar för att Sverige minst behöver ligga i intervallet **2 000–5 000 H100-ekvivalenter** om landet vill vara i linje med jämförbara offentliga satsningar.

Huvudscenariot på **~9 000 H100-ekvivalenter 2029** ska därför inte läsas som ett avsteg från internationella jämförelser, utan som ett medvetet steg **ovanför** dagens publicerade offentliga planer för att fånga agentisk användning och en mer substantiell suverän modellförmåga.
