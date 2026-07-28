"use client";
import { useEffect, useState } from "react";
import { getStreak, isStreakActive } from "@/lib/streak";

export default function StreakBadge() {
  const [streak, setStreak] = useState(null);

  useEffect(() => {
    setStreak(getStreak());
  }, []);

  if (!streak || streak.count === 0) return null;
  const active = isStreakActive();

  return (
    <span
      className={`mono text-xs flex items-center gap-1.5 px-2.5 py-1 border-2 border-ink ${
        active ? "bg-burgundy text-paper" : "bg-paper-raised text-ink-soft"
      }`}
      title={active ? "Streak active — keep it going today" : "Streak at risk — practice today to keep it"}
    >
      <span aria-hidden="true">●</span>
      {streak.count} day{streak.count === 1 ? "" : "s"}
    </span>
  );
}
