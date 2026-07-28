import { COURSES } from "@/data/courses";
import { notFound } from "next/navigation";
import { Star, Lock, Check, ArrowRight, BookOpen } from "lucide-react";

export default async function LevelPage({ params }) {
  const { level } = await params;
  const c = COURSES[level];
  if (!c) return notFound();

  const shapeClass =
    c.shape === "circle" ? "shape-circle" : c.shape === "triangle" ? "shape-triangle" : "";

  const offsets = ["ml-0", "ml-16", "ml-28", "ml-16", "ml-0", "-ml-16", "-ml-28", "-ml-16"];

  return (
    <div>
      {/* Hero banner */}
      <section
        className="relative overflow-hidden border-b-2 border-ink"
        style={{ background: `color-mix(in srgb, var(--${c.color.replace("bg-", "")}) 12%, var(--paper))` }}
      >
        <div
          className="absolute -right-16 -top-16 w-72 h-72 opacity-[0.08]"
          aria-hidden="true"
        >
          <div className={`w-full h-full ${c.color} ${shapeClass}`} />
        </div>
        <div className="max-w-2xl mx-auto px-6 pt-10 pb-12 relative">
          <a href="/courses" className="mono text-xs text-ink-soft hover:text-gold">← All courses</a>

          <div className="flex items-center gap-4 mt-6 mb-3">
            <div className={`w-12 h-12 shrink-0 ${c.color} ${shapeClass} card-round flex items-center justify-center node-shadow`}>
              <span className="mono text-paper text-sm font-bold">{c.level}</span>
            </div>
            <div>
              <p className="mono text-xs text-ink-soft">{c.band}</p>
              <h1 className="display text-3xl sm:text-4xl font-semibold">{c.title}</h1>
            </div>
          </div>
          <p className="text-ink-soft mb-8 max-w-lg">{c.desc}</p>

          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center gap-2 mono text-xs text-ink-soft">
              <BookOpen className="w-4 h-4" />
              {c.lessons.length} lessons
            </div>
            <div className="h-4 w-px bg-ink-soft/30" />
            <div className="mono text-xs text-ink-soft">0 of {c.lessons.length} complete</div>
          </div>

          {/* Progress bar */}
          <div className="w-full max-w-xs h-2.5 rounded-full bg-paper-raised border border-ink-soft/20 overflow-hidden mb-8">
            <div className={`h-full ${c.color} rounded-full`} style={{ width: "0%" }} />
          </div>

          <a
            href={`/lesson/${c.lessons[0].id}`}
            className="btn-3d bg-gold text-paper mono text-sm px-6 py-3.5 hover:brightness-105 inline-flex items-center gap-2 font-semibold"
            style={{ "--btn-shadow": "var(--ink)" }}
          >
            Start lesson 1
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* Winding lesson path */}
      <div
        className="relative"
        style={{
          backgroundImage: "radial-gradient(var(--ink-soft) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
          backgroundPosition: "-11px -11px",
          opacity: 1,
        }}
      >
        <div className="max-w-2xl mx-auto px-6 py-16 relative">
          <div className="absolute inset-0 bg-paper opacity-[0.94] pointer-events-none" aria-hidden="true" />
          <div className="relative flex flex-col items-center gap-2">
            {c.lessons.map((lesson, i) => {
              const offset = offsets[i % offsets.length];
              const isFirst = i === 0;
              return (
                <div key={lesson.id} className={`relative flex flex-col items-center ${offset}`}>
                  {i > 0 && (
                    <div
                      className="w-1 h-12 mb-2 rounded-full"
                      style={{
                        backgroundImage:
                          "repeating-linear-gradient(to bottom, var(--ink-soft) 0, var(--ink-soft) 6px, transparent 6px, transparent 12px)",
                        opacity: 0.4,
                      }}
                      aria-hidden="true"
                    />
                  )}
                  <a
                    href={`/lesson/${lesson.id}`}
                    className={`group relative flex items-center justify-center node-shadow ${c.color} hover:brightness-105 hover:-translate-y-0.5 active:translate-y-1 active:shadow-none transition-all rounded-full ${
                      isFirst ? "w-24 h-24 ring-4 ring-offset-4 ring-offset-paper" : "w-20 h-20"
                    }`}
                    style={isFirst ? { "--tw-ring-color": "var(--gold)" } : undefined}
                    title={lesson.title}
                  >
                    {isFirst ? (
                      <Star className="w-9 h-9 text-paper" strokeWidth={2.5} fill="currentColor" />
                    ) : (
                      <span className="mono text-paper text-lg font-bold">{i + 1}</span>
                    )}
                    <span className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-paper border-2 border-ink flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Check className="w-4 h-4" strokeWidth={3} />
                    </span>
                  </a>
                  <div className="text-center mt-3 mb-6 max-w-[11rem]">
                    <p className="display text-sm font-semibold leading-tight">{lesson.title}</p>
                    <p className="text-xs text-ink-soft mt-1">{lesson.desc}</p>
                  </div>
                </div>
              );
            })}

            <div className="relative flex flex-col items-center">
              <div
                className="w-1 h-12 mb-2 rounded-full"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(to bottom, var(--ink-soft) 0, var(--ink-soft) 6px, transparent 6px, transparent 12px)",
                  opacity: 0.4,
                }}
                aria-hidden="true"
              />
              <div className="w-16 h-16 rounded-full flex items-center justify-center bg-paper-raised border-2 border-dashed border-ink-soft/50">
                <Lock className="w-6 h-6 text-ink-soft" strokeWidth={2} />
              </div>
              <p className="mono text-xs text-ink-soft mt-3">Next level</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
