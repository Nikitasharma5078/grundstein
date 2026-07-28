import { COURSES } from "@/data/courses";
import { notFound } from "next/navigation";
import FlashcardDeck from "@/components/FlashcardDeck";

export default async function FlashcardLevelPage({ params }) {
  const { level } = await params;
  const c = COURSES[level];
  if (!c) return notFound();

  const cards = c.lessons.flatMap((l) => l.vocab.map(([de, en]) => ({ de, en, lesson: l.title })));

  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <a href="/flashcards" className="mono text-xs text-ink-soft hover:text-gold">← All levels</a>
      <p className="mono text-xs text-gold mt-6 mb-2 tracking-widest">{c.level} · FLASHCARDS</p>
      <h1 className="display text-3xl font-semibold mb-10">{c.title}</h1>

      <FlashcardDeck cards={cards} color={c.color} />
    </div>
  );
}
