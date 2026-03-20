# 07 – Teknisk bilaga

Fördjupat tekniskt underlag för beräkningsmodellen. Riktar sig till IT-strateger och tekniska rådgivare.

---

## 1. GPU-arkitekturer – jämförelse

### Relevanta GPU-generationer

| GPU | Tillverkare | FP16 (TFLOPS) | HBM (GB) | TDP (W) | H100-eq faktor | Tillgänglighet |
|-----|-------------|---------------|-----------|---------|-----------------|----------------|
| A100 80GB | NVIDIA | 312 | 80 | 400 | 0,5x | 2020- (befintlig) |
| H100 SXM | NVIDIA | 990 (med sparsity) | 80 | 700 | **1,0x** (referens) | 2023- |
| H200 | NVIDIA | ~990 | 141 | 700 | ~1,3-1,5x (minnes-bound tasks) | 2024-2025 |
| B200 | NVIDIA | ~2 250 | 192 | 1 000 | ~2-3x | 2025-2026 |
| B300 (Vera Rubin-plattform) | NVIDIA | ~4 500 (est.) | 288+ (est.) | ~1 200 (est.) | ~4-6x (est.) | 2027-2028 |
| MI300X | AMD | ~1 300 | 192 | 750 | ~1,0-1,3x (beroende på mjukvaruekosystem) | 2024- |
| Gaudi 3 | Intel | ~1 800 (BF16) | 128 | 900 | ~0,8-1,2x (beroende på workload) | 2024-2025 |

### Varför H100-ekvivalenter?

H100 SXM används som referensenhet eftersom:
1. Det är den mest utbredda datacenter-GPU:n för AI (2024-2025)
2. Välbenchmarkad för både träning och inference
3. Alla konkurrenter och efterföljare kan uttryckas som multipel av H100-prestanda
4. Enklast att kommunicera till icke-teknisk publik

**Konverteringsregel**: När nya GPU-generationer införs minskar antal *fysiska* GPU:er som krävs, men vi uttrycker behovet i H100-eq för jämförbarhet. Faktisk inköp 2029 sker i dåtidens hårdvara (sannolikt B200/B300-klass), vilket innebär färre fysiska enheter.

---

## 2. Enhetskonverteringar

### H100-eq till fysiska GPU:er (framtida hårdvara)

| År | Dominant GPU | H100-eq per fysisk GPU | Bas-behov (H100-eq) | Fysiska GPU:er |
|----|-------------|----------------------|---------------------|----------------|
| 2026 | H100/H200 | 1,0-1,3 | 400 | ~300-400 |
| 2027 | H200/B200 | 1,3-2,5 | 1 000 | ~400-770 |
| 2028 | B200 | 2,0-3,0 | 2 000 | ~670-1 000 |
| 2029 | B200/B300 | 2,5-4,0 | 3 500 | ~875-1 400 |
| 2030 | B300/post-Blackwell | 4,0-6,0 | 5 500 | ~920-1 375 |
| 2031 | Post-Blackwell | 5,0-8,0 | 8 000 | ~1 000-1 600 |

### H100-eq till effekt (MW)

```
Facility power (MW) = H100-eq × (W per H100-eq under aktuell generation) × PUE / 1 000 000
```

| Komponent | Värde |
|-----------|-------|
| H100 TDP | 700 W |
| Servernivå (CPU, RAM, NVLink, nätverk) | +30% ≈ 910 W |
| PUE Norden (frikyla) | 1,15-1,30 |
| **Facility power per H100 on-prem** | **~1,0-1,2 kW** |

Med framtida effektivare generationer:

| År | kW per H100-eq (facility) | Bas H100-eq | Facility MW |
|----|--------------------------|-------------|-------------|
| 2026 | 1,1 | 400 | 0,4 |
| 2027 | 1,0 | 1 000 | 1,0 |
| 2028 | 0,9 | 2 000 | 1,8 |
| 2029 | 0,8 | 3 500 | 2,8 |
| 2030 | 0,7 | 5 500 | 3,9 |
| 2031 | 0,6 | 8 000 | 4,8 |

