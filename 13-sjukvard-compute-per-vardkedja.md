# 13 – Sjukvårdens AI-compute: botten-upp per vårdkedja

Komplement till [03-berakningsmodell.md](03-berakningsmodell.md). Här bryts sjukvårdens AI-behov ned i konkreta kliniska vårdkedjor med spårbara volymer och compute-estimat per steg.

**Syfte**: Visa att nuvarande Tier 2-estimat för sjukvården (~6 H100-eq sustained + burst) fångar enbart bilddiagnostik i batch-mode. Den verkliga bilden inkluderar transkription, dokumentation, beslutsstöd, patientkommunikation och populationshälsa — och dessa poster är väsentligt större.

**Dubbelräkningskontroll**: Sjukvårdens compute delas i två kategorier:

| Kategori | Vad den fångar | Var den räknas i huvudmodellen |
|----------|---------------|-------------------------------|
| **Tier 1-relevant** (copilot/agent) | Transkription, journaldokumentation, patientbrev, remisser | Ingår redan i Tier 1:s ~2 200 H100-eq (A58) — sjukvårdspersonal är del av den adresserbara populationen (A13: ~500 000) |
| **Tier 2-unik** (specialiserad inference) | Bilddiagnostik, patologi, kliniskt beslutsstöd, kronisk övervakning, genomik | Underskattat i nuvarande Tier 2 — detta dokument visar varför |

Alla estimat anges som intervall (låg / bas / hög). GPU-sekunder avser H100-ekvivalenter vid batch-inference med medicinska modeller (70B–200B parametrar, multimodala).

---

## Metodik

```
Compute per vårdkedja = Σ (AI-steg × GPU-sekunder per steg)
Nationellt behov      = Compute per kedja × antal episoder/år × AI-adoption
Sustained H100-eq     = Nationellt GPU-sekunder / (arbetsdagar × drifttimmar × 3 600)
```

---

## Vad Tier 1 redan fångar: Sjukvård som copilot/agent-användare

Sjukvårdspersonalen utgör en stor del av den offentliga sektorns adresserbara population. Av ~1 200 000 anställda i offentlig sektor (A1) arbetar ~350 000 i regionerna, varav en betydande andel är kunskapsarbetare (läkare, sjuksköterskor med dokumentationsuppgifter, administratörer).

Dessa användare fångas redan av Tier 1 (A13, A51–A60). Deras copilot- och agentanvändning inkluderar:

| AI-uppgift i sjukvården | Tier 1-exempel | GPU-profil |
|------------------------|----------------|------------|
| Taltranskription (diktering → text) | Whisper-klass, 5–30 min ljud per besök | 15–80 GPU-sek/besök |
| Strukturerad journalanteckning | LLM (70B–200B): transkription → SOAP-anteckning | 10–30 GPU-sek/besök |
| ICD-10/KVÅ-kodningsförslag | LLM + klassificerare | 3–8 GPU-sek/besök |
| Kvalitetskontroll av dokumentation | LLM (reasoning) | 5–15 GPU-sek/besök |
| Patientbrev (klarspråk) | LLM: journal → begriplig sammanfattning | 5–15 GPU-sek/episod |
| Egenvårdsinstruktioner | LLM: anpassat efter diagnos, mediciner | 3–8 GPU-sek/episod |
| Översättning | LLM (translation) | 2–5 GPU-sek/episod |
| Remiss/epikris-generering | LLM (medicinsk) | 5–15 GPU-sek/episod |

**Storleksordning**: En typisk vårdepisod (3–5 besök) genererar ~150–400 GPU-sekunder i Tier 1-arbete (transkription + dokumentation + kommunikation). Med ~10–15 miljoner AI-behandlade besök nationellt 2029 (bas) motsvarar detta ~2–6 miljarder GPU-sekunder/år — men det är redan inkluderat i Tier 1:s tokenbudget genom att sjukvårdspersonalen ingår i den segmenterade användarpopulationen.

