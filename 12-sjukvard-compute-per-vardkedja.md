# 11 – Sjukvårdens AI-compute: botten-upp per vårdkedja

Komplement till den övergripande beräkningsmodellen (03). Här bryts Tier 2 (specialiserad inference) ned i **konkreta kliniska vårdkedjor** med spårbara volymer och compute-estimat per steg. Metoden: identifiera varje punkt i vårdkedjan där AI kan tillämpas, estimera GPU-tid per punkt, multiplicera med nationell volym.

---

## Metodik

```
Compute per vårdkedja = Σ (AI-steg × GPU-sekunder per steg)
Nationellt behov      = Compute per kedja × antal episoder/år
Sustained H100-eq     = Nationellt GPU-sekunder / (arbetsdagar × drifttimmar × 3 600)
```

Alla estimat anges som intervall (låg / bas / hög). GPU-sekunder avser H100-ekvivalenter vid batch-inference med medicinska modeller (typiskt 70B–200B parametrar, multimodala).

**Viktigt**: Estimaten nedan avser *inference*-compute — att köra redan tränade modeller. Träning av medicinska modeller hanteras i Tier 4 (03). Estimaten inkluderar inte compute för att bygga RAG-index över journaldata (Tier 3).

---

## Vårdkedja 1: Skelettfrakturer

### Volym

| Parameter | Värde | Källa |
|-----------|-------|-------|
| Frakturer per år (Sverige) | ~280 000–320 000 | Socialstyrelsen, ICD-10 S02–S92 |
| Varav kräver röntgen | ~95% | Klinisk praxis |
| Genomsnittligt antal röntgenundersökningar per episod | 2–4 (initial + uppföljning) | Klinisk praxis |
| Antal läkarbesök per episod | 3–5 | Initial + uppföljning + ev. ortoped |
| **Basvolym** | **300 000 episoder/år** | Avrundning |

*Datakälla: Socialstyrelsens patientregister (slutenvård + specialiserad öppenvård). Primärvårdsfrakturer som inte remitteras kan vara underrepresenterade. Komplettera med regionala data.*

### AI-tillämpningar per steg i vårdkedjan

#### Steg 1: Triage och initial bedömning

| AI-uppgift | Beskrivning | Modelltyp | GPU-sekunder (H100-eq) |
|------------|-------------|-----------|----------------------|
| Triagering | Prioritering baserat på symtombeskrivning + vitalparametrar | LLM (70B) | 2–5 |
| **Steg 1 total** | | | **2–5** |

*Tillämpbarhet: Akutmottagningar, 1177. Låg compute per ärende men hög volym.*

#### Steg 2: Bilddiagnostik (röntgen)

| AI-uppgift | Beskrivning | Modelltyp | GPU-sekunder (H100-eq) |
|------------|-------------|-----------|----------------------|
| Frakturdetektering | Identifiera fraktur, typ, läge | Vision-modell (specialiserad) | 5–15 per bild |
| Uppmärksamhetskarta | Markera frakturens läge för radiologen | Vision-modell | 2–5 per bild |
| Jämförelse med tidigare bilder | Matcha mot patientens historik | Vision + retrieval | 5–10 per undersökning |
| Prioritering av gransningskö | Flagga akuta/komplexa fynd | Classifier | 1–2 per undersökning |
| **Steg 2 per undersökning** | | | **13–32** |
| **Steg 2 per episod** (3 undersökningar medel) | | | **39–96** |

*Not: Specialiserade vision-modeller är mer GPU-intensiva per inference än text-LLM:er pga bildupplösning (typiskt 2 000×2 000+ pixlar). Batch-processing kan effektivisera, men peak-belastning under dagtid kräver provisionerad kapacitet.*

#### Steg 3: Klinisk dokumentation (per besök)

| AI-uppgift | Beskrivning | Modelltyp | GPU-sekunder (H100-eq) |
|------------|-------------|-----------|----------------------|
| Taltranskription | Läkarens diktering → text (5–10 min ljud) | Whisper-klass (speech-to-text) | 15–40 |
| Strukturerad journalanteckning | Transkription + mall → SOAP-anteckning | LLM (70B–200B, medicinsk) | 10–30 |
| Kodningsförslag | ICD-10, KVÅ-koder från fritext | LLM + klassificerare | 3–8 |
| Kvalitetskontroll | Identifiera saknade uppgifter, inkonsekvenser | LLM (reasoning) | 5–15 |
| **Steg 3 per besök** | | | **33–93** |
| **Steg 3 per episod** (4 besök medel) | | | **132–372** |

