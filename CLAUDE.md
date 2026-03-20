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

### Målgrupp
Tre lager:
1. **Sammanfattning** (06-sammanfattning.md): beslutsfattare (minister, statssekreterare) — leder med **triangulering** och ambitionsval, inte en enskild siffra
2. **Teknisk bilaga** (07-teknisk-bilaga.md): IT-strateger och tekniska rådgivare
3. **Filosofi** (08-filosofi.md): strategisk ram (konkurrenskraft, beroende, varför bas vs hög är politiskt)

### Filstruktur
```
01-ramverk.md                     # Analytiskt ramverk & metodik
02-antaganden-och-data.md         # Numrerat antaganderegister (A1-A50)
03-berakningsmodell.md            # Beräkningsmodell (tre trianguleringsspår)
04-internationella-jamforelser.md # Internationella jämförelser
05-kallor-och-resurser.md         # Källregister (alla länkar, rapporter, datakällor)
06-sammanfattning.md              # Sammanfattning (slutleverabel)
07-teknisk-bilaga.md              # Teknisk bilaga
08-filosofi.md                    # Konkurrenskraft, beroende, ambition (strategisk ram)
```

### Kvalitetskontroll
- Konvergerar botten-upp, topp-ned och storbolagstrianguleringen? (Metodstyrkan — inte punktprecision — är huvudargumentet.)
- Är alla antaganden rimliga och spårbara?
- Kan en icke-teknisk läsare följa sammanfattningen och se varför ambitionsnivå (låg/bas/hög) spelar roll?
