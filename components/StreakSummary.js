"use client";
import { useEffect, useState } from "react";
import { getStreak, isStreakActive } from "@/lib/streak";

export default function StreakSummary() {
  const [streak, setStreak] = useState(null);

  useEffect(() => {
    setStreak(getStreak());
  }, []);

  if (!streak) return null;
  const active = isStreakActive();

  return (
    <div className="border-2 border-ink p-6 mb-10 flex items-center justify-between bg-paper-raised">
      <div>
        <p className="mono text-xs text-ink-soft mb-1">DAILY STREAK</p>
        <p className="display text-3xl font-semibold">
          {streak.count} {streak.count === 1 ? "day" : "days"}
        </p>
      </div>
      <p className="mono text-xs text-ink-soft max-w-[10rem] text-right">
        {streak.count === 0
          ? "Complete a lesson or a flashcard deck to start your streak."
          : active
          ? "Active — come back tomorrow to keep it alive."
          : "Streak at risk — practice today."}
      </p>
    </div>
  );
}
