"use client";
import { useState } from "react";
import { bumpStreak } from "@/lib/streak";
import { supabase } from "@/lib/supabaseClient";
import { useAuth } from "@/lib/AuthProvider";

export default function MarkComplete({ lessonId }) {
  const { user } = useAuth();
  const [done, setDone] = useState(false);
  const [syncing, setSyncing] = useState(false);

  async function handleClick() {
    bumpStreak();
    setDone(true);

    if (supabase && user) {
      setSyncing(true);
      await supabase
        .from("progress")
        .upsert(
          { user_id: user.id, lesson_id: lessonId, completed: true },
          { onConflict: "user_id,lesson_id" }
        );
      setSyncing(false);
    }
  }

  return (
    <div>
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
      {done && !user && supabase && (
        <p className="mono text-xs text-ink-soft mt-2">
          <a href="/login" className="underline">Log in</a> to save this across devices.
        </p>
      )}
      {syncing && <p className="mono text-xs text-ink-soft mt-2">Saving…</p>}
    </div>
  );
}