*Not: Effekten per H100-eq sjunker eftersom nyare GPU:er levererar mer compute per watt. Men: nyare GPU:er drar mer effekt totalt (B200: 1 000W vs H100: 700W) – vinsten kommer från att färre fysiska GPU:er behövs.*

### H100-eq till kostnad (MSEK)

| Driftmodell | Kostnad per H100-eq/år | Kommentar |
|-------------|----------------------|-----------|
| Moln (on-demand) | ~350-500 KSEK | Flexibelt men dyrt |
| Moln (1-3 år reserved) | ~200-350 KSEK | Förutsägbart, lägre pris |
| On-prem (amortering 4 år) | ~150-250 KSEK | Låg löpande, hög initial investering |
| Hybrid (60% on-prem / 40% moln) | ~190-260 KSEK | **Använd i basmodellen** |

On-prem-kalkyl (per H100):
- Systempris: ~600 KSEK (A41, ~$60K)
- Amortering 4 år: 150 KSEK/år
- El (700W × 8 760h × 0,75 SEK/kWh × PUE 1,2): ~55 KSEK/år
- Underhåll, kylning, personal: ~30 KSEK/år
- Nätverksinfrastruktur (amorterat): ~15 KSEK/år
- **Total: ~250 KSEK/år on-prem**

---

## 3. Effekt- och kylberäkningar för nordiska förhållanden

### Nordisk fördel: Frikyla

Sverige har en betydande konkurrensfördel för AI-datacenter:

| Parameter | Norden | Centraleuropa |
|-----------|--------|---------------|
| Medeltemperatur | ~6°C | ~11°C |
| Frikyla möjlig (mån/år) | 9-11 | 4-7 |
| PUE (Power Usage Effectiveness) | 1,10-1,25 | 1,30-1,60 |
| Elcertifiering (fossilfri) | ~95%+ | ~40-60% |
| Elpris (bas) | 0,30-0,80 SEK/kWh | 0,80-2,00 SEK/kWh |

### Datacenter-dimensionering (2029 basscenario)

| Parameter | Värde |
|-----------|-------|
| IT-last (3 500 H100-eq) | ~2,5 MW |
| PUE 1,20 | ×1,20 |
| **Total facility power** | **~3,0 MW** |
| Redundans (N+1) | ~3,5 MW provisionerat |
| Fysisk yta (GPU-tät) | ~500-800 m² |
| Vätskekyld andel (H100/B200) | ~60-80% (GPU-rack) |

### Vätskekylning (liquid cooling)

Moderna GPU-datacenter (H100+) kräver i allt högre grad vätskekylning:

| Kylmetod | TDP-kapacitet per rack | Lämplig för |
|----------|----------------------|-------------|
| Traditionell luftkylning | <20 kW/rack | Äldre GPU:er, CPU:er |
| Rear-door heat exchangers | 20-40 kW/rack | Blandade miljöer |
| Direct-to-chip liquid cooling | 40-80 kW/rack | H100/B200, rekommenderat |
| Immersion cooling | 80-150 kW/rack | Maximal täthet, nyare teknik |

**Rekommendation**: Ny AI-infrastruktur bör planeras med direct-to-chip eller immersion cooling. Traditionell luftkylning är otillräcklig för B200-generationens ~1 kW per GPU.

---

## 4. Inference-beräkningar i detalj

### Tokens per sekund per GPU

Beror starkt på modellstorlek, kvantisering och batching:

