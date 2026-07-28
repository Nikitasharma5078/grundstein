// Simple client-side daily streak tracker using localStorage.
// Once Supabase is connected, swap this for a `streaks` table keyed by user_id
// so streaks survive across devices instead of living only in the browser.

const KEY = "bhashacheck_streak";

function todayISO() {
  return new Date().toISOString().slice(0, 10);
}

function daysBetween(a, b) {
  const d1 = new Date(a);
  const d2 = new Date(b);
  return Math.round((d2 - d1) / (1000 * 60 * 60 * 24));
}

export function getStreak() {
  if (typeof window === "undefined") return { count: 0, lastDate: null };
  try {
    const raw = window.localStorage.getItem(KEY);
    return raw ? JSON.parse(raw) : { count: 0, lastDate: null };
  } catch {
    return { count: 0, lastDate: null };
  }
}

// Call this whenever the user completes a lesson or a flashcard session.
// Returns the updated streak state.
export function bumpStreak() {
  if (typeof window === "undefined") return { count: 0, lastDate: null };
  const today = todayISO();
  const current = getStreak();

  let count = current.count;
  if (current.lastDate === today) {
    // already counted today, no change
  } else if (current.lastDate && daysBetween(current.lastDate, today) === 1) {
    count += 1;
  } else {
    count = 1;
  }

  const updated = { count, lastDate: today };
  window.localStorage.setItem(KEY, JSON.stringify(updated));
  return updated;
}

// True if the streak is still "alive" (activity today or yesterday).
export function isStreakActive() {
  const { lastDate } = getStreak();
  if (!lastDate) return false;
  const diff = daysBetween(lastDate, todayISO());
  return diff <= 1;
}
