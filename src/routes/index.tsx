import { createFileRoute } from "@tanstack/react-router";
import {
  Send, Wallet, CreditCard, Smartphone, Zap, ShieldCheck, PiggyBank,
  ShoppingBag, TrendingUp, Globe, ArrowRight, QrCode, Users, Landmark,
} from "lucide-react";
import heroImg from "@/assets/pundar-hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pundar — Send, Pay, Save. All in one app." },
      { name: "description", content: "Pundar is the everyday money app for the Philippines. Send money, pay bills, shop online, and grow your savings — right from your phone." },
      { property: "og:title", content: "Pundar — Your everyday money app" },
      { property: "og:description", content: "Send money, pay bills, and save with Pundar. Fast, secure, and made for you." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Landing,
});

const services = [
  { icon: Send, label: "Send Money" },
  { icon: Smartphone, label: "Buy Load" },
  { icon: Zap, label: "Pay Bills" },
  { icon: QrCode, label: "Scan to Pay" },
  { icon: PiggyBank, label: "Save" },
  { icon: TrendingUp, label: "Invest" },
  { icon: CreditCard, label: "Pundar Card" },
  { icon: Globe, label: "Send Abroad" },
];

const promos = [
  { tag: "New", title: "Get ₱100 when you sign up", desc: "Verify your account and receive a welcome bonus straight to your wallet.", tint: "from-blue-500 to-indigo-600" },
  { tag: "Limited", title: "Shop now, pay later", desc: "Split your purchases into easy monthly payments with Pundar Pay Later.", tint: "from-sky-400 to-blue-600" },
  { tag: "Rewards", title: "Earn up to 5% interest", desc: "Grow your savings faster with PundarSave — no minimum balance required.", tint: "from-indigo-500 to-purple-600" },
];

