import { useState } from "react";
import { motion } from "motion/react";
import { Star, ArrowRight, Phone, Users, Dumbbell, Trophy } from "lucide-react";

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
    const element = document.getElementById(id);
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
      value: "10+",
      label: "YEARS EXPERIENCE",
    },
    {
      icon: <Users size={20} strokeWidth={1.8} />,
      value: "500+",
      label: "HAPPY MEMBERS",
    },
    {
      icon: <Dumbbell size={20} strokeWidth={1.8} />,
      value: "25+",
      label: "EQUIPMENTS",
    },
    {
      icon: <Trophy size={20} strokeWidth={1.8} />,
      value: "100%",
      label: "DEDICATION",
    },
  ];

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

          {/* Rating badge */}
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="inline-flex self-start items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-black/60 border border-white/10 backdrop-blur-md mb-6 shadow-xl"
          >
            <div className="flex items-center gap-1 text-yellow-400">
              <Star size={12} className="fill-yellow-400 text-yellow-400" />
              <span className="text-xs font-black text-white leading-none">4.8</span>
            </div>
            <span className="h-3 w-px bg-white/20 mx-1" />
            <span className="text-stone-300 text-[10px] font-bold tracking-wider uppercase leading-none">
              10 GOOGLE REVIEWS
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 mx-1 animate-pulse" />
            <span className="text-[10px] text-red-500 font-bold tracking-wider uppercase leading-none">
              MURBAD'S BEST GYM
            </span>
          </motion.div>

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
            className="grid grid-cols-4 gap-0 bg-[#0c0c0e]/70 border border-white/10 hover:border-red-500/20 backdrop-blur-md rounded-xl overflow-hidden p-1.5 max-w-[550px] shadow-[0_0_25px_rgba(0,0,0,0.5)] hover:shadow-[0_0_30px_rgba(239,68,68,0.1)] transition-all duration-300"
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
                  {stat.value}
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

      {/* ─────────────────────────────────────────────────────────────────
          MOBILE LAYOUT  (below lg) — exact reference clone
          Desktop layout above is completely untouched.
      ───────────────────────────────────────────────────────────────── */}
      <div className="flex flex-col lg:hidden bg-[#0a0a0a]">

        {/* ── TRUST BAR ── */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mx-4 mt-[78px]"
        >
          <div className="flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md w-full">
            <div className="flex items-center gap-1 shrink-0">
              <Star size={11} className="fill-yellow-400 text-yellow-400" />
              <span className="text-[11px] font-black text-white leading-none">4.8</span>
            </div>
            <span className="h-3 w-px bg-white/20 shrink-0" />
            <span className="text-stone-300 text-[10px] font-bold tracking-wide uppercase leading-none shrink-0">
              10 GOOGLE REVIEWS
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse shrink-0" />
            <span className="text-[10px] text-red-400 font-bold tracking-wide uppercase leading-none shrink-0">
              MURBAD'S BEST GYM
            </span>
          </div>
        </motion.div>

        {/* ────────────────────────────────────────────────────────
            HERO: true 2-column flex — left content | right image
            items-stretch keeps image height = left column height
        ──────────────────────────────────────────────────────── */}
        <div className="flex flex-row items-stretch px-4 pt-4 pb-0 overflow-hidden">

          {/* LEFT COLUMN — 55% — heading + description + buttons */}
          <div className="flex flex-col pr-3 relative z-10" style={{ width: "55%" }}>

            {/* Subtle red ambient glow behind text only */}
            <div className="absolute -top-6 -left-4 w-48 h-48 rounded-full bg-red-600/10 blur-[70px] pointer-events-none z-0" />

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.65, delay: 0.2 }}
              className="font-display font-black uppercase tracking-tight text-white select-none relative z-10"
              style={{ fontSize: "clamp(1.95rem, 10.2vw, 3rem)", lineHeight: 0.88 }}
            >
              <span className="block">TRANSFORM</span>
              <span className="block">
                YOUR{" "}
                <span className="text-red-500 drop-shadow-[0_0_12px_rgba(239,68,68,0.6)]">BODY.</span>
              </span>
              <span className="block">TRANSFORM</span>
              <span className="block text-red-500 drop-shadow-[0_0_14px_rgba(239,68,68,0.7)]">YOUR LIFE</span>
            </motion.h1>

            {/* Description — directly below heading */}
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.35 }}
              className="text-stone-400 font-light leading-relaxed relative z-10 mt-4"
              style={{ fontSize: "clamp(10px, 2.7vw, 12px)" }}
            >
              Best Gym in Murbad with Professional Equipment &amp; Motivating Environment.
              Unleash peak conditioning with premium gears, cardio chambers, and expert guidance.
            </motion.p>

            {/* Buttons — stacked vertically, full width of left column */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.48 }}
              className="flex flex-col gap-3 mt-5 mb-5 relative z-10"
            >
              {/* JOIN NOW — red, full column width */}
              <button
                onClick={() => handleScrollTo("membership")}
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 bg-red-600 hover:bg-red-500 active:bg-red-700 text-white font-black text-xs uppercase tracking-widest rounded-xl transition-all duration-300 shadow-[0_0_18px_rgba(220,38,38,0.45)] cursor-pointer"
              >
                JOIN NOW
                <ArrowRight size={13} className="shrink-0" />
              </button>

              {/* CONTACT — dark with border, full column width */}
              <button
                onClick={() => handleScrollTo("contact")}
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 bg-black border border-white/20 hover:border-red-500/30 text-white font-black text-xs uppercase tracking-widest rounded-xl transition-all duration-300 cursor-pointer"
              >
                <Phone size={12} className="text-red-500 shrink-0" />
                CONTACT
              </button>
            </motion.div>
          </div>

          {/* RIGHT COLUMN — 45% — athlete image, stretches to left-column height */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.18 }}
            className="relative flex-shrink-0 overflow-hidden"
            style={{ width: "45%" }}
          >
            {/* Subtle red glow ONLY — no heavy overlay */}
            <div className="absolute inset-0 bg-red-700/8 pointer-events-none z-10" />

            <img
              src={imgSrc}
              onError={handleImageError}
              alt="Coach Paresh Hindurao - IFSA Certified Bodybuilder"
              className="w-full h-full object-cover object-top"
              style={{ filter: "brightness(0.8) saturate(1.1) contrast(1.08)" }}
              referrerPolicy="no-referrer"
            />

            {/* Left-edge fade — softly merges athlete into black background */}
            <div
              className="absolute inset-0 pointer-events-none z-20"
              style={{
                background: "linear-gradient(to right, #0a0a0a 0%, rgba(10,10,10,0.45) 28%, transparent 65%)",
              }}
            />
            {/* Bottom fade */}
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#0a0a0a] to-transparent pointer-events-none z-20" />
            {/* Top fade */}
            <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-[#0a0a0a]/35 to-transparent pointer-events-none z-20" />

            {/* Ember sparks */}
            <div className="absolute bottom-10 right-5 w-1.5 h-1.5 rounded-full bg-red-500/80 shadow-[0_0_8px_#ef4444] animate-pulse pointer-events-none z-30" />
            <div className="absolute bottom-16 right-10 w-1 h-1 rounded-full bg-red-500/60 shadow-[0_0_6px_#ef4444] pointer-events-none z-30" />
          </motion.div>
        </div>

        {/* ── STATS — 2×2 dark cards ── */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="px-4 pt-5 pb-10"
        >
          <div className="grid grid-cols-2 gap-3">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.6 + i * 0.07 }}
                className="flex flex-col items-center justify-center gap-2 py-5 px-3 rounded-2xl bg-[#111111] border border-white/8 text-center"
              >
                <div className="text-red-500 drop-shadow-[0_0_8px_rgba(239,68,68,0.65)]">
                  {stat.icon}
                </div>
                <div className="font-display font-black text-white text-2xl leading-none tracking-tight">
                  {stat.value}
                </div>
                <div className="text-[9px] font-bold tracking-widest text-stone-500 uppercase leading-tight">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
