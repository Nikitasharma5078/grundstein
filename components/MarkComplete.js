"use client";
import { useState } from "react";
import { bumpStreak } from "@/lib/streak";

export default function MarkComplete({ lessonId }) {
  const [done, setDone] = useState(false);

  function handleClick() {
    // Once Supabase is connected, also write { user_id, lesson_id, completed: true }
    // to the `progress` table here instead of just the local streak.
    bumpStreak();
    setDone(true);
  }

  return (
    <button
      onClick={handleClick}
      disabled={done}
      className={`mono text-sm px-6 py-3.5 mt-6 font-semibold ${
        done
          ? "bg-paper-raised text-ink-soft border-2 border-ink rounded-2xl"
          : "btn-3d bg-gold text-paper hover:brightness-105"
      }`}
      style={!done ? { "--btn-shadow": "var(--ink)" } : undefined}
    >
      {done ? "✓ Lesson complete — streak updated" : "Mark lesson complete"}
    </button>
  );
}
