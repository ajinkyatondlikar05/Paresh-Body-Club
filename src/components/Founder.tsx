import { Trophy, Award, Flame, Crown, Instagram, Dumbbell } from "lucide-react";

/* ─────────────────────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────────────────────── */
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
    },
  ];

  return (
    <section
      id="founder"
      className="bg-black relative overflow-hidden"
    >

      {/* ══ Shared background decorations (all screen sizes) ═══════════════ */}

      {/* 05 Stencil Watermark */}
      <div className="founder-watermark absolute top-12 right-12 text-[140px] font-display font-black text-white/5 select-none pointer-events-none tracking-tighter leading-none z-0">
        05
      </div>

      {/* Smooth Dark Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.85)_95%)] z-[2] pointer-events-none" />

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.05] z-0 pointer-events-none" />

      {/* Top Red Accent Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-red-500/30 to-transparent z-10 pointer-events-none" />


      {/* ══════════════════════════════════════════════════════════════════════
          DESKTOP ONLY — Cinematic full-height absolute image
          Completely removed from mobile with hidden lg:block
          Desktop layout is 100% identical to original implementation
      ══════════════════════════════════════════════════════════════════════ */}
      <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-[50vw] xl:w-[46vw] z-10 pointer-events-none select-none overflow-hidden">
        {/* Red ambient glows */}
        <div className="absolute -right-12 bottom-12 w-[350px] h-[350px] bg-gradient-to-tr from-red-600/15 to-transparent blur-[100px] rounded-full pointer-events-none z-0" />
        <div className="absolute right-24 top-24 w-[250px] h-[250px] bg-gradient-to-bl from-red-600/10 to-transparent blur-[80px] rounded-full pointer-events-none z-0" />

        <img
          src="/founder-leaning.png"
          alt="Founder Paresh Hindurao - Bodybuilding Champion"
          className="w-full h-full object-cover object-[65%_center] filter brightness-[1.16] contrast-[1.18] saturate-[1.12] hue-rotate-[2deg] drop-shadow-[0_0_35px_rgba(239,68,68,0.12)] relative z-10"
        />

        {/* Volumetric Warm Spotlight & Rim Lighting */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_42%_32%,rgba(254,215,170,0.12)_0%,rgba(239,68,68,0.06)_30%,transparent_60%)] z-[15] pointer-events-none mix-blend-screen" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_45%,rgba(254,215,170,0.08)_0%,rgba(239,68,68,0.04)_35%,transparent_70%)] z-[15] pointer-events-none mix-blend-screen" />

        {/* Edge gradient masks */}
        <div className="absolute left-0 inset-y-0 w-[28%] bg-gradient-to-r from-black via-black/50 to-transparent z-20" />
        <div className="absolute bottom-0 inset-x-0 h-[140px] bg-black z-20" />
        <div className="absolute bottom-[140px] inset-x-0 h-[140px] bg-gradient-to-t from-black to-transparent z-20" />
        <div className="absolute top-0 inset-x-0 h-[70px] bg-gradient-to-b from-black to-transparent z-20" />
        <div className="absolute right-0 inset-y-0 w-[15%] bg-gradient-to-l from-black to-transparent z-20" />
      </div>


      {/* ══════════════════════════════════════════════════════════════════════
          DESKTOP CONTENT LAYOUT
          Hidden on mobile — lg:block
          Uses original grid-cols-12 with py-28 section padding
      ══════════════════════════════════════════════════════════════════════ */}
      <div className="hidden lg:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full py-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-12">

            {/* Desktop: Left text column */}
            <div className="lg:col-span-8 space-y-6 text-left relative z-20">
              <div>
                <span className="text-red-500 font-display font-black uppercase text-xs sm:text-sm tracking-widest block mb-2">
                  FOUNDER &amp; HEAD TRAINER
                </span>
                <h2
                  className="font-display font-black text-white uppercase tracking-tighter leading-[0.85] mb-3"
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
                "Paresh Hindurao is a passionate fitness trainer and professional bodybuilder
                dedicated to transforming lives through fitness and discipline. With multiple
                bodybuilding titles and years of gym training experience, he founded PARESH BODY
                CLUB MURBAD to inspire the youth of Murbad towards health, strength, and
                confidence."
              </p>

              {/* Desktop philosophy card */}
              <div className="border border-red-500/15 bg-red-950/15 backdrop-blur-lg rounded-r-xl border-l-4 border-l-red-500 relative overflow-hidden shadow-[0_0_30px_rgba(239,68,68,0.1)] max-w-3xl p-4 sm:p-7 transition-all duration-500 hover:border-red-500/25 hover:shadow-[0_0_40px_rgba(239,68,68,0.18)]">
                <span className="text-stone-500 text-[10px] uppercase font-bold tracking-widest block mb-1.5">
                  PERSONAL PHILOSOPHY ROOM
                </span>
                <p className="font-display font-black text-neutral-100 uppercase tracking-wide italic leading-snug text-sm sm:text-xl">
                  "DISCIPLINE, DEDICATION &amp; HARD WORK BUILD CHAMPIONS."
                </p>
                <span className="block text-right text-red-500 uppercase font-bold mt-1.5 tracking-widest text-xs">
                  — PARESH HINDURAO
                </span>
              </div>
            </div>

            {/* Desktop: Right col spacer (photo is absolute-positioned above) */}
            <div className="lg:col-span-4" />
          </div>
        </div>
      </div>


      {/* ══════════════════════════════════════════════════════════════════════
          MOBILE ONLY LAYOUT  (lg:hidden)
          Image: right 48% of screen (starts at 52% from left).
          Text: left side, no overlap with image.
          NO left fade needed — face sits at 58-88% of screen width, fully exposed.
      ══════════════════════════════════════════════════════════════════════ */}
      <div className="lg:hidden bg-black">

        {/* ── HERO BLOCK: image right 48% + text left ─── */}
        <div className="relative overflow-hidden">

          {/* Image — right 52%, face visible at x~35% of original image */}
          <div
            className="absolute top-0 right-0 pointer-events-none select-none overflow-hidden"
            style={{ width: "52%", height: "520px" }}
          >
            <img
              src="/founder-leaning.png"
              alt="Founder Paresh Hindurao - Bodybuilding Champion"
              className="w-full h-full object-cover"
              style={{
                objectPosition: "35% 0%",
                filter: "brightness(1.15) contrast(1.2) saturate(1.08) hue-rotate(2deg)",
              }}
            />
            {/* Warm red glow top-right */}
            <div className="absolute inset-0 bg-gradient-to-bl from-red-700/15 via-transparent to-transparent" />
            {/* Top fade — subtle */}
            <div className="absolute inset-x-0 top-0 h-6 bg-gradient-to-b from-black to-transparent" />
            {/* Bottom fade — gentle merge into section background */}
            <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black to-transparent" />
            {/* Right edge fade */}
            <div className="absolute inset-y-0 right-0 w-4 bg-gradient-to-l from-black to-transparent" />
            {/* Left edge fade — blends into text area */}
            <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-black to-transparent" />
          </div>

          {/* Full-width text content — z-20 sits above image */}
          <div className="relative z-20 px-6 pt-10 pb-8">

            {/* Red label */}
            <span
              className="text-red-500 font-display font-black uppercase block"
              style={{ fontSize: "11px", letterSpacing: "0.13em" }}
            >
              FOUNDER &amp; HEAD TRAINER
            </span>

            {/* Red underline accent */}
            <div style={{ width: "52px", height: "2px", background: "#ef4444", marginTop: "6px", marginBottom: "14px" }} />

            {/* Name — large, two lines, left-aligned */}
            <h2
              className="font-display font-black text-white uppercase tracking-tighter leading-[0.87] mb-3"
              style={{ fontSize: "clamp(46px, 13vw, 64px)" }}
            >
              PARESH<br />HINDURAO
            </h2>

            {/* Tagline — two lines */}
            <div
              className="text-stone-400 font-display font-bold uppercase mb-5"
              style={{ fontSize: "12px", letterSpacing: "0.1em", lineHeight: 1.45 }}
            >
              PROFESSIONAL<br />BODYBUILDER
            </div>

            {/* Credentials — full-width dividers */}
            <div style={{ borderTop: "1px solid rgba(255,255,255,0.12)" }}>

              {/* Row 1: IFSA Certified Trainer */}
              <div
                className="flex items-center gap-3"
                style={{ paddingTop: "11px", paddingBottom: "11px", borderBottom: "1px solid rgba(255,255,255,0.12)" }}
              >
                <div
                  className="flex items-center justify-center shrink-0 text-red-500"
                  style={{
                    width: "36px", height: "36px",
                    borderRadius: "8px",
                    border: "1px solid rgba(239,68,68,0.4)",
                    background: "rgba(127,29,29,0.18)",
                  }}
                >
                  <Award size={16} />
                </div>
                <span
                  className="font-sans font-bold uppercase text-stone-200"
                  style={{ fontSize: "10px", letterSpacing: "0.09em" }}
                >
                  IFSA CERTIFIED TRAINER
                </span>
              </div>

              {/* Row 2: Paresh Body Club */}
              <div
                className="flex items-center gap-3"
                style={{ paddingTop: "11px", paddingBottom: "11px", borderBottom: "1px solid rgba(255,255,255,0.12)" }}
              >
                <div
                  className="flex items-center justify-center shrink-0 text-red-500"
                  style={{
                    width: "36px", height: "36px",
                    borderRadius: "8px",
                    border: "1px solid rgba(239,68,68,0.4)",
                    background: "rgba(127,29,29,0.18)",
                  }}
                >
                  <Dumbbell size={16} />
                </div>
                <span
                  className="font-sans font-bold uppercase text-stone-200"
                  style={{ fontSize: "10px", letterSpacing: "0.09em" }}
                >
                  PARESH BODY CLUB
                </span>
              </div>
            </div>

            {/* Bio — full width, "PARESH BODY CLUB MURBAD" in red */}
            <p
              className="text-stone-300 font-sans font-light leading-relaxed mt-6"
              style={{ fontSize: "13px", lineHeight: 1.65 }}
            >
              Paresh Hindurao is a passionate fitness trainer and professional bodybuilder
              dedicated to transforming lives through fitness and discipline. With multiple
              bodybuilding titles and years of gym training experience, he founded{" "}
              <span className="text-red-500 font-semibold">PARESH BODY CLUB MURBAD</span>
              {" "}to inspire the youth of Murbad towards health, strength, and confidence.
            </p>
          </div>
        </div>

        {/* ── PHILOSOPHY CARD ───────────────────────────────────────────── */}
        <div className="px-5 pb-10 pt-2 bg-black relative z-20">
          <div
            className="relative overflow-hidden"
            style={{
              border: "1px solid rgba(239,68,68,0.18)",
              borderLeft: "4px solid #ef4444",
              borderRadius: "12px",
              background: "rgba(69,10,10,0.08)",
              padding: "18px 20px 16px 20px",
              boxShadow: "0 0 32px rgba(239,68,68,0.1)",
            }}
          >
            {/* Header: circle quote icon + label */}
            <div className="flex items-center gap-3 mb-4">
              <div
                className="flex items-center justify-center shrink-0"
                style={{
                  width: "30px", height: "30px",
                  borderRadius: "50%",
                  border: "1px solid rgba(239,68,68,0.35)",
                  background: "rgba(69,10,10,0.3)",
                }}
              >
                <span
                  className="font-display font-black text-stone-300"
                  style={{ fontSize: "14px", lineHeight: 1 }}
                >
                  ❝
                </span>
              </div>
              <span
                className="font-sans font-bold uppercase text-stone-400"
                style={{ fontSize: "8.5px", letterSpacing: "0.14em" }}
              >
                PERSONAL PHILOSOPHY
              </span>
            </div>

            {/* Quote text — italic bold, last part in red */}
            <p
              className="font-display font-black uppercase italic text-neutral-100 leading-snug"
              style={{ fontSize: "clamp(16px, 5vw, 22px)", letterSpacing: "0.01em" }}
            >
              "DISCIPLINE, DEDICATION &amp;<br />HARD WORK{" "}
              <span className="text-red-500">BUILD CHAMPIONS."</span>
            </p>

            {/* Signature */}
            <p
              className="text-right text-red-500 font-sans font-bold uppercase mt-4"
              style={{ fontSize: "9px", letterSpacing: "0.12em" }}
            >
              — PARESH HINDURAO
            </p>
          </div>
        </div>

      </div>
      {/* ── End of mobile layout ── */}


      {/* ══════════════════════════════════════════════════════════════════════
          ACHIEVEMENTS + INSTAGRAM
          Shared between mobile and desktop.

          bg-black + relative z-30 creates an OPAQUE barrier:
          - On mobile: sits below the mobile layout (which already clips its image)
          - On desktop: sits below desktop content; desktop absolute image has
            a solid black bottom mask so it doesn't show here either
          RESULT: Zero image bleed into this area on any screen size.
      ══════════════════════════════════════════════════════════════════════ */}
      <div className="relative z-30 bg-black">
        <div className="max-w-7xl mx-auto px-[32px] sm:px-6 lg:px-8 pb-12 lg:pb-16">
          <div className="space-y-6 lg:space-y-8 pt-8 border-t border-white/5">

            {/* Section header */}
            <div className="flex items-center gap-2 pb-1">
              <Crown size={16} className="text-red-500" />
              <h3 className="font-display font-black text-xs uppercase tracking-widest text-[#9ca3af]">
                OFFICIAL BODYBUILDING ACCOMPLISHMENTS
              </h3>
            </div>

            {/* Achievement cards — single column (matches screenshot) */}
            <div className="grid grid-cols-1 gap-3">
              {achievements.map((ach) => {
                const IconComp = ach.icon;
                return (
                  <div
                    key={ach.id}
                    className="p-5 lg:p-6 border border-white/5 hover:border-red-500/20 rounded-xl flex items-center gap-4 lg:gap-5 bg-neutral-900/10 hover:bg-neutral-900/20 relative group transition-all duration-500 hover:shadow-[0_0_25px_rgba(239,68,68,0.06)]"
                  >
                    <div
                      className={`p-3 lg:p-3.5 rounded-lg shrink-0 transition-transform duration-300 group-hover:scale-105 ${ach.badgeClass}`}
                    >
                      <IconComp size={18} className={ach.iconColor} />
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

            {/* Instagram bar */}
            <div className="pt-5 border-t border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-6">
              <div className="flex items-center gap-4 text-left">
                <div className="p-3 bg-red-600/10 rounded-xl border border-red-500/20 text-red-500 shadow-[0_0_15px_rgba(239,68,68,0.15)] shrink-0">
                  <Instagram size={22} />
                </div>
                <div>
                  <span className="text-[10px] text-stone-500 uppercase font-bold block tracking-wider">
                    FOLLOW PARESH ON INSTAGRAM
                  </span>
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
      </div>

    </section>
  );
}