**Varför det redan fångas**: Tier 1:s ~330 000 aktiva användare (bas 2029) inkluderar tiotusentals sjukvårdsanställda. Deras tokens/dag (copilot: 30K, agent: 300K–500K) täcker transkription, dokumentation och kommunikation. En läkare med 15 patientmöten/dag som dikterar 5–10 min per möte och genererar journalanteckningar + patientbrev ligger i agentanvändarens segment (~300K–500K tokens/dag).

---

## Vad Tier 2 missar: Specialiserad medicinsk inference

Det som **inte** fångas av Tier 1 är domänspecifika modeller som kräver specialiserad infrastruktur:

- Bilddiagnostik (röntgen, CT, MR, PET-CT, mammografi)
- Patologi (whole-slide imaging, gigapixelbilder)
- Kliniskt beslutsstöd med medicinsk reasoning
- Genomik och biomarkörsanalys
- Kronisk övervakning (populationshälsa, CGM-data)

Dessa kräver specialiserade vision-modeller, medicinska reasoning-modeller och dedikerad infrastruktur — inte generella LLM-tokens.

---

## Vårdkedja 1: Skelettfrakturer

### Volym

| Parameter | Värde | Källa |
|-----------|-------|-------|
| Frakturer per år (Sverige) | ~280 000–320 000 | Socialstyrelsen, ICD-10 S02–S92 |
| Varav kräver röntgen | ~95% | Klinisk praxis |
| Röntgenundersökningar per episod | 2–4 (initial + uppföljning) | Klinisk praxis |
| **Basvolym** | **300 000 episoder/år** | Avrundning |

### Tier 2-specifik compute (ej dubbelräknad mot Tier 1)

| Steg | AI-uppgift | Modelltyp | GPU-sekunder (H100-eq) |
|------|-----------|-----------|----------------------|
| Bilddiagnostik | Frakturdetektering: identifiera typ, läge | Vision-modell (specialiserad) | 5–15 per bild |
| Bilddiagnostik | Uppmärksamhetskarta: markera frakturens läge | Vision-modell | 2–5 per bild |
| Bilddiagnostik | Jämförelse med tidigare bilder | Vision + retrieval | 5–10 per undersökning |
| Prioritering | Flagga akuta/komplexa fynd för akutgranskning | Classifier | 1–2 per undersökning |
| Beslutsstöd | Behandlingsrekommendation (frakturtyp + patient) | LLM (200B, medicinsk reasoning) | 10–30 per episod |
| Beslutsstöd | Riskbedömning (komplikationer, DVT, icke-läkning) | LLM + strukturerad data | 5–15 per episod |
| Uppföljning | Läkningsanalys (uppföljningsröntgen vs initial) | Vision-modell | 10–20 per episod |
| **Tier 2 per episod** | | | **54–137** |

*Not: Bildanalys på röntgen (2 000×2 000+ pixlar) med VISTA-3D-klass modeller tar ~3–15 sek/bild på H100 (NVIDIA NIM benchmarks). Medicinsk reasoning-overhead (chain-of-thought) kan använda 10–100x fler interna tokens.*

### Tier 2 nationellt: Skelettfrakturer

| Parameter | Låg | Bas | Hög |
|-----------|-----|-----|-----|
| Episoder per år | 280 000 | 300 000 | 320 000 |
| AI-adoption (2029) | 40% | 60% | 80% |
| GPU-sek per episod (Tier 2) | 54 | 90 | 137 |
| **Total GPU-sekunder/år** | **6,0M** | **16,2M** | **35,1M** |
| **Sustained H100-eq** | **0,7** | **1,8** | **3,9** |
| **Med peak-faktor (×1,5)** | **1,0** | **2,7** | **5,9** |

---

## Vårdkedja 2: Lungröntgen (thorax)

### Volym

| Parameter | Värde | Källa |
|-----------|-------|-------|
| Thoraxröntgen per år | ~1 800 000–2 200 000 | Strålsäkerhetsmyndigheten, SSM rapport 2025:07 |
| Vanligaste indikationer | Pneumoni, hjärtsvikt, lungcancer-screening, pre-op | |
| **Basvolym** | **2 000 000 undersökningar/år** | |

