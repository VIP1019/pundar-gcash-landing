import { Link } from "@tanstack/react-router";
import { Star } from "lucide-react";
import type { ReactNode } from "react";

const navLinks = [
  { to: "/pay", label: "Pay" },
  { to: "/circle", label: "Circle" },
  { to: "/grow", label: "Grow" },
  { to: "/security", label: "Security" },
  { to: "/about", label: "About" },
] as const;

export function SiteNav() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/70 border-b border-white/5">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5">
          <div className="relative w-10 h-10 rounded-full grid place-items-center border-2 border-primary bg-background">
            <span className="font-black text-primary text-lg">P</span>
          </div>
          <span className="text-xl font-black tracking-widest">PUNDAR</span>
        </Link>
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-foreground/75">
          {navLinks.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="hover:text-primary transition"
              activeProps={{ className: "text-primary" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <span className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/15 text-gold text-xs font-bold">
            <Star className="w-3.5 h-3.5 fill-gold" /> 850
          </span>
          <Link to="/about" hash="download" className="btn-primary text-sm px-5 py-2.5">
            Download
          </Link>
        </div>
      </div>
    </header>
  );
}

export function SiteFooter() {
  const cols = [
    { h: "Product", l: [
      { label: "Pay", to: "/pay" as const },
      { label: "Circle", to: "/circle" as const },
      { label: "Grow", to: "/grow" as const },
      { label: "Security", to: "/security" as const },
    ]},
    { h: "Company", l: [
      { label: "About", to: "/about" as const },
      { label: "Careers", to: "/about" as const },
      { label: "Press", to: "/about" as const },
      { label: "Partners", to: "/about" as const },
    ]},
    { h: "Support", l: [
      { label: "Help Center", to: "/about" as const },
      { label: "Contact", to: "/about" as const },
      { label: "Security", to: "/security" as const },
      { label: "Privacy", to: "/about" as const },
    ]},
  ];
  return (
    <footer className="border-t border-white/5 bg-background/60 backdrop-blur">
      <div className="mx-auto max-w-7xl px-6 py-14 grid md:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full grid place-items-center border-2 border-primary">
              <span className="font-black text-primary">P</span>
            </div>
            <span className="text-lg font-black tracking-widest">PUNDAR</span>
          </div>
          <p className="mt-4 text-sm text-muted-foreground max-w-xs">
            Build Together. Grow Together. The everyday money app powered by Stellar Blockchain.
          </p>
        </div>
        {cols.map((c) => (
          <div key={c.h}>
            <h4 className="font-bold text-sm uppercase tracking-widest text-foreground/90">{c.h}</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {c.l.map((i, idx) => (
                <li key={`${i.label}-${idx}`}>
                  <Link to={i.to} className="hover:text-primary transition">{i.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-white/5">
        <div className="mx-auto max-w-7xl px-6 py-5 text-xs text-muted-foreground flex flex-wrap justify-between gap-3">
          <span>© {new Date().getFullYear()} Pundar. All rights reserved.</span>
          <span className="inline-flex items-center gap-2"><Star className="w-3 h-3 text-gold fill-gold" /> Powered by Stellar Blockchain</span>
        </div>
      </div>
    </footer>
  );
}

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <SiteNav />
      {children}
      <SiteFooter />
    </div>
  );
}
