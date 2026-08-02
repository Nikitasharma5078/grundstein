import { COURSES } from "@/data/courses";

export default function TestIndex() {
  const levels = Object.entries(COURSES);
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <p className="mono text-sm text-gold mb-3 tracking-widest">TEST YOURSELF</p>
      <h1 className="display text-4xl font-semibold mb-3">Take a level test</h1>
      <p className="text-ink-soft mb-12 max-w-lg">
        Multiple-choice questions pulled straight from that level's vocabulary —
        a quick way to check what's actually sticking.
      </p>

      <div className="grid sm:grid-cols-2 gap-4">
        {levels.map(([key, c], i) => {
          const shapeClass =
            c.shape === "circle" ? "shape-circle" : c.shape === "triangle" ? "shape-triangle" : "";
          const wordCount = c.lessons.reduce((sum, l) => sum + l.vocab.length, 0);
          const isLastOdd = i === levels.length - 1 && levels.length % 2 !== 0;
          return (
            <a
              key={key}
              href={`/test/${key}`}
              className={`group bg-paper-raised p-8 flex gap-6 items-start rounded-2xl border-2 border-ink-soft/15 hover:border-ink hover:-translate-y-1 hover:shadow-lg transition-all duration-200 ${
                isLastOdd ? "sm:col-span-2" : ""
              }`}
            >
              <div className={`w-12 h-12 shrink-0 ${c.color} ${shapeClass} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                <span className="mono text-paper text-xs font-bold">{c.level}</span>
              </div>
              <div>
                <p className="mono text-sm text-ink-soft mb-1">{c.level}</p>
                <h3 className="display text-xl font-semibold mb-2">{c.title}</h3>
                <p className="mono text-sm text-gold">{wordCount} words →</p>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}
