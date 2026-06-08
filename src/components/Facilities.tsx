import { useState, useEffect } from "react";
import { motion } from "motion/react";
import {
  Flame,
  Dumbbell,
  Zap,
  Heart,
  Shield,
  Users,
  Droplets,
  Music,
  ChevronRight,
  Snowflake,
  Cctv
} from "lucide-react";
import { FACILITIES } from "../data";

// Map icon string names to actual Lucide Icon elements for typings stability 
const iconMap: { [key: string]: any } = {
  Flame,
  Dumbbell,
  Zap,
  Heart,
  Shield,
  Users,
  Droplets,
  Music,
  Snowflake,
  Cctv,
};

export default function Facilities() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Conditioned Animation Props for Mobile Section heading
  const headingSpanProps = isMobile ? {
    initial: { opacity: 0, y: -12 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5, ease: "easeOut" }
  } : {};

  const headingTitleProps = isMobile ? {
    initial: { opacity: 0, y: 15, textShadow: "0 0 0px rgba(239, 68, 68, 0)" },
    whileInView: { opacity: 1, y: 0, textShadow: "0 0 12px rgba(239, 68, 68, 0.45)" },
    viewport: { once: true },
    transition: { duration: 0.6, ease: "easeOut", delay: 0.1 }
  } : {};

  const headingSubtitleProps = isMobile ? {
    initial: { opacity: 0, y: 10 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5, ease: "easeOut", delay: 0.2 }
  } : {};

  // Conditioned Card Props for Scroll Fade-up Stagger
  const cardProps = (index: number) => isMobile ? {
    initial: { opacity: 0, y: 45, scale: 0.96 },
    whileInView: { opacity: 1, y: 0, scale: 1 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: index * 0.15 }
  } : {};

  // Conditioned Icon Props for Soft Red Pulse & Interaction Scale
  const iconWrapperProps = (index: number) => isMobile ? {
    animate: {
      boxShadow: [
        "0 0 4px rgba(239, 68, 68, 0.15)",
        "0 0 14px rgba(239, 68, 68, 0.45)",
        "0 0 4px rgba(239, 68, 68, 0.15)"
      ],
      borderColor: [
        "rgba(239, 68, 68, 0.25)",
        "rgba(239, 68, 68, 0.65)",
        "rgba(239, 68, 68, 0.25)"
      ]
    },
    transition: {
      duration: 2.5,
      repeat: Infinity,
      ease: "easeInOut",
      delay: index * 0.2
    },
    whileHover: { scale: 1.06 },
    whileTap: { scale: 1.06 }
  } : {};

  return (
    <section
      id="facilities"
      className="py-24 lg:pt-14 bg-[#0c0c0e] lg:bg-black relative overflow-hidden"
    >
      {/* Visual lighting background panels */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-red-500/20 to-transparent"></div>
      <div className="absolute -top-40 left-1/4 w-80 h-80 rounded-full bg-red-600/5 blur-[120px] pointer-events-none"></div>

      {/* Subtle floating red particles/embers behind cards (mobile-only) */}
      {isMobile && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          <div className="absolute left-[10%] w-[1.5px] h-[1.5px] bg-red-500/10 rounded-full blur-[0.5px] animate-ember-1" />
          <div className="absolute left-[35%] w-[2px] h-[2px] bg-red-500/8 rounded-full blur-[1px] animate-ember-2" style={{ animationDelay: '2s' }} />
          <div className="absolute left-[65%] w-[1.5px] h-[1.5px] bg-red-500/12 rounded-full blur-[0.5px] animate-ember-3" style={{ animationDelay: '4s' }} />
          <div className="absolute left-[85%] w-[1.5px] h-[1.5px] bg-red-500/10 rounded-full blur-[0.5px] animate-ember-1" style={{ animationDelay: '6s' }} />
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header Block */}
        <div className="text-center mb-16">
          <motion.span
            {...headingSpanProps}
            className="text-red-500 font-display font-black uppercase text-xs sm:text-sm tracking-widest block mb-2"
          >
            World-Class Infrastructure
          </motion.span>
          <motion.h2
            {...headingTitleProps}
            className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-white uppercase tracking-tight"
          >
            Premium Gym <span className="text-red-500">Facilities</span>
          </motion.h2>
          <motion.p
            {...headingSubtitleProps}
            className="text-stone-400 font-sans text-xs sm:text-sm max-w-xl mx-auto mt-3 leading-relaxed"
          >
            Engineered with extreme care to maintain hygiene, motivation, and professional lifting continuity 24/7.
          </motion.p>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {FACILITIES.map((fac, idx) => {
            const IconComponent = iconMap[fac.iconName] || Dumbbell;
            return (
              <motion.div
                key={fac.id}
                {...cardProps(idx)}
                className="group relative bg-[#0f0f12] hover:bg-[#141418] border border-white/5 hover:border-red-500/20 p-8 rounded-xl transition-all duration-300 shadow-[0_4px_25px_rgba(0,0,0,0.4)] hover:-translate-y-1.5 flex flex-col justify-between"
              >
                {/* Glowing Background Overlay Spot on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-600/0 via-red-600/0 to-red-600/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>

                {/* Soft border glow sweep when card appears */}
                {isMobile && (
                  <motion.div
                    className="absolute inset-0 rounded-xl pointer-events-none z-0 border border-red-500/25"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{
                      duration: 1.8,
                      delay: (idx * 0.15) + 0.5,
                      ease: "easeInOut"
                    }}
                  />
                )}

                <div className="relative z-10">
                  {/* Icon Block with Ring Flare */}
                  <div className="relative mb-6 inline-block">
                    <motion.div
                      {...iconWrapperProps(idx)}
                      className="p-4 bg-stone-900 border border-white/5 rounded-xl text-red-500 group-hover:text-white group-hover:bg-red-600 transition-all duration-300 relative z-10"
                    >
                      <IconComponent size={24} className="stroke-[1.5]" />
                    </motion.div>
                    <div className="absolute inset-0 bg-red-500 rounded-xl blur-md scale-75 opacity-0 group-hover:opacity-30 transition-opacity duration-300 pointer-events-none"></div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-display font-black text-lg text-white uppercase tracking-wider mb-2 group-hover:text-red-500 transition-colors duration-200">
                    {fac.title}
                  </h3>
                  <p className="text-stone-400 font-sans text-xs sm:text-sm leading-relaxed font-light">
                    {fac.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
