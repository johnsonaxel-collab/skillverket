"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Search } from "lucide-react";
import {
  CATEGORIES,
  CATEGORY_META,
  type Category,
  type Skill,
} from "@/data/skills";

export default function CatalogBrowser({ skills }: { skills: Skill[] }) {
  const [active, setActive] = useState<Category | "Alla">("Alla");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return skills.filter((s) => {
      const matchCat = active === "Alla" || s.category === active;
      const matchQ =
        !q ||
        s.title.toLowerCase().includes(q) ||
        s.summary.toLowerCase().includes(q) ||
        s.tags.some((t) => t.toLowerCase().includes(q));
      return matchCat && matchQ;
    });
  }, [skills, active, query]);

  const counts = useMemo(() => {
    const map: Record<string, number> = { Alla: skills.length };
    for (const c of CATEGORIES) map[c] = skills.filter((s) => s.category === c).length;
    return map;
  }, [skills]);

  return (
    <div>
      {/* Filterlist + sök */}
      <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap gap-2" role="tablist" aria-label="Kategorier">
          <FilterChip
            label="Alla"
            code="ALLA"
            count={counts["Alla"]}
            active={active === "Alla"}
            onClick={() => setActive("Alla")}
          />
          {CATEGORIES.map((c) => (
            <FilterChip
              key={c}
              label={c}
              code={CATEGORY_META[c].code}
              count={counts[c]}
              active={active === c}
              onClick={() => setActive(c)}
            />
          ))}
        </div>
        <label className="relative block w-full lg:w-64">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--color-muted)]" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Sök skill eller tagg…"
            aria-label="Sök i katalogen"
            className="w-full rounded-md border border-[var(--color-line-strong)] bg-[var(--color-surface)] py-2 pl-9 pr-3 text-sm text-[var(--color-ink)] placeholder:text-[var(--color-muted)] focus:border-[var(--color-cobalt)]"
          />
        </label>
      </div>

      {/* Rutnät */}
      {filtered.length === 0 ? (
        <p className="rounded-lg border border-dashed border-[var(--color-line-strong)] px-6 py-12 text-center text-[var(--color-muted)]">
          Inga skills matchar. Prova en annan sökning eller kategori.
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((skill) => (
            <SkillCard key={skill.slug} skill={skill} />
          ))}
        </div>
      )}
    </div>
  );
}

function FilterChip({
  label,
  code,
  count,
  active,
  onClick,
}: {
  label: string;
  code: string;
  count: number;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      role="tab"
      aria-selected={active}
      onClick={onClick}
      className={`group flex items-center gap-2 rounded-md border px-3 py-1.5 text-sm font-500 transition-colors ${
        active
          ? "border-[var(--color-cobalt)] bg-[var(--color-cobalt-wash)] text-[var(--color-cobalt-ink)]"
          : "border-[var(--color-line-strong)] bg-[var(--color-surface)] text-[var(--color-ink-soft)] hover:bg-[var(--color-paper-2)]"
      }`}
    >
      <span className="font-[family-name:var(--font-mono)] text-[0.68rem] tracking-wide opacity-70">
        {code}
      </span>
      {label}
      <span className="font-[family-name:var(--font-mono)] text-[0.7rem] opacity-60">
        {count}
      </span>
    </button>
  );
}

function SkillCard({ skill }: { skill: Skill }) {
  return (
    <Link
      href={`/skill/${skill.slug}`}
      className="group relative flex flex-col rounded-lg border border-[var(--color-line-strong)] bg-[var(--color-surface)] p-5 transition-transform duration-150 hover:-translate-y-0.5"
      style={{ boxShadow: "var(--shadow-card)" }}
    >
      <div className="mb-3 flex items-center justify-between">
        <span className="call-number text-[0.74rem]">{skill.callNumber}</span>
        <ArrowUpRight className="h-4 w-4 text-[var(--color-muted)] transition-colors group-hover:text-[var(--color-cobalt)]" />
      </div>
      <h3 className="font-[family-name:var(--font-display)] text-lg font-600 leading-tight tracking-tight text-[var(--color-ink)]">
        {skill.title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--color-ink-soft)]">
        {skill.summary}
      </p>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {skill.tags.slice(0, 3).map((t) => (
          <span
            key={t}
            className="rounded border border-[var(--color-line)] px-1.5 py-0.5 font-[family-name:var(--font-mono)] text-[0.68rem] text-[var(--color-muted)]"
          >
            {t}
          </span>
        ))}
      </div>
    </Link>
  );
}
