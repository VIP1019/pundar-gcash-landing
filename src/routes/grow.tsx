import { createFileRoute, Link } from "@tanstack/react-router";
import { TrendingUp, PiggyBank, BarChart3, Sparkles, Check, ArrowRight, Globe } from "lucide-react";
import { SiteShell } from "@/components/SiteChrome";
import growShot from "@/assets/pundar-grow.jpg.asset.json";
import converterShot from "@/assets/pundar-converter.jpg.asset.json";

export const Route = createFileRoute("/grow")({
  head: () => ({
    meta: [
      { title: "PUNDAR Grow — Fractional PSE investing from ₱10" },
      { name: "description", content: "Own a slice of Philippine equities from just ₱10. Auto round-ups turn everyday spending into a growing portfolio." },
      { property: "og:title", content: "PUNDAR Grow — Micro-investing for every Filipino" },
      { property: "og:description", content: "Fractional PSE shares, automated round-ups, and portfolio analytics — investing without the barrier." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: growShot.url },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: growShot.url },
    ],
  }),
  component: GrowPage,
});

function GrowPage() {
  return (
    <SiteShell>
      <section className="relative pt-20 pb-24" style={{ background: "var(--gradient-hero)" }}>
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-mint/15 border border-mint/30 text-mint text-xs font-bold uppercase tracking-wider">
              <TrendingUp className="w-3.5 h-3.5" /> PUNDAR Grow
            </div>
            <h1 className="mt-6 text-5xl lg:text-6xl font-black leading-[1.05] tracking-tight">
              Every peso keeps building.
            </h1>
            <p className="mt-6 text-lg text-foreground/70 max-w-lg">
              Buy fractional shares of PSE-listed companies from as little as ₱10. Turn on
              round-ups and PUNDAR quietly invests your spare change while you go about your day.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/about" hash="download" className="btn-primary">
                Start investing <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <Link to="/pay" className="btn-ghost">See round-ups</Link>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-6 max-w-md">
              <div><div className="text-2xl font-black">₱10</div><div className="text-xs text-muted-foreground mt-1">Minimum investment</div></div>
              <div><div className="text-2xl font-black">PSE</div><div className="text-xs text-muted-foreground mt-1">Fractional equities</div></div>
              <div><div className="text-2xl font-black">Auto</div><div className="text-xs text-muted-foreground mt-1">Round-up sweeps</div></div>
            </div>
          </div>
          <div className="relative flex justify-center min-h-[520px] items-center">
            <div className="absolute w-[360px] h-[360px] rounded-full ping-ring opacity-60" />
            <div className="phone-frame w-[280px] relative z-10 float-slow">
              <img src={growShot.url} alt="PUNDAR Grow portfolio" className="w-full rounded-[2rem]" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-mint font-semibold text-sm uppercase tracking-widest">How Grow works</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight">Invest on autopilot.</h2>
          </div>
          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {[
              { icon: Sparkles, title: "Round-ups", desc: "Every payment rounds up. Once your spare-change threshold is hit, PUNDAR buys shares for you." },
              { icon: BarChart3, title: "Live analytics", desc: "Real-time allocation charts, favorites, and performance across PH equities & fixed-income." },
              { icon: PiggyBank, title: "Balance sweeps", desc: "Manually sweep idle wallet cash into your portfolio in a single tap." },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="glass-card p-8">
                <div className="w-12 h-12 rounded-2xl bg-mint/15 border border-mint/30 grid place-items-center">
                  <Icon className="w-6 h-6 text-mint" />
                </div>
                <h3 className="mt-5 text-xl font-bold">{title}</h3>
                <p className="mt-2 text-muted-foreground text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="glass-card p-10 lg:p-14 grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-gold font-semibold text-sm uppercase tracking-widest flex items-center gap-2">
                <Globe className="w-4 h-4" /> Multi-currency ready
              </p>
              <h3 className="mt-3 text-3xl font-black tracking-tight">Global rails, local investing.</h3>
              <p className="mt-4 text-foreground/70">
                Your PUNDAR wallet auto-detects your currency (PHP, USD, EUR, JPY and 40+ more) and
                converts on the fly. Whether you're earning abroad or investing at home, your money moves at Stellar speed.
              </p>
              <ul className="mt-6 space-y-3 text-sm">
                {["Live XLM exchange rates", "Fractional shares from ₱10", "Automated portfolio rebalance"].map((f) => (
                  <li key={f} className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-mint/15 border border-mint/40 grid place-items-center">
                      <Check className="w-3.5 h-3.5 text-mint" />
                    </span>
                    <span className="text-foreground/85">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative flex justify-center">
              <div className="absolute -inset-6 rounded-full blur-3xl bg-mint/25 pointer-events-none" />
              <div className="phone-frame w-[260px] relative">
                <img src={converterShot.url} alt="XLM Converter" className="w-full rounded-[2rem]" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
