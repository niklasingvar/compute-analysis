# 10 – Kan vi vänta?

En stresstest av strategin "avvakta och se".

---

## Argumentet för att vänta

Det finns rationella skäl att avvakta:

1. **Hårdvaran blir billigare.** Varje ny GPU-generation ger ~2–3x prestanda per krona (A48). Den som köper 2028 får mer för pengarna än den som köper 2026.

2. **Modellerna blir effektivare.** Algoritmiska förbättringar ger ~2x effektivitet per 18–24 månader (A47). Kvantisering (FP8/INT8) adderar ytterligare ~1,5–2x (A49).

3. **Osäkerheten är reell.** Adoptionskurvans inflektionspunkt kan ligga 2028 eller 2030 — skillnaden mellan 1 500 och 8 000 H100-eq i behov ([03](03-berakningsmodell.md), känslighetsanalys). Att vänta ger mer data.

4. **Risk för teknisk skuld.** Hårdvara som köps 2026 har 4–5 års livslängd och kan vara överspelad av post-Blackwell-generationen innan den amorterats.

5. **Andras erfarenheter.** Finland (LUMI), Danmark (Gefion) och UK (Isambard-AI) genererar lärdomar som Sverige kan tillgodogöra sig utan att betala för pionjärmisstag.

Dessa argument är giltiga. Ingen av dem besvarar dock frågan: **vad kostar det att vänta?**

---

## Fem kostnader som tickar under väntan

### 1. LOU-fördröjningen

Upphandling enligt LOU tar 6–18 månader (se [01](01-ramverk.md), adoptionshinder). Leverans och driftsättning adderar ytterligare tid. Det innebär:

- **Beslut 2026** → kapacitet på plats ~2027–2028, i fas med S-kurvans inflektionspunkt (A15–A16).
- **Beslut 2028** → kapacitet ~2029–2030, *efter* att den snabbaste adoptionsfasen redan passerat.

Upphandlingstiden är en fast fördröjning som inte krymper med bättre hårdvara. Att "vänta på rätt tidpunkt att köpa" förskjuter leverans bortom det fönster där kapaciteten behövs som mest.

### 2. Kompetensgapet vidgas

AI-kompetens byggs genom tillgång till infrastruktur att experimentera på — inte genom att vänta på bättre infrastruktur. Utan egen kapacitet:

- Forskare och ingenjörer söker sig dit GPU:erna finns — talent flight till privat sektor eller utlandet.
- Myndigheter köper färdiga tjänster utan att bygga intern förståelse.
- Organisationen lär sig konsumera AI, inte utvärdera, anpassa eller styra den.

Basscenariot förutsätter att kompetens och volym utvecklas parallellt ([08](08-strategi.md)). Utan infrastruktur under uppbyggnadsfasen saknas halva ekvationen.

### 3. Grannarna drar ifrån

Finland har LUMI operationellt. Danmark har Gefion (1 528 H100, offentlig-privat partnerskap med NVIDIA). UK rullar ut Isambard-AI med 5 448 H100. Alla dessa länder bygger kompetens, data-pipelines och användarerfarenhet *nu* ([04](04-internationella-jamforelser.md)).

Varje år Sverige väntar ökar inte bara kapacitetsgapet utan också **erfarenhetsgapet**. Att matcha grannarnas hårdvara 2030 kompenserar inte för tre förlorade år av organisatoriskt lärande.

### 4. Inlåsningen fördjupas

Under väntetiden står offentlig sektor inte stilla — den köper molntjänster. Varje år med rent moln (scenario A i [09](09-tanke-exempel.md)) innebär:

- Fler arbetsflöden konfigurerade mot specifika leverantörers API:er.
- Mer data i utländska miljöer — med tillhörande jurisdiktionsfrågor (L4–L6, [08](08-strategi.md)).
- Högre switching costs — den "tillfälliga" lösningen blir permanent.

"Avvakta" är i praktiken ett aktivt val: att välja scenario A (rent moln) som default. Skillnaden är att valet görs utan medveten strategi och utan den hybridmodell som begränsar beroendet.

### 5. Effektivitetsparadoxen

