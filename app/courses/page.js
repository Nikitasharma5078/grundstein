import { COURSES } from "@/data/courses";

export default function CoursesPage() {
  const bands = [
    { name: "Beginner", sub: "Grundstufe", key: "grundstufe", levels: ["a1", "a2"] },
    { name: "Intermediate", sub: "Aufbaustufe", key: "aufbaustufe", levels: ["b1", "b2"] },
    { name: "Advanced", sub: "Fortgeschritten", key: "fortgeschritten", levels: ["c1"] },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <p className="mono text-xs text-gold mb-3 tracking-widest">ALL COURSES</p>
      <h1 className="display text-4xl font-semibold mb-12">Choose your level</h1>

      {bands.map((band) => (
        <div key={band.key} className="mb-14">
          <h2 className="mono text-sm text-ink-soft mb-4 uppercase tracking-wide">
            {band.name} <span className="italic text-ink-soft normal-case">— {band.sub}</span>
          </h2>
          <div className="grid sm:grid-cols-2 gap-px bg-ink border-2 border-ink rounded-2xl overflow-hidden">
            {band.levels.map((lvl) => {
              const c = COURSES[lvl];
              const shapeClass =
                c.shape === "circle" ? "shape-circle" : c.shape === "triangle" ? "shape-triangle" : "";
              return (
                <a
                  key={lvl}
                  href={`/courses/${lvl}`}
                  className="bg-paper p-8 flex gap-6 items-start hover:bg-paper-raised transition-colors"
                >
                  <div className={`w-12 h-12 shrink-0 ${c.color} ${shapeClass}`} />
                  <div>
                    <p className="mono text-xs text-ink-soft mb-1">{c.level}</p>
                    <h3 className="display text-xl font-semibold mb-2">{c.title}</h3>
                    <p className="text-sm text-ink-soft mb-3">{c.desc}</p>
                    <p className="mono text-xs text-navy">{c.lessons.length} lessons →</p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