### Tier 2-specifik compute

| Steg | AI-uppgift | GPU-sekunder per undersökning |
|------|-----------|-------------------------------|
| Bildanalys | Detektering av 15+ patologier (noduli, pleuraexsudat, kardiomegali, pneumothorax) | 10–25 |
| Prioritering | Akutflaggning → röntgenjouren | 2–5 |
| Jämförelse | Matchning mot tidigare thoraxröntgen (förändringsdetektering) | 10–20 |
| Beslutsstöd | Uppföljningsrekommendation baserat på fynd | 5–15 |
| **Tier 2 per undersökning** | | **27–65** |

### Tier 2 nationellt: Lungröntgen

| Parameter | Låg | Bas | Hög |
|-----------|-----|-----|-----|
| Undersökningar/år | 1 800 000 | 2 000 000 | 2 200 000 |
| AI-adoption (2029) | 50% | 70% | 90% |
| GPU-sek per undersökning (Tier 2) | 27 | 42 | 65 |
| **Total GPU-sekunder/år** | **24,3M** | **58,8M** | **128,7M** |
| **Sustained H100-eq** | **2,7** | **6,5** | **14,3** |
| **Med peak (×1,5)** | **4,1** | **9,8** | **21,5** |

---

## Vårdkedja 3: Diabetesvård (typ 2)

### Volym

| Parameter | Värde | Källa |
|-----------|-------|-------|
| Patienter med diabetes typ 2 | ~450 000–550 000 | NDR; prevalens ~7,5% (2021, ökande) |
| Vårdkontakter per patient/år | 3–6 | NDR |
| **Basvolym** | **500 000 patienter, ~2 000 000 besök/år** | |

### Tier 2-specifik compute (per besök)

| Steg | AI-uppgift | GPU-sekunder |
|------|-----------|-------------|
| Labbtolkning | HbA1c, lipider, kreatinin → trendanalys + flaggning | 3–8 |
| Medicingenomgång | Optimering av medicinlista (metformin, SGLT2, GLP-1) | 10–25 |
| Riskberäkning | 10-års kardiovaskulär risk, njursviktsrisk, fotulcus-risk | 5–15 |
| **Tier 2 per besök** | | **18–48** |

### Kronisk dimension: Kontinuerlig övervakning

| AI-uppgift | Beskrivning | GPU-sekunder/patient/år |
|------------|-------------|------------------------|
| CGM-dataanalys | Kontinuerlig glukosmätning → mönsteridentifiering (för de ~100K med CGM) | 60–300 |
| Proaktiv flaggning | Identifiera patienter med försämring mellan besök (population health) | 10–30 |
| **Kronisk tillägg per patient** | | **70–330** |

### Tier 2 nationellt: Diabetes typ 2

| Parameter | Låg | Bas | Hög |
|-----------|-----|-----|-----|
| Besök per år | 1 500 000 | 2 000 000 | 3 000 000 |
| AI-adoption (2029) | 40% | 60% | 80% |
| GPU-sek per besök (Tier 2) | 18 | 30 | 48 |
| Besökscompute (GPU-sek/år) | 10,8M | 36,0M | 115,2M |
| Kronisk övervakning (500K pat × adoption) | 14,0M | 57,0M | 132,0M |
| **Total GPU-sekunder/år** | **24,8M** | **93,0M** | **247,2M** |
| **Sustained H100-eq** | **2,8** | **10,3** | **27,5** |
| **Med peak (×1,5)** | **4,1** | **15,5** | **41,2** |

---

## Vårdkedja 4: Psykisk ohälsa (primärvård)

### Volym

| Parameter | Värde | Källa |
|-----------|-------|-------|
| Primärvårdsbesök med psykisk diagnos/år | ~3 000 000–4 000 000 | Socialstyrelsen, SKR |
| Vanligaste: depression, ångest, stressreaktion, sömnstörning | | |
| **Basvolym** | **3 500 000 besök/år** | |

### Tier 2-specifik compute (per besök)