*Not: Taltranskription är relativt compute-tungt. Whisper large-v3 på H100 transkriberar ~30x realtid, men medicinska termer kräver ofta specialiserad modell med lägre throughput.*

#### Steg 4: Kliniskt beslutsstöd

| AI-uppgift | Beskrivning | Modelltyp | GPU-sekunder (H100-eq) |
|------------|-------------|-----------|----------------------|
| Behandlingsrekommendation | Frakturtyp + patient → behandlingsplan | LLM (200B, medicinsk reasoning) | 10–30 |
| Läkemedelsinteraktioner | Kontroll mot befintlig medicinlista | LLM + kunskapsbas | 3–8 |
| Riskbedömning (komplikationer) | Ålder, komorbiditet → risk för icke-läkning, DVT | LLM + strukturerad data | 5–15 |
| **Steg 4 per episod** | | | **18–53** |

*Not: Reasoning-modeller (typ Opus 4.6 extended thinking) kan använda 10–100x fler interna tokens. "GPU-sekunder" avser total compute inklusive thinking-tokens, inte bara synlig output.*

#### Steg 5: Patientkommunikation

| AI-uppgift | Beskrivning | Modelltyp | GPU-sekunder (H100-eq) |
|------------|-------------|-----------|----------------------|
| Patientbrev (klarspråk) | Journal → begriplig sammanfattning för patienten | LLM (70B) | 5–15 |
| Egenvårdsinstruktioner | Anpassade efter frakturtyp, ålder, mediciner | LLM | 3–8 |
| Översättning | Till patientens språk vid behov | LLM (translation) | 2–5 |
| **Steg 5 per episod** | | | **10–28** |

#### Steg 6: Uppföljning och utskrivning

| AI-uppgift | Beskrivning | Modelltyp | GPU-sekunder (H100-eq) |
|------------|-------------|-----------|----------------------|
| Remiss/epikris-generering | Sammanfattning till annan vårdgivare | LLM (medicinsk) | 5–15 |
| Läkningsanalys (uppföljningsröntgen) | Jämförelse med initial bild | Vision-modell | 10–20 |
| Rehabiliteringsplan | Anpassad sjukgymnastik-rekommendation | LLM | 3–10 |
| **Steg 6 per episod** | | | **18–45** |

### Summering: Skelettfraktur

| Steg | GPU-sekunder per episod (låg) | GPU-sekunder (bas) | GPU-sekunder (hög) |
|------|------------------------------|--------------------|--------------------|
| 1. Triage | 2 | 3 | 5 |
| 2. Bilddiagnostik | 39 | 60 | 96 |
| 3. Klinisk dokumentation | 132 | 230 | 372 |
| 4. Beslutsstöd | 18 | 35 | 53 |
| 5. Patientkommunikation | 10 | 18 | 28 |
| 6. Uppföljning/utskrivning | 18 | 30 | 45 |
| **Total per episod** | **219** | **376** | **599** |

### Nationellt compute-behov: Skelettfrakturer

| Parameter | Låg | Bas | Hög |
|-----------|-----|-----|-----|
| Episoder per år | 280 000 | 300 000 | 320 000 |
| AI-adoption (2029) | 40% | 60% | 80% |
| AI-behandlade episoder | 112 000 | 180 000 | 256 000 |
| GPU-sekunder per episod | 219 | 376 | 599 |
| **Total GPU-sekunder/år** | **24,5M** | **67,7M** | **153,3M** |
| Drifttid (250 dagar × 10h = 9M s) | | | |
| **Sustained H100-eq** | **2,7** | **7,5** | **17,0** |
| Peak-faktor (×1,5, dagtid) | **4,1** | **11,3** | **25,5** |

---

## Vårdkedja 2: Lungröntgen (thorax)

### Volym

| Parameter | Värde | Källa |
|-----------|-------|-------|
| Thoraxröntgen per år | ~1 800 000–2 200 000 | Socialstyrelsen, regiondata |
| Vanligaste indikationer | Pneumoni, hjärtsvikt, lungcancer-screening, pre-op | |
| Antal besök associerade | Ofta 1–2 (akut eller planerad) | |
| **Basvolym** | **2 000 000 undersökningar/år** | |

### AI-tillämpningar

