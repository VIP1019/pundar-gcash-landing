import { createFileRoute, Link } from "@tanstack/react-router";
import { Users, Lock, ShieldCheck, Sparkles, Check, ArrowRight, QrCode, Star } from "lucide-react";
import { SiteShell } from "@/components/SiteChrome";
import circleImg from "@/assets/pundar-circle.jpg";
import homeImg from "@/assets/pundar-home.jpg";
const circleShot = { url: circleImg };
const homeShot = { url: homeImg };

export const Route = createFileRoute("/circle")({
  head: () => ({
    meta: [
      { title: "PUNDAR Circle â€” Paluwagan on Stellar with Soroban escrow" },
      { name: "description", content: "Digitized Filipino paluwagan secured by Soroban smart contracts. Trustless group savings with automatic payouts, refunds, and reputation scoring." },
      { property: "og:title", content: "PUNDAR Circle â€” Trustless paluwagan" },
      { property: "og:description", content: "Save with your circle, secured by Stellar smart contracts. No one can abscond with the funds." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: circleShot.url },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: circleShot.url },
    ],
  }),
  component: CirclePage,
});

const pillars = [
  { icon: Lock, title: "Soroban escrow", desc: "Contributions locked in a cryptographic contract â€” no admin can walk off with the funds." },
  { icon: ShieldCheck, title: "Auto payouts", desc: "The contract enforces the payout cycle and refunds automatically if a deadline lapses." },
  { icon: QrCode, title: "Invite anyone", desc: "Bring members in via phone, username, QR code, or a shareable link." },
  { icon: Star, title: "Pundar Score", desc: "Consistent contributors build a reputation score that unlocks bigger circles." },
  { icon: Sparkles, title: "Holographic UI", desc: "3D cards, shimmer, and live progress make communal savings feel premium." },
  { icon: Users, title: "Custom rules", desc: "Target amount, schedule, payout order, and penalties â€” configured per circle." },
];

function CirclePage() {
  return (
    <SiteShell>
      <section className="relative pt-20 pb-24" style={{ background: "var(--gradient-hero)" }}>
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/15 border border-purple-500/30 text-purple-300 text-xs font-bold uppercase tracking-wider">
              <Users className="w-3.5 h-3.5" /> PUNDAR Circle
            </div>
            <h1 className="mt-6 text-5xl lg:text-6xl font-black leading-[1.05] tracking-tight">
              Paluwagan,<br />reimagined on Stellar.
            </h1>
            <p className="mt-6 text-lg text-foreground/70 max-w-lg">
              The Filipino rotating-savings tradition, upgraded with Soroban smart contracts.
              Every contribution is escrowed on-chain â€” trust becomes math, not a promise.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/app" className="btn-primary">
                Start a Circle <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <Link to="/security" className="btn-ghost">How escrow works</Link>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-6 max-w-md">
              <div><div className="text-2xl font-black">100%</div><div className="text-xs text-muted-foreground mt-1">On-chain escrow</div></div>
              <div><div className="text-2xl font-black">0â‚±</div><div className="text-xs text-muted-foreground mt-1">Admin can withdraw</div></div>
              <div><div className="text-2xl font-black">Auto</div><div className="text-xs text-muted-foreground mt-1">Refunds on lapse</div></div>
            </div>
          </div>
          <div className="relative flex justify-center min-h-[520px] items-center">
            <div className="absolute w-[360px] h-[360px] rounded-full ping-ring opacity-60" />
            <div className="phone-frame w-[260px] absolute -right-2 top-10 float-slower rotate-[6deg]">
              <div className="phone-screen"><img src={homeShot.url} alt="Pundar home" /></div>
            </div>
            <div className="phone-frame w-[280px] relative z-10 float-slow">
              <div className="phone-screen"><img src={circleShot.url} alt="PUNDAR Circle paluwagan" /></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-purple-300 font-semibold text-sm uppercase tracking-widest">Built on Soroban</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight">Communal savings, cryptographic trust.</h2>
          </div>
          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {pillars.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="glass-card p-8">
                <div className="w-12 h-12 rounded-2xl bg-purple-500/15 border border-purple-500/30 grid place-items-center">
                  <Icon className="w-6 h-6 text-purple-300" />
                </div>
                <h3 className="mt-5 text-xl font-bold">{title}</h3>
                <p className="mt-2 text-muted-foreground text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6 glass-card p-10 lg:p-14">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest">Lifecycle</p>
          <h3 className="mt-3 text-3xl font-black tracking-tight">From invite to payout.</h3>
          <ol className="mt-8 grid md:grid-cols-4 gap-6">
            {[
              "Create circle & set rules",
              "Invite members by QR/link",
              "Contribute on schedule",
              "Escrow releases the payout",
            ].map((step, i) => (
              <li key={step} className="flex flex-col gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 border border-primary/40 grid place-items-center text-primary font-bold">
                  {i + 1}
                </div>
                <p className="text-sm text-foreground/85">{step}</p>
                <Check className="w-4 h-4 text-mint" />
              </li>
            ))}
          </ol>
        </div>
      </section>
    </SiteShell>
  );
}

