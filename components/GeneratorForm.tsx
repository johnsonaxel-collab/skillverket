"use client";

import { useState } from "react";
import { Loader2, Sparkles, TriangleAlert } from "lucide-react";
import SkillActions from "@/components/SkillActions";

interface Result {
  markdown: string;
  mode: "live" | "demo";
  note?: string;
}

const EXAMPLES = [
  "Skriva ett återkommande kundcase utifrån en kort intervju",
  "Ta fram en enkätfråga-guide inför en varumärkesundersökning",
  "Planera ett webbinarium från inbjudan till uppföljning",
];

export default function GeneratorForm() {
  const [task, setTask] = useState("");
  const [channel, setChannel] = useState("");
  const [tone, setTone] = useState("");
  const [industry, setIndustry] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<Result | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setResult(null);
    setLoading(true);
    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ task, channel, tone, industry }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error ?? "Något gick fel. Försök igen.");
      } else {
        setResult(data as Result);
      }
    } catch {
      setError("Kunde inte nå servern. Kontrollera anslutningen och försök igen.");
    } finally {
      setLoading(false);
    }
  }

  const slug =
    result?.markdown.match(/name:\s*([a-z0-9-]+)/i)?.[1] ?? "genererad-skill";

  return (
    <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
      {/* Formulär */}
      <form onSubmit={onSubmit} className="flex flex-col gap-5">
        <div>
          <label
            htmlFor="task"
            className="mb-1.5 block text-sm font-600 text-[var(--color-ink)]"
          >
            Vilken uppgift ska skillen klara?
          </label>
          <textarea
            id="task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            required
            rows={4}
            placeholder="T.ex. Skriva ett månatligt nyhetsbrev till våra befintliga B2B-kunder…"
            className="w-full resize-y rounded-lg border border-[var(--color-line-strong)] bg-[var(--color-surface)] px-3.5 py-3 text-[0.95rem] text-[var(--color-ink)] placeholder:text-[var(--color-muted)] focus:border-[var(--color-cobalt)]"
          />
          <div className="mt-2 flex flex-wrap gap-1.5">
            {EXAMPLES.map((ex) => (
              <button
                key={ex}
                type="button"
                onClick={() => setTask(ex)}
                className="rounded-full border border-[var(--color-line)] bg-[var(--color-paper-2)] px-2.5 py-1 text-xs text-[var(--color-ink-soft)] transition-colors hover:border-[var(--color-cobalt)] hover:text-[var(--color-cobalt-ink)]"
              >
                {ex}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          <Field label="Kanal" value={channel} onChange={setChannel} placeholder="LinkedIn" />
          <Field label="Ton" value={tone} onChange={setTone} placeholder="Rak, varm" />
          <Field label="Bransch" value={industry} onChange={setIndustry} placeholder="B2B SaaS" />
        </div>

        <button type="submit" disabled={loading} className="btn btn-primary self-start disabled:opacity-60">
          {loading ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Genererar…
            </>
          ) : (
            <>
              <Sparkles className="h-4 w-4" strokeWidth={2.2} />
              Generera SKILL.md
            </>
          )}
        </button>

        {error && (
          <p className="flex items-start gap-2 rounded-lg border border-[var(--color-danger)] bg-[var(--color-danger)]/8 px-3.5 py-3 text-sm text-[var(--color-danger)]">
            <TriangleAlert className="mt-0.5 h-4 w-4 shrink-0" />
            {error}
          </p>
        )}
      </form>

      {/* Resultat / platshållare */}
      <div>
        {result ? (
          <div className="flex flex-col gap-4">
            {result.mode === "demo" && result.note && (
              <p className="rounded-lg border border-[var(--color-line-strong)] bg-[var(--color-manila)]/40 px-3.5 py-3 text-sm text-[var(--color-manila-ink)]">
                <span className="font-[family-name:var(--font-mono)] text-xs font-700">
                  DEMO-LÄGE ·{" "}
                </span>
                {result.note}
              </p>
            )}
            <div
              className="overflow-hidden rounded-xl border border-[var(--color-line-strong)] bg-[var(--color-surface)]"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <div className="flex items-center justify-between border-b border-[var(--color-line)] bg-[var(--color-paper-2)] px-4 py-2.5">
                <span className="font-[family-name:var(--font-mono)] text-xs text-[var(--color-muted)]">
                  {slug}/SKILL.md
                </span>
                <span className="font-[family-name:var(--font-mono)] text-xs text-[var(--color-muted)]">
                  {result.mode === "live" ? "genererad" : "exempel"}
                </span>
              </div>
              <pre className="max-h-[460px] overflow-auto px-5 py-5 font-[family-name:var(--font-mono)] text-[0.8rem] leading-relaxed text-[var(--color-ink)]">
                {result.markdown}
              </pre>
            </div>
            <SkillActions filename={slug} content={result.markdown} />
          </div>
        ) : (
          <div className="flex h-full min-h-[320px] flex-col items-center justify-center rounded-xl border border-dashed border-[var(--color-line-strong)] bg-[var(--color-surface)]/50 px-6 py-12 text-center">
            <Sparkles className="mb-3 h-6 w-6 text-[var(--color-muted)]" />
            <p className="max-w-xs text-sm text-[var(--color-muted)]">
              Din genererade SKILL.md dyker upp här — redo att kopieras eller laddas ner.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-600 text-[var(--color-ink)]">
        {label}{" "}
        <span className="font-400 text-[var(--color-muted)]">(valfritt)</span>
      </span>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-lg border border-[var(--color-line-strong)] bg-[var(--color-surface)] px-3 py-2 text-sm text-[var(--color-ink)] placeholder:text-[var(--color-muted)] focus:border-[var(--color-cobalt)]"
      />
    </label>
  );
}
