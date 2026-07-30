import "./globals.css";
import StreakBadge from "@/components/StreakBadge";
import NavAuth from "@/components/NavAuth";
import { AuthProvider } from "@/lib/AuthProvider";

export const metadata = {
  title: "BhashaCheck — Learn German",
  description: "Learn German from A1 to C1. Structured lessons, real progress tracking.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <div className="min-h-screen flex flex-col">
            <Nav />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}

function Nav() {
  return (
    <header className="border-b-2 border-ink">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <a href="/" className="flex items-center gap-2 group">
          <svg width="28" height="28" viewBox="0 0 28 28" aria-hidden="true">
            <circle cx="7" cy="14" r="6" fill="var(--gold)" />
            <rect x="15" y="8" width="12" height="12" fill="var(--navy)" />
          </svg>
          <span className="display font-semibold text-lg tracking-tight">BhashaCheck</span>
        </a>
        <nav className="hidden sm:flex items-center gap-8 mono text-base">
          <a href="/courses" className="hover:text-gold transition-colors">Courses</a>
          <a href="/flashcards" className="hover:text-gold transition-colors">Flashcards</a>
          <a href="/test" className="hover:text-gold transition-colors">Test</a>
          <a href="/dashboard" className="hover:text-gold transition-colors">Progress</a>
          <StreakBadge />
          <NavAuth />
        </nav>
        <a href="/login" className="sm:hidden mono text-sm">Log in</a>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t-2 border-ink mt-24">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col sm:flex-row justify-between gap-4">
        <p className="mono text-xs text-ink-soft">BhashaCheck — German, built from the ground up.</p>
        <div className="flex gap-6 mono text-xs">
          <a href="/courses" className="hover:text-gold">A1–C1</a>
          <a href="/dashboard" className="hover:text-gold">Dashboard</a>
        </div>
      </div>
    </footer>
  );
}
