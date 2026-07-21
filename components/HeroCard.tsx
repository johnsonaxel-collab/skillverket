"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

/**
 * Hjältens SKILL.md-kort som "skriver sig självt" vid inladdning, med den gula
 * markören som sveper fram över en nyckelrad när skriften är klar. Mjuk hover-tilt.
 * Respekterar prefers-reduced-motion (visar allt direkt, ingen tilt).
 */

type Seg = { t: string; c?: "muted" | "key" | "head"; marker?: boolean };

// Förhandsvisning av en riktig skill (INH·01). Segmenterad så färg + markör
// kan ritas fram medan texten "typas".
const SEGMENTS: Seg[] = [
  { t: "---\n", c: "muted" },
  { t: "name", c: "key" },
  { t: ": pressmeddelande\n" },
  { t: "description", c: "key" },
  { t: ": Använd när ett företag\n  har något att annonsera…\n" },
  { t: "---\n\n", c: "muted" },
  { t: "# Pressmeddelande\n\n", c: "head" },
  { t: "Nyhetsvärdet först", marker: true },
  { t: ", inga\nsuperlativ utan bevis, färdigt\nför en redaktör att klippa in.\n\n" },
  { t: "## Skrivregler\n", c: "head" },
  { t: "- Rubriken säger nyheten rakt ut\n" },
  { t: "- Ingressen: vem/vad/när/var/varför\n" },
  { t: "- Citat ska låta som en människa" },
];

const TOTAL = SEGMENTS.reduce((n, s) => n + s.t.length, 0);
const DURATION_MS = 2600;

const colorClass: Record<NonNullable<Seg["c"]>, string> = {
  muted: "text-[var(--color-muted)]",
  key: "text-[var(--color-ink)]",
  head: "text-[var(--color-ink)]",
};

export default function HeroCard() {
  const [revealed, setRevealed] = useState(0);
  const [done, setDone] = useState(false);
  const [reduced, setReduced] = useState(false);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0, active: false });
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) {
      setReduced(true);
      setRevealed(TOTAL);
      setDone(true);
      return;
    }
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / DURATION_MS);
      // lätt ease-out så slutet lugnar ner sig
      const eased = 1 - Math.pow(1 - p, 1.7);
      setRevealed(Math.round(eased * TOTAL));
      if (p < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        setRevealed(TOTAL);
        setDone(true);
      }
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  function onMove(e: React.MouseEvent<HTMLAnchorElement>) {
    if (reduced) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ rx: -py * 5.5, ry: px * 5.5, active: true });
  }
  function onLeave() {
    setTilt({ rx: 0, ry: 0, active: false });
  }

  // Rendera segmenten upp till `revealed` tecken.
  const nodes: React.ReactNode[] = [];
  let used = 0;
  for (let i = 0; i < SEGMENTS.length; i++) {
    const seg = SEGMENTS[i];
    if (used >= revealed) break;
    const take = Math.min(seg.t.length, revealed - used);
    const shown = seg.t.slice(0, take);
    used += seg.t.length;
    const cls = seg.c ? colorClass[seg.c] : "";
    if (seg.marker) {
      nodes.push(
        <span key={i} className={`sweep ${done ? "sweep-on" : ""}`}>
          {shown}
        </span>
      );
    } else {
      nodes.push(
        <span key={i} className={cls}>
          {shown}
        </span>
      );
    }
  }

  return (
    <div className="relative" style={{ perspective: "1000px" }}>
      <Link
        href="/skill/pressmeddelande"
        aria-label="Öppna skillen Pressmeddelande"
        className="group block outline-none"
        onMouseMove={onMove}
        onMouseLeave={onLeave}
      >
        <div
          className="rounded-xl border border-[var(--color-line-strong)] bg-[var(--color-surface)] p-1.5 will-change-transform"
          style={{
            boxShadow: "var(--shadow-card)",
            transform: `rotate(0.5deg) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg) translateY(${
              tilt.active ? -3 : 0
            }px)`,
            transition: tilt.active
              ? "transform 0.08s ease-out"
              : "transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)",
          }}
        >
          <div className="flex items-center justify-between rounded-t-lg border-b border-[var(--color-line)] bg-[var(--color-paper-2)] px-4 py-2.5">
            <span className="call-number">INH·01</span>
            <span className="flex items-center gap-1.5 font-[family-name:var(--font-mono)] text-xs text-[var(--color-muted)]">
              <span className="transition-colors group-hover:text-[var(--color-ink)]">
                SKILL.md
              </span>
              <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
            </span>
          </div>
          <pre className="min-h-[300px] overflow-x-auto rounded-b-lg px-4 py-4 font-[family-name:var(--font-mono)] text-[0.78rem] leading-relaxed text-[var(--color-ink-soft)]">
            {nodes}
            {!done && <span className="caret">&nbsp;</span>}
          </pre>
        </div>
      </Link>
      <div
        className="absolute -bottom-4 -left-4 -z-10 h-full w-full rounded-xl border border-[var(--color-line)] bg-[var(--color-paper-2)]"
        aria-hidden
      />
    </div>
  );
}
