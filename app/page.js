export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-16 pb-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="mono text-xs text-gold mb-4 tracking-widest">GRUNDSTEIN · A1 → C1</p>
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

        {/* Signature geometric composition: shape system for A / B / C bands */}
        <div className="relative h-80 hidden md:block" aria-hidden="true">
          <div className="absolute left-4 top-10 w-40 h-40 shape-circle bg-gold" />
          <div className="absolute right-6 top-0 w-32 h-32 bg-navy" />
          <div
            className="absolute right-16 bottom-0 w-36 h-32 shape-triangle bg-burgundy"
          />
          <p className="absolute left-10 top-24 mono text-xs text-paper font-bold">A</p>
          <p className="absolute right-16 top-10 mono text-xs text-paper font-bold">B</p>
          <p className="absolute right-28 bottom-6 mono text-xs text-ink font-bold">C</p>
        </div>
      </section>

      {/* Level bands */}
      <section className="border-t-2 border-ink">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="display text-2xl font-semibold mb-2">Three bands, six levels</h2>
          <p className="text-ink-soft mb-10 max-w-xl">
            Every course sits inside one of the three CEFR bands. The shape tells you
            where you are before you even read the label.
          </p>
          <div className="grid sm:grid-cols-3 gap-px bg-ink border-2 border-ink rounded-2xl overflow-hidden">
            <Band
              shape="circle"
              color="bg-gold"
              band="Beginner"
              sub="Grundstufe"
              levels="A1 · A2"
              desc="Everyday phrases, introductions, the present tense."
            />
            <Band
              shape="square"
              color="bg-navy"
              band="Intermediate"
              sub="Aufbaustufe"
              levels="B1 · B2"
              desc="Opinions, past tense, workplace and travel German."
            />
            <Band
              shape="triangle"
              color="bg-burgundy"
              band="Advanced"
              sub="Fortgeschritten"
              levels="C1"
              desc="Nuance, subjunctive mood, near-native fluency."
            />
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="border-t-2 border-ink">
        <div className="max-w-6xl mx-auto px-6 py-16 grid sm:grid-cols-3 gap-10">
          <Step n="01" title="Choose a level" text="Placement isn't guesswork — start at A1 or test into where you belong." />
          <Step n="02" title="Work through lessons" text="Vocabulary, grammar, and exercises in every lesson, in that order." />
          <Step n="03" title="Track real progress" text="Your dashboard shows exactly which lessons are done, not a vague streak." />
        </div>
      </section>
    </div>
  );
}

function Band({ shape, color, band, sub, levels, desc }) {
  const shapeClass =
    shape === "circle" ? "shape-circle" : shape === "triangle" ? "shape-triangle" : "";
  return (
    <div className="bg-paper p-8">
      <div className={`w-10 h-10 ${color} ${shapeClass} mb-6`} />
      <p className="mono text-xs text-ink-soft mb-1">{levels}</p>
      <h3 className="display text-xl font-semibold mb-1">{band}</h3>
      <p className="mono text-[11px] text-ink-soft italic mb-2">{sub}</p>
      <p className="text-sm text-ink-soft">{desc}</p>
    </div>
  );
}

function Step({ n, title, text }) {
  return (
    <div>
      <p className="mono text-gold text-sm mb-3">{n}</p>
      <h3 className="display text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-ink-soft">{text}</p>
    </div>
  );
}