Ja, hårdvaran blir billigare per FLOP. Men modellerna växer *snabbare* än effektivitetsvinsterna (A50): tränings-compute för frontier-modeller ökar med ~4–5x per år (**L7**), medan hårdvaran förbättras ~2–3x per generation (A48). Nettot är att efterfrågan stiger med ~20% per år trots alla effektiviseringar.

Historiskt mönster: ingen aktör har någonsin sagt "tur att vi väntade — vi behöver mindre compute nu". Varje generation billigare hårdvara har absorberats av större modeller, rikare interaktioner och bredare adoption.

### 6. Öppna resonemangsmodeller — minskar de behovet?

En vanlig invändning: öppna modeller med resonemangsförmåga (DeepSeek-R1, Qwen, Llama-baserade varianter) blir snabbt konkurrenskraftiga med slutna frontier-modeller. Behöver Sverige investera i compute om man kan ladda ner en gratis modell?

Svaret är tvärtom. Öppna resonemangsmodeller **förstärker** behovet av egen infrastruktur:

- **Inference-kostnaden ökar.** Resonemangsmodeller genererar 5–50x fler tokens per fråga internt (chain-of-thought) jämfört med standardmodeller. En fråga som kostar ~1 500 tokens i en vanlig modell (A19) kan konsumera 10 000–50 000 tokens i en resonemangsmodell. Det mångdubblar GPU-behovet per interaktion i Tier 1–2.
- **Öppna vikter förutsätter egna GPU:er.** Hela poängen med öppna modeller är att slippa API-beroende — men då behövs infrastruktur att köra dem på. Öppna vikter är en *väg till suveränitet*, inte ett substitut för compute ([08](08-strategi.md)).
- **Finjustering av resonemangsförmåga kräver compute.** Att anpassa en resonemangsmodell till svenska juridiska eller medicinska domäner kräver reinforcement learning och specialiserad träning — mer GPU-intensivt än standard fine-tuning (A29).

Öppna resonerangsmodeller är goda nyheter för den som har infrastruktur. De är irrelevanta för den som inte har det.

---

## Räkneexempel: vad kostar 2 års fördröjning?

**Scenario**: Sverige beslutar 2028 istället för 2026. Kapacitet levereras ~2030 istället för ~2027–2028.

| Konsekvens | Uppskattad effekt |
|------------|-------------------|
| **Molnkostnad under väntan** | 2 år av scenario A (rent moln) för tidiga adoptörer: ~300–500 MSEK utgifter utan tillgångsuppbyggnad ([09](09-tanke-exempel.md), scenario A) |
| **Förlorat fönster för GPT-SW3-successor** | Grannländer tränar nationella modeller 2027–2028; Sverige saknar kapacitet och hamnar efter |
| **Kompetensbortfall** | 2 förlorade kohorter av AI-ingenjörer och forskare utan nationell infrastruktur att verka på |
| **Upphandling under tidspress** | Beslut 2028 under akut brist → sämre förhandlingsläge, mindre tid för arkitekturval |

Merkostnaden för 2 års fördröjning är inte bara de ~300–500 MSEK som spenderas på moln utan tillgång. Det är att Sverige anländer till 2030 med hårdvara men utan den organisation, kompetens och erfarenhet som krävs för att använda den effektivt — och med ett leverantörsberoende som blivit svårare att bryta.

---

## Slutsats

Att vänta på billigare hårdvara är rationellt. Att vänta med **beslutet** är det inte.

Upphandlingsprocessen (LOU), kompetensuppbyggnad och organisatoriskt lärande har alla ledtider som inte påverkas av GPU-priser. Dessa processer måste starta *innan* kapaciteten behövs — inte samtidigt.

Konkret innebär det:

- **Upphandling och ramavtal** kan påbörjas nu — den faktiska hårdvaran som köps kan vara nästa generation.
- **Driftsorganisation och kompetens** kräver tid att bygga oavsett vilken GPU som sitter i racket.
- **Strategin** (hybrid, datapolicy, ansvarsfördelning) tar inte mindre tid att utforma 2028 än 2026.

> Man kan vänta med att köpa GPU:er. Man kan inte vänta med att starta upphandlingen, bygga teamet eller sätta strategin.

Detaljerade beräkningar: [03](03-berakningsmodell.md). Bygga vs. köpa: [09](09-tanke-exempel.md). Strategisk ram: [08](08-strategi.md). Internationella jämförelser: [04](04-internationella-jamforelser.md).