function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="sticky top-0 z-50 bg-background/85 backdrop-blur-md border-b border-border">
        <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <a href="#" className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-full bg-primary grid place-items-center text-primary-foreground font-bold">P</div>
              <span className="text-xl font-bold tracking-tight">pundar</span>
            </a>
            <div className="hidden md:flex items-center gap-1 bg-secondary rounded-full p-1">
              <button className="px-4 py-1.5 rounded-full bg-background text-sm font-semibold text-primary shadow-sm">Customer</button>
              <button className="px-4 py-1.5 rounded-full text-sm font-medium text-muted-foreground">Business</button>
            </div>
          </div>
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-foreground/80">
            <a href="#get-started" className="hover:text-primary">Get Started</a>
            <a href="#services" className="hover:text-primary">Services</a>
            <a href="#partners" className="hover:text-primary">Partners</a>
            <a href="#about" className="hover:text-primary">About Us</a>
            <a href="#promos" className="hover:text-primary">Promos</a>
            <a href="#help" className="hover:text-primary">Help Center</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
        <div className="absolute inset-0 opacity-30 pointer-events-none"
             style={{ background: "radial-gradient(circle at 20% 10%, white 0%, transparent 40%), radial-gradient(circle at 80% 90%, oklch(0.7 0.2 280) 0%, transparent 45%)" }} />
        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:py-28 grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <span className="inline-block px-3 py-1 rounded-full bg-white/15 backdrop-blur text-xs font-semibold tracking-wide uppercase">Now available nationwide</span>
            <h1 className="mt-5 text-5xl lg:text-6xl font-black leading-[1.05] tracking-tight">
              Your everyday<br />money app.
            </h1>
            <p className="mt-5 text-lg text-white/85 max-w-lg">
              Send money, pay bills, shop online, and grow your savings — all from one app. Fast, secure, and made for the way you live.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#get-started" className="btn-primary bg-white! text-primary! shadow-lg hover:bg-white/90!" style={{ background: "white", color: "var(--primary)" }}>
                Download Pundar <ArrowRight className="ml-2 w-4 h-4" />
              </a>
              <a href="#services" className="btn-ghost border-white/50! text-white!" style={{ borderColor: "rgba(255,255,255,0.5)", color: "white" }}>
                Explore Services
              </a>
            </div>
            <div className="mt-10 flex items-center gap-8 text-white/80 text-sm">
              <div><div className="text-2xl font-bold text-white">80M+</div>Active users</div>
              <div><div className="text-2xl font-bold text-white">500K+</div>Merchant partners</div>
              <div><div className="text-2xl font-bold text-white">4.8★</div>App rating</div>
            </div>
          </div>
          <div className="relative">
            <img
              src={heroImg}
              alt="Pundar mobile app on a smartphone"
              width={1400}
              height={1200}
              className="w-full h-auto rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20" style={{ background: "var(--gradient-soft)" }}>
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-primary font-semibold text-sm uppercase tracking-wider">Services</p>
              <h2 className="mt-2 text-4xl font-bold tracking-tight">Everything you need, in one place</h2>
            </div>
            <a href="#" className="hidden md:inline-flex items-center gap-2 text-primary font-semibold">See all <ArrowRight className="w-4 h-4" /></a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {services.map(({ icon: Icon, label }) => (
              <div key={label} className="service-tile">
                <div className="w-14 h-14 rounded-2xl grid place-items-center" style={{ background: "color-mix(in oklab, var(--primary) 12%, transparent)" }}>
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <span className="font-semibold text-sm">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Promos */}
      <section id="promos" className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider">Promos</p>
          <h2 className="mt-2 text-4xl font-bold tracking-tight">Treat yourself to exciting promos</h2>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {promos.map((p) => (
              <article key={p.title} className="group rounded-3xl overflow-hidden bg-card border border-border hover:shadow-lg transition-all">
                <div className={`h-40 bg-gradient-to-br ${p.tint} relative`}>
                  <span className="absolute top-4 left-4 bg-white/90 text-primary text-xs font-bold px-3 py-1 rounded-full">{p.tag}</span>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg tracking-tight">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                  <a href="#" className="mt-4 inline-flex items-center gap-1 text-primary font-semibold text-sm group-hover:gap-2 transition-all">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why Pundar */}
      <section id="about" className="py-20 bg-secondary">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-3 gap-8">
          {[
            { icon: ShieldCheck, title: "Bank-grade security", desc: "Your money and data are protected with end-to-end encryption and biometric login." },
            { icon: Zap, title: "Instant transfers", desc: "Send and receive money in seconds — 24/7, no waiting, no hidden fees." },
            { icon: Users, title: "Loved by millions", desc: "Join over 80 million Filipinos who trust Pundar for their everyday transactions." },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-background rounded-3xl p-8">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 grid place-items-center">
                <Icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="mt-5 text-xl font-bold">{title}</h3>
              <p className="mt-2 text-muted-foreground text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Partners */}
      <section id="partners" className="py-16 bg-background border-y border-border">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <p className="text-sm text-muted-foreground font-medium">Trusted by leading brands & partners</p>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-6 gap-8 items-center text-muted-foreground">
            {["VISA", "Mastercard", "BPI", "GrabPay", "Shopee", "Lazada"].map((b) => (
              <div key={b} className="text-2xl font-bold tracking-tight opacity-60 hover:opacity-100 transition-opacity">{b}</div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="get-started" className="py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="relative overflow-hidden rounded-[2rem] p-12 lg:p-16 text-white text-center" style={{ background: "var(--gradient-hero)" }}>
            <div className="absolute inset-0 opacity-40" style={{ background: "radial-gradient(circle at 30% 20%, white 0%, transparent 40%)" }} />
            <div className="relative">
              <Landmark className="w-12 h-12 mx-auto opacity-90" />
              <h2 className="mt-5 text-4xl lg:text-5xl font-black tracking-tight">Get Pundar today</h2>
              <p className="mt-4 text-white/85 max-w-xl mx-auto">Download the app, verify in minutes, and start moving your money the smart way.</p>
              <div className="mt-8 flex flex-wrap gap-3 justify-center">
                <button className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary rounded-full font-semibold hover:bg-white/90 transition">
                  <ShoppingBag className="w-4 h-4" /> App Store
                </button>
                <button className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-full font-semibold hover:bg-black/80 transition">
                  <ShoppingBag className="w-4 h-4" /> Google Play
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="help" className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-6 py-14 grid md:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-full bg-white grid place-items-center text-primary font-bold">P</div>
              <span className="text-xl font-bold">pundar</span>
            </div>
            <p className="mt-4 text-sm text-white/75 max-w-xs">Your everyday money app. Send, pay, save, and more.</p>
          </div>
          {[
            { h: "Services", l: ["Send Money", "Pay Bills", "Save", "Invest"] },
            { h: "Company", l: ["About Us", "Careers", "Press", "Partners"] },
            { h: "Support", l: ["Help Center", "Contact", "Security", "Privacy"] },
          ].map((c) => (
            <div key={c.h}>
              <h4 className="font-bold text-sm uppercase tracking-wider text-white/90">{c.h}</h4>
              <ul className="mt-4 space-y-2 text-sm text-white/75">
                {c.l.map((i) => <li key={i}><a href="#" className="hover:text-white">{i}</a></li>)}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-white/15">
          <div className="mx-auto max-w-7xl px-6 py-5 text-xs text-white/70 flex flex-wrap justify-between gap-3">
            <span>© {new Date().getFullYear()} Pundar. All rights reserved.</span>
            <span>Regulated by the Bangko Sentral ng Pilipinas.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
