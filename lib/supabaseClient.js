// Supabase client setup.
// 1. Create a free project at https://supabase.com
// 2. In Project Settings > API, copy the Project URL and anon public key
// 3. Add them to a .env.local file in the project root:
//      NEXT_PUBLIC_SUPABASE_URL=your-project-url
//      NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
// 4. Run: npm install @supabase/supabase-js
//
// This file is safe to import anywhere — it no-ops with a clear error
// if the env vars aren't set yet, instead of crashing the build.

import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const supabase =
  supabaseUrl && supabaseKey ? createClient(supabaseUrl, supabaseKey) : null;

export function requireSupabase() {
  if (!supabase) {
    throw new Error(
      "Supabase isn't configured yet. Add NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY to .env.local"
    );
  }
  return supabase;
}
