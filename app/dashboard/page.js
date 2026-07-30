"use client";
import { useEffect, useState } from "react";
import { COURSES } from "@/data/courses";
import StreakSummary from "@/components/StreakSummary";
import { useAuth } from "@/lib/AuthProvider";
import { supabase } from "@/lib/supabaseClient";

export default function DashboardPage() {
  const { user, loading } = useAuth();
  const [progress, setProgress] = useState({});
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    if (loading) return;
    if (!supabase || !user) {
      setFetching(false);
      return;
    }
    supabase
      .from("progress")
      .select("lesson_id, completed")
      .eq("user_id", user.id)
      .then(({ data }) => {
        const map = {};
        (data || []).forEach((row) => {
          if (row.completed) map[row.lesson_id] = true;
        });
        setProgress(map);
        setFetching(false);
      });
  }, [user, loading]);

  const levels = Object.entries(COURSES);
  const totalLessons = levels.reduce((sum, [, c]) => sum + c.lessons.length, 0);
  const done = Object.values(progress).filter(Boolean).length;

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <p className="mono text-sm text-gold mb-2 tracking-widest">PROGRESS</p>
      <h1 className="display text-4xl font-semibold mb-2">Your progress</h1>
      <p className="text-ink-soft mb-2">
        {done} of {totalLessons} lessons complete across all levels.
      </p>

      {!loading && supabase && !user && (
        <p className="mono text-sm text-navy mb-10">
          <a href="/login" className="underline">Log in</a> to save and sync your progress across devices.
        </p>
      )}
      {!supabase && (
        <p className="mono text-sm text-ink-soft mb-10">
          Showing locally-tracked progress only — Supabase isn't connected yet.
        </p>
      )}
      {supabase && user && <div className="mb-10" />}

      <StreakSummary />

      <div className="space-y-10 mt-10">
        {levels.map(([key, c]) => {
          const doneInLevel = c.lessons.filter((l) => progress[l.id]).length;
          const shapeClass =
            c.shape === "circle" ? "shape-circle" : c.shape === "triangle" ? "shape-triangle" : "";
          return (
            <div key={key}>
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-6 h-6 ${c.color} ${shapeClass}`} />
                <h2 className="display text-lg font-semibold">{c.title}</h2>
                <span className="mono text-sm text-ink-soft">
                  {doneInLevel}/{c.lessons.length}
                </span>
              </div>
              <div className="flex gap-2">
                {c.lessons.map((l) => (
                  <a
                    key={l.id}
                    href={`/lesson/${l.id}`}
                    title={l.title}
                    className={`h-3 flex-1 border-2 border-ink rounded-full overflow-hidden ${
                      progress[l.id] ? c.color : "bg-paper-raised"
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
