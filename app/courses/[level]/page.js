import { COURSES } from "@/data/courses";
import { notFound } from "next/navigation";

export default async function LevelPage({ params }) {
  const { level } = await params;
  const c = COURSES[level];
  if (!c) return notFound();

  const shapeClass =
    c.shape === "circle" ? "shape-circle" : c.shape === "triangle" ? "shape-triangle" : "";

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <a href="/courses" className="mono text-xs text-ink-soft hover:text-red">← All courses</a>

      <div className="flex items-center gap-4 mt-6 mb-3">
        <div className={`w-10 h-10 ${c.color} ${shapeClass}`} />
        <p className="mono text-xs text-ink-soft">{c.band} · {c.level}</p>
      </div>
      <h1 className="display text-4xl font-semibold mb-3">{c.title}</h1>
      <p className="text-ink-soft mb-12 max-w-lg">{c.desc}</p>

      <div className="border-t-2 border-ink">
        {c.lessons.map((lesson, i) => (
          <a
            key={lesson.id}
            href={`/lesson/${lesson.id}`}
            className="flex items-center gap-6 py-5 border-b-2 border-ink hover:bg-paper-raised transition-colors px-2 -mx-2"
          >
            <span className="mono text-sm text-ink-soft w-8">{String(i + 1).padStart(2, "0")}</span>
            <div className="flex-1">
              <h3 className="display text-lg font-semibold">{lesson.title}</h3>
              <p className="text-sm text-ink-soft">{lesson.desc}</p>
            </div>
            <span className="mono text-xs text-blue">Start →</span>
          </a>
        ))}
      </div>
    </div>
  );
}
