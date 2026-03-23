# 08 – Strategi: konkurrenskraft, beroende och ambition

Källhänvisningar i texten använder nycklarna L1–L11; fullständiga länkar och metadata finns i [resources/links.md](resources/links.md).

## Utgångspunkt

Svensk och europeisk konkurrenskraft är hotad om grunden för kunskapsarbete och innovation – tillgång till avancerad beräkningskraft och till de modeller som producerar "smarta" tokens (dvs. inference och beslutsstöd från stora språk- och multimodella modeller) – i praktiken kontrolleras av en eller några få aktörer utanför Europa. Europeiska analyser pekar på ett stort innovations- och investeringsgap gentemot USA och Kina samt behov av digital infrastruktur som stärker långsiktig konkurrenskraft (L1). I Sverige har AI-kommissionen lyft avsaknad av strategisk samordning och tillgång till beräkningskraft som central utmaning (L2). På EU-nivå knyts samma tema till begreppet teknisk suveränitet – förmåga att i kritiska led i digital infrastruktur inte vara utlämnad till enskilda tredjelandsleverantörer (L3).

Det handlar inte bara om att "ha AI", utan om var intelligensen sitter, vem som sätter villkoren, och om Sverige och EU kan bygga egen förmåga eller enbart konsumera andras. I EU-policy förekommer ofta även strategisk autonomi: att minska riskfyllda beroenden i kritiska teknikkedjor – här särskilt avancerad AI och den infrastruktur som krävs för att träna, finjustera och köra modeller.

---

## Beroendet av ledande modeller

Om en amerikansk eller kinesisk modellfamilj blir den dominerande leverantören av den typ av kapabilitet som sammanfattas här som "smarta" tokens – dvs. den kognitiva infrastruktur som forskare, handläggare, ingenjörer och beslutsfattare använder dagligen – då blir det i praktiken nödvändigt att nyttja den för att vara konkurrenskraftig.

Träningscompute för frontier-modeller har vuxit mycket snabbt, vilket höjer tröskeln för nya aktörer och koncentrerar utveckling till välfinansierade miljöer (L7). För ledande AI-lab utgör compute en dominant kostnadspost – vilket förstärker skal- och leverantörskoncentration (L8).

Konsekvensen är dubbel:

- Individ- och organisationsnivå: Utan tillgång till samma verktygskedjor (API:er, copilots, finjusterade varianter) riskerar svenska forskare och medarbetare att hamna i underläge jämfört med kollegor i länder där användning är självklar och fullt finansierad.
- Systemnivå: Om hela ekosystemet – modell, hosting, prissättning, användarvillkor och dataflöden – styrs utanför Europa, blir policy, integritet och långsiktig strategisk frihet sekundära till leverantörens affärsmodell.

---

## Leverantörsmakt, monopolrisk och rättslig grund

Om tredjeland utanför EU och/eller ett litet antal globala bolag i praktiken får monopol eller oligopol på denna typ av "smarta" tokens kan de i stor utsträckning diktera villkoren: pris, tillgänglighet, geografiska begränsningar, och – centralt för offentlig sektor och forskning – rätten till och användningen av data (träningsdata, inference-loggar, finjusteringsdata, compliance-krav). Regulatoriskt ramverk för AI-tjänster (t.ex. AI Act) påverkar hur produkter får saluföras och användas i EU, men ersätter inte frågan om var data bearbetas och vilken utländsk lag leverantören omfattas av (L11).

För Sverige och EU är ett långsiktigt läge där offentlig sektor och kritiska sektorer enbart kan nå frontier-kapacitet via leverantörer under icke-europeisk jurisdiktion oacceptabelt om det innebär:

- strukturellt leverantörsberoende gentemot aktörer som inte står under europeisk demokratisk eller regulatorisk kontroll i samma grad som inhemsk eller gemensam infrastruktur;
- att känsliga eller strategiskt viktiga data i praktiken underkastas tredjelands myndighets- och domstolsprövning eller extraterritoriell lagstiftning.

Rättslig grund (ej uttömmande): USA:s CLOUD Act ger amerikanska myndigheter möjlighet att kräva ut information från vissa leverantörer oberoende av var data fysiskt lagras; europeiska dataskyddsmyndigheter har analyserat spänningen mot GDPR (L4). För svensk offentlig sektor finns vägledning om sekretess, dataskydd och utkontraktering som tar sikte på samma spänningsfält, inklusive molntjänster (L5). Schrems II (C-311/18) ogiltigförklarade tidigare överföringsgrund och understryker att mekanismer som Data Privacy Framework inte löser alla konflikter mellan europeiskt skydd och tredjelandsåtkomst (L6).

Dessa punkter motiverar att politiska slutsatser om "smarta" tokens och molnlevererad AI inte enbart är ekonomiska – de har förvaltningsrättslig och integritetsmässig tyngd.

---

## Öppna modeller – motmedel som kräver egen infrastruktur

Öppna eller villkorat licensierade modellvikter (t.ex. Llama-familjen, europeiska aktörer som Mistral med öppna vikter (L9), samt svenska GPT-SW3 (L10)) kan minska låsning till en enda kommersiell API-leverantör av "smarta" tokens. Samtidigt flyttas kostnaden: för att uppnå samma kapabilitet on-prem, i europeiskt moln eller i nationell forskningsinfrastruktur krävs beräkningskraft, kompetens och drift – ofta i samma storleksordning som analysen i 03–06 redovisar. Nationellt tränade eller finjusterade modeller (jfr L10) är därför inte ett substitut för compute-investeringar; de förutsätter dem.

