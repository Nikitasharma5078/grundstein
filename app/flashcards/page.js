import { COURSES } from "@/data/courses";

export default function FlashcardsIndex() {
  const levels = Object.entries(COURSES);
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <p className="mono text-xs text-gold mb-3 tracking-widest">FLASHCARDS</p>
      <h1 className="display text-4xl font-semibold mb-3">Practice vocabulary</h1>
      <p className="text-ink-soft mb-12 max-w-lg">
        Pick a level to flip through its words — every card pulls from the
        vocabulary you've already seen in that level's lessons.
      </p>

      <div className="grid sm:grid-cols-2 gap-px bg-ink border-2 border-ink">
        {levels.map(([key, c]) => {
          const shapeClass =
            c.shape === "circle" ? "shape-circle" : c.shape === "triangle" ? "shape-triangle" : "";
          const wordCount = c.lessons.reduce((sum, l) => sum + l.vocab.length, 0);
          return (
            <a
              key={key}
              href={`/flashcards/${key}`}
              className="bg-paper p-8 flex gap-6 items-start hover:bg-paper-raised transition-colors"
            >
              <div className={`w-12 h-12 shrink-0 ${c.color} ${shapeClass}`} />
              <div>
                <p className="mono text-xs text-ink-soft mb-1">{c.level}</p>
                <h3 className="display text-xl font-semibold mb-2">{c.title}</h3>
                <p className="mono text-xs text-navy">{wordCount} words →</p>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}
