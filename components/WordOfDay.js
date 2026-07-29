"use client";
import { useState, useMemo } from "react";
import { RefreshCw } from "lucide-react";

const WORDS = [
  { de: "die Freude", en: "joy", note: "feminine noun" },
  { de: "wandern", en: "to hike", note: "regular verb" },
  { de: "gemütlich", en: "cozy, snug", note: "adjective — very German concept" },
  { de: "der Feierabend", en: "end-of-work relaxation time", note: "masculine noun" },
  { de: "neugierig", en: "curious", note: "adjective" },
  { de: "die Reise", en: "the journey / trip", note: "feminine noun" },
  { de: "verstehen", en: "to understand", note: "irregular verb" },
];

export default function WordOfDay() {
  const start = useMemo(() => Math.floor(Math.random() * WORDS.length), []);
  const [index, setIndex] = useState(start);
  const [flipped, setFlipped] = useState(false);
  const word = WORDS[index];

  function next(e) {
    e.stopPropagation();
    setFlipped(false);
    setIndex((i) => (i + 1) % WORDS.length);
  }

  return (
    <div>
      <p className="mono text-xs text-ink-soft mb-3 tracking-widest">TAP TO TRANSLATE</p>
      <div
        className={`flip-card w-full max-w-xs h-40 cursor-pointer ${flipped ? "is-flipped" : ""}`}
        onClick={() => setFlipped((f) => !f)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && setFlipped((f) => !f)}
      >
        <div className="flip-inner relative w-full h-full">
          <div className="flip-face absolute inset-0 rounded-2xl bg-paper-raised border-2 border-ink-soft/20 flex flex-col items-center justify-center p-6 node-shadow">
            <p className="display text-2xl font-semibold text-center">{word.de}</p>
            <p className="mono text-[11px] text-ink-soft mt-2">{word.note}</p>
          </div>
          <div className="flip-face flip-back absolute inset-0 rounded-2xl bg-gold flex flex-col items-center justify-center p-6 node-shadow">
            <p className="display text-2xl font-semibold text-paper text-center">{word.en}</p>
          </div>
        </div>
      </div>
      <button
        onClick={next}
        className="mono text-xs text-ink-soft hover:text-gold flex items-center gap-1.5 mt-4"
      >
        <RefreshCw className="w-3.5 h-3.5" />
        Another word
      </button>
    </div>
  );
}
