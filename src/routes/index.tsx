import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Send, ShieldCheck, PiggyBank, TrendingUp, Globe, ArrowRight,
  QrCode, Users, Smartphone, Star,
  Receipt, Sparkles, Check, Lock, Fingerprint, ArrowUpRight,
} from "lucide-react";
import { SiteNav, SiteFooter } from "@/components/SiteChrome";
import logoImg from "@/assets/logo.png";
import splashImg from "@/assets/pundar-splash.jpg";
import homeImg from "@/assets/pundar-home.jpg";
import payImg from "@/assets/pundar-pay.jpg";
import circleImg from "@/assets/pundar-circle.jpg";
import growImg from "@/assets/pundar-grow.jpg";
import converterImg from "@/assets/pundar-converter.jpg";
const splash = { url: splashImg };
const homeShot = { url: homeImg };
const payShot = { url: payImg };
const circleShot = { url: circleImg };
const growShot = { url: growImg };
const converterShot = { url: converterImg };

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pundar – Send, Save, Grow on Stellar" },
      { name: "description", content: "Pundar is the everyday money app powered by Stellar. Send instantly, split bills, join Paluwagan Circles, and grow your money with tokenized PSE equities." },
      { property: "og:title", content: "Pundar – Your everyday money app" },
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
    desc: "Group expenses, instant settlements, and receipts you can trust – all powered by Stellar rails.",
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
    desc: "Invest your spare change with round-ups. Own a fraction of the Philippine market from â‚±1.",
    shot: growShot.url,
    accent: "from-emerald-500/40 to-teal-500/10",
  },
];

