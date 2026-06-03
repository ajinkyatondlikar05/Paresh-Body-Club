import { motion, useInView, useMotionValue, useSpring, animate } from "motion/react";
import { useEffect, useRef } from "react";
import { CheckCircle2, Award, Zap, HeartHandshake, Users, CalendarDays, Target, Dumbbell } from "lucide-react";
import { ABOUT_FEATURES } from "../data";

/* ─────────────────────────────────────────────
   REUSABLE ANIMATION VARIANTS
───────────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

const slideLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] },
  },
};

const slideRight = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: i * 0.2 },
  }),
};

/* ─────────────────────────────────────────────
   ANIMATED COUNTER
───────────────────────────────────────────── */
interface CounterProps {
  target: number;
  suffix: string;
  shouldStart: boolean;
}

function AnimatedCounter({ target, suffix, shouldStart }: CounterProps) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const motionVal = useMotionValue(0);
  const spring = useSpring(motionVal, { stiffness: 60, damping: 20 });

  useEffect(() => {
    if (!shouldStart) return;
    const controls = animate(motionVal, target, {
      duration: 2,
      ease: "easeOut",
    });
    return controls.stop;
  }, [shouldStart, target, motionVal]);

  useEffect(() => {
    return spring.on("change", (v) => {
      if (nodeRef.current) {
        nodeRef.current.textContent = Math.round(v) + suffix;
      }
    });
  }, [spring, suffix]);

  return (
    <span ref={nodeRef} className="block font-display font-black text-3xl sm:text-4xl text-white leading-none">
      0{suffix}
    </span>
  );
}

/* ─────────────────────────────────────────────
   STAT DEFINITIONS
───────────────────────────────────────────── */
const STATS = [
  { target: 500, suffix: "+", label: "Happy Members",             icon: Users },
  { target: 5,   suffix: "+", label: "Years Impacting Lives",     icon: CalendarDays },
  { target: 100, suffix: "%", label: "Result Oriented",           icon: Target },
  { target: 15,  suffix: "+", label: "Modern Equipment Stations", icon: Dumbbell },
];

