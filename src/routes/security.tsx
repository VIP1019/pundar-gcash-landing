import { createFileRoute, Link } from "@tanstack/react-router";
import { ShieldCheck, Fingerprint, Lock, KeyRound, Sparkles, Server, ArrowRight } from "lucide-react";
import { SiteShell } from "@/components/SiteChrome";
import splashImg from "@/assets/pundar-splash.jpg";
const splash = { url: splashImg };

export const Route = createFileRoute("/security")({
  head: () => ({
    meta: [
      { title: "Security — PUNDAR wallet, encryption & Soroban escrow" },
      { name: "description", content: "AES-256-GCM secret encryption, PBKDF2-derived MPIN keys, Soroban escrow, and Stellar's decentralized ledger — PUNDAR's full security model." },
      { property: "og:title", content: "PUNDAR Security — Bank-grade, self-custodial" },
      { property: "og:description", content: "How PUNDAR protects your money: encryption, biometrics, and on-chain escrow." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: splash.url },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: splash.url },
    ],
  }),
  component: SecurityPage,
});

const layers = [
  { icon: KeyRound, title: "AES-256-GCM encryption", desc: "Your Stellar secret seed is encrypted with a key derived from your MPIN using PBKDF2 (10,000 iterations)." },
  { icon: Fingerprint, title: "Biometric + MPIN", desc: "Face ID, fingerprint, and a 4-digit MPIN unlock every sensitive action locally on your device." },
  { icon: Lock, title: "Soroban escrow", desc: "Group savings live inside smart contracts. No admin, developer, or member can drain the pool." },
  { icon: ShieldCheck, title: "Stellar ledger", desc: "Every payment settles on the public Stellar network — auditable, immutable, near-instant." },
  { icon: Server, title: "Hybrid architecture", desc: "Firestore powers social features; Stellar handles the money. You get speed and decentralization." },
  { icon: Sparkles, title: "Anti-double-pay", desc: "Firebase-backed token verification on every QR payment prevents replay and double-spend attempts." },
];

function SecurityPage() {
  return (
    <SiteShell>
      <section className="relative pt-20 pb-20" style={{ background: "var(--gradient-hero)" }}>
        <div className="mx-auto max-w-4xl px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-mint/15 border border-mint/30 text-mint text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5" /> Security model
          </div>
          <h1 className="mt-6 text-5xl lg:text-6xl font-black leading-[1.05] tracking-tight">
            Your money. Your keys.<br />Your control.
          </h1>
          <p className="mt-6 text-lg text-foreground/70 max-w-2xl mx-auto">
            PUNDAR is a custodial wallet with non-custodial security. Your Stellar secret never
            leaves your device unencrypted, and communal funds sit inside cryptographic escrow.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <Link to="/app" className="btn-primary">
              Get Pundar <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
            <Link to="/circle" className="btn-ghost">See escrow flow</Link>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-3 gap-6">
          {layers.map(({ icon: Icon, title, desc }) => (
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
          <p className="text-primary font-semibold text-sm uppercase tracking-widest">Under the hood</p>
          <h3 className="mt-3 text-3xl font-black tracking-tight">A hybrid built for real Filipinos.</h3>
          <div className="mt-8 grid md:grid-cols-2 gap-8 text-sm text-foreground/80 leading-relaxed">
            <p>
              PUNDAR combines Firebase Firestore for real-time social features (chats, notifications,
              group state) with the Stellar blockchain for every financial movement. Money is fast
              and decentralized; the experience feels as smooth as any consumer app.
            </p>
            <p>
              An intelligent currency detector uses GPS, SIM, and network signals to configure your
              local currency across 40+ countries, fetching live XLM exchange rates so balances are
              always shown in a currency you understand.
            </p>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
