# 09 – Bygga vs. köpa: ett tankeexperiment

Vad kostar det att äga AI-infrastrukturen jämfört med att hyra den? Detta kapitel sätter beräkningsmodellens siffror (se [03](03-berakningsmodell.md)) i konkret perspektiv genom tre scenarier för hur Sverige kan förvärva den beräkningskapacitet som offentlig sektor behöver.

---

## Tre scenarier

### Scenario A: "Köp" — rent moln/API

All beräkningskapacitet hyrs via utländska molntjänster (Azure, AWS, GCP) och frontier-modeller konsumeras via API.

| Post | Värde (basscenario 2029) | Källa |
|------|--------------------------|-------|
| Sustained inference (Tier 1-2) | ~800 H100-eq × ~300 KSEK/år | A42, 03 |
| Finjustering (Tier 3) | ~300 H100-eq burst × ~300 KSEK/år | A32 |
| Frontier-API (istället för suverän träning) | ~50–150 MSEK/år (token-baserad) | Uppskattning |
| **Total årskostnad** | **~480–530 MSEK/år** | |

**Fördelar:**
- Snabbt: inget bygge, ingen upphandling av hårdvara
- Skalbart: kapacitet kan ökas på dagar
- Låg initial investering

**Risker:**
- Strukturellt beroende av leverantörer under icke-europeisk jurisdiktion
- Pris kan stiga: AI-molnpriser har historiskt inte följt generell molndeflation
- Data lämnar Sverige — spänning mot GDPR, CLOUD Act, sekretesslagstiftning (se [08](08-strategi.md), L4–L6)
- Ingen kompetensuppbyggnad: Sverige konsumerar men lär sig inte
- Suverän träning omöjlig — Tier 4 faller bort helt, ingen GPT-SW3-successor

### Scenario B: "Bygg" — nationell on-prem

Eget kluster i Sverige (via NAISS/Arrhenius eller dedikerad kapacitet), all beräkning sker nationellt.

| Post | Värde (basscenario 2029) | Källa |
|------|--------------------------|-------|
| Systempris 3 500 H100-eq (vid ~60 KSEK/GPU) | ~2 100 MSEK (engångsinvestering) | A41 |
| Amortering 4 år | ~525 MSEK/år | |
| El (3 MW × 8 760h × 0,75 SEK/kWh) | ~20 MSEK/år | A45, PUE 1,2 |
| Underhåll, personal, nätverk | ~50–80 MSEK/år | Uppskattning |
| **Total årskostnad (amorterad)** | **~600–630 MSEK/år** | |
| **Kostnad per H100-eq/år** | **~170–180 KSEK** | |

**Fördelar:**
- Full kontroll: data stannar i Sverige, ingen tredjelandsproblematik
- Kompetens byggs: drift, optimering, forskningssamarbete
- Suverän träning möjlig (Tier 4)
- Lägre löpande kostnad per GPU-timme efter initial investering

**Risker:**
- Hög initial investering (~2 100 MSEK)
- Risk för under- eller överkapacitet: om behovet avviker från prognosen
- Teknisk skuld: hårdvara föråldras på 4–5 år
- Kräver kompetent driftsorganisation
- LOU-upphandling tar 6–18 månader

### Scenario C: "Hybrid" — rekommenderat

On-prem för sustained kapacitet och känslig data, moln för burst och icke-känsliga arbetsbelastningar. Motsvarar den 60/40-mix som används i beräkningsmodellen ([03](03-berakningsmodell.md)).

| Post | Värde (basscenario 2029) | Källa |
|------|--------------------------|-------|
| On-prem: 2 100 H100-eq (60%) × ~180 KSEK/år | ~380 MSEK/år | |
| Moln: 1 400 H100-eq (40%) × ~300 KSEK/år | ~420 MSEK/år | |
| **Total årskostnad** | **~770–800 MSEK/år** | 03, kostnadsöversättning |
| **Kostnad per H100-eq/år (vägt snitt)** | **~220–230 KSEK** | |

