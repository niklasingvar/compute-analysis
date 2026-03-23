# Projektkonventioner: Sveriges AI-compute-behov 2026–2031

## Projekttyp

Policyanalys — inga kodfiler, enbart markdown-dokument.

## Konventioner

### Estimat

- Alla uppskattningar anges som intervall (låg/bas/hög), aldrig enskilda punktvärden
- Varje siffra ska vara spårbar till ett numrerat antagande (A1–A89), en angiven källa, eller en explicit härledning
- "Fermi-estimering": transparenta approximationer framför ogenomskinlig precision

### Enheter

- Beräkningskapacitet: H100-ekvivalenter (GPU:er)
- Kostnad: MSEK (miljoner kronor)
- Effekt: MW (megawatt)

### Språk

- Svenska i leverabler
- Engelska tekniska termer behålls där de är vedertagna (GPU, inference, fine-tuning, etc.)

### Metaregler

1. Evidensbaserad analys — varje slutsats leds i bevis. Dokumenten gör analysen, de berättar inte om den. Inga ord som "reviderad", "uppdaterad", "jämfört med tidigare" — texten _är_ analysen.
2. Säkra att läsaren ser metodiken — metoden (triangulering, scenarioanalys) ska vara synlig och trovärdig, men som stöd bakom svaret, inte som rubrik.
3. Triangulering stödjer siffran — varje central siffra ska belysas från minst två spår med olika metodansats. Där spåren delar antaganden redovisas detta explicit.
4. Källor eller tydliga antaganden — varje påstående ska ha en källhänvisning (→ [resources/links.md](resources/links.md), [05-kallor-och-resurser.md](05-kallor-och-resurser.md)) eller ett spårbart antagande (A1–A89).
5. Dubbelkolla källans URL — verifiera att länken fungerar innan den läggs till.
6. Ingen meta-text — skriv inte "vi har reviderat", "i den nya analysen", "jämfört med förra versionen". Dokumenten ska läsas som fristående analys, inte ändringslogg.

### Scope

Huvudscopet är svensk offentlig sektor (exkl. försvar).

Kompletterande dokument får stress-testa, utmana eller bredda huvudtesen, men de får inte införa en separat scenarioarkitektur.

### Målgrupp

Tre lager:

1. Sammanfattning (06-sammanfattning.md): beslutsfattare (minister, statssekreterare)
2. Teknisk bilaga (07-teknisk-bilaga.md): IT-strateger och tekniska rådgivare
3. Strategi (08-strategi.md): strategisk ram (konkurrenskraft, beroende, varför bas vs hög är politiskt)

### Scenarioarkitektur

- Huvudrepo använder tre nivåer: `låg`, `bas`, `hög`
- `12-upprevidering-utmaning.md` får fungera som stresstest/utmaning, men inte som ny huvudmodell
- Alla dokument ska använda samma 2029-nivåer och samma definition av vad `låg`, `bas` och `hög` betyder
- Om ett dokument diskuterar ett ännu högre utfall ska det uttryckas som stresstest eller uppsidesrisk, inte som ett parallellt basscenario

### Filstruktur

```
01-ramverk.md                     # Analytiskt ramverk & metodik
02-antaganden-och-data.md         # Numrerat antaganderegister (A1–A89), single source of truth
03-berakningsmodell.md            # Beräkningsmodell — offentlig sektor (tre trianguleringsspår)
04-internationella-jamforelser.md # Internationella jämförelser
05-kallor-och-resurser.md         # Källregister (alla länkar, rapporter, datakällor)
06-sammanfattning.md              # Sammanfattning (slutleverabel)
07-teknisk-bilaga.md              # Teknisk bilaga
08-strategi.md                    # Konkurrenskraft, beroende, ambition (strategisk ram)
09-tanke-exempel.md               # Bygga vs. köpa — konkret tankeexperiment
10-kan-vi-vanta.md                # "Kan vi vänta?" — stresstest av avvakta-strategin
11-kompletterande-perspektiv.md   # Praktiker-stresstest (elnät, tokens/capita, NVIDIA-kö)
12-upprevidering-utmaning.md      # Stresstest: varför även huvudscenariot kan vara för lågt
13-sjukvard-compute-per-vardkedja.md # Sjukvårdens AI-compute: botten-upp per vårdkedja (stödjer Tier 2)
```

### Kvalitetskontroll

- Konvergerar botten-upp, topp-ned och storbolagstrianguleringen?
- Är alla antaganden rimliga och spårbara?
- Kan en icke-teknisk läsare följa sammanfattningen och se varför ambitionsnivå (låg/bas/hög) spelar roll?
- Är varje slutsats ledd i bevis — inte påstådd?