Framväxten av öppna resonemangsmodeller (t.ex. DeepSeek-R1, Qwen, Llama-baserade varianter) förstärker denna dynamik. Dessa modeller når konkurrenskraftig kvalitet på många uppgifter — men chain-of-thought-resonemang genererar 5–50x fler tokens per fråga, vilket ökar inference-behovet per interaktion. Öppna resonerangsmodeller gör egen infrastruktur mer _värdefull_ (fullständigt oberoende av slutna API:er blir möjligt) men inte mindre _nödvändig_.

---

## Tre nivåer av ambition: "tillräckligt" räcker inte

Tre analysmetoder med olika metodansats pekar sammantaget mot att svensk offentlig sektor inte klarar sig på symbolisk AI-kapacitet. I den kvantitativa modellen ligger **låg** kring ~3 000 H100-ekvivalenter 2029, **bas** kring ~9 000 och **hög** kring ~20 000. Kärnfrågan är därför inte _om_ investering behövs utan **vilken ambitionsnivå** Sverige väljer.

Att dimensionera enbart efter beräkningsvolym — _se till att kapaciteten räcker_ — är nödvändigt men otillräckligt.

Ett minimumscenario ("vi har tillräckligt med compute för att köra dagens arbetsflöden") löser kortsiktiga flaskhalsar men adresserar inte:

- kompetens – förmåga att förstå, utvärdera, anpassa och i förlängningen bidra till modellutveckling; den byggs i praktiken genom tillgång till forsknings- och utbildningsmiljöer där man kan experimentera på egen eller gemensam infrastruktur, inte enbart via fjärr-API:er;
- innovationskraft – förmåga att bygga produkter, tjänster och forskningsresultat som inte bara replikerar vad som redan finns globalt;
- villkor – att prissättning, dataanvändning, öppenhet och långsiktig tillgång utformas utifrån europeiska och svenska intressen (demokrati, rättsstat, konkurrens, klimat och arbetsmarknad).

Ett ambitionsscenario innebär därför att målet inte bara är _kapacitet i gigawatt-timmar eller GPU-timmar_, utan kapacitet + kompetens + styrning så att:

1. Offentlig sektor, akademi och strategiskt viktiga delar av näringslivet kan arbeta på egna eller gemensamma villkor där det krävs (känslig data, kritiska tjänster, långsiktig forskning).
2. Europa inte permanent låser sig i en roll som betalande kund och beroende konsument i en enda geopolitisk leverantörskedja.
3. Investeringar i compute kopplas till utbildning, forskningsinfrastruktur, öppna modellvikter och modeller med begränsad eller villkorad licensiering – inte enbart till licenser hos utländska molnleverantörer.

I den kvantitativa modellen (03–06) motsvarar detta en tydlig koppling:

- **Låg** (~3 000 H100-ekvivalenter 2029) är ett defensivt minimum som säkrar viss drift och begränsad nationell förmåga.
- **Bas** (~9 000 H100-ekvivalenter 2029) är nivån där offentlig sektor kan kombinera bred användning med meningsfull suverän modellförmåga.
- **Hög** (~20 000 H100-ekvivalenter 2029) ligger närmare ett tydligt ambitionsscenario där Sverige väljer starkare forskningsmiljö, högre agentisk användning och större strategisk handlingsfrihet.

Exakta intervall och antaganden återfinns i 02–03 och 06.

### Suverän träning — ett politiskt val med egen kostnad-nytta

Skillnaden mellan ~4 300 H100-eq (operativt behov, Tier 1–3) och ~9 000 (inkl. suverän träning, Tier 4) är i första hand ett politiskt val om hur mycket modellförmåga Sverige vill äga själv.

| Dimension | Med suverän träning (Tier 4) | Utan (enbart Tier 1–3) |
| --------- | ---------------------------- | ---------------------- |
| Compute-behov 2029 | ~9 000 H100-eq | ~4 300 H100-eq |
| Årskostnad compute | ~2 000 MSEK | ~950 MSEK |
| Tilläggskostnader | Kompetensuppbyggnad, drift, flerårsåtagande | Lägre, men licensavgifter till kommersiella aktörer |
| Datasuveränitet | Full kontroll: känsliga data stannar i svensk infrastruktur | Beroende av kommersiella aktörers datahantering |
| Leverantörsoberoende | Starkt: möjligt att byta, anpassa, vidareutveckla modeller | Svagt: prissättning och tillgänglighet styrs av 3–4 amerikanska bolag |
| Strategisk autonomi | Möjlighet att utveckla modeller för svenska behov (juridik, hälsa, myndighetssvenska) | Begränsad: anpassning sker genom finjustering av andras modeller |
| Forskningsmiljö | Skapar nationell forsknings- och utbildningsinfrastruktur | Forskning beroende av extern API-åtkomst |

Suverän träning är inte en teknisk nödvändighet för operativ AI-användning. Det är ett strategiskt val som ger långsiktig handlingsfrihet men kräver väsentligt högre investering och flerårig kompetensuppbyggnad. Beslutet bör prövas mot Sveriges geopolitiska läge, beroende av ett fåtal AI-leverantörer och viljan att upprätthålla nationell förmåga i känsliga domäner.

Därför är ren konsumtion av utländsk frontier-AI en övergångsstrategi – inte en slutpunkt för teknisk suveränitet eller långsiktig konkurrenskraft (L1, L3).

---

## Slutsats

Beslut om compute bör prövas mot båda nivåerna: tillräcklig volym _och_ tillräcklig strategisk ambition. Ett Sverige som enbart säkrar driftskapacitet "hänger med" — men bygger inte förmåga att agera konkurrenskraftigt och självständigt där det spelar roll. Kvantitativa underlag, antaganden och internationella jämförelser finns i [01](01-ramverk.md)–[07](07-teknisk-bilaga.md); en konkret genomgång av bygga vs. köpa vs. hybrid i [09-tanke-exempel.md](09-tanke-exempel.md).
