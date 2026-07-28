// Central course data. Replace/expand this as you add real lesson content.
// Every lesson's `vocab` array also powers the flashcard deck for that level.
export const COURSES = {
  a1: {
    level: "A1",
    band: "Grundstufe",
    shape: "circle",
    color: "bg-gold",
    title: "Foundations",
    desc: "Greetings, the alphabet, basic sentence structure.",
    lessons: [
      { id: "a1-1", title: "Hallo & Guten Tag", desc: "Greetings and introductions", vocab: [
        ["Hallo", "Hello"], ["Guten Tag", "Good day"], ["Wie geht's?", "How are you?"], ["Danke", "Thank you"],
      ] },
      { id: "a1-2", title: "Der, die, das", desc: "Gendered articles", vocab: [
        ["der Mann", "the man"], ["die Frau", "the woman"], ["das Kind", "the child"], ["der Tisch", "the table"],
      ] },
      { id: "a1-3", title: "Zahlen 1–100", desc: "Numbers and counting", vocab: [
        ["eins", "one"], ["zehn", "ten"], ["zwanzig", "twenty"], ["hundert", "hundred"],
      ] },
      { id: "a1-4", title: "Sein und Haben", desc: "To be and to have", vocab: [
        ["ich bin", "I am"], ["du hast", "you have"], ["er ist", "he is"], ["wir haben", "we have"],
      ] },
      { id: "a1-5", title: "Familie", desc: "Family members", vocab: [
        ["die Mutter", "the mother"], ["der Vater", "the father"], ["die Schwester", "the sister"], ["der Bruder", "the brother"],
      ] },
      { id: "a1-6", title: "Farben", desc: "Colours", vocab: [
        ["rot", "red"], ["blau", "blue"], ["grün", "green"], ["gelb", "yellow"],
      ] },
    ],
  },
  a2: {
    level: "A2",
    band: "Grundstufe",
    shape: "circle",
    color: "bg-gold",
    title: "Everyday German",
    desc: "Shopping, directions, simple past tense.",
    lessons: [
      { id: "a2-1", title: "Einkaufen", desc: "Shopping vocabulary", vocab: [
        ["der Supermarkt", "the supermarket"], ["kaufen", "to buy"], ["kosten", "to cost"], ["billig", "cheap"],
      ] },
      { id: "a2-2", title: "Wegbeschreibung", desc: "Giving directions", vocab: [
        ["links", "left"], ["rechts", "right"], ["geradeaus", "straight ahead"], ["die Straße", "the street"],
      ] },
      { id: "a2-3", title: "Perfekt", desc: "The conversational past", vocab: [
        ["ich habe gemacht", "I made/did"], ["ich bin gegangen", "I went"], ["gestern", "yesterday"], ["letzte Woche", "last week"],
      ] },
      { id: "a2-4", title: "Essen & Trinken", desc: "Food and drink", vocab: [
        ["das Brot", "the bread"], ["das Wasser", "the water"], ["lecker", "delicious"], ["der Kaffee", "the coffee"],
      ] },
      { id: "a2-5", title: "Wetter", desc: "Talking about weather", vocab: [
        ["es regnet", "it's raining"], ["die Sonne", "the sun"], ["kalt", "cold"], ["warm", "warm"],
      ] },
    ],
  },
  b1: {
    level: "B1",
    band: "Aufbaustufe",
    shape: "square",
    color: "bg-navy",
    title: "Opinions & Experience",
    desc: "Expressing opinions, connectors, Präteritum.",
    lessons: [
      { id: "b1-1", title: "Meiner Meinung nach", desc: "Giving opinions", vocab: [
        ["meiner Meinung nach", "in my opinion"], ["ich finde", "I think/find"], ["einerseits", "on one hand"], ["andererseits", "on the other hand"],
      ] },
      { id: "b1-2", title: "Präteritum", desc: "Simple past for narration", vocab: [
        ["ich war", "I was"], ["ich hatte", "I had"], ["es gab", "there was/were"], ["damals", "back then"],
      ] },
      { id: "b1-3", title: "Nebensätze", desc: "Subordinate clauses", vocab: [
        ["weil", "because"], ["obwohl", "although"], ["dass", "that"], ["wenn", "if/when"],
      ] },
      { id: "b1-4", title: "Reisen", desc: "Travel vocabulary", vocab: [
        ["der Flughafen", "the airport"], ["die Reise", "the trip"], ["buchen", "to book"], ["das Gepäck", "the luggage"],
      ] },
    ],
  },
  b2: {
    level: "B2",
    band: "Aufbaustufe",
    shape: "square",
    color: "bg-navy",
    title: "Professional German",
    desc: "Workplace language, formal writing, Konjunktiv II.",
    lessons: [
      { id: "b2-1", title: "Konjunktiv II", desc: "The conditional mood", vocab: [
        ["ich würde", "I would"], ["ich könnte", "I could"], ["wenn ich Zeit hätte", "if I had time"], ["an deiner Stelle", "in your place"],
      ] },
      { id: "b2-2", title: "Geschäftskorrespondenz", desc: "Formal emails", vocab: [
        ["Sehr geehrte Damen und Herren", "Dear Sir or Madam"], ["mit freundlichen Grüßen", "kind regards"], ["der Anhang", "the attachment"], ["die Bewerbung", "the application"],
      ] },
      { id: "b2-3", title: "Im Büro", desc: "Workplace vocabulary", vocab: [
        ["die Besprechung", "the meeting"], ["die Frist", "the deadline"], ["der Kollege", "the colleague"], ["der Bericht", "the report"],
      ] },
    ],
  },
  c1: {
    level: "C1",
    band: "Fortgeschritten",
    shape: "triangle",
    color: "bg-burgundy",
    title: "Fluency & Nuance",
    desc: "Idioms, passive voice, near-native precision.",
    lessons: [
      { id: "c1-1", title: "Passiv", desc: "Passive voice constructions", vocab: [
        ["es wird gemacht", "it is being made"], ["es wurde gebaut", "it was built"], ["von", "by"], ["die Handlung", "the action"],
      ] },
      { id: "c1-2", title: "Redewendungen", desc: "Idioms and set phrases", vocab: [
        ["die Daumen drücken", "to keep fingers crossed"], ["ins Wasser fallen", "to fall through (plan)"], ["auf dem Laufenden sein", "to be up to date"], ["den Nagel auf den Kopf treffen", "to hit the nail on the head"],
      ] },
      { id: "c1-3", title: "Nuancierte Meinungen", desc: "Nuanced argumentation", vocab: [
        ["dennoch", "nevertheless"], ["insofern", "insofar as"], ["nichtsdestotrotz", "nonetheless"], ["differenziert betrachten", "to consider critically"],
      ] },
    ],
  },
};
