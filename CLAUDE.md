# Projektkonventioner: Offentlig sektors AI-compute-behov 2026-2031

## Projekttyp
Policyanalys — inga kodfiler, enbart markdown-dokument.

## Konventioner

### Estimat
- Alla uppskattningar anges som **intervall** (låg/bas/hög), aldrig enskilda punktvärden
- Varje siffra ska vara spårbar till ett numrerat antagande (A1-A50), en angiven källa, eller en explicit härledning
- "Fermi-estimering": transparenta approximationer framför ogenomskinlig precision

### Enheter
- **Beräkningskapacitet**: H100-ekvivalenter (GPU:er)
- **Kostnad**: MSEK (miljoner kronor)
- **Effekt**: MW (megawatt)

### Språk
- Svenska i leverabler
- Engelska tekniska termer behålls där de är vedertagna (GPU, inference, fine-tuning, etc.)

### Metaregler
1. **Leverera analysen** — dokumenten ska göra analysen för läsaren, inte berätta om den. Svar och rekommendation kommer först.
2. **Säkra att läsaren ser metodiken** — metoden (triangulering, scenarioanalys) ska vara synlig och trovärdig, men som stöd bakom svaret, inte som rubrik.
3. **Triangulering bevisar siffran** — varje central siffra ska stödjas av minst två oberoende spår (botten-upp, topp-ned, storbolagsjämförelse).
4. **Källor eller tydliga antaganden** — varje påstående ska ha en källhänvisning (→ [resources/links.md](resources/links.md), [05-kallor-och-resurser.md](05-kallor-och-resurser.md)) eller ett spårbart antagande (A1-A50).
5. **Dubbelkolla källans URL** — verifiera att länken fungerar innan den läggs till.

### Målgrupp
Tre lager:
1. **Sammanfattning** (06-sammanfattning.md): beslutsfattare (minister, statssekreterare)
2. **Teknisk bilaga** (07-teknisk-bilaga.md): IT-strateger och tekniska rådgivare
3. **Strategi** (08-strategi.md): strategisk ram (konkurrenskraft, beroende, varför bas vs hög är politiskt)

### Filstruktur
```
01-ramverk.md                     # Analytiskt ramverk & metodik
02-antaganden-och-data.md         # Numrerat antaganderegister (A1-A50)
03-berakningsmodell.md            # Beräkningsmodell (tre trianguleringsspår)
04-internationella-jamforelser.md # Internationella jämförelser
05-kallor-och-resurser.md         # Källregister (alla länkar, rapporter, datakällor)
06-sammanfattning.md              # Sammanfattning (slutleverabel)
07-teknisk-bilaga.md              # Teknisk bilaga
08-strategi.md                    # Konkurrenskraft, beroende, ambition (strategisk ram)
09-tanke-exempel.md               # Bygga vs. köpa — konkret tankeexperiment
10-kan-vi-vanta.md                # "Kan vi vänta?" — stresstest av avvakta-strategin
11-kompletterande-perspektiv.md   # Praktiker-stresstest (elnät, tokens/capita, NVIDIA-kö)
```

### Kvalitetskontroll
- Konvergerar botten-upp, topp-ned och storbolagstrianguleringen?
- Är alla antaganden rimliga och spårbara?
- Kan en icke-teknisk läsare följa sammanfattningen och se varför ambitionsnivå (låg/bas/hög) spelar roll?
