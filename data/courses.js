// Central course data. Replace/expand this as you add real lesson content.
export const COURSES = {
  a1: {
    level: "A1",
    band: "Grundstufe",
    shape: "circle",
    color: "bg-red",
    title: "Foundations",
    desc: "Greetings, the alphabet, basic sentence structure.",
    lessons: [
      { id: "a1-1", title: "Hallo & Guten Tag", desc: "Greetings and introductions" },
      { id: "a1-2", title: "Der, die, das", desc: "Gendered articles" },
      { id: "a1-3", title: "Zahlen 1–100", desc: "Numbers and counting" },
      { id: "a1-4", title: "Sein und Haben", desc: "To be and to have" },
    ],
  },
  a2: {
    level: "A2",
    band: "Grundstufe",
    shape: "circle",
    color: "bg-red",
    title: "Everyday German",
    desc: "Shopping, directions, simple past tense.",
    lessons: [
      { id: "a2-1", title: "Einkaufen", desc: "Shopping vocabulary" },
      { id: "a2-2", title: "Wegbeschreibung", desc: "Giving directions" },
      { id: "a2-3", title: "Perfekt", desc: "The conversational past" },
    ],
  },
  b1: {
    level: "B1",
    band: "Aufbaustufe",
    shape: "square",
    color: "bg-blue",
    title: "Opinions & Experience",
    desc: "Expressing opinions, connectors, Präteritum.",
    lessons: [
      { id: "b1-1", title: "Meiner Meinung nach", desc: "Giving opinions" },
      { id: "b1-2", title: "Präteritum", desc: "Simple past for narration" },
      { id: "b1-3", title: "Nebensätze", desc: "Subordinate clauses" },
    ],
  },
  b2: {
    level: "B2",
    band: "Aufbaustufe",
    shape: "square",
    color: "bg-blue",
    title: "Professional German",
    desc: "Workplace language, formal writing, Konjunktiv II.",
    lessons: [
      { id: "b2-1", title: "Konjunktiv II", desc: "The conditional mood" },
      { id: "b2-2", title: "Geschäftskorrespondenz", desc: "Formal emails" },
    ],
  },
  c1: {
    level: "C1",
    band: "Fortgeschritten",
    shape: "triangle",
    color: "bg-yellow",
    title: "Fluency & Nuance",
    desc: "Idioms, passive voice, near-native precision.",
    lessons: [
      { id: "c1-1", title: "Passiv", desc: "Passive voice constructions" },
      { id: "c1-2", title: "Redewendungen", desc: "Idioms and set phrases" },
    ],
  },
};
