# Finjustering — varför myndigheter behöver egna modeller

Antaganden: A28–A32

## Huvudantagande

**80 organisationer** (myndigheter, regioner, kommuner) finjusterar aktivt AI-modeller på egna data 2029 (A28). Det ger ~600 H100-eq i Tier 3.

## Vad är finjustering?

Finjustering innebär att man tar en befintlig grundmodell (t.ex. GPT-4, Llama, Mistral) och tränar den vidare på organisationens egna data. Syftet:

- **Domänanpassning:** En modell som förstår Skatteverkets terminologi, Försäkringskassans ärendetyper eller en regions journalformat.
- **Kvalitetshöjning:** Bättre svar på specifika uppgifter (juridisk bedömning, medicinsk kodning) utan att behöva skicka enorma kontexter varje gång.
- **Dataskydd:** Data stannar inom organisationen — inget behov att skicka känslig information till extern leverantör.

## GPU-behov per körning

| Parameter | Värde | Källa |
|---|---|---|
| Typisk modellstorlek | 7–70B parametrar | A29 |
| GPU-timmar per körning | 100–1 000 H100-timmar | A30 |
| Körningar per org per år | 4–12 | A31 |
| Samtidiga jobb | 5–20 | A32 |

En stor myndighet som Skatteverket kanske kör 12 finjusteringar per år (en per månad, nya ärendetyper, uppdaterad praxis). En liten kommun kanske kör 2–4.

## Vilka 80 organisationer?

- ~30 stora statliga myndigheter (Skatteverket, Försäkringskassan, Migrationsverket, Polisen, domstolar, etc.)
- ~21 regioner (alla har sjukvårdsdata att finjustera på)
- ~30 större kommuner (Stockholm, Göteborg, Malmö, etc.)

Det är en konservativ uppskattning — det finns 290 kommuner och ~150 myndigheter med >100 anställda.

## Spann

| Antal organisationer | Tier 3 2029 |
|---|---|
| 30 (låg) | ~225 H100-eq |
| 80 (bas) | ~600 H100-eq |
| 200 (hög) | ~1 500 H100-eq |

Tier 3 är den minsta av de fyra tiererna. Även i det höga spannet utgör den <10% av totalen.

## Källor

- [03-berakningsmodell.md](../03-berakningsmodell.md) — Tier 3-beräkning
- [02-antaganden-och-data.md](../02-antaganden-och-data.md) — A28–A32
- [Statskontoret – Myndighetsregister](https://www.statskontoret.se/)