function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <SiteNav />


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
              bill splits, and tokenized investments – all on one Stellar-powered wallet.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/app" className="btn-primary">
                Get Pundar <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <a href="#features" className="btn-ghost">Explore Features</a>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-6 max-w-md">
              <div>
                <div className="text-2xl font-black text-primary">5-sec</div>
                <div className="text-xs text-muted-foreground mt-1">Settlement speed</div>
              </div>
              <div>
                <div className="text-2xl font-black text-mint">₱0.001</div>
                <div className="text-xs text-muted-foreground mt-1">Per transaction fee</div>
              </div>
              <div>
                <div className="text-2xl font-black text-gold">100%</div>
                <div className="text-xs text-muted-foreground mt-1">On-chain escrow</div>
              </div>
            </div>
          </div>

          {/* Phone stack */}
          <div className="relative flex justify-center items-center min-h-[560px]">
            <div className="absolute w-[380px] h-[380px] rounded-full ping-ring opacity-60" />
            <div className="phone-frame w-[240px] absolute -left-4 top-16 float-slower rotate-[-8deg]">
              <div className="phone-screen"><img src={circleShot.url} alt="Pundar Circle Paluwagan" /></div>
            </div>
            <div className="phone-frame w-[280px] relative z-10 float-slow">
              <div className="phone-screen"><img src={homeShot.url} alt="Pundar wallet home" /></div>
            </div>
            <div className="phone-frame w-[240px] absolute -right-4 top-24 float-slower rotate-[8deg]" style={{ animationDelay: "1.5s" }}>
              <div className="phone-screen"><img src={growShot.url} alt="Pundar Grow investments" /></div>
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
            <p className="mt-4 text-muted-foreground">One tap for everything you need – from sending money to growing your future.</p>
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

      {/* Feature pillars – Pay / Circle / Grow */}
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
                <Link to={`/${anchor}` as "/pay" | "/circle" | "/grow"} className="mt-8 inline-flex items-center gap-2 text-primary font-semibold group">
                  Learn more <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
              <div className="relative flex justify-center">
                <div className={`absolute -inset-10 rounded-full blur-3xl bg-gradient-to-br ${p.accent} opacity-70 pointer-events-none`} />
                <div className="phone-frame w-[280px] relative">
                  <div className="phone-screen"><img src={p.shot} alt={p.title} /></div>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* Video Section */}
      <section className="py-20 lg:py-28 relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0 pointer-events-none"
             style={{ background: "radial-gradient(ellipse at 50% 50%, oklch(0.68 0.19 250 / 0.07) 0%, transparent 70%)" }} />

        <div className="mx-auto max-w-7xl px-6 relative">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-primary font-semibold text-sm uppercase tracking-widest">See It In Action</p>
            <h2 className="mt-3 text-4xl lg:text-5xl font-black tracking-tight">
              Watch PUNDAR <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(90deg, oklch(0.78 0.19 155), oklch(0.68 0.19 250))" }}>come alive.</span>
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              See the full app in action and discover what makes PUNDAR the everyday money app for Filipinos.
            </p>
          </div>

          {/* Two video containers */}
          <div className="grid lg:grid-cols-2 gap-8">

            {/* Video 1 — Demo Video */}
            <div className="group flex flex-col gap-4">
              {/* Label */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl grid place-items-center shrink-0"
                     style={{ background: "oklch(0.68 0.19 250 / 0.15)", border: "1px solid oklch(0.68 0.19 250 / 0.3)" }}>
                  <span className="text-sm">▶️</span>
                </div>
                <div>
                  <div className="font-black text-lg">App Demo</div>
                  <div className="text-xs text-muted-foreground">Full walkthrough of PUNDAR features</div>
                </div>
              </div>

              {/* Video frame — landscape 16:9 */}
              <div className="relative rounded-2xl overflow-hidden border border-white/10 group-hover:border-primary/30 transition-all duration-300"
                   style={{
                     aspectRatio: "16/9",
                     background: "linear-gradient(135deg, oklch(0.16 0.05 262), oklch(0.11 0.03 260))",
                     boxShadow: "0 20px 60px -20px oklch(0 0 0 / 0.6), 0 0 0 1px oklch(0.68 0.19 250 / 0.1)"
                   }}>

                {/* Replace src with your video file or YouTube embed */}
                <video
                  className="w-full h-full object-cover"
                  controls
                  poster=""
                  preload="metadata"
                >
                  {/* 👇 DROP YOUR DEMO VIDEO FILE HERE */}
                  <source src="/videos/pundar-demo.mp4" type="video/mp4" />
                </video>

                {/* Shimmer overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                     style={{ background: "linear-gradient(135deg, oklch(0.68 0.19 250 / 0.05) 0%, transparent 50%)" }} />
              </div>

              {/* Caption */}
              <p className="text-sm text-muted-foreground px-1">
                A complete walkthrough showing bill splitting, Paluwagan Circles, instant Stellar transfers, and the Grow investment feature.
              </p>
            </div>

            {/* Video 2 — Promotional Video */}
            <div className="group flex flex-col gap-4">
              {/* Label */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl grid place-items-center shrink-0"
                     style={{ background: "oklch(0.78 0.19 155 / 0.15)", border: "1px solid oklch(0.78 0.19 155 / 0.3)" }}>
                  <span className="text-sm">🎬</span>
                </div>
                <div>
                  <div className="font-black text-lg">Promotional Video</div>
                  <div className="text-xs text-muted-foreground">The PUNDAR story &amp; vision</div>
                </div>
              </div>

              {/* Video frame — landscape 16:9 */}
              <div className="relative rounded-2xl overflow-hidden border border-white/10 group-hover:border-mint/30 transition-all duration-300"
                   style={{
                     aspectRatio: "16/9",
                     background: "linear-gradient(135deg, oklch(0.16 0.05 262), oklch(0.11 0.03 260))",
                     boxShadow: "0 20px 60px -20px oklch(0 0 0 / 0.6), 0 0 0 1px oklch(0.78 0.19 155 / 0.1)"
                   }}>

                {/* Replace src with your video file or YouTube embed */}
                <video
                  className="w-full h-full object-cover"
                  controls
                  poster=""
                  preload="metadata"
                >
                  {/* 👇 DROP YOUR PROMO VIDEO FILE HERE */}
                  <source src="/videos/pundar-promo.mp4" type="video/mp4" />
                </video>

                {/* Shimmer overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                     style={{ background: "linear-gradient(135deg, oklch(0.78 0.19 155 / 0.05) 0%, transparent 50%)" }} />
              </div>

              {/* Caption */}
              <p className="text-sm text-muted-foreground px-1">
                The story behind PUNDAR — our mission to digitize Filipino finance and bring wealth-building tools to every pocket.
              </p>
            </div>

          </div>

          {/* Bottom note */}
          <div className="mt-10 text-center">
            <p className="text-xs text-muted-foreground">
              Prefer to try it yourself?{" "}
              <a href="/app" className="text-primary font-semibold hover:underline">
                Launch the live demo →
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* XLM Converter strip */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="glass-card p-8 lg:p-12 grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-gold font-semibold text-sm uppercase tracking-widest">XLM Converter</p>
              <h3 className="mt-3 text-3xl lg:text-4xl font-black tracking-tight">Global money, one currency.</h3>
              <p className="mt-4 text-foreground/70">
                Real-time XLM rates across 40+ currencies. Move money anywhere in seconds — no wire fees.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-2 max-w-lg">
                {[
                  { flag: "🇵🇭", code: "PHP", label: "Philippine Peso",   rate: "₱11.43"   },
                  { flag: "🇺🇸", code: "USD", label: "US Dollar",          rate: "$0.1847"  },
                  { flag: "🇪🇺", code: "EUR", label: "Euro",               rate: "€0.1623"  },
                  { flag: "🇯🇵", code: "JPY", label: "Japanese Yen",       rate: "¥30.26"   },
                  { flag: "🇬🇧", code: "GBP", label: "British Pound",      rate: "£0.1441"  },
                  { flag: "🇦🇺", code: "AUD", label: "Australian Dollar",  rate: "A$0.2731" },
                  { flag: "🇨🇦", code: "CAD", label: "Canadian Dollar",    rate: "C$0.2512" },
                  { flag: "🇨🇭", code: "CHF", label: "Swiss Franc",        rate: "Fr0.1598" },
                  { flag: "🇨🇳", code: "CNY", label: "Chinese Yuan",       rate: "¥1.3421"  },
                  { flag: "🇸🇬", code: "SGD", label: "Singapore Dollar",   rate: "S$0.2451" },
                  { flag: "🇰🇷", code: "KRW", label: "Korean Won",         rate: "₩241.50"  },
                  { flag: "🇮🇳", code: "INR", label: "Indian Rupee",       rate: "₹15.43"   },
                  { flag: "🇲🇽", code: "MXN", label: "Mexican Peso",       rate: "MX$3.42"  },
                  { flag: "🇧🇷", code: "BRL", label: "Brazilian Real",     rate: "R$1.08"   },
                  { flag: "🇦🇪", code: "AED", label: "UAE Dirham",         rate: "AED 0.68" },
                  { flag: "🇳🇿", code: "NZD", label: "New Zealand Dollar", rate: "NZ$0.30"  },
                  { flag: "🇹🇭", code: "THB", label: "Thai Baht",          rate: "฿6.42"    },
                  { flag: "🇲🇾", code: "MYR", label: "Malaysian Ringgit",  rate: "RM0.82"   },
                  { flag: "🇮🇩", code: "IDR", label: "Indonesian Rupiah",  rate: "Rp2,891"  },
                  { flag: "🇻🇳", code: "VND", label: "Vietnamese Dong",    rate: "₫4,612"   },
                  { flag: "🇵🇰", code: "PKR", label: "Pakistani Rupee",    rate: "₨51.83"   },
                  { flag: "🇿🇦", code: "ZAR", label: "South African Rand", rate: "R3.38"    },
                ].map((c) => (
                  <div key={c.code} className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 hover:border-primary/30 transition">
                    <span className="text-xl leading-none">{c.flag}</span>
                    <div className="min-w-0 flex-1">
                      <div className="text-[10px] text-muted-foreground truncate">{c.label}</div>
                      <div className="font-bold text-sm">{c.rate}</div>
                      <div className="text-[10px] text-muted-foreground">1 XLM</div>
                    </div>
                    <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-primary/15 text-primary">{c.code}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative flex justify-center">
              <div className="absolute -inset-6 rounded-full blur-3xl bg-primary/25 pointer-events-none" />
              <div className="phone-frame w-[260px] relative">
                <div className="phone-screen"><img src={converterShot.url} alt="XLM Converter" /></div>
              </div>
            </div>
          </div>
        </div>
      </section>
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
              { icon: Lock, title: "Soroban escrow", desc: "Smart contract escrow for group savings – no single point of trust." },
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
            <h2 className="mt-3 text-4xl font-black tracking-tight">Spend Â· Save Â· Grow Â· Together</h2>
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
              <div className="mx-auto w-16 h-16 rounded-full overflow-hidden">
                <img src={logoImg} alt="Pundar" className="w-full h-full object-cover" />
              </div>
              <h2 className="mt-6 text-4xl lg:text-6xl font-black tracking-tight">Get Pundar today</h2>
              <p className="mt-4 text-foreground/70 max-w-xl mx-auto text-lg">
                Download the app, verify your number, and start moving your money the smart way.
              </p>
              <div className="mt-10 flex flex-wrap gap-3 justify-center">
                <a href={`${import.meta.env.BASE_URL}pundar.apk`} download="pundar.apk" className="inline-flex items-center gap-3 px-6 py-4 bg-white text-black rounded-2xl font-semibold hover:bg-white/90 transition">
                  <Smartphone className="w-6 h-6" />
                  <div className="text-left leading-tight">
                    <div className="text-[10px] opacity-70">Direct download</div>
                    <div className="text-base font-bold">Get APK</div>
                  </div>
                </a>
                <Link to="/app" className="inline-flex items-center gap-3 px-6 py-4 bg-primary text-primary-foreground rounded-2xl font-semibold hover:bg-primary/90 transition">
                  <Smartphone className="w-6 h-6" />
                  <div className="text-left leading-tight">
                    <div className="text-[10px] opacity-80">No install needed</div>
                    <div className="text-base font-bold">Try Live Demo</div>
                  </div>
                </Link>
              </div>
              <p className="mt-8 text-xs text-muted-foreground uppercase tracking-widest">
                Build Together Â· Grow Together Â· Powered by Stellar
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <SiteFooter />

    </div>
  );
}

