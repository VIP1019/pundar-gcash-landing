import { createFileRoute } from "@tanstack/react-router";
import { Smartphone, Download, Play, ArrowRight, ShieldCheck, Zap, Star, MonitorSmartphone, Users } from "lucide-react";
import { SiteShell } from "@/components/SiteChrome";
import logoImg from "@/assets/logo.png";
import { useState } from "react";
import { GenymotionEmulator } from "@/components/GenymotionEmulator";
export const Route = createFileRoute("/app")({
  head: () => ({
    meta: [
      { title: "PUNDAR App — Download & Try Live Demo" },
      { name: "description", content: "Download the PUNDAR APK for Android or try the live interactive demo right in your browser. No install required for the demo." },
      { property: "og:title", content: "PUNDAR App Demo & APK Download" },
      { property: "og:type", content: "website" },
    ],
  }),
  component: AppPage,
});

function AppPage() {
  const [sessionKey] = useState(() => Date.now().toString());

  // /embed/ URL is always anonymous — no Appetize account login ever applies.
  // Each page load generates a unique key so every visitor gets a fresh session.
  const embedSrc = `https://appetize.io/embed/r7bxncx7iz3xnnqks3onwhjavq?device=pixel7&osVersion=13&scale=auto&orientation=portrait&deviceColor=black&autoplay=true&centered=both&screenOnly=false&toast=bottom`;
  return (
    <SiteShell>
      {/* Hero */}
      <section className="relative pt-20 pb-16" style={{ background: "var(--gradient-hero)" }}>
        <div className="mx-auto max-w-7xl px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/15 border border-primary/30 text-primary text-xs font-bold uppercase tracking-wider">
            <MonitorSmartphone className="w-3.5 h-3.5" /> Live App Demo
          </div>
          <h1 className="mt-6 text-5xl lg:text-6xl font-black leading-tight tracking-tight">
            Try PUNDAR<br />
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(90deg, oklch(0.78 0.19 155), oklch(0.68 0.19 250))" }}>
              right now.
            </span>
          </h1>
          <p className="mt-4 text-lg text-foreground/70 max-w-xl mx-auto">
            Run the full Android app in your browser — no install needed, no account required. Every visitor gets their own private Android session, completely free.
          </p>
        </div>
      </section>

      {/* Main content: Emulator + Download side by side */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 items-start">

          {/* Android Demo */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/15 border border-primary/30 grid place-items-center">
                <Play className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h2 className="text-xl font-black">Interactive Demo</h2>
                <p className="text-sm text-muted-foreground">Full Android emulator — runs live in your browser</p>
              </div>
            </div>

            <GenymotionEmulator />

            {/* How it works */}
            <div className="glass-card p-5 flex flex-col gap-3">
              <div className="flex items-center gap-2 text-sm font-bold text-foreground">
                <MonitorSmartphone className="w-4 h-4 text-primary" />
                How the Live Demo works
              </div>
              <ul className="space-y-2.5 text-sm text-muted-foreground">
                {[
                  { icon: "▶️", text: "Click \"Launch Live Demo\" — a real Android emulator spins up instantly" },
                  { icon: "📱", text: "A full Pixel 7 running Android 13 boots with PUNDAR pre-installed" },
                  { icon: "👆", text: "Tap, scroll, type — it behaves exactly like the real app on a real phone" },
                  { icon: "⏱️", text: "Each session runs for exactly 5 minutes, allowing multiple users to test." },
                  { icon: "📅", text: "Exclusive access window: Only available on July 31, 2026." },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="text-base leading-none mt-0.5">{item.icon}</span>
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Download Panel */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-mint/15 border border-mint/30 grid place-items-center">
                <Download className="w-5 h-5 text-mint" />
              </div>
              <div>
                <h2 className="text-xl font-black">Download PUNDAR</h2>
                <p className="text-sm text-muted-foreground">Install directly on your Android device</p>
              </div>
            </div>

            {/* APK Download Card */}
            <div className="glass-card p-8 flex flex-col gap-6">
              {/* App info */}
              <div className="flex items-center gap-4">
                <img src={logoImg} alt="PUNDAR" className="w-16 h-16 rounded-2xl object-cover" />
                <div>
                  <div className="font-black text-xl">PUNDAR</div>
                  <div className="text-sm text-muted-foreground">v1.0.0 &middot; Android 8.0+</div>
                  <div className="flex items-center gap-1 mt-1">
                    {[1,2,3,4,5].map(i => (
                      <Star key={i} className="w-3.5 h-3.5 fill-gold text-gold" />
                    ))}
                    <span className="text-xs text-muted-foreground ml-1">4.8 / 5</span>
                  </div>
                </div>
              </div>

              {/* APK details */}
              <div className="grid grid-cols-3 gap-3 text-center">
                {[
                  { label: "Size", value: "~64 MB" },
                  { label: "Version", value: "1.0.0" },
                  { label: "Requires", value: "Android 8+" },
                ].map(d => (
                  <div key={d.label} className="bg-white/5 rounded-xl p-3">
                    <div className="font-bold text-sm">{d.value}</div>
                    <div className="text-[11px] text-muted-foreground mt-0.5">{d.label}</div>
                  </div>
                ))}
              </div>

              {/* Download button */}
              <a
                href={`${import.meta.env.BASE_URL}pundar.apk`}
                download="pundar.apk"
                className="w-full inline-flex items-center justify-center gap-3 px-6 py-4 rounded-2xl font-bold text-base transition"
                style={{ background: "var(--primary)", color: "var(--primary-foreground)" }}
              >
                <Download className="w-5 h-5" />
                Download APK  (.apk)
              </a>

              {/* Trust badges */}
              <div className="flex flex-col gap-3">
                {[
                  { icon: ShieldCheck, text: "Scanned &amp; verified — no malware" },
                  { icon: Zap,         text: "Direct APK sideload — no Play Store needed" },
                  { icon: Smartphone,  text: "Enable 'Install unknown apps' in Android Settings" },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Icon className="w-4 h-4 text-mint shrink-0" />
                    <span dangerouslySetInnerHTML={{ __html: text }} />
                  </div>
                ))}
              </div>
            </div>

            {/* How to install guide */}
            <div className="glass-card p-6">
              <h3 className="font-black text-base mb-4 flex items-center gap-2">
                <Smartphone className="w-4 h-4 text-primary" /> How to install the APK
              </h3>
              <ol className="space-y-3">
                {[
                  "Tap the Download APK button above",
                  "On your Android phone, open the downloaded file from your notifications or Downloads folder",
                  "If prompted, go to Settings → Security → enable \"Install unknown apps\" for your browser",
                  "Tap Install and wait for the app to finish",
                  "Open PUNDAR and create your account",
                ].map((step, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <span className="w-6 h-6 rounded-full bg-primary/20 border border-primary/40 grid place-items-center text-primary font-bold text-xs shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <span className="text-foreground/80">{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Coming soon */}
            <div className="glass-card p-6 border border-white/5">
              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">Coming Soon</p>
              <div className="flex gap-3">
                <div className="flex-1 flex items-center gap-3 p-3 rounded-xl bg-white/5 opacity-50">
                  <Smartphone className="w-5 h-5" />
                  <div>
                    <div className="text-sm font-semibold">App Store</div>
                    <div className="text-[10px] text-muted-foreground">iOS version</div>
                  </div>
                </div>
                <div className="flex-1 flex items-center gap-3 p-3 rounded-xl bg-white/5 opacity-50">
                  <Play className="w-5 h-5" />
                  <div>
                    <div className="text-sm font-semibold">Google Play</div>
                    <div className="text-[10px] text-muted-foreground">Play Store listing</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features reminder */}
      <section className="py-16 border-t border-white/5">
        <div className="mx-auto max-w-5xl px-6">
          <p className="text-center text-sm font-semibold uppercase tracking-widest text-primary mb-8">What's inside the app</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: "💸", title: "Instant Send",    desc: "Transfer XLM in seconds" },
              { icon: "🧾", title: "Split Bills",     desc: "Group expenses made easy" },
              { icon: "🏦", title: "Paluwagan",       desc: "Smart savings circles" },
              { icon: "📈", title: "Grow",            desc: "Fractional PSE equities" },
            ].map(f => (
              <div key={f.title} className="glass-card p-5 text-center">
                <div className="text-3xl mb-3">{f.icon}</div>
                <div className="font-bold text-sm">{f.title}</div>
                <div className="text-xs text-muted-foreground mt-1">{f.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
