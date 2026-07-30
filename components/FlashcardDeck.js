"use client";
import { useState, useEffect, useCallback } from "react";
import { Shuffle, PartyPopper } from "lucide-react";
import { bumpStreak } from "@/lib/streak";
import SpeakButton from "@/components/SpeakButton";

function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function FlashcardDeck({ cards: initialCards, color }) {
  const [cards, setCards] = useState(initialCards);
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [known, setKnown] = useState(0);
  const [learning, setLearning] = useState(0);
  const [celebrate, setCelebrate] = useState(false);
  const card = cards[index];
  const isLast = index === cards.length - 1;

  const advance = useCallback(
    (gotIt) => {
      if (gotIt) setKnown((k) => k + 1);
      else setLearning((l) => l + 1);

      if (isLast) {
        bumpStreak();
        setCelebrate(true);
      } else {
        setFlipped(false);
        setIndex((i) => i + 1);
      }
    },
    [isLast]
  );

  function restart(reshuffle) {
    setCards(reshuffle ? shuffleArray(initialCards) : initialCards);
    setIndex(0);
    setFlipped(false);
    setKnown(0);
    setLearning(0);
    setCelebrate(false);
  }

  useEffect(() => {
    function onKey(e) {
      if (celebrate) return;
      if (e.code === "Space") {
        e.preventDefault();
        setFlipped((f) => !f);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [celebrate]);

  if (!cards.length) {
    return <p className="text-ink-soft text-sm">No vocabulary yet for this level.</p>;
  }

  if (celebrate) {
    const total = known + learning;
    const pct = Math.round((known / total) * 100);
    return (
      <div className="text-center py-8 animate-fadein">
        <div className="relative inline-block mb-4">
          <div className="w-20 h-20 rounded-full bg-gold flex items-center justify-center node-shadow mx-auto animate-bounce-slow">
            <PartyPopper className="w-9 h-9 text-paper" />
          </div>
        </div>
        <h3 className="display text-2xl font-semibold mb-2">Deck complete!</h3>
        <p className="text-ink-soft mb-1">
          {known} of {total} known on the first pass ({pct}%)
        </p>
        <p className="mono text-sm text-burgundy mb-8">✓ Streak updated for today</p>
        <div className="flex gap-3 justify-center">
          <button
            onClick={() => restart(false)}
            className="mono text-sm border-2 border-ink rounded-2xl px-5 py-3 hover:bg-ink hover:text-paper transition-colors"
          >
            Go again
          </button>
          <button
            onClick={() => restart(true)}
            className="btn-3d bg-gold text-paper mono text-sm px-5 py-3 hover:brightness-105 font-semibold flex items-center gap-2"
            style={{ "--btn-shadow": "var(--ink)" }}
          >
            <Shuffle className="w-4 h-4" />
            Shuffle & retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Progress bar */}
      <div className="flex items-center justify-between mb-3">
        <p className="mono text-sm text-ink-soft">
          Card {index + 1} of {cards.length} · {card.lesson}
        </p>
        <button
          onClick={() => restart(true)}
          title="Shuffle deck"
          className="mono text-sm text-ink-soft hover:text-gold flex items-center gap-1.5"
        >
          <Shuffle className="w-3.5 h-3.5" />
          Shuffle
        </button>
      </div>
      <div className="w-full h-2 rounded-full bg-paper-raised border border-ink-soft/20 overflow-hidden mb-6">
        <div
          className={`h-full ${color} rounded-full transition-all duration-300`}
          style={{ width: `${((index + (flipped ? 0.5 : 0)) / cards.length) * 100}%` }}
        />
      </div>

      {/* Card stack: faint peek of the next card behind */}
      <div className="relative">
        {!isLast && (
          <div
            className={`absolute inset-x-3 top-3 h-56 rounded-2xl border-2 border-ink-soft/20 ${color} opacity-30`}
            aria-hidden="true"
          />
        )}
        <div className={`flip-card relative w-full h-56 ${flipped ? "is-flipped" : ""}`}>
          <div className="flip-inner relative w-full h-full">
            <button
              onClick={() => setFlipped(true)}
              className={`flip-face absolute inset-0 rounded-2xl border-2 border-ink flex items-center justify-center text-center p-8 node-shadow ${color}`}
            >
              <span className="display text-3xl font-semibold text-paper">{card.de}</span>
              <div className="absolute top-3 right-3">
                <SpeakButton text={card.de} className="text-paper" />
              </div>
            </button>
            <button
              onClick={() => setFlipped(false)}
              className="flip-face flip-back absolute inset-0 rounded-2xl border-2 border-ink flex items-center justify-center text-center p-8 node-shadow bg-paper-raised"
            >
              <span className="display text-3xl font-semibold text-ink">{card.en}</span>
            </button>
          </div>
        </div>
      </div>
      <p className="mono text-sm text-ink-soft text-center mt-3">
        Tap the card to flip · Space bar works too
      </p>

      {flipped ? (
        <div className="flex gap-3 mt-8">
          <button
            onClick={() => advance(false)}
            className="flex-1 mono text-sm rounded-2xl border-2 border-ink px-4 py-3.5 hover:bg-paper-raised transition-colors"
          >
            Still learning
          </button>
          <button
            onClick={() => advance(true)}
            className="flex-1 btn-3d bg-gold text-paper mono text-sm px-4 py-3.5 hover:brightness-105 font-semibold"
            style={{ "--btn-shadow": "var(--ink)" }}
          >
            I know it ✓
          </button>
        </div>
      ) : (
        <div className="mt-8 text-center">
          <button
            onClick={() => setFlipped(true)}
            className="mono text-sm text-ink-soft hover:text-gold"
          >
            Flip to see the answer →
          </button>
        </div>
      )}
    </div>
  );
}