| Steg | AI-uppgift | GPU-sekunder per undersökning |
|------|-----------|-------------------------------|
| Bildanalys | Detektering av 15+ patologier (noduli, pleuraexsudat, kardiomegali, pneumothorax, frakturer, etc.) | 10–25 |
| Prioritering | Akutflaggning (pneumothorax, stor pleuraexsudat) → röntgenjouren | 2–5 |
| Jämförelse | Matchning mot tidigare thoraxröntgen (förändringsdetektering) | 10–20 |
| Rapport-draft | AI-genererat radiologsvar (structured reporting) | 10–25 |
| Transkription + journal (associerat besök) | Diktering + SOAP-anteckning | 33–93 |
| Beslutsstöd | Uppföljningsrekommendation baserat på fynd | 5–15 |
| **Total per undersökning** | | **70–183** |

### Nationellt compute-behov: Lungröntgen

| Parameter | Låg | Bas | Hög |
|-----------|-----|-----|-----|
| Undersökningar/år | 1 800 000 | 2 000 000 | 2 200 000 |
| AI-adoption (2029) | 50% | 70% | 90% |
| AI-behandlade | 900 000 | 1 400 000 | 1 980 000 |
| GPU-sek per undersökning | 70 | 120 | 183 |
| **Total GPU-sekunder/år** | **63M** | **168M** | **362M** |
| **Sustained H100-eq** | **7,0** | **18,7** | **40,2** |
| **Med peak-faktor (×1,5)** | **10,5** | **28,0** | **60,3** |

---

## Vårdkedja 3: Diabetesvård (typ 2)

### Volym

| Parameter | Värde | Källa |
|-----------|-------|-------|
| Patienter med diabetes typ 2 (Sverige) | ~450 000–500 000 | Nationella diabetesregistret (NDR) |
| Vårdkontakter per patient per år | 3–6 (primärvård + specialist) | NDR |
| Totala diabetesrelaterade besök | ~1 500 000–3 000 000 | Härlett |
| **Basvolym** | **2 000 000 besök/år** | |

### AI-tillämpningar (per besök)

| Steg | AI-uppgift | GPU-sekunder |
|------|-----------|-------------|
| Labbtolkning | HbA1c, lipider, kreatinin → trendanalys + flaggning | 3–8 |
| Medicingenomgång | Optimering av medicinlista (metformin, SGLT2, GLP-1, etc.) | 10–25 |
| Riskberäkning | 10-års kardiovaskulär risk, njursviktsrisk, fotulcus-risk | 5–15 |
| Dokumentation | Transkription + strukturerad anteckning | 33–93 |
| Egenvårdscoachning | Individuell rekommendation (kost, motion, blodsockermätning) | 5–15 |
| Remissunderlag | Vid komplikation: generera remiss till ögon, njur, kardiolog | 5–15 |
| **Total per besök** | | **61–171** |

### Kronisk dimension: Kontinuerlig övervakning

| AI-uppgift | Beskrivning | GPU-sekunder/patient/år |
|------------|-------------|------------------------|
| CGM-dataanalys | Kontinuerlig glukosmätning → mönsteridentifiering (för de ~100K med CGM) | 60–300 |
| Proaktiv flaggning | Identifiera patienter med försämring mellan besök (population health) | 10–30 |
| **Kronisk tillägg per patient** | | **70–330** |

### Nationellt compute-behov: Diabetes typ 2

| Parameter | Låg | Bas | Hög |
|-----------|-----|-----|-----|
| Besök per år | 1 500 000 | 2 000 000 | 3 000 000 |
| AI-adoption (2029) | 40% | 60% | 80% |
| AI-behandlade besök | 600 000 | 1 200 000 | 2 400 000 |
| GPU-sek per besök | 61 | 110 | 171 |
| Besökscompute (GPU-sek/år) | 36,6M | 132M | 410M |
| Kronisk övervakning (475K pat × adoption) | 13,3M | 57M | 125M |
| **Total GPU-sekunder/år** | **49,9M** | **189M** | **535M** |
| **Sustained H100-eq** | **5,5** | **21,0** | **59,4** |
| **Med peak (×1,5)** | **8,3** | **31,5** | **89,2** |

---

## Vårdkedja 4: Psykisk ohälsa (primärvård)

### Volym

