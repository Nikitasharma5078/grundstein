"use client";
import { useState } from "react";

export default function CourseTabs({ bands, courses }) {
  const [active, setActive] = useState(0);
  const band = bands[active];

  const tabColor = (b) =>
    b.key === "grundstufe" ? "var(--gold)" : b.key === "aufbaustufe" ? "var(--navy)" : "var(--burgundy)";

  return (
    <div>
      {/* Tab pills */}
      <div className="flex flex-wrap gap-3 mb-10" role="tablist" aria-label="Course level bands">
        {bands.map((b, i) => {
          const isActive = i === active;
          return (
            <button
              key={b.key}
              role="tab"
              aria-selected={isActive}
              onClick={() => setActive(i)}
              className={`mono text-xs font-bold px-5 py-3 rounded-full border-2 transition-all duration-200 ${
                isActive
                  ? "text-paper scale-105 node-shadow"
                  : "text-ink-soft border-ink-soft/30 hover:border-ink-soft hover:text-ink"
              }`}
              style={
                isActive
                  ? { backgroundColor: tabColor(b), borderColor: tabColor(b) }
                  : undefined
              }
            >
              {b.name.toUpperCase()}
              <span className="ml-2 opacity-70 font-normal">{b.levels.length} level{b.levels.length > 1 ? "s" : ""}</span>
            </button>
          );
        })}
      </div>

      {/* Active band panel */}
      <div key={band.key} className="animate-fadein">
        <h2 className="display text-2xl font-semibold mb-1">
          {band.name} <span className="italic text-ink-soft text-lg font-normal">— {band.sub}</span>
        </h2>
        <p className="text-ink-soft mb-8 max-w-xl">{band.desc}</p>

        <div
          className={`grid ${
            band.levels.length > 1 ? "sm:grid-cols-2" : "sm:grid-cols-1 max-w-sm"
          } gap-4`}
        >
          {band.levels.map((lvl) => {
            const c = courses[lvl];
            const shapeClass =
              c.shape === "circle" ? "shape-circle" : c.shape === "triangle" ? "shape-triangle" : "";
            return (
              <a
                key={lvl}
                href={`/courses/${lvl}`}
                className="group bg-paper-raised p-8 flex gap-6 items-start rounded-2xl border-2 border-ink-soft/15 hover:border-ink hover:-translate-y-1 hover:shadow-lg transition-all duration-200"
              >
                <div
                  className={`w-12 h-12 shrink-0 ${c.color} ${shapeClass} flex items-center justify-center group-hover:scale-110 transition-transform`}
                >
                  <span className="mono text-paper text-[10px] font-bold">{c.level}</span>
                </div>
                <div>
                  <p className="mono text-xs text-ink-soft mb-1">{c.level}</p>
                  <h3 className="display text-xl font-semibold mb-2">{c.title}</h3>
                  <p className="text-sm text-ink-soft mb-3">{c.desc}</p>
                  <p className="mono text-xs text-gold flex items-center gap-1 group-hover:gap-2 transition-all">
                    {c.lessons.length} lessons
                    <span aria-hidden="true">→</span>
                  </p>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
