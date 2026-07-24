import { createFileRoute, Link } from "@tanstack/react-router";
import { Smartphone, Sparkles, Star, ArrowRight, Users, Globe, TrendingUp } from "lucide-react";
import { SiteShell } from "@/components/SiteChrome";
import splash from "@/assets/pundar-splash.jpg.asset.json";
import homeShot from "@/assets/pundar-home.jpg.asset.json";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About PUNDAR — Every Peso Keeps Building" },
      { name: "description", content: "PUNDAR (Progressive Unified Network for Digital Asset Resilience) is a Filipino financial super-app built for the APAC Stellar Hackathon by the University of Camarines Norte." },
      { property: "og:title", content: "About PUNDAR — Filipino fintech on Stellar" },
      { property: "og:description", content: "Meet the team and mission behind PUNDAR: digitizing paluwagan, bill splits, and micro-investing on Stellar." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: splash.url },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: splash.url },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteShell>
      <section className="relative pt-20 pb-20" style={{ background: "var(--gradient-hero)" }}>
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold/15 border border-gold/30 text-gold text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" /> Our Story
            </div>
            <h1 className="mt-6 text-5xl lg:text-6xl font-black leading-[1.05] tracking-tight">
              Every Peso<br />Keeps Building.
            </h1>
            <p className="mt-6 text-lg text-foreground/70 max-w-lg">
              PUNDAR — Progressive Unified Network for Digital Asset Resilience — is a
              Filipino financial super-app built for the APAC Stellar Hackathon by students
              of the University of Camarines Norte. We're on a mission to digitize the
              paluwagan and put wealth-building tools in every Filipino's pocket.
            </p>
          </div>
          <div className="relative flex justify-center">
            <div className="absolute -inset-6 rounded-full blur-3xl bg-primary/25 pointer-events-none" />
            <div className="phone-frame w-[280px] relative float-slow">
              <img src={homeShot.url} alt="PUNDAR app" className="w-full rounded-[2rem]" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-3 gap-6">
          {[
            { icon: Users, title: "80M+ Filipinos", desc: "One financial super-app for every barangay, from Metro Manila to the last mile." },
            { icon: Globe, title: "Stellar network", desc: "Fast, cheap, and open — the ideal rail for cross-border and micropayments." },
            { icon: TrendingUp, title: "18k+ lines of code", desc: "Kotlin + Jetpack Compose, Soroban smart contracts in Rust, all production-ready." },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="glass-card p-8">
              <div className="w-12 h-12 rounded-2xl bg-primary/15 border border-primary/30 grid place-items-center">
                <Icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="mt-5 text-xl font-bold">{title}</h3>
              <p className="mt-2 text-muted-foreground text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6 glass-card p-10 lg:p-14">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest">Mission</p>
          <h3 className="mt-3 text-3xl font-black tracking-tight">Filipino finance, upgraded.</h3>
          <p className="mt-5 text-foreground/75 leading-relaxed">
            Traditional paluwagan runs on interpersonal trust — and sometimes that trust breaks.
            PUNDAR replaces the fragile parts with cryptography and the joyful parts with a
            beautiful app. Add intelligent bill splitting, QR payments, and fractional PSE investing,
            and everyday money habits quietly become wealth. That's what "Every Peso Keeps Building" means.
          </p>
        </div>
      </section>

      <section id="download" className="py-24 scroll-mt-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="relative overflow-hidden rounded-[2.5rem] p-12 lg:p-20 text-center border border-white/10"
               style={{ background: "var(--gradient-hero)" }}>
            <div className="absolute inset-0 opacity-30 pointer-events-none"
                 style={{ background: "radial-gradient(circle at 50% 0%, var(--primary) 0%, transparent 50%)" }} />
            <div className="relative">
              <div className="mx-auto w-16 h-16 rounded-full border-2 border-primary grid place-items-center">
                <span className="text-2xl font-black text-primary">P</span>
              </div>
              <h2 className="mt-6 text-4xl lg:text-6xl font-black tracking-tight">Get Pundar today</h2>
              <p className="mt-4 text-foreground/70 max-w-xl mx-auto text-lg">
                Download the app, verify your number, and start moving your money the smart way.
              </p>
              <div className="mt-10 flex flex-wrap gap-3 justify-center">
                {[
                  { top: "Download on the", bot: "App Store" },
                  { top: "Get it on", bot: "Google Play" },
                ].map((s) => (
                  <button key={s.bot} className="inline-flex items-center gap-3 px-6 py-4 bg-white text-black rounded-2xl font-semibold hover:bg-white/90 transition">
                    <Smartphone className="w-6 h-6" />
                    <div className="text-left leading-tight">
                      <div className="text-[10px] opacity-70">{s.top}</div>
                      <div className="text-base font-bold">{s.bot}</div>
                    </div>
                  </button>
                ))}
              </div>
              <div className="mt-10 flex justify-center">
                <Link to="/" className="btn-ghost text-sm">
                  Back to home <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
              <p className="mt-8 text-xs text-muted-foreground uppercase tracking-widest inline-flex items-center gap-2">
                <Star className="w-3 h-3 text-gold fill-gold" /> Build Together · Grow Together · Powered by Stellar
              </p>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
