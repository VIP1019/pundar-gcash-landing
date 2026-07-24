import { createFileRoute, Link } from "@tanstack/react-router";
import { Receipt, QrCode, Zap, Users, Check, ArrowRight, Sparkles, ShieldCheck } from "lucide-react";
import { SiteShell } from "@/components/SiteChrome";
import payShot from "@/assets/pundar-pay.jpg.asset.json";
import quickShot from "@/assets/pundar-quick.jpg.asset.json";

export const Route = createFileRoute("/pay")({
  head: () => ({
    meta: [
      { title: "PUNDAR Pay — Split bills & pay instantly on Stellar" },
      { name: "description", content: "Group bills, QR payments, and instant settlement powered by Stellar. Split dinners, subscriptions, and outings with zero friction." },
      { property: "og:title", content: "PUNDAR Pay — Instant bill splits on Stellar" },
      { property: "og:description", content: "Split any expense, settle in seconds, and pay merchants by QR — all on Stellar rails." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: payShot.url },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: payShot.url },
    ],
  }),
  component: PayPage,
});

const features = [
  { icon: Receipt, title: "Group bills", desc: "Split equally or itemize each line. Track who paid in real-time." },
  { icon: Zap, title: "Instant settle", desc: "Batch-pay every pending bill in a single Stellar transaction." },
  { icon: QrCode, title: "QR pay & request", desc: "Generate one-time codes or scan merchant QR — with expiry & anti-double-pay." },
  { icon: Sparkles, title: "Auto round-ups", desc: "Every payment rounds up to the nearest peso and funds your investments." },
  { icon: ShieldCheck, title: "MPIN authorized", desc: "Biometric or MPIN confirmation before any settlement leaves your wallet." },
  { icon: Users, title: "Shared history", desc: "Every group keeps a transparent ledger of contributions and settlements." },
];

function PayPage() {
  return (
    <SiteShell>
      <section className="relative pt-20 pb-24" style={{ background: "var(--gradient-hero)" }}>
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/15 border border-primary/30 text-primary text-xs font-bold uppercase tracking-wider">
              <Receipt className="w-3.5 h-3.5" /> PUNDAR Pay
            </div>
            <h1 className="mt-6 text-5xl lg:text-6xl font-black leading-[1.05] tracking-tight">
              Split bills the smart way.
            </h1>
            <p className="mt-6 text-lg text-foreground/70 max-w-lg">
              From barkada dinners to shared subscriptions, PUNDAR Pay handles the math,
              collects the money, and settles it in seconds on Stellar — fees measured in
              fractions of a centavo.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/about" hash="download" className="btn-primary">
                Get Pundar <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <Link to="/circle" className="btn-ghost">Explore Circle</Link>
            </div>
          </div>
          <div className="relative flex justify-center min-h-[520px] items-center">
            <div className="absolute w-[360px] h-[360px] rounded-full ping-ring opacity-60" />
            <div className="phone-frame w-[260px] absolute -left-2 top-10 float-slower rotate-[-6deg]">
              <img src={quickShot.url} alt="Quick pay" className="w-full rounded-[2rem]" />
            </div>
            <div className="phone-frame w-[280px] relative z-10 float-slow">
              <img src={payShot.url} alt="PUNDAR Pay bill splitting" className="w-full rounded-[2rem]" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-primary font-semibold text-sm uppercase tracking-widest">How it works</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight">Everything a group of friends needs.</h2>
          </div>
          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {features.map(({ icon: Icon, title, desc }) => (
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

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6 glass-card p-10 lg:p-14">
          <div className="grid lg:grid-cols-3 gap-8">
            {[
              { step: "01", title: "Create a bill", desc: "Add members, pick equal split or itemize." },
              { step: "02", title: "Track in real-time", desc: "See who has paid, who's pending. Nudges are built in." },
              { step: "03", title: "Settle in one tap", desc: "MPIN-confirm and Stellar settles every share at once." },
            ].map((s) => (
              <div key={s.step} className="flex flex-col gap-3">
                <span className="text-primary font-black text-3xl">{s.step}</span>
                <h4 className="text-xl font-bold">{s.title}</h4>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
                <Check className="w-5 h-5 text-mint" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
