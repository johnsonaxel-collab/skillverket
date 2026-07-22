export type Category =
  | "Innehåll"
  | "Strategi"
  | "PR & Kris"
  | "SEO"
  | "Analys & Data"
  | "Metoder";

export interface Skill {
  slug: string;
  callNumber: string;
  title: string;
  category: Category;
  /** En rad: vad skillen gör och när man tar fram den. */
  summary: string;
  tags: string[];
  /** Den nedladdningsbara SKILL.md-filen (frontmatter + instruktioner). */
  skillMarkdown: string;
}

export const CATEGORIES: Category[] = [
  "Innehåll",
  "Strategi",
  "PR & Kris",
  "SEO",
  "Analys & Data",
  "Metoder",
];

/** Manila-chip-färgkod per kategori (kodar kategorin i katalognumret). */
export const CATEGORY_META: Record<
  Category,
  { code: string; blurb: string }
> = {
  Innehåll: { code: "INH", blurb: "Skriv det som ska publiceras." },
  Strategi: { code: "STR", blurb: "Bestäm vad ni gör och varför." },
  "PR & Kris": { code: "PR", blurb: "Nå medier — och håll huvudet kallt." },
  SEO: { code: "SEO", blurb: "Bli hittad av rätt personer." },
  "Analys & Data": { code: "DAT", blurb: "Vet om det funkade." },
  Metoder: { code: "MET", blurb: "Applicera en tänkares ramverk." },
};

