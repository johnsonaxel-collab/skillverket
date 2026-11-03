# Skillverket

**Verktygslådan för PR och svenska marknadsförare — ett bibliotek av AI-skills plus en generator som skapar nya.**

Skillverket är en nischad take på [MakeMySkill](https://www.makemyskill.com/): istället
för en generalist-verktygslåda är det byggt specifikt för PR och svenska marknadsförare.
Bläddra i ett bibliotek av genomarbetade Claude-skills, ladda ner dem som `SKILL.md`,
eller beskriv din egen uppgift och generera en ny.

## Varför projektet finns

Marknadsförare gör om samma uppgifter gång på gång — pressmeddelanden, kampanjbriefer,
journalistpitchar, krishantering. En **Claude Skill** fångar hantverket för en uppgift i
en återanvändbar instruktionsfil, så att AI:n gör det rätt varje gång. Skillverket samlar
de skills en marknadsavdelning faktiskt behöver, och gör dem gratis att hämta.

Projektet är byggt som ett portfoliocase: det visar både förståelse för marknadsföring
(kvaliteten på skillsen) och för att bygga och skeppa en riktig AI-produkt.

## Funktioner

- **Biblioteket** — handgjorda skills i sex kategorier (Innehåll, Strategi, PR & Kris,
  SEO, Analys & Data, Metoder), sök- och filtrerbara. Varje skill är en riktig `SKILL.md`
  att kopiera eller ladda ner. Fungerar helt utan API-nyckel. Kategorin **Metoder** rymmer
  tänkar-linser som Ritson-metoden och How Brands Grow (Byron Sharp).
- **Generatorn** (`/skapa`) — beskriv en marknadsuppgift i vanlig svenska och få en
  skräddarsydd `SKILL.md`. Faller tillbaka till ett tydligt märkt demo-läge om ingen
  nyckel finns eller vid rate-limit, så den publika demon aldrig ser trasig ut.

## Teknik

- Next.js 16 (App Router, Turbopack) · React 19 · TypeScript
- Tailwind CSS 4
- `@anthropic-ai/sdk` (modell `claude-sonnet-5`) för generatorn

## Kom igång lokalt

```bash
npm install
npm run dev
```

Öppna http://localhost:3000.

Biblioteket fungerar direkt. För att köra **generatorn skarpt** (annars demo-läge):

```bash
cp .env.local.example .env.local
# fyll i ANTHROPIC_API_KEY=sk-ant-...
```

Nyckel skapas på https://platform.claude.com/.

## Struktur

| Sökväg | Roll |
| --- | --- |
| `data/skills.ts` | Skillsen + kategorier (innehåll = kärnvärdet) |
| `app/page.tsx` | Startsida: hero + katalog |
| `app/skill/[slug]/page.tsx` | Skill-detalj med nedladdning + installation |
| `app/skapa/page.tsx` + `components/GeneratorForm.tsx` | Generatorn |
| `app/api/generate/route.ts` | API: generering + demo-fallback + rate-limit |
| `lib/claude.ts` | Anthropic-anrop och SKILL.md-prompt |

## Deploy

Byggd för Vercel: importera repot, sätt `ANTHROPIC_API_KEY` som environment variable,
deploya. Utan nyckel fungerar allt utom skarp generering (som då kör demo-läge).

## Licens

MIT, se [LICENSE](LICENSE).
