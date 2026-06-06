import { useState, useEffect, useRef } from "react";
import { Trophy, Award, Flame, Crown, Instagram, Dumbbell } from "lucide-react";
import { motion, useMotionValue, useSpring } from "motion/react";



/* ─────────────────────────────────────────────────────────────
   EAGLE ICON SILHOUETTE FOR ACCOMPLISHMENTS
───────────────────────────────────────────────────────────── */
const EagleIcon = ({ className, size = 14 }: { className?: string; size?: number }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={className}
    fill="currentColor"
  >
    <path d="M2 14 Q 12 4 22 14 Q 12 9 2 14 Z" />
    <circle cx="12" cy="7.5" r="1.5" />
  </svg>
);


/* ─────────────────────────────────────────────────────────────
   MOBILE ACHIEVEMENTS — timing constants
   heading: 0s | cards: 0.2 + index*0.18s | count starts after card
   ───────────────────────────────────────────────────────────── */
const ACH_HEADING_DELAY  = 0;          // crown / heading appear first
const ACH_CARD_BASE      = 0.2;        // first card starts at 0.2s
const ACH_CARD_STAGGER   = 0.18;       // 0.18s between cards
const ACH_ENTRY_DUR      = 0.6;        // card entry duration
const achCardDelay  = (i: number) => ACH_CARD_BASE + i * ACH_CARD_STAGGER;
const achCountDelay = (i: number) => achCardDelay(i) + ACH_ENTRY_DUR + 0.05;

/* ─────────────────────────────────────────────────────────────
   COUNT-UP COMPONENT  (mobile only)
   Starts counting only when shouldStart becomes true, after
   startDelay seconds — so numbers reveal after the card appears.
   ───────────────────────────────────────────────────────────── */
function CountUp({
  target,
  color,
  isIfsa = false,
  shouldStart = false,
  startDelay = 0,
}: {
  target: string;
  color: string;
  isIfsa?: boolean;
  shouldStart?: boolean;
  startDelay?: number;
}) {
  const motionVal = useMotionValue(0);
  const spring = useSpring(motionVal, { stiffness: 55, damping: 14, mass: 0.8 });
  const [display, setDisplay] = useState(isIfsa ? "" : "0");

  // Trigger count / reveal once shouldStart flips to true
  useEffect(() => {
    if (!shouldStart) return;
    const ms = Math.round(startDelay * 1000);
    if (isIfsa) {
      const t = setTimeout(() => setDisplay("IFSA"), ms);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(() => motionVal.set(Number(target)), ms);
      return () => clearTimeout(t);
    }
  }, [shouldStart, isIfsa, motionVal, target, startDelay]);

  // Subscribe spring → display
  useEffect(() => {
    if (isIfsa) return;
    const unsub = spring.on("change", (v) => setDisplay(String(Math.round(v))));
    return unsub;
  }, [spring, isIfsa]);

  return (
    <span
      className={`font-display font-black text-xl sm:text-2xl block ${
        isIfsa ? "text-white" : color
      }`}
    >
      {display}
    </span>
  );
}

