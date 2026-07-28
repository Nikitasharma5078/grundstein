import "./globals.css";

export const metadata = {
  title: "Grundstein — Learn German",
  description: "Learn German from A1 to C1. Structured lessons, real progress tracking.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen flex flex-col">
          <Nav />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
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
            <circle cx="7" cy="14" r="6" fill="var(--red)" />
            <rect x="15" y="8" width="12" height="12" fill="var(--blue)" />
          </svg>
          <span className="display font-semibold text-lg tracking-tight">Grundstein</span>
        </a>
        <nav className="hidden sm:flex items-center gap-8 mono text-sm">
          <a href="/courses" className="hover:text-red transition-colors">Courses</a>
          <a href="/dashboard" className="hover:text-red transition-colors">Progress</a>
          <a href="/login" className="hover:text-red transition-colors">Log in</a>
          <a
            href="/signup"
            className="bg-ink text-paper px-4 py-2 hover:bg-red transition-colors"
          >
            Start free
          </a>
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
        <p className="mono text-xs text-ink-soft">Grundstein — von Grund auf Deutsch lernen.</p>
        <div className="flex gap-6 mono text-xs">
          <a href="/courses" className="hover:text-red">A1–C1</a>
          <a href="/dashboard" className="hover:text-red">Dashboard</a>
        </div>
      </div>
    </footer>
  );
}