| Modell | Precision | Batch size | Tokens/s per H100 | Källa |
|--------|-----------|------------|-------------------|-------|
| Llama 2 7B | FP16 | 1 | ~1 500 | Artificial Analysis |
| Llama 2 7B | INT8 | 32 | ~15 000 | vLLM benchmarks |
| Llama 2 70B | FP16 | 1 | ~100 | Artificial Analysis |
| Llama 2 70B | INT8 | 16 | ~2 000 | vLLM benchmarks |
| Llama 3 405B | FP8 | 8 | ~300-500 | Uppskattning (8 GPU tensor parallel) |
| Mixture-of-Experts (typ Mixtral) | FP16 | 16 | ~3 000-5 000 | MoE använder färre aktiva parametrar |

**I beräkningsmodellen**: Vi antar genomsnittligt ~3 000 tokens/s per H100 (A20), vilket motsvarar en blandning av modellstorlekar med batching och kvantisering. Detta är konservativt – effektiva inference-stacks kan ge mer.

### GPU-minne och modellstorlek

| Modellstorlek | FP16 VRAM | FP8 VRAM | Min H100 (80GB) |
|---------------|-----------|----------|------------------|
| 7B | 14 GB | 7 GB | 1 |
| 13B | 26 GB | 13 GB | 1 |
| 70B | 140 GB | 70 GB | 2 (tensor parallel) |
| 200B | 400 GB | 200 GB | 3-4 (tensor parallel) |
| 405B | 810 GB | 405 GB | 6-8 (tensor parallel) |

### TTFT (Time to First Token) och UX

| Scenario | Acceptabel TTFT | Kräver |
|----------|-----------------|--------|
| Interaktiv copilot | <1s | Dedikerade inference-servrar, låg queue |
| Batch-bearbetning | <10s | Kan dela resurser |
| Medicinsk bildanalys | <30s | Kan köras asynkront |

---

## 5. Träningsberäkningar i detalj

### Skalningslagar (Chinchilla-optimal)

Optimal träning enligt Chinchilla-skalningslagarna:
- **Tokens ≈ 20 × parametrar** (minimum, ofta mer)
- **Compute (FLOP) ≈ 6 × parametrar × tokens**

| Modellstorlek | Chinchilla-tokens | Compute (FLOP) | H100-timmar (FP16) |
|---------------|-------------------|----------------|---------------------|
| 7B | 140B | ~5,9 × 10²¹ | ~1 500 |
| 70B | 1,4T | ~5,9 × 10²³ | ~150 000 |
| 200B | 4T | ~4,8 × 10²⁴ | ~1 200 000 |
| 405B | 8T | ~1,9 × 10²⁵ | ~5 000 000 |

*I praktiken tränas modeller ofta på betydligt mer data (Llama 3 70B: 15T tokens, dvs ~100x Chinchilla-optimal).*

### Svensk 70B-modell – detaljkalkyl

| Parameter | Konservativt | Ambitiöst |
|-----------|-------------|-----------|
| Parametrar | 70B | 70B |
| Träningsdata | 500B tokens (svensk text) | 2T tokens (svensk + nordisk + multilingual) |
| Compute (FLOP) | ~2,1 × 10²³ | ~8,4 × 10²³ |
| H100-timmar | ~500 000 | ~2 000 000 |
| Klusterstorlek | 512 H100 | 2 048 H100 |
| Träningstid | ~40 dagar | ~40 dagar |
| Compute-kostnad | ~$15-25M | ~$60-100M |
| Kostnad inkl. data, personal, iterationer | ~$30-50M | ~$100-200M |

---

## 6. Ordlista för icke-tekniska läsare

