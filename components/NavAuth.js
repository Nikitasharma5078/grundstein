"use client";
import { useAuth } from "@/lib/AuthProvider";
import { supabase } from "@/lib/supabaseClient";
import { LogOut } from "lucide-react";

export default function NavAuth() {
  const { user, loading } = useAuth();

  if (loading) return null;

  if (!user) {
    return (
      <>
        <a href="/login" className="hover:text-gold transition-colors">Log in</a>
        <a
          href="/signup"
          className="btn-3d bg-gold text-paper px-5 py-2.5 hover:brightness-105 font-semibold text-base"
          style={{ "--btn-shadow": "var(--ink)" }}
        >
          Start free
        </a>
      </>
    );
  }

  return (
    <>
      <span className="text-ink-soft text-sm max-w-[10rem] truncate" title={user.email}>
        {user.email}
      </span>
      <button
        onClick={() => supabase.auth.signOut()}
        className="hover:text-gold transition-colors flex items-center gap-1.5"
      >
        <LogOut className="w-4 h-4" />
        Log out
      </button>
    </>
  );
}
