# 08 – Filosofi: konkurrenskraft, beroende och ambition

Källhänvisningar i texten använder nycklarna **L1**–**L11**; fullständiga länkar och metadata finns i [resources/links.md](resources/links.md).

## Utgångspunkt

Svensk och europeisk konkurrenskraft är **hotad** om grunden för kunskapsarbete och innovation – tillgång till avancerad **beräkningskraft** och till de modeller som producerar **"smarta" tokens** (dvs. inference och beslutsstöd från stora språk- och multimodella modeller) – i praktiken kontrolleras av en eller några få aktörer utanför Europa. Europeiska analyser pekar på ett stort innovations- och investeringsgap gentemot USA och Kina samt behov av digital infrastruktur som stärker långsiktig konkurrenskraft (**L1**). I Sverige har AI-kommissionen lyft avsaknad av strategisk samordning och tillgång till **beräkningskraft** som central utmaning (**L2**). På EU-nivå knyts samma tema till begreppet **teknisk suveränitet** – förmåga att i kritiska led i digital infrastruktur inte vara utlämnad till enskilda tredjelandsleverantörer (**L3**).

Det handlar inte bara om att "ha AI", utan om **var** intelligensen sitter, **vem** som sätter villkoren, och **om** Sverige och EU kan bygga egen förmåga eller enbart konsumera andras. I EU-policy förekommer ofta även **strategisk autonomi**: att minska riskfyllda beroenden i kritiska teknikkedjor – här särskilt avancerad AI och den infrastruktur som krävs för att träna, finjustera och köra modeller.

---

## Beroendet av ledande modeller

Om en **amerikansk eller kinesisk** modellfamilj blir den dominerande leverantören av den typ av kapabilitet som sammanfattas här som **"smarta" tokens** – dvs. den kognitiva infrastruktur som forskare, handläggare, ingenjörer och beslutsfattare använder dagligen – då blir det i praktiken **nödvändigt** att nyttja den för att vara konkurrenskraftig.

Träningscompute för frontier-modeller har vuxit mycket snabbt, vilket höjer tröskeln för nya aktörer och koncentrerar utveckling till välfinansierade miljöer (**L7**). För ledande AI-lab utgör compute en dominant kostnadspost – vilket förstärker skal- och leverantörskoncentration (**L8**).

Konsekvensen är dubbel:

- **Individ- och organisationsnivå**: Utan tillgång till samma verktygskedjor (API:er, copilots, finjusterade varianter) riskerar svenska forskare och medarbetare att hamna i underläge jämfört med kollegor i länder där användning är självklar och fullt finansierad.
- **Systemnivå**: Om hela ekosystemet – modell, hosting, prissättning, användarvillkor och dataflöden – styrs utanför Europa, blir **policy, integritet och långsiktig strategisk frihet** sekundära till leverantörens affärsmodell.

---

## Leverantörsmakt, monopolrisk och rättslig grund

Om **tredjeland utanför EU och/eller ett litet antal globala bolag** i praktiken får **monopol eller oligopol** på denna typ av **"smarta" tokens** kan de i stor utsträckning **diktera villkoren**: pris, tillgänglighet, geografiska begränsningar, och – centralt för offentlig sektor och forskning – **rätten till och användningen av data** (träningsdata, inference-loggar, finjusteringsdata, compliance-krav). Regulatoriskt ramverk för AI-tjänster (t.ex. **AI Act**) påverkar hur produkter får saluföras och användas i EU, men ersätter inte frågan om var data bearbetas och vilken utländsk lag leverantören omfattas av (**L11**).

För Sverige och EU är ett långsiktigt läge där offentlig sektor och kritiska sektorer **enbart** kan nå frontier-kapacitet via leverantörer under **icke-europeisk jurisdiktion** **oacceptabelt** om det innebär:

- strukturellt **leverantörsberoende** gentemot aktörer som inte står under europeisk demokratisk eller regulatorisk kontroll i samma grad som inhemsk eller gemensam infrastruktur;
- att känsliga eller strategiskt viktiga data i praktiken underkastas **tredjelands** myndighets- och domstolsprövning eller extraterritoriell lagstiftning.

**Rättslig grund (ej uttömmande):** USA:s **CLOUD Act** ger amerikanska myndigheter möjlighet att kräva ut information från vissa leverantörer oberoende av var data fysiskt lagras; europeiska dataskyddsmyndigheter har analyserat spänningen mot GDPR (**L4**). För svensk **offentlig sektor** finns vägledning om sekretess, dataskydd och utkontraktering som tar sikte på samma spänningsfält, inklusive molntjänster (**L5**). **Schrems II** (C-311/18) ogiltigförklarade tidigare överföringsgrund och understryker att mekanismer som Data Privacy Framework inte löser alla konflikter mellan europeiskt skydd och tredjelandsåtkomst (**L6**).

