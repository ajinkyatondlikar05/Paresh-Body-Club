import { Trophy, Award, Flame, Crown, Instagram } from "lucide-react";

export default function Founder() {
  const achievements = [
    {
      id: "ach-1",
      number: "5",
      suffix: "x",
      suffixColor: "text-red-500",
      label: "MURBAD SHREE CHAMPION",
      icon: Crown,
      badgeClass: "bg-red-500/10 border border-red-500/20 text-red-500",
      iconColor: "text-red-500",
    },
    {
      id: "ach-2",
      number: "2",
      suffix: "x",
      suffixColor: "text-red-500",
      label: "SHAHAPUR SHREE CHAMPION",
      icon: Trophy,
      badgeClass: "bg-amber-500/10 border border-amber-500/20 text-amber-500",
      iconColor: "text-amber-500",
    },
    {
      id: "ach-3",
      number: "1",
      suffix: "🥈",
      suffixColor: "",
      label: "THANE SHREE RUNNER-UP",
      icon: Award,
      badgeClass: "bg-stone-500/10 border border-stone-500/20 text-stone-300",
      iconColor: "text-zinc-400",
    },
    {
      id: "ach-4",
      number: "IFSA",
      suffix: "✔",
      suffixColor: "text-red-500",
      label: "CERTIFIED GYM TRAINER",
      icon: Flame,
      badgeClass: "bg-emerald-500/10 border border-emerald-500/20 text-emerald-450",
      iconColor: "text-emerald-450",
    }
  ];

  return (
    <section 
      id="founder" 
      className="py-0 lg:py-28 bg-black relative overflow-hidden flex items-center"
    >
      {/* 05 Stencil Watermark */}
      <div className="absolute top-12 right-12 text-[140px] font-display font-black text-white/5 select-none pointer-events-none tracking-tighter leading-none z-0">
        05
      </div>

      {/* Smooth Dark Vignette for Focus */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.85)_95%)] z-25 pointer-events-none" />

      {/* Subtle grid pattern background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.05] z-0 pointer-events-none" />

      {/* Top Red Accent Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-red-500/30 to-transparent z-10 pointer-events-none" />

      {/* DESKTOP ONLY: Cinematic background-style full-height image wrapper */}
      <div className="absolute right-0 top-0 bottom-0 w-[50vw] xl:w-[46vw] hidden lg:block z-10 pointer-events-none select-none overflow-hidden">
        {/* Subtle red background glows behind the photo */}
        <div className="absolute -right-12 bottom-12 w-[350px] h-[350px] bg-gradient-to-tr from-red-600/15 to-transparent blur-[100px] rounded-full pointer-events-none z-0" />
        <div className="absolute right-24 top-24 w-[250px] h-[250px] bg-gradient-to-bl from-red-600/10 to-transparent blur-[80px] rounded-full pointer-events-none z-0" />
        
        <img
          src="/founder-leaning.png"
          alt="Founder Paresh Hindurao - Bodybuilding Champion"
          className="w-full h-full object-cover object-[65%_center] filter brightness-[1.16] contrast-[1.18] saturate-[1.12] hue-rotate-[2deg] drop-shadow-[0_0_35px_rgba(239,68,68,0.12)] relative z-10"
        />
        
        {/* Volumetric Warm Spotlight & Rim Lighting */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_42%_32%,rgba(254,215,170,0.12)_0%,rgba(239,68,68,0.06)_30%,transparent_60%)] z-15 pointer-events-none mix-blend-screen" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_45%,rgba(254,215,170,0.08)_0%,rgba(239,68,68,0.04)_35%,transparent_70%)] z-15 pointer-events-none mix-blend-screen" />

        {/* Gradient masks to seamlessly blend the edges */}
        {/* Left edge fade */}
        <div className="absolute left-0 inset-y-0 w-[28%] bg-gradient-to-r from-black via-black/50 to-transparent z-20" />
        
        {/* Bottom edge fade — solid black block + gradient above it to mask watermark */}
        <div className="absolute bottom-0 inset-x-0 h-[140px] bg-black z-20" />
        <div className="absolute bottom-[140px] inset-x-0 h-[140px] bg-gradient-to-t from-black to-transparent z-20" />
        
        {/* Top edge fade */}
        <div className="absolute top-0 inset-x-0 h-[70px] bg-gradient-to-b from-black to-transparent z-20" />
        {/* Right edge fade */}
        <div className="absolute right-0 inset-y-0 w-[15%] bg-gradient-to-l from-black to-transparent z-20" />
      </div>

      {/* ═══════════════════════════════════════════
          MOBILE ONLY: Full-width image — appears FIRST
          (desktop version uses the absolute bg image above)
      ═══════════════════════════════════════════ */}
      <div className="block lg:hidden w-full relative select-none overflow-hidden" style={{ aspectRatio: '3/4' }}>
        {/* Red ambient glow */}
        <div className="absolute inset-0 bg-red-600/5 blur-[90px] rounded-full pointer-events-none z-0" />

        <img
          src="/founder-leaning.png"
          alt="Founder Paresh Hindurao - Bodybuilding Champion"
          className="w-full h-full object-cover object-[60%_top] filter brightness-[1.16] contrast-[1.18] saturate-[1.12] hue-rotate-[2deg] relative z-10"
          style={{ display: 'block' }}
        />

        {/* Volumetric warm spotlight */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_42%_32%,rgba(254,215,170,0.12)_0%,rgba(239,68,68,0.06)_30%,transparent_60%)] pointer-events-none mix-blend-screen z-20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_45%,rgba(254,215,170,0.08)_0%,rgba(239,68,68,0.04)_35%,transparent_70%)] pointer-events-none mix-blend-screen z-20" />

        {/* Edge blending — subtle only, keep face fully visible */}
        <div className="absolute left-0 inset-y-0 w-[8%] bg-gradient-to-r from-black/60 to-transparent z-30 pointer-events-none" />
        <div className="absolute right-0 inset-y-0 w-[8%] bg-gradient-to-l from-black/60 to-transparent z-30 pointer-events-none" />
        {/* Bottom fade into the content below */}
        <div className="absolute bottom-0 inset-x-0 h-[80px] bg-gradient-to-t from-black to-transparent z-30 pointer-events-none" />
        {/* Top red accent line */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-red-500/40 to-transparent z-30 pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full pt-6 pb-10 lg:pt-0 lg:pb-0">
        
        {/* TOP PANEL: left text col + right col (empty on desktop — photo is absolute) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-12">
          
          {/* Left Side: Metadata, Philosophy, and Credentials */}
          <div className="lg:col-span-8 space-y-6 text-left relative z-20">
            <div>
              <span className="text-red-500 font-display font-black uppercase text-xs sm:text-sm tracking-widest block mb-2">
                FOUNDER &amp; HEAD TRAINER
              </span>
              <h2 className="font-display font-black text-white uppercase tracking-tighter leading-[0.85] mb-3"
                style={{ fontSize: "clamp(2.2rem, 9vw, 6rem)" }}
              >
                PARESH HINDURAO
              </h2>
              <div className="text-stone-400 font-sans text-[11px] sm:text-xs font-bold mt-2.5 uppercase tracking-wider flex flex-wrap items-center gap-x-2 gap-y-1">
                <span>PROFESSIONAL BODYBUILDER</span>
                <span className="text-red-500 font-black">•</span>
                <span>IFSA CERTIFIED TRAINER</span>
                <span className="text-red-500 font-black">•</span>
                <span className="text-red-500">PARESH BODY CLUB</span>
              </div>
            </div>

            <p className="text-stone-300 font-sans text-sm sm:text-base leading-relaxed font-light max-w-3xl">
              "Paresh Hindurao is a passionate fitness trainer and professional bodybuilder dedicated to transforming lives through fitness and discipline. With multiple bodybuilding titles and years of gym training experience, he founded PARESH BODY CLUB MURBAD to inspire the youth of Murbad towards health, strength, and confidence."
            </p>

            {/* Philosophy Room Glassmorphism Quote Card */}
            <div className="border border-red-500/15 bg-red-950/15 backdrop-blur-lg p-4 sm:p-7 rounded-r-xl border-l-4 border-l-red-500 relative group overflow-hidden shadow-[0_0_30px_rgba(239,68,68,0.1)] max-w-full lg:max-w-3xl transition-all duration-500 hover:border-red-500/25 hover:shadow-[0_0_40px_rgba(239,68,68,0.18)]">
              <span className="text-stone-500 text-[10px] uppercase font-bold tracking-widest block mb-2">
                PERSONAL PHILOSOPHY ROOM
              </span>
              <p className="font-display font-black text-neutral-100 text-sm sm:text-xl uppercase tracking-wide italic leading-relaxed">
                "DISCIPLINE, DEDICATION &amp; HARD WORK BUILD CHAMPIONS."
              </p>
              <span className="block text-right text-xs text-red-500 uppercase font-bold mt-2 tracking-widest">
                — PARESH HINDURAO
              </span>
            </div>
          </div>

          {/* Desktop right col spacer — the photo is absolute-positioned on desktop */}
          <div className="hidden lg:block lg:col-span-4" />

        </div>

        {/* BOTTOM PANEL: Accomplishments and Instagram */}
        <div className="space-y-8 pt-8 border-t border-white/5">
          
          {/* Header */}
          <div className="flex items-center gap-2 pb-2">
            <Crown size={16} className="text-red-500" />
            <h3 className="font-display font-black text-xs uppercase tracking-widest text-[#9ca3af]">
              OFFICIAL BODYBUILDING ACCOMPLISHMENTS
            </h3>
          </div>

          {/* Achievement cards — single column on mobile, 2-col on sm+ */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {achievements.map((ach) => {
              const IconComp = ach.icon;
              return (
                <div
                  key={ach.id}
                  className="p-6 border border-white/5 hover:border-red-500/20 rounded-xl flex items-center gap-5 bg-neutral-900/10 hover:bg-neutral-900/20 relative group transition-all duration-500 hover:shadow-[0_0_25px_rgba(239,68,68,0.06)]"
                >
                  <div className={`p-3.5 rounded-lg shrink-0 transition-transform duration-300 group-hover:scale-105 ${ach.badgeClass}`}>
                    <IconComp size={20} className={ach.iconColor} />
                  </div>
                  <div>
                    <div className="font-display font-black text-xl sm:text-2xl flex items-baseline gap-1 leading-none">
                      <span className="text-white">{ach.number}</span>
                      <span className={`${ach.suffixColor || "text-white"} text-base sm:text-lg font-extrabold`}>
                        {ach.suffix}
                      </span>
                    </div>
                    <span className="text-[#9ca3af] font-sans text-xs font-semibold uppercase tracking-wider block mt-1.5 leading-tight">
                      {ach.label}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Footer Instagram bar */}
          <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-6">
            <div className="flex items-center gap-4 text-left">
              <div className="p-3 bg-red-600/10 rounded-xl border border-red-500/20 text-red-500 shadow-[0_0_15px_rgba(239,68,68,0.15)] shrink-0">
                <Instagram size={22} />
              </div>
              <div>
                <span className="text-[10px] text-stone-500 uppercase font-bold block tracking-wider">FOLLOW PARESH ON INSTAGRAM</span>
                <a 
                  href="https://instagram.com/pareshhindurao" 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-white hover:text-red-500 text-sm sm:text-base font-black uppercase tracking-wider block mt-0.5 transition-colors duration-300"
                >
                  @pareshhindurao
                </a>
              </div>
            </div>

            <a
              href="https://instagram.com/pareshhindurao"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto px-8 py-3.5 bg-neutral-900/40 hover:bg-red-600/20 text-stone-200 hover:text-white hover:border-red-500/35 text-xs font-black uppercase tracking-widest rounded-lg border border-white/10 flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-[0_0_20px_rgba(239,68,68,0.15)]"
            >
              FOLLOW ON INSTAGRAM
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
