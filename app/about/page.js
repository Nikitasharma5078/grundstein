export default function AboutPage() {
  return (
    <div>
      <section className="border-b-2 border-ink">
        <div className="max-w-6xl mx-auto px-6 pt-16 pb-14">
          <p className="mono text-xs text-gold mb-3 tracking-widest">HOW IT WORKS</p>
          <h1 className="display text-4xl font-semibold max-w-xl">
            Every level, every step — laid out before you start.
          </h1>
        </div>
      </section>

      {/* Level bands */}
      <section className="border-b-2 border-ink">
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

      {/* How it works steps */}
      <section>
        <div className="max-w-6xl mx-auto px-6 py-16 grid sm:grid-cols-3 gap-10">
          <Step n="01" title="Choose a level" text="Placement isn't guesswork — start at A1 or test into where you belong." />
          <Step n="02" title="Work through lessons" text="Vocabulary, grammar, and exercises in every lesson, in that order." />
          <Step n="03" title="Track real progress" text="Your dashboard shows exactly which lessons are done, not a vague streak." />
        </div>
        <div className="max-w-6xl mx-auto px-6 pb-16">
          <a
            href="/signup"
            className="btn-3d bg-gold text-paper mono text-sm px-6 py-3.5 hover:brightness-105 inline-block font-semibold"
            style={{ "--btn-shadow": "var(--ink)" }}
          >
            Start with A1
          </a>
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
