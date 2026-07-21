import type { Metadata } from "next";
import { Cormorant_Garamond, Karla, Space_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const karla = Karla({
  variable: "--font-karla",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Skillverket — verktygslådan för PR och svenska marknadsförare",
  description:
    "Färdiga AI-skills (SKILL.md) för PR och svenska marknadsförare: pressmeddelanden, kampanjplaner, positionering, krishantering och mer. Bläddra, ladda ner, installera — eller generera din egen.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="sv"
      className={`${cormorant.variable} ${karla.variable} ${spaceMono.variable} h-full`}
    >
      <body className="flex min-h-full flex-col">
        <header className="sticky top-0 z-40 border-b border-[var(--color-line)] bg-[var(--color-paper)]/85 backdrop-blur-md">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3.5">
            <Link href="/" className="group flex items-baseline gap-2.5">
              <span className="font-[family-name:var(--font-display)] text-[26px] font-600 leading-none tracking-[-0.01em] text-[var(--color-ink)]">
                Skillverket
              </span>
              <span className="hidden text-[10px] font-600 uppercase tracking-[0.2em] text-[var(--color-muted)] sm:inline">
                Katalog
              </span>
            </Link>
            <nav className="flex items-center gap-1.5 text-sm">
              <Link
                href="/#katalog"
                className="rounded-md px-3 py-1.5 font-500 text-[var(--color-ink-soft)] transition-colors hover:bg-[var(--color-paper-2)]"
              >
                Biblioteket
              </Link>
              <Link href="/skapa" className="btn btn-primary px-3.5 py-1.5">
                Skapa en skill
              </Link>
            </nav>
          </div>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="border-t border-[var(--color-line)] bg-[var(--color-paper-2)]">
          <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-8 text-sm text-[var(--color-muted)] sm:flex-row sm:items-center sm:justify-between">
            <p>
              Skillverket — verktygslådan för PR och svenska marknadsförare.
            </p>
            <p className="font-[family-name:var(--font-mono)] text-xs">
              Byggd av Axel · {new Date().getFullYear()}
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
