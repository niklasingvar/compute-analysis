# 07 – Teknisk bilaga

Detta dokument fungerar som tekniskt appendix till [03-berakningsmodell.md](03-berakningsmodell.md) och [06-sammanfattning.md](06-sammanfattning.md). Syftet är att göra enheterna, översättningarna och de viktigaste tekniska antagandena transparenta.

---

## 1. Referensenheten: H100-ekvivalent

Analysen uttrycker behovet i **H100-ekvivalenter** för att kunna jämföra över tid även när faktisk inköpt hårdvara byts ut.

| GPU | H100-eq faktor | Kommentar |
|-----|----------------|-----------|
| A100 80GB | ~0,5x | Användbar historisk referens |
| H100 SXM | 1,0x | Referensenhet i modellen |
| H200 | ~1,3–1,5x | Framför allt starkare på minnesbundna arbetslaster |
| B200 | ~2–3x | Tydligt steg upp i prestanda |
| B300 / Rubin-klass | ~4–6x | Rimlig riktning för 2027–2029 |
| MI300X | ~1,0–1,3x | Beroende på mjukvara och arbetslast |

H100-eq mäter alltså **kapacitet**, inte faktiskt antal köpta GPU:er.

---

## 2. Från H100-eq till fysiska GPU:er

### Basscenariot

| År | Basbehov (H100-eq) | Trolig hårdvara | H100-eq per fysisk GPU | Fysiska GPU:er |
|----|--------------------|-----------------|------------------------|----------------|
| 2026 | 900 | H100/H200 | 1,0–1,3 | ~700–900 |
| 2027 | 2 200 | H200/B200 | 1,3–2,5 | ~900–1 700 |
| 2028 | 4 500 | B200 | 2,0–3,0 | ~1 500–2 250 |
| 2029 | 9 000 | B200/B300 | 2,5–4,0 | ~2 250–3 600 |
| 2030 | 13 000 | B300/post-Blackwell | 4,0–6,0 | ~2 200–3 250 |
| 2031 | 18 000 | post-Blackwell | 5,0–8,0 | ~2 250–3 600 |

Detta förklarar varför behovet i H100-eq kan öka kraftigt samtidigt som antal faktiska GPU:er växer mindre än proportionellt.

---

## 3. Från H100-eq till effektbehov

Modellen i [03-berakningsmodell.md](03-berakningsmodell.md) använder följande storleksordning för facility power:

| År | Bas H100-eq | Antagen facility-kW per H100-eq | Facility MW |
|----|-------------|----------------------------------|-------------|
| 2026 | 900 | ~0,9 | ~0,8 |
| 2027 | 2 200 | ~0,8 | ~1,8 |
| 2028 | 4 500 | ~0,8 | ~3,6 |
| 2029 | 9 000 | ~0,7 | ~6,3 |
| 2030 | 13 000 | ~0,6 | ~7,8 |
| 2031 | 18 000 | ~0,5 | ~9,0 |

Två krafter verkar samtidigt:

- nyare generationer drar **mer effekt per fysisk GPU**
- men levererar också **mer kapacitet per GPU**, vilket sänker effekt per H100-eq

Det är därför effekten per H100-eq sjunker över tid trots att enskilda acceleratorkort blir energitätare.

---

## 4. Datacenterdimensionering i 2029 års basscenario

2029 års basscenario motsvarar ungefär:

| Parameter | Rimlig storleksordning |
|-----------|-------------------------|
| Kapacitet | ~9 000 H100-eq |
| Fysiska GPU:er | ~2 250–3 600 |
| IT-last | ~5,0–5,7 MW |
| Facility power | ~6,3 MW |
| Redundans / provisionerad nivå | ~7,3–7,9 MW |
| Fysisk yta | ~1 000–1 600 m² GPU-tät miljö |

Detta är ett betydande men inte extremt datacenterprojekt. Flaskhalsen ligger sällan i elpriset i sig, utan i:

- nätanslutning
- platsval
- kylarkitektur
- genomförandehastighet

---

## 5. Kylning och nordiska fördelar

Sverige har strukturella fördelar för AI-drift:

| Parameter | Norden | Centraleuropa |
|-----------|--------|---------------|
| PUE | ~1,10–1,25 | ~1,30–1,60 |
| Frikyla | 9–11 månader/år | 4–7 månader/år |
| Elpris | ~0,30–0,80 SEK/kWh | ~0,80–2,00 SEK/kWh |
| Fossilfri el | ~95%+ | lägre andel |

För H100/B200/B300-klass är vätskekylning i praktiken standard:

| Kylmetod | TDP per rack | Kommentar |
|----------|--------------|-----------|
| Luftkylning | <20 kW | Otillräckligt för tät AI-drift |
| Rear-door heat exchanger | 20–40 kW | Fungerar i blandade miljöer |
| Direct-to-chip liquid cooling | 40–80 kW | Mest realistiskt för moderna AI-kluster |
| Immersion cooling | 80–150 kW | Hög täthet, mer specialiserat |

---

## 6. Inferenceantaganden

Inference-throughput varierar kraftigt med modellstorlek, kvantisering och batching. Modellen använder **~3 000 tokens/s per H100** som ett rimligt genomsnitt för blandade arbetslaster.

| Modelltyp | Rimlig throughput per H100 | Kommentar |
|-----------|----------------------------|-----------|
| 7B-modell, väloptimerad | mycket hög | långt över modellantagandet |
| 70B-modell | medelhög | nära modellens mittantagande med batching/kvantisering |
| 200B+ / MoE / reasoning-tung | lägre | driver behovet av overhead i Tier 1 |

Det viktiga är därför inte ett exakt benchmarkvärde, utan att modellen explicit lägger på:

- peak-faktor
- redundans
- modellstorleks-/reasoning-overhead

---

## 7. Träningsantaganden

### Storleksordningar för träning

| Modell | Rimlig H100-timmarsnivå | Funktion i analysen |
|--------|--------------------------|---------------------|
| 70B | ~0,5–2,0 miljoner | Nedre referens och defensivt träningsspår |
| 200B | ~3–8 miljoner | Huvudantagande i 2029 års bas |
| 400B+ | klart högre | Del av högscenariot |

### RL och fortsatt utveckling

I huvudmodellen behandlas RL inte som ett bihang utan som en separat compute-post:

- **RL-tuning per modell**: ~200 000–1 000 000 H100-h
- **kontinuerlig RL för domänmodeller**: ~100 000–500 000 H100-h/år

Detta är viktigt eftersom den strategiska skillnaden mellan ett mindre och ett större program ofta ligger i den återkommande modellen för förbättring, inte bara i första träningskörningen.

---

## 8. Varför 70B inte räcker som huvudmålbild

En 70B-modell är fortfarande användbar som referens och nedre ambitionsnivå. Men som huvudmålbild för 2029 blir den svag av tre skäl:

1. den ger sämre långsiktig konkurrenskraft mot större öppna och slutna modeller
2. den lämnar mindre utrymme för svenska domänanpassningar i känsliga miljöer
3. den riskerar att bli en symbolisk snarare än strategisk investering

Därför använder huvudmodellen **200B+** som bas för suverän modellförmåga.

---

## 9. Ordlista

| Term | Förklaring |
|------|-----------|
| **GPU** | Processor optimerad för parallella beräkningar, central för AI |
| **H100-ekvivalent** | Kapacitetsmått som gör olika GPU-generationer jämförbara |
| **Inference** | Att köra en tränad modell för att generera svar |
| **Träning** | Att skapa eller vidareutveckla en modell på stora datamängder |
| **Fine-tuning** | Anpassning av befintlig modell till ett specifikt användningsområde |
| **RL** | Reinforcement learning; används för att förbättra modellbeteende efter grundträning |
| **MoE** | Mixture-of-Experts; modellarkitektur där bara delar av modellen aktiveras per fråga |
| **PUE** | Power Usage Effectiveness; mått på datacenters energieffektivitet |
| **On-prem** | Drift i egen eller reserverad fysisk miljö |
| **Moln** | Hyrd kapacitet från extern leverantör |
| **CLOUD Act** | Amerikansk lag som påverkar juridisk risk vid molntjänster |

---

## Slutsats

Den tekniska bilagan ändrar inte slutsatsen i huvudanalysen. Den visar varför ett basscenario på **~9 000 H100-ekvivalenter 2029** är tekniskt begripligt, översättbart till fysisk infrastruktur och förenligt med en hybridstrategi där både drift, träning och suveränitet vägs in.
