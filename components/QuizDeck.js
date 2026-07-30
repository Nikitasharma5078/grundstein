"use client";
import { useState, useMemo } from "react";
import { Check, X, RotateCcw, Trophy } from "lucide-react";
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

// Build multiple-choice questions: each card's German word, with the correct
// English translation plus 3 wrong ones pulled from the rest of the deck.
function buildQuestions(cards) {
  const shuffled = shuffleArray(cards);
  return shuffled.map((card, i) => {
    const pool = cards.filter((c) => c.en !== card.en);
    const distractors = shuffleArray(pool).slice(0, 3).map((c) => c.en);
    const options = shuffleArray([card.en, ...distractors]);
    return { ...card, options, key: `${card.de}-${i}` };
  });
}

export default function QuizDeck({ cards, color }) {
  const questions = useMemo(() => buildQuestions(cards), [cards]);
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [correctCount, setCorrectCount] = useState(0);
  const [done, setDone] = useState(false);
  const q = questions[index];

  if (!cards.length || cards.length < 4) {
    return (
      <p className="text-ink-soft text-sm">
        This level needs at least 4 words for a multiple-choice test — try Flashcards instead for now.
      </p>
    );
  }

  function pick(option) {
    if (selected) return; // already answered this question
    setSelected(option);
    if (option === q.en) setCorrectCount((c) => c + 1);
  }

  function next() {
    if (index === questions.length - 1) {
      bumpStreak();
      setDone(true);
    } else {
      setSelected(null);
      setIndex((i) => i + 1);
    }
  }

  function restart() {
    setIndex(0);
    setSelected(null);
    setCorrectCount(0);
    setDone(false);
  }

  if (done) {
    const pct = Math.round((correctCount / questions.length) * 100);
    const strong = pct >= 80;
    return (
      <div className="text-center py-8 animate-fadein">
        <div className="w-20 h-20 rounded-full bg-gold flex items-center justify-center node-shadow mx-auto mb-4">
          <Trophy className="w-9 h-9 text-paper" />
        </div>
        <h3 className="display text-2xl font-semibold mb-2">
          {strong ? "Nice work!" : "Test complete"}
        </h3>
        <p className="text-ink-soft mb-1">
          {correctCount} of {questions.length} correct ({pct}%)
        </p>
        <p className="mono text-sm text-burgundy mb-8">✓ Streak updated for today</p>
        <button
          onClick={restart}
          className="btn-3d bg-gold text-paper mono text-sm px-5 py-3 hover:brightness-105 font-semibold inline-flex items-center gap-2"
          style={{ "--btn-shadow": "var(--ink)" }}
        >
          <RotateCcw className="w-4 h-4" />
          Retake test
        </button>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <p className="mono text-sm text-ink-soft">
          Question {index + 1} of {questions.length}
        </p>
        <p className="mono text-sm text-gold">{correctCount} correct</p>
      </div>
      <div className="w-full h-2 rounded-full bg-paper-raised border border-ink-soft/20 overflow-hidden mb-8">
        <div
          className={`h-full ${color} rounded-full transition-all duration-300`}
          style={{ width: `${(index / questions.length) * 100}%` }}
        />
      </div>

      <div className={`rounded-2xl border-2 border-ink ${color} p-8 mb-6 text-center relative`}>
        <p className="mono text-xs text-paper/70 mb-2">What does this mean?</p>
        <p className="display text-3xl font-semibold text-paper">{q.de}</p>
        <div className="absolute top-3 right-3">
          <SpeakButton text={q.de} className="text-paper" />
        </div>
      </div>

      <div className="grid gap-3">
        {q.options.map((opt) => {
          const isCorrect = opt === q.en;
          const isPicked = opt === selected;
          let style = "border-ink-soft/25 hover:border-ink";
          if (selected) {
            if (isCorrect) style = "border-navy bg-navy/10 text-navy";
            else if (isPicked) style = "border-burgundy bg-burgundy/10 text-burgundy";
            else style = "border-ink-soft/15 opacity-50";
          }
          return (
            <button
              key={opt}
              onClick={() => pick(opt)}
              disabled={!!selected}
              className={`flex items-center justify-between rounded-2xl border-2 px-5 py-3.5 text-left transition-all ${style}`}
            >
              <span>{opt}</span>
              {selected && isCorrect && <Check className="w-5 h-5 shrink-0" />}
              {selected && isPicked && !isCorrect && <X className="w-5 h-5 shrink-0" />}
            </button>
          );
        })}
      </div>

      {selected && (
        <button
          onClick={next}
          className="btn-3d bg-gold text-paper mono text-sm px-6 py-3.5 hover:brightness-105 font-semibold mt-8 w-full"
          style={{ "--btn-shadow": "var(--ink)" }}
        >
          {index === questions.length - 1 ? "See results" : "Next question →"}
        </button>
      )}
    </div>
  );
}
