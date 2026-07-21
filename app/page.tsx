import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import CatalogBrowser from "@/components/CatalogBrowser";
import HeroCard from "@/components/HeroCard";
import { skills } from "@/data/skills";

export default function Home() {
  return (
    <>
      {/* ── Hero: thesis = en riktig SKILL.md ur katalogen ── */}
      <section className="relative overflow-hidden border-b border-[var(--color-line)]">
        <div className="paper-grid pointer-events-none absolute inset-0" aria-hidden />
        <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-24">
          <div>
            <p className="eyebrow mb-5">Verktygslådan för PR &amp; svenska marknadsförare</p>
            <h1 className="font-[family-name:var(--font-display)] text-5xl font-500 leading-[1.02] tracking-[-0.015em] text-[var(--color-ink)] sm:text-6xl">
              En swipe-file av <span className="marker">färdiga skills</span> för
              dig som jobbar med marknad.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-[var(--color-ink-soft)]">
              Claude-skills är återanvändbara instruktioner som lär din AI att göra
              en specifik uppgift — rätt, varje gång. Här är verktygslådan för PR och
              svenska marknadsförare. Bläddra, ladda ner, installera. Eller beskriv
              din egen uppgift och generera en ny.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link href="#katalog" className="btn btn-primary">
                Bläddra i katalogen
                <ArrowRight className="h-4 w-4" strokeWidth={2.2} />
              </Link>
              <Link href="/skapa" className="btn btn-ghost">
                <Sparkles className="h-4 w-4 text-[var(--color-cobalt)]" strokeWidth={2.2} />
                Skapa en egen skill
              </Link>
            </div>
            <p className="mt-5 font-[family-name:var(--font-mono)] text-xs text-[var(--color-muted)]">
              {skills.length} skills i katalogen · gratis · inget konto
            </p>
          </div>

          {/* Katalogkort: en riktig SKILL.md som skriver sig själv (se HeroCard) */}
          <HeroCard />
        </div>
      </section>

      {/* ── Katalogen ── */}
      <section id="katalog" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-16">
        <div className="mb-8 max-w-2xl">
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-700 tracking-tight text-[var(--color-ink)]">
            Katalogen
          </h2>
          <p className="mt-2 text-[var(--color-ink-soft)]">
            Varje skill är en genomarbetad <code className="font-[family-name:var(--font-mono)] text-sm text-[var(--color-cobalt)]">SKILL.md</code>{" "}
            du kan ladda ner och lägga i din <code className="font-[family-name:var(--font-mono)] text-sm">.claude/skills/</code>-mapp.
          </p>
        </div>
        <CatalogBrowser skills={skills} />
      </section>

      {/* ── Så funkar det ── */}
      <section className="border-t border-[var(--color-line)] bg-[var(--color-paper-2)]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="mb-10 font-[family-name:var(--font-display)] text-2xl font-700 tracking-tight text-[var(--color-ink)]">
            Så använder du en skill
          </h2>
          <ol className="grid gap-6 sm:grid-cols-3">
            {[
              {
                n: "01",
                t: "Ladda ner",
                d: "Välj en skill i katalogen och ladda ner dess SKILL.md — eller kopiera innehållet.",
              },
              {
                n: "02",
                t: "Lägg i mappen",
                d: "Spara filen i .claude/skills/<namn>/SKILL.md i ditt projekt eller din personliga mapp.",
              },
              {
                n: "03",
                t: "Be om uppgiften",
                d: "Claude upptäcker skillen automatiskt och följer den när uppgiften dyker upp.",
              },
            ].map((step) => (
              <li
                key={step.n}
                className="rounded-lg border border-[var(--color-line-strong)] bg-[var(--color-surface)] p-6"
              >
                <span className="font-[family-name:var(--font-mono)] text-sm font-700 text-[var(--color-cobalt)]">
                  {step.n}
                </span>
                <h3 className="mt-2 font-[family-name:var(--font-display)] text-lg font-600 text-[var(--color-ink)]">
                  {step.t}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-[var(--color-ink-soft)]">
                  {step.d}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
