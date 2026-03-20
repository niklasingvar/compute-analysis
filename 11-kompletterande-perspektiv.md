# 11 – Kompletterande perspektiv: en praktiker-stresstest

Denna analys fokuserar på offentlig sektors behov i isolation. En erfaren praktiker invänder: det räcker inte. Nedan sex perspektiv som utvidgar, utmanar och förankrar behovsbilden i verkligheten.

---

## 1. "Vi kan inte överinvestera" — överkapacitet som exportvara

**Argumentet**: Om Sverige bygger mer AI-compute än offentlig sektor behöver, kan överskottet säljas till europeiska aktörer. Sverige sitter på bättre kylningsförutsättningar än Centraleuropa — lägre PUE, billigare el, mer fossilfri kraft ([07](07-teknisk-bilaga.md), avsnitt 3).

| Parameter | Norden | Centraleuropa |
|-----------|--------|---------------|
| PUE | 1,10–1,25 | 1,30–1,60 |
| Elpris (bas) | 0,30–0,80 SEK/kWh | 0,80–2,00 SEK/kWh |
| Frikyla (månader/år) | 9–11 | 4–7 |
| Fossilfri el | ~95%+ | ~40–60% |

**Implikation**: Risken att "köpa för mycket" är lägre än den framstår. Nordisk AI-infrastruktur har restvärde som europeisk kapacitet — särskilt om EU:s AI Factories-initiativ skapar efterfrågan på suverän europeisk compute. Överkapacitet i Sverige kan bli underkapacitet i Europa.

**Vad det ändrar**: Asymmetrin innebär att nedåtrisken (för mycket) är hanterbar genom export, medan uppåtrisken (för lite) inte kan kompenseras lika enkelt. Det talar för att dimensionera mot det övre intervallet.

---

## 2. Elnätets begränsning — den verkliga flaskhalsen

**Argumentet**: Kapaciteten i det svenska elnätet, särskilt i Mellansverige (elområde SE3), är redan ansträngd. Varje nytt datacenter konkurrerar om effekt med bostäder, industri och infrastruktur. I praktiken kan man knappt ansluta en stor matbutik till utan kö.

**Kontext**: Analysens effektberäkning ([03](03-berakningsmodell.md), [07](07-teknisk-bilaga.md)) visar ~3 MW för basscenario 2029 och ~5 MW för 2031. Det låter hanterbart — men:

- Nätanslutning kräver långa ledtider (2–5 år för ny kapacitet i belastade områden).
- Lokalisering av AI-datacenter styrs i praktiken av var nätkapaciteten finns, inte av var behovet är störst.
- Norrbotten och norra Sverige har kapacitet, men avstånd till användarna (latens) kan vara ett problem för realtidsapplikationer (Tier 1–2).

**Vad det ändrar**: Elnätet kan vara en hårdare begränsning än budget eller hårdvarutillgång. Nätanslutning bör ingå i upphandlingsplaneringen parallellt med GPU-inköp — inte sekventiellt. Det förstärker tidspressen: även om GPU:er kan köpas snabbt tar nätanslutning år.

---

## 3. Hårdvarans livslängd — investera rätt, inte bara nu

**Argumentet**: Att bygga ut all kapacitet nu riskerar att lämna Sverige med hårdvara som är tekniskt överspelad inom 6–8 år. B200 (2025–2026) kommer att vara utklassad av post-Blackwell (~2027–2028), som i sin tur ersätts av nästa generation.

**Kontext**: Analysens antagande om 4 års amortering (A41, [09](09-tanke-exempel.md)) speglar redan detta. Men poängen skärps av att GPU-generationer numera avlöser varandra snabbare. Delvis adresserat i [10-kan-vi-vanta.md](10-kan-vi-vanta.md).

