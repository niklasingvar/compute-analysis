# 05 – Källor och resurser

Alla externa källor som refereras i analysen. Varje post anger: titel, URL, vilken data den bidrar med, och hur den används i modellen.

---

## 1. Svensk offentlig sektor – grunddata

### 1.1 Statistiska centralbyrån (SCB)
- **Titel**: Offentligt anställda i riket
- **URL**: https://www.scb.se/hitta-statistik/statistik-efter-amne/arbetsmarknad/
- **Data**: Antal anställda i stat, kommun och region (~1,2 miljoner totalt)
- **Användning**: Bas för adresserbar användarpopulation (A1-A3)

### 1.2 Ekonomistyrningsverket (ESV)
- **Titel**: IT-kostnader i staten
- **URL**: https://www.esv.se/
- **Data**: Statliga myndigheters IT-utgifter (~25-30 mdr SEK/år totalt offentlig sektor)
- **Användning**: Referensram för AI-investeringar som andel av IT-budget (A20)

### 1.3 Sveriges Kommuner och Regioner (SKR) / Kolada
- **Titel**: Kommun- och regiondata
- **URL**: https://www.kolada.se/
- **Data**: Verksamhetsvolymer (antal ärenden, vårdkontakter, elevantal)
- **Användning**: Volymer för medborgarautomation (Tier 2-beräkningar)

### 1.4 Statskontoret
- **Titel**: Den offentliga förvaltningen i siffror
- **URL**: https://www.statskontoret.se/
- **Data**: Myndighetsstruktur, antal myndigheter, förvaltningens digitalisering
- **Användning**: Segmentering av adoptionskurva

### 1.5 DIGG (Myndigheten för digital förvaltning)
- **Titel**: Uppföljning av digitalisering
- **URL**: https://www.digg.se/
- **Data**: Digital mognad per myndighet, AI-användning i offentlig sektor
- **Användning**: Adoptionskurvans startpunkt och segmentering

---

## 2. Internationella AI-compute-investeringar

### 2.1 EU AI Factories
- **Titel**: EuroHPC AI Factories Initiative
- **URL**: https://eurohpc-ju.europa.eu/
- **Data**: Total EU-investering i AI-infrastruktur (~€2-3 mdr allokerat till AI Factories), Sveriges andel via Arrhenius
- **Användning**: Topp-ned-triangulering – Sveriges proportionella andel (~2,3% av EU-befolkning)

### 2.2 UK AI Opportunities Action Plan
- **Titel**: AI Opportunities Action Plan (januari 2025)
- **URL**: https://www.gov.uk/government/publications/ai-opportunities-action-plan
- **Data**: UK:s satsning på offentlig AI-infrastruktur, planerade GPU-kluster
- **Användning**: Internationell jämförelse, skalning via arbetsstyrka (UK ~5x Sverige)

### 2.3 Frankrike – strategie nationale pour l'IA
- **Titel**: France 2030 / Stratégie nationale pour l'intelligence artificielle
- **URL**: https://www.gouvernement.fr/france-2030
- **Data**: €1,5 mdr AI-investering inkl. Jean Zay-superdator
- **Användning**: Jämförelse – Frankrike ~6,5x Sveriges befolkning

### 2.4 Tyskland – NAKI (Nationales KI-Kompetenzzentrum)
- **Titel**: Nationale KI-Strategie
- **URL**: https://www.ki-strategie-deutschland.de/
- **Data**: Tyska AI-compute-satsningar, Jülich-kluster
- **Användning**: Jämförelse – Tyskland ~8x Sveriges befolkning

### 2.5 Finland – LUMI och kansallinen tekoälyohjelma
- **Titel**: LUMI Supercomputer / Finnish AI Strategy
- **URL**: https://www.lumi-supercomputer.eu/
- **Data**: LUMI:s GPU-partition (~10 000 MI250X, ~5 000 H100-eq), Finlands nationella AI-program
- **Användning**: Direkt nordisk jämförelse, Finland ~0,5x Sveriges befolkning

### 2.6 Danmark – AAAI (Alliance for Applied AI)
- **Titel**: Danmarks AI-strategi
- **URL**: https://digst.dk/
- **Data**: Danmarks nationella AI-infrastruktur, Gefion-superdatorn (1 528 H100)
- **Användning**: Direkt nordisk jämförelse, Danmark ~0,6x Sveriges befolkning

