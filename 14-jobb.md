# 14 – JOBB: sysselsättningseffekt av AI-investeringar

Komplement till [03-berakningsmodell.md](03-berakningsmodell.md) och [13-sjukvard-compute-per-vardkedja.md](13-sjukvard-compute-per-vardkedja.md). Detta kapitel uppskattar hur många jobb som skapas eller tydligt omdefinieras när AI går från pilot till drift i offentlig sektor, med särskilt fokus på vården där implementeringstakten är högst.

## Syfte

Visa att AI-investeringar inte bara är en kostnads- och compute-fråga, utan också en arbetsmarknadsfråga: nya roller uppstår i implementation, drift, governance och verksamhetsintegration.

## Avgränsning

- Estimatet avser **bruttojobb** (nya eller omdefinierade roller), inte netto efter eventuell automatisering.
- Beräkningen fokuserar på roller som uppstår i anslutning till **faktisk drift** av AI-system.
- Antagandena är spårbara till [02-antaganden-och-data.md](02-antaganden-och-data.md), A91–A93.

---

## Metod

```
Direkta jobb   = Antal AI-lösningar i klinisk drift × bemanning per lösning
Indirekta jobb = Direkta jobb × indirekt multiplier
Totala jobb    = Direkta jobb + Indirekta jobb
```

### Antaganden (A91–A93)

| Antagande | Låg | Bas | Hög | Motivering |
|-----------|-----|-----|-----|------------|
| A91: AI-lösningar i klinisk drift 2029 | 80 | 120 | 160 | AI Sweden Vårdkartan 2025 visar 197 initiativ varav 13% i drift; uppskalning till 2029 med A87:s adoptionsbana |
| A92: Direkt bemanning per lösning (årsarbetskrafter) | 3 | 5 | 8 | OECD/EU/NHS indikerar behov av tvärfunktionella team för säker klinisk implementering |
| A93: Indirekt multiplier | 0,5x | 0,7x | 1,0x | Leverantörsled, integration, validering, utbildning och revision skalar med driftvolym |

---

## Resultat 2029: bruttojobb

| Parameter | Låg | Bas | Hög |
|-----------|-----|-----|-----|
| AI-lösningar i drift (A91) | 80 | 120 | 160 |
| Direkta jobb per lösning (A92) | 3 | 5 | 8 |
| **Direkta jobb** | **240** | **600** | **1 280** |
| Indirekt multiplier (A93) | 0,5x | 0,7x | 1,0x |
| **Indirekta jobb** | **120** | **420** | **1 280** |
| **Totala bruttojobb** | **360** | **1 020** | **2 560** |

Tolkning: även ett konservativt scenario ger hundratals jobb. Basfallet indikerar cirka **1 000 bruttojobb** i offentlig vårdrelaterad AI-implementering till 2029.

---

## Vilka roller skapas?

### Direkta roller (region/myndighet/kommun)

- Klinisk informatik och AI-koordinering
- MLOps/data engineering för drift och monitorering
- AI-säkerhet, compliance och modellvalidering
- Verksamhetsnära produktägare och förändringsledning

### Indirekta roller (ekosystem)

- Systemintegratörer och domänkonsulter
- Leverantörsteam för support och livscykelhantering
- Utbildare och införandestöd
- Oberoende granskning, kvalitet och revision

---

## Osäkerhet och källkritik

- **A91** är osäkert eftersom svensk klinisk AI fortfarande är tidig och heterogen mellan regioner.
- **A92** varierar kraftigt mellan enkla punktlösningar och plattformsnära AI som kräver kontinuerlig driftorganisation.
- **A93** är en schablon. Den fångar riktning, inte en exakt svensk multiplikator.

Det här kapitlet ska därför läsas som **storleksordning** (hundratals till några tusen), inte punktprecision.

---

## Brutto vs netto

Bruttojobb i detta kapitel ska inte tolkas som att total sysselsättning i vården automatiskt ökar lika mycket. Nettoeffekten påverkas av:

- hur snabbt administrativa arbetsuppgifter automatiseras
- hur omställning och kompetensväxling fungerar i praktiken
- om regioner bygger intern kapacitet eller köper tjänster externt

OECD:s riktning för vårdyrken är i huvudsak augmentation: fler digitala och AI-relaterade kompetenskrav snarare än bred klinisk jobbförträngning på kort sikt.

---

## Datakällor

| Uppgift | Källa | Status |
|---------|-------|--------|
| Svensk AI-mognad i vården | AI Sweden Vårdkartan 2025 | Verifierad (initiativ och andel i drift) |
| Digitala/AI-kompetenser i vårdyrken | OECD, *Digital and AI skills in health occupations* (2025) | Verifierad (riktning och kompetensprofil) |
| Implementeringshinder och arbetskraftsberedskap i EU-vård | EU-kommissionen, *Study on the deployment of AI in healthcare* (2025) | Verifierad (strukturell evidens) |
| Operativa rollprofiler för AI i offentlig vård | NHS, *Specialist AI skills within the NHS* | Semiprimar (praktisk rolltaxonomi) |
| Teknologisk jobbdynamik (makronivå) | WEF, *Future of Jobs Report 2025* | Verifierad (global riktning) |

---

## Koppling till huvudmodellen

- Compute-modellen i [03-berakningsmodell.md](03-berakningsmodell.md) svarar på **hur mycket kapacitet** som behövs.
- Sjukvårdsfördjupningen i [13-sjukvard-compute-per-vardkedja.md](13-sjukvard-compute-per-vardkedja.md) visar **var compute uppstår**.
- Detta kapitel visar **vilka arbetsroller** som typiskt byggs upp när kapaciteten omsätts i drift.
