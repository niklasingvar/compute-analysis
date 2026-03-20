# 11 – Kompletterande perspektiv

Huvudmodellen i [03-berakningsmodell.md](03-berakningsmodell.md) ger ett beslutbart huvudscenario. Detta dokument stresstestar den modellen från ett mer praktiskt perspektiv: vad händer om man tittar på elnät, exportvärde, tokens per capita och faktisk köpkraft i marknaden?

---

## 1. Överkapacitet är inte bara en risk

En vanlig invändning är att Sverige riskerar att bygga för mycket. Det är en relevant risk, men den är asymmetrisk:

- underskott är svårt att reparera snabbt
- överskott kan i viss mån användas för forskning, testmiljöer eller europeisk samverkan

I ett nordiskt läge med relativt goda kylförutsättningar och fossilfri el är det därför inte uppenbart att övre delen av intervallet är ett sämre beslut än den nedre. Nedsidan av för låg kapacitet är ofta större än nedsidan av måttlig överkapacitet.

---

## 2. Elnätet är en verklig restriktion, men inte en blockerare

Basscenariot i 2029 motsvarar ungefär **~5,6 MW** facility power. Det är inte litet, men det är heller inte i sig en nationell omöjlighet. Den praktiska frågan är i stället:

- var nätkapaciteten finns
- hur snabbt anslutning kan säkras
- om platsvalet sker i tid

Slutsatsen är därför inte att compute-behovet är för högt, utan att nätanslutning måste behandlas som en del av samma beslut som upphandling och lokalisering.

---

## 3. Teknikskiften talar för stegvis uppbyggnad

Snabb GPU-utveckling är ett argument **mot** att köpa allt på en gång, men inte ett argument för att avstå från att bygga upp kapacitet. Det stärker snarare hybridlogiken:

- bygg en kärna nu
- skala i etapper
- använd moln för burst och osäker belastning

Detta är ett starkare argument för **sekvensering** än för **passivitet**.

---

## 4. Om Sverige väljer bort suverän träning

Det är fullt möjligt att komma fram till att Sverige inte ska driva ett ambitiöst träningsspår. Då faller behovet tydligt:

| Fråga | Effekt |
|------|--------|
| Tier 4 tas i stort sett bort | totalen 2029 faller från ~8 000 till ungefär ~3 500–4 000 H100-eq |
| Kostnaden sjunker | lägre årskostnad och enklare uppstart |
| Beroendet ökar | mer kapacitet måste köpas som tjänst eller via externa modellaktörer |

Detta är därför inte ett sätt att "bevisa att modellen är fel", utan ett politiskt val om vad Sverige vill kunna göra själv.

---

## 5. Tokens per capita som alternativ kontroll

Ett annat sätt att stresstesta modellen är att börja uppifrån: hur många tokens per person och dag kräver ett moget AI-samhälle?

Om man antar ett nationellt moget scenario på omkring **250 000 tokens per capita och dag**, hamnar hela Sveriges behov i storleksordningen **35 000–50 000 H100-eq**. Offentlig sektor är bara en del av detta, men en relativt AI-intensiv del. Översatt till offentlig sektor ger denna kontroll ungefär **5 000–10 000 H100-eq**, vilket ligger nära huvudscenariot och tydligt ovanför ett defensivt minimum.

Poängen är inte att tokens-per-capita ska ersätta huvudmodellen, utan att den fungerar som ett oberoende stress-test som inte motsäger ett huvudscenario kring 8 000.

---

## 6. Marknadsmakt avgör mer än budget

Det sista praktiska perspektivet är att efterfrågan på GPU:er inte fördelas friktionsfritt. Stora aktörer säkrar kapacitet genom relationer, depositioner och fleråriga åtaganden. Små sena köpare gör det inte.

Det förändrar inte det svenska behovet i modellen. Men det förändrar hur beslutet måste tas:

- samlad köpkraft är bättre än fragmenterad köpkraft
- tidig förankring är bättre än sen formell upphandling
- partnerskap blir viktigare än enbart prisjämförelse

---

## Slutsats

De kompletterande perspektiven försvagar inte huvudtesen. De justerar snarare hur den ska läsas:

- behovet kan bli **högre** än huvudscenariot om agentisk användning accelererar snabbare
- behovet kan bli **lägre** om Sverige medvetet avstår från suverän träningsförmåga
- genomförandet är **svårare** än en budgettabell antyder, eftersom nät, leverantörstillgång och styrning är verkliga restriktioner

Det stärker huvudslutsatsen i [06-sammanfattning.md](06-sammanfattning.md): Sverige behöver inte bara en siffra, utan en genomförbar väg till kapacitet.