Dessa punkter motiverar att politiska slutsatser om **"smarta" tokens** och molnlevererad AI inte enbart är ekonomiska – de har **förvaltningsrättslig och integritetsmässig** tyngd.

---

## Öppna modeller – motmedel som kräver egen infrastruktur

**Öppna eller villkorat licensierade modellvikter** (t.ex. Llama-familjen, europeiska aktörer som Mistral med öppna vikter (**L9**), samt svenska **GPT-SW3** (**L10**)) kan **minska låsning** till en enda kommersiell API-leverantör av **"smarta" tokens**. Samtidigt flyttas kostnaden: för att uppnå samma kapabilitet **on-prem**, i europeiskt moln eller i nationell forskningsinfrastruktur krävs **beräkningskraft**, kompetens och drift – ofta i samma storleksordning som analysen i **03–06** redovisar. Nationellt tränade eller finjusterade modeller (jfr **L10**) är därför inte ett substitut för compute-investeringar; de **förutsätter** dem.

---

## Två nivåer av ambition: "tillräckligt" räcker inte

Analysen av **beräkningsbehov** (compute i H100-ekvivalenter, kostnad, effekt) kan lätt tolkas som ett mål i sig: *se till att volymen räcker*. Det är en nödvändig men **otillräcklig** ram.

Ett **minimumscenario** ("vi har tillräckligt med compute för att köra dagens arbetsflöden") löser kortsiktiga flaskhalsar men adresserar inte:

- **kompetens** – förmåga att förstå, utvärdera, anpassa och i förlängningen bidra till modellutveckling; den byggs i praktiken genom tillgång till **forsknings- och utbildningsmiljöer** där man kan experimentera på **egen eller gemensam** infrastruktur, inte enbart via fjärr-API:er;
- **innovationskraft** – förmåga att bygga produkter, tjänster och forskningsresultat som inte bara replikerar vad som redan finns globalt;
- **villkor** – att prissättning, dataanvändning, öppenhet och långsiktig tillgång utformas utifrån **europeiska och svenska** intressen (demokrati, rättsstat, konkurrens, klimat och arbetsmarknad).

Ett **ambitionsscenario** innebär därför att målet inte bara är *kapacitet i gigawatt-timmar eller GPU-timmar*, utan **kapacitet + kompetens + styrning** så att:

1. Offentlig sektor, akademi och strategiskt viktiga delar av näringslivet kan arbeta **på egna eller gemensamma villkor** där det krävs (känslig data, kritiska tjänster, långsiktig forskning).
2. Europa inte permanent låser sig i en roll som **betalande kund och beroende konsument** i en enda geopolitisk leverantörskedja.
3. Investeringar i compute kopplas till **utbildning, forskningsinfrastruktur**, **öppna modellvikter** och **modeller med begränsad eller villkorad licensiering** – inte enbart till licenser hos utländska molnleverantörer.

I den kvantitativa modellen (**03–06**) motsvarar detta en tydlig koppling: **bas**-behovet för 2029 (~3 500 H100-ekvivalenter) kan ses som dimensionering nära "tillräcklig volym" under givna antaganden, medan **hög**-scenariet för samma år (intervall upp mot **~8 000** H100-ekvivalenter) ligger närmare ett **ambitionsscenario** där suverän träning, större finjusteringsvolym och högre adoption pressar efterfrågan – dvs. **mer beräkningskraft** för att kombinera drift med **kompetensuppbyggnad** och **strategisk handlingsfrihet**. Exakta intervall och antaganden återfinns i **02–03** och **06**.

Därför är ren **konsumtion** av utländsk frontier-AI en **övergångsstrategi** – inte en slutpunkt för **teknisk suveränitet** eller långsiktig konkurrenskraft (**L1**, **L3**).

---

## Koppling till övriga dokument

- **01–07** kvantifierar efterfrågan, antaganden och triangulering. **08** anger *varför* siffrorna har politisk tyngd utöver budgetposten: konkurrenskraft, beroende, **teknisk suveränitet** och frihet att sätta villkor.
- Beslut om compute bör uttryckligen prövas mot båda nivåerna: **tillräcklig volym** *och* **tillräcklig strategisk ambition** så att Sverige och EU inte bara "hänger med" utan kan agera **konkurrenskraftigt och självständigt** på sina egna premisser där det spelar roll.
