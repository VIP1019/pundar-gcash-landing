import { createFileRoute } from "@tanstack/react-router";
import {
  Send, Wallet, Zap, ShieldCheck, PiggyBank, TrendingUp, Globe, ArrowRight,
  QrCode, Users, Smartphone, Star, Bell, Settings, Home as HomeIcon,
  Receipt, BarChart3, Sparkles, Check, Lock, Fingerprint, ArrowUpRight,
} from "lucide-react";
import splash from "@/assets/pundar-splash.jpg.asset.json";
import homeShot from "@/assets/pundar-home.jpg.asset.json";
import payShot from "@/assets/pundar-pay.jpg.asset.json";
import circleShot from "@/assets/pundar-circle.jpg.asset.json";
import growShot from "@/assets/pundar-grow.jpg.asset.json";
import converterShot from "@/assets/pundar-converter.jpg.asset.json";
import quickShot from "@/assets/pundar-quick.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pundar — Send, Save, Grow on Stellar" },
      { name: "description", content: "Pundar is the everyday money app powered by Stellar. Send instantly, split bills, join Paluwagan Circles, and grow your money with tokenized PSE equities." },
      { property: "og:title", content: "Pundar — Your everyday money app" },
      { property: "og:description", content: "Send, Pay, Save, and Grow. Powered by Stellar Blockchain." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: splash.url },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: splash.url },
    ],
  }),
  component: Landing,
});

const services = [
  { icon: Send, label: "Send", tint: "oklch(0.68 0.19 250)" },
  { icon: QrCode, label: "Receive", tint: "oklch(0.78 0.19 155)" },
  { icon: Smartphone, label: "Load", tint: "oklch(0.82 0.16 85)" },
  { icon: Receipt, label: "Split", tint: "oklch(0.7 0.2 30)" },
  { icon: PiggyBank, label: "Save", tint: "oklch(0.78 0.19 155)" },
  { icon: TrendingUp, label: "Grow", tint: "oklch(0.68 0.19 250)" },
  { icon: Users, label: "Circle", tint: "oklch(0.65 0.2 300)" },
  { icon: Globe, label: "Convert", tint: "oklch(0.82 0.16 85)" },
];

const pillars = [
  {
    tag: "PUNDAR Pay",
    title: "Split bills the smart way",
    desc: "Group expenses, instant settlements, and receipts you can trust — all powered by Stellar rails.",
    shot: payShot.url,
    accent: "from-blue-500/40 to-indigo-500/10",
  },
  {
    tag: "PUNDAR Circle",
    title: "Paluwagan, reimagined",
    desc: "Safe savings groups and Soroban escrow. Save with people you trust, without the paperwork.",
    shot: circleShot.url,
    accent: "from-violet-500/40 to-fuchsia-500/10",
  },
  {
    tag: "PUNDAR Grow",
    title: "Tokenized PSE equities",
    desc: "Invest your spare change with round-ups. Own a fraction of the Philippine market from ₱1.",
    shot: growShot.url,
    accent: "from-emerald-500/40 to-teal-500/10",
  },
];