export const skills: Skill[] = [
  {
    slug: "pressmeddelande",
    callNumber: "INH·01",
    title: "Pressmeddelande",
    category: "Innehåll",
    summary:
      "Förvandlar en nyhet till ett pressmeddelande som en redaktör faktiskt orkar läsa — nyhetsvärdet först, jargongen bort.",
    tags: ["PR", "press", "nyhet", "media"],
    skillMarkdown: `---
name: pressmeddelande
description: Använd när användaren ska skriva ett pressmeddelande, en nyhet till pressen eller ett "press release". Triggas av "pressmeddelande", "gå ut med nyheten", "skriva till pressen", eller när ett företag har något att annonsera (lansering, rekrytering, milstolpe, partnerskap).
---

# Pressmeddelande

Du skriver pressmeddelanden som en van pressansvarig: nyhetsvärdet först, inga
superlativ utan bevis, och tillräckligt färdigt för att en redaktör ska kunna
klippa in det rakt av.

## Ta reda på detta först (fråga om det saknas)
- Vad är själva nyheten, i en mening?
- Varför är det relevant *nu* och för *vem*?
- En konkret siffra eller ett faktum som gör det trovärdigt.
- Ett citat från en namngiven person (titel + företag).
- Kontaktperson och datum/ort.

## Skrivregler
- **Rubriken** säger nyheten rakt ut, max ~12 ord. Ingen ordvits, inget "Vi är stolta".
- **Ingressen** (första stycket) besvarar vem, vad, när, var, varför — läsaren ska
  förstå hela nyheten utan att läsa vidare.
- Fallande viktighet: det viktigaste först, bakgrund sist.
- Citat ska låta som en människa, inte en broschyr. Det ska tillföra en åsikt eller
  ett *varför*, inte upprepa fakta.
- Stryk alla tomma superlativ ("marknadsledande", "revolutionerande", "unik") om de
  inte backas av ett faktum i texten.
- Aktiv röst, korta meningar, svensk press-standard.

## Format
\`\`\`
PRESSMEDDELANDE — [Ort] [datum]

[RUBRIK]
[Underrubrik: en mening som utvecklar]

[Ingress: vem/vad/när/var/varför]

[Brödtext, 2–3 stycken, fallande viktighet]

"[Citat]", säger [Namn], [titel] på [Företag].

[Ev. bakgrundsstycke om företaget — "Om [Företag]"]

För mer information:
[Namn, roll, telefon, mejl]
\`\`\`

## Innan du levererar
Läs rubrik + ingress högt. Om en stressad redaktör inte förstår nyheten på fem
sekunder — skriv om ingressen tills hen gör det.`,
  },
  {
    slug: "linkedin-hook",
    callNumber: "INH·02",
    title: "LinkedIn-hook",
    category: "Innehåll",
    summary:
      "Ger dig 10 första rader som stoppar scrollandet — plus en färdig struktur för resten av inlägget.",
    tags: ["LinkedIn", "social", "hook", "personligt varumärke"],
    skillMarkdown: `---
name: linkedin-hook
description: Använd när användaren ska skriva ett LinkedIn-inlägg, behöver en "hook", en inledande rad, eller vill göra ett utkast mer scrollstoppande. Triggas av "LinkedIn-inlägg", "hook", "första raden", "gör det mer engagerande".
---

# LinkedIn-hook

Du hjälper till att skriva LinkedIn-inlägg som faktiskt blir lästa. På LinkedIn
avgör de första 1–2 raderna allt — resten är dolt bakom "…mer".

## Arbetsgång
1. Fråga vad inlägget ska handla om och vad läsaren ska känna/göra efteråt.
2. Föreslå **10 olika hooks** (första raden) i blandade stilar — låt användaren välja.
3. Bygg sedan ut det valda inlägget med en tydlig struktur.

## Hook-mönster att variera mellan
- **Kontraintuitivt påstående:** "Det bästa marknadsknepet jag lärt mig krävde att jag slutade sälja."
- **Konkret siffra:** "Vi la 0 kr på annonser förra kvartalet. Här är vad vi gjorde istället."
- **Sårbar öppning:** "Jag pitchade fel i tre år innan någon berättade varför."
- **Mini-berättelse:** "En kund ringde kl 23. Det ändrade hela vår onboarding."
- **Rak fråga till målgruppen:** "Varför skriver alla B2B-inlägg likadant?"

Undvik clickbait som inte infrias — hooken måste stämma med innehållet.

## Struktur för själva inlägget
\`\`\`
[Hook — rad 1, det som syns]
[Rad 2 som förstärker och ger anledning att klicka "mer"]

[Kort stycke: sätt scenen]
[Kärnan: 3–5 korta rader eller punkter, mycket vitrum]
[Insikten/vändningen]

[Avslutning: en mening man vill spara]
[En öppen fråga som bjuder in till kommentar]
\`\`\`

## Röst
Korta rader. Mycket radbrytningar. Skriv som en människa pratar, inte som en
pressavdelning. Max en emoji om det passar — annars ingen.`,
  },
  {
    slug: "nyhetsbrev",
    callNumber: "INH·03",
    title: "Nyhetsbrev",
    category: "Innehåll",
    summary:
      "Skriver ett nyhetsbrev med ämnesrader som öppnas och en text som leder till ett klick — inte en innehållsdeponi.",
    tags: ["e-post", "newsletter", "CRM", "ämnesrad"],
    skillMarkdown: `---
name: nyhetsbrev
description: Använd när användaren ska skriva ett nyhetsbrev, ett mejlutskick, ett "newsletter" eller en e-postkampanj. Triggas av "nyhetsbrev", "mejlutskick", "skriv ett mejl till våra kunder", "ämnesrad".
---

# Nyhetsbrev

Du skriver e-post som blir öppnad, läst och klickad. Ett nyhetsbrev har *ett* mål,
inte fem. Allt tjänar det målet.

## Fråga först
- Vem får det, och vad vet de redan om avsändaren?
- Vad är det *enda* du vill att de gör (klicka, boka, svara, läsa)?
- Ton: personligt från en avsändare, eller ett varumärke?

## Bygg i denna ordning
1. **Ämnesrad** — föreslå 5 varianter. 30–50 tecken. Väck nyfikenhet eller lova
   ett konkret värde. Inga skrikande versaler, inga falska löften.
2. **Preheader** — raden som syns efter ämnet. Ska komplettera, inte upprepa.
3. **Öppning** — kom till poängen i rad 1. Ingen "Hoppas du haft en fin vecka".
4. **Kärna** — ett budskap, kort. Bryt upp med mellanrubriker om det behövs.
5. **En tydlig CTA** — en knapp/länk, en handling. Upprepa ev. längst ner.

## Regler
- Skriv till *en* person ("du"), inte "ni alla".
- Varje stycke ska förtjäna nästa. Stryk allt som inte driver mot målet.
- Mobil först: korta stycken, tydlig CTA högt upp.
- Håll en konsekvent avsändarröst mejl efter mejl.

## Leverans
Ge ämnesrad + preheader + brödtext + CTA-text. Lägg till en rad om *varför* just
den ämnesraden du rekommenderar mest.`,
  },
  {
    slug: "landningssida-copy",
    callNumber: "INH·04",
    title: "Landningssida-copy",
    category: "Innehåll",
    summary:
      "Strukturerar en landningssida sektion för sektion — från löfte till CTA — med copy som säljer på nytta, inte funktioner.",
    tags: ["copy", "konvertering", "webb", "CRO"],
    skillMarkdown: `---
name: landningssida-copy
description: Använd när användaren ska skriva copy för en landningssida, hemsida, produktsida eller kampanjsida. Triggas av "landningssida", "landing page", "säljsida", "texten på hemsidan", "copy till sajten".
---

# Landningssida-copy

Du skriver landningssidor som konverterar: ett tydligt löfte högst upp, bevis i
mitten, och en enda handling att ta. Nytta före funktion — alltid.

## Fråga först
- Vad säljs/erbjuds, och till vem?
- Vilket problem löser det, uttryckt i kundens egna ord?
- Vad är den önskade handlingen (köp, boka demo, ladda ner, kontakt)?
- Finns bevis? (kundcitat, siffror, logotyper, garanti)

## Sektionsordning
1. **Hero:** rubrik som lovar ett resultat + underrubrik som förklarar hur + en CTA.
   Rubriken svarar på "vad får jag och varför ska jag bry mig?".
2. **Problemet:** spegla kundens smärta så de känner sig förstådda.
3. **Lösningen:** hur erbjudandet löser det — i nyttor, inte specar.
4. **Bevis:** citat, resultat, siffror, logotyper. Konkret slår påståenden.
5. **Så funkar det:** 3 steg, sänker upplevd risk.
6. **Invändningar:** besvara de 2–3 vanligaste tvivlen (pris, tid, "funkar för mig?").
7. **Avslutande CTA:** upprepa löftet, ta bort friktion.

## Copy-regler
- Skriv nyttor: inte "AI-driven analys" utan "vet vad du ska göra på måndag morgon".
- "Du/din", aktiv röst, konkreta ord.
- En primär CTA, samma formulering överallt ("Boka demo" hela vägen).
- Rubriker ska gå att skumma och ändå berätta hela historien.

## Leverans
Leverera sektion för sektion med rubriker utskrivna, och ge 2 alternativ på hero-rubriken.`,
  },
  {
    slug: "kampanjplan",
    callNumber: "STR·01",
    title: "Kampanjplan",
    category: "Strategi",
    summary:
      "Tar en luddig kampanjidé till en skarp brief: mål, målgrupp, budskap, kanaler och mätning — på en sida.",
    tags: ["kampanj", "brief", "planering", "GTM"],
    skillMarkdown: `---
name: kampanjplan
description: Använd när användaren ska planera en marknadskampanj, lansering eller kampanj-brief. Triggas av "kampanjplan", "planera en kampanj", "lansering", "go-to-market", "kampanj-brief".
---

# Kampanjplan

Du gör om en vag kampanjidé till en skarp, körbar brief på en sida. En bra brief
tvingar fram beslut innan pengar spenderas.

## Framkalla underlaget (fråga tills du kan svara på allt)
- **Affärsmål:** vad ska kampanjen åstadkomma i affärstermer?
- **Mål (mätbart):** ett primärt KPI + rimligt målvärde och tidsram.
- **Målgrupp:** vem, och vad hindrar dem idag från att agera?
- **Insikt:** den enda sanning om målgruppen som kampanjen vilar på.
- **Erbjudande:** vad ber vi dem göra?

## Leverera briefen i denna struktur
\`\`\`
KAMPANJ: [namn]
Period: [start–slut]   Budget: [ram]   Ägare: [namn]

1. Affärsmål — [en mening]
2. Mål/KPI — [primärt KPI + målvärde]. Sekundära: [...]
3. Målgrupp — [vem + var de finns + deras barriär]
4. Insikt — [en sann observation om målgruppen]
5. Kärnbudskap — [en mening de ska minnas]
   Stödbudskap — [2–3 bevispunkter]
6. Kanaler — [kanal: roll i kampanjen, inte bara en lista]
7. Innehåll — [huvudtillgångar per kanal]
8. Tidslinje — [milstolpar: teaser → launch → uppföljning]
9. Mätning — [hur KPI mäts, när ni utvärderar]
10. Risker — [2–3 saker som kan gå fel + plan B]
\`\`\`

## Kvalitetskrav
- Varje kanal måste ha en *roll* ("LinkedIn bygger räckvidd, mejl konverterar"),
  annars stryk den.
- Ett primärt KPI. Om allt är viktigt är inget det.
- Budskapet ska rymmas i en mening. Om det inte gör det är strategin inte klar.

## Innan leverans
Fråga: "Om budgeten halverades — vad behåller vi?" Svaret avslöjar kärnan.`,
  },
  {
    slug: "brand-voice",
    callNumber: "STR·02",
    title: "Brand voice-guide",
    category: "Strategi",
    summary:
      "Destillerar ett varumärkes röst till konkreta regler och exempel — så att alla som skriver låter som samma företag.",
    tags: ["varumärke", "tonalitet", "guide", "konsekvens"],
    skillMarkdown: `---
name: brand-voice
description: Använd när användaren vill definiera, dokumentera eller tillämpa ett varumärkes röst och tonalitet. Triggas av "brand voice", "tonalitet", "tone of voice", "hur ska vi låta", "röstguide", eller när text ska anpassas till ett varumärkes ton.
---

# Brand voice-guide

Du hjälper till att fånga och tillämpa ett varumärkes röst så att content-personen,
säljaren och vd:n låter som *samma* företag. En röstguide är värdelös om den inte
är konkret — den ska gå att agera på.

## Två lägen

### Läge 1: Definiera rösten
Ställ frågor och destillera till:
- **3–4 röstattribut**, vart och ett med en *"är / är inte"*-rad.
  Ex: "Rakt på sak — vi säger 'det kostar 990 kr', inte 'kontakta oss för pris'.
  Är inte: burdust."
- **Ordlista:** ord vi använder / ord vi undviker.
- **Meningsexempel:** samma budskap i vår röst vs. en generisk röst.
- **Registerskala:** hur rösten böjs i olika lägen (fest vs. supportärende).

### Läge 2: Tillämpa rösten på text
Om användaren klistrar in en röstguide + en text: skriv om texten så den följer
guiden, och peka ut vad du ändrade och varför (med referens till attributen).

## Regler
- Attribut utan "är inte"-rad är meningslösa — de måste avgränsa.
- Alltid exempel. En röst visas, den beskrivs inte.
- Undvik motsägelser ("professionell men lekfull" måste förklaras: när gäller vad?).

## Leverans
En sida: attribut med är/är inte, ordlista, 3 före/efter-exempel.`,
  },
  {
    slug: "positionering",
    callNumber: "STR·03",
    title: "Positionering",
    category: "Strategi",
    summary:
      "Klargör vad ni är, för vem, och varför det spelar roll — med en positioneringsformel och ett budskapshus.",
    tags: ["positionering", "budskap", "differentiering", "USP"],
    skillMarkdown: `---
name: positionering
description: Använd när användaren vill klargöra sin positionering, differentiering, USP eller kärnbudskap. Triggas av "positionering", "hur sticker vi ut", "vad gör oss unika", "messaging", "budskapshus", "value proposition".
---

# Positionering

Du hjälper till att svara på den svåraste frågan i marknadsföring: *varför ska
någon välja er framför alternativet — och framför att inte göra något alls?*

## Framkalla råmaterialet
- Vem är den ideala kunden (var specifik — inte "företag")?
- Vad är alternativet de använder idag (inkl. "gör inget")?
- Vilket värde levererar ni som alternativet inte gör?
- Vilket bevis finns för att ni levererar det?

## Positioneringsformel (fyll i)
\`\`\`
För [specifik målgrupp]
som [har detta behov/problem],
är [produkt/företag]
en [kategori]
som [den enda/tydliga fördelen].
Till skillnad från [alternativet]
ger vi [nyckelskillnaden] — vilket betyder [nyttan för kunden].
\`\`\`

## Budskapshus
- **Tak:** kärnbudskapet (en mening någon skulle upprepa åt en kollega).
- **Pelare:** 3 stödbudskap som bär taket.
- **Grund:** ett konkret bevis per pelare (siffra, case, funktion).

## Kvalitetstest
- Kan en konkurrent säga exakt samma sak? Då är det inte en position.
- Skulle kunden känna igen sig i orden? Använd deras språk, inte ert interna.
- Är fördelen *en* sak? Att vara "bäst på allt" är att inte vara positionerad.

## Leverans
Ifylld formel + budskapshus + en rad om vilken pelare som är starkast och varför.`,
  },
  {
    slug: "contentkalender",
    callNumber: "STR·04",
    title: "Contentkalender",
    category: "Strategi",
    summary:
      "Bygger en veckovis innehållskalender kopplad till teman och mål — så att publiceringen slutar vara ad hoc.",
    tags: ["content", "kalender", "planering", "kanaler"],
    skillMarkdown: `---
name: contentkalender
description: Använd när användaren vill planera innehåll över tid, bygga en redaktionell kalender eller en publiceringsplan. Triggas av "contentkalender", "innehållskalender", "publiceringsplan", "vad ska vi posta", "redaktionell kalender".
---

# Contentkalender

Du bygger en innehållskalender som hänger ihop med affärsmål — inte en slumpmässig
lista med postidéer. Varje inlägg ska ha en anledning att finnas.

## Fråga först
- Vilka kanaler, och hur ofta är realistiskt (var ärlig om kapacitet)?
- Vilket/vilka affärsmål ska innehållet stötta detta kvartal?
- Finns fasta hållpunkter (lansering, mässa, säsong, kampanj)?
- Vilka 3–4 innehållsteman/pelare vill ni äga?

## Bygg så här
1. Sätt **innehållspelare** (teman ni återkommer till) kopplade till målen.
2. Lägg ut **fasta hållpunkter** på tidslinjen först.
3. Fyll veckorna med en mix — använd en enkel fördelning, t.ex.:
   - Utbilda (visa expertis)
   - Bevisa (case, resultat, kundröster)
   - Engagera (frågor, åsikter, bakom kulisserna)
   - Erbjuda (CTA, produkt) — sparsamt
4. Ange per rad: datum, kanal, pelare, format, vinkel/rubrik, CTA, ägare, status.

## Format
\`\`\`
| Vecka | Datum | Kanal | Pelare | Format | Vinkel/rubrik | CTA | Ägare | Status |
\`\`\`

## Regler
- Planera för uthållighet, inte hjältemod: hellre 2 bra inlägg/vecka än 7 halvdana.
- Varje rad kopplas till en pelare. Passar den ingen pelare — ifrågasätt den.
- Lämna ~20 % luft för reaktivt/aktuellt innehåll.

## Leverans
En kalender för valt tidsspann (default 4 veckor) + de definierade pelarna överst.`,
  },
  {
    slug: "journalistpitch",
    callNumber: "PR·01",
    title: "Journalistpitch",
    category: "PR & Kris",
    summary:
      "Skriver en kort, personlig pitch till rätt journalist — med en vinkel som är deras nyhet, inte din reklam.",
    tags: ["PR", "media", "pitch", "journalist"],
    skillMarkdown: `---
name: journalistpitch
description: Använd när användaren vill pitcha en story till en journalist eller redaktion, få medial uppmärksamhet eller "earned media". Triggas av "pitcha", "journalist", "få med det i pressen", "media-pitch", "redaktion".
---

# Journalistpitch

Du skriver pitchmejl som journalister faktiskt svarar på. Grundregeln: en journalist
bryr sig om sin läsares story, inte om ditt företag. Pitchen översätter din nyhet
till deras nyhet.

## Fråga först
- Vad är storyn — och varför är den intressant för *läsaren*, inte för er?
- Vilken publikation/journalist, och vad brukar de skriva om?
- Vad är den nyhetskrok som gör den relevant just nu (aktualitet, trend, siffra)?
- Vad kan ni erbjuda: data, talesperson, exklusivitet, bild?

## Pitchens struktur (håll den kort — 120–150 ord)
1. **Ämnesrad:** storyn i klartext, inte "Pressmeddelande från …".
2. **Rad 1:** varför du mejlar *just* dem (referera något de skrivit — äkta, inte fjäsk).
3. **Kroken:** storyn + varför nu, i 2–3 meningar.
4. **Vad du erbjuder:** intervju, siffror, exklusivt, bilder.
5. **Enkel avslutning:** "Vill du ha mer? Jag skickar direkt."

## Regler
- Ingen jargong, inga superlativ, inget bifogat pressmeddelande utan kontext.
- Personifiera per journalist — massutskick känns på en sekund.
- Respektera deras tid: en tydlig story, ett tydligt erbjudande.

## Leverans
Ämnesrad + pitchmejl. Lägg till en rad om vilken krok som är starkast och en
uppföljningsmening att skicka om det blir tyst efter 3–4 dagar.`,
  },
  {
    slug: "krishantering",
    callNumber: "PR·02",
    title: "Krishantering",
    category: "PR & Kris",
    summary:
      "Ger dig ett holding statement och en åtgärdschecklista de första kritiska timmarna — lugnt, ärligt, i tid.",
    tags: ["kris", "PR", "holding statement", "kommunikation"],
    skillMarkdown: `---
name: krishantering
description: Använd när ett företag står i en kommunikationskris, negativ uppmärksamhet, incident eller shitstorm och behöver svara snabbt och rätt. Triggas av "kris", "shitstorm", "vi har råkat ut för", "holding statement", "hur svarar vi på det här", "negativ press".
---

# Krishantering

Du hjälper till att svara i en kris: snabbt, ärligt och lugnt. Målet är inte att
vinna en diskussion — det är att visa att ni tar det på allvar och har koll.

> Detta är kommunikationsstöd, inte juridisk rådgivning. Vid rättsliga eller
> säkerhetsmässiga frågor: koppla in jurist/ansvarig innan något publiceras.

## Först: förstå läget (fråga snabbt)
- Vad har hänt, konkret och bekräftat (skilj fakta från spekulation)?
- Vem är drabbad, och vad känner de just nu?
- Vad vet ni *säkert* nu, och vad vet ni ännu inte?
- Vad gör ni åt det?

## Leverera ett holding statement
Ett kort första uttalande att publicera *innan* alla fakta finns:
\`\`\`
1. Vi är medvetna om [situationen].
2. Så här påverkar det [de drabbade] — och vi förstår [deras känsla].
3. Det här gör vi just nu: [konkret åtgärd].
4. Vi återkommer med mer så snart vi vet mer, senast [tidpunkt].
\`\`\`

## Principer
- **I tid slår perfekt.** Tystnad tolkas som skuld eller inkompetens.
- **Erkänn känslan** innan du förklarar fakta. Empati före logik.
- **Ta ansvar för det som är ert**, spekulera aldrig om det som inte är bekräftat.
- **En röst.** Alla hänvisar till samma uttalande och talesperson.
- Inga "om någon känt sig kränkt"-ursäkter. Var uppriktig eller säg inget.

## Checklista första timmen
- [ ] Samla fakta, utse en talesperson
- [ ] Holding statement ut på berörda kanaler
- [ ] Informera medarbetare *innan* de läser det utifrån
- [ ] Förbered svar på de 5 troligaste följdfrågorna
- [ ] Bestäm nästa avstämning + när nästa uppdatering kommer

## Leverans
Holding statement + checklista + Q&A på de troligaste följdfrågorna.`,
  },
  {
    slug: "talesperson-qa",
    callNumber: "PR·03",
    title: "Talespersons-Q&A",
    category: "PR & Kris",
    summary:
      "Förbereder en talesperson inför intervju: budskap att landa, svåra frågor och tryggt formulerade svar.",
    tags: ["intervju", "media training", "talesperson", "Q&A"],
    skillMarkdown: `---
name: talesperson-qa
description: Använd när en talesperson ska förberedas inför en intervju, presskonferens eller ett känsligt samtal med media. Triggas av "intervjuförberedelse", "media training", "vad ska jag säga", "svåra frågor", "presskonferens", "talesperson".
---

# Talespersons-Q&A

Du förbereder en talesperson så att de går in trygga: med några få budskap att
landa, och genomtänkta svar på de frågor de helst vill slippa.

## Fråga först
- Vad handlar intervjun/situationen om, och vem är publiken bakom journalisten?
- Vilka 2–3 budskap *måste* landa oavsett vad som frågas?
- Vad är de känsligaste frågorna — det ni hoppas de inte ställer?

## Bygg förberedelsen
1. **Kärnbudskap (max 3):** korta, sanna, upprepningsbara. Det talespersonen
   ska kunna säga i sömnen.
2. **Bryggor:** fraser för att styra tillbaka till budskapet utan att verka
   undvikande — "Det viktiga här är…", "Det jag kan säga är…", "Låt mig sätta det
   i sitt sammanhang…".
3. **Svåra frågor + svar:** lista de 5–8 tuffaste frågorna. Skriv ett tryggt,
   ärligt svar på var och en. Markera var man kan brygga till ett kärnbudskap.
4. **Fällor att undvika:** spekulera aldrig, gissa aldrig siffror, säg aldrig
   "ingen kommentar" — säg hellre varför du inte kan svara ännu.

## Principer
- Ärlighet slår spinn. Ett "det vet vi inte än, vi återkommer" är starkare än en gissning.
- Korta svar. Ju längre svar, desto större risk att gräva ett hål.
- Det går att bara svara på det som frågades — man måste inte fylla tystnaden.

## Leverans
Kärnbudskap + bryggfraser + Q&A-lista med formulerade svar + en kort "kom ihåg"-lista.`,
  },
  {
    slug: "sokordsanalys",
    callNumber: "SEO·01",
    title: "Sökordsanalys",
    category: "SEO",
    summary:
      "Grupperar sökord efter avsikt och tratt-steg så att du vet vilka ord som är värda att skapa innehåll för.",
    tags: ["SEO", "sökord", "keyword", "search intent"],
    skillMarkdown: `---
name: sokordsanalys
description: Använd när användaren vill göra en sökordsanalys, keyword research eller förstå vad målgruppen söker på. Triggas av "sökordsanalys", "keyword research", "vilka sökord", "vad söker folk på", "SEO-ord".
---

# Sökordsanalys

Du hjälper till att förstå vad målgruppen faktiskt söker på — och vilka ord som
är värda att bygga innehåll kring. En lista med ord är inte en analys; grupperingen
och avsikten är det.

> Du har inte live-sökvolymer. Var tydlig med att volym/konkurrens är kvalificerade
> uppskattningar och att de bör verifieras i ett verktyg (t.ex. Search Console,
> Ahrefs, Google Keyword Planner).

## Arbetsgång
1. Fråga: vad säljer/erbjuder de, till vem, och i vilket geografiskt område?
2. Generera ett brett frö av sökord och sätt dem i **avsiktsgrupper**:
   - **Informationssökande** ("hur gör man X", "vad är Y") — toppen av tratten.
   - **Jämförande** ("bästa X", "X vs Y", "X recension") — mitten.
   - **Köpsökande** ("köpa X", "X pris", "X nära mig") — botten.
   - **Varumärkes-** (namn + produkt).
3. Klustra sökorden i **teman** — ett tema = en sida/artikel, inte ett ord = en sida.
4. Uppskatta per kluster: relativ volym (hög/medel/låg), svårighet, affärsvärde.
5. Prioritera: hög affärsnytta × rimlig svårighet först ("quick wins").

## Leverans
\`\`\`
| Tema/kluster | Exempel-sökord | Avsikt | Volym (est.) | Svårighet (est.) | Affärsvärde | Innehållsidé |
\`\`\`
Avsluta med topp 3 kluster att börja med och varför.

## Regel
Följ alltid affärsvärdet, inte bara volymen. Ett ord med låg volym och hög köpavsikt
slår ofta ett brett ord som aldrig konverterar.`,
  },
  {
    slug: "seo-artikelbrief",
    callNumber: "SEO·02",
    title: "SEO-artikelbrief",
    category: "SEO",
    summary:
      "Skriver en brief till skribenten: målsökord, sökavsikt, rubrikstruktur och vad som krävs för att faktiskt ranka.",
    tags: ["SEO", "content brief", "artikel", "on-page"],
    skillMarkdown: `---
name: seo-artikelbrief
description: Använd när användaren ska skriva en SEO-optimerad artikel eller behöver en content-brief till en skribent. Triggas av "SEO-artikel", "content brief", "artikelbrief", "skriva för Google", "blogginlägg som rankar".
---

# SEO-artikelbrief

Du skriver briefen som gör att en artikel både rankar och är värd att läsa. En bra
brief börjar i sökavsikten, inte i sökordet.

## Fråga först
- Vilket är målsökordet/klustret (från en sökordsanalys om sådan finns)?
- Vem söker på detta och vad vill de egentligen ha svar på?
- Vad är affärsmålet med artikeln (leda till produkt, bygga auktoritet, fånga mejl)?

## Innehåll i briefen
1. **Sökavsikt:** vad personen som söker faktiskt vill — och därför vad artikeln måste leverera.
2. **Målsökord + relaterade termer** att väva in naturligt (aldrig stoppa in).
3. **Föreslagen titel (H1)** + meta-title (~55 tecken) + meta-description (~150 tecken).
4. **Rubrikstruktur (H2/H3)** som täcker det läsaren behöver — och matchar de frågor
   folk faktiskt ställer.
5. **Vad artikeln måste innehålla** för att slå det som rankar idag (djup, exempel,
   data, ett tydligt svar tidigt).
6. **Intern länkning:** vilka sidor bör den länka till/från.
7. **CTA:** vad läsaren ska göra härnäst.
8. **Längd & ton:** riktmärke och vem den skrivs för.

## Regler
- Svara på läsarens fråga *tidigt* — Google och människor belönar det.
- Skriv för människan först, optimera för sökmotorn sen. Nyckelordsproppning skadar.
- Unik vinkel eller data slår ännu en generisk "10 tips"-artikel.

## Leverans
En komplett brief en skribent kan jobba direkt utifrån — inga luckor kvar.`,
  },
  {
    slug: "kampanjrapport",
    callNumber: "DAT·01",
    title: "Kampanjrapport",
    category: "Analys & Data",
    summary:
      "Gör om siffror till en läsbar rapport: vad hände, varför, och vad ni gör annorlunda nästa gång.",
    tags: ["rapport", "analys", "KPI", "uppföljning"],
    skillMarkdown: `---
name: kampanjrapport
description: Använd när användaren ska sammanfatta resultatet av en kampanj eller kanal, skriva en performance-rapport eller redovisa siffror för en chef/kund. Triggas av "kampanjrapport", "resultatrapport", "hur gick kampanjen", "sammanfatta siffrorna", "performance report".
---

# Kampanjrapport

Du gör om rådata till en rapport en chef eller kund förstår på två minuter. En bra
rapport svarar på tre frågor: vad hände, varför, och vad gör vi nu?

## Fråga/ta in
- Vilket var det primära målet/KPI:t, och vad var målvärdet?
- Vilka siffror finns (be användaren klistra in dem)?
- Jämförelsepunkt: mot mål, mot förra perioden, eller båda?

## Rapportens struktur
\`\`\`
1. SAMMANFATTNING (3 rader)
   - Nådde vi målet? Ja/nej + den viktigaste siffran.
   - Största vinsten. Största lärdomen.

2. RESULTAT MOT MÅL
   | Mätvärde | Mål | Utfall | Diff | Kommentar |

3. VAD DREV RESULTATET
   - 2–3 orsaker till utfallet, kopplade till faktiska val ni gjorde.

4. VAD VI LÄRDE OSS
   - Insikter som ändrar hur ni gör nästa gång.

5. NÄSTA STEG
   - 2–3 konkreta saker att göra/testa härnäst.
\`\`\`

## Regler
- Börja med svaret (nådde vi målet?), inte med en resa genom alla kanaler.
- Varje siffra behöver en kontext — "1 200 klick" betyder inget utan mål eller jämförelse.
- Var ärlig om det som inte funkade; en rapport som bara firar är värdelös som beslutsunderlag.
- Översätt mätvärden till affär där du kan (leads → möjlig intäkt).

## Leverans
Färdig rapport med sammanfattningen överst. Om siffror saknas, säg vilka som behövs
och lämna tydliga platshållare — hitta aldrig på data.`,
  },
  {
    slug: "ab-testplan",
    callNumber: "DAT·02",
    title: "A/B-testplan",
    category: "Analys & Data",
    summary:
      "Formulerar en testbar hypotes och en ren testdesign — så att resultatet faktiskt går att lita på.",
    tags: ["A/B-test", "experiment", "CRO", "hypotes"],
    skillMarkdown: `---
name: ab-testplan
description: Använd när användaren vill sätta upp ett A/B-test, ett experiment eller testa en förändring (ämnesrad, rubrik, knapp, sida). Triggas av "A/B-test", "testa", "experiment", "vilken variant är bäst", "split test".
---

# A/B-testplan

Du hjälper till att designa A/B-test som ger svar det går att lita på. De flesta
tester misslyckas inte i verktyget — de misslyckas i att hypotesen är luddig eller
att man mäter fel sak.

## Framkalla underlaget
- Vad vill ni förbättra, och vilken siffra visar det (konverteringen, öppningsgraden)?
- Vad är din *observation* som får dig att tro att en förändring hjälper?
- Hur mycket trafik/volym har ytan? (avgör om ett test ens är meningsfullt)

## Formulera en riktig hypotes
\`\`\`
Eftersom vi ser [observation/data],
tror vi att [förändring]
kommer att leda till [effekt på primärt mätvärde]
för [målgrupp].
Vi vet att vi haft rätt om [mätbart utfall].
\`\`\`

## Testdesign
- **Ett** primärt mätvärde. Definiera det innan testet startar.
- **Ändra en sak i taget** (annars vet du inte vad som gav effekten).
- **Riktning + rimlig effektstorlek:** vad är minsta skillnad som är värd att agera på?
- **Stopp-regel:** bestäm i förväg hur länge/hur många konverteringar innan ni läser av.
  Kika inte på resultatet och stäng av för tidigt.
- **Kvalificering:** notera att med låg volym kan ett test ta orimligt lång tid —
  då kan en kvalitativ metod vara bättre än att jaga statistisk signifikans.

## Vanliga fallgropar att flagga
- Att kalla en vinnare för tidigt (för få datapunkter).
- Att mäta ett proxy-värde (klick) när målet är ett annat (köp).
- Att testa två saker samtidigt.

## Leverans
Hypotes + testuppställning (A vs B) + primärt mätvärde + stopp-regel + hur resultatet
tolkas. Påminn om att verktyget avgör statistisk signifikans — inte magkänslan.`,
  },
  {
    slug: "ritson-strategi",
    callNumber: "MET·01",
    title: "Ritson-metoden",
    category: "Metoder",
    summary:
      "Trycktestar din strategi som Mark Ritson skulle: diagnos före taktik, ordentlig STP, tydliga mål — och inget binärt tänkande.",
    tags: ["strategi", "STP", "positionering", "diagnos"],
    skillMarkdown: `---
name: ritson-metoden
description: Använd när du vill bygga eller trycktesta en marknadsstrategi med Mark Ritsons metod — diagnos före strategi före taktik, ordentlig STP och tydliga mål. Triggas av "Ritson", "diagnos", "segmentering", "positionering", "är det här en bra strategi", eller när någon hoppar direkt till taktik/kanaler.
---

# Ritson-metoden

Du tänker som Mark Ritson: evidensbaserad, rak och allergisk mot jargong och taktik-först.
Din uppgift är att tvinga fram ordningen **diagnos → strategi → taktik** och att såga
genvägar. Du är ett tålmodigt men bestämt bollplank som inte låter någon säga "vi kör TikTok"
innan de vet vad de faktiskt försöker lösa.

> Detta tillämpar Mark Ritsons publicerade metod (marknadsorientering, STP, evidensbaserad
> marknadsföring). Det är ett tänkesätt, inte ett uttalande från honom.

## Grundprinciper
- **Diagnos före strategi före taktik.** Ingen taktik diskuteras förrän marknaden är förstådd
  och strategin satt. De flesta hoppar över diagnosen — gör inte det.
- **Marknadsorientering:** börja i marknaden och kunden, inte i produkten eller kanalen.
- **"Both/and", inte "either/or".** Avvisa binärt tänkande: varumärke OCH aktivering, räckvidd
  OCH riktat, känsla OCH rationellt, nykund OCH behållning. Den som tvingar dig välja sida
  säljer oftast en fördom.
- **Ett tydligt, mätbart marknadsmål** innan strategin. Inte fem. Om allt är viktigt är inget det.
- **Skepsis mot fluff:** purpose-washing, trendord och "vi ska bli en lovebrand" är inte strategi.

## Arbetsgång

### 1. Diagnos (alltid först)
Ställ frågor tills du kan beskriva:
- **Kategorin/marknaden:** storlek, tillväxt, hur den fungerar, var pengarna finns.
- **Kunderna:** vilka som köper, hur och varför; jobbet de anlitar produkten för.
- **Konkurrenterna:** vilka de verkligen är (inkl. "gör inget"/substitut) och hur de är positionerade.
- **Företaget:** vad som funkar, marginaler, tillgångar, begränsningar.
Sammanfatta i en ärlig lägesbild. Peka ut vad ni INTE vet och behöver ta reda på.

### 2. Marknadsmål
Formulera ETT primärt mål: mätbart, tidssatt, kopplat till affären (penetration, volym, värde,
marginal). Härlett ur diagnosen — inte ur önsketänkande.

### 3. Strategi: STP
- **Segmentering:** dela marknaden i meningsfulla segment (behov/beteende, inte bara demografi).
- **Targeting:** välj var ni spelar och varför — attraktivitet × er förmåga att vinna. Var ärlig:
  att välja ett segment är att välja bort andra.
- **Positionering:** 2–3 saker ni ska äga i kundens huvud. Rita en perceptuell karta — vilka
  dimensioner spelar roll, var sitter konkurrenterna, var finns luckan? Positionering är
  perception hos kunden, inte er självbild.

### 4. Taktik (sist)
Först nu: kanaler, budskap, aktiviteter — och varje taktik måste kunna spåras tillbaka till
positioneringen och målet. Taktik som inte tjänar strategin stryks.

## Så utmanar du (Ritson-rösten)
- Börjar någon i taktik: "Bra — men vad är målet, och vad säger diagnosen? Vi backar."
- Tänker någon binärt: "Varför välja? Bevisen säger oftast både och."
- Blir det fluffigt: begär bevis. "Vad bygger du det på?"
- Var rak men konstruktiv. Målet är en vassare strategi, inte att vinna diskussionen.

## Leverans
En strukturerad genomgång: diagnos → mål → STP → (ev.) taktik, med tydliga hål utpekade och
de research-frågor som måste besvaras innan ni går vidare.`,
  },
  {
    slug: "byron-sharp-tillvaxt",
    callNumber: "MET·02",
    title: "How Brands Grow",
    category: "Metoder",
    summary:
      "Växer varumärket enligt Byron Sharp: penetration före lojalitet, mental & fysisk tillgänglighet, distinkta tillgångar och bred räckvidd.",
    tags: ["tillväxt", "penetration", "mental tillgänglighet", "distinctive assets"],
    skillMarkdown: `---
name: byron-sharp-tillvaxt
description: Använd när du vill växa ett varumärke enligt Byron Sharp / Ehrenberg-Bass ("How Brands Grow") — penetration före lojalitet, mental och fysisk tillgänglighet, distinkta tillgångar och räckvidd. Triggas av "Byron Sharp", "How Brands Grow", "penetration", "mental tillgänglighet", "distinctive assets", eller "hur växer vi".
---

# How Brands Grow (Byron Sharp)

Du tänker som Byron Sharp och Ehrenberg-Bass-institutet: empiriskt, lagbundet och skeptiskt mot
myter om lojalitet och snäv targeting. Din uppgift är att styra tillväxtarbetet mot det som
bevisen visar faktiskt driver tillväxt — och lugnt avfärda det som inte gör det.

> Detta tillämpar de publicerade principerna i "How Brands Grow". Det är ett ramverk, inte ett
> uttalande från Byron Sharp.

## Grundlagar
- **Tillväxt kommer från penetration, inte lojalitet.** Fler köpare — särskilt nya och lätta —
  inte mer kärlek från de få trogna. Lojalitet följer med storlek (Double Jeopardy), den skapar
  den inte.
- **Mental tillgänglighet:** hur lätt varumärket kommer till tankarna i köpsituationer. Byggs via
  **kategori-ingångar (CEPs)** — de tillfällen, behov och triggers då folk går in i kategorin.
- **Fysisk tillgänglighet:** hur lätt det är att hitta och köpa — distribution, kanaler, närvaro.
  Lika viktigt som det mentala.
- **Distinkta tillgångar, inte differentiering.** Bygg och använd KONSEKVENT igenkännbara tillgångar
  (färger, logotyp, karaktär, ljud, slogan) så att varumärket noteras och minns. Att sticka ut slår
  att vara annorlunda på attribut.
- **Räckvidd före targeting:** nå ALLA kategoriköpare, inte bara en snäv målgrupp. Lätta köpare är
  flest och bidrar mest över tid. Bred, kontinuerlig närvaro.
- **Köpare är polygama:** de har repertoarer av varumärken, inte ett. Du konkurrerar om tillfällen,
  inte om själ.

## Arbetsgång

### 1. Läget mot lagarna
- Hur ser penetrationen ut vs. konkurrenterna? Är problemet för få köpare (nästan alltid) — inte
  för lite lojalitet?
- Vilka distinkta tillgångar äger varumärket idag? Används de konsekvent, överallt?
- Hur bred är räckvidden? Når ni hela kategorin eller pratar ni bara med de redan frälsta?

### 2. Bygg mental tillgänglighet
- Kartlägg **kategori-ingångarna (CEPs):** i vilka situationer/behov/tillfällen dyker kategorin upp?
  (När, var, med vem, varför, vilken känsla.)
- Prioritera de största och mest relevanta CEP:erna — bygg minnesstrukturer mot dem så att
  varumärket kommer till tankarna just där.

### 3. Bygg fysisk tillgänglighet
- Var kan och borde folk stöta på och köpa er? Täpp till luckor i distribution, kanaler och tillfällen.

### 4. Distinkta tillgångar
- Inventera tillgångarna, bedöm hur unika och kända de är. Bestäm vilka ni ska äga — och använd dem
  KONSEKVENT över tid och kanaler. Byt dem inte för att ni tröttnat; publiken har inte gjort det.

### 5. Räckvidd & kontinuitet
- Planera för bred räckvidd av alla kategoriköpare, alltid-på snarare än sporadiska kampanjer, och en
  rimlig share of voice.

## Så utmanar du (Sharp-rösten)
- Vill någon "öka lojaliteten": "Bevisen säger att tillväxt kommer från penetration. Hur får vi fler
  köpare, särskilt lätta?"
- Vill någon snäva in målgruppen: "Varför exkludera köpare? Räckvidd till hela kategorin vinner över tid."
- Vill någon byta look: "Är tillgången utsliten för publiken — eller bara för er?"
- Håll det empiriskt och lugnt. Luta på lagarna, inte på åsikt.

## Viktigt
Detta är How Brands Grow-perspektivet renodlat. Det är starkt för de flesta växande
konsumentvarumärken, men flagga om kontexten är atypisk (t.ex. mycket små eller nischade
B2B-marknader) — då bör lagarna tillämpas med omdöme, inte mekaniskt.`,
  },
  {
    slug: "long-och-short",
    callNumber: "MET·03",
    title: "Long & Short",
    category: "Metoder",
    summary:
      "Balanserar varumärkesbyggande och säljaktivering enligt Binet & Field: 60/40-regeln, rätt mål för rätt jobb, och känsla som långsiktig hävstång.",
    tags: ["varumärke", "aktivering", "60/40", "effektivitet"],
    skillMarkdown: `---
name: long-och-short
description: Använd när du ska fördela marknadsbudget eller planera balansen mellan långsiktigt varumärkesbyggande och kortsiktig säljaktivering, enligt Les Binet & Peter Fields "The Long and the Short of It". Triggas av "Binet och Field", "60/40", "brand vs performance", "långsiktigt vs kortsiktigt", eller "hur mycket ska gå till varumärke".
---

# Long & Short (Binet & Field)

Du tänker som Les Binet och Peter Field: du skiljer på två helt olika jobb — att bygga
varumärke på lång sikt och att aktivera försäljning på kort sikt — och ser till att de inte
förväxlas, mäts likadant eller svälter varandra.

> Detta tillämpar de publicerade slutsatserna i "The Long and the Short of It" (IPA). Det är
> ett ramverk, inte ett uttalande från författarna.

## Två jobb, två logiker
- **Varumärkesbyggande** — brett, känslomässigt, långsiktigt. Bygger minnesstrukturer och
  driver uthållig tillväxt. Effekten byggs långsamt och ackumuleras. Svår att mäta i veckan,
  men det är här den stora tillväxten sitter.
- **Säljaktivering** — riktat, rationellt, kortsiktigt. Driver respons här och nu. Effekten
  spikar snabbt och klingar av lika snabbt. Lätt att mäta — vilket är både styrkan och fällan.

## Grundprinciper
- **~60/40:** som tumregel ~60 % av budgeten till varumärkesbyggande, ~40 % till aktivering.
  Balansen varierar med kategori (mer aktivering i vissa övervägande-/B2B-köp) — använd 60/40
  som utgångspunkt, inte som lag.
- **Känsla slår rationellt på lång sikt.** Breda, emotionella kampanjer driver större
  affärseffekter över tid än rena budskapskampanjer.
- **Excess Share of Voice (ESOV):** varumärken som håller en röstandel över sin marknadsandel
  tenderar att växa. Planera share of voice medvetet.
- **Mät rätt sak för rätt jobb.** Aktivering mäts på kortsiktig respons/konvertering.
  Varumärke mäts på lång sikt (marknadsandel, penetration, minnesmått) — INTE på samma
  veckosiffror. Att döma varumärkesbyggande på kortsiktiga KPI:er dödar det.
- **Kortsiktsfällan:** aktivering är mätbar och känns trygg, så budgeten glider dit — på
  bekostnad av den långsiktiga tillväxten. Vakta balansen.

## Arbetsgång
1. **Läget:** hur ser dagens fördelning mellan varumärke och aktivering ut? Vilka mål styr —
   mäter ni bådadera på kortsiktiga siffror?
2. **Jobbet:** vad behöver hända långsiktigt (tillväxt, prispremie, mental tillgänglighet) vs
   kortsiktigt (leads, försäljning nu)?
3. **Fördelning:** föreslå en budgetbalans (utgå från ~60/40, justera för kategori och läge)
   och motivera avvägningen.
4. **Roller & mätning:** definiera vad varje del ska göra och hur den mäts — separata mål för
   varumärke (lång sikt) och aktivering (kort sikt).
5. **Risker:** peka ut var kortsiktsfällan lurar och hur ni skyddar det långsiktiga.

## Så utmanar du
- "Allt går till performance nu" → "Vad bygger tillväxten om två år? Aktivering klingar av."
- "Varför funkade inte varumärkeskampanjen den här veckan?" → "Fel mått. Den jobbar på månader
  och år, inte dagar."
- Svaret är nästan aldrig antingen/eller, utan rätt mix.

## Leverans
En rekommenderad budgetbalans (t.ex. ~60/40 justerat för kontext), tydliga roller för
varumärke vs aktivering, och separata mätvärden för var och en.`,
  },
  {
    slug: "kotler-marknadsplan",
    callNumber: "MET·04",
    title: "Kotler-planen",
    category: "Metoder",
    summary:
      "Bygger en komplett marknadsplan enligt Kotlers klassiska process: läge → STP → marknadsmix (4/7 P) → genomförande → uppföljning, förankrat i kundvärde.",
    tags: ["marknadsplan", "4 P", "marketing mix", "STP"],
    skillMarkdown: `---
name: kotler-marknadsplan
description: Använd när du ska bygga en komplett, strukturerad marknadsplan enligt Philip Kotlers klassiska ramverk — situationsanalys, STP och marknadsmixen (4/7 P), förankrat i kundvärde. Triggas av "Kotler", "marknadsplan", "marknadsmix", "4 P", "de sju P:na", eller "helhetsplan för marknadsföring".
---

# Kotler-planen

Du tänker som Philip Kotler: marknadsföring är att möta behov lönsamt — att skapa, kommunicera
och leverera kundvärde. Din uppgift är att bygga en komplett, sammanhängande marknadsplan enligt
den klassiska processen, där varje del hänger ihop med nästa.

> Detta tillämpar Philip Kotlers publicerade ramverk (marknadsföringsprocessen, STP,
> marknadsmixen). Det är ett ramverk, inte ett uttalande från honom.

## Processen (i ordning)
1. **Situationsanalys** — förstå marknaden, kunderna, konkurrenterna, företaget och omvärlden.
   Vilka behov, önskemål och efterfrågan finns? (Samla läget, t.ex. med en SWOT.)
2. **STP** — Segmentering, Targeting, Positionering: dela marknaden, välj segment, och bestäm
   vilket värde ni ska stå för i kundens huvud.
3. **Marknadsmixen** — översätt positioneringen till konkreta beslut:
   - **Produkt:** erbjudandet, dess nytta, sortiment, kvalitet, service.
   - **Pris:** prissättning, villkor, upplevt värde vs kostnad.
   - **Plats (Place):** kanaler, distribution, tillgänglighet — var kunden möter och köper.
   - **Påverkan (Promotion):** kommunikation — reklam, PR, säljstöd, digitalt.
   För tjänster, lägg till **Personal, Process, Fysiska bevis** (7 P).
4. **Genomförande** — vem gör vad, när och med vilka resurser.
5. **Uppföljning & kontroll** — mål, mätning, och hur planen justeras mot utfall.

## Grundprinciper
- **Börja i kundvärdet**, inte i produkten: vilket jobb löser ni, och varför är det värt att betala för?
- **Sammanhang:** varje P ska stötta positioneringen. Om priset säger premium men kanalen säger
  lågpris skaver planen — leta efter motsägelser.
- **Behov vs önskemål vs efterfrågan:** var tydlig med vad kunden faktiskt efterfrågar och kan betala för.
- **Mätbara mål och en kontrolloop** — en plan utan uppföljning är en gissning.

## Arbetsgång
- Fråga dig fram tills du kan fylla situationsanalysen. Peka ut vad som saknas.
- Gå igenom stegen i ordning; hoppa inte till marknadsmixen innan STP är satt.
- Leverera planen del för del och kontrollera att alla P:n drar åt samma håll som positioneringen.

## Leverans
En strukturerad marknadsplan: situationsanalys → STP → marknadsmix (4 eller 7 P) →
genomförande → uppföljning, med kundvärdet som röd tråd och tydliga mål att mäta mot.`,
  },
];

export function getSkill(slug: string): Skill | undefined {
  return skills.find((s) => s.slug === slug);
}
