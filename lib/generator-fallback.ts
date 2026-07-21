/**
 * Demo-läge: används när ANTHROPIC_API_KEY saknas eller rate-limit slår till,
 * så att den deployade sajten alltid visar något meningsfullt istället för ett fel.
 */
export const DEMO_SKILL = `---
name: kampanj-hook-generator
description: Använd när du behöver flera idéer på vinklar eller "hooks" till en kampanj, ett inlägg eller en rubrik. Triggas av "ge mig vinklar", "idéer till kampanjen", "hooks", "olika sätt att säga".
---

# Kampanj-hook-generator

Du hjälper till att hitta den vinkel som faktiskt fastnar. Samma budskap kan sägas
på tio sätt — det här jobbet handlar om att snabbt utforska dem och välja rätt.

## Fråga först
- Vad är budskapet/erbjudandet i en mening?
- Vem ska nås, och vad bryr de sig om?
- Var ska det landa (kanal) och vad ska mottagaren göra sen?

## Arbetsgång
1. Föreslå 8–10 vinklar i blandade stilar (se mönstren nedan).
2. Markera de 2–3 starkaste och motivera kort varför just de passar målgruppen.
3. Bygg ut den valda vinkeln till färdig copy för vald kanal.

## Vinkel-mönster att variera mellan
- Kontraintuitivt påstående
- Konkret siffra eller resultat
- Sårbar/ärlig öppning
- Mini-berättelse
- Rak fråga till målgruppen
- Före/efter-kontrast

## Regel
Vinkeln måste stämma med innehållet — lova aldrig något texten inte infriar.

## Kvalitetskoll
Läs den valda hooken högt. Om den inte får dig att vilja veta mer på tre sekunder,
välj en annan.`;

// Enkel in-memory rate-limit per IP. Best-effort (nollställs vid ny serverinstans),
// men räcker för att skydda demon mot uppenbart missbruk.
const WINDOW_MS = 60 * 60 * 1000; // 1 timme
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

export function rateLimit(ip: string): { allowed: boolean; remaining: number } {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  if (recent.length >= MAX_PER_WINDOW) {
    hits.set(ip, recent);
    return { allowed: false, remaining: 0 };
  }
  recent.push(now);
  hits.set(ip, recent);
  return { allowed: true, remaining: MAX_PER_WINDOW - recent.length };
}