| Steg | AI-uppgift | GPU-sekunder |
|------|-----------|-------------|
| Skattningsinstrument | Automatisk scoring av PHQ-9, GAD-7 från samtalsdata | 3–8 |
| Behandlingsuppföljning | Jämförelse med tidigare besök, progress-tracking | 5–15 |
| Medicingenomgång (SSRI etc.) | Interaktioner, dosjustering, guidelines-match | 5–15 |
| Remissbedömning | Indikation för specialistpsykiatri? Strukturerad analys | 5–10 |
| **Tier 2 per besök** | | **18–48** |

*Not: Transkription av längre samtal (15–30 min) och dokumentation faller under Tier 1 — sjukvårdspersonalens copilot/agent-användning. Dessa poster räknas inte här.*

### Tier 2 nationellt: Psykisk ohälsa

| Parameter | Låg | Bas | Hög |
|-----------|-----|-----|-----|
| Besök/år | 3 000 000 | 3 500 000 | 4 000 000 |
| AI-adoption (2029) | 30% | 50% | 70% |
| GPU-sek per besök (Tier 2) | 18 | 30 | 48 |
| **Total GPU-sekunder/år** | **16,2M** | **52,5M** | **134,4M** |
| **Sustained H100-eq** | **1,8** | **5,8** | **14,9** |
| **Med peak (×1,5)** | **2,7** | **8,8** | **22,4** |

---

## Vårdkedja 5: Cancerdiagnostik

### Volym

| Parameter | Värde | Källa |
|-----------|-------|-------|
| Nya cancerfall per år | ~60 000–70 000 | Socialstyrelsen, Cancerregistret 2024 |
| Utredningsfall (inkl. icke-bekräftade) | ~200 000–300 000 | ~3–4x bekräftade |
| Patologiprover per utredning | 2–5 | |
| Radiologiska undersökningar per utredning | 3–8 (CT, MR, PET-CT) | |
| MDK-konferenser | ~1–2 per bekräftat fall | |
| **Basvolym** | **250 000 utredningar/år** | |

### Tier 2-specifik compute

| Steg | AI-uppgift | GPU-sekunder per utredning |
|------|-----------|---------------------------|
| Patologisk bildanalys | Histologi/cytologi: tumörtyp, grad, marginaler (whole-slide imaging, gigapixel) | 60–300 |
| Radiologisk bildanalys | CT/MR/PET: tumörstorlek, lymfkörtlar, metastaser (3D-volymer) | 30–120 |
| Genomik/biomarkörer | Mutationsanalys, behandlingsprediktering | 20–60 |
| MDK-förberedelse | Sammanställning av alla data → strukturerad utredningsöversikt | 15–40 |
| Behandlingsplan | Rekommendation baserat på tumördata + patient + evidens | 15–40 |
| **Tier 2 per utredning** | | **140–560** |

*Not: Cancerpatologi (whole-slide imaging) är den mest compute-intensiva enskilda medicinska AI-uppgiften. En enda histologibild kan vara 100 000 × 100 000 pixlar. Geo-MIL-modeller visar ~12–45 sek per WSI beroende på antal patches (Nature, 2025). Dokumentation och patientkommunikation faller under Tier 1.*

### Tier 2 nationellt: Cancerdiagnostik

| Parameter | Låg | Bas | Hög |
|-----------|-----|-----|-----|
| Utredningar/år | 200 000 | 250 000 | 300 000 |
| AI-adoption (2029) | 30% | 50% | 70% |
| GPU-sek per utredning (Tier 2) | 140 | 300 | 560 |
| **Total GPU-sekunder/år** | **8,4M** | **37,5M** | **117,6M** |
| **Sustained H100-eq** | **0,9** | **4,2** | **13,1** |
| **Med peak (×1,5)** | **1,4** | **6,3** | **19,6** |

---

## Sammanställning: Tier 2-unik compute från fem vårdkedjor

### Sustained H100-eq (2029, med peak-faktor)