**Vad det ändrar**: Argumentet talar för **stegvis upphandling** snarare än en enda stor investering — precis den hybridstrategi som scenario C förespråkar ([09](09-tanke-exempel.md)). Initial on-prem-kapacitet kompletteras med moln-burst; nästa generation köps in när den finns tillgänglig. Upphandlingsförmågan (ramavtal, LOU-process) bör dock byggas nu oavsett.

---

## 4. Ge upp drömmen om frontier-träning — fokusera på inference

**Argumentet**: Sverige är för litet för att bära ett frontier-lab. Att träna en modell i GPT-5-klassen kräver resurser i en helt annan storleksordning — tiotusentals GPU:er, miljarddollarsbudgetar, hundratals forskare. Sveriges roll bör vara att **serva** (köra inference och finjustera öppna modeller), inte att **träna** frontier.

**Kontext**: Tier 4 (suverän träning) driver ~65% av compute-behovet i basscenariot ([03](03-berakningsmodell.md), [06](06-sammanfattning.md)). Tar man bort Tier 4 sjunker 2029-behovet från ~3 500 till ~1 100 H100-eq — en dramatisk skillnad.

**Motargument**:
- Frontier-träning och suverän träning är inte samma sak. En 70B-modell tränad på svensk text (GPT-SW3-successor) är inte frontier — den är nischad. Kostnaden är ~100–300 MSEK per körning (A35), inte miljarder.
- Utan suverän träningsförmåga kan Sverige inte träna modeller för känsliga data (hälso-, rätts-, underrättelsedata) som inte kan skickas utomlands.
- Men det finns en giltig kärna: Sverige ska inte försöka konkurrera med OpenAI, Anthropic eller DeepSeek på frontier-modeller. Ambitionen bör vara fokuserad: svenska språkmodeller, domänmodeller för känslig data, finjustering av öppna resonerangsmodeller.

**Vad det ändrar**: Det talar för att skala ned Tier 4-ambitionen till det som faktiskt motiveras av suveränitet och datakänslighet — inte av prestige. Det kan flytta basscenariot nedåt, men det eliminerar det inte. Inference-behovet (Tier 1–3) växer dessutom snabbt på egen hand, särskilt med resonerangsmodeller (se [10](10-kan-vi-vanta.md), avsnitt om öppna resonerangsmodeller).

---

## 5. Tokens per capita — en alternativ behovsbild

**Argumentet**: Istället för att bygga behovet botten-upp per myndighet, räkna uppifrån: hur många tokens per person per dag i ett moget AI-samhälle?

**Räkneexempel (2030)**:

| Parameter | Värde |
|-----------|-------|
| Sveriges befolkning | ~10,5 miljoner |
| Tokens per capita per dag (moget scenario) | ~250 000 |
| Total tokens/dag | ~2,6 × 10¹² |
| Genomsnittlig inference-throughput (A20) | ~3 000 tokens/s per H100 |
| GPU-sekunder/dag | ~8,75 × 10⁸ |
| Sustained 24/7 | ~10 100 H100 |
| Peak-koncentration (70% under 8h) | ~21 300 H100 |
| Overhead (redundans, modellvariation) | ×1,5–2 |
| **Totalt nationellt behov** | **~35 000–50 000 H100-eq** |

**Kontext**: Detta är en *helt annan storleksordning* än analysens 3 500–8 000 H100-eq — men skopet är också annorlunda:

| Dimension | Denna analys (01–10) | Tokens-per-capita |
|-----------|----------------------|-------------------|
| Population | Offentlig sektor (~1,2M anställda) | Hela Sverige (~10,5M) |
| Användning | Arbetsrelaterad | All AI-interaktion |
| Tier 4 (träning) | Inkluderat | Ej inkluderat |
| Frontier-modeller | Egentränade + API | Öppna modeller, lokalt |

Om man tar tokens-per-capita-modellen och isolerar offentlig sektors andel (~15–20% av befolkningen med hög AI-intensitet) landar man på ~5 000–10 000 H100-eq. Det **konvergerar med analysens hög-scenario** (~8 000 H100-eq 2029) — ytterligare en trianguleringspunkt.

