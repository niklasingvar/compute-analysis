# Offentlig sektors AI-compute-behov 2026-2031

Detta repository uppskattar hur mycket AI-beräkningskapacitet svensk offentlig sektor kan behöva 2026-2031. Huvudfrågan är inte bara hur många GPU:er som krävs, utan vilken ambitionsnivå Sverige vill välja för drift, suveränitet och långsiktig handlingsfrihet.

## Kort slutsats

Huvudscenariot i repo:t är att svensk offentlig sektor behöver ungefär **8 000 H100-ekvivalenter 2029**. Ett defensivt minimum ligger runt **3 000**, medan ett mer offensivt ambitionsscenario ligger runt **18 000**.

Tre trianguleringsspår används:

- **Botten-upp**: användningsfall × adoption × compute per enhet
- **Topp-ned**: internationella jämförelser och offentliga investeringsnivåer
- **Storbolagstriangulering**: vad motsvarande modell- och driftförmåga kostar i global marknad

## Scenarioöversikt

| År | Låg | Bas | Hög | Enhet |
|----|-----|-----|-----|-------|
| 2026 | 400 | 900 | 2 000 | H100-ekvivalenter |
| 2027 | 800 | 2 000 | 4 500 | H100-ekvivalenter |
| 2028 | 1 600 | 4 000 | 9 000 | H100-ekvivalenter |
| 2029 | 3 000 | 8 000 | 18 000 | H100-ekvivalenter |
| 2030 | 5 000 | 12 000 | 28 000 | H100-ekvivalenter |
| 2031 | 7 000 | 16 000 | 40 000 | H100-ekvivalenter |

## Hur repo:t ska läsas

- Börja i [06-sammanfattning.md](06-sammanfattning.md) för den beslutsklara versionen
- Gå sedan till [03-berakningsmodell.md](03-berakningsmodell.md) för den fulla härledningen
- Använd [02-antaganden-och-data.md](02-antaganden-och-data.md) som numerisk sanningskälla
- Läs [08-strategi.md](08-strategi.md) för den strategiska tolkningen av varför nivåvalet spelar roll

## Dokumentöversikt

| Dokument | Roll |
|----------|------|
| [01-ramverk.md](01-ramverk.md) | Ramverk, trianguleringslogik och scenarioarkitektur |
| [02-antaganden-och-data.md](02-antaganden-och-data.md) | Antaganderegister (A1–A80), single source of truth |
| [03-berakningsmodell.md](03-berakningsmodell.md) | Full kvantitativ modell |
| [04-internationella-jamforelser.md](04-internationella-jamforelser.md) | Topp-ned-validering via andra länder |
| [05-kallor-och-resurser.md](05-kallor-och-resurser.md) | Riskbaserat källregister |
| [06-sammanfattning.md](06-sammanfattning.md) | Beslutsversion |
| [07-teknisk-bilaga.md](07-teknisk-bilaga.md) | Teknisk bilaga och ordlista |
| [08-strategi.md](08-strategi.md) | Konkurrenskraft, beroende och ambition |
| [09-tanke-exempel.md](09-tanke-exempel.md) | Bygga vs. köpa |
| [10-kan-vi-vanta.md](10-kan-vi-vanta.md) | Stresstest av väntestrategi |
| [11-kompletterande-perspektiv.md](11-kompletterande-perspektiv.md) | Praktiska kompletterande perspektiv |
| [12-upprevidering-utmaning.md](12-upprevidering-utmaning.md) | Stresstest: varför även huvudscenariot kan vara för lågt |

## Viktig tolkningsregel

[12-upprevidering-utmaning.md](12-upprevidering-utmaning.md) är ett **stresstest**, inte ett alternativt basscenario. Huvudrepo använder scenarioarkitekturen **låg / bas / hög** och samma 2029-nivåer i alla kärndokument.

## Källor och regler

- Källregister: [05-kallor-och-resurser.md](05-kallor-och-resurser.md)
- Strategiska policylänkar: [resources/links.md](resources/links.md)
- Projektkonventioner: [CLAUDE.md](CLAUDE.md)
