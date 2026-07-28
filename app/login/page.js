"use client";
import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState(null);

  async function handleLogin(e) {
    e.preventDefault();
    if (!supabase) {
      setStatus("Supabase isn't connected yet — see lib/supabaseClient.js for setup steps.");
      return;
    }
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setStatus(error ? error.message : "Logged in.");
  }

  return (
    <div className="max-w-sm mx-auto px-6 py-20">
      <p className="mono text-xs text-red mb-2 tracking-widest">ANMELDEN</p>
      <h1 className="display text-3xl font-semibold mb-8">Log in</h1>

      <form onSubmit={handleLogin} className="space-y-5">
        <Field label="Email" type="email" value={email} onChange={setEmail} />
        <Field label="Password" type="password" value={password} onChange={setPassword} />
        <button
          type="submit"
          className="w-full bg-ink text-paper mono text-sm px-6 py-3 hover:bg-red transition-colors"
        >
          Log in
        </button>
      </form>

      {status && <p className="mono text-xs text-blue mt-4">{status}</p>}

      <p className="text-sm text-ink-soft mt-8">
        New here?{" "}
        <a href="/signup" className="text-red underline underline-offset-4">
          Create an account
        </a>
      </p>
    </div>
  );
}

function Field({ label, type, value, onChange }) {
  return (
    <label className="block">
      <span className="mono text-xs text-ink-soft block mb-2">{label}</span>
      <input
        type={type}
        required
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full border-2 border-ink bg-paper-raised px-4 py-2.5 text-sm outline-none"
      />
    </label>
  );
}
