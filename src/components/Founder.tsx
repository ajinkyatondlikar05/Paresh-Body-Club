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
      badgeClass: "bg-emerald-500/10 border border-emerald-500/20 text-emerald-400",
      iconColor: "text-emerald-400",
    },
  ];

  return (
    <section
      id="founder"
      className="py-20 lg:py-28 bg-black relative overflow-hidden"
    >
      {/* 05 Stencil Watermark */}
      <div className="absolute top-12 right-12 text-[140px] font-display font-black text-white/5 select-none pointer-events-none tracking-tighter leading-none z-0">
        05
      </div>

      {/* Subtle grid pattern background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.05] z-0 pointer-events-none" />

      {/* Top Red Accent Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-red-500/30 to-transparent z-10 pointer-events-none" />

      {/* Background ambient red glows */}
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-red-600/6 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 left-1/3 w-[300px] h-[300px] bg-red-600/4 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">

        {/* ── TOP SECTION: Text + Unified Image Column ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start mb-16">

          {/* ── LEFT: Metadata, Bio, and Quote ── */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div>
              <span className="text-red-500 font-display font-black uppercase text-xs sm:text-sm tracking-widest block mb-2">
                FOUNDER &amp; HEAD TRAINER
              </span>
              <h2 className="font-display font-black text-5xl sm:text-6xl lg:text-7xl xl:text-[80px] text-white uppercase tracking-tighter leading-[0.88] mb-3">
                PARESH<br />HINDURAO
              </h2>
              <div className="text-stone-400 font-sans text-[11px] sm:text-xs font-bold mt-3 uppercase tracking-wider flex flex-wrap items-center gap-x-2 gap-y-1">
                <span>PROFESSIONAL BODYBUILDER</span>
                <span className="text-red-500 font-black">•</span>
                <span>IFSA CERTIFIED TRAINER</span>
                <span className="text-red-500 font-black">•</span>
                <span className="text-red-500">PARESH BODY CLUB</span>
              </div>
            </div>

            <p className="text-stone-300 font-sans text-sm sm:text-base leading-relaxed font-light max-w-2xl">
              "Paresh Hindurao is a passionate fitness trainer and professional bodybuilder dedicated to transforming lives through fitness and discipline. With multiple bodybuilding titles and years of gym training experience, he founded PARESH BODY CLUB MURBAD to inspire the youth of Murbad towards health, strength, and confidence."
            </p>

            {/* Philosophy Quote Card */}
            <div className="border border-red-500/15 bg-red-950/15 backdrop-blur-lg p-6 sm:p-7 rounded-r-xl border-l-4 border-l-red-500 relative group overflow-hidden shadow-[0_0_30px_rgba(239,68,68,0.1)] max-w-2xl transition-all duration-500 hover:border-red-500/25 hover:shadow-[0_0_40px_rgba(239,68,68,0.18)]">
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

          {/* ── RIGHT: Unified Cinematic Photo (all breakpoints) ── */}
          <div className="lg:col-span-5 relative w-full select-none">
            {/* Outer glow ring */}
            <div className="absolute -inset-4 bg-red-600/6 rounded-2xl blur-2xl pointer-events-none z-0" />

            {/* Image container — unified for both mobile and desktop */}
            <div className="relative h-[420px] sm:h-[520px] lg:h-[580px] xl:h-[620px] w-full overflow-hidden rounded-2xl z-10 shadow-[0_25px_60px_rgba(0,0,0,0.8)]">
              {/* Subtle red glows inside the frame */}
              <div className="absolute -right-10 bottom-10 w-[280px] h-[280px] bg-gradient-to-tr from-red-600/15 to-transparent blur-[80px] rounded-full pointer-events-none z-0" />
              <div className="absolute right-16 top-16 w-[200px] h-[200px] bg-gradient-to-bl from-red-600/10 to-transparent blur-[60px] rounded-full pointer-events-none z-0" />

              {/* Main photo */}
              <img
                src="/founder-leaning.png"
                alt="Founder Paresh Hindurao - Bodybuilding Champion"
                className="w-full h-full object-cover object-[65%_top] filter brightness-[1.18] contrast-[1.18] saturate-[1.12] hue-rotate-[2deg] relative z-10"
              />

              {/* Volumetric warm spotlight on face & shoulders */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_42%_30%,rgba(254,215,170,0.13)_0%,rgba(239,68,68,0.07)_30%,transparent_60%)] z-20 pointer-events-none mix-blend-screen" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_45%,rgba(254,215,170,0.08)_0%,rgba(239,68,68,0.04)_35%,transparent_70%)] z-20 pointer-events-none mix-blend-screen" />

              {/* Edge gradient fades — blend into surrounding card / section */}
              {/* Left */}
              <div className="absolute left-0 inset-y-0 w-[22%] bg-gradient-to-r from-black via-black/55 to-transparent z-30 pointer-events-none" />
              {/* Right */}
              <div className="absolute right-0 inset-y-0 w-[12%] bg-gradient-to-l from-black/60 to-transparent z-30 pointer-events-none" />
              {/* Top */}
              <div className="absolute top-0 inset-x-0 h-[60px] bg-gradient-to-b from-black to-transparent z-30 pointer-events-none" />
              {/* Bottom — solid block + gradient to mask any watermark */}
              <div className="absolute bottom-0 inset-x-0 h-[100px] bg-black z-30 pointer-events-none" />
              <div className="absolute bottom-[100px] inset-x-0 h-[120px] bg-gradient-to-t from-black to-transparent z-30 pointer-events-none" />
            </div>
          </div>

        </div>

        {/* ── BOTTOM SECTION: Accomplishments + Instagram ── */}
        <div className="space-y-8 pt-8 border-t border-white/5">

          {/* Header */}
          <div className="flex items-center gap-2 pb-2">
            <Crown size={16} className="text-red-500" />
            <h3 className="font-display font-black text-xs uppercase tracking-widest text-[#9ca3af]">
              OFFICIAL BODYBUILDING ACCOMPLISHMENTS
            </h3>
          </div>

          {/* 2×2 Achievement Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {achievements.map((ach) => {
              const IconComp = ach.icon;
              return (
                <div
                  key={ach.id}
                  className="p-5 sm:p-6 border border-white/5 hover:border-red-500/20 rounded-xl flex items-center gap-5 bg-neutral-900/10 hover:bg-neutral-900/20 relative group transition-all duration-500 hover:shadow-[0_0_25px_rgba(239,68,68,0.06)]"
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

          {/* Instagram Follow Bar */}
          <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="flex items-center gap-4 text-left">
              <div className="p-3 bg-red-600/10 rounded-xl border border-red-500/20 text-red-500 shadow-[0_0_15px_rgba(239,68,68,0.15)]">
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
              className="px-8 py-3.5 bg-neutral-900/40 hover:bg-red-600/20 text-stone-200 hover:text-white hover:border-red-500/35 text-xs font-black uppercase tracking-widest rounded-lg border border-white/10 flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-[0_0_20px_rgba(239,68,68,0.15)]"
            >
              FOLLOW ON INSTAGRAM
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
