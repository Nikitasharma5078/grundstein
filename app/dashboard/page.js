import { COURSES } from "@/data/courses";
import StreakSummary from "@/components/StreakSummary";

// Placeholder progress data — once Supabase is connected, replace this
// with a real query against the `progress` table for the logged-in user.
const MOCK_PROGRESS = { "a1-1": true, "a1-2": true, "a1-3": false, "a1-4": false };

export default function DashboardPage() {
  const levels = Object.entries(COURSES);
  const totalLessons = levels.reduce((sum, [, c]) => sum + c.lessons.length, 0);
  const done = Object.values(MOCK_PROGRESS).filter(Boolean).length;

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <p className="mono text-xs text-gold mb-2 tracking-widest">PROGRESS</p>
      <h1 className="display text-4xl font-semibold mb-2">Your progress</h1>
      <p className="text-ink-soft mb-10">
        {done} of {totalLessons} lessons complete across all levels.
      </p>

      <StreakSummary />

      <div className="space-y-10">
        {levels.map(([key, c]) => {
          const doneInLevel = c.lessons.filter((l) => MOCK_PROGRESS[l.id]).length;
          const shapeClass =
            c.shape === "circle" ? "shape-circle" : c.shape === "triangle" ? "shape-triangle" : "";
          return (
            <div key={key}>
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-6 h-6 ${c.color} ${shapeClass}`} />
                <h2 className="display text-lg font-semibold">{c.title}</h2>
                <span className="mono text-xs text-ink-soft">
                  {doneInLevel}/{c.lessons.length}
                </span>
              </div>
              <div className="flex gap-2">
                {c.lessons.map((l) => (
                  <a
                    key={l.id}
                    href={`/lesson/${l.id}`}
                    title={l.title}
                    className={`h-3 flex-1 border-2 border-ink ${
                      MOCK_PROGRESS[l.id] ? c.color : "bg-paper-raised"
                    }`}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
