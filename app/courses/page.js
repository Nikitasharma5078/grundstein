import { COURSES } from "@/data/courses";
import CourseTabs from "@/components/CourseTabs";

const BANDS = [
  {
    name: "Beginner",
    sub: "Grundstufe",
    key: "grundstufe",
    levels: ["a1", "a2"],
    desc: "Everyday phrases, introductions, and the present tense — start from zero.",
  },
  {
    name: "Intermediate",
    sub: "Aufbaustufe",
    key: "aufbaustufe",
    levels: ["b1", "b2"],
    desc: "Opinions, past tense, and the German you'd need at work or while travelling.",
  },
  {
    name: "Advanced",
    sub: "Fortgeschritten",
    key: "fortgeschritten",
    levels: ["c1"],
    desc: "Nuance, the subjunctive mood, and the polish that gets you to near-native fluency.",
  },
];

export default function CoursesPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <p className="mono text-xs text-gold mb-3 tracking-widest">ALL COURSES</p>
      <h1 className="display text-4xl font-semibold mb-3">Choose your level</h1>
      <p className="text-ink-soft mb-10 max-w-lg">Tap a band to see what's inside.</p>

      <CourseTabs bands={BANDS} courses={COURSES} />
    </div>
  );
}