/* ─────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────── */
export default function About() {
  /* ── Section-level viewport ref (triggers once on entry) ── */
  const sectionRef = useRef<HTMLElement>(null);
  const sectionInView = useInView(sectionRef, { once: true, margin: "-80px" });

  /* ── Stats viewport ref (counters start only when cards visible) ── */
  const statsRef = useRef<HTMLDivElement>(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-60px" });

  const whyChooseUs = [
    {
      title: "State-Of-The-Art Biomechanics",
      description:
        "Every machine and angle is strictly inspected for organic joint tracking and optimal hypertrophy range.",
      icon: Award,
    },
    {
      title: "Supervised & Safe Environment",
      description:
        "Our certified trainers prevent posture deviations, ensuring absolute safety for both seniors and women.",
      icon: HeartHandshake,
    },
    {
      title: "Passionate Local Community",
      description:
        "Work out alongside committed weight lifters who respect your space, push your goals, and share the vibes.",
      icon: Zap,
    },
  ];

  return (
    <motion.section
      id="about"
      ref={sectionRef}
      className="relative overflow-hidden about-section"
      initial="hidden"
      animate={sectionInView ? "visible" : "hidden"}
    >

      {/* ══════════════════════════════════════════════
          MOBILE — Premium 55% text / 45% athlete layout
      ══════════════════════════════════════════════ */}
      <div
        className="md:hidden relative w-full bg-[#050505] flex flex-col justify-start pt-20 pb-24 overflow-hidden"
        style={{ minHeight: "100dvh" }}
      >

        {/* ── Athlete: RIGHT side only, 45% width, full figure shown (no zoom/crop) ── */}
        <div
          className="absolute top-0 right-0 h-full pointer-events-none"
          style={{
            width: "45%",
            backgroundImage: "url('/about-bg.png')",
            backgroundSize: "auto 78%",
            backgroundPosition: "center top 72px",
            backgroundRepeat: "no-repeat",
            opacity: 0.82,
            filter: "grayscale(100%) contrast(1.3) brightness(0.78)",
          }}
        />

        {/* ── Gradient: solid black 0→50%, fades to transparent at 80% ── */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            zIndex: 1,
            background:
              "linear-gradient(to right, #050505 0%, #050505 50%, rgba(5,5,5,0.65) 65%, rgba(5,5,5,0.15) 80%, transparent 100%)",
          }}
        />

        {/* ── Top / bottom black fades ── */}
        <div
          className="absolute top-0 left-0 right-0 h-24 pointer-events-none"
          style={{ zIndex: 1, background: "linear-gradient(to bottom, #050505, transparent)" }}
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-28 pointer-events-none"
          style={{ zIndex: 1, background: "linear-gradient(to top, #050505, transparent)" }}
        />

        {/* ── Red left-edge accent line ── */}
        <div
          className="absolute top-0 left-0 w-[3px] h-full bg-red-600/80"
          style={{ zIndex: 2, boxShadow: "0 0 10px rgba(239,68,68,0.45)" }}
        />

        {/* ── Very subtle red glow lower-right (behind body, NOT over face) ── */}
        <div
          className="absolute bottom-[18%] right-[2%] w-28 h-44 rounded-full pointer-events-none"
          style={{
            zIndex: 1,
            background: "radial-gradient(circle, rgba(220,38,38,0.10) 0%, transparent 70%)",
            filter: "blur(30px)",
          }}
        />

        {/* ── Subtle ember particles ── */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 2 }}>
          <div className="absolute left-[5%] w-1 h-1 bg-red-500/70 rounded-full blur-[1px] animate-ember-1" />
          <div className="absolute left-[18%] w-1 h-1 bg-red-500/60 rounded-full blur-[1px] animate-ember-2" />
          <div className="absolute left-[32%] w-1 h-1 bg-red-400/50 rounded-full blur-[1px] animate-ember-3" />
        </div>

        {/* ══ CONTENT — full width, text elements constrained to 290px max ══ */}
        <div className="relative flex flex-col items-start pl-5 w-full" style={{ zIndex: 3 }}>

          {/* Heading */}
          <motion.div variants={fadeUp} custom={0.1}>
            <h2 className="font-display font-black text-white uppercase tracking-tight text-[32px] leading-[1.05]">
              AT OUR CORE
            </h2>
            <div className="w-12 h-[2.5px] bg-red-600 mt-2" style={{ boxShadow: "0 0 6px rgba(239,68,68,0.5)" }} />
          </motion.div>

          {/* Description — maxWidth 290px for natural line breaks */}
          <motion.p
            variants={fadeUp}
            custom={0.25}
            className="font-sans text-[13.5px] leading-[1.7] font-light text-stone-300 mt-5"
            style={{ maxWidth: "290px" }}
          >
            <strong className="font-semibold text-white">PARESH BODY CLUB MURBAD</strong> is one of the most trusted fitness destinations in Murbad. Offering a motivating environment, quality equipment, strength training, cardio, and expert guidance for all fitness enthusiasts.
          </motion.p>

          {/* Quote — thin red line only, no box, maxWidth 280px */}
          <motion.div
            variants={fadeUp}
            custom={0.4}
            className="flex items-start gap-3 mt-5"
            style={{ maxWidth: "280px" }}
          >
            <div className="shrink-0 w-[2px] self-stretch bg-red-600/70 rounded-full" />
            <p className="font-sans text-[12.5px] leading-[1.7] font-light text-stone-400">
              Whether you are a beginner or an elite bodybuilder aiming for stage progression, Master Paresh offers structured regimes to turn aspiration into concrete results.
            </p>
          </motion.div>

          {/* Motivational block — breaks out to full screen width so it centers correctly */}
          <motion.div
            variants={fadeUp}
            custom={0.55}
            className="flex items-center justify-center gap-3 mt-9"
            style={{ width: "100vw", marginLeft: "-20px" }}
          >
            <div
              className="shrink-0 h-[1.5px] w-8"
              style={{ background: "linear-gradient(to right, transparent, rgba(220,38,38,0.9))" }}
            />
            <div className="font-display font-black text-center shrink-0">
              <span className="block text-white text-[15px] uppercase tracking-widest leading-snug">TODAY IS THE DAY</span>
              <span className="block text-white text-[15px] uppercase tracking-widest leading-snug">BECAUSE TODAY</span>
              <span className="block text-white text-[15px] uppercase tracking-widest leading-snug">IS YOUR</span>
              <span
                className="block text-[#ff1a1a] text-[48px] font-black uppercase tracking-tight leading-[1.05] mt-0.5"
                style={{ textShadow: "0 0 20px rgba(255,26,26,0.75), 0 0 45px rgba(255,26,26,0.25)" }}
              >
                DAY.
              </span>
            </div>
            <div
              className="shrink-0 h-[1.5px] w-8"
              style={{ background: "linear-gradient(to left, transparent, rgba(220,38,38,0.9))" }}
            />
          </motion.div>

        </div>
      </div>

      {/* ══════════════════════════════════════════════
          HERO BANNER — full-width background image (DESKTOP ONLY)
      ══════════════════════════════════════════════ */}
      <div
        className="hidden md:flex relative w-full flex-col justify-between overflow-hidden"
        style={{ minHeight: "70vh" }}
      >
        {/* Ken Burns Background — very slow scale zoom */}
        <motion.div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            backgroundImage: "url('/about-bg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundAttachment: "scroll",
            filter: "brightness(0.75)",
            willChange: "transform",
          }}
          initial={{ scale: 1 }}
          animate={sectionInView ? { scale: 1.06 } : { scale: 1 }}
          transition={{ duration: 18, ease: "linear" }}
        />

        {/* Subtle black overlay */}
        <div className="absolute inset-0 bg-black/40 z-0 pointer-events-none" />

        {/* Left-side dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent z-0 pointer-events-none" />

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-t from-[#0a0a0c] to-transparent z-0 pointer-events-none" />
        {/* Top fade */}
        <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-black/60 to-transparent z-0 pointer-events-none" />
        {/* Red left edge accent */}
        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-transparent via-red-500/70 to-transparent z-10 pointer-events-none" />

        {/* ── Content ── */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20 pb-6 flex-1 flex flex-col justify-center">

          {/* 2-col grid: left text | right quote */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center py-8">

            {/* ── LEFT: AT OUR CORE ── */}
            <motion.div
              variants={slideLeft}
              className="w-full relative"
            >
              {/* Soft red ambient glow */}
              <div className="absolute -top-16 -left-16 w-80 h-80 rounded-full bg-red-600/10 blur-[100px] pointer-events-none z-0" />

              <div className="relative z-10">
                {/* Heading */}
                <motion.h2
                  className="font-display font-black text-white uppercase tracking-tight leading-[0.9] mb-4"
                  style={{ fontSize: "clamp(2rem, 8vw, 4.8rem)" }}
                  variants={fadeUp}
                  custom={0}
                >
                  AT OUR CORE
                </motion.h2>

                {/* Animated red underline — expands from 0 → 100% */}
                <div className="overflow-hidden mb-6 h-[3px]">
                  <motion.div
                    className="h-full bg-red-500"
                    initial={{ width: "0%" }}
                    animate={sectionInView ? { width: "80px" } : { width: "0%" }}
                    transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  />
                </div>

                {/* Paragraph — stagger 0.15s */}
                <motion.p
                  className="text-stone-200 font-sans text-sm leading-relaxed mb-5 font-light max-w-xl"
                  variants={fadeUp}
                  custom={0.35}
                >
                  PARESH BODY CLUB MURBAD is one of the most trusted fitness destinations in
                  Murbad. The gym provides a motivating environment, quality workout equipment,
                  strength training facilities, cardio training, and expert guidance for fitness enthusiasts.
                </motion.p>

                {/* Quote block — fade up, slight upward movement */}
                <motion.div
                  className="border-l-2 border-red-500 pl-4 max-w-xl"
                  variants={fadeUp}
                  custom={0.5}
                >
                  <p className="text-stone-450 font-sans text-xs sm:text-sm leading-relaxed font-light">
                    Whether you are a local beginner stepping into the weights room for the first time,
                    or an elite bodybuilder aiming for stage progression, Master Paresh and his team
                    offer scientifically structured regimes to turn aspiration into heavy concrete results.
                  </p>
                </motion.div>
              </div>
            </motion.div>

            {/* ── RIGHT: Motivational Quote ── */}
            <motion.div
              variants={slideRight}
              className="flex flex-col items-center lg:items-end justify-center text-center lg:text-right select-none pointer-events-none w-full mt-8 lg:mt-0 relative"
            >
              {/* Soft red ambient glow behind quote */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-red-600/5 blur-[100px] pointer-events-none z-0" />

              <div
                className="font-display font-black uppercase leading-[1.05] tracking-tight relative z-10 text-center lg:text-right"
                style={{ fontSize: "clamp(1.2rem, 5vw, 4.2rem)", opacity: 0.95 }}
              >
                {/* Text reveal — words slide in sequentially */}
                {["TODAY IS THE DAY", "BECAUSE TODAY", "IS YOUR"].map((line, li) => (
                  <motion.span
                    key={line}
                    className="block text-stone-300 drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]"
                    variants={fadeUp}
                    custom={0.3 + li * 0.12}
                  >
                    {line}
                  </motion.span>
                ))}

                {/* "DAY." — soft red glow on load */}
                <motion.span
                  className="block text-red-500 drop-shadow-[0_0_30px_rgba(239,68,68,0.65)]"
                  style={{ fontSize: "clamp(1.8rem, 5vw, 5.2rem)" }}
                  variants={fadeUp}
                  custom={0.66}
                  animate={sectionInView ? {
                    textShadow: [
                      "0 0 20px rgba(239,68,68,0.3)",
                      "0 0 50px rgba(239,68,68,0.7)",
                      "0 0 30px rgba(239,68,68,0.5)",
                    ],
                  } : {}}
                  transition={{
                    textShadow: {
                      delay: 1.2,
                      duration: 1.5,
                      ease: "easeInOut",
                    },
                  }}
                >
                  DAY.
                </motion.span>
              </div>
            </motion.div>
          </div>

          {/* ── Stats Cards ── */}
          <div ref={statsRef} className="relative z-10 w-full mt-10 about-stats">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full about-stats-grid">
              {STATS.map((stat, i) => {
                const IconComp = stat.icon;
                return (
                  <motion.div
                    key={i}
                    custom={i}
                    variants={cardVariants}
                    initial="hidden"
                    animate={statsInView ? "visible" : "hidden"}
                    whileHover={{
                      y: -10,
                      scale: 1.03,
                      boxShadow: "0 0 24px 4px rgba(239,68,68,0.22)",
                      transition: { duration: 0.3, ease: "easeOut" },
                    }}
                    className="flex flex-col items-center justify-center p-6 text-center rounded-xl bg-black/45 border border-white/10 backdrop-blur-sm relative overflow-hidden group hover:border-red-500/30 transition-colors duration-300 cursor-default about-metric-card"
                    style={{ willChange: "transform" }}
                  >
                    {/* Red circle icon */}
                    <div className="w-12 h-12 rounded-full border border-red-500/60 bg-red-600/10 flex items-center justify-center mb-4 group-hover:bg-red-600/20 transition-all duration-300">
                      <IconComp size={20} className="text-red-500" />
                    </div>

                    <div>
                      <AnimatedCounter
                        target={stat.target}
                        suffix={stat.suffix}
                        shouldStart={statsInView}
                      />
                      <span className="block text-stone-300 font-sans text-[10px] font-bold uppercase tracking-widest mt-2 leading-tight">
                        {stat.label.toUpperCase()}
                      </span>
                    </div>

                    {/* Red underline at the bottom */}
                    <div className="w-8 h-[2px] bg-red-500 mt-4 mx-auto rounded-full" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════
          FEATURES SECTION — dark background below (DESKTOP ONLY)
      ══════════════════════════════════════════════ */}
      <div className="bg-[#0a0a0c] py-24 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div id="why-choose-us" className="text-center mb-12">
            <span className="text-red-500 font-display font-black uppercase text-xs sm:text-sm tracking-widest block mb-2">
              Your Training Verticals
            </span>
            <h3 className="font-display font-black text-2xl sm:text-4xl text-white uppercase tracking-tight">
              Avenues of Transformation
            </h3>
            <p className="text-stone-400 font-sans text-xs sm:text-sm max-w-xl mx-auto mt-2 leading-relaxed">
              Unlock multi-disciplinary development zones curated for rapid calorie burning and extreme muscle gains.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ABOUT_FEATURES.map((feat, index) => (
              <div
                key={index}
                className="bg-stone-900/40 hover:bg-stone-900/80 border border-white/5 hover:border-red-500/20 p-6 rounded-xl transition-all duration-300 hover:-translate-y-1.5 group flex items-start gap-4"
              >
                <div className="bg-red-500/10 p-2.5 rounded-lg text-red-500 group-hover:bg-red-500 group-hover:text-white transition-all duration-300 shrink-0">
                  <CheckCircle2 size={18} />
                </div>
                <div>
                  <h4 className="font-display font-bold text-base sm:text-lg text-white group-hover:text-red-500 transition-colors duration-200 uppercase tracking-tight">
                    {feat.title}
                  </h4>
                  <p className="text-stone-400 font-sans text-xs sm:text-sm mt-1.5 leading-relaxed font-light">
                    {feat.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Why Choose Us */}
          <div className="mt-24 pt-16 border-t border-white/5">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              {whyChooseUs.map((wcu, k) => {
                const IconComp = wcu.icon;
                return (
                  <div key={k} className="flex gap-4">
                    <div className="p-3 bg-stone-900 rounded-xl border border-white/10 text-red-500 h-12 w-12 flex items-center justify-center shrink-0">
                      <IconComp size={22} />
                    </div>
                    <div>
                      <h4 className="font-display font-black text-white text-base sm:text-lg uppercase tracking-wider">
                        {wcu.title}
                      </h4>
                      <p className="text-stone-400 font-sans text-xs sm:text-sm mt-1 leading-relaxed font-light">
                        {wcu.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>

    </motion.section>
  );
}
