# Grundstein — Learn German A1 → C1

A German learning platform: course levels, lesson pages, login/signup, and a
progress dashboard. Design system is Bauhaus-inspired (circle/square/triangle
mark the three CEFR bands throughout the site) since Bauhaus is itself a
German design movement.

## What's already built
- Homepage, `/courses` (level grid), `/courses/[level]` (lesson list)
- `/lesson/[id]` lesson template (vocab / grammar / exercise)
- `/login`, `/signup` (wired for Supabase Auth — currently shows a friendly
  message until you connect real keys)
- `/dashboard` progress view (currently mock data)
- Course/lesson content lives in `data/courses.js` — edit that file to add
  real lessons, no component code required

## Run it locally
```bash
npm install
npm run dev
```
Open http://localhost:3000

## Push to your GitHub
```bash
git init
git add .
git commit -m "init"
git remote add origin <your-repo-url>
git branch -M main
git push -u origin main
```

## Deploy (always-on, free)
1. Go to vercel.com → sign in with GitHub → "New Project" → import this repo
2. Vercel auto-detects Next.js and deploys — you get a live URL immediately
3. Every future `git push` to `main` auto-redeploys, so the site stays live
   with zero manual steps

## Connect real login + progress tracking
1. Create a free project at https://supabase.com
2. In Project Settings → API, copy the Project URL and anon public key
3. Create `.env.local` in the project root:
   ```
   NEXT_PUBLIC_SUPABASE_URL=your-project-url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
   ```
4. In Supabase, create a `progress` table: `user_id`, `lesson_id`, `completed`, `score`
5. Add the same two env vars in Vercel → Project Settings → Environment Variables
   (so the live site can log in too)
6. Replace the `MOCK_PROGRESS` object in `app/dashboard/page.js` with a real
   Supabase query filtered by the logged-in user

## Add more lessons
Everything is driven by `data/courses.js`. Add a lesson object to any level's
`lessons` array and it automatically appears in that level's list and gets
its own `/lesson/[id]` page using the existing template.
