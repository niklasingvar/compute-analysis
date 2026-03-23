---
title: "Executive Summary: Sveriges AI-computebehov 2026-2031"
separator: "^---$"
separator_notes: "^Note:"
---

# Executive Summary
## Sveriges AI-computebehov 2026-2031

Offentlig sektor (exkl. forsvar)  
Beslutsunderlag for 2026-2029

---

## Beslut i en mening

Sverige behover planera for ett **bas-scenario pa ~9 000 H100-ekvivalenter 2029**, med:

- **lag:** ~3 000 H100-eq
- **bas:** ~9 000 H100-eq
- **hog:** ~20 000 H100-eq

Det avgorande beslutet 2026 ar att sakra **tidslinjen** (upphandling, partnerskap, natanslutning), inte att kopa all kapacitet direkt.

Note:
Kalla: 06-sammanfattning.md, scenarioarkitektur i 01-ramverk.md.

---

## Scenariooversikt 2026-2031

| Ar | Lag | Bas | Hog | Enhet |
|---|---:|---:|---:|---|
| 2026 | 400 | 900 | 2 000 | H100-ekvivalenter |
| 2027 | 900 | 2 200 | 5 000 | H100-ekvivalenter |
| 2028 | 1 800 | 4 500 | 9 500 | H100-ekvivalenter |
| 2029 | **3 000** | **9 000** | **20 000** | H100-ekvivalenter |
| 2030 | 5 500 | 13 000 | 30 000 | H100-ekvivalenter |
| 2031 | 8 000 | 18 000 | 42 000 | H100-ekvivalenter |

Note:
Kalla: 06-sammanfattning.md.

---

## Varfor ~9 000 i bas?

Tre spar med olika metodansats triangulerar nivan:

- **botten-upp:** ~8 800 H100-eq
- **topp-ned:** ~4 100 H100-eq
- **storbolagstriangulering:** ~7 600 H100-eq

Två efterfragebaserade spar konvergerar nara 9 000.  
Topp-ned fungerar som konservativt golv, inte dimensionerande tak.

Note:
Kalla: 06-sammanfattning.md, 03-berakningsmodell.md, 04-internationella-jamforelser.md.

---

## Vad driver behovet?

Bas 2029 domineras av tva komponenter:

1. **Tier 1 (agentisk inference):** ~1 200-3 500 H100-eq (A58), mittpunkt runt ~2 200
2. **Tier 4 (suveran traning + RL):** ~3 000-6 000 H100-eq i burst (A65)

Implikation:

- Copilot-antaganden underskattar framtida last
- Suveran modellformaga ar strategiskt styrande, inte marginalpost

Note:
A52, A55, A57-A60, A61-A65 i 02-antaganden-och-data.md.

---

## Budget- och effektbild (2029)

Illustrativ harledning fran basscenariot (A40-A45):

- **Kapacitet (lag/bas/hog):** ~3 000 / ~9 000 / ~20 000 H100-eq
- **Arlig compute-kostnad:** ~700 / ~2 000 / ~4 500 MSEK
- **Facility power:** ~2,1 / ~6,3 / ~14,0 MW

Tolkning:

- Stor post i svensk budgetlogik
- Hanterbar post i strategisk och internationell kontext

Note:
Basnivaer i 06-sammanfattning.md. Lag/hog-kostnad och effekt ar enkel proportionell harledning fran bas.

---

## Riskbild till 2029

Fem risker som bor styras aktivt:

- **for lag adoption** -> overdimensionering pa kort sikt
- **for snabb agentisk overgang** -> underdimensionering fore 2029
- **supply-side-begransningar** -> behov kvarstar men gar ej att realisera i tid
- **svag styrning** -> lag nyttjandegrad och svag legitimitet
- **for lag suveran ambition** -> okat leverantorsberoende i kansliga domaner

Note:
Kalla: 06-sammanfattning.md, samt A66-A72 for supply constraints.

---

## Rekommenderad handlingslinje 2026-2027

1. **Sakra tidigt tilltrade till kapacitet**
   - ramavtal, leverantorsdialog, flerarsoptioner
2. **Bygg hybridmodell med skaltrappa**
   - initialt ~1 000-1 500 H100-eq
   - on-prem for kanslig data, moln for burst
3. **Koppla compute till genomforande**
   - styrning, kompetens, datapolicy, prioriterad nyttolista

Note:
Kalla: 06-sammanfattning.md, 08-strategi.md, 09-tanke-exempel.md.

---

## Beslutspunkter for regeringsniva

Under 2026 bor tre beslut fattas:

- **Ambitionsniva:** lag/bas/hog till 2029
- **Riskaptit:** grad av suveran modellformaga
- **Genomforandeform:** central samordning + sektorsvisa leveransplaner

Praktisk testfraga:

> Kan Sverige realisera vald niva inom 12-24 manader givet allokering och natledtider?

Note:
Ledtider: A71. Strategiska val: 08-strategi.md.

---

## Spårbarhet och underlag

Karnunderlag:

- `02-antaganden-och-data.md` (A1-A88)
- `03-berakningsmodell.md` (modell)
- `04-internationella-jamforelser.md` (kalibrering)
- `06-sammanfattning.md` (beslutsniva)
- `08-strategi.md` (strategisk ram)

Stresstest:

- `10-kan-vi-vanta.md`
- `11-kompletterande-perspektiv.md`
- `12-upprevidering-utmaning.md` (uppsidesrisk, ej nytt basscenario)

---

# Slutbudskap

**Bas 2029: ~9 000 H100-eq** ar en rimlig dimensioneringsniva.  
Karnrisken ar inte finansiering, utan **sen handling i en marknad med langa ledtider**.
