import Anthropic from "@anthropic-ai/sdk";

const MODEL = "claude-sonnet-5";

export interface GenerateInput {
  task: string;
  channel?: string;
  tone?: string;
  industry?: string;
}

export function hasApiKey(): boolean {
  return Boolean(process.env.ANTHROPIC_API_KEY);
}

function getClient(): Anthropic {
  if (!process.env.ANTHROPIC_API_KEY) {
    throw new Error(
      "ANTHROPIC_API_KEY saknas. Skapa .env.local med ANTHROPIC_API_KEY=sk-ant-..."
    );
  }
  return new Anthropic();
}

function textFrom(message: Anthropic.Message): string {
  return message.content
    .filter((b): b is Anthropic.TextBlock => b.type === "text")
    .map((b) => b.text)
    .join("\n");
}

/** Tar bort ev. ```-omslutning så vi alltid får ren markdown. */
function stripCodeFence(text: string): string {
  const trimmed = text.trim();
  const fence = trimmed.match(/^```(?:markdown|md)?\n([\s\S]*?)\n```$/);
  return (fence ? fence[1] : trimmed).trim();
}

const SYSTEM = `Du är en senior marknadsstrateg OCH en expert på att skriva Claude Skills.
En Claude Skill är en markdown-fil (SKILL.md) med YAML-frontmatter (name + description)
följt av tydliga instruktioner som lär en AI att utföra EN specifik marknads-/PR-uppgift
rätt, varje gång.

Du får en beskrivning av en uppgift och ska returnera en komplett, genomarbetad SKILL.md.

KRAV PÅ FILEN:
- Börja med YAML-frontmatter mellan --- rader:
  - name: kort slug i gemener med bindestreck (t.ex. "kampanj-brief").
  - description: en mening om NÄR skillen ska användas, med triggerord användaren
    troligen skriver. Skrivs så att en AI vet när den ska plockas fram.
- Därefter en H1-rubrik och instruktioner strukturerade med H2-rubriker.
- Inkludera där det passar: "fråga först"-punkter (vad AI:n behöver veta), en tydlig
  arbetsgång, konkreta regler/guardrails, ett output-format, och en sista kvalitetskoll.
- Var konkret och praktisk. Skriv på svenska, i en kunnig men jargongfri ton — förklara
  gärna VARFÖR något görs, som en tålmodig kollega.
- Hitta inte på siffror eller fakta. Om skillen kräver data, be AI:n fråga efter den.

Anpassa innehållet efter ev. angiven kanal, ton och bransch.

Returnera ENBART filens innehåll som ren markdown — ingen förklaring före eller efter,
och omslut den inte i något kodblock (inga inledande eller avslutande backticks).`;

export async function generateSkill(input: GenerateInput): Promise<string> {
  const client = getClient();

  const userContent = [
    `UPPGIFT ATT BYGGA EN SKILL FÖR:\n${input.task}`,
    input.channel ? `Kanal/kontext: ${input.channel}` : "",
    input.tone ? `Önskad ton: ${input.tone}` : "",
    input.industry ? `Bransch: ${input.industry}` : "",
    "",
    "Skriv SKILL.md nu.",
  ]
    .filter(Boolean)
    .join("\n");

  const response = await client.messages.create({
    model: MODEL,
    max_tokens: 2400,
    system: SYSTEM,
    messages: [{ role: "user", content: userContent }],
  });

  return stripCodeFence(textFrom(response));
}
