import WordOfDay from "@/components/WordOfDay";
import { Layers, BookOpen, Flame } from "lucide-react";

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-16 pb-20 grid md:grid-cols-2 gap-12 items-center min-h-[70vh]">
        <div>
          <p className="mono text-xs text-gold mb-4 tracking-widest">BHASHACHECK · A1 → C1</p>
          <h1 className="display text-5xl sm:text-6xl font-semibold leading-[1.02] mb-6">
            German, built<br />from the<br />ground up.
          </h1>
          <p className="text-lg text-ink-soft max-w-md mb-8">
            A structured path from your first word to fluency — built for
            Indian students starting from zero, one solid lesson at a time.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="/signup"
              className="btn-3d bg-gold text-paper mono text-sm px-6 py-3.5 hover:brightness-105 inline-block font-semibold"
              style={{ "--btn-shadow": "var(--ink)" }}
            >
              Start with A1
            </a>
            <a href="/courses" className="mono text-sm underline underline-offset-4 hover:text-gold">
              See all levels
            </a>
          </div>
        </div>

        {/* Signature geometric composition: shape system for A / B / C bands, now floating */}
        <div className="relative h-80 hidden md:block" aria-hidden="true">
          <div className="absolute left-4 top-10 w-40 h-40 shape-circle bg-gold float-slow" />
          <div className="absolute right-6 top-0 w-32 h-32 bg-navy float-slower" />
          <div className="absolute right-16 bottom-0 w-36 h-32 shape-triangle bg-burgundy float-fast" />
          <p className="absolute left-10 top-24 mono text-xs text-paper font-bold">A</p>
          <p className="absolute right-16 top-10 mono text-xs text-paper font-bold">B</p>
          <p className="absolute right-28 bottom-6 mono text-xs text-ink font-bold">C</p>
        </div>
      </section>

      {/* Interactive word-of-the-day + stats */}
      <section className="border-t-2 border-ink">
        <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
          <WordOfDay />

          <div className="grid grid-cols-3 gap-6">
            <Stat icon={<Layers className="w-5 h-5" />} value="5" label="levels, A1 → C1" />
            <Stat icon={<BookOpen className="w-5 h-5" />} value="20+" label="lessons" />
            <Stat icon={<Flame className="w-5 h-5" />} value="100%" label="free to start" />
          </div>
        </div>
      </section>
    </div>
  );
}

function Stat({ icon, value, label }) {
  return (
    <div className="flex flex-col items-start gap-2">
      <span className="text-gold">{icon}</span>
      <p className="display text-2xl font-semibold">{value}</p>
      <p className="text-xs text-ink-soft leading-snug">{label}</p>
    </div>
  );
}
