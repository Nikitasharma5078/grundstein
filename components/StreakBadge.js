"use client";
import { useEffect, useState } from "react";
import { Flame } from "lucide-react";
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
      className={`mono text-xs font-bold flex items-center gap-1.5 pl-2 pr-3 py-1.5 rounded-full border-2 ${
        active
          ? "bg-burgundy text-paper border-burgundy"
          : "bg-paper-raised text-ink-soft border-ink-soft/30"
      }`}
      title={active ? "Streak active — keep it going today" : "Streak at risk — practice today to keep it"}
    >
      <Flame className="w-4 h-4" fill={active ? "currentColor" : "none"} strokeWidth={2.5} />
      {streak.count}
    </span>
  );
}
