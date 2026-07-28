import { COURSES } from "@/data/courses";
import { notFound } from "next/navigation";

function findLesson(id) {
  for (const key of Object.keys(COURSES)) {
    const course = COURSES[key];
    const lesson = course.lessons.find((l) => l.id === id);
    if (lesson) return { lesson, course, levelKey: key };
  }
  return null;
}

export default async function LessonPage({ params }) {
  const { id } = await params;
  const found = findLesson(id);
  if (!found) return notFound();
  const { lesson, course, levelKey } = found;

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <a href={`/courses/${levelKey}`} className="mono text-xs text-ink-soft hover:text-red">
        ← {course.title}
      </a>

      <p className="mono text-xs text-red mt-6 mb-2 tracking-widest">
        {course.level} · LEKTION
      </p>
      <h1 className="display text-4xl font-semibold mb-10">{lesson.title}</h1>

      <Section label="Wortschatz" title="Vocabulary">
        <p className="text-ink-soft text-sm mb-4">
          Placeholder vocabulary table — replace with real words for this lesson.
        </p>
        <div className="border-2 border-ink">
          {[
            ["das Wort", "the word"],
            ["der Satz", "the sentence"],
            ["die Übung", "the exercise"],
          ].map(([de, en]) => (
            <div key={de} className="flex border-b-2 border-ink last:border-b-0">
              <div className="w-1/2 p-3 mono text-sm border-r-2 border-ink">{de}</div>
              <div className="w-1/2 p-3 text-sm text-ink-soft">{en}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section label="Grammatik" title="Grammar">
        <p className="text-ink-soft text-sm">
          Explain the grammar point for this lesson here — rule, example sentences,
          and a short note on common mistakes.
        </p>
      </Section>

      <Section label="Übung" title="Exercise">
        <div className="border-2 border-ink p-6">
          <p className="text-sm mb-4">Fill in the blank: <span className="mono">Ich ___ Student.</span></p>
          <div className="flex gap-2">
            {["bin", "bist", "ist"].map((opt) => (
              <button
                key={opt}
                className="mono text-sm border-2 border-ink px-4 py-2 hover:bg-ink hover:text-paper transition-colors"
              >
                {opt}
              </button>
            ))}
          </div>
          <p className="text-xs text-ink-soft mt-4">
            Wire this up to actual answer-checking logic once Supabase progress tracking is connected.
          </p>
        </div>
      </Section>

      <button className="bg-red text-paper mono text-sm px-6 py-3 hover:bg-ink transition-colors mt-6">
        Mark lesson complete
      </button>
    </div>
  );
}

function Section({ label, title, children }) {
  return (
    <div className="mb-12">
      <p className="mono text-xs text-blue mb-2 tracking-widest">{label.toUpperCase()}</p>
      <h2 className="display text-xl font-semibold mb-4">{title}</h2>
      {children}
    </div>
  );
}
