# Sjukvårdens AI-adoption — diagnostik, beslutsstöd och genomik

Antaganden: A22–A27, A87–A90

## Huvudantagande

**40–70% av sjukvårdens diagnostiska arbetsflöden** har AI-stöd till 2029 (A87, bas 55%). Det driver Tier 2:s sjukvårdskomponent: ~450 H100-eq i basscenariot (spann 200–900).

## Vad menas med sjukvårdens AI?

Sjukvårdens AI-compute delas i två delar:

1. **Tier 1 (ingår i copilot/agent-beräkningen):** Transkription, dokumentation, kommunikation — allt som handlar om att skriva, sammanfatta och svara.
2. **Tier 2 (specialiserad inference, denna fil):** Bilddiagnostik, patologi, kliniskt beslutsstöd, genomik och kronisk övervakning — compute-tunga uppgifter som kräver dedikerad GPU-kapacitet.

## Fem vårdkedjor

Fullständig härledning i [13-sjukvard-compute-per-vardkedja.md](../13-sjukvard-compute-per-vardkedja.md):

| Vårdkedja | Volymer | Compute (bas 2029) | Källa |
|---|---|---|---|
| Bilddiagnostik (röntgen, MR, DT) | ~8–10 M undersökningar/år | ~150–250 H100-eq | Socialstyrelsen, regiondata (A22) |
| Patologi | ~3–4 M preparat/år | ~50–120 H100-eq | Regionala patologiregister |
| Kliniskt beslutsstöd | ~20 M vårdkontakter | ~80–200 H100-eq | SKR, 1177-data |
| Kronisk övervakning | ~1 M patienter | ~30–80 H100-eq | Uppskattning |
| Genomik | ~50 000–200 000 analyser/år | ~40–150 H100-eq | Genomic Medicine Sweden |

## Var svensk sjukvård står idag

- **AI Sweden Vårdkarta 2025:** 197 AI-initiativ, varav 13% i klinisk drift
- De flesta initiativ är inom bilddiagnostik (röntgen-AI) — övriga vårdkedjor är i pilotfas
- Regionala skillnader är stora: Stockholm, Västra Götaland och Skåne leder

## Osäkerhetskällor

**A90 (extrapolationsfaktor):** Modellen bygger detaljerat på 5 vårdkedjor och extrapolerar till övrig sjukvård med en faktor 0,3–0,7 (bas 0,5). Detta är den **primära osäkerhetskällan** — om extrapolationen är för hög dubbelräknas compute, om den är för låg missas vårdkedjor.

## Känslighet

| Healthcare AI adoption | Tier 2 sjukvård 2029 |
|---|---|
| 30% (låg) | ~200 H100-eq |
| 55% (bas) | ~450 H100-eq |
| 80% (hög) | ~900 H100-eq |

## Källor

- [13-sjukvard-compute-per-vardkedja.md](../13-sjukvard-compute-per-vardkedja.md)
- [Socialstyrelsen – Statistikdatabas](https://www.socialstyrelsen.se/statistik-och-data/statistik/)
- [Genomic Medicine Sweden](https://genomicmedicine.se/)
- [AI Sweden Vårdkarta](https://www.ai.se/en)
- [02-antaganden-och-data.md](../02-antaganden-och-data.md) — A22–A27, A87–A90