### 2.7 Estland
- **Titel**: Estlands AI-strategi (Kratt)
- **URL**: https://www.kratid.ee/
- **Data**: "Kratt"-strategin för offentlig AI-adoption, e-government som moget utgångsläge
- **Användning**: Jämförelse – litet land med hög digital mognad

### 2.8 Nederländerna
- **Titel**: NLAIR / Nederlandse AI Coalitie
- **URL**: https://nlaic.com/
- **Data**: Nederländernas AI-compute-investeringar, Snellius-superdator
- **Användning**: Jämförelse – liknande ekonomisk storlek

---

## 3. Svensk AI-infrastruktur

### 3.1 Berzelius (Linköpings universitet / NSC)
- **Titel**: Berzelius superdator
- **URL**: https://www.nsc.liu.se/systems/berzelius/
- **Data**: 94 × A100 80GB (fas 1), ~600 A100 totalt (fas 2). Primärt forskning.
- **Användning**: Existerande kapacitet som referenspunkt, konverteras till H100-eq

### 3.2 Arrhenius (KTH / EuroHPC)
- **Titel**: Arrhenius – EuroHPC pre-exascale system
- **URL**: https://www.kth.se/
- **Data**: Under uppbyggnad, planerat ~10 000+ GPU:er (blandning CPU/GPU). AI-partition tillgänglig ~2026.
- **Användning**: Planerad tillgång, men primärt forsknings- och EuroHPC-arbetsbelastningar

### 3.3 AI Sweden
- **Titel**: AI Sweden – nationellt center
- **URL**: https://www.ai.se/
- **Data**: GPT-SW3-projektet, compute-åtgång för svenska språkmodeller, erfarenheter
- **Användning**: Referens för Tier 4 (suverän träning), kostnad för svensk språkmodell

### 3.4 GPT-SW3
- **Titel**: GPT-SW3 – svensk stor språkmodell
- **URL**: https://www.ai.se/en/project/gpt-sw3
- **Data**: Tränad på Berzelius, ~3,5 mdr tokens, modellstorlekar 126M–40B parameter
- **Användning**: Empirisk referens för träningskostnad av svensk modell (A42)

---

## 4. Storbolags träningskostnader (för triangulering)

### 4.1 Anthropic / Claude
- **Titel**: Anthropics finansieringsrundor, träningsinfrastruktur
- **Data**: Totalt ~$10+ mdr i finansiering (2023-2025). Uppskattad träningskostnad per frontier-modell: $100M-$1B+. Använder AWS/GCP-kluster med tiotusentals GPU:er.
- **Användning**: Triangulering – vad kostar en frontier-modell att träna?

### 4.2 xAI / Grok / Colossus
- **Titel**: xAI Colossus Training Cluster
- **Data**: 100 000 H100 GPU:er i Memphis, TN. Uppskattad infrastrukturkostnad ~$3-4 mdr. Grok-träning använder en del av detta.
- **Källa**: Elon Musks publika uttalanden, The Information, Reuters
- **Användning**: Triangulering – jämförelse med full frontier-skala

### 4.3 Meta / Llama
- **Titel**: Llama 2 & Llama 3 – publicerade träningskostnader
- **Data**: Llama 2 70B: ~1,7 miljoner A100-timmar. Llama 3 405B: uppskattningsvis 30M+ GPU-timmar. Meta planerar 600K+ GPU:er totalt.
- **Källa**: Meta AI Research papers, Metas investerarpresentationer
- **Användning**: Direkt empirisk referens – känd compute per modellstorlek

### 4.4 OpenAI / GPT-4 / GPT-5
- **Titel**: GPT-4 träningskostnad
- **Data**: Uppskattad ~$100M+ på ~25 000 A100 i ~3 månader. GPT-5 uppskattningsvis 10-100x mer.
- **Källa**: Semianalysis, The Information, WSJ
- **Användning**: Triangulering – kostnaden för den modell offentlig sektor sannolikt *använder* (inference)

### 4.5 Google DeepMind / Gemini
- **Titel**: Gemini-modellernas träningsskala
- **Data**: Gemini Ultra tränad på tusentals TPU v4/v5, uppskattningsvis jämförbar med GPT-4-klassen
- **Källa**: Google tekniska rapporter
- **Användning**: Ytterligare datapunkt för frontier-kostnader