| Vårdkedja | Episoder/år | Låg | Bas | Hög |
|-----------|-------------|-----|-----|-----|
| Skelettfrakturer | 300 000 | 1 | 3 | 6 |
| Lungröntgen | 2 000 000 | 4 | 10 | 22 |
| Diabetes typ 2 | 2 000 000 besök + kronisk | 4 | 16 | 41 |
| Psykisk ohälsa | 3 500 000 besök | 3 | 9 | 22 |
| Cancerdiagnostik | 250 000 | 1 | 6 | 20 |
| **Summa fem kedjor (Tier 2-unik)** | | **13** | **44** | **111** |

### Extrapolering till hela sjukvården

Dessa fem vårdkedjor täcker ~8 miljoner av uppskattningsvis ~55–70 miljoner vårdkontakter per år (~12–15%). Cancer/patologi och kronisk övervakning är tyngre än genomsnittet; enklare besök (förkylning, kontroller) genererar minimal Tier 2-compute.

| Metod | Bas (H100-eq) | Hög (H100-eq) |
|-------|---------------|---------------|
| **Direkt skalning** (5 kedjor → alla, 12% täckning) | 44 / 12% ≈ ~370 | 111 / 12% ≈ ~930 |
| **Justerat** (de 5 är tyngre än snitt, ×0,5) | ~180 | ~460 |
| **Med agentisk overhead** (reasoning-modeller 2029, ×2,5) | ~450 | ~1 150 |
| **Med redundans + testmiljöer (×1,3)** | ~600 | ~1 500 |

### Multiplikationskedjans osäkerhet

Extrapoleringen från 44 H100-eq (fem vårdkedjor) till ~600 (hela sjukvården) bygger på fyra multiplikationssteg, vart och ett med egen osäkerhet:

| Steg | Från | Till | Faktor | Spann (låg–hög) | Svaghet |
| ---- | ---- | ---- | ------ | ---------------- | ------- |
| 1. Fem vårdkedjor (direkt beräknat) | — | 44 H100-eq | — | 13–111 | Robust: baserat på volymer och GPU-tid per episod |
| 2. Extrapolering till hela sjukvården | 44 | 180 | ×4,1 (1/12% × 0,5) | 60–460 | **Svagaste länken.** De fem kedjorna är medvetet compute-tunga (cancer, patologi, kronisk övervakning). Korrektionsfaktorn 0,5 ("de fem är dubbelt så tunga som snitt") saknar empiriskt stöd — den är en kvalificerad gissning. |
| 3. Agentisk overhead (reasoning-modeller 2029) | 180 | 450 | ×2,5 | 180–1 150 | Samma osäkerhet som Tier 1 overhead — beroende av hur snabbt chain-of-thought-modeller slår igenom i klinisk miljö |
| 4. Redundans + testmiljöer | 450 | 600 | ×1,3 | 450–1 500 | Branschstandard; minst osäker |
| **Kombinerat** | **44** | **600** | **×13,6** | **~200–1 500** | |

Osäkerheten i steg 2–3 innebär att den kombinerade multiplikatorn kan variera mellan ~5 och ~35. Det är därför riktigare att tala om en **storleksordning på 200–900 H100-eq** för sjukvårdens Tier 2, med ~450–600 som central uppskattning, snarare än en precision som kedjan inte ger stöd för.

### Jämförelse med nuvarande Tier 2 i 03

| Komponent | Nuvarande Tier 2 (03, bas 2029) | Sjukvårdens Tier 2-andel | Reviderat (detta dokument) |
|-----------|--------------------------------|--------------------------|---------------------------|
| Sjukvårds-AI (Tier 2-unik) | ~20–50 (implicit i "medicinsk bildanalys ~6 sustained") | Kraftigt underskattat | **~450–600 H100-eq** |

Nuvarande Tier 2-estimat för sjukvården fångar i praktiken enbart radiologisk bildanalys i batch-mode (03: "~6 sustained + burst"). Det missar:

- Kliniskt beslutsstöd och medicinsk reasoning (~30% av Tier 2-computen)
- Kronisk övervakning och populationshälsa (~25%)
- Patologisk bildanalys (whole-slide imaging, gigapixel) (~20%)
- Genomik och biomarkörer (~10%)
- Avancerad bilddiagnostik utöver enkel röntgen (~15%)