**Fördelar:**
- Balansar kontroll med flexibilitet
- Känslig data och suverän träning on-prem
- Burst-kapacitet via moln utan att överdimensionera egen infra
- Upphandling kan ske parallellt: hårdvara (on-prem) + ramavtal (moln)

**Risker:**
- Komplexare drift: två miljöer att hantera
- Kräver tydlig policy: vilken data får gå var?
- Molndelen har samma jurisdiktionsrisker som scenario A (men begränsas till icke-känsligt)

---

## Jämförelsetabell: 5-årskostnad (2027–2031, basscenario)

| Dimension | A: Rent moln | B: Rent on-prem | C: Hybrid |
|-----------|-------------|-----------------|-----------|
| **5-års totalkostnad** | ~2 500–3 000 MSEK | ~3 000–3 200 MSEK | ~3 200–3 500 MSEK |
| **Initial investering** | Låg (~50 MSEK) | Hög (~2 100 MSEK) | Medel (~1 300 MSEK) |
| **Kostnad per H100-eq/år** | ~280–350 KSEK | ~170–180 KSEK | ~220–230 KSEK |
| **Suverän träning (Tier 4)** | Nej | Ja | Ja (on-prem-delen) |
| **Datakontroll** | Begränsad | Full | Hög (känslig data on-prem) |
| **Juridisk risk** | Hög (CLOUD Act, Schrems II) | Låg | Medel (moln för icke-känsligt) |
| **Kompetensuppbyggnad** | Minimal | Hög | God |
| **Flexibilitet** | Hög (kortsiktigt) | Låg | Hög |
| **Leverantörsberoende** | Högt | Lågt | Medel |

---

## Konkret räkneexempel: 2029 basscenario

Ett sätt att se på det: vad kostar det att ge 225 000 offentliganställda daglig tillgång till AI-copilots, köra specialiserad AI inom vård och juridik, finjustera svenska modeller kvartalsvis, och träna en svensk 70B-grundmodell per år?

| Komponent | H100-eq | On-prem (MSEK/år) | Moln (MSEK/år) | Hybrid (MSEK/år) |
|-----------|---------|--------------------|--------------------|-------------------|
| Copilots (Tier 1) | 300 | 54 | 90 | 68 |
| Specialiserad AI (Tier 2) | 500 | 90 | 150 | 114 |
| Finjustering (Tier 3) | 300 | 54 | 90 | 68 |
| Suverän träning (Tier 4) | 2 000 | 360 | — (ej möjligt*) | 360 (on-prem) |
| **Infrastruktur-overhead** | 400 | 72 | 120 | 90 |
| **Total** | **3 500** | **~630** | **~450*** | **~700** |

*Rent moln: Tier 4 ersätts med API-konsumtion (~100 MSEK/år), men suverän modellförmåga saknas.

---

## Slutsats

Rent moln (A) är billigast kortsiktigt men gör Sverige permanent beroende av utländska leverantörer och omöjliggör suverän modellträning. Rent on-prem (B) ger maximal kontroll men kräver stor initial investering och riskerar kapacitetsmismatch.

**Hybrid (C)** balanserar kontroll med flexibilitet. On-prem-delen säkrar suverän träning och känslig data; molndelen ger burst-kapacitet och undviker överdimensionering. Merkostnaden jämfört med rent moln — ~200–500 MSEK över 5 år — är priset för strategisk handlingsfrihet och kompetensuppbyggnad.

I en internationell jämförelse ([04](04-internationella-jamforelser.md)) är hela 5-årsinvesteringen — oavsett modell — en rundningsdifferens mot vad enskilda AI-lab spenderar på en enda modellträning. Frågan är inte om Sverige har råd att investera, utan om Sverige har råd att *inte* göra det.

---

*Alla kostnadsantaganden bygger på [02-antaganden-och-data.md](02-antaganden-och-data.md) (A40–A45) och [03-berakningsmodell.md](03-berakningsmodell.md) (kostnadsöversättning). Priserna är 2025-nivå; faktiska inköp sker i framtidens hårdvara (B200/B300) med bättre prestanda per krona.*
