// Pronunciation via the browser's built-in Web Speech API — free, no API key,
// works offline-ish (uses the OS/browser's own voices). Falls back silently
// if the browser doesn't support it (rare, but some older/embedded browsers).
export function speakGerman(text) {
  if (typeof window === "undefined" || !window.speechSynthesis) return false;

  window.speechSynthesis.cancel(); // stop anything already playing
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "de-DE";
  utterance.rate = 0.9; // slightly slower — easier for beginners to follow

  const voices = window.speechSynthesis.getVoices();
  const germanVoice = voices.find((v) => v.lang.startsWith("de"));
  if (germanVoice) utterance.voice = germanVoice;

  window.speechSynthesis.speak(utterance);
  return true;
}

export function speechSupported() {
  return typeof window !== "undefined" && !!window.speechSynthesis;
}
