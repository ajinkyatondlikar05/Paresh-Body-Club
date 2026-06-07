import { useState, useRef, useEffect } from "react";
import { motion, useInView } from "motion/react";
import { Star, ArrowRight, Phone, Users, Dumbbell, Trophy } from "lucide-react";

/* ─── Reusable animation variants ─────────────────────────────────── */

// Line-by-line text reveal from bottom
const lineReveal = {
  hidden: { opacity: 0, y: "100%", clipPath: "inset(0 0 100% 0)" },
  visible: (delay: number) => ({
    opacity: 1,
    y: "0%",
    clipPath: "inset(0 0 0% 0)",
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

// Fade up
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

// One-shot red glow pulse on BODY. / YOUR LIFE words
const redGlowPulse = {
  hidden: { textShadow: "0 0 0px rgba(239,68,68,0)" },
  visible: {
    textShadow: [
      "0 0 0px rgba(239,68,68,0)",
      "0 0 22px rgba(239,68,68,0.85)",
      "0 0 12px rgba(239,68,68,0.5)",
    ],
    transition: { duration: 0.9, delay: 0.75, ease: "easeOut" },
  },
};

/* ─── Smooth counter hook (rAF, ease-out cubic, 60 FPS) ───────────── */
function useCounter(target: number, durationSecs: number, started: boolean, delayMs: number = 0): number {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!started) return;
    let raf: number;
    let timeoutId: number;
    let startTs: number | null = null;
    const ms = durationSecs * 1000;

    const startCounting = () => {
      const tick = (ts: number) => {
        if (!startTs) startTs = ts;
        const elapsed = ts - startTs;
        const progress = Math.min(elapsed / ms, 1);
        // Ease-out cubic: decelerates into final value
        const eased = 1 - Math.pow(1 - progress, 3);
        setCount(Math.round(eased * target));
        if (progress < 1) {
          raf = requestAnimationFrame(tick);
        } else {
          setCount(target);
        }
      };
      raf = requestAnimationFrame(tick);
    };

    if (delayMs > 0) {
      timeoutId = window.setTimeout(startCounting, delayMs);
    } else {
      startCounting();
    }

    return () => {
      if (raf) cancelAnimationFrame(raf);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [started, target, durationSecs, delayMs]);
  return count;
}

/* ─── Animated stat number ─────────────────────────────────────────── */
interface CounterProps { target: number; suffix: string; started: boolean; delayMs?: number; }
function AnimatedCounter({ target, suffix, started, delayMs = 0 }: CounterProps) {
  const count = useCounter(target, 1.8, started, delayMs);
  return <>{count}{suffix}</>;
}

/* ─── Floating particle ────────────────────────────────────────────── */
interface ParticleProps { x: string; y: string; size: number; delay: number; duration: number; }
function Particle({ x, y, size, delay, duration }: ParticleProps) {
  return (
    <motion.div
      className="absolute rounded-full bg-red-500 pointer-events-none"
      style={{
        left: x, top: y,
        width: size, height: size,
        opacity: 0.55,
        boxShadow: `0 0 ${size * 3}px rgba(239,68,68,0.7)`,
        willChange: "transform, opacity",
      }}
      animate={{
        y: [0, -14, 4, -8, 0],
        opacity: [0.55, 0.85, 0.4, 0.7, 0.55],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

export default function Hero() {
  const getOneDriveDirectLink = (url: string) => {
    try {
      if (typeof window === "undefined") return url;
      const base64Value = window.btoa(url);
      const cleanBase64Value = base64Value
        .replace(/=/g, "")
        .replace(/\//g, "_")
        .replace(/\+/g, "-");
      return `https://api.onedrive.com/v1.0/shares/u!${cleanBase64Value}/root/content`;
    } catch {
      return url;
    }
  };

  const initialOneDriveUrl = getOneDriveDirectLink(
    "https://1drv.ms/i/c/cf563320cb6cd965/IQBEReboMmR1T4g35OXejlTnAaPAygfCWitpw_l9XBZgduw?e=xlWWpR"
  );

  const [imgSrc, setImgSrc] = useState("/hero-bg.jpg.png");
  const [imgAttempt, setImgAttempt] = useState(0);

  const handleImageError = () => {
    if (imgAttempt === 0) setImageSrcWithLog("/founder.png", 1);
    else if (imgAttempt === 1) setImageSrcWithLog(initialOneDriveUrl, 2);
    else if (imgAttempt === 2) setImageSrcWithLog("/hero-bg.jpg", 3);
    else if (imgAttempt === 3) setImageSrcWithLog("/hero-bg.png", 4);
    else if (imgAttempt === 4) setImageSrcWithLog("/hero-bg.webp", 5);
    else if (imgAttempt === 5) setImageSrcWithLog("/hero-bg.jpeg", 6);
    else
      setImageSrcWithLog(
        "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1200&auto=format&fit=crop",
        7
      );
  };

  const setImageSrcWithLog = (src: string, attempt: number) => {
    setImgSrc(src);
    setImgAttempt(attempt);
  };

  const handleScrollTo = (id: string) => {
    let targetId = id;
    if (id === "contact") {
      const isDesktop = window.innerWidth >= 1024;
      if (!isDesktop) {
        targetId = "contact-mobile";
      }
    }
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  const stats = [
    {
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12.5 3a5.5 5.5 0 0 0-5.5 5.5c0 1.2.4 2.3 1.1 3.2L6 14.8c-.8.8-1.3 1.8-1.5 2.9l-.4 2.3c-.1.6.4 1.1 1 1h2.3c1.1-.2 2.1-.7 2.9-1.5l3.1-3.1c.9.7 2 1.1 3.2 1.1a5.5 5.5 0 0 0 5.5-5.5c0-1.8-1-3.4-2.5-4.3V3h-5.1z" />
          <path d="M14.5 8.5h.1" />
        </svg>
      ),
      value: "10+",  target: 10,  suffix: "+",
      label: "YEARS EXPERIENCE",
    },
    { icon: <Users size={20} strokeWidth={1.8} />,   value: "500+", target: 500, suffix: "+", label: "HAPPY MEMBERS" },
    { icon: <Dumbbell size={20} strokeWidth={1.8} />, value: "25+",  target: 25,  suffix: "+", label: "EQUIPMENTS" },
    { icon: <Trophy size={20} strokeWidth={1.8} />,   value: "100%", target: 100, suffix: "%", label: "DEDICATION" },
  ];

  // Mobile-only stats: updated values, desktop stats above are unchanged
  const mobileStats = [
    {
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12.5 3a5.5 5.5 0 0 0-5.5 5.5c0 1.2.4 2.3 1.1 3.2L6 14.8c-.8.8-1.3 1.8-1.5 2.9l-.4 2.3c-.1.6.4 1.1 1 1h2.3c1.1-.2 2.1-.7 2.9-1.5l3.1-3.1c.9.7 2 1.1 3.2 1.1a5.5 5.5 0 0 0 5.5-5.5c0-1.8-1-3.4-2.5-4.3V3h-5.1z" />
          <path d="M14.5 8.5h.1" />
        </svg>
      ),
      value: "15+", target: 15, suffix: "+",
      label: "YEARS EXPERIENCE",
    },
    { icon: <Users size={20} strokeWidth={1.8} />,   value: "10K",  target: 10000, suffix: "", label: "HAPPY MEMBERS" },
    { icon: <Dumbbell size={20} strokeWidth={1.8} />, value: "25+",  target: 25,  suffix: "+", label: "EQUIPMENTS" },
    { icon: <Trophy size={20} strokeWidth={1.8} />,   value: "100%", target: 100, suffix: "%", label: "DEDICATION" },
  ];

  /* Stats viewport detection — animate in when scrolled into view */
  const statsRef = useRef<HTMLDivElement>(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-60px" });

  // Counters will be triggered individually by statsInView and page load delay

  return (
    <section
      id="home"
      className="relative w-full overflow-x-hidden bg-[#0c0c0e]"
    >
      {/* ─────────────────────────────────────────────────────────────────
          DESKTOP LAYOUT  (lg and above) — unchanged from original
      ───────────────────────────────────────────────────────────────── */}
      <div className="hidden lg:flex flex-row" style={{ minHeight: "100vh" }}>

        {/* LEFT TEXT PANEL — desktop */}
        <div className="relative z-10 flex flex-col justify-center px-16 xl:px-20 pt-28 pb-0 w-[52%] xl:w-[50%]">
          <div className="absolute top-1/3 left-0 w-96 h-96 rounded-full bg-red-600/10 blur-[120px] pointer-events-none" />

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, delay: 0.1 }}
            className="font-display font-black uppercase leading-[0.92] tracking-tight select-none mb-6 text-left text-white"
            style={{ fontSize: "clamp(2.4rem, 6.5vw, 6.5rem)" }}
          >
            <span className="block">TRANSFORM</span>
            <span className="block">
              YOUR <span className="text-red-500 drop-shadow-[0_0_15px_rgba(239,68,68,0.55)]">BODY.</span>
            </span>
            <span className="block">TRANSFORM</span>
            <span className="text-red-500 block drop-shadow-[0_0_20px_rgba(239,68,68,0.65)]">
              YOUR LIFE
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, delay: 0.25 }}
            className="text-stone-400 text-sm font-light leading-relaxed max-w-lg mb-8 text-left"
          >
            Best Gym in Murbad with Professional Equipment &amp; Motivating Environment. Unleash physical peak conditioning with premium strength gears, cardio chambers, and guidance.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.38 }}
            className="flex flex-wrap gap-4 mb-10"
          >
            <button
              onClick={() => handleScrollTo("membership")}
              className="group inline-flex items-center gap-2 px-6 py-3.5 bg-red-600 hover:bg-red-500 text-white font-black text-xs uppercase tracking-widest rounded-lg transition-all duration-300 shadow-[0_0_20px_rgba(220,38,38,0.45)] hover:shadow-[0_0_28px_rgba(220,38,38,0.65)] cursor-pointer"
            >
              JOIN NOW
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>

            <button
              onClick={() => handleScrollTo("contact")}
              className="group inline-flex items-center gap-2.5 px-6 py-3.5 bg-transparent hover:bg-white/5 text-white font-black text-xs uppercase tracking-widest rounded-lg border border-white/20 hover:border-white/40 transition-all duration-300 cursor-pointer"
            >
              <Phone size={13} className="text-red-500 fill-red-500/10 group-hover:scale-110 transition-transform duration-300" />
              CONTACT US
            </button>
          </motion.div>

          {/* Stats bar — 4-col on desktop */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.52 }}
            className="grid grid-cols-4 gap-0 bg-[#0c0c0e]/70 border border-white/10 hover:border-red-500/20 backdrop-blur-md rounded-xl overflow-hidden p-1.5 max-w-[550px] shadow-[0_0_25px_rgba(0,0,0,0.5)] hover:shadow-[0_0_30px_rgba(239,68,68,0.1)] transition-all duration-300 home-stats-container"
          >
            {stats.map((stat, i) => (
              <div
                key={i}
                className={`flex flex-col items-center justify-center gap-1.5 py-4 px-2 text-center ${
                  i < 3 ? "border-r border-white/8" : ""
                }`}
              >
                <div className="text-red-500 drop-shadow-[0_0_6px_rgba(239,68,68,0.6)]">
                  {stat.icon}
                </div>
                <div className="font-display font-black text-white text-3xl leading-none tracking-tight">
                  <AnimatedCounter
                    target={stat.target}
                    suffix={stat.suffix}
                    started={true}
                    delayMs={1270 + (i * 100)}
                  />
                </div>
                <div className="text-[9px] font-black tracking-wider text-stone-400 uppercase leading-none">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* RIGHT IMAGE PANEL — desktop */}
        <div className="relative w-[48%] xl:w-[50%]">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-red-600/60 to-transparent z-10" />
          <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-[#0c0c0e] to-transparent z-10" />

          <motion.div
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <img
              src={imgSrc}
              onError={handleImageError}
              alt="Coach Paresh Hindurao - IFSA Certified Bodybuilder"
              className="w-full h-full object-cover object-center"
              style={{ filter: "brightness(0.72) saturate(1.1) contrast(1.1)" }}
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0c0c0e] via-[#0c0c0e]/10 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0e] via-[#0c0c0e]/10 to-transparent" />
            <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#0c0c0e] to-transparent" />
            <div className="absolute right-0 top-1/4 w-80 h-80 rounded-full bg-white/5 blur-[80px] pointer-events-none mix-blend-screen" />
            <div className="absolute right-12 bottom-1/3 w-96 h-96 rounded-full bg-stone-500/5 blur-[100px] pointer-events-none mix-blend-screen" />
            <div className="absolute bottom-10 left-10 w-1.5 h-1.5 rounded-full bg-red-500/80 shadow-[0_0_8px_#ef4444] animate-pulse pointer-events-none" />
            <div className="absolute bottom-20 left-1/4 w-1 h-1 rounded-full bg-red-500/60 shadow-[0_0_6px_#ef4444] pointer-events-none" />
            <div className="absolute bottom-16 left-1/2 w-1.5 h-1.5 rounded-full bg-red-500/70 shadow-[0_0_8px_#ef4444] animate-pulse pointer-events-none" />
            <div className="absolute bottom-28 right-1/4 w-1 h-1 rounded-full bg-red-500/50 shadow-[0_0_6px_#ef4444] pointer-events-none" />
            <div className="absolute bottom-12 right-10 w-1.5 h-1.5 rounded-full bg-red-500/80 shadow-[0_0_8px_#ef4444] pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-red-700/25 blur-[80px] rounded-full pointer-events-none" />
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-2 h-2/3 bg-gradient-to-b from-red-500/0 via-red-500/30 to-red-500/0 blur-[20px] pointer-events-none" />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator — desktop only */}
      <div
        onClick={() => handleScrollTo("about")}
        className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex-col items-center gap-1 text-stone-500 hover:text-white transition-colors duration-200 cursor-pointer hidden lg:flex"
      >
        <span className="text-[9px] font-bold tracking-widest uppercase">Discover More</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.6 }}
          className="w-1 h-6 bg-red-600 rounded-full"
        />
      </div>

      {/* ═════════════════════════════════════════════════════════════════
          MOBILE LAYOUT  (below lg) — exact reference clone
          Desktop layout above is completely untouched.
      ═════════════════════════════════════════════════════════════════ */}
      <div className="flex flex-col lg:hidden bg-[#0a0a0a]">

        {/* ── ANIMATED RED AMBIENT BACKGROUND GLOW ── */}
        <motion.div
          className="absolute top-16 left-1/2 -translate-x-1/2 pointer-events-none"
          style={{
            width: "280px", height: "280px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(220,38,38,0.09) 0%, transparent 70%)",
            filter: "blur(50px)",
            willChange: "transform",
            zIndex: 0,
          }}
          animate={{ scale: [1, 1.12, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* ── FLOATING RED PARTICLES (5) ── */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
          <Particle x="8%"  y="25%" size={3}   delay={0}   duration={5.5} />
          <Particle x="72%" y="18%" size={2}   delay={1.2} duration={7}   />
          <Particle x="55%" y="55%" size={2.5} delay={2.4} duration={6}   />
          <Particle x="20%" y="65%" size={2}   delay={0.8} duration={8}   />
          <Particle x="85%" y="42%" size={3}   delay={3}   duration={5}   />
        </div>

        {/* ═══════════════════════════════════════════════════════════════
            HERO COMPOSITION — fixed height 520px, overflow hidden
            Athlete is absolutely positioned inside and cannot bleed
            into the stats section below.
        ═══════════════════════════════════════════════════════════════ */}
        <div className="relative" style={{ position: "relative", paddingBottom: "45px", overflow: "visible", zIndex: 5 }}>

          {/* Red glow top-left ambient */}
          <div
            className="absolute pointer-events-none"
            style={{
              top: "34px", left: "-20px",
              width: "200px", height: "200px",
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(220,38,38,0.13) 0%, transparent 70%)",
              filter: "blur(40px)",
              zIndex: 0,
            }}
          />

          {/* ── ATHLETE — absolute inside 520px hero, right side ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.0, ease: "easeOut", delay: 0.05 }}
            className="absolute right-0 pointer-events-none"
            style={{
              top: "42px",
              width: "58%",
              height: "452px",
              zIndex: 1,
              overflow: "hidden",
            }}
          >
            {/* ── DEEP RED HALO — behind head, shoulders, and upper torso, zIndex: 0 ── */}
            <div className="absolute pointer-events-none" style={{
              inset: 0, zIndex: 0,
              background: [
                "radial-gradient(ellipse 45% 35% at 70% 18%, rgba(220,38,38,0.3) 0%, transparent 70%)",
                "radial-gradient(ellipse 55% 35% at 55% 38%, rgba(220,38,38,0.32) 0%, transparent 70%)",
                "radial-gradient(ellipse 50% 40% at 65% 48%, rgba(185,28,28,0.2) 0%, transparent 70%)",
              ].join(", "),
            }} />

            {/* ── BACKGROUND SMOKE — behind shoulders/upper back/arms/torso, zIndex: 0 ── */}
            {/* Smoke 1 — Behind upper back/shoulders */}
            <motion.div className="absolute pointer-events-none" style={{
              top: "10%", left: "10%", width: "80%", height: "45%", zIndex: 0,
              background: "radial-gradient(ellipse 60% 40% at 50% 30%, rgba(130, 130, 135, 0.35) 0%, transparent 80%)",
              filter: "blur(24px)",
              willChange: "transform, opacity",
            }}
              animate={{ x: [-8, 8, -8], y: [-3, 3, -3], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            />
            {/* Smoke 2 — Behind torso/silhouette edges */}
            <motion.div className="absolute pointer-events-none" style={{
              top: "30%", left: "5%", width: "90%", height: "45%", zIndex: 0,
              background: "radial-gradient(ellipse 65% 35% at 40% 50%, rgba(110, 110, 115, 0.3) 0%, transparent 80%)",
              filter: "blur(28px)",
              willChange: "transform, opacity",
            }}
              animate={{ x: [6, -6, 6], y: [4, -4, 4], opacity: [0.25, 0.45, 0.25] }}
              transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            />
            {/* Smoke 3 — Behind left arm / outer silhouette */}
            <motion.div className="absolute pointer-events-none" style={{
              top: "20%", left: "30%", width: "65%", height: "50%", zIndex: 0,
              background: "radial-gradient(ellipse 50% 40% at 65% 45%, rgba(120, 120, 125, 0.32) 0%, transparent 80%)",
              filter: "blur(26px)",
              willChange: "transform, opacity",
            }}
              animate={{ x: [-5, 5, -5], y: [-5, 5, -5], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 13, repeat: Infinity, ease: "easeInOut", delay: 4 }}
            />

            {/* ── PREMIUM CINEMATIC EMBER PARTICLES — behind athlete, zIndex: 0 ── */}
            {/* Ember 1 — Behind right shoulder/arm silhouette */}
            <motion.div className="absolute rounded-full pointer-events-none" style={{
              width: 2.5, height: 2.5, left: "35%", top: "45%", zIndex: 0,
              background: "#ef4444", boxShadow: "0 0 8px 2.5px rgba(239,68,68,0.8)",
              willChange: "transform, opacity",
            }}
              animate={{ y: [0, -35, 5, -20, 0], x: [0, -6, 3, -3, 0], opacity: [0.7, 1, 0.4, 0.9, 0.7] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            />
            {/* Ember 2 — Behind left shoulder/arm silhouette */}
            <motion.div className="absolute rounded-full pointer-events-none" style={{
              width: 3, height: 3, left: "82%", top: "42%", zIndex: 0,
              background: "#ef4444", boxShadow: "0 0 9px 3px rgba(239,68,68,0.75)",
              willChange: "transform, opacity",
            }}
              animate={{ y: [0, -30, 8, -15, 0], x: [0, 5, -4, 2, 0], opacity: [0.6, 0.9, 0.3, 0.8, 0.6] }}
              transition={{ duration: 8.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />
            {/* Ember 3 — Behind upper back */}
            <motion.div className="absolute rounded-full pointer-events-none" style={{
              width: 2, height: 2, left: "58%", top: "35%", zIndex: 0,
              background: "#f87171", boxShadow: "0 0 6px 2px rgba(248,113,113,0.7)",
              willChange: "transform, opacity",
            }}
              animate={{ y: [0, -28, 4, -12, 0], x: [0, -3, 3, -1, 0], opacity: [0.8, 0.4, 0.9, 0.5, 0.8] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.8 }}
            />
            {/* Ember 4 — Behind right waist/silhouette */}
            <motion.div className="absolute rounded-full pointer-events-none" style={{
              width: 3.5, height: 3.5, left: "48%", top: "65%", zIndex: 0,
              background: "#dc2626", boxShadow: "0 0 10px 3px rgba(220,38,38,0.65)",
              filter: "blur(0.5px)",
              willChange: "transform, opacity",
            }}
              animate={{ y: [0, -40, 10, -25, 0], x: [0, -5, 4, -2, 0], opacity: [0.55, 0.85, 0.35, 0.75, 0.55] }}
              transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
            />
            {/* Ember 5 — Behind left waist/torso */}
            <motion.div className="absolute rounded-full pointer-events-none" style={{
              width: 2, height: 2, left: "78%", top: "68%", zIndex: 0,
              background: "#fca5a5", boxShadow: "0 0 5px 2px rgba(252,165,165,0.75)",
              willChange: "transform, opacity",
            }}
              animate={{ y: [0, -22, 5, -11, 0], x: [0, 3, -2, 1, 0], opacity: [0.7, 1, 0.4, 0.8, 0.7] }}
              transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 3.2 }}
            />
            {/* Ember 6 — Background outer left */}
            <motion.div className="absolute rounded-full pointer-events-none" style={{
              width: 2.5, height: 2.5, left: "22%", top: "58%", zIndex: 0,
              background: "#ef4444", boxShadow: "0 0 8px 2.5px rgba(239,68,68,0.8)",
              willChange: "transform, opacity",
            }}
              animate={{ y: [0, -32, 6, -18, 0], x: [0, -4, 2, -2, 0], opacity: [0.65, 0.9, 0.3, 0.8, 0.65] }}
              transition={{ duration: 7.8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            />
            {/* Ember 7 — Background lower center */}
            <motion.div className="absolute rounded-full pointer-events-none" style={{
              width: 4, height: 4, left: "52%", top: "80%", zIndex: 0,
              background: "rgba(239,68,68,0.5)", boxShadow: "0 0 12px 4px rgba(239,68,68,0.4)",
              filter: "blur(1px)",
              willChange: "transform, opacity",
            }}
              animate={{ y: [0, -36, 12, -22, 0], x: [0, 4, -4, 2, 0], opacity: [0.4, 0.7, 0.2, 0.55, 0.4] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 4.1 }}
            />
            {/* Ember 8 — Background deep depth right */}
            <motion.div className="absolute rounded-full pointer-events-none" style={{
              width: 2.5, height: 2.5, left: "72%", top: "78%", zIndex: 0,
              background: "#ef4444", boxShadow: "0 0 8px 2.5px rgba(239,68,68,0.7)",
              willChange: "transform, opacity",
            }}
              animate={{ y: [0, -25, 7, -14, 0], x: [0, -3, 3, -1, 0], opacity: [0.75, 0.4, 0.85, 0.5, 0.75] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            />

            {/* ── ATHLETE IMAGE — cinematic filter boost, zIndex: 1 ── */}
            <img
              src={imgSrc}
              onError={handleImageError}
              alt="Coach Paresh Hindurao - IFSA Certified Bodybuilder"
              className="w-full h-full"
              style={{
                position: "relative",
                zIndex: 1,
                objectFit: "cover",
                objectPosition: "center top",
                transform: "scale(1)",
                transformOrigin: "top center",
                filter: "brightness(0.92) saturate(1.3) contrast(1.18)",
                maskImage: [
                  "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.65) 20%, black 40%)",
                  "linear-gradient(to bottom, black 0%, black 85%, transparent 100%)",
                ].join(", "),
                WebkitMaskImage: [
                  "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.65) 20%, black 40%)",
                  "linear-gradient(to bottom, black 0%, black 85%, transparent 100%)",
                ].join(", "),
                WebkitMaskComposite: "source-in",
                maskComposite: "intersect",
                willChange: "transform, opacity",
              }}
              referrerPolicy="no-referrer"
            />
          </motion.div>

          {/* ── LEFT TEXT COLUMN — relative, top 42px, left 0 ── */}
          <div className="relative px-4" style={{ top: "42px", marginTop: "50px", left: 0, width: "53%", zIndex: 10 }}>

            {/* ── HEADING ── */}
            <h1
              className="font-display font-black uppercase text-white select-none"
              style={{ fontSize: "clamp(1.76rem, 9.3vw, 2.76rem)", lineHeight: 0.92, letterSpacing: "-0.03em", paddingTop: "2px" }}
            >
              {/* Line 1: TRANSFORM */}
              <span className="block" style={{ overflow: "visible", paddingTop: "3px" }}>
                <motion.span
                  className="block"
                  variants={lineReveal}
                  initial="hidden"
                  animate="visible"
                  custom={0.15}
                >
                  TRANSFORM
                </motion.span>
              </span>

              {/* Line 2: YOUR BODY. */}
              <span className="block" style={{ overflow: "visible" }}>
                <motion.span
                  className="block"
                  variants={lineReveal}
                  initial="hidden"
                  animate="visible"
                  custom={0.28}
                >
                  YOUR{" "}
                  <motion.span
                    className="text-red-500"
                    variants={redGlowPulse}
                    initial="hidden"
                    animate="visible"
                    style={{ display: "inline", willChange: "text-shadow" }}
                  >
                    BODY.
                  </motion.span>
                </motion.span>
              </span>

              {/* Line 3: TRANSFORM */}
              <span className="block" style={{ overflow: "visible" }}>
                <motion.span
                  className="block"
                  variants={lineReveal}
                  initial="hidden"
                  animate="visible"
                  custom={0.41}
                >
                  TRANSFORM
                </motion.span>
              </span>

              {/* Line 4: YOUR LIFE */}
              <span className="block" style={{ overflow: "visible" }}>
                <motion.span
                  className="block"
                  variants={lineReveal}
                  initial="hidden"
                  animate="visible"
                  custom={0.54}
                >
                  <motion.span
                    className="block text-red-500"
                    variants={redGlowPulse}
                    initial="hidden"
                    animate="visible"
                    style={{ willChange: "text-shadow" }}
                  >
                    YOUR LIFE
                  </motion.span>
                </motion.span>
              </span>
            </h1>

            {/* ── DESCRIPTION ── */}
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.72}
              className="font-light leading-relaxed mt-3"
              style={{ fontSize: "clamp(9.5px, 2.55vw, 11.5px)", color: "#B3B3B3" }}
            >
              Best Gym in Murbad with Professional Equipment &amp; Motivating Environment.
              Unleash peak conditioning with premium gears, cardio chambers, and expert guidance.
            </motion.p>

            {/* ── BUTTONS ── */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.88}
              className="flex flex-col mt-[32px]"
              style={{ display: "flex", flexDirection: "column", gap: "18px", marginBottom: "45px", position: "relative", zIndex: 20 }}
            >
              {/* JOIN NOW — red pill */}
              <motion.button
                onClick={() => handleScrollTo("membership")}
                className="w-full inline-flex items-center justify-center gap-2 py-3 bg-red-600 text-white font-black text-[11px] uppercase tracking-widest rounded-full cursor-pointer"
                style={{ willChange: "transform, box-shadow", boxShadow: "0 0 18px rgba(220,38,38,0.45)" }}
                whileHover={{
                  backgroundColor: "#ef4444",
                  boxShadow: "0 0 28px rgba(220,38,38,0.7)",
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 1.03, boxShadow: "0 0 32px rgba(220,38,38,0.8)", transition: { duration: 0.1 } }}
              >
                JOIN NOW
                <ArrowRight size={12} className="shrink-0" />
              </motion.button>

              {/* CONTACT — black border pill */}
              <motion.button
                onClick={() => handleScrollTo("contact")}
                className="w-full inline-flex items-center justify-center gap-2 py-3 bg-black border border-white/25 text-white font-black text-[11px] uppercase tracking-widest rounded-full cursor-pointer"
                style={{ willChange: "transform, box-shadow", marginBottom: "0px" }}
                whileHover={{
                  borderColor: "rgba(239,68,68,0.55)",
                  boxShadow: "0 0 16px rgba(239,68,68,0.2)",
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 1.02, transition: { duration: 0.1 } }}
              >
                <Phone size={11} className="text-red-500 shrink-0" />
                CONTACT
              </motion.button>
            </motion.div>
          </div>
        </div>

        {/* ── STATS — solid bg, z-index above hero so athlete never bleeds through ── */}
        <div ref={statsRef} className="px-4 pb-6 home-stats-container" style={{ position: "relative", zIndex: 10, background: "#050505", marginTop: "0px", paddingTop: "0px" }}>
          <div className="grid grid-cols-2" style={{ gap: "24px" }}>
          {mobileStats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 22 }}
              animate={statsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
              className="stat-card-glow flex flex-col items-center justify-center gap-2 py-5 px-3 rounded-2xl bg-[#111111] text-center"
              style={{ willChange: "transform, opacity" }}
            >
              <div className="text-red-500 drop-shadow-[0_0_8px_rgba(239,68,68,0.65)]">
                {stat.icon}
              </div>
              {/* Counter: animates 0 → target once counterStarted fires */}
              <div className="font-display font-black text-white leading-none tracking-tight" style={{ fontSize: "clamp(1.7rem, 8.5vw, 2.2rem)" }}>
                {stat.label === "HAPPY MEMBERS" ? (
                  <span>10K</span>
                ) : (
                  <AnimatedCounter
                    target={stat.target}
                    suffix={stat.suffix}
                    started={statsInView}
                    delayMs={500 + (i * 100)}
                  />
                )}
              </div>
              <div className="text-[9px] font-bold tracking-widest text-stone-500 uppercase leading-tight">
                {stat.label}
              </div>
            </motion.div>
          ))}
          </div>
        </div>

      </div>
    </section>
  );
}