| Parameter | Värde | Källa |
|-----------|-------|-------|
| Primärvårdsbesök med psykisk diagnos per år | ~3 000 000–4 000 000 | Socialstyrelsen, SKR |
| Vanligaste: depression, ångest, stressreaktion, sömnstörning | | |
| Genomsnittlig kontaktserie | 4–8 besök per episod | |
| **Basvolym** | **3 500 000 besök/år** | |

### AI-tillämpningar (per besök)

| Steg | AI-uppgift | GPU-sekunder |
|------|-----------|-------------|
| Taltranskription | Längre samtal (15–30 min) | 30–80 |
| Samtalsdokumentation | Strukturerad anteckning med terapeutiskt fokus | 15–40 |
| Skattningsinstrument | Automatisk scoring av PHQ-9, GAD-7 från samtalsdatan | 3–8 |
| Behandlingsuppföljning | Jämförelse med tidigare besök, progress-tracking | 5–15 |
| Medicingenomgång (SSRI etc.) | Interaktioner, dosjustering | 5–15 |
| Remissbedömning | Indikation för specialistpsykiatri? | 5–10 |
| **Total per besök** | | **63–168** |

*Not: Psykiatri/psykologi har den tyngsta dokumentationsbördan i primärvården. Längre samtal → mer transkription. Potentiellt högst ROI per AI-investerad GPU-sekund.*

### Nationellt compute-behov: Psykisk ohälsa

| Parameter | Låg | Bas | Hög |
|-----------|-----|-----|-----|
| Besök/år | 3 000 000 | 3 500 000 | 4 000 000 |
| AI-adoption (2029) | 30% | 50% | 70% |
| AI-behandlade besök | 900 000 | 1 750 000 | 2 800 000 |
| GPU-sek per besök | 63 | 110 | 168 |
| **Total GPU-sekunder/år** | **56,7M** | **192,5M** | **470M** |
| **Sustained H100-eq** | **6,3** | **21,4** | **52,2** |
| **Med peak (×1,5)** | **9,5** | **32,1** | **78,3** |

---

## Vårdkedja 5: Cancerdiagnostik

### Volym

| Parameter | Värde | Källa |
|-----------|-------|-------|
| Nya cancerfall per år (Sverige) | ~68 000–72 000 | Cancerregistret |
| Utredningsfall (inkl. de som inte diagnostiseras) | ~200 000–300 000 | Uppskattning: 3–4x bekräftade |
| Patologiprover per utredning | 2–5 | |
| Radiologiska undersökningar per utredning | 3–8 (röntgen, CT, MR, PET-CT) | |
| MDK-konferenser (multidisciplinär) | ~1–2 per bekräftat fall | |
| **Basvolym** | **250 000 utredningar/år** | |

### AI-tillämpningar

| Steg | AI-uppgift | GPU-sekunder per utredning |
|------|-----------|---------------------------|
| Patologisk bildanalys | Histologi/cytologi: tumörtyp, grad, marginaler (whole-slide imaging, gigapixel) | 60–300 |
| Radiologisk bildanalys | CT/MR/PET: tumörstorlek, lymfkörtlar, metastaser (3D-volymer) | 30–120 |
| Genomik/biomarkörer | Mutationsanalys, behandlingsprediktering | 20–60 |
| MDK-förberedelse | Sammanställning av alla data → strukturerad utredningsöversikt | 15–40 |
| Behandlingsplan | Rekommendation baserat på tumördata + patient + evidens | 15–40 |
| Dokumentation (alla besök, 4–8 st) | Transkription + journal × antal besök | 130–750 |
| Patientkommunikation | Förklarande sammanfattningar, översättning | 10–30 |
| **Total per utredning** | | **280–1 340** |

*Not: Cancerpatologi (whole-slide imaging) är den mest compute-intensiva enskilda medicinska AI-uppgiften. En enda histologibild kan vara 100 000 × 100 000 pixlar.*

### Nationellt compute-behov: Cancerdiagnostik

| Parameter | Låg | Bas | Hög |
|-----------|-----|-----|-----|
| Utredningar/år | 200 000 | 250 000 | 300 000 |
| AI-adoption (2029) | 30% | 50% | 70% |
| AI-behandlade | 60 000 | 125 000 | 210 000 |
| GPU-sek per utredning | 280 | 700 | 1 340 |
| **Total GPU-sekunder/år** | **16,8M** | **87,5M** | **281M** |
| **Sustained H100-eq** | **1,9** | **9,7** | **31,2** |
| **Med peak (×1,5)** | **2,8** | **14,6** | **46,9** |

---