| Term | Förklaring |
|------|-----------|
| **GPU** (Graphics Processing Unit) | Processor optimerad för parallella beräkningar, ursprungligen för grafik men nu central för AI |
| **H100** | NVIDIA:s datacenter-GPU från 2023, den nuvarande standardenheten för AI-beräkningar |
| **H100-ekvivalent (H100-eq)** | Måttenhet: en H100-ekvivalent = beräkningskraften hos en NVIDIA H100 GPU. Framtida, effektivare GPU:er räknas om till denna enhet |
| **Inference** | Att köra en redan tränad AI-modell för att generera svar. Varje gång du ställer en fråga till ChatGPT sker inference |
| **Träning** | Att skapa en AI-modell genom att mata den med stora mängder data. Kräver enormt mycket compute under en begränsad period |
| **Finjustering** (fine-tuning) | Att anpassa en befintlig modell till ett specifikt användningsområde, t.ex. svenska eller juridik. Kräver mindre compute än full träning |
| **LLM** (Large Language Model) | Stor språkmodell – den typ av AI som driver ChatGPT, Claude, etc. |
| **Token** | En textenhet som AI:n bearbetar, ungefär ¾ av ett ord. "Hej, hur mår du?" ≈ 6 tokens |
| **"Smarta" tokens** | I policydokument [08-strategi.md](../08-strategi.md): output från avancerad inference – den kapabilitet som stora språk- och multimodella modeller levererar per token (beslutsstöd, generering, resonemang). Jfr **inference** och **token** ovan. |
| **Frontier-modell** | En AI-modell i teknikens absoluta framkant (GPT-4, Claude, Gemini). Kostar $100M-$1B+ att träna |
| **Suverän AI** | AI-infrastruktur och modeller som kontrolleras nationellt, för att undvika beroende av utländska aktörer |
| **Teknisk suveränitet** | (EU-policy) Förmåga att i kritiska led av digital infrastruktur – inkl. moln, nät och beräkningskapacitet – inte vara utlämnad till enskilda tredjelandsleverantörer. Se [resources/links.md](../resources/links.md) (**L3**). |
| **Strategisk autonomi** | (EU-policy) Minska riskfyllda beroenden i kritiska teknik- och försörjningskedjor; relevant för AI, halvledare och data. Överlappar med **teknisk suveränitet** men bredare (handel, industri, säkerhet). |
| **CLOUD Act** | US-lag (2018) som under vissa förutsättningar ger amerikanska myndigheter rätt att kräva ut data från vissa leverantörer oavsett var data lagras; viktig för avvägningen vid molntjänster och GDPR. Se [resources/links.md](../resources/links.md) (**L4**). |
| **PUE** (Power Usage Effectiveness) | Mått på datacenter-effektivitet: totalt effektuttag / IT-utrustningens effekt. PUE 1,0 = perfekt. PUE 1,2 = 20% overhead för kylning etc. |
| **On-prem** (on-premises) | Utrustning som driftas i egna eller hyrda lokaler (jämfört med molntjänster) |
| **Moln** (cloud) | Att hyra beräkningskapacitet från leverantörer som AWS, Azure eller GCP |
| **FLOP** (Floating Point Operation) | En enskild beräkning. Används för att mäta total compute. Modern AI mäts i exaFLOP (10¹⁸) |
| **VRAM** | Minnet på en GPU. Begränsar hur stora modeller som kan köras på en enskild GPU |
| **Batch-inference** | Att bearbeta flera förfrågningar samtidigt för effektivare GPU-användning |
| **MoE** (Mixture-of-Experts) | Modellarkitektur där bara en del av modellen aktiveras per fråga, vilket minskar compute-behovet |
| **RAG** (Retrieval-Augmented Generation) | Teknik där AI:n söker i en kunskapsbas innan den svarar, för att ge mer precisa svar baserat på organisationens dokument |
| **LOU** | Lagen om offentlig upphandling – reglerar hur offentlig sektor köper tjänster och produkter |
| **S-kurva** | Adoptionsmönster där nya tekniker sprids långsamt först, sedan snabbt, och slutligen avtar. Typisk form för teknikadoption |
| **MW** (megawatt) | Effektenhet. 1 MW = 1 000 kilowatt. Ett modernt AI-datacenter drar 5-50 MW |
| **MSEK** | Miljoner svenska kronor |
