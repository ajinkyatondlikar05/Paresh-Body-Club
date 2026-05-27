import { motion } from "motion/react";
import { CheckCircle2, Award, Zap, HeartHandshake, Users, CalendarDays, Target, Dumbbell } from "lucide-react";
import { ABOUT_FEATURES } from "../data";

const STATS = [
  { value: "500+", label: "Happy Members",            icon: Users },
  { value: "5+",   label: "Years Impacting Lives",    icon: CalendarDays },
  { value: "100%", label: "Result Oriented",          icon: Target },
  { value: "15+",  label: "Modern Equipment Stations",icon: Dumbbell },
];

export default function About() {
  const whyChooseUs = [
    {
      title: "State-Of-The-Art Biomechanics",
      description: "Every machine and angle is strictly inspected for organic joint tracking and optimal hypertrophy range.",
      icon: Award,
    },
    {
      title: "Supervised & Safe Environment",
      description: "Our certified trainers prevent posture deviations, ensuring absolute safety for both seniors and women.",
      icon: HeartHandshake,
    },
    {
      title: "Passionate Local Community",
      description: "Work out alongside committed weight lifters who respect your space, push your goals, and share the vibes.",
      icon: Zap,
    },
  ];

  return (
    <section id="about" className="relative overflow-hidden">

      {/* ══════════════════════════════════════════════
          HERO BANNER — full-width background image
      ══════════════════════════════════════════════ */}
      <div
        className="relative w-full flex flex-col justify-between overflow-hidden"
        style={{ minHeight: "70vh" }}
      >
        {/* Cinematic Background Image with CSS Filter (Slightly Darkened) */}
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            backgroundImage: "url('/about-bg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundAttachment: "scroll",
            filter: "brightness(0.75)",
          }}
        />

        {/* Subtle black overlay only */}
        <div className="absolute inset-0 bg-black/40 z-0 pointer-events-none" />

        {/* Subtle left-side dark overlay to guarantee text readability */}
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

            {/* Left-side text */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75 }}
              className="w-full relative"
            >
              {/* Soft red ambient glow behind text for premium look */}
              <div className="absolute -top-16 -left-16 w-80 h-80 rounded-full bg-red-600/10 blur-[100px] pointer-events-none z-0" />

              <div className="relative z-10">
                <h2
                  className="font-display font-black text-white uppercase tracking-tight leading-[0.9] mb-4"
                  style={{ fontSize: "clamp(2rem, 8vw, 4.8rem)" }}
                >
                  AT OUR CORE
                </h2>

                {/* Red underline */}
                <div className="w-20 h-[3px] bg-red-500 mb-6" />

                <p className="text-stone-200 font-sans text-sm leading-relaxed mb-5 font-light max-w-xl">
                  PARESH BODY CLUB MURBAD is one of the most trusted fitness destinations in
                  Murbad. The gym provides a motivating environment, quality workout equipment,
                  strength training facilities, cardio training, and expert guidance for fitness enthusiasts.
                </p>

                <div className="border-l-2 border-red-500 pl-4 max-w-xl">
                  <p className="text-stone-450 font-sans text-xs sm:text-sm leading-relaxed font-light">
                    Whether you are a local beginner stepping into the weights room for the first time,
                    or an elite bodybuilder aiming for stage progression, Master Paresh and his team
                    offer scientifically structured regimes to turn aspiration into heavy concrete results.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* ── RIGHT: Motivational Quote ── */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.85, delay: 0.2 }}
              className="flex flex-col items-center lg:items-end justify-center text-center lg:text-right select-none pointer-events-none w-full mt-8 lg:mt-0 relative"
            >
              {/* Soft red ambient glow behind quote */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-red-600/5 blur-[100px] pointer-events-none z-0" />

              <div
                className="font-display font-black uppercase leading-[1.05] tracking-tight relative z-10 text-center lg:text-right"
                style={{ fontSize: "clamp(1.2rem, 5vw, 4.2rem)", opacity: 0.95 }}
              >
                <span className="block text-stone-300 drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">TODAY IS THE DAY</span>
                <span className="block text-stone-300 drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">BECAUSE TODAY</span>
                <span className="block text-stone-300 drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">IS YOUR</span>
                <span
                  className="block text-red-650 drop-shadow-[0_0_30px_rgba(239,68,68,0.65)] text-red-500"
                  style={{ fontSize: "clamp(1.8rem, 5vw, 5.2rem)" }}
                >
                  DAY.
                </span>
              </div>
            </motion.div>
          </div>

          {/* ── Stats Bar — pinned at bottom of banner ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="relative z-10 w-full mt-10"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
              {STATS.map((stat, i) => {
                const IconComp = stat.icon;
                return (
                  <div
                    key={i}
                    className="flex flex-col items-center justify-center p-6 text-center rounded-xl bg-black/45 border border-white/10 backdrop-blur-sm relative overflow-hidden group hover:border-red-500/30 transition-all duration-300"
                  >
                    {/* Red circle icon */}
                    <div className="w-12 h-12 rounded-full border border-red-500/60 bg-red-600/10 flex items-center justify-center mb-4 group-hover:bg-red-600/20 transition-all duration-300">
                      <IconComp size={20} className="text-red-500" />
                    </div>
                    
                    <div>
                      <span className="block font-display font-black text-3xl sm:text-4xl text-white leading-none">
                        {stat.value}
                      </span>
                      <span className="block text-stone-300 font-sans text-[10px] font-bold uppercase tracking-widest mt-2 leading-tight">
                        {stat.label.toUpperCase()}
                      </span>
                    </div>

                    {/* Red underline at the bottom of the card */}
                    <div className="w-8 h-[2px] bg-red-500 mt-4 mx-auto rounded-full" />
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════
          FEATURES SECTION — dark background below
      ══════════════════════════════════════════════ */}
      <div className="bg-[#0a0a0c] py-24">
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

    </section>
  );
}
