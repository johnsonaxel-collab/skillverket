import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, FolderTree } from "lucide-react";
import SkillActions from "@/components/SkillActions";
import { CATEGORY_META, getSkill, skills } from "@/data/skills";

export function generateStaticParams() {
  return skills.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const skill = getSkill(slug);
  if (!skill) return { title: "Skill hittades inte — Skillverket" };
  return {
    title: `${skill.title} — Skillverket`,
    description: skill.summary,
  };
}

export default async function SkillPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const skill = getSkill(slug);
  if (!skill) notFound();

  const related = skills
    .filter((s) => s.category === skill.category && s.slug !== skill.slug)
    .slice(0, 3);

  return (
    <div className="mx-auto max-w-4xl px-6 py-12">
      <Link
        href="/#katalog"
        className="inline-flex items-center gap-1.5 text-sm font-500 text-[var(--color-muted)] transition-colors hover:text-[var(--color-ink)]"
      >
        <ArrowLeft className="h-4 w-4" strokeWidth={2.2} />
        Tillbaka till katalogen
      </Link>

      {/* Rubrikblock */}
      <header className="mt-6 border-b border-[var(--color-line)] pb-8">
        <div className="mb-4 flex flex-wrap items-center gap-3">
          <span className="call-number">{skill.callNumber}</span>
          <span className="rounded border border-[var(--color-line-strong)] bg-[var(--color-cobalt-wash)] px-2 py-0.5 text-xs font-500 text-[var(--color-cobalt-ink)]">
            {skill.category}
          </span>
        </div>
        <h1 className="font-[family-name:var(--font-display)] text-3xl font-700 tracking-[-0.02em] text-[var(--color-ink)] sm:text-4xl">
          {skill.title}
        </h1>
        <p className="mt-3 max-w-2xl text-lg leading-relaxed text-[var(--color-ink-soft)]">
          {skill.summary}
        </p>
        <div className="mt-6">
          <SkillActions filename={skill.slug} content={skill.skillMarkdown} />
        </div>
      </header>

      {/* SKILL.md */}
      <section className="mt-8">
        <div
          className="overflow-hidden rounded-xl border border-[var(--color-line-strong)] bg-[var(--color-surface)]"
          style={{ boxShadow: "var(--shadow-card)" }}
        >
          <div className="flex items-center justify-between border-b border-[var(--color-line)] bg-[var(--color-paper-2)] px-4 py-2.5">
            <span className="font-[family-name:var(--font-mono)] text-xs text-[var(--color-muted)]">
              {skill.slug}/SKILL.md
            </span>
            <span className="font-[family-name:var(--font-mono)] text-xs text-[var(--color-muted)]">
              markdown
            </span>
          </div>
          <pre className="overflow-x-auto px-5 py-5 font-[family-name:var(--font-mono)] text-[0.82rem] leading-relaxed text-[var(--color-ink)]">
            {skill.skillMarkdown}
          </pre>
        </div>
      </section>

      {/* Installation */}
      <section className="mt-10 rounded-xl border border-[var(--color-line)] bg-[var(--color-paper-2)] p-6">
        <div className="mb-3 flex items-center gap-2">
          <FolderTree className="h-5 w-5 text-[var(--color-cobalt)]" strokeWidth={2} />
          <h2 className="font-[family-name:var(--font-display)] text-lg font-600 text-[var(--color-ink)]">
            Installera skillen
          </h2>
        </div>
        <ol className="space-y-2 text-sm leading-relaxed text-[var(--color-ink-soft)]">
          <li>
            <strong className="text-[var(--color-ink)]">1.</strong> Ladda ner{" "}
            <code className="font-[family-name:var(--font-mono)] text-[var(--color-cobalt)]">SKILL.md</code>{" "}
            ovan.
          </li>
          <li>
            <strong className="text-[var(--color-ink)]">2.</strong> Lägg den i{" "}
            <code className="font-[family-name:var(--font-mono)]">
              .claude/skills/{skill.slug}/SKILL.md
            </code>{" "}
            i ditt projekt (eller i din personliga skills-mapp).
          </li>
          <li>
            <strong className="text-[var(--color-ink)]">3.</strong> Starta en
            konversation och be om uppgiften — Claude upptäcker skillen automatiskt
            och följer den.
          </li>
        </ol>
      </section>

      {/* Relaterat */}
      {related.length > 0 && (
        <section className="mt-12">
          <p className="eyebrow mb-4">
            Mer i {CATEGORY_META[skill.category].code} · {skill.category}
          </p>
          <div className="grid gap-4 sm:grid-cols-3">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/skill/${r.slug}`}
                className="rounded-lg border border-[var(--color-line-strong)] bg-[var(--color-surface)] p-4 transition-transform duration-150 hover:-translate-y-0.5"
              >
                <span className="call-number text-[0.7rem]">{r.callNumber}</span>
                <h3 className="mt-2 font-[family-name:var(--font-display)] text-base font-600 text-[var(--color-ink)]">
                  {r.title}
                </h3>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