/* ─────────────────────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────────────────────── */
export default function Founder() {
  // Initialise synchronously so mobile state is correct before first paint
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== "undefined" && window.innerWidth < 1024
  );
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  /* ── Single observer drives ALL achievement animations on mobile ── */
  const [achVisible, setAchVisible] = useState(false);
  const achRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = achRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAchVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const achievements = [
    {
      id: "ach-1",
      number: "5",
      suffix: "TIMES",
      label: "MURBAD SHREE CHAMPION",
      icon: Crown,
      borderColor: "border-red-500/35 hover:border-red-500/60",
      glowColor: "shadow-[0_0_20px_rgba(239,68,68,0.06)] hover:shadow-[0_0_30px_rgba(239,68,68,0.16)]",
      iconBoxClass: "border-red-500/40 bg-red-500/10 text-red-500",
      numColor: "text-red-500",
      watermarkIcon: Crown,
      watermarkColor: "text-red-500/5",
      eagleCount: 5,
      eagleColor: "text-red-500",
    },
    {
      id: "ach-2",
      number: "2",
      suffix: "TIMES",
      label: "SHAHAPUR SHREE CHAMPION",
      icon: Trophy,
      borderColor: "border-amber-500/35 hover:border-amber-500/60",
      glowColor: "shadow-[0_0_20px_rgba(245,158,11,0.06)] hover:shadow-[0_0_30px_rgba(245,158,11,0.16)]",
      iconBoxClass: "border-amber-500/40 bg-amber-500/10 text-amber-500",
      numColor: "text-amber-500",
      watermarkIcon: Trophy,
      watermarkColor: "text-amber-500/5",
      eagleCount: 2,
      eagleColor: "text-amber-500",
    },
    {
      id: "ach-3",
      number: "1",
      suffix: "TIME",
      label: "THANE SHREE RUNNER-UP",
      icon: Award,
      borderColor: "border-blue-500/35 hover:border-blue-500/60",
      glowColor: "shadow-[0_0_20px_rgba(59,130,246,0.06)] hover:shadow-[0_0_30px_rgba(59,130,246,0.16)]",
      iconBoxClass: "border-blue-500/40 bg-blue-500/10 text-blue-500",
      numColor: "text-blue-500",
      watermarkIcon: Award,
      watermarkColor: "text-blue-500/4",
      eagleCount: 1,
      eagleColor: "text-blue-500",
    },
    {
      id: "ach-4",
      number: "IFSA",
      suffix: "",
      label: "CERTIFIED GYM TRAINER",
      icon: Flame,
      borderColor: "border-emerald-500/35 hover:border-emerald-500/60",
      glowColor: "shadow-[0_0_20px_rgba(16,185,129,0.06)] hover:shadow-[0_0_30px_rgba(16,185,129,0.16)]",
      iconBoxClass: "border-emerald-500/40 bg-emerald-500/10 text-emerald-500",
      numColor: "text-white",
      watermarkIcon: Flame,
      watermarkColor: "text-emerald-500/4",
      eagleCount: 0,
      eagleColor: "",
      isIfsa: true,
    },
  ];

  return (
    <section
      id="founder"
      className="bg-black relative overflow-hidden founder-section"
    >

      {/* ══ Shared background decorations (all screen sizes) ═══════════════ */}

      {/* 05 Stencil Watermark */}
      <div className="founder-watermark absolute top-12 right-12 text-[140px] font-display font-black text-white/5 select-none pointer-events-none tracking-tighter leading-none z-0">
        05
      </div>

      {/* Smooth Dark Vignette */}
      <div className="hidden lg:block absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.85)_95%)] z-[2] pointer-events-none founder-vignette" />

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
          className="w-full h-full object-cover object-[65%_center] filter brightness-[1.16] contrast-[1.18] saturate-[1.12] hue-rotate-[2deg] drop-shadow-[0_0_35px_rgba(239,68,68,0.12)] relative z-10 bodybuilder-image"
        />

        {/* Volumetric Warm Spotlight & Rim Lighting */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_42%_32%,rgba(254,215,170,0.12)_0%,rgba(239,68,68,0.06)_30%,transparent_60%)] z-[15] pointer-events-none mix-blend-screen" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_45%,rgba(254,215,170,0.08)_0%,rgba(239,68,68,0.04)_35%,transparent_70%)] z-[15] pointer-events-none mix-blend-screen" />

        {/* Edge gradient masks */}
        <div className="absolute left-0 inset-y-0 w-[28%] bg-gradient-to-r from-black via-black/50 to-transparent z-20 founder-mask-left" />
        <div className="absolute bottom-0 inset-x-0 h-[140px] bg-black z-20" />
        <div className="absolute bottom-[140px] inset-x-0 h-[140px] bg-gradient-to-t from-black to-transparent z-20 founder-mask-bottom" />
        <div className="absolute top-0 inset-x-0 h-[70px] bg-gradient-to-b from-black to-transparent z-20" />
        <div className="absolute right-0 inset-y-0 w-[15%] bg-gradient-to-l from-black to-transparent z-20 founder-mask-right" />
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
                  FOUNDER
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
          Image: right 58% of screen — face at top, warm skin tone, matches ref image 2.
          Text: left side, overlaps image slightly for cinematic look.
      ══════════════════════════════════════════════════════════════════════ */}
      <div className="lg:hidden bg-black">

        {/* ── HERO BLOCK: image right 58% + text left ─── */}
        <div className="relative overflow-hidden">

          {/* Image — right 58%, face + upper body visible at top */}
          <div
            className="absolute top-0 right-0 pointer-events-none select-none overflow-hidden z-10"
            style={{ width: "58%", height: "520px" }}
          >
            <img
              src="/founder-leaning.png"
              alt="Founder Paresh Hindurao - Bodybuilding Champion"
              className="w-full h-full object-cover animate-founder-breathe"
              style={{
                objectPosition: "25% top",
                filter: "brightness(1.16) contrast(1.18) saturate(1.12) hue-rotate(2deg)",
              }}
            />
            {/* Warm red ambient glow — matches reference image 2 skin tone */}
            <div className="absolute inset-0" style={{
              background: [
                "radial-gradient(ellipse 55% 40% at 60% 25%, rgba(220,38,38,0.18) 0%, transparent 65%)",
                "radial-gradient(ellipse 40% 30% at 55% 50%, rgba(185,28,28,0.12) 0%, transparent 60%)",
              ].join(", "),
            }} />
            {/* Top fade */}
            <div className="absolute inset-x-0 top-0 h-6 bg-gradient-to-b from-black to-transparent" />
            {/* Bottom fade — smooth merge into black */}
            <div className="absolute inset-x-0 bottom-0 h-52 bg-gradient-to-t from-black to-transparent" />
            {/* Left edge — blends into text area */}
            <div className="absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-black to-transparent" />
            {/* Right edge */}
            <div className="absolute inset-y-0 right-0 w-3 bg-gradient-to-l from-black to-transparent" />
          </div>

          {/* Background effects for mobile layout */}
          {/* Drifting smoke effect behind the bodybuilder */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-stone-900/10 blur-[45px] rounded-full animate-smoke-cinematic" />
            <div className="absolute top-10 -left-10 w-64 h-64 bg-stone-900/5 blur-[40px] rounded-full animate-smoke-cinematic" style={{ animationDelay: '-5s' }} />
          </div>

          {/* Soft Red Embers rising upward */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <div className="absolute left-[12%] w-[1.5px] h-[1.5px] bg-red-500 rounded-full blur-[0.5px] animate-ember-cinematic-1" />
            <div className="absolute left-[26%] w-[1px] h-[1px] bg-red-500 rounded-full blur-[0.5px] animate-ember-cinematic-2" />
            <div className="absolute left-[42%] w-[2px] h-[2px] bg-red-500 rounded-full blur-[0.8px] animate-ember-cinematic-3" />
          </div>

          {/* Full-width text content — z-20 sits above image */}
          <div className="relative z-20 px-6 pt-10 pb-8">

            {/* Red label */}
            <motion.span
              className="text-red-500 font-display uppercase block animate-text-glow-pulse"
              style={{ 
                fontSize: "clamp(24px, 6.5vw, 28px)", 
                fontWeight: 900, 
                letterSpacing: "5px",
                textShadow: "0 0 12px rgba(239, 68, 68, 0.45)"
              }}
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              FOUNDER
            </motion.span>

            {/* Red underline accent */}
            <div style={{ width: "52px", height: "2px", background: "#ef4444", marginTop: "6px", marginBottom: "14px" }} />

            {/* Name — large, two lines, left-aligned */}
            <h2
              className="font-display font-black text-white uppercase tracking-tighter leading-[0.87] mb-3"
              style={{ fontSize: "clamp(46px, 13vw, 64px)" }}
            >
              <span className="block overflow-hidden">
                <motion.span 
                  className="block"
                  initial={{ opacity: 0, y: 15, x: -10 }}
                  whileInView={{ opacity: 1, y: 0, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.9, ease: [0.25, 1, 0.5, 1], delay: 0.05 }}
                >
                  PARESH
                </motion.span>
              </span>
              <span className="block overflow-hidden">
                <motion.span 
                  className="block"
                  initial={{ opacity: 0, y: 15, x: -10 }}
                  whileInView={{ opacity: 1, y: 0, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.9, ease: [0.25, 1, 0.5, 1], delay: 0.2 }}
                >
                  HINDURAO
                </motion.span>
              </span>
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
              <motion.div
                className="flex items-center gap-3"
                style={{ paddingTop: "11px", paddingBottom: "11px", borderBottom: "1px solid rgba(255,255,255,0.12)" }}
                initial={{ opacity: 0, x: -25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1], delay: 0.15 }}
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
              </motion.div>

              {/* Row 2: Paresh Body Club */}
              <motion.div
                className="flex items-center gap-3"
                style={{ paddingTop: "11px", paddingBottom: "11px", borderBottom: "1px solid rgba(255,255,255,0.12)" }}
                initial={{ opacity: 0, x: -25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1], delay: 0.3 }}
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
              </motion.div>
            </div>

            {/* Bio — full width, "PARESH BODY CLUB MURBAD" in red */}
            <motion.p
              className="text-stone-300 font-sans font-light leading-relaxed mt-6"
              style={{ fontSize: "13px", lineHeight: 1.65 }}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1], delay: 0.35 }}
            >
              Paresh Hindurao is a passionate fitness trainer and professional bodybuilder
              dedicated to transforming lives through fitness and discipline. With multiple
              bodybuilding titles and years of gym training experience, he founded{" "}
              <span className="text-red-500 font-semibold">PARESH BODY CLUB MURBAD</span>
              {" "}to inspire the youth of Murbad towards health, strength, and confidence.
            </motion.p>
          </div>
        </div>

        {/* ── PHILOSOPHY CARD ───────────────────────────────────────────── */}
        <motion.div 
          className="px-5 pb-10 pt-2 bg-black relative z-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
        >
          <div
            className="relative overflow-hidden animate-philosophy-glow"
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
            <motion.p
              className="font-display font-black uppercase italic text-neutral-100 leading-snug"
              style={{ fontSize: "clamp(16px, 5vw, 22px)", letterSpacing: "0.01em" }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            >
              "DISCIPLINE, DEDICATION &amp;<br />HARD WORK{" "}
              <span className="text-red-500">BUILD CHAMPIONS."</span>
            </motion.p>

            {/* Signature */}
            <p
              className="text-right text-red-500 font-sans font-bold uppercase mt-4"
              style={{ fontSize: "9px", letterSpacing: "0.12em" }}
            >
              — PARESH HINDURAO
            </p>
          </div>
        </motion.div>

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
      <div ref={achRef} className="relative z-30 bg-black overflow-hidden">
        {/* Subtle color-matched floating particles for mobile Achievements section */}
        {isMobile && (
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            {/* Red particle (top left) */}
            <div className="absolute left-[15%] top-[20%] w-[3px] h-[3px] bg-red-500/20 rounded-full blur-[0.5px] animate-particle-float-slow" style={{ animationDelay: '0s', animationDuration: '12s' }} />
            {/* Amber/Orange particle (mid right) */}
            <div className="absolute right-[10%] top-[40%] w-[4px] h-[4px] bg-amber-500/15 rounded-full blur-[0.5px] animate-particle-float-slow" style={{ animationDelay: '3s', animationDuration: '15s' }} />
            {/* Blue particle (mid left) */}
            <div className="absolute left-[8%] top-[60%] w-[3px] h-[3px] bg-blue-500/20 rounded-full blur-[0.5px] animate-particle-float-slow" style={{ animationDelay: '6s', animationDuration: '14s' }} />
            {/* Emerald/Green particle (bottom right) */}
            <div className="absolute right-[20%] top-[80%] w-[4px] h-[4px] bg-emerald-500/15 rounded-full blur-[0.5px] animate-particle-float-slow" style={{ animationDelay: '9s', animationDuration: '16s' }} />
            {/* Pink/Instagram particle (bottom left) */}
            <div className="absolute left-[25%] top-[90%] w-[3px] h-[3px] bg-pink-500/20 rounded-full blur-[0.5px] animate-particle-float-slow" style={{ animationDelay: '2s', animationDuration: '18s' }} />
          </div>
        )}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 lg:pb-16 pt-8 border-t border-white/5 relative z-10">
          <div className="space-y-8">

            {/* Section Header with Centered Crown & Lines */}
            <div className="flex flex-col items-center text-center space-y-3.5 mb-10">
              {/* Crown icon — appears first */}
              <motion.div
                initial={isMobile ? { opacity: 0, scale: 0.75 } : false}
                animate={
                  isMobile
                    ? achVisible
                      ? { opacity: 1, scale: 1 }
                      : { opacity: 0, scale: 0.75 }
                    : {}
                }
                transition={{ duration: 0.55, ease: "easeOut", delay: ACH_HEADING_DELAY }}
              >
                <Crown size={22} className="text-red-500" />
              </motion.div>

              <div className="flex items-center justify-center gap-3 w-full max-w-xl px-4">
                {/* Left decoration */}
                <div className="flex items-center gap-1.5 flex-grow justify-end opacity-60">
                  <span className="w-1 h-1 rounded-full bg-red-500/40" />
                  <span className="w-1 h-1 rounded-full bg-red-500/70" />
                  <motion.div
                    className="h-[1px] w-12 bg-gradient-to-r from-red-500/20 to-red-500"
                    initial={isMobile ? { scaleX: 0 } : false}
                    animate={
                      isMobile
                        ? achVisible
                          ? { scaleX: 1 }
                          : { scaleX: 0 }
                        : {}
                    }
                    transition={{ duration: 0.7, ease: "easeOut", delay: ACH_HEADING_DELAY + 0.08 }}
                    style={{ transformOrigin: "right" }}
                  />
                </div>

                {/* Heading */}
                <motion.h3
                  className="font-display font-black uppercase text-white text-center"
                  style={{
                    fontSize: "clamp(26px, 7vw, 36px)",
                    lineHeight: 1.1,
                    letterSpacing: "0.08em"
                  }}
                  initial={isMobile ? { opacity: 0, y: 18 } : false}
                  animate={
                    isMobile
                      ? achVisible
                        ? { opacity: 1, y: 0 }
                        : { opacity: 0, y: 18 }
                      : {}
                  }
                  transition={{ duration: 0.65, ease: [0.25, 1, 0.5, 1], delay: ACH_HEADING_DELAY + 0.08 }}
                >
                  OFFICIAL BODYBUILDING ACCOMPLISHMENTS
                </motion.h3>

                {/* Right decoration */}
                <div className="flex items-center gap-1.5 flex-grow justify-start opacity-60">
                  <motion.div
                    className="h-[1px] w-12 bg-gradient-to-l from-red-500/20 to-red-500"
                    initial={isMobile ? { scaleX: 0 } : false}
                    animate={
                      isMobile
                        ? achVisible
                          ? { scaleX: 1 }
                          : { scaleX: 0 }
                        : {}
                    }
                    transition={{ duration: 0.7, ease: "easeOut", delay: ACH_HEADING_DELAY + 0.08 }}
                    style={{ transformOrigin: "left" }}
                  />
                  <span className="w-1 h-1 rounded-full bg-red-500/70" />
                  <span className="w-1 h-1 rounded-full bg-red-500/40" />
                </div>
              </div>
            </div>

            {/* Achievement cards — single column, ordered sequential reveal */}
            <div className="grid grid-cols-1 gap-3.5 achievements-grid">

              {achievements.map((ach, index) => {
                const IconComp = ach.icon;
                const delay     = achCardDelay(index);   // entry start
                const cntDelay  = achCountDelay(index);  // count starts after card fully in

                const pulseClass = isMobile
                  ? ach.id === "ach-1" ? "ach-pulse-red"
                  : ach.id === "ach-2" ? "ach-pulse-amber"
                  : ach.id === "ach-3" ? "ach-pulse-blue"
                  : ach.id === "ach-4" ? "ach-pulse-emerald"
                  : ""
                  : "";

                return (
                  <motion.div
                    key={ach.id}
                    initial={isMobile ? { opacity: 0, y: 40, scale: 0.96 } : false}
                    animate={
                      isMobile
                        ? achVisible
                          ? { opacity: 1, y: 0, scale: 1 }
                          : { opacity: 0, y: 40, scale: 0.96 }
                        : {}
                    }
                    transition={{
                      duration: ACH_ENTRY_DUR,
                      ease: [0.25, 1, 0.5, 1],
                      delay: isMobile ? delay : 0,
                    }}
                    className={`p-5 lg:p-6 border ${ach.borderColor} rounded-xl flex items-center gap-4 lg:gap-5 bg-[#09090b]/60 relative group overflow-hidden transition-all duration-500 achievement-card ${ach.glowColor} ${pulseClass}`}
                  >
                    {/* Desktop-only watermark */}
                    {!isMobile && (() => {
                      const WM = ach.watermarkIcon;
                      return (
                        <WM
                          size={140}
                          className={`absolute -right-4 -bottom-6 ${ach.watermarkColor} pointer-events-none select-none z-0 hidden lg:block watermark-icon`}
                        />);
                    })()}

                    {/* Left Icon Badge */}
                    <motion.div
                      className={`p-3 lg:p-3.5 rounded-xl shrink-0 border z-10 ${ach.iconBoxClass} ${
                        isMobile ? "ach-icon-glow-pulse" : "transition-transform duration-300 group-hover:scale-105"
                      }`}
                      whileHover={isMobile ? { scale: 1.08 } : {}}
                      whileTap={isMobile ? { scale: 1.08 } : {}}
                      transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    >
                      <IconComp size={18} />
                    </motion.div>

                    {/* Content */}
                    <div className="z-10 flex-grow text-left">
                      {ach.isIfsa ? (
                        <div className="flex items-center leading-none overflow-hidden">
                          {isMobile ? (
                            <CountUp
                              target={ach.number}
                              color="text-white"
                              isIfsa
                              shouldStart={achVisible}
                              startDelay={cntDelay}
                            />
                          ) : (
                            <span className="font-display font-black text-xl sm:text-2xl text-white block achievement-number">
                              {ach.number}
                            </span>
                          )}
                          {/* Checkmark — pops in after count */}
                          <motion.span
                            className="inline-flex items-center justify-center bg-emerald-500 text-black rounded-full w-4 h-4 ml-1.5 shrink-0"
                            style={{ fontSize: "9px", fontWeight: "bold" }}
                            initial={isMobile ? { opacity: 0, scale: 0 } : false}
                            animate={
                              isMobile
                                ? achVisible
                                  ? { opacity: 1, scale: 1 }
                                  : { opacity: 0, scale: 0 }
                                : {}
                            }
                            transition={{ type: "spring", stiffness: 320, delay: isMobile ? cntDelay + 0.1 : 0 }}
                          >
                            ✓
                          </motion.span>
                        </div>
                      ) : (
                        <div className="font-display font-black text-xl sm:text-2xl flex items-baseline gap-1.5 leading-none overflow-hidden">
                          {isMobile ? (
                            <CountUp
                              target={ach.number}
                              color={ach.numColor}
                              shouldStart={achVisible}
                              startDelay={cntDelay}
                            />
                          ) : (
                            <span className={`${ach.numColor} block achievement-number`}>{ach.number}</span>
                          )}
                          {/* Suffix fades in after number */}
                          <motion.span
                            className="text-[#9ca3af] text-xs font-black tracking-wider ml-1 block achievement-title"
                            initial={isMobile ? { opacity: 0 } : false}
                            animate={
                              isMobile
                                ? achVisible
                                  ? { opacity: 1 }
                                  : { opacity: 0 }
                                : {}
                            }
                            transition={{ duration: 0.4, delay: isMobile ? cntDelay : 0 }}
                          >
                            {ach.suffix}
                          </motion.span>
                        </div>
                      )}

                      {/* Eagle tally — each dot staggers in */}
                      {ach.eagleCount > 0 && (
                        <div className="flex items-center gap-1 mt-1.5 mb-1">
                          {Array.from({ length: ach.eagleCount }).map((_, idx) => (
                            <motion.div
                              key={idx}
                              initial={isMobile ? { opacity: 0, y: 4 } : false}
                              animate={
                                isMobile
                                  ? achVisible
                                    ? { opacity: 1, y: 0 }
                                    : { opacity: 0, y: 4 }
                                  : {}
                              }
                              transition={{
                                duration: 0.28,
                                delay: isMobile ? cntDelay + idx * 0.06 : 0,
                              }}
                              className="inline-block"
                            >
                              <EagleIcon className={ach.eagleColor} size={14} />
                            </motion.div>
                          ))}
                        </div>
                      )}

                      <span className="text-[#9ca3af] font-sans text-[11px] font-semibold uppercase tracking-widest block mt-1.5 leading-tight achievement-label">
                        {ach.label}
                      </span>
                    </div>
                  </motion.div>
                );
              })}

              {/* ── Instagram Card (Card 5) ── */}
              <motion.div
                initial={isMobile ? { opacity: 0, y: 40, scale: 0.96 } : false}
                animate={
                  isMobile
                    ? achVisible
                      ? { opacity: 1, y: 0, scale: 1 }
                      : { opacity: 0, y: 40, scale: 0.96 }
                    : {}
                }
                transition={{
                  duration: ACH_ENTRY_DUR,
                  ease: [0.25, 1, 0.5, 1],
                  delay: isMobile ? achCardDelay(achievements.length) : 0,
                }}
                className={`p-5 lg:p-6 border border-pink-500/35 hover:border-pink-500/60 rounded-xl flex items-center gap-4 lg:gap-5 bg-[#09090b]/60 relative group overflow-hidden transition-all duration-500 shadow-[0_0_20px_rgba(236,72,153,0.06)] hover:shadow-[0_0_30px_rgba(236,72,153,0.16)] instagram-card ${
                  isMobile ? "ach-pulse-pink" : ""
                }`}
              >
                {/* Desktop-only watermark */}
                {!isMobile && (
                  <Instagram
                    size={140}
                    className="absolute -right-4 -bottom-6 text-pink-500/5 pointer-events-none select-none z-0 hidden lg:block watermark-icon"
                  />
                )}

                {/* Left Icon Badge */}
                <motion.div
                  className={`p-3 lg:p-3.5 rounded-full shrink-0 border border-pink-500/40 bg-pink-500/10 text-pink-500 z-10 ${
                    isMobile
                      ? "ach-icon-glow-pulse animate-neon-pulse-pink"
                      : "shadow-[0_0_10px_rgba(236,72,153,0.15)] transition-transform duration-300 group-hover:scale-105 z-10"
                  }`}
                  whileHover={isMobile ? { scale: 1.08 } : {}}
                  whileTap={isMobile ? { scale: 1.08 } : {}}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                >
                  <Instagram size={18} />
                </motion.div>

                {/* Content */}
                <div className="z-10 flex-grow flex flex-col items-start text-left">
                  <span className="text-[9px] text-[#9ca3af] uppercase font-bold tracking-widest instagram-subtitle">
                    FOLLOW PARESH ON INSTAGRAM
                  </span>
                  <a
                    href="https://instagram.com/pareshhindurao"
                    target="_blank"
                    rel="noreferrer"
                    className="text-white hover:text-pink-500 text-lg sm:text-xl font-display font-black uppercase tracking-wider block mt-0.5 transition-colors duration-300 instagram-handle"
                  >
                    @pareshhindurao
                  </a>

                  {/* CTA Button */}
                  <motion.a
                    href="https://instagram.com/pareshhindurao"
                    target="_blank"
                    rel="noreferrer"
                    className={`mt-3.5 inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-amber-500 via-red-500 to-pink-500 hover:from-amber-600 hover:via-red-650 hover:to-pink-600 text-white text-xs font-black uppercase tracking-widest rounded-lg transition-all duration-300 shadow-md hover:shadow-[0_0_20px_rgba(239,68,68,0.3)] w-fit instagram-button ${
                      isMobile ? "btn-shine-animation" : ""
                    }`}
                    whileHover={isMobile ? { scale: 1.03 } : {}}
                    whileTap={isMobile ? { scale: 1.03 } : {}}
                    transition={{ type: "spring", stiffness: 500, damping: 15 }}
                  >
                    <Instagram size={13} />
                    FOLLOW ON INSTAGRAM
                  </motion.a>
                </div>
              </motion.div>

            </div>

          </div>
        </div>
      </div>

    </section>
  );
}
