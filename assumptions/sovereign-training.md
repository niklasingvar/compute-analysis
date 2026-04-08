# Suverän AI-träning — ett politiskt val

Antaganden: A33–A39, A62

## Huvudantagande

Om Sverige väljer att bygga nationell modellförmåga — träna eller vidareutveckla grundmodeller för svenska språket, juridik, sjukvård och offentlig domän — krävs **~4 500 H100-ekvivalenter i dedikerad träningskapacitet** 2029 (A38).

Det är den enskilt största posten i basscenariot och ett **rent politiskt val**, inte en konsekvens av användartillväxt.

## Vad innebär suverän träning?

- Träning av en 200B+ parametersmodell anpassad för svenska: ~5 miljoner H100-timmar per träningskörning (A62)
- 3 träningskörningar per år (känslig-data-modeller för hälsa, juridik, offentlig förvaltning): ~300 000 H100-timmar styck
- Kontinuerlig reinforcement learning (RLHF/RLAIF): ~500 000 H100-timmar/år
- Totalt: ~4 500 H100-eq i årsgenomsnitt

## Varför suveränitet?

### Beroendeargumentet

Utan suverän kapacitet blir Sverige helt beroende av amerikanska och kinesiska AI-leverantörer (primärt OpenAI/Microsoft, Google, Anthropic, och kinesiska alternativ). Dessa aktörer kan:

- **Diktera pris och villkor** — inga alternativ för känsliga data
- **Stänga av eller begränsa tillgång** — geopolitisk risk
- **Prioritera andra marknader** — Sverige är en liten kund
- **Inte optimera för svenska behov** — språk, juridik, kulturell kontext

### EU-kontext

- **EU AI Act** kräver transparens och kontroll över AI-system i högriskdomäner (sjukvård, rättsväsende). Svårt att uppfylla med svarta box-modeller från tredjeland.
- **Schrems II** begränsar överföring av persondata till USA. Känsliga offentliga data (patientjournaler, skatteärenden) kan inte fritt skickas till amerikanska moln.
- **EU AI Factories** (EUR 2–3 mdr) syftar till att bygga europeisk compute-kapacitet. Sverige kan delta — eller stå utanför.
- **EuroHPC** har redan investerat i LUMI (Finland, ~5 000 H100-eq) och Leonardo (Italien, ~3 500 H100-eq).

### Svensk referenspunkt

**GPT-SW3** (AI Sweden) demonstrerade att en svensk grundmodell kan tränas nationellt. Erfarenheten visar att det är tekniskt genomförbart men kräver dedikerad kapacitet ([källa](https://www.ai.se/en/project/gpt-sw3)).

## Vad kostar det att välja bort?

Om Sverige avstår suverän träning:

| | Med suveränitet | Utan |
|---|---|---|
| Total 2029 | ~9 000 H100-eq | ~4 300 H100-eq |
| Årskostnad | ~2 000 MSEK | ~955 MSEK |
| Leverantörsberoende | Begränsat | Fullt |
| Kontroll över modeller | Ja | Nej |
| Anpassning till svenska | Ja | Begränsad |

## Källor

- [08-suveranitet.md](../08-suveranitet.md) — Fullständig suveränitetsanalys
- [AI Sweden GPT-SW3](https://www.ai.se/en/project/gpt-sw3)
- [EU AI Act](https://artificialintelligenceact.eu/)
- [AI-kommissionens Färdplan (SOU 2025:12)](https://www.regeringen.se/rattsliga-dokument/statens-offentliga-utredningar/2025/02/sou-202512/)
- [02-antaganden-och-data.md](../02-antaganden-och-data.md) — A33–A39, A62
