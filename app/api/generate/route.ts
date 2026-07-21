import { NextResponse } from "next/server";
import { generateSkill, hasApiKey, type GenerateInput } from "@/lib/claude";
import { DEMO_SKILL, rateLimit } from "@/lib/generator-fallback";

export const runtime = "nodejs";

interface Body extends Partial<GenerateInput> {
  task?: string;
}

export async function POST(request: Request) {
  let body: Body;
  try {
    body = (await request.json()) as Body;
  } catch {
    return NextResponse.json({ error: "Ogiltig förfrågan." }, { status: 400 });
  }

  const task = (body.task ?? "").trim();
  if (task.length < 8) {
    return NextResponse.json(
      { error: "Beskriv uppgiften lite mer utförligt (minst en mening)." },
      { status: 400 }
    );
  }

  // Saknas nyckel → demo-läge (sajten ska aldrig se trasig ut).
  if (!hasApiKey()) {
    return NextResponse.json({
      markdown: DEMO_SKILL,
      mode: "demo" as const,
      note: "Demo-läge: ingen API-nyckel är kopplad, så det här är ett förinspelat exempel. Med en nyckel genereras en skill utifrån just din uppgift.",
    });
  }

  // Rate-limit per IP (best-effort skydd för den publika demon).
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "okänd";
  const { allowed } = rateLimit(ip);
  if (!allowed) {
    return NextResponse.json({
      markdown: DEMO_SKILL,
      mode: "demo" as const,
      note: "Du har nått gränsen för antal genereringar den här timmen. Här är ett exempel så länge — försök igen senare.",
    });
  }

  try {
    const markdown = await generateSkill({
      task,
      channel: body.channel?.trim() || undefined,
      tone: body.tone?.trim() || undefined,
      industry: body.industry?.trim() || undefined,
    });
    return NextResponse.json({ markdown, mode: "live" as const });
  } catch (err) {
    console.error("generateSkill failed:", err);
    return NextResponse.json(
      { error: "Något gick fel när skillen skulle genereras. Försök igen." },
      { status: 500 }
    );
  }
}
