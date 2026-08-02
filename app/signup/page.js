"use client";
import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function SignupPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState(null);

  async function handleSignup(e) {
    e.preventDefault();
    if (!supabase) {
      setStatus("Supabase isn't connected yet — see lib/supabaseClient.js for setup steps.");
      return;
    }
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { username } },
    });
    setStatus(error ? error.message : "Check your email to confirm your account.");
  }

  return (
    <div className="max-w-sm mx-auto px-6 py-20">
      <p className="mono text-sm text-gold mb-2 tracking-widest">CREATE ACCOUNT</p>
      <h1 className="display text-3xl font-semibold mb-8">Start free</h1>

      <form onSubmit={handleSignup} className="space-y-5">
        <Field label="Username" type="text" value={username} onChange={setUsername} />
        <Field label="Email" type="email" value={email} onChange={setEmail} />
        <Field label="Password" type="password" value={password} onChange={setPassword} />
        <button
          type="submit"
          className="btn-3d w-full bg-gold text-paper mono text-sm px-6 py-3.5 hover:brightness-105 font-semibold"
          style={{ "--btn-shadow": "var(--ink)" }}
        >
          Create account
        </button>
      </form>

      {status && <p className="mono text-sm text-navy mt-4">{status}</p>}

      <p className="text-base text-ink-soft mt-8">
        Already have an account?{" "}
        <a href="/login" className="text-gold underline underline-offset-4">
          Log in
        </a>
      </p>
    </div>
  );
}

function Field({ label, type, value, onChange }) {
  return (
    <label className="block">
      <span className="mono text-sm text-ink-soft block mb-2">{label}</span>
      <input
        type={type}
        required
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-2xl border-2 border-ink bg-paper-raised px-4 py-2.5 text-sm outline-none"
      />
    </label>
  );
}
