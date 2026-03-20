# 04 – Internationella jämförelser

Länderprofiler med AI-compute-investeringar, strategi och skalningsfaktorer till Sverige.

---

## Sammanfattande tabell

| Land | Befolkning (M) | Faktor vs SE | Annonserad AI-compute-investering | Skalat till SE (H100-eq) | Monad |
|------|----------------|--------------|----------------------------------|--------------------------|-------|
| **Storbritannien** | 67 | 6,4x | £1-2,5 mdr | 2 000-5 000 | Offentlig strategi med tydlig compute-komponent |
| **Frankrike** | 68 | 6,5x | €1,5 mdr (France 2030) | 2 000-4 000 | Jean Zay-superdator, stark statlig styrning |
| **Tyskland** | 84 | 8x | €3+ mdr (blandade program) | 1 500-3 000 | Fragmenterat, delstat-struktur |
| **Finland** | 5,5 | 0,53x | LUMI (~€200M GPU-partition) | 3 000-5 000 | EuroHPC-värd, ambitiöst relativt BNP |
| **Danmark** | 5,9 | 0,57x | Gefion (1 528 H100) + nationell strategi | 2 500-4 000 | Privat-offentligt partnerskap (NVIDIA-Novo Nordisk) |
| **Estland** | 1,3 | 0,13x | Begränsad egen compute, moln-first | N/A (annat angreppssätt) | Digital mognad som enabler |
| **Nederländerna** | 17,5 | 1,7x | Snellius + SURF | 2 000-3 500 | Forskningsfokus, pragmatisk approach |

---

## Detaljerade länderprofiler

### Storbritannien

**Annonserad investering**: AI Opportunities Action Plan (jan 2025) – £1-2,5 mdr i offentlig AI-infrastruktur. Isambard-AI (Bristol): 5 448 H100, operationell. Planerad expansion.

**Offentlig AI-strategi**:
- Central AI-funktion i Cabinet Office (DSIT)
- Mandatory AI-adoption targets för offentlig förvaltning
- AI Safety Institute – fokus på utvärdering och säkerhet
- National AI Research Resource för akademi och offentlig sektor

**Skalningsfaktor**: UK har ~6,4x Sveriges befolkning och ~4,5x BNP (PPP-justerat).
- £2,5 mdr → skalat med befolkning = ~400M → ~3 000-5 000 H100-eq
- Men UK har mer centraliserad förvaltning = snabbare adoption
- **Justerat estimat för Sverige: 2 000-4 000 H100-eq (2029)**

**Nyckellärdomar**:
- Central samordning accelererar (Sverige: DIGG/AI-kommissionen har liknande roll)
- Mandatory targets driver adoption
- Kombinerar on-prem superdatorer med molnramavtal

---

### Frankrike

**Annonserad investering**: €1,5 mdr genom France 2030 AI-strategi. Jean Zay V100/A100-kluster (IDRIS) uppgraderas. Ny investering i AI-compute post-2024.