**250 000 tokens/capita/dag — är det rimligt?** Idag använder tunga ChatGPT-användare ~5 000–20 000 tokens/dag. Men med pervasiv AI (varje sökning, varje e-post, varje dokumentsammanfattning) och resonerangsmodeller som genererar 5–50x fler tokens internt, är 250 000 tokens/dag per capita 2030 aggressivt men inte orimligt.

**Vad det ändrar**: Tokens-per-capita-modellen ger stöd åt det övre intervallet och pekar på att analysens *hela* skop (enbart offentlig sektor) underskattar nationellt behov. Sverige bör tänka på AI-infrastruktur som **nationell infrastruktur** — inte bara myndighetsinfrastruktur.

---

## 6. Upphandlingens geopolitik — NVIDIA:s orderkö

**Argumentet**: Tillgång till avancerade GPU:er styrs inte bara av budget utan av leverantörsrelationer och geopolitik. NVIDIA:s orderbok är överfull. Länder och bolag med starka relationer (USA, UAE, stora techbolag) prioriteras. Sverige har begränsad geopolitisk tyngd i detta sammanhang.

**Konkret öppning**: Jensen Huang är hedersdoktor vid Linköpings universitet (2024), där Berzelius-klustret och NSC redan är etablerade NVIDIA-kunder. Det är en befintlig relation som kan användas — men det kräver aktivt relationsarbete, inte bara en upphandling via LOU.

**Vad det ändrar**: Upphandling av GPU:er i denna skala är inte en standardinköpsprocess. Det kräver:

- Tidigt engagemang med leverantörer *innan* formell LOU-upphandling.
- Realistisk förväntan: tilldelning av hundratals GPU:er, inte tiotusentals, i ett första steg.
- Strategiska partnerskap (jfr Danmarks Gefion-modell: NVIDIA + Novo Nordisk Foundation, se [04](04-internationella-jamforelser.md)).
- EuroHPC/Arrhenius som komplement — allokering via EU kan komplettera det som inte kan köpas direkt.

LOU-processen behöver formaliseras nu, men den informella dialogen bör ha börjat igår.

---

## Syntes: vad ändrar dessa perspektiv?

| Perspektiv | Effekt på behovsbilden | Effekt på strategi |
|------------|----------------------|--------------------|
| Överkapacitet → export | Minskar nedsidorisken | Dimensionera mot övre intervallet |
| Elnätsbegränsning | Hård fysisk constraint | Nätanslutning parallellt med upphandling |
| Hårdvarulivslängd | Bekräftar stegvis approach | Hybridstrategi, ramavtal |
| Ge upp frontier | Sänker Tier 4, men inte Tier 1–3 | Fokusera suverän träning på nisch, inte prestige |
| Tokens per capita | Nationellt behov >>8 000 | Tänk nationell infra, inte bara myndigheter |
| NVIDIA-orderkö | Budget ≠ tillgång | Relationer, partnerskap, start nu |

**Sammanfattning**: Praktikerperspektiven stärker snarare än försvagar slutsatserna. Behovet är sannolikt *större* än analysens basscenario (tokens-per-capita, export-argument). Genomförandet är *svårare* än det framstår (elnät, NVIDIA-kö). Och tidspressen är *ännu mer akut* (nätanslutning, leverantörsrelationer, kompetensuppbyggnad — allt har långa ledtider).

> Bästa tiden att plantera ett träd var för sjuttio år sedan. Näst bästa tiden är idag.

---

Beräkningsmodell: [03](03-berakningsmodell.md). Internationella jämförelser: [04](04-internationella-jamforelser.md). Teknisk bilaga (kylning, effekt): [07](07-teknisk-bilaga.md). Strategisk ram: [08](08-strategi.md). Bygga vs. köpa: [09](09-tanke-exempel.md). "Kan vi vänta?": [10](10-kan-vi-vanta.md).
