"use client";
import { useState } from "react";
import { Volume2 } from "lucide-react";
import { speakGerman } from "@/lib/speak";

export default function SpeakButton({ text, size = "md", className = "" }) {
  const [playing, setPlaying] = useState(false);

  function handleClick(e) {
    e.stopPropagation(); // don't trigger a parent flip-card/link click
    e.preventDefault();
    const ok = speakGerman(text);
    if (!ok) return;
    setPlaying(true);
    setTimeout(() => setPlaying(false), 900);
  }

  const dim = size === "sm" ? "w-7 h-7" : "w-9 h-9";
  const icon = size === "sm" ? "w-3.5 h-3.5" : "w-4 h-4";

  return (
    <button
      onClick={handleClick}
      aria-label={`Hear "${text}" pronounced`}
      title="Hear pronunciation"
      className={`${dim} rounded-full border-2 border-current flex items-center justify-center shrink-0 transition-transform ${
        playing ? "scale-90" : "hover:scale-110"
      } ${className}`}
    >
      <Volume2 className={icon} strokeWidth={2.5} />
    </button>
  );
}
