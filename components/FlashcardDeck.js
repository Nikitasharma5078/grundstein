"use client";
import { useState } from "react";
import { bumpStreak } from "@/lib/streak";

export default function FlashcardDeck({ cards, color }) {
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [seenLast, setSeenLast] = useState(false);
  const card = cards[index];

  function next() {
    setFlipped(false);
    if (index === cards.length - 1) {
      if (!seenLast) {
        bumpStreak();
        setSeenLast(true);
      }
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }

  function prev() {
    setFlipped(false);
    setIndex(index === 0 ? cards.length - 1 : index - 1);
  }

  if (!cards.length) {
    return <p className="text-ink-soft text-sm">No vocabulary yet for this level.</p>;
  }

  return (
    <div>
      <p className="mono text-xs text-ink-soft mb-4">
        Card {index + 1} of {cards.length} · {card.lesson}
      </p>

      <button
        onClick={() => setFlipped(!flipped)}
        className={`w-full h-56 border-2 border-ink flex items-center justify-center text-center p-8 transition-colors ${
          flipped ? "bg-paper-raised" : color
        }`}
      >
        <span className={`display text-3xl font-semibold ${flipped ? "text-ink" : "text-paper"}`}>
          {flipped ? card.en : card.de}
        </span>
      </button>
      <p className="mono text-xs text-ink-soft text-center mt-3">Tap the card to flip</p>

      <div className="flex gap-3 mt-8">
        <button
          onClick={prev}
          className="flex-1 mono text-sm border-2 border-ink px-4 py-3 hover:bg-ink hover:text-paper transition-colors"
        >
          ← Previous
        </button>
        <button
          onClick={next}
          className="flex-1 bg-gold text-paper mono text-sm px-4 py-3 hover:bg-ink transition-colors"
        >
          Next →
        </button>
      </div>

      {seenLast && (
        <p className="mono text-xs text-burgundy mt-4 text-center">
          ✓ Deck complete — streak updated for today
        </p>
      )}
    </div>
  );
}
