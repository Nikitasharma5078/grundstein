import { COURSES } from "@/data/courses";
import { notFound } from "next/navigation";
import { Star, Lock, Check } from "lucide-react";

export default async function LevelPage({ params }) {
  const { level } = await params;
  const c = COURSES[level];
  if (!c) return notFound();

  const shapeClass =
    c.shape === "circle" ? "shape-circle" : c.shape === "triangle" ? "shape-triangle" : "";

  // Alternate left/right offsets to create the winding path effect
  const offsets = ["ml-0", "ml-16", "ml-28", "ml-16", "ml-0", "-ml-16", "-ml-28", "-ml-16"];

  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <a href="/courses" className="mono text-xs text-ink-soft hover:text-gold">← All courses</a>

      <div className="flex items-center gap-4 mt-6 mb-3">
        <div className={`w-10 h-10 ${c.color} ${shapeClass} card-round`} />
        <p className="mono text-xs text-ink-soft">{c.band} · {c.level}</p>
      </div>
      <h1 className="display text-4xl font-semibold mb-3">{c.title}</h1>
      <p className="text-ink-soft mb-16 max-w-lg">{c.desc}</p>

      {/* Winding lesson path */}
      <div className="relative flex flex-col items-center gap-2">
        {c.lessons.map((lesson, i) => {
          const offset = offsets[i % offsets.length];
          const isFirst = i === 0;
          return (
            <div key={lesson.id} className={`relative flex flex-col items-center ${offset}`}>
              {i > 0 && (
                <div
                  className="w-1 h-10 bg-ink-soft/30 rounded-full mb-2"
                  aria-hidden="true"
                />
              )}
              <a
                href={`/lesson/${lesson.id}`}
                className={`group relative w-20 h-20 rounded-full flex items-center justify-center node-shadow ${c.color} hover:brightness-105 active:translate-y-1 active:shadow-none transition-all`}
                title={lesson.title}
              >
                {isFirst ? (
                  <Star className="w-8 h-8 text-paper" strokeWidth={2.5} />
                ) : (
                  <span className="mono text-paper text-lg font-bold">{i + 1}</span>
                )}
                <span className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-paper border-2 border-ink flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Check className="w-4 h-4" strokeWidth={3} />
                </span>
              </a>
              <div className="text-center mt-3 mb-6 max-w-[10rem]">
                <p className="display text-sm font-semibold leading-tight">{lesson.title}</p>
                <p className="text-xs text-ink-soft mt-1">{lesson.desc}</p>
              </div>
            </div>
          );
        })}

        {/* Locked "next level" node to show progression continues */}
        <div className="relative flex flex-col items-center">
          <div className="w-1 h-10 bg-ink-soft/30 rounded-full mb-2" aria-hidden="true" />
          <div className="w-16 h-16 rounded-full flex items-center justify-center bg-paper-raised border-2 border-dashed border-ink-soft/50">
            <Lock className="w-6 h-6 text-ink-soft" strokeWidth={2} />
          </div>
          <p className="mono text-xs text-ink-soft mt-3">Next level</p>
        </div>
      </div>
    </div>
  );
}
