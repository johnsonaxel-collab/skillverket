"use client";

import { useState } from "react";
import { Check, Copy, Download } from "lucide-react";

interface Props {
  /** Filnamn utan mapp, t.ex. "pressmeddelande". Blir <filename>/SKILL.md vid nedladdning. */
  filename: string;
  content: string;
  /** Kompakt läge för listvyer. */
  size?: "default" | "sm";
}

export default function SkillActions({ filename, content, size = "default" }: Props) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(content);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // Utfaller tyst om urklipp inte är tillgängligt (t.ex. osäker kontext).
    }
  }

  function download() {
    const blob = new Blob([content], { type: "text/markdown;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "SKILL.md";
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  }

  const pad = size === "sm" ? "px-3 py-1.5 text-[0.82rem]" : "";

  return (
    <div className="flex flex-wrap items-center gap-2">
      <button onClick={download} className={`btn btn-primary ${pad}`}>
        <Download className="h-4 w-4" strokeWidth={2.2} />
        Ladda ner SKILL.md
      </button>
      <button
        onClick={copy}
        className={`btn btn-ghost ${pad}`}
        aria-live="polite"
      >
        {copied ? (
          <>
            <Check className="h-4 w-4 text-[var(--color-cobalt)]" strokeWidth={2.4} />
            Kopierat
          </>
        ) : (
          <>
            <Copy className="h-4 w-4" strokeWidth={2.2} />
            Kopiera
          </>
        )}
      </button>
    </div>
  );
}