## Sammanställning: Fem vårdkedjor

### Sustained H100-eq (2029, med peak-faktor)

| Vårdkedja | Episoder/år | Låg | Bas | Hög |
|-----------|-------------|-----|-----|-----|
| Skelettfrakturer | 300 000 | 4 | 11 | 26 |
| Lungröntgen | 2 000 000 | 11 | 28 | 60 |
| Diabetes typ 2 | 2 000 000 besök | 8 | 32 | 89 |
| Psykisk ohälsa | 3 500 000 besök | 10 | 32 | 78 |
| Cancerdiagnostik | 250 000 | 3 | 15 | 47 |
| **Summa fem vårdkedjor** | | **36** | **118** | **300** |

### Extrapolering till hela sjukvården

Dessa fem vårdkedjor täcker ~8 miljoner av uppskattningsvis ~55–70 miljoner vårdkontakter per år (~12–15%). Om vi antar att de är representativa för compute-intensiteten (konservativt — cancer/patologi är tyngre än genomsnittet):

| Metod | Bas (H100-eq) | Hög (H100-eq) |
|-------|---------------|---------------|
| **Direkt skalning** (5 kedjor → alla) | 118 / 12% = ~1 000 | 300 / 12% = ~2 500 |
| **Justerat** (de 5 är tyngre än snitt, ×0,6) | ~600 | ~1 500 |
| **Med agentisk overhead** (reasoning-modeller 2029, ×3) | ~1 800 | ~4 500 |
| **Med bakgrundsagenter** (populationshälsa, batch-analys) | ~2 500 | ~6 000 |
| **Med redundans + testmiljöer (×1,3)** | ~3 200 | ~7 800 |

### Jämförelse med nuvarande modell (03)

| Komponent | Nuvarande Tier 2 (03, bas 2029) | Sjukvårdsdelen av Tier 2 | Reviderat (detta dokument) |
|-----------|--------------------------------|--------------------------|---------------------------|
| Sjukvårds-AI | ~200–300 (implicit) | Ingår i 500 totalt | **1 800–3 200** |

Det nuvarande Tier 2-estimatet för hela sjukvården (~200–300 H100-eq) fångar **enbart bilddiagnostik i batch-mode** (03: "~6 sustained + burst"). Det missar:
- Transkription (~30–40% av compute i denna analys)
- Klinisk dokumentation (~25–30%)
- Beslutsstöd och reasoning (~15%)
- Patientkommunikation (~5%)
- Kronisk övervakning och populationshälsa (~10%)

---

## Datakällor att verifiera

| Uppgift | Källa | URL/kontakt |
|---------|-------|-------------|
| Frakturvolymer per ICD-kod | Socialstyrelsens patientregister | socialstyrelsen.se/statistik |
| Röntgenvolymer per modalitet | Strålsäkerhetsmyndigheten + regiondata | |
| Diabetesprevalens och vårdkontakter | Nationella diabetesregistret (NDR) | ndr.nu |
| Cancerincidence och utredningsvolymer | Cancerregistret | cancerregistret.se |
| Psykisk ohälsa i primärvård | SKR primärvårdsstatistik | |
| Total vårdkontaktvolym per region | SKR Vården i siffror | vardenisiffror.se |

---

## Mall för att lägga till fler vårdkedjor

```markdown
## Vårdkedja N: [Namn]

### Volym
| Parameter | Värde | Källa |
|-----------|-------|-------|
| [Huvudvolym] per år | | |
| Antal AI-relevanta kontakter per episod | | |
| **Basvolym** | | |

### AI-tillämpningar
| Steg | AI-uppgift | Modelltyp | GPU-sekunder (H100-eq) |
|------|-----------|-----------|----------------------|
| [Steg] | [Uppgift] | [Modell] | [Låg–hög] |
| **Total per episod** | | | **[Låg–hög]** |

### Nationellt compute-behov
| Parameter | Låg | Bas | Hög |
|-----------|-----|-----|-----|
| Episoder/år | | | |
| AI-adoption (2029) | | | |
| GPU-sek per episod | | | |
| **Sustained H100-eq (med peak)** | | | |
```

---

*Alla GPU-sekundvärden är estimat baserade på publicerade benchmarks (vLLM, Whisper, medicinsk vision-AI) och bör valideras mot faktiska driftsdata när sådana finns. Volymdata bör verifieras mot Socialstyrelsens och SKR:s senaste statistik.*