function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Nav */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/70 border-b border-white/5">
        <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2.5">
            <div className="relative w-10 h-10 rounded-full grid place-items-center border-2 border-primary bg-background">
              <span className="font-black text-primary text-lg">P</span>
            </div>
            <span className="text-xl font-black tracking-widest">PUNDAR</span>
          </a>
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-foreground/75">
            <a href="#features" className="hover:text-primary transition">Features</a>
            <a href="#pay" className="hover:text-primary transition">Pay</a>
            <a href="#circle" className="hover:text-primary transition">Circle</a>
            <a href="#grow" className="hover:text-primary transition">Grow</a>
            <a href="#security" className="hover:text-primary transition">Security</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href="#download" className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/15 text-gold text-xs font-bold">
              <Star className="w-3.5 h-3.5 fill-gold" /> 850
            </a>
            <a href="#download" className="btn-primary text-sm px-5 py-2.5">Download</a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative pt-16 pb-24 lg:pt-24 lg:pb-32" style={{ background: "var(--gradient-hero)" }}>
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center relative">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" /> Powered by Stellar Blockchain
            </div>
            <h1 className="mt-6 text-5xl lg:text-7xl font-black leading-[1.02] tracking-tight">
              Send. Save.<br />
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(90deg, oklch(0.78 0.19 155), oklch(0.68 0.19 250))" }}>
                Grow Together.
              </span>
            </h1>
            <p className="mt-6 text-lg text-foreground/70 max-w-lg">
              The everyday money app for Filipinos. Instant transfers, group savings (Paluwagan),
              bill splits, and tokenized investments — all on one Stellar-powered wallet.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#download" className="btn-primary">
                Get Pundar <ArrowRight className="ml-2 w-4 h-4" />
              </a>
              <a href="#features" className="btn-ghost">Explore Features</a>
            </div>
            <div className="mt-12 grid grid-cols-3 gap-6 max-w-md">
              <div><div className="text-2xl font-black">₱11.43</div><div className="text-xs text-muted-foreground mt-1">Live XLM rate</div></div>
              <div><div className="text-2xl font-black">80M+</div><div className="text-xs text-muted-foreground mt-1">Filipinos</div></div>
              <div><div className="text-2xl font-black">4.8★</div><div className="text-xs text-muted-foreground mt-1">App rating</div></div>
            </div>
          </div>

          {/* Phone stack */}
          <div className="relative flex justify-center items-center min-h-[560px]">
            <div className="absolute w-[380px] h-[380px] rounded-full ping-ring opacity-60" />
            <div className="phone-frame w-[240px] absolute -left-4 top-16 float-slower rotate-[-8deg]">
              <img src={circleShot.url} alt="Pundar Circle Paluwagan" className="w-full rounded-[2rem]" />
            </div>
            <div className="phone-frame w-[280px] relative z-10 float-slow">
              <img src={homeShot.url} alt="Pundar wallet home" className="w-full rounded-[2rem]" />
            </div>
            <div className="phone-frame w-[240px] absolute -right-4 top-24 float-slower rotate-[8deg]" style={{ animationDelay: "1.5s" }}>
              <img src={growShot.url} alt="Pundar Grow investments" className="w-full rounded-[2rem]" />
            </div>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section id="features" className="py-20 lg:py-28 relative">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-primary font-semibold text-sm uppercase tracking-widest">Quick Actions</p>
            <h2 className="mt-3 text-4xl lg:text-5xl font-black tracking-tight">Every transaction counts.</h2>
            <p className="mt-4 text-muted-foreground">One tap for everything you need — from sending money to growing your future.</p>
          </div>
          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4">
            {services.map(({ icon: Icon, label, tint }) => (
              <div key={label} className="service-tile group">
                <div className="w-14 h-14 rounded-2xl grid place-items-center border transition-transform group-hover:scale-110"
                     style={{ background: `color-mix(in oklab, ${tint} 15%, transparent)`,
                              borderColor: `color-mix(in oklab, ${tint} 30%, transparent)` }}>
                  <Icon className="w-7 h-7" style={{ color: tint }} />
                </div>
                <span className="font-semibold text-sm">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature pillars — Pay / Circle / Grow */}
      {pillars.map((p, i) => {
        const flipped = i % 2 === 1;
        const anchor = ["pay", "circle", "grow"][i];
        return (
          <section key={p.tag} id={anchor} className="py-20 lg:py-28 relative">
            <div className={`mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center ${flipped ? "lg:[&>div:first-child]:order-2" : ""}`}>
              <div>
                <p className="text-primary font-semibold text-sm uppercase tracking-widest">{p.tag}</p>
                <h2 className="mt-3 text-4xl lg:text-5xl font-black tracking-tight">{p.title}</h2>
                <p className="mt-5 text-lg text-foreground/70 max-w-lg">{p.desc}</p>
                <ul className="mt-8 space-y-3 text-sm">
                  {["Instant settlement on Stellar", "No hidden fees", "Fully transparent history"].map((f) => (
                    <li key={f} className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-full bg-mint/15 border border-mint/40 grid place-items-center">
                        <Check className="w-3.5 h-3.5 text-mint" />
                      </span>
                      <span className="text-foreground/85">{f}</span>
                    </li>
                  ))}
                </ul>
                <a href="#download" className="mt-8 inline-flex items-center gap-2 text-primary font-semibold group">
                  Learn more <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
              <div className="relative flex justify-center">
                <div className={`absolute -inset-10 rounded-full blur-3xl bg-gradient-to-br ${p.accent} opacity-70 pointer-events-none`} />
                <div className="phone-frame w-[280px] relative">
                  <img src={p.shot} alt={p.title} className="w-full rounded-[2rem]" />
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* XLM Converter strip */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="glass-card p-8 lg:p-12 grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-gold font-semibold text-sm uppercase tracking-widest">XLM Converter</p>
              <h3 className="mt-3 text-3xl lg:text-4xl font-black tracking-tight">Global money, one currency.</h3>
              <p className="mt-4 text-foreground/70">
                See real-time rates for PHP, USD, EUR, and JPY. Move money across borders in seconds — no more wire fees.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-3 max-w-md">
                {[
                  { flag: "🇵🇭", code: "PHP", rate: "₱11.4300" },
                  { flag: "🇺🇸", code: "USD", rate: "$0.1847" },
                  { flag: "🇪🇺", code: "EUR", rate: "€0.1623" },
                  { flag: "🇯🇵", code: "JPY", rate: "¥30.26" },
                ].map((c) => (
                  <div key={c.code} className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
                    <span className="text-2xl">{c.flag}</span>
                    <div>
                      <div className="text-xs text-muted-foreground">1 XLM =</div>
                      <div className="font-bold">{c.rate}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative flex justify-center">
              <div className="absolute -inset-6 rounded-full blur-3xl bg-primary/25 pointer-events-none" />
              <div className="phone-frame w-[260px] relative">
                <img src={converterShot.url} alt="XLM Converter" className="w-full rounded-[2rem]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security */}
      <section id="security" className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-mint font-semibold text-sm uppercase tracking-widest">Bank-grade Security</p>
            <h2 className="mt-3 text-4xl lg:text-5xl font-black tracking-tight">Your money. Your control.</h2>
          </div>
          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {[
              { icon: ShieldCheck, title: "End-to-end encryption", desc: "Every transaction is secured by Stellar's decentralized ledger." },
              { icon: Fingerprint, title: "Biometric login", desc: "MPIN, Face ID, and fingerprint keep your wallet locked to you." },
              { icon: Lock, title: "Soroban escrow", desc: "Smart contract escrow for group savings — no single point of trust." },
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
        </div>
      </section>

      {/* Journey */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center">
            <p className="text-primary font-semibold text-sm uppercase tracking-widest">Your Financial Journey</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight">Spend · Save · Grow · Together</h2>
          </div>
          <div className="mt-14 relative">
            <div className="absolute top-8 left-8 right-8 h-1 rounded-full bg-white/5 overflow-hidden">
              <div className="h-full w-[55%] bg-gradient-to-r from-mint via-primary to-purple-400" />
            </div>
            <div className="relative grid grid-cols-5 gap-3">
              {[
                { label: "Spend", done: true, icon: Send },
                { label: "Save", done: true, icon: PiggyBank },
                { label: "Grow", done: false, active: true, icon: TrendingUp },
                { label: "Score", done: false, icon: Star },
                { label: "Access", done: false, icon: Lock },
              ].map((s) => (
                <div key={s.label} className="flex flex-col items-center">
                  <div className={`w-16 h-16 rounded-full grid place-items-center border-2 backdrop-blur ${
                    s.done ? "bg-mint/20 border-mint text-mint"
                    : s.active ? "bg-primary/20 border-primary text-primary shadow-[0_0_30px_-5px_var(--primary)]"
                    : "bg-white/5 border-white/15 text-muted-foreground"
                  }`}>
                    {s.done ? <Check className="w-6 h-6" /> : <s.icon className="w-6 h-6" />}
                  </div>
                  <span className={`mt-3 text-sm font-semibold ${s.active ? "text-primary" : s.done ? "text-mint" : "text-muted-foreground"}`}>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="download" className="py-24">
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
                <button className="inline-flex items-center gap-3 px-6 py-4 bg-white text-black rounded-2xl font-semibold hover:bg-white/90 transition">
                  <Smartphone className="w-6 h-6" />
                  <div className="text-left leading-tight">
                    <div className="text-[10px] opacity-70">Download on the</div>
                    <div className="text-base font-bold">App Store</div>
                  </div>
                </button>
                <button className="inline-flex items-center gap-3 px-6 py-4 bg-white text-black rounded-2xl font-semibold hover:bg-white/90 transition">
                  <Smartphone className="w-6 h-6" />
                  <div className="text-left leading-tight">
                    <div className="text-[10px] opacity-70">Get it on</div>
                    <div className="text-base font-bold">Google Play</div>
                  </div>
                </button>
              </div>
              <p className="mt-8 text-xs text-muted-foreground uppercase tracking-widest">
                Build Together · Grow Together · Powered by Stellar
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
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
          {[
            { h: "Product", l: ["Pay", "Circle", "Grow", "Converter"] },
            { h: "Company", l: ["About", "Careers", "Press", "Partners"] },
            { h: "Support", l: ["Help Center", "Contact", "Security", "Privacy"] },
          ].map((c) => (
            <div key={c.h}>
              <h4 className="font-bold text-sm uppercase tracking-widest text-foreground/90">{c.h}</h4>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {c.l.map((i) => <li key={i}><a href="#" className="hover:text-primary transition">{i}</a></li>)}
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
    </div>
  );
}
