# 09 – Bygga vs. köpa: ett tankeexperiment

Detta kapitel översätter huvudscenariot i [03-berakningsmodell.md](03-berakningsmodell.md) till tre praktiska anskaffningsstrategier. Frågan är inte bara hur mycket compute offentlig sektor behöver, utan **hur** Sverige bör säkra den.

Utgångspunkt: **basscenario 2029 = ~9 000 H100-ekvivalenter**.

---

## Tre anskaffningsmodeller

### Scenario A – Rent moln / API

All kapacitet hyras via externa moln- och API-leverantörer.

| Post | Indikativ nivå 2029 |
|------|---------------------|
| Tier 1–2 drift | ~3 100 H100-eq motsvarande löpande molnkapacitet |
| Tier 3 finjustering | ~600 H100-eq i burst |
| Tier 4 ersätts med externa modeller / API-konsumtion | Ja |
| Total årskostnad | ~1 300–1 700 MSEK |

**Fördelar**

- snabbt att komma igång
- låg initial kapitalbindning
- hög flexibilitet när belastningen varierar

**Nackdelar**

- svag kontroll över data, prissättning och tillgång
- låg robusthet för känsliga arbetslaster
- i praktiken ingen suverän träningsförmåga
- hög risk att temporär lösning blir permanent beroende

### Scenario B – Rent on-prem

Sverige bygger eller reserverar egen nationell kapacitet för i princip hela behovet.

| Post | Indikativ nivå 2029 |
|------|---------------------|
| Dimensionering | ~9 000 H100-eq |
| Engångsinvestering | ~4 500–5 500 MSEK |
| Årlig kostnad (amorterad + drift) | ~1 350–1 600 MSEK |
| Facility power | ~6,3 MW |

**Fördelar**

- maximal kontroll över känslig data och drift
- bäst för nationell modellförmåga och forskningsmiljö
- lägre marginalkostnad per GPU-år när kapaciteten väl är på plats

**Nackdelar**

- hög initial investering
- större risk för över- eller underdimensionering
- mer känsligt för felaktigt platsval, nätanslutning eller teknikskifte

### Scenario C – Hybrid

Sverige bygger en egen kärna och använder moln som komplement för burst och icke-känsliga arbetslaster.

| Post | Indikativ nivå 2029 |
|------|---------------------|
| On-prem-del | ~4 800 H100-eq |
| Moln-del | ~3 200 H100-eq |
| Årlig kostnad | ~1 700–1 900 MSEK |
| Suverän träning möjlig | Ja |

**Fördelar**

- kombinerar kontroll med flexibilitet
- bättre hantering av känslig kontra icke-känslig data
- lägre risk att bygga för stort direkt
- bättre anpassning till supply-side-osäkerhet

**Nackdelar**

- högre styrningskomplexitet
- kräver tydlig datapolicy och arbetslastklassning
- molndelen behåller vissa jurisdiktionsrisker

---

## Jämförelse

| Dimension | Rent moln | Rent on-prem | Hybrid |
|-----------|-----------|--------------|--------|
| Initial investering | Låg | Hög | Medel |
| Årlig kostnad 2029 | Medel-hög | Medel | Högst |
| Datakontroll | Låg | Hög | Hög |
| Suverän träning | Nej | Ja | Ja |
| Flexibilitet | Hög | Låg-medel | Hög |
| Leverantörsberoende | Högt | Lågt | Medel |
| Robusthet mot känsliga use cases | Låg | Hög | Hög |

---

## Vad kostar skillnaden egentligen?

Det rena molnscenariot ser ofta billigast ut i ett kort tidsperspektiv eftersom investering flyttas till löpande konsumtion. Men den besparingen köps genom att Sverige avstår:

- egen modellförmåga för känsliga domäner
- robust tillgång när marknaden blir ansträngd
- lärande i drift, optimering och styrning

Hybridscenariot är därför inte "billigast", men det är det scenario som bäst balanserar ekonomi, genomförbarhet och strategisk frihet.

---

## Rekommenderad läsning av tankeexperimentet

Detta kapitel ska inte läsas som ett exakt upphandlingsunderlag, utan som ett sätt att synliggöra valet:

- **Rent moln** minimerar friktion nu men maximerar beroende senare
- **Rent on-prem** maximerar kontroll men kräver hög precision i timing och dimensionering
- **Hybrid** är den mest realistiska vägen från dagens läge till huvudscenariot i [06-sammanfattning.md](06-sammanfattning.md)

---

## Slutsats

Om Sverige accepterar långsiktigt leverantörsberoende kan rent moln vara tillräckligt. Om målet däremot är offentlig AI-användning med verklig handlingsfrihet, känslig datahantering och nationell modellförmåga är **hybridscenariot** det mest rimliga huvudspåret.