**Offentlig AI-strategi**:
- Centralt styrd via SGPI (Secrétariat général pour l'investissement)
- Mistral AI som nationell champion (privat men strategiskt stödd)
- Fokus på suverän AI – franska/europeiska modeller
- Albert: AI-assistent för offentlig förvaltning

**Skalningsfaktor**: 6,5x Sveriges befolkning.
- €1,5 mdr → skalat = ~€230M → ~3 000-4 000 H100-eq
- Frankrike har starkare tradition av statlig industriell styrning
- **Justerat estimat för Sverige: 2 000-3 500 H100-eq (2029)**

**Nyckellärdomar**:
- Suveränitetsmotivet driver investeringar (relevant för Sverige)
- Albert-projektet visar hur en central offentlig AI-tjänst kan se ut
- Frankrike investerar aktivt i modellträning, inte bara inference

---

### Tyskland

**Annonserad investering**: €3+ mdr i blandade AI-program (federal + delstat). Jülich Supercomputing Centre uppgraderar. NAKI-centra.

**Offentlig AI-strategi**:
- Fragmenterat: 16 delstater + federal nivå
- Fokus på Mittelstand och industri-AI snarare än offentlig förvaltning
- Deutsche KI-Strategie (2020, uppdaterad)
- Långsammare offentlig adoption pga dataskyddkultur (DSGVO/GDPR-konservativt)

**Skalningsfaktor**: 8x Sveriges befolkning.
- €3 mdr → skalat = ~€375M → ~4 000-6 000 H100-eq
- Men mycket av Tysklands investering är industriinriktad
- Offentlig sektors andel: uppskattningsvis 20-30%
- **Justerat estimat för Sverige: 1 500-3 000 H100-eq (2029)**

**Nyckellärdomar**:
- Fragmentering sänker tempot (Sverige: mer centraliserat, men 290 kommuner)
- Dataskyddskultur som broms (liknande tendens i Sverige)
- Industriell AI-styrka kompenserar inte automatiskt offentlig adoption

---

### Finland

**Annonserad investering**: LUMI:s GPU-partition (~5 000 H100-eq), nationellt AI-program, SitraFund-initiativ.

**Offentlig AI-strategi**:
- AuroraAI – nationellt program för AI-driven offentlig service
- LUMI som EuroHPC-resurs (delad med EU, men Finland har prioriterad access)
- Stark koppling forskning-offentlig sektor via VTT, Aalto
- Digitalt föregångsland (e-tjänster, kanta.fi för hälsodata)

**Skalningsfaktor**: 0,53x Sveriges befolkning.
- LUMI GPU-partition ~5 000 H100-eq × (1/0,53) = ~9 400 skalat
- Men: LUMI betjänar hela EuroHPC, inte bara Finland
- Rensat för Finlands offentliga sektor: ~1 000-2 000 H100-eq
- **Proportionellt skalat till Sverige: 2 000-4 000 H100-eq (2029)**

**Nyckellärdomar**:
- Att vara EuroHPC-värd ger strategiskt övertag (Sverige: Arrhenius)
- AuroraAI visar ambitiös offentlig AI-tillämpning
- Stark digital infrastruktur som förutsättning (Sverige: jämförbart)

---

### Danmark

**Annonserad investering**: Gefion – 1 528 NVIDIA H100 GPU:er. Nationell AI-strategi via Digitaliseringsstyrelsen. AAAI (Alliance for Applied AI).

**Offentlig AI-strategi**:
- Gefion: offentlig-privat partnerskap (NVIDIA + Novo Nordisk Foundation + Export and Investment Fund of Denmark)
- Fokus på life science och offentlig förvaltning
- Digitaliseringsstyrelsen samordnar
- Mindre befolkning = smalare fokus men snabbare beslut

**Skalningsfaktor**: 0,57x Sveriges befolkning.
- Gefion (1 528 H100) × (1/0,57) = ~2 700 skalat till Sverige
- Nationell strategi totalt: ~2 500-4 000 H100-eq skalat
- **Estimat för Sverige: 2 500-4 000 H100-eq (2029)**

**Nyckellärdomar**:
- Offentlig-privat partnerskap som modell (Gefion-modellen)
- NVIDIA som partner snarare än leverantör
- Life science som fokusdomän (relevant: Sverige har liknande styrka)

---

### Estland

**Annonserad investering**: Begränsad egen AI-compute. Fokus på molntjänster och partnerskap. "Kratt"-strategi.

**Offentlig AI-strategi**:
- 50+ "Kratt" (AI-assistenter) i offentlig förvaltning – redan i produktion
- Moln-first approach – Estland har inte råd med stora GPU-kluster
- Bürokratt: AI-baserad kundtjänst för offentlig sektor
- e-Estonia som världsledande digital förvaltning

**Skalningsfaktor**: 0,13x Sveriges befolkning. Inte meningsfullt att skala direkt.

**Nyckellärdomar**:
- Estland visar att moln-first kan fungera för små länder utan suveränitetskrav
- Men: Estland accepterar beroende av utländska molntjänster som Sverige kanske inte bör
- "Kratt"-programmet visar snabb iterativ deployment – inspirerande process-modell
- Pragmatism framför perfektion

---

### Nederländerna

**Annonserad investering**: Snellius-superdator (SURF), nationella AI-initiativ via NLAIC.

**Offentlig AI-strategi**:
- SURF som nationell forsknings- och utbildnings-IT-organisation
- NLAIC (Nederlandse AI Coalitie) samordnar
- Pragmatisk approach: moln + on-prem hybrid
- Europeisk snarare än nationell suveränitetsambition

**Skalningsfaktor**: 1,7x Sveriges befolkning.
- Nederländernas AI-compute-investering: uppskattningsvis €200-400M
- Skalat till Sverige: €120-235M → ~2 000-3 500 H100-eq
- **Estimat för Sverige: 2 000-3 500 H100-eq (2029)**

**Nyckellärdomar**:
- SURF-modellen intressant: gemensam IT-infrastruktur för offentlig sektor
- Pragmatisk hybridstrategi (relevant för svensk kontext)
- Mindre fokus på suveränitet, mer på nytta

---

## Syntes: Vad säger jämförelserna?

### Konvergensintervall (2029, skalat till Sverige):

Snittet av alla länder, rensat för offentlig sektor: **~2 000-4 000 H100-eq**

### Mönster:
1. **Alla jämförda länder investerar aktivt** – Sverige riskerar att halka efter om ingen satsning görs
2. **Suveränitets-motivet driver investeringar** i Frankrike, Finland och Danmark – detta resonerar i svensk kontext
3. **Offentlig-privata partnerskap** är normen (Danmark, Nederländerna) – ren statlig finansiering räcker sällan
4. **Nordiska grannar** (Finland, Danmark) investerar proportionellt mer per capita än Sverige gör idag
5. **Digital mognad** (hög i Sverige) är en nödvändig men inte tillräcklig förutsättning – det krävs dedikerad AI-infrastruktur

### Skalningsmetodik – begränsningar:
- Ren befolkningsskalning underskattar länder med starka forskningskluster
- BNP-skalning överskattar för länder med stor privat sektor
- Bästa proxy: antal offentliganställda × digital mognad × politisk ambition