---

## Slutsats: Hur sjukvården påverkar huvudmodellen

Sjukvårdens AI-compute fördelas enligt:

| Tier | Vad som fångas | Redan i huvudmodellen? | Storleksordning 2029 (bas) |
|------|---------------|----------------------|---------------------------|
| **Tier 1** | Transkription, dokumentation, patientbrev, remisser, kodning | **Ja** — sjukvårdspersonal ingår i A13:s population | Del av ~2 200 H100-eq |
| **Tier 2** | Bilddiagnostik, patologi, beslutsstöd, kronisk övervakning, genomik | **Delvis** — nuvarande ~6 sustained fångar bara radiologi | **~450–600 H100-eq bör adderas** |
| **Tier 3** | Finjustering av medicinska modeller | **Ja** — ingår i A28–A32 | Del av ~600 H100-eq |
| **Tier 4** | Träning av känslig-data-modeller (hälsa) | **Ja** — ingår i A39 | Del av ~4 500 H100-eq |

**Rekommendation**: Tier 2 i huvudmodellen bör uppjusteras med ~450–600 H100-eq (bas 2029) för att fånga sjukvårdens specialiserade inference. Tier 1, 3 och 4 fångar redan sjukvårdens övriga compute-dimensioner.

---

## Datakällor

| Uppgift | Källa | Status |
|---------|-------|--------|
| Cancerincidensvolymer | Socialstyrelsen, Cancerregistret 2024 | Verifierad: ~60 000 personer/år, ~80 000 tumörer |
| Diabetesprevalens | NDR; prevalens ~7,5% (2021, ökande) | Verifierad: Läkartidningen 2025 |
| AI-adoption i svensk sjukvård | AI Sweden Vårdkartan 2025: 197 initiativ, 13% fullt implementerade | Verifierad |
| Regional ojämlikhet | 5 regioner står för >60% av initiativ | AI Sweden rapport dec 2025 |
| Radiologiska volymer | Strålsäkerhetsmyndigheten SSM rapport 2025:07 | Delvis verifierad (total volym svår att specificera exakt) |
| GPU-tid medicinsk bildanalys | NVIDIA NIM VISTA-3D benchmarks: 2,7–16,3 sek/bild H100 | Verifierad |
| GPU-tid patologi (WSI) | Geo-MIL Nature 2025: ~12–45 sek/WSI beroende på storlek | Verifierad |
| GPU-tid Whisper transkription | Whisper Large V3 på H100: ~1800x RTF med optimering | Verifierad (MLPerf Inference v5.1) |
| Psykisk ohälsa volymer | Socialstyrelsen, SKR primärvårdsstatistik | Uppskattning baserad på publicerad data |
| Frakturvolymer per ICD-kod | Socialstyrelsens patientregister | Bör verifieras med senaste data |

---

## Mall för att lägga till fler vårdkedjor

```markdown
## Vårdkedja N: [Namn]

### Volym
| Parameter | Värde | Källa |
|-----------|-------|-------|
| [Huvudvolym] per år | | |
| **Basvolym** | | |

### Tier 2-specifik compute
| Steg | AI-uppgift | GPU-sekunder (H100-eq) |
|------|-----------|----------------------|
| [Steg] | [Uppgift] | [Låg–hög] |
| **Tier 2 per episod** | | **[Låg–hög]** |

### Tier 2 nationellt
| Parameter | Låg | Bas | Hög |
|-----------|-----|-----|-----|
| Episoder/år | | | |
| AI-adoption (2029) | | | |
| GPU-sek per episod | | | |
| **Sustained H100-eq (med peak)** | | | |
```

---

*Alla GPU-sekundvärden baseras på publicerade benchmarks (NVIDIA NIM VISTA-3D, Whisper MLPerf, Geo-MIL Nature 2025, vLLM) och bör valideras mot faktiska driftsdata. Volymdata bör verifieras mot Socialstyrelsens, SKR:s och NDR:s senaste statistik.*
