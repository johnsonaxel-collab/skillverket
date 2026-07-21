import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import GeneratorForm from "@/components/GeneratorForm";

export const metadata: Metadata = {
  title: "Skapa en skill — Skillverket",
  description:
    "Beskriv din marknads- eller PR-uppgift i vanlig text och få en färdig, nedladdningsbar Claude-skill (SKILL.md).",
};

export default function SkapaPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-12">
      <Link
        href="/#katalog"
        className="inline-flex items-center gap-1.5 text-sm font-500 text-[var(--color-muted)] transition-colors hover:text-[var(--color-ink)]"
      >
        <ArrowLeft className="h-4 w-4" strokeWidth={2.2} />
        Tillbaka till katalogen
      </Link>

      <header className="mt-6 mb-10 max-w-2xl">
        <p className="eyebrow mb-4">Generator</p>
        <h1 className="font-[family-name:var(--font-display)] text-3xl font-700 tracking-[-0.02em] text-[var(--color-ink)] sm:text-4xl">
          Skapa din egen skill
        </h1>
        <p className="mt-3 text-lg leading-relaxed text-[var(--color-ink-soft)]">
          Hittar du inte rätt skill i katalogen? Beskriv din uppgift i vanlig
          svenska, så snickrar Skillverket ihop en färdig{" "}
          <code className="font-[family-name:var(--font-mono)] text-base text-[var(--color-cobalt)]">
            SKILL.md
          </code>{" "}
          att ladda ner och installera.
        </p>
      </header>

      <GeneratorForm />
    </div>
  );
}
