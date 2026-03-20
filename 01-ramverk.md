# 01 – Analytiskt ramverk och metodik

## Syfte

Uppskatta den svenska offentliga sektorns (exkl. försvar) behov av AI-beräkningskapacitet 2026-2031, med tillräcklig rigorositet för att stödja politiska investeringsbeslut.

## Metodik: Tre trianguleringsspår

Ingen enskild metod kan ge ett trovärdigt svar på frågan "hur mycket compute behöver offentlig sektor?" Vi använder tre oberoende spår och söker konvergens:

1. **Botten-upp**: Användningsfall × adoption × compute per enhet
2. **Topp-ned**: Internationella investeringar skalade till Sverige
3. **Storbolagstriangulering**: Vad kostar det att träna/köra de modeller offentlig sektor behöver, jämfört med vad storbolagen spenderar?

Där spåren konvergerar har vi högre konfidens. Där de divergerar identifierar vi osäkerhet.

---

## Efterfrågedrivare

Fem distinkta drivare, var och en med egen compute-profil:

### Drivare A: Kunskapsarbetare med AI-copilots
- **Population**: ~500 000 adresserbara användare (handläggare, tjänstemän, specialister) [A4, A13]
- **Användning**: Textsammanfattning, skrivstöd, kodassistans, informationssökning, översättning
- **Compute-profil**: Låg per fråga men hög volym. Inference på ~70B-400B-modeller.
- **Adoption**: Startar lågt (5-10%, 2026) pga upphandlingscykler (LOU), ramavtal, informationssäkerhet → accelererar 2028-2029 → 55-80% 2031 [A14-A17]

### Drivare B: Medborgarriktad automation
- **Volym**: Miljontals ärenden/år vid FK, Skatteverket, Migrationsverket, kommuner
- **Användning**: Ärendehandläggning, beslutsstöd, chatbots för medborgare, automatisk textgenerering
- **Compute-profil**: Medium per ärende, potentiellt mycket hög volym
- **Adoption**: Långsammare pga juridisk komplexitet (förvaltningslagen, AI-förordningen), men stor potential

### Drivare C: Specialiserad domän-AI
- **Områden**: Medicinsk bildanalys, geospatial analys, bedrägeridetektering, klimatmodellering
- **Compute-profil**: Hög per uppgift, specialiserade modeller, delvis GPU-intensivare än LLM-inference
- **Adoption**: Redan i tidig användning i vården; skalar med bevisad nytta

### Drivare D: Finjustering och anpassning
- **Vad**: Anpassa öppna modeller till svenska, myndighetsspecifika termer, känsliga data
- **Compute-profil**: Periodiska batch-jobb. Burst-kapacitet snarare än sustained.
- **Adoption**: Växer med antalet organisationer som bygger egna AI-lösningar

### Drivare E: Suverän förträning
- **Vad**: Träna svenska grundmodeller (successor till GPT-SW3), modeller för känsliga data
- **Compute-profil**: Massiv men episodisk. En 70B-modellträning = ~1M H100-timmar.
- **Adoption**: Politiskt driven – beroende av beslut om AI-suveränitet. Möjligen 1-2 stora träningskörningar per år.

---

## Användningsfallstaxonomi (4 compute-tier)

| Tier | Typ | Exempel | Compute-profil | Toppbelastning |
|------|-----|---------|----------------|----------------|
| **1** | Grundläggande LLM-inference | Copilots, sammanfattning, översättning | Låg per fråga, hög volym | Vardagar 08-17 |
| **2** | Specialiserad inference | Medicinsk bildanalys, komplexa resonemang, bedrägeri | Medium per fråga, domänspecifik | Varierande |
| **3** | Finjustering | Svensk språkanpassning, RAG-indexering | Periodiska batch-jobb | Schemalagd, burst |
| **4** | Suverän träning | Grundmodeller, känslig-data-modeller | Massiv men episodisk | Veckor-månader |

### Tier-egenskaper

**Tier 1-2** = *sustained capacity* – kapacitet som måste finnas tillgänglig varje arbetsdag. Dimensioneras efter peak-timme.

**Tier 3-4** = *burst capacity* – kan schemaläggas, köras nattetid/helg, och dela infrastruktur med Tier 1-2 under lågtrafik.

---

## Adoptionskurva

### S-kurva med svenska särdrag

Adoption modelleras som en modifierad S-kurva per segment:

```
Adoptionsgrad(t) = K / (1 + e^(-r(t - t₀)))
```

Där:
- **K** = maximal adoptionsgrad (aldrig 100% – budgetrestriktioner, irrelevanta arbetsuppgifter)
- **r** = tillväxthastighet
- **t₀** = inflektionspunkt

### Segmentspecifika faktorer

| Segment | Startläge (2026) | Inflektionspunkt | Max (2031) | Nyckelfaktor |
|---------|-----------------|------------------|------------|--------------|
| Statliga myndigheter (stora) | 10-15% | 2028 | 60-80% | Först med ramavtal, IT-mognad |
| Statliga myndigheter (små) | 3-5% | 2029 | 30-50% | Beroende av gemensamma tjänster |
| Regioner (vård) | 5-10% | 2028-2029 | 50-70% | Medicinsk AI-evidens driver |
| Kommuner (stora) | 5-8% | 2029 | 40-60% | Resursstarka, egna IT-avdelningar |
| Kommuner (små) | 1-3% | 2030 | 20-40% | Beroende av SKR/gemensamma plattformar |

### Adoptionshinder specifika för svensk offentlig sektor

1. **LOU (Lagen om offentlig upphandling)**: Upphandlingscykler 6-18 månader
2. **Informationssäkerhet**: Sekretessklassad data kräver on-prem eller suveränt moln
3. **Förvaltningsrättsliga krav**: AI-beslut måste vara motiverbara och överklagbara
4. **EU AI Act**: Compliance-krav, särskilt för "high-risk" AI-system i offentlig sektor
5. **Digital mognad**: Stor variation – SKR:s digitalisationsindex visar spann från 2/10 till 8/10
6. **Budget**: Kommuner under hård ekonomisk press 2025-2027

---

## Från drivare till GPU:er – beräkningslogik

```
Tier 1 sustained GPU:er = Aktiva användare × Frågor/dag × Tokens/fråga × GPU-tid/token
                          ÷ Arbetsdagssekunder × Overhead-faktor

Tier 2 sustained GPU:er = Σ (Ärendevolym × GPU-tid/ärende) per domän
                          ÷ Drifttid × Overhead-faktor

Tier 3 burst GPU:er     = Organisationer × Jobb/år × GPU-h/jobb
                          ÷ Tillgängliga burst-timmar/år

Tier 4 burst GPU:er     = Planerade träningskörningar × GPU-h/körning
                          ÷ Tillgängliga månader × Timmar/månad
```

Overhead-faktor inkluderar: redundans (~1,2x), peak-marginal (~1,3-1,5x), framtida modellstorlek.

Se 03-berakningsmodell.md för fullständiga beräkningar.

---

## Resultatformat

Alla estimat presenteras som:

| Mått | Låg | Bas | Hög | Enhet |
|------|-----|-----|-----|-------|
| GPU-kapacitet | x | y | z | H100-eq |
| Årskostnad | x | y | z | MSEK |
| Effektbehov | x | y | z | MW |

Med tydlig markering av vilka antaganden som driver varje scenario.
