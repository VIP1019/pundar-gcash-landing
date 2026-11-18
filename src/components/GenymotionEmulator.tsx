import { Play, Users, MonitorSmartphone } from "lucide-react";

export function GenymotionEmulator() {
  // Appetize: free, no login required, every visitor gets their own session
  const appetizeUrl = `https://appetize.io/app/f275jse366wq7oyerbnwnjwj6i?device=pixel7&osVersion=13&scale=75&orientation=portrait&deviceColor=black&autoplay=true`;

  const launch = () => {
    window.open(appetizeUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="relative rounded-3xl overflow-hidden border border-white/10 flex flex-col items-center justify-between gap-0 p-8"
         style={{ minHeight: 680, background: "linear-gradient(135deg, oklch(0.18 0.06 260), oklch(0.12 0.04 270))" }}>

      {/* Rings */}
      <div className="absolute w-[360px] h-[360px] rounded-full border border-primary/10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute w-[240px] h-[240px] rounded-full border border-primary/15 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      {/* Live badge */}
      <div className="relative z-10 w-full flex justify-center pt-2">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider"
             style={{ background: "oklch(0.78 0.19 155 / 0.15)", border: "1px solid oklch(0.78 0.19 155 / 0.4)", color: "oklch(0.78 0.19 155)" }}>
          <span className="w-2 h-2 rounded-full bg-current animate-pulse" />
          Live Demo · No Login Required
        </div>
      </div>

      {/* Phone mockup */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center gap-4">
        <div className="relative float-slow" style={{ width: 200 }}>
          <div className="absolute -left-[5px] top-[72px] w-[5px] h-[28px] rounded-l-sm" style={{ background: "oklch(0.22 0.04 260)" }} />
          <div className="absolute -left-[5px] top-[108px] w-[5px] h-[46px] rounded-l-sm" style={{ background: "oklch(0.22 0.04 260)" }} />
          <div className="absolute -left-[5px] top-[162px] w-[5px] h-[46px] rounded-l-sm" style={{ background: "oklch(0.22 0.04 260)" }} />
          <div className="absolute -right-[5px] top-[126px] w-[5px] h-[54px] rounded-r-sm" style={{ background: "oklch(0.22 0.04 260)" }} />
          <div className="relative rounded-[2.6rem] overflow-hidden"
               style={{
                 padding: "10px 8px",
                 background: "linear-gradient(160deg, oklch(0.28 0.05 260), oklch(0.10 0.03 260))",
                 border: "2px solid oklch(0.32 0.05 260)",
                 boxShadow: "0 40px 80px -20px oklch(0 0 0 / 0.85), inset 0 1px 0 oklch(1 0 0 / 0.12), 0 0 60px -15px oklch(0.68 0.19 250 / 0.5)"
               }}>
            <div className="absolute top-3 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1 px-3 h-6 rounded-full"
                 style={{ background: "#000", minWidth: 80 }}>
              <div className="w-1.5 h-1.5 rounded-full" style={{ background: "oklch(0.15 0.02 260)" }} />
              <div className="flex-1" />
              <div className="w-2.5 h-2.5 rounded-full" style={{ background: "oklch(0.13 0.02 260)", border: "1px solid oklch(0.22 0.03 260)" }} />
            </div>
            <div className="relative rounded-[2rem] overflow-hidden"
                 style={{ background: "linear-gradient(135deg, oklch(0.12 0.06 260), oklch(0.08 0.04 270))", aspectRatio: "9/19.5" }}>
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-4">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl"
                     style={{ background: "oklch(0.68 0.19 250 / 0.2)", border: "1px solid oklch(0.68 0.19 250 / 0.4)" }}>P</div>
                <div className="text-center">
                  <div className="font-black text-sm tracking-wider text-white">PUNDAR</div>
                  <div className="text-[9px] text-white/40 mt-0.5">Build Together. Grow Together.</div>
                </div>
                <div className="w-16 h-5 rounded-full flex items-center justify-center text-[8px] font-bold"
                     style={{ background: "oklch(0.68 0.19 250 / 0.15)", border: "1px solid oklch(0.68 0.19 250 / 0.3)", color: "oklch(0.68 0.19 250)" }}>★ Stellar</div>
              </div>
              <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-5 pt-1.5 z-10">
                <span className="text-white text-[8px] font-semibold opacity-80">9:41</span>
                <div style={{ width: 16, height: 8, borderRadius: 2, border: "1.2px solid white", padding: "1px", opacity: 0.8, display: "flex" }}>
                  <div style={{ width: "75%", background: "#4ade80", borderRadius: 1 }} />
                </div>
              </div>
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-16 h-1 rounded-full z-10"
                   style={{ background: "oklch(1 0 0 / 0.25)" }} />
            </div>
          </div>
        </div>
        <div className="text-center">
          <div className="font-black text-xl">PUNDAR · Android Demo</div>
          <div className="text-muted-foreground text-sm mt-1">Pixel 7 · Android 13 · Real APK</div>
        </div>
      </div>

      {/* Launch button */}
      <div className="relative z-10 w-full flex flex-col items-center gap-3">
        <button
          onClick={launch}
          className="w-full inline-flex items-center justify-center gap-3 px-6 py-4 rounded-2xl font-bold text-base transition hover:scale-[1.02] active:scale-[0.98]"
          style={{ background: "var(--primary)", color: "var(--primary-foreground)", boxShadow: "0 0 40px -10px var(--primary)" }}
        >
          <Play className="w-5 h-5 fill-current" />
          Launch Live Demo
          <span className="ml-auto text-xs font-normal opacity-70 flex items-center gap-1.5">
            <Users className="w-3 h-3" /> Opens in new tab
          </span>
        </button>
        <p className="text-xs text-muted-foreground text-center flex items-center gap-1.5">
          <MonitorSmartphone className="w-3 h-3" />
          No login · No install · Every visitor gets their own session
        </p>
      </div>
    </div>
  );
}