---

## 5. Beräknings- och marknadsbenchmarks

### 5.1 Epoch AI
- **Titel**: Trends in Machine Learning Compute
- **URL**: https://epochai.org/trends-in-machine-learning
- **Data**: Historisk tillväxt av tränings-compute (~4x/år), kostnadsreduktion per FLOP
- **Användning**: Effektivitetsförbättringstakt (A30-A32)

### 5.2 Artificial Analysis
- **Titel**: LLM Performance Benchmarks
- **URL**: https://artificialanalysis.ai/
- **Data**: Inference-throughput, tokens/sekund per GPU-typ, pris per token
- **Användning**: Beräkning av GPU:er per aktiv användare (A15-A17)

### 5.3 Stanford HAI – AI Index Report
- **Titel**: AI Index Annual Report
- **URL**: https://aiindex.stanford.edu/
- **Data**: Global AI-investering, adoption rates, compute-trender
- **Användning**: Övergripande marknadskontex

---

## 6. Adoptions- och marknadsdata

### 6.1 Gartner
- **Titel**: AI Adoption Forecasts
- **Data**: AI-adoption i offentlig sektor: ~10-15% (2024) → ~50-60% (2029)
- **Användning**: Adoptionskurvans form (A25-A29)

### 6.2 McKinsey Global AI Survey
- **Titel**: The State of AI
- **URL**: https://www.mckinsey.com/capabilities/quantumblack/our-insights
- **Data**: AI-adoption per bransch, ROI-uppskattningar, vanligaste användningsfall
- **Användning**: Validering av adoptionsantaganden

### 6.3 Microsoft Work Trend Index
- **Titel**: Work Trend Index / Copilot-data
- **URL**: https://www.microsoft.com/en-us/worklab/
- **Data**: Copilot-användningsmönster (interaktioner/dag, typ av uppgifter)
- **Användning**: Empirisk bas för Tier 1-antaganden (A10-A14)

---

## 7. Policy- och ramverksdokument

### 7.1 OECD AI Policy Observatory
- **Titel**: OECD.AI
- **URL**: https://oecd.ai/
- **Data**: AI-policyer per land, investeringsjämförelser, rekommendationer
- **Användning**: Internationell inramning och benchmarking

### 7.2 EU AI Act – konsekvensanalys
- **Titel**: AI Act Impact Assessment
- **URL**: https://digital-strategy.ec.europa.eu/
- **Data**: Regelverkets påverkan på AI-adoption, compliance-kostnader
- **Användning**: Regulatorisk kontext som adoptionsfaktor

### 7.3 Nordiska ministerrådets AI-rapporter
- **Titel**: Nordic Council of Ministers – AI in the Nordics
- **URL**: https://www.norden.org/
- **Data**: Nordiska jämförelser, gemensamma utmaningar
- **Användning**: Nordisk inramning

### 7.4 SOU 2024:65 – Stärkt satisförmåga (om tillämpligt)
- **Titel**: Relevanta SOU:er och Ds-promemorior om AI och digitalisering
- **Data**: Svenska regeringens utredningar om AI-kapacitet
- **Användning**: Politisk kontext och beslutsunderlag

### 7.5 Regeringens AI-kommission
- **Titel**: AI-kommissionens rapport (november 2024)
- **URL**: https://www.regeringen.se/
- **Data**: Kommissionens slutsatser om AI-infrastruktur, compute-behov, rekommendationer
- **Användning**: Central referens – den viktigaste svenska policyrapporten om AI-behov

### 7.6 Draghi-rapporten om EU:s konkurrenskraft
- **Titel**: The future of European competitiveness (Part A / Part B) – Mario Draghi, särskild rådgivare
- **URL**: https://commission.europa.eu/topics/strengthening-european-competitiveness/eu-competitiveness-looking-ahead_en
- **Data**: Innovations- och investeringsgap EU–USA/Kina, rekommenderad skala på årliga satsningar, digital infrastruktur och industristruktur
- **Användning**: Internationell policykontext för varför compute- och AI-kapacitet är strategisk (jfr [08-filosofi.md](08-filosofi.md), [resources/links.md](resources/links.md) **L1**)
